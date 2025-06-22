import '../../support/commands/ui-commands/login-commands.js'
import '../../support/commands/ui-commands/component-commands/app-header-component-commands.js'
import '../../support/commands/ui-commands/account-commands.js'
import Utils from '../../support/commands/utils/utils-commands.js'
import locators from '../../support/locators.js'

let topMenuComponentData
let toastmessagedata
const baseUrlWeb = Cypress.env('BASE_URL_WEB')

describe('E2E Account Tests', () => {
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

    //clean app data
    cy.SelectSettingsOption(topMenuComponentData.settings_option_reset)
    cy.get(locators.TOAST_MESSAGE, { timeout: 10000 }).should('contain',toastmessagedata.successResetData)
  })

  it('AccountTC01: Add account', { tags: '@smoke' }, () => {
    const accountName = `randomAccountName ${Utils.generateRandomString(4)}`
    cy.SelectSettingsOption(topMenuComponentData.settings_option_accounts)
    cy.InsertAccountName(accountName)
    cy.ClickSaveAccountBtn()

    cy.get(locators.TOAST_MESSAGE, { timeout: 10000 }).should('contain',toastmessagedata.successAddAccountData)
  })
})