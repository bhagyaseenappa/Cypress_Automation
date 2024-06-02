const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    baseUrl :'https://webdriveruniversity.com/',
    defaultCommandTimeout : 10000,
    pageLoadTimeout: 20000,
  },
 env: {
    webdriveruni_Contact_Page: "https://webdriveruniversity.com/Contact-Us/contactus.html",
 }
});