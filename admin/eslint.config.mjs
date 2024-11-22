import js from '@eslint/js';
import eslintPluginImport from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import react from 'eslint-plugin-react';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...Object.keys(globals.browser).reduce((acc, key) => {
          acc[key.trim()] = globals.browser[key];
          return acc;
        }, {}),
        ...Object.keys(globals.node).reduce((acc, key) => {
          acc[key.trim()] = globals.node[key];
          return acc;
        }, {}),
        ...Object.keys(globals.jest).reduce((acc, key) => {
          acc[key.trim()] = globals.jest[key];
          return acc;
        }, {}),
      },
    },
    plugins: {
      react,
      jest,
      import: eslintPluginImport,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...jest.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Для новых версий React
      'react/jsx-uses-react': 'off', // Для новых версий React
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/prop-types': 'off',
      'import/order': [
        'warn',
        {
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling'], 'index'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  {
    files: ['**/__tests__/**/*.{js,jsx}', '**/*.{spec,test}.{js,jsx}'],
    plugins: { jest },
    rules: {
      ...jest.configs.recommended.rules,
    },
  },
];
