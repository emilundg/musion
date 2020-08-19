import './commands';

Cypress
    .Commands
    .add('login', () => {
        cy
            .request('POST', 'http://localhost:5000/api/users/login?username=jane&password=doe')
            .its('body')
            .as('currentUser');
    })
