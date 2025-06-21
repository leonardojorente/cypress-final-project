import  '../../support/commands/endPointCommands/SigninCommands.js'

Cypress.Commands.add('resetData', (token) =>{
    cy.login()({
        method: 'POST',
        url: 'https://barrigarest.wcaquino.me/reset',
        headers: { Authorization: `JWT ${token}`},
        body:{
            email: email,
            redirecionar: false,
            senha: password
        }
    }).then(response =>{
        return response
    })
})