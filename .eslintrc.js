module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'script',
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#bulb-rules
    'plugin:vue/recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
    'prettier/standard',
    // https://github.com/jest-community/eslint-plugin-jest
    'plugin:jest/recommended',
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'plugin:unicorn/recommended',
  ],
  plugins: ['graphql', 'unicorn'],
  rules: {
    // Only allow debugger in development
    'no-debugger': process.env.PRE_COMMIT ? 'error' : 'off',
    // Only allow `console.log` in development
    'no-console': process.env.PRE_COMMIT
      ? ['error', { allow: ['warn', 'error'] }]
      : 'off',

    'vue/html-indent': ['error', 2],
    'vue/require-default-prop': 'error',
    'vue/attributes-order': 'error',
    'vue/html-quotes': ['error', 'double'],
    'vue/order-in-components': 'error',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: ['router-view', 'router-link'],
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/multiline-html-element-content-newline': 'error',
    'vue/singleline-html-element-content-newline': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/script-indent': ['error', 2, { baseIndent: 0 }],

    'unicorn/catch-error-name': [
      'error',
      {
        name: 'err',
      },
    ],
  },
  overrides: [
    {
      files: ['src/**/*', 'tests/unit/**/*', 'tests/e2e/**/*'],
      excludedFiles: 'app.config.js',
      parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
      },
      env: {
        browser: true,
      },
    },
    {
      files: ['**/*.unit.js'],
      parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
      },
      env: { jest: true },
      globals: {
        mount: false,
        shallowMount: false,
        shallowMountView: false,
        createComponentMocks: false,
        createModuleStore: false,
      },
    },
  ],
}
