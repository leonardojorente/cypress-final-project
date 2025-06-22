import '../../support/commands/api-commands/login-commands.js'
import  LoginPayload from '../../fixtures/request-payloads/post-signin-payload.json'
import Ajv from 'ajv';

LoginPayload.email = Cypress.env('USER');
LoginPayload.senha = Cypress.env('PASSWORD');

describe('API Login Tests', () => {
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
