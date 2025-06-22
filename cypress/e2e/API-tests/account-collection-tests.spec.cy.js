import '../../support/commands/api-commands/login-commands.js'
import '../../support/commands/api-commands/account-commands.js'
import Utils from '../../support/commands/utils/utils-commands.js'
import  AccountPayload  from '../../fixtures/request-payloads/post-contas-payload.json'

let token

describe('API Account Tests', () => {
  before(() => {
    token = Cypress.env('token')
  })

  it('AccountTC01: Add Account', { tags: 'smoke' }, () => {
    AccountPayload.nome = `randomAccountName ${Utils.generateRandomString(4)}`
    cy.createAccount(AccountPayload).then(response =>{
      expect(response.status).to.be.equal(201)
      expect(response.duration).to.not.be.greaterThan(1000)
      expect(response.body).to.have.property('id')
      expect(response.body).to.have.property('nome', AccountPayload.nome)
    })
  })

  it('AccountTC02: Add Account whole code', { tags: 'smoke' }, () => {
    const accountName = `randomAccountName ${Utils.generateRandomString(4)}`

    cy.request({
      method: 'POST',
      url: 'https://barrigarest.wcaquino.me/contas',
      headers: { Authorization: `JWT ${token}`},
      body:{
        nome: accountName
      }
    }).as('response')

    cy.get('@response').then(res => {
      expect(res.status).to.be.equal(201)
      expect(res.duration).to.not.be.greaterThan(1000)
      expect(res.body).to.have.property('id')
      expect(res.body).to.have.property('nome', accountName)
    })
  })

})
    
    
