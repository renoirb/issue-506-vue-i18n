module.exports = {
  setupFiles: ['<rootDir>/tests/unit/setup'],
  setupTestFrameworkScriptFile: '<rootDir>/tests/unit/matchers',
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^fixtures/(.*)$': '<rootDir>/tests/fixtures/$1',
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/*.unit.(js|jsx|ts|tsx)'],
}
