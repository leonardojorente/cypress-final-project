import '../../support/commands/ui-commands/login-commands.js'
import '../../support/commands/ui-commands/component-commands/app-header-component-commands.js'
import '../../support/commands/ui-commands/component-commands/app-header-component-commands.js'
import locators from '../../support/locators.js'

let toastmessagedata
let dataDrivenFixture
let topMenuComponentData
const baseUrlWeb = Cypress.env('BASE_URL_WEB')

const testData = [
    { username: 'leonardodevenv@gmail.com', password: 'devenv' },
    { username: 'leonardoprodenv@gmail.com', password: 'prodenv' }
]

describe('E2E Login Tests', () => {
      cy.fixture('data-driven/login-users').then((data) => {
      dataDrivenFixture = data
    })
  before(() => {
    cy.fixture('label-messages/toast-message').then((data) => {
      toastmessagedata = data
    })
    cy.fixture('label-messages/top-menu-component').then((data) => {
      topMenuComponentData = data
    })

  })

  beforeEach(() => {
    cy.visit(baseUrlWeb)
  })

      testData.forEach((dataDriven) => {
  it(`TC01: data-driven test 1`, { tags: '@smoke' }, () => {

      cy.task('log', `Data Driven Test - USER: ${dataDriven.username}`)
      cy.task('log', `Data Driven Test - PASSWORD: ${dataDriven.password}`)
      cy.InsertEmail(dataDriven.username)
      cy.InsertPassword(dataDriven.password)
      cy.ClickLoginButton()

      cy.get(locators.TOAST_MESSAGE, { timeout: 10000 }).should('contain',toastmessagedata.successLoginToastMessage)
      
      cy.SelectSettingsOption(topMenuComponentData.settings_option_logout)
      cy.get(locators.TOAST_MESSAGE, { timeout: 10000 }).should('contain',toastmessagedata.successLogout)
    })
  })

  
  it('TC02: data-driven test with fixture', { tags: '@smoke' }, () => {
    dataDrivenFixture.forEach((dataDriven) => {
      cy.task('log', `Data Driven Test - USER: ${dataDriven.username}`)
      cy.task('log', `Data Driven Test - PASSWORD: ${dataDriven.password}`)
      cy.InsertEmail(dataDriven.username)
      cy.InsertPassword(dataDriven.password)
      cy.ClickLoginButton()

      cy.get(locators.TOAST_MESSAGE, { timeout: 10000 }).should('contain',toastmessagedata.successLoginToastMessage) 

      cy.SelectSettingsOption(topMenuComponentData.settings_option_logout)
      cy.get(locators.TOAST_MESSAGE, { timeout: 10000 }).should('contain',toastmessagedata.successLogout)
    })
  })

})