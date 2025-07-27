import '../../support/commands/ui-commands/login-commands.js'
import '../../support/commands/ui-commands/component-commands/app-header-component-commands.js'
import '../../support/commands/ui-commands/component-commands/toast-component-commands.js'

let toastmessagedata
const baseUrlWeb = Cypress.env('BASE_URL_WEB')
const userName = Cypress.env('USER')
const password = Cypress.env('PASSWORD')

describe('E2E Login Tests', () => {
  before(() => {
    //captures the json data for the tests
    cy.fixture('label-messages/toast-message').then((data) => {
      toastmessagedata = data
    })
  })

  beforeEach(() => {
    cy.visit(baseUrlWeb)

  })

  it('TC01: Cross env test', { tags: '@smoke' }, () => {    
    cy.task('log', `Environment variable for USER: ${Cypress.env('USER')}`)
    cy.insertEmail(userName)

    cy.task('log', `Environment variable for PASSWORD: ${Cypress.env('PASSWORD')}`)
    cy.insertPassword(password)

    cy.clickLoginButton()

    cy.getToastMessage().should('contain', toastmessagedata.successLoginToastMessage)
  })
})