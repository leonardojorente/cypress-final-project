it('Basic test', { tags: '@envTest' }, () => {
  cy.visit('https://barrigareact.wcaquino.me')
  cy.get('small').should('contain','Seu Barriga - Nunca mais esqueça de pagar o aluguel.')
})
