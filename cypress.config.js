const { defineConfig } = require("cypress")
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');


const dotEnvPath = process.env.TEST_ENV ? `.env.${process.env.TEST_ENV}` : '.env'
require('dotenv').config({
   path: dotEnvPath,
   override: true 
})

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Cypress Test Report',
      reportDir: 'cypress/reports',
      overwrite: true,
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      autoOpen: true,
      html: true,
      json: false,
    },

    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config); // Register the grep plugin for filtering tests
      require('cypress-mochawesome-reporter/plugin')(on);

      config.env = {// Load environment variables from .env file
        ...process.env
      }

      on('task', {// Define a task to log messages in Cypress
        log(message) {
          console.log('Cypress log:', message);
          return null; // Must return something (or `null`)
        }
      })

      return config;
    },
  },
});
