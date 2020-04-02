const path = require('path');

module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:jest/all',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        alias: [
          ['@actions', path.resolve(__dirname) + './src/actions'],
          ['@apis', path.resolve(__dirname) + './src/apis'],
          ['@assets', path.resolve(__dirname) + './src/assets'],
          ['@components', path.resolve(__dirname) + './src/components'],
          ['@constants', path.resolve(__dirname) + './src/constants'],
          ['@hocs', path.resolve(__dirname) + './src/hocs'],
          ['@hooks', path.resolve(__dirname) + './src/hooks'],
          ['@models', path.resolve(__dirname) + './src/models'],
          ['@pages', path.resolve(__dirname) + './src/pages'],
          ['@reducers', path.resolve(__dirname) + './src/reducers'],
          ['@sagas', path.resolve(__dirname) + './src/sagas'],
          ['@stores', path.resolve(__dirname) + './src/stores'],
          ['@utils', path.resolve(__dirname) + './src/utils'],
        ],
      },
    },
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-console': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
  },
};
