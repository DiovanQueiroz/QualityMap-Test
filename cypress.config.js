const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
