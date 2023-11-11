module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 2022,
  },
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'max-len': ['error', { code: 250 }],
    'max-classes-per-file':"off",
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    quotes: ['warn', 'single'],
    'no-trailing-spaces': ['warn', { skipBlankLines: false }],
    'object-curly-spacing': [
      'error',
      'always',
      { objectsInObjects: false, arraysInObjects: false },
    ],
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'import/no-unresolved': 'off',
    'brace-style': ['warn', 'allman', { allowSingleLine: false }],
    'function-paren-newline': ['error', 'never'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
  },
};
