import * as ts from 'typescript';
import type { Plugin } from 'vite';

const ANGULAR_DECORATOR_RE =
  /@(?:Component|Directive|Pipe|Injectable|NgModule)\b/;
const ANGULAR_COMPONENT_RESOURCES_RE = /\b(?:templateUrl|styleUrls|styleUrl)\b/;

function asRawImport(specifier: string): string {
  if (specifier.includes('?')) {
    return `${specifier}&raw`;
  }
  return `${specifier}?raw`;
}

function getPropertyNameText(name: ts.PropertyName): string | undefined {
  if (ts.isIdentifier(name)) return name.text;
  if (ts.isStringLiteralLike(name)) return name.text;
  if (ts.isNumericLiteral(name)) return name.text;
  return undefined;
}

function isComponentDecoratorExpression(
  expression: ts.LeftHandSideExpression,
): boolean {
  if (ts.isIdentifier(expression)) {
    return expression.text === 'Component';
  }
  if (ts.isPropertyAccessExpression(expression)) {
    return expression.name.text === 'Component';
  }
  return false;
}

function createAngularComponentResourceTransformer(): ts.TransformerFactory<ts.SourceFile> {
  return (context) => {
    const factory = context.factory;
    const resourceImports: ts.ImportDeclaration[] = [];
    let importCounter = 0;

    function createResourceImport(specifier: string): ts.Identifier {
      const localName = factory.createIdentifier(
        `__vitest_ng_resource__${importCounter++}`,
      );
      resourceImports.push(
        factory.createImportDeclaration(
          undefined,
          factory.createImportClause(false, localName, undefined),
          factory.createStringLiteral(asRawImport(specifier)),
        ),
      );
      return localName;
    }

    function updateComponentMetadata(
      metadata: ts.ObjectLiteralExpression,
    ): ts.ObjectLiteralExpression {
      const updatedProps: ts.ObjectLiteralElementLike[] = [];
      const externalStyleImports: ts.Expression[] = [];
      let stylesPropertyIndex: number | undefined;

      for (const prop of metadata.properties) {
        if (!ts.isPropertyAssignment(prop) || ts.isComputedPropertyName(prop.name)) {
          updatedProps.push(prop);
          continue;
        }

        const propName = getPropertyNameText(prop.name);
        if (!propName) {
          updatedProps.push(prop);
          continue;
        }

        if (propName === 'templateUrl') {
          if (ts.isStringLiteralLike(prop.initializer) && prop.initializer.text) {
            const templateImport = createResourceImport(prop.initializer.text);
            updatedProps.push(
              factory.createPropertyAssignment(
                factory.createIdentifier('template'),
                templateImport,
              ),
            );
            continue;
          }
        }

        if (propName === 'styleUrl') {
          if (ts.isStringLiteralLike(prop.initializer) && prop.initializer.text) {
            externalStyleImports.push(createResourceImport(prop.initializer.text));
            continue;
          }
        }

        if (propName === 'styleUrls') {
          if (ts.isArrayLiteralExpression(prop.initializer)) {
            for (const element of prop.initializer.elements) {
              if (ts.isStringLiteralLike(element) && element.text) {
                externalStyleImports.push(createResourceImport(element.text));
              }
            }
            continue;
          }
        }

        if (propName === 'styles') {
          stylesPropertyIndex = updatedProps.length;
          updatedProps.push(prop);
          continue;
        }

        updatedProps.push(prop);
      }

      if (externalStyleImports.length > 0) {
        if (stylesPropertyIndex === undefined) {
          updatedProps.push(
            factory.createPropertyAssignment(
              factory.createIdentifier('styles'),
              factory.createArrayLiteralExpression(externalStyleImports),
            ),
          );
        } else {
          const existingProp = updatedProps[stylesPropertyIndex];
          if (ts.isPropertyAssignment(existingProp)) {
            const existingInitializer = existingProp.initializer;
            const mergedInitializer = ts.isArrayLiteralExpression(existingInitializer)
              ? factory.updateArrayLiteralExpression(existingInitializer, [
                  ...existingInitializer.elements,
                  ...externalStyleImports,
                ])
              : ts.isStringLiteralLike(existingInitializer)
                ? factory.createArrayLiteralExpression([
                    existingInitializer,
                    ...externalStyleImports,
                  ])
                : factory.createArrayLiteralExpression([
                    factory.createSpreadElement(existingInitializer),
                    ...externalStyleImports,
                  ]);

            updatedProps[stylesPropertyIndex] = factory.updatePropertyAssignment(
              existingProp,
              existingProp.name,
              mergedInitializer,
            );
          }
        }
      }

      return factory.updateObjectLiteralExpression(metadata, updatedProps);
    }

    function visitDecorator(decorator: ts.Decorator): ts.Decorator {
      if (!ts.isCallExpression(decorator.expression)) {
        return decorator;
      }

      const call = decorator.expression;
      if (!isComponentDecoratorExpression(call.expression)) {
        return decorator;
      }

      if (
        call.arguments.length !== 1 ||
        !ts.isObjectLiteralExpression(call.arguments[0])
      ) {
        return decorator;
      }

      const updatedMetadata = updateComponentMetadata(call.arguments[0]);
      return factory.updateDecorator(
        decorator,
        factory.updateCallExpression(call, call.expression, call.typeArguments, [
          updatedMetadata,
        ]),
      );
    }

    function visit(node: ts.Node): ts.Node {
      if (ts.isClassDeclaration(node)) {
        const decorators = ts.getDecorators(node);
        if (!decorators || decorators.length === 0) {
          return node;
        }

        const updatedDecorators = decorators.map(visitDecorator);
        return factory.updateClassDeclaration(
          node,
          [...updatedDecorators, ...(ts.getModifiers(node) ?? [])],
          node.name,
          node.typeParameters,
          node.heritageClauses,
          node.members,
        );
      }

      return ts.visitEachChild(node, visit, context);
    }

    return (file) => {
      const updatedFile = ts.visitEachChild(file, visit, context);
      if (resourceImports.length === 0) {
        return updatedFile;
      }
      return factory.updateSourceFile(updatedFile, [
        ...resourceImports,
        ...updatedFile.statements,
      ]);
    };
  };
}

export function angularJitForVitestPlugin(): Plugin {
  return {
    name: 'angular-jit-for-vitest',
    enforce: 'pre',
    transform(code, id) {
      if (id.includes('node_modules')) return;
      if (!id.endsWith('.ts') && !id.endsWith('.mts')) return;

      const needsDecoratorMetadata = ANGULAR_DECORATOR_RE.test(code);
      const needsResourceTransform = ANGULAR_COMPONENT_RESOURCES_RE.test(code);
      if (!needsDecoratorMetadata && !needsResourceTransform) return;

      const result = ts.transpileModule(code, {
        fileName: id,
        compilerOptions: {
          target: ts.ScriptTarget.ES2022,
          module: ts.ModuleKind.ESNext,
          moduleResolution: ts.ModuleResolutionKind.Bundler,
          sourceMap: true,
          inlineSources: true,
          importHelpers: true,
          experimentalDecorators: true,
          emitDecoratorMetadata: true,
          useDefineForClassFields: false,
        },
        transformers: needsResourceTransform
          ? {
              before: [
                createAngularComponentResourceTransformer(),
              ],
            }
          : undefined,
      });

      return {
        code: result.outputText,
        map: result.sourceMapText ? JSON.parse(result.sourceMapText) : undefined,
      };
    },
  };
}
