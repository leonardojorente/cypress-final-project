import '../../support/commands/ui-commands/login-commands.js'
import '../../support/commands/ui-commands/component-commands/app-header-component-commands.js'
import locators from '../../support/locators.js'

let toastmessagedata
let topMenuComponentData
const baseUrlWeb = Cypress.env('BASE_URL_WEB')
const userName = Cypress.env('USER')
const password = Cypress.env('PASSWORD')

describe('E2E Login Tests', () => {
  before(() => {
    //captures the json data for the tests
    cy.fixture('label-messages/top-menu-component').then((data) => {
      topMenuComponentData = data
    })
    cy.fixture('label-messages/toast-message').then((data) => {
      toastmessagedata = data
    })
  })

  beforeEach(() => {
    cy.visit(baseUrlWeb)

  })

  it('LoginTC01: Cross env test', { tags: '@smoke' }, () => {
    cy.SelectSettingsOption(topMenuComponentData.settings_option_logout)
    cy.get(locators.TOAST_MESSAGE, { timeout: 10000 }).should('contain',toastmessagedata.successLogout) 
    
    cy.task('log', `Environment variable for USER: ${Cypress.env('USER')}`)
    cy.InsertEmail(userName)

    cy.task('log', `Environment variable for PASSWORD: ${Cypress.env('PASSWORD')}`)
    cy.InsertPassword(password)

    cy.ClickLoginButton()

    cy.get(locators.TOAST_MESSAGE, { timeout: 10000 }).should('contain',toastmessagedata.successLoginToastMessage) 
  })
})