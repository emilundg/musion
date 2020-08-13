describe('Cypress', () => {
    beforeEach(() => {
        cy.login();
        cy.visit('/');
    })
    it('should be working', () => {})
})