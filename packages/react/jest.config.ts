import { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  moduleFileExtensions: ['tsx', 'ts', 'js'],
  collectCoverage: false,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/react//src/context.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/react/jest.setup.ts'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testEnvironment: 'jsdom',
  notify: true,
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/react/tsconfig.json',
      },
    ],
  },
  rootDir: '..',
  testMatch: ['<rootDir>/react/src/**/__tests__/**/*.test.(ts|tsx|js)'],
};

export default config;
