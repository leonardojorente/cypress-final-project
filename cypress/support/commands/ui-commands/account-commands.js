export const AccountScreenLocators = {
    inputAccountName: "[data-test='nome']",
    saveAccountBtn: "[alt='Salvar']"
}

Cypress.Commands.add('insertAccountName', (accountName) =>{
    cy.log('Insert account name')
    cy.get(AccountScreenLocators.inputAccountName).clear()
    cy.get(AccountScreenLocators.inputAccountName).type(accountName)
})

Cypress.Commands.add('clickSaveAccountBtn', () =>{
    cy.log('Click save account button')
    cy.get(AccountScreenLocators.saveAccountBtn).click()
})