import '../../support/commands/api-commands/login-commands.js'
import  LoginPayload from '../../fixtures/request-payloads/post-signin-payload.json'

LoginPayload.email = Cypress.env('USER');
LoginPayload.senha = Cypress.env('PASSWORD');

describe('API Login Tests', () => {
  it('TC01 Success Login by API', { tags: 'smoke' }, () => {
    cy.doLoginAPI(LoginPayload)
      .then(response =>{
        expect(response.status).to.be.equal(200)
        /**
        * ABOUT PERFORMANCE - Up to 1 second (Fast), Between 1 and 5 seconds
        * (Acceptable - user lose the perception os instantly use)
        * and Above 5 seconds (Slow - alert the user with load and reason)
        **/
        expect(response.duration).to.not.be.greaterThan(1000)
        expect(response.body).to.have.property('token')
      })
  })
})
