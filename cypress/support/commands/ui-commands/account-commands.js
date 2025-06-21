import locators from '../../locators.js'

Cypress.Commands.add('InsertAccountName', (accountName) =>{
    cy.get(locators.ACCOUNT_SCREEN.INPUT_ACCOUNT_NAME).clear()
    cy.get(locators.ACCOUNT_SCREEN.INPUT_ACCOUNT_NAME).type(accountName)
})

Cypress.Commands.add('ClickSaveAccountBtn', () =>{
    cy.get(locators.ACCOUNT_SCREEN.SAVE_ACCOUNT_BTN).click()
})