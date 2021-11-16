module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    globalSetup: './setup.js',
    testRunner: "jest-jasmine2",
    reporters: ["default", "jest-allure"],
    setupFilesAfterEnv: ["jest-allure/dist/setup"],
    globalTeardown: './teardown.js',
};
