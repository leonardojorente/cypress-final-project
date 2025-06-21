import locators from '../../../locators.js'

Cypress.Commands.add('SelectSettingsOption', (settingsOption) =>{
    cy.get(locators.HEADER_COMPONENT.SETTINGS_DROP_DOWN).click()
    cy.xpath(locators.HEADER_COMPONENT.SETTING_DROP_DOWN_OPTION(settingsOption)).click()
})