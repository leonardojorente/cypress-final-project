import '../../support/commands/ui-commands/login-commands.js'
import '../../support/commands/ui-commands/component-commands/app-header-component-commands.js'
import '../../support/commands/ui-commands/component-commands/toast-component-commands.js'
import '../../support/commands/ui-commands/account-commands.js'
import Utils from '../../support/commands/utils/utils-commands.js'
import {generateAccount} from '../../support/factories/accountFactory.js'
import '../../support/commands/ui-commands/component-commands/toast-component-commands.js'

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

    cy.doLoginWebCachingSession(Cypress.env('USER'), Cypress.env('PASSWORD'))
  })
  beforeEach(() => {
    cy.visit(baseUrlWeb)

    //clean app data
    cy.selectSettingsOption(topMenuComponentData.settings_option_reset)
    cy.getToastMessage().should('contain',toastmessagedata.successResetData)
  })

  it('AccountTC01: Add account', { tags: '@smoke' }, () => {
    const account = generateAccount({ accountName: `randomAccountName ${Utils.generateRandomString(4)}` })

    cy.selectSettingsOption(topMenuComponentData.settings_option_accounts)
    cy.insertAccountName(account.accountName)
    cy.clickSaveAccountBtn()

    cy.getToastMessage().should('contain',toastmessagedata.successAddAccountData)
  })
})