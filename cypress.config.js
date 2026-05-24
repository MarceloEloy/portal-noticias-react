const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173", 
    specPattern: "cypress/e2e/**/*.feature",
    async setupNodeEvents(on, config) {
      // CORREÇÃO AQUI: Adicionado o ".addCucumberPreprocessorPlugin" explicitamente
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.createEsbuildPlugin(config)], // Ajuste na chamada do plugin do esbuild
        })
      );

      return config;
    },
  },
});