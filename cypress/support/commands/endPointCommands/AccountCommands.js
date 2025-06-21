Cypress.Commands.add('createAccount', (accountName, token) =>{
    cy.request({
        method: 'POST',
        url: 'https://barrigarest.wcaquino.me/contas',
        headers: { Authorization: `JWT ${token}`},
        body:{
            nome: accountName
        }
    }).then(response =>{
        return response
    })
})