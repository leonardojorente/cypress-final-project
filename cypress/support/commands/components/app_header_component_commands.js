const SettingsDropDown = "a[data-test='menu-settings']"
const SettingsDropDownOption = settingsOption => `//a[contains(@class,'dropdown-item') and contains(text(),'${settingsOption}')]`

Cypress.Commands.add('SelectSettingsOption', (settingsOption) =>{
    cy.get(SettingsDropDown).click()
    cy.xpath(SettingsDropDownOption(settingsOption)).click()
})