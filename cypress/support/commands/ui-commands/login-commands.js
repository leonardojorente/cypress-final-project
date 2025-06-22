import locators from '../../locators.js'

Cypress.Commands.add('InsertEmail', (email) =>{
    cy.log('Insert email for login')
    cy.get(locators.LOGIN_SCREEN.EMAIL_INPUT).clear()
    cy.get(locators.LOGIN_SCREEN.EMAIL_INPUT).type(email)
})

Cypress.Commands.add('InsertPassword', (password) =>{
    cy.log('Insert Password for login')
    cy.get(locators.LOGIN_SCREEN.PASSWORD_INPUT).clear()
    cy.get(locators.LOGIN_SCREEN.PASSWORD_INPUT).type(password)
})

Cypress.Commands.add('ClickLoginButton', () =>{
    cy.log('Click button to confirm login process')
    cy.get(locators.LOGIN_SCREEN.LOGIN_BTN).click()
})

Cypress.Commands.add('doLoginWebCachingSession', (email, password) =>{
    cy.session([email, password], () => { //cache login session for performance
        cy.visit('https://barrigareact.wcaquino.me')
        cy.log('Login application')
        cy.InsertEmail(email)
        cy.InsertPassword(password)
        cy.ClickLoginButton()

        cy.get(locators.TOAST_MESSAGE, { timeout: 10000 }).should('contain',"Bem vindo") 
    })
})