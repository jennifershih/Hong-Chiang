// @ts-check
const eslint = require("@eslint/js");
const { defineConfig } = require("eslint/config");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = defineConfig([
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      // App Builder projects are organized in NgModules with default change detection.
      "@angular-eslint/prefer-standalone": "off",
      "@angular-eslint/prefer-on-push-component-change-detection": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    rules: {
      // Ignite UI puts <label igxLabel> inside its own input components.
      "@angular-eslint/template/label-has-associated-control": "off",
    },
  },
  {
    files: ["src/test-setup.ts"],
    rules: { "@typescript-eslint/no-empty-function": "off" },
  },
  {
    files: ["**/*.html"],
    extends: [
      angular.configs.templateRecommended,
      angular.configs.templateAccessibility,
    ],
    rules: {},
  }
]);
