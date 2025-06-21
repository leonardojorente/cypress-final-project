const locators = {
    LOGIN_SCREEN:{
        EMAIL_INPUT: `input[data-test='email'`,
        PASSWORD_INPUT: "input[data-test='passwd']",
        LOGIN_BTN: "button[type='submit']",
    },

    HEADER_COMPONENT:{
        SETTINGS_DROP_DOWN: "a[data-test='menu-settings']",
        SETTING_DROP_DOWN_OPTION: settingsOption => `//a[contains(@class,'dropdown-item') and contains(text(),'${settingsOption}')]`
    },

    ACCOUNT_SCREEN:{
        INPUT_ACCOUNT_NAME: "[data-test='nome']",
        SAVE_ACCOUNT_BTN: "[alt='Salvar']"
    },
    
    TOAST_MESSAGE: '.toast-message'
}
    export default locators;