const { defineConfig } = require("cypress")

const dotEnvPath = process.env.TEST_ENV ? `.env.${process.env.TEST_ENV}` : '.env'
require('dotenv').config({
   path: dotEnvPath,
   override: true 
})

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
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
