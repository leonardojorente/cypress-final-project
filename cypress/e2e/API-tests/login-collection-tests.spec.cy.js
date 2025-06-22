import '../../support/commands/api-commands/login-commands.js'
import  LoginPayload from '../../fixtures/request-payloads/post-signin-payload.json'
import Ajv from 'ajv';

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

  it('LoginTC02: Success Login whole code', { tags: '@testtag' }, () => {
    cy.request({
      method: 'POST',
      url: 'https://barrigarest.wcaquino.me/signin',
      body:{
          email: 'cypresstest@gmail.com',
          redirecionar: false,
          senha: 'cypress'
      }
    }).its('body.token').should('not.be.empty')
  })

  it('LoginTC03: Success Login checking json schema', () => {
    //Website to generate json schema, based on the current response of the request
    //https://json-to-schema.itential.io/
    // Initialise AJV, plugin used to check json schema
    const ajv = new Ajv();
    
    cy.doLoginAPI(LoginPayload)
      .then(response =>{
        // Validate the response against the schema file
        // eslint-disable-next-line no-undef
        const isValid = ajv.validate(require('../../fixtures/JSON-schemas/login-schema.json'), response.body);
      
        // Output the errors text
        if (!isValid) {
          // eslint-disable-next-line no-undef
          cy.log('Schema validation failed. Errors:', JSON.stringify(validate.errors, null, 2));
          console.error('AJV Validation Errors:', ajv.errorsText());
        }
        // If the JSON is valid, the variable is "true"
        expect(isValid).to.be.true; 
        expect(response.status).to.be.equal(200)
      })
  })
})
