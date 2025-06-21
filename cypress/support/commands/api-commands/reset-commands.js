import  RelativePath  from '../../../fixtures/endpoint-relative-path.json';

const baserRestURL = Cypress.env('BASE_URL_API')

Cypress.Commands.add('resetApp', () =>{
    cy.request({
        method: 'GET',
        url: `${baserRestURL}${RelativePath.RESET}`,
        headers: { Authorization: `JWT ${Cypress.env('token')}`},
    }).then(response =>{
        return response
    })
})