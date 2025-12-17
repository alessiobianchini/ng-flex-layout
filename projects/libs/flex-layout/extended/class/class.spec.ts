/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CommonModule, isPlatformServer } from '@angular/common';
import { Component, ComponentRef, inject, PLATFORM_ID, runInInjectionContext } from '@angular/core';
import {
    BreakPointRegistry,
    BREAKPOINTS,
    DEFAULT_BREAKPOINTS,
    DEFAULT_CONFIG,
    LAYOUT_CONFIG,
    ɵMatchMedia as MatchMedia,
    ɵMockMatchMedia as MockMatchMedia,
    ɵMockMatchMediaProvider as MockMatchMediaProvider
} from 'ng-flex-layout/core';
import { DefaultClassDirective } from 'ng-flex-layout/extended';

import { expectNativeEl, makeCreateTestComponent, queryFor } from 'ng-flex-layout/_private-utils/testing';
import { describe, expect, it } from 'vitest';

const MATERIAL_PRIMARY_CLASS = 'mat-primary';

@Component({
    selector: 'test-class-api',
    template: '<span>PlaceHolder</span>',
    standalone: true,
    imports: [CommonModule, DefaultClassDirective]
})
class TestClassComponent {
    hasX1 = true;
    hasX2 = true;
    hasX3 = true;
    formButtonXs = true;
}

let fixture: ComponentRef<any>;
let mediaController: MockMatchMedia;
let platformId: Object;

const createTestComponent = makeCreateTestComponent([
    { provide: BREAKPOINTS, useValue: DEFAULT_BREAKPOINTS },
    { provide: BreakPointRegistry, useClass: BreakPointRegistry },
    { provide: LAYOUT_CONFIG, useValue: DEFAULT_CONFIG },
    { provide: PLATFORM_ID, useValue: 'browser' },
    MockMatchMediaProvider
]);

const createTestComponentWithDeps = async (template: string) => {
    fixture = await createTestComponent(template);
    runInInjectionContext(fixture.injector, () => {
        mediaController = inject(MatchMedia) as MockMatchMedia;
    });
};

