const signedOutLinks = ["Home", "Login", "Signup"];
const signedInLinks = ["Home", "Logout"];
describe('Header', () => {
    beforeEach(() => {
        cy.visit('/');
    });




    it('should contain home login and signup for not authenticated users', () => {
        cy
            .get('[data-cy=header-logo]')
            .should('exist');
        cy
            .get('[data-cy=header-navbar]')
            .children()
            .each((item, index) => {
                cy
                    .wrap(item)
                    .should('contain.text', signedOutLinks[index]);
            });
    });




    it('should contain home and signout for authenticated users', () => {
        cy.login();
        cy.visit('/dashboard');
        cy
            .get('[data-cy=header-logo]')
            .should('exist');
        cy
            .get('[data-cy=header-navbar]')
            .children()
            .each((item, index) => {
                cy
                    .wrap(item)
                    .should('contain.text', signedInLinks[index]);
            });
    });


    
})