const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://wbo.ophir.dev/?lang=en',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    auth0_username: process.env.AUTH0_USERNAME,
    auth0_password: process.env.AUTH0_PASSWORD,
    auth0_domain: process.env.REACT_APP_AUTH0_DOMAIN,
    auth0_audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    auth0_scope: process.env.REACT_APP_AUTH0_SCOPE,
    auth0_client_id: process.env.REACT_APP_AUTH0_CLIENTID,
    auth0_client_secret: process.env.AUTH0_CLIENT_SECRET,
  },
});
