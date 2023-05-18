const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile:"reports/TEST-[hash].xml",
    screenshotOnRunFailure:true
  },
  e2e: {
    baseUrl: 'https://wbo.ophir.dev/?lang=en',
    setupNodeEvents(on, config) {
    },
  },
});
