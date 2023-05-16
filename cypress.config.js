const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://wbo.ophir.dev/?lang=en',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
