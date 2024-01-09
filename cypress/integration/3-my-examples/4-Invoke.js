/// <reference types="cypress" />

describe('E2E - Invoke method', () => {
    it('Invoke', () => {
        cy.visit('/');

        // Pobieranie wartości z danego elementu
        cy.contains('[data-testid="search-submit"]', 'Szukaj')
            .invoke('text').then(text => {
                cy.log(text);
        });

        // Uzyskanie dostępu do wartości atrybutu
        cy.contains('[data-testid="search-submit"]', 'Szukaj')
            .invoke('attr', 'type').then(type => {
           cy.log(type);
        });

        // Pobieranie wartości value
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get('#search').type('szafa', {delay: 200});
        cy.get('#search').invoke('prop', 'value')
            .then(value => {
                cy.log(value);
            });
    });
});
