/// <reference types="cypress" />

describe('E2E - File upload', () => {
    it('File upload', () => {
        cy.visit('/');
        cy.get('#jakiś_selektor').attachFile('../fixture/example.jpg');
        //lokalizator do miejsca gdzie wyświetla się nazawa podanego pliku
        // should działa jak expect - czy zawartość się zgadza
        cy.get('span.jakaś_klasa').should('contain', 'example.jpg');
    });
});
