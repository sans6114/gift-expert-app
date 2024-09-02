module.exports = {
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy",
      },
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.cjs']
}