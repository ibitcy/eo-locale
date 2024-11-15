import type { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: ['tsx', 'ts', 'js'],
  collectCoverage: false,
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  notify: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  rootDir: '..',
  testMatch: ['<rootDir>/core/src/**/__tests__/**/*.test.(ts|tsx|js)'],
};

export default config;
