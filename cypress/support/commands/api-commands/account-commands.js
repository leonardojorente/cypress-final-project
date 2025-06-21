import  RelativePath  from '../../../fixtures/endpoint-relative-path.json';

const baserRestURL = Cypress.env('BASE_URL_API')

Cypress.Commands.add('createAccount', (body) =>{
    cy.request({
        method: 'POST',
        url: `${baserRestURL}${RelativePath.ACCOUNT}`,
        headers: { Authorization: `JWT ${Cypress.env('token')}`}, // use env variable token
        body: body
    }).then(response =>{
        return response
    })
})