describe('class directive', () => {
    ['xs', 'sm', 'md', 'lg'].forEach(mq => {
        const selector = `ngClass-${mq}`;
        it(`should apply '${selector}' with '${mq}' media query`, async () => {
            await createTestComponentWithDeps(`<div ngClass.${mq}="${selector}"></div>`);
            mediaController.activate(mq);
            expectNativeEl(fixture).toHaveCssClass(selector);
        });
    });

    it('should merge `ngClass` values with any `class` values', async () => {
        await createTestComponentWithDeps('<div class="class0" ngClass="class1 class2"></div>');
        expectNativeEl(fixture).toHaveCssClass('class0');
        expectNativeEl(fixture).toHaveCssClass('class1');
        expectNativeEl(fixture).toHaveCssClass('class2');
    });

    it('should override base `class` values with responsive ngClass string', async () => {
        await createTestComponentWithDeps('<div class="class0" ngClass.xs="what class2"></div>');
        expectNativeEl(fixture).toHaveCssClass('class0');
        expectNativeEl(fixture).not.toHaveCssClass('what');
        expectNativeEl(fixture).not.toHaveCssClass('class2');

        mediaController.activate('xs');
        expectNativeEl(fixture).toHaveCssClass('what');
        expectNativeEl(fixture).toHaveCssClass('class2');

        mediaController.activate('lg');
        expectNativeEl(fixture).not.toHaveCssClass('what');
        expectNativeEl(fixture).not.toHaveCssClass('class2');
    });

    it('should use responsive ngClass string and remove without fallback', async () => {
        await createTestComponentWithDeps('<div [ngClass.xs]="\'what class2\'"></div>');
        expectNativeEl(fixture).not.toHaveCssClass('what');
        expectNativeEl(fixture).not.toHaveCssClass('class2');

        mediaController.activate('xs');
        expectNativeEl(fixture).toHaveCssClass('what');
        expectNativeEl(fixture).toHaveCssClass('class2');

        mediaController.activate('lg');
        expectNativeEl(fixture).not.toHaveCssClass('what');
        expectNativeEl(fixture).not.toHaveCssClass('class2');
    });

    it('should override base `class` values with responsive ngClass map', async () => {
        await createTestComponentWithDeps(`
      <div class="class0" [ngClass.xs]="{'what':true, 'class2':true, 'class0':false}"></div>
    `);
        expectNativeEl(fixture).toHaveCssClass('class0');
        expectNativeEl(fixture).not.toHaveCssClass('what');
        expectNativeEl(fixture).not.toHaveCssClass('class2');

        mediaController.activate('xs');
        expectNativeEl(fixture).not.toHaveCssClass('class0');
        expectNativeEl(fixture).toHaveCssClass('what');
        expectNativeEl(fixture).toHaveCssClass('class2');

        mediaController.activate('lg');
        expectNativeEl(fixture).toHaveCssClass('class0');
        expectNativeEl(fixture).not.toHaveCssClass('what');
        expectNativeEl(fixture).not.toHaveCssClass('class2');
    });

    it('should support multiple breakpoints on one element', async () => {
        await createTestComponentWithDeps('<div ngClass.xs="xs-class" ngClass.md="mat-class"></div>');
        mediaController.activate('xs');
        expectNativeEl(fixture).toHaveCssClass('xs-class');
        expectNativeEl(fixture).not.toHaveCssClass('mat-class');

        mediaController.activate('md');
        expectNativeEl(fixture).not.toHaveCssClass('xs-class');
        expectNativeEl(fixture).toHaveCssClass('mat-class');
    });

    it('should work with material buttons', async () => {
        await createTestComponentWithDeps(`
      <button mat-raised-button
              color="primary"
              type="submit"
              class="${MATERIAL_PRIMARY_CLASS}"
              [ngClass]="{'btn-xs':formButtonXs}">
          Save
      </button>
    `);

        fixture.instance.formButtonXs = true;
        fixture.changeDetectorRef.detectChanges();
        const button = queryFor(fixture, 'button')[0];

        if (!isPlatformServer(PLATFORM_ID)) {
            expect(button).toHaveAttributes({ 'mat-raised-button': '' });
        }
        expect(button).toHaveCssClass('btn-xs');
        expect(button).toHaveCssClass(MATERIAL_PRIMARY_CLASS);

        fixture.instance.formButtonXs = false;
        fixture.changeDetectorRef.detectChanges();
        expect(button).not.toHaveCssClass('btn-xs');
        expect(button).toHaveCssClass(MATERIAL_PRIMARY_CLASS);
    });
});
// *******************************************************************************
// Standard tests from `angular/packages/common/test/directives/ng_class_spec.ts`
// *******************************************************************************
// let fixture: any;

// function normalizeClassNames(classes: string) {
//     return classes.trim().split(/\s+/).sort().join(' ');
// }

// function detectChangesAndExpectClassName(classes: string): void {
//     fixture.changeDetectorRef.detectChanges();
//     const actualClassName = fixture.location.nativeElement.children[0].className;
//     expect(normalizeClassNames(actualClassName)).toBe(normalizeClassNames(classes));
// }

// function getComponent(): TestComponent {
//     return fixture.instance;
// }

// describe('binding to CSS class list (Vitest)', () => {
//     it('should clean up when the directive is destroyed', async () => {
//         fixture = await createTestComponent('<div *ngFor="let item of items" [ngClass]="item"></div>');
//         getComponent().items = [['0']];
//         detectChangesAndExpectClassName('0');
//         getComponent().items = [['1']];
//         detectChangesAndExpectClassName('1');
//     });

//     describe('object expressions', () => {
//         it('should add classes specified in object literal', async () => {
//             fixture = await createTestComponent('<div [ngClass]="{foo: true, bar: false}"></div>');
//             detectChangesAndExpectClassName('foo');
//         });

