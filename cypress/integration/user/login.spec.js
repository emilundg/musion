describe('login', () => {
    beforeEach(() => {
        cy.visit('/login')
    })
    it('should greet with Sign in', () => {
        const greeting = cy.get('[data-cy=greeting]');
        greeting.contains('Login');
    })
    it('should link to register', () => {})
    it('should require email', () => {})
    it('should require password', () => {})
    it('should require valid username and password', () => {})
    it('should navigate to / on succesful login', () => {})
})