describe('Login', () => {
    beforeEach(() => {
        cy.visit('/login');
    })
    it('should greet with Sign in', () => {
        cy
            .get('[data-cy=greeting]')
            .should('contain', 'Sign In');
    });
    it('should link to register', () => {
        cy
            .get('[data-cy=signup-link]')
            .should('have.attr', 'href', '/register');
    });
    it('should require email', () => {
        cy
            .get('[data-cy=login-button]')
            .click();
        cy
            .get('[data-cy=error-message]')
            .should('contain', 'email can not be blank');
    });
    it('should require password', () => {
        cy
            .get('[data-cy=email]')
            .type('jane{enter}');
        cy
            .get('[data-cy=error-message]')
            .should('contain', 'password can not be blank');
    });
    it('should navigate to /dashboard on succesful login', () => {
        cy
            .get('[data-cy=email]')
            .type('jane{enter}');
        cy
            .get('[data-cy=password]')
            .type('doe{enter}');
        cy
            .url()
            .should('include', '/dashboard');
    });
})