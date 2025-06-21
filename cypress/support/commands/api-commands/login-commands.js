import  RelativePath  from '../../../fixtures/endpoint-relative-path.json';

const baserRestURL = Cypress.env('BASE_URL_API')

Cypress.Commands.add('doLoginAPI', (body) =>{
    cy.request({
        method: 'POST',
        url: `${baserRestURL}${RelativePath.LOGIN}`,
        body: body
    }).then(response =>{
        return response
    })
})