//         it('should add/remove classes on value change', async () => {
//             fixture = await createTestComponent('<div [ngClass]="{foo: condition, bar: !condition}"></div>');
//             detectChangesAndExpectClassName('foo');
//             getComponent().condition = false;
//             detectChangesAndExpectClassName('bar');
//             getComponent().condition = true;
//             detectChangesAndExpectClassName('foo');
//         });

//         it('should update with object mutation', async () => {
//             fixture = await createTestComponent('<div [ngClass]="objExpr"></div>');
//             getComponent().objExpr['bar'] = true;
//             detectChangesAndExpectClassName('foo bar');
//             getComponent().objExpr['baz'] = true;
//             detectChangesAndExpectClassName('foo bar baz');
//             delete getComponent().objExpr['bar'];
//             detectChangesAndExpectClassName('foo baz');
//         });

//         it('should update on object reference change', async () => {
//             fixture = await createTestComponent('<div [ngClass]="objExpr"></div>');
//             getComponent().objExpr = { foo: true, bar: true };
//             detectChangesAndExpectClassName('foo bar');
//             getComponent().objExpr = { baz: true };
//             detectChangesAndExpectClassName('baz');
//         });
//     });

//     describe('array expressions', () => {
//         it('should add multiple classes', async () => {
//             fixture = await createTestComponent('<div [ngClass]="[\'foo\', \'bar\', \'foo-bar\']"></div>');
//             detectChangesAndExpectClassName('foo bar foo-bar');
//         });

//         it('should respond to array reference change', async () => {
//             fixture = await createTestComponent('<div [ngClass]="arrExpr"></div>');
//             getComponent().arrExpr = ['bar'];
//             detectChangesAndExpectClassName('bar');
//         });

//         it('should handle multiple classes per item', async () => {
//             fixture = await createTestComponent('<div [ngClass]="arrExpr"></div>');
//             getComponent().arrExpr = ['foo bar', 'baz'];
//             detectChangesAndExpectClassName('foo bar baz');
//         });

//         it('should ignore blank strings', async () => {
//             fixture = await createTestComponent('<div class="foo" [ngClass]="arrExpr"></div>');
//             getComponent().arrExpr = ['', '   '];
//             detectChangesAndExpectClassName('foo');
//         });
//     });

//     describe('string expressions', () => {
//         it('should add string class list', async () => {
//             fixture = await createTestComponent('<div [ngClass]="\'foo bar\'"></div>');
//             detectChangesAndExpectClassName('foo bar');
//         });

//         it('should remove when empty string', async () => {
//             fixture = await createTestComponent('<div [ngClass]="strExpr"></div>');
//             getComponent().strExpr = '';
//             detectChangesAndExpectClassName('');
//         });
//     });

//     describe('interactions with native class', () => {
//         it('should merge class attribute and ngClass', async () => {
//             fixture = await createTestComponent('<div class="init" [ngClass]="objExpr"></div>');
//             getComponent().objExpr = { foo: true };
//             detectChangesAndExpectClassName('init foo');
//         });

//         it('should work with [class] binding', async () => {
//             fixture = await createTestComponent('<div class="init" [class]="\'foo\'" [ngClass]="objExpr"></div>');
//             getComponent().objExpr = { bar: true };
//             detectChangesAndExpectClassName('init foo bar');
//         });

//         it('should work with [class.name] binding', async () => {
//             fixture = await createTestComponent('<div class="foo" [class.bar]="condition" [ngClass]="objExpr"></div>');
//             getComponent().objExpr = { baz: true };
//             detectChangesAndExpectClassName('foo bar baz');
//         });
//     });
// });

// @Component({
//     selector: 'test-cmp',
//     template: '',
//     standalone: false
// })
// class TestComponent {
//     condition = true;
//     items: any[] = [];
//     arrExpr: string[] = ['foo'];
//     objExpr: { [klass: string]: any } = { foo: true };
//     strExpr = 'foo';
// }


