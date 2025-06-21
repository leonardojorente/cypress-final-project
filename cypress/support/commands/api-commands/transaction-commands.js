import  RelativePath  from '../../../fixtures/endpoint-relative-path.json';

const baserRestURL = Cypress.env('BASE_URL_API')

Cypress.Commands.add('createNewTransaction', (body) =>{
    cy.request({
        method: 'POST',
        url: `${baserRestURL}${RelativePath.TRANSACTION}`,
        headers:{
            authorization: `JWT ${Cypress.env('token')}`
        },
        body: body
    }).then(response =>{
        return response
    })
})