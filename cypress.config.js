const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "1cbevu",
  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/specs/**/*.spec.js"
  },
});
