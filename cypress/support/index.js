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
