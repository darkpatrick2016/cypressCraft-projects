const {defineConfig}  = require("cypress");
const setupNodeEvents = require("./cypress/settings/setupNodeEvents");



module.exports = defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1080,
    e2e: {
        setupNodeEvents,
        specPattern      : "cypress/**/*.feature",
        chromeWebSecurity: false,
        env              : {
            "environment": "qa"
        }
    },
});
