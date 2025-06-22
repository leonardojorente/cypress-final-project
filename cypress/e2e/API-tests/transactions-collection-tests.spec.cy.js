import { generateRandomString } from '../../support/commands/utils/utils-commands.js';
import  TransactionPayload  from '../../fixtures/request-payloads/post-transacoes-payload.json';
import  AccountPayload  from '../../fixtures/request-payloads/post-contas-payload.json';
import '../../support/commands/api-commands/login-commands.js'
import '../../support/commands/api-commands/account-commands.js'
import '../../support/commands/api-commands/transaction-commands.js'

let accountId
describe('API transaction Tests', () => {
  before(() => {
    //create account for transaction
    AccountPayload.nome = `randomAccountName ${generateRandomString(4)}`
    
    cy.createAccount(AccountPayload).then(response =>{
      accountId = response.body.id
    })

  })

  it('AccountTC01: Create a new trasaction by api', { tags: 'smoke' }, () => {
    //gets curent date and time
    const currentDateAndTime = new Date()
    //gets only the date and set the format to pt-br
    const currentDate = currentDateAndTime.toLocaleDateString('pt-br')

    TransactionPayload.data_pagamento = currentDate;
    TransactionPayload.data_transacao = currentDate;
    TransactionPayload.descricao = `description ${generateRandomString(3)}`;
    TransactionPayload.envolvido = `interested ${generateRandomString(3)}`;
    TransactionPayload.conta_id = accountId

    cy.createNewTransaction(TransactionPayload).then(response =>{
      expect(response.status).to.be.equal(201)
      expect(response.duration).to.not.be.greaterThan(1000)
      expect(response.body.descricao).to.be.equal(TransactionPayload.descricao)
    })
  })
})