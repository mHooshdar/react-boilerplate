module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:jest/all',
    'plugin:@typescript-eslint/recommended',
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
    },
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.tsx', '**/*.spec.tsx', '**/setupTests.ts'],
      },
    ],
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
    '@typescript-eslint/explicit-function-return-type': 'off',
    'array-callback-return': 'off',
    'no-unused-expressions': 'off',
    'react/prop-types': 'off',
  },
};
