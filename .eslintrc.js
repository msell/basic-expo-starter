module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'universe',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'prettier/react',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
  rules: {
    'no-console': 'error',
    'no-multiple-empty-lines': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        groups: [['builtin', 'external', 'object'], 'internal', ['index', 'parent', 'sibling']],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'internal',
          },
        ],
      },
    ],
    'import/first': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'import/no-named-as-default': 'error',
    'import/no-unused-modules': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'import/newline-after-import': 'error',
    'no-duplicate-imports': 'error',
    'import/no-duplicates': 'error',
    'import/no-cycle': [
      'error',
      {
        ignoreExternal: true,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
