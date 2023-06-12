const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    chromeWebSecurity: false,
    failOnStatusCode: false,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    numTestsKeptInMemory: 1,
    base_url: "https://en.m.wikipedia.org/wiki/Main_Page",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
