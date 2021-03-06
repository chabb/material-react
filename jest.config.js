require('dotenv').config({ path: './.env.test' });

module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  transformIgnorePatterns: ['node_modules/(?!(three)/)'], // force JEST to process this module
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  coverageReporters: ['json', 'html'],
  setupFilesAfterEnv: ['./src/jest-setup.ts'],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json'
    }
  }
};
