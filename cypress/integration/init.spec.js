describe('Cypress', () => {
    it('should be working', () => {
        expect(true)
            .to
            .equal(true)
    })
    it('visits the app', () => {
        cy.visit('/')
    })
})