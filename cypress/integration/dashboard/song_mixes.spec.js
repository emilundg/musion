describe('Song mixes', () => {
    beforeEach(() => {
        cy.server();
        cy
            .route({method: 'GET', url: '/api/search/*'})
            .as('getSongs');
        cy.login();
        cy.visit('/dashboard');
    });



    it('should add and remove multiple search queries', () => {
        cy
            .get('[data-cy=search-input]')
            .type('cypress hill');
        cy
            .get('[data-cy=add-button]')
            .click();
        cy.wait('@getSongs');
        cy.addQuery('insane in the membrane');
        cy
            .get('[data-cy=search-query-1]')
            .click();
        cy
            .get('[data-cy=search-query-0]')
            .click();
    });



    it('should start playing a song', () => {
        cy.addQuery('avicii');
        cy
            .get('[data-cy=song-row-1]')
            .click();
        cy
            .get('[data-cy=player]')
            .should('exist');
        cy
            .get('iframe[data-cy="player-iframe"]')
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(($iframe) => cy.wrap($iframe).find('.cover-play').click());
    });
});