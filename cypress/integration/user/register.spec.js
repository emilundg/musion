describe('Register', () => {
    beforeEach(() => {
        cy.visit('/signup');
        cy.task('clearDB');
    });
    it('should require email', () => {
        cy
            .get('[data-cy=signup-button]')
            .click();
        cy
            .get('[data-cy=error-message]')
            .should('contain', 'username can not be blank');
    });
    it('should require password', () => {
        cy
            .get('[data-cy=username]')
            .type('musion_test_user{enter}');
        cy
            .get('[data-cy=error-message]')
            .should('contain', 'password can not be blank');
    });
    it('should give error on not matching passwords', () => {
        cy
            .get('[data-cy=username]')
            .type('musion_test_user');
        cy
            .get('[data-cy=password]')
            .type('musion_test_user_password');
        cy
            .get('[data-cy=confirm-password]')
            .type('does not match{enter}');
        cy
            .get('[data-cy=error-message]')
            .should('contain', 'Passwords do not match');
    });
    it('should navigate to /dashboard on succesful signup', () => {
        cy
            .get('[data-cy=username]')
            .type('musion_test_user{enter}');
        cy
            .get('[data-cy=password]')
            .type('musion_test_user_password');
        cy
            .get('[data-cy=confirm-password]')
            .type('musion_test_user_password{enter}');
        cy
            .url()
            .should('include', '/dashboard');
    });
})
