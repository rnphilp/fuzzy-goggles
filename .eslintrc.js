module.exports = {
  root: true,
  env: {
    commonjs: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    jsx: true,
    modules: true,
  },
  extends: [
    'eslint:recommended',
    'react-app',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react-hooks/recommended',
    'plugin:markdown/recommended',
    'plugin:json/recommended',
    'plugin:i18next/recommended',
    'plugin:yaml/recommended',
    'plugin:cypress/recommended',
  ],
  plugins: [
    'prettier',
    'react-hooks',
    'import',
    'jest',
    'jsx-a11y',
    'markdown',
    'json',
    'html',
    'yaml',
    'i18next',
    'testing-library',
    'jest-dom',
    'cypress',
  ],
  rules: {
    eqeqeq: 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': 'off',
    'no-warning-comments': ['warn', { terms: ['todo', 'fixme'] }],
    'no-unused-vars': 'error',
    'func-names': 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-lone-blocks': 'error',
    'no-proto': 'error',
    'no-useless-return': 'error',
    'no-delete-var': 'error',
    'no-undef': 'error',
    'no-use-before-define': 'error',
    camelcase: 'error',
    'max-depth': ['error', 3],
    'max-nested-callbacks': ['error', 3],
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'no-var': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-confusing-arrow': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          '@mui/material/*',
          '@mui/icons-material/*',
          '!@mui/material/test-utils/*',
          '!@mui/material/colors',
          '!@mui/material/locale',
          '!@mui/material/styles',
        ],
      },
    ],
    'no-unused-expressions': 'error',
    'prettier/prettier': [
      'warn',
      {},
      {
        usePrettierrc: true,
      },
    ],
    'i18next/no-literal-string': 'off',
    'import/order': ['error'],
    'import/first': 'error',
    'import/no-anonymous-default-export': 'off',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': ['error'],
    'react/jsx-key': 'error',
    'react/display-name': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': ['error'],
    'react/jsx-filename-extension': [
      'warn',
      { allow: 'always', extensions: ['.js', '.jsx'] },
    ],
    'react/jsx-pascal-case': ['error'],
    'react/jsx-no-useless-fragment': ['error'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
    react: {
      pragma: 'React',
      version: '18.2.0',
    },
  },
  overrides: [
    {
      files: ['*.yaml', '*.yml'],
      plugins: ['yaml'],
      extends: ['plugin:yaml/recommended'],
    },
    {
      files: ['*.md', '*.md/*.js'],
      processor: 'markdown/markdown',
    },
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: [
        'plugin:jest/all',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
      ],
      rules: {
        'jest/no-disabled-tests': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-expect-in-promise': 'warn',
        'jest/prefer-expect-assertions': 'off',
        'jest/unbound-method': 'off',
        'jest/expect-expect': [
          'error',
          {
            assertFunctionNames: [
              'expect',
              'cy.**.should',
              'cy.matchImageSnapshot',
              'cy.get',
              'cy.visit',
            ],
          },
        ],
        'testing-library/no-debugging-utils': 'warn',
      },
    },
  ],
};
