/// <reference types="cypress" />

describe('E2E - Home Page', () => {
    it('Lesson about locators from olx.pl', () => {
        cy.visit("/");

        // Po znaczniku
        cy.get('a');

        //  Identyfikator id
        cy.get('#search');

        // Po klasie
        cy.get('.css-5wwtjc');

        // Po atrybutach
        cy.get('[data-cy="search-bar-input"]');

        // Dokładniejszy atrybut wraz z podaniem znacznika
        cy.get('input[data-cy="search-bar-input"]');

        // Pobieranie elementów po kilku atrybutach
        cy.get('[data-cy="search-bar-input"][data-testid="search-input"]');

        // Zalecana praktyk apobierania elementów - po data-cy
        cy.get('[data-cy="search-bar-input"]');
    });
});
