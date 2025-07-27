// Define HEADER_COMPONENT at module scope so it's accessible in both commands
export const HeaderComponent = {
    settingsDropDown: "a[data-test='menu-settings']",
    settingsDropDownOption: settingsOption => `//a[contains(@class,'dropdown-item') and contains(text(),'${settingsOption}')]`
};

Cypress.Commands.add('selectSettingsOption', (settingsOption) => {
    cy.log(`Select settings option: ${settingsOption}`);
    cy.get(HeaderComponent.settingsDropDown).click();
    cy.xpath(HeaderComponent.settingsDropDownOption(settingsOption)).click();
});