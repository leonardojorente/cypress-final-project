import { ToastComponentLocators } from './component-commands/toast-component-commands.js'

export const LoginScreenSelectors ={
    emailInput: `input[data-test='email'`,
    passwordInput: "input[data-test='passwd']",
    loginBtn: "button[type='submit']"
}

Cypress.Commands.add('insertEmail', (email) =>{
    cy.log('Insert email for login')
    cy.get(LoginScreenSelectors.emailInput).clear()
    cy.get(LoginScreenSelectors.emailInput).type(email)
})

Cypress.Commands.add('insertPassword', (password) =>{
    cy.log('Insert Password for login')
    cy.get(LoginScreenSelectors.passwordInput).clear()
    cy.get(LoginScreenSelectors.passwordInput).type(password)
})

Cypress.Commands.add('clickLoginButton', () =>{
    cy.log('Click button to confirm login process')
    cy.get(LoginScreenSelectors.loginBtn).click()
})

Cypress.Commands.add('doLoginWebCachingSession', (email, password) =>{
    cy.log('Perform login with session caching for performance')
    cy.session([email, password], () => { //cache login session for performance
        cy.visit('https://barrigareact.wcaquino.me')
        cy.log('Login application')
        cy.insertEmail(email)
        cy.insertPassword(password)
        cy.clickLoginButton()

        cy.get(ToastComponentLocators.toastMessage, { timeout: 10000 }).should('contain',"Bem vindo") 
    })
})