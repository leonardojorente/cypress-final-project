import '../../support/commands/ui-commands/login-commands.js'
import '../../support/commands/ui-commands/component-commands/app-header-component-commands.js'

const baseUrlWeb = Cypress.env('BASE_URL_WEB')
const userName = Cypress.env('USER')
const password = Cypress.env('PASSWORD')

describe('Network Intercept Tests', () => {
  beforeEach(() => {
    cy.visit(baseUrlWeb)
  })

  it('LoginTC01: Intercept Login test', { tags: '@smoke' }, () => {
    cy.intercept('POST', '/signin').as('submitRequest')

    cy.insertEmail(userName)
    cy.insertPassword(password)
    cy.clickLoginButton()
    cy.wait('@submitRequest').then((interception) => {
      expect(interception.request.method).to.equal('POST')
      expect(interception.response.statusCode).to.equal(200)
      expect(interception.response.body).to.have.property('nome', "leonardo Jorente")
    })
  })
})