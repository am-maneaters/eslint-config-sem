module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'jsx-a11y',
    'unicorn',
    '@tanstack/query',
  ],
  rules: {
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/prefer-query-object-syntax': 'error',
    'unicorn/prevent-abbreviations': 0,
    'unicorn/filename-case': 0,
    'unicorn/no-null': 0,
    'unicorn/no-useless-undefined': 0,
    'unicorn/prefer-string-slice': 0,
    'unicorn/consistent-function-scoping': 0,
    'react/prop-types': 0,
    '@typescript-eslint/no-empty-function': 0,
    'react/function-component-definition': 0,
    'react/react-in-jsx-scope': 0,
    'react/self-closing-comp': 2,
    'react/jsx-curly-brace-presence': [
      1,
      { props: 'never', children: 'never', propElementValues: 'always' },
    ],
    'jsx-quotes': [2, 'prefer-double'],
    'arrow-body-style': [2, 'as-needed'],
    'object-shorthand': [2, 'always'],
    'prettier/prettier': [
      'warn',
      {
        tabWidth: 2,
        useTabs: false,
        endOfLine: 'auto',
        trailingComma: 'es5',
        singleQuote: true,
        semi: true,
      },
    ],
  },

  overrides: [
    {
      files: ['tasks/**/*.ts', 'vite.config.ts'],
      parserOptions: {
        project: './tsconfig.node.json',
      },
      rules: {
        'unicorn/error-message': 0,
      },
    },
  ],
};
