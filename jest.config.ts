import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./setupTest.ts'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  collectCoverageFrom: ['./src/components/**'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};

export default config;
