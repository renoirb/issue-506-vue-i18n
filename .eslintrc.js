module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/prettier' /* @vue/eslint-config-prettier */,
  ],

  overrides: [
    {
      files: ['**/*.unit.js'],
      parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
      },
      plugins: ['jest'] /* eslint-plugin-jest */,
      env: {
        jest: true,
      },
      globals: {
        describe: false,
        it: false,
        test: false,
        // see ./setup.js
        VueI18n: false,
        createLocalVue: false,
        createComponentMocks: false,
        mount: false,
        shallowMount: false,
        querySelectorAllOnWrapperInstance: false,
      },
    },
  ],
}
