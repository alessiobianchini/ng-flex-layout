const typescriptEslintParser = require("@typescript-eslint/parser");
const typescriptEslintPlugin = require("@typescript-eslint/eslint-plugin");
const stylisticTsPlugin = require("@stylistic/eslint-plugin-ts");
const prettierConfig = require("eslint-config-prettier");

module.exports = [
  {
    ignores: ["**/*.css", "**/*.scss", "dist/**/*", "node_modules/**/*"]
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
        extraFileExtensions: [".scss"]
      },
      globals: {
        document: "readonly",
        window: "readonly",
        console: "readonly",
        process: "readonly"
      }
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      "@stylistic/ts": stylisticTsPlugin
    },
    rules: {
      ...prettierConfig.rules,
      "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "no-public" }],
      "@stylistic/ts/indent": ["error", 4],
      "@stylistic/ts/member-delimiter-style": ["error", { multiline: { delimiter: "none", requireLast: true }, singleline: { delimiter: "semi", requireLast: false } }],
      "@typescript-eslint/naming-convention": ["error", { selector: "variable", format: ["camelCase", "PascalCase", "UPPER_CASE"], leadingUnderscore: "allow", trailingUnderscore: "forbid" }],
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/no-shadow": ["error", { hoist: "all" }],
      "@typescript-eslint/no-unused-expressions": "error",
      "@typescript-eslint/prefer-namespace-keyword": "error",
      "@stylistic/ts/quotes": ["error", "single", { avoidEscape: true }],
      "@stylistic/ts/semi": ["error"],
      "@stylistic/ts/type-annotation-spacing": "error",
      "brace-style": ["error", "1tbs"],
      "curly": "error",
      "eol-last": "error",
      "id-denylist": ["error", "any", "Number", "number", "String", "string", "Boolean", "boolean", "Undefined", "undefined"],
      "id-match": "error",
      "linebreak-style": ["error", "unix"],
      "max-len": ["error", { code: 200 }],
      "no-bitwise": "error",
      "no-caller": "error",
      "no-debugger": "error",
      "no-eval": "error",
      "no-redeclare": "error",
      "no-trailing-spaces": "error",
      "no-var": "error",
      "spaced-comment": ["error", "always", { markers: ["/"] }]
    }
  }
];
