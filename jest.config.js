module.exports = {
  preset: 'ts-jest', // Run the tests with ts-jest (TypeScript is available)
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.{test,spec}.ts'], // Where to look for test files
  verbose: true, // Each individual test should be reported
  forceExit: true, // We want our tests to always exit even if there are pending handlers
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  /** Setup and Teardown files */
  // Files that executes before the test framework is in the environment (jest functions won't work)
  setupFiles: ['<rootDir>/src/utils/test-setup.ts'],
  // Files that executes after the test framework is in the environment (jest functions will work)
  setupFilesAfterEnv: [], // file that gets run in process with each test file
  globalTeardown: '<rootDir>/src/utils/test-teardown.ts',
};
