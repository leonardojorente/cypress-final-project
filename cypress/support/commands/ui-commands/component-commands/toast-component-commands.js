export const ToastComponentLocators = {
    toastMessage: '.toast-message'
};

Cypress.Commands.add('getToastMessage', () => {
    cy.log('Get toast message element');
    cy.get(ToastComponentLocators.toastMessage)
});