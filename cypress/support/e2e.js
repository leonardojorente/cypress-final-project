// SETUP TO RUN BEFORE ALL TESTS
import 'cypress-xpath'
import 'cypress-mochawesome-reporter/register'
import registerCypressGrep from '@cypress/grep'
registerCypressGrep()

import './commands/ui-commands/login-commands.js'
import './commands/api-commands/login-commands.js'
import './commands/api-commands/reset-commands.js'
import  LoginPayload from '../fixtures/request-payloads/post-signin-payload.json'

before(() => {
  const userName = Cypress.env('USER')
  const password = Cypress.env('PASSWORD')

  LoginPayload.email = userName
  LoginPayload.senha = password

  //get token for api tests
  cy.doLoginAPI(LoginPayload)
  .then(response =>{
    expect(response.status).to.be.equal(200)
    Cypress.env('token', response.body.token)
  })
})

after(() => {
  //reset app data by api
  cy.resetApp().then(response =>{
    expect(response.status).to.be.equal(200)
  })
})