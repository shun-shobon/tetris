import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "^.+\\.(?:c|sa|sc)ss$": "identity-obj-proxy",
    "^.+\\.(?:png|jpe?g|svg|gif)$": "<rootDir>/tests/__mocks__/assetModules.ts",
  },
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tests/tsconfig.json",
    },
  },
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: ["node_modules", "^.+\\.d\\.ts$"],
};

export default config;
