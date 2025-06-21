Cypress.Commands.add('getToken', (email, password) =>{
    cy.login(email, password).then( loginResponse => {
         
            return loginResponse.body.token
        })
})

Cypress.Commands.add('login', (email, password) =>{
    cy.request({
        method: 'POST',
        url: 'https://barrigarest.wcaquino.me/signin',
        body:{
            email: email,
            redirecionar: false,
            senha: password
        }
    }).then(response =>{
        return response
    })
})