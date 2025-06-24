import '../../support/commands/api-commands/login-commands.js'
import  LoginPayload from '../../fixtures/request-payloads/post-signin-payload.json'

LoginPayload.email = 'leonardoprodenv@gmail.com'
LoginPayload.senha = 'prodenv'

describe('API Login Tests', () => {
  it('TC01 Success Login by API', { tags: 'smoke' }, () => {
    cy.doLoginAPI(LoginPayload)
      .then(response =>{
        expect(response.body).to.include({
          nome: 'prod env',
          id: 61146
        }).and.to.have.keys('token')

        expect(response.status).to.be.equal(200)      })
  })
})
