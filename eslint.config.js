import js from '@eslint/js';
import globals from 'globals';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';

export default [
  { ignores: ['dist', '.eslintrc.cjs', 'assets/', 'docs/'] },
  js.configs.recommended,
  ...tsPlugin.configs['flat/recommended'],
  reactHooks.configs.flat['recommended'],
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/*.stories.{ts,tsx}'],
    rules: {
      'storybook/no-renderer-packages': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
