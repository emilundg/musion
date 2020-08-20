import './commands';

Cypress
    .Commands
    .add('login', () => {
        cy
            .request('POST', '/api/users/login?username=jane&password=doe')
            .its('body')
            .as('currentUser')
            .then((resp) => {
                window
                    .localStorage
                    .setItem('token', resp.token)
            });
    })

Cypress
    .Commands
    .add('addQuery', (searchParam) => {
        cy
            .get('[data-cy=search-input]')
            .type(searchParam);
        cy
            .get('[data-cy=add-button]')
            .click();
        cy.wait('@getSongs');
    })
