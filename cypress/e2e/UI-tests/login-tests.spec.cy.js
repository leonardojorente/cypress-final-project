import '../../support/commands/ui-commands/login-commands.js'
import '../../support/commands/ui-commands/component-commands/app-header-component-commands.js'
import locators from '../../support/locators.js'

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

  it('LoginTC01: Success Login', { tags: '@smoke' }, () => {
    cy.InsertEmail(userName)
    cy.InsertPassword(password)
    cy.ClickLoginButton()

    cy.get(locators.TOAST_MESSAGE, { timeout: 10000 }).should('contain',toastmessagedata.successLoginToastMessage) 
  })

  it('LoginTC02: fail login to test screenshot report', () => {
    const wrongPassword = "wrongPassword"

    cy.InsertEmail(userName)
    cy.InsertPassword(wrongPassword)
    cy.ClickLoginButton()

    cy.get(locators.TOAST_MESSAGE, { timeout: 10000 }).should('contain',toastmessagedata.successLoginToastMessage) 
  })
})