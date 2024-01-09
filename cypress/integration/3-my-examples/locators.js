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

        // Zalecana praktyka apobierania elementów - po data-cy
        cy.get('[data-cy="search-bar-input"]');
    });

    it.only('Get items from olx.pl', () => {
        cy.visit("/");

        cy.contains('Kategorie główne');
        cy.contains('[data-cy="home-categories-title"]','Kategorie główne');

        cy.get('li').parents('.css-12bpg3w').find('li').eq(1);
        cy.get('li').parents('.css-12bpg3w')
            .find('li').contains('Pomoc');

    });
});
