/// <reference types="cypress" />

describe('E2E - Assertions', () => {
    it('Assertions expect and should', () => {
        cy.visit('/');

        // Weryfikacja tekstu
        cy.get('[data-testid="home-categories-title"]')
            .should('contain', 'Kategorie główne');
        cy.get('[data-testid="home-categories-title"]').then(text => {
            expect(text).to.contain('Kategorie główne');
        });

        // Sprawdzenie czy nie zawiera tekstu
        cy.get('[data-testid="home-categories-title"]')
            .should('not.contain', 'cokolwiek czego nie ma');
        cy.get('[data-testid="home-categories-title"]').then(text => {
            expect(text).not.to.contain('cokolwiek czego nie ma');
        });

        // Weryfikacja czy znacznik posiada klasę
        cy.get('[data-cy="search-bar-input"]')
            .should('have.class', 'css-5wwtjc');
        cy.get('[data-cy="search-bar-input"]').then(className => {
            expect(className).to.have.class('css-5wwtjc');
        });

        // Czy element jest widoczny
        cy.get('[data-cy="search-bar-input"]')
            .should('be.visible');
        cy.get('[data-cy="search-bar-input"]').then(element => {
            expect(element).to.be.visible;
        });

        // Weryfikacja ilości pobranych elementów
        cy.get('[data-cy="home-categories-menu-row"]').find('a')
            .should('have.length', 24);
        cy.get('[data-cy="home-categories-menu-row"]').find('a')
            .then(element => {
                expect(element).to.have.length(24);
        });

        // Weryfikacja wartości css danego elementu
        cy.get('[data-cy="search-bar-input"]')
            .should('have.css', 'font-size', '16px');
        cy.get('[data-cy="search-bar-input"]').then(element => {
            expect(element).to.have.css('font-size', '16px');
        });
    });
});
