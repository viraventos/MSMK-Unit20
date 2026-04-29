/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  // Usamos o preset de ts-jest para ESM
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  modulePaths: ['<rootDir>/src'],
  // Esta parte é CRUCIAL: dille a ts-jest que os ficheiros .ts
  // deben ser tratados como módulos ES
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  // Mapea as importacións de .js a ficheiros .ts para que Jest os atope
  moduleNameMapper: {
    '^(\\.\\.?\\/.+)\\.js$': '$1',
  },
};
