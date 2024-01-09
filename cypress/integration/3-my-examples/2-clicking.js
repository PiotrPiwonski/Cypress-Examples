/// <reference types="cypress" />

describe('E2E - Clicking event', () => {
    it('Clicking on an element', () => {
        cy.visit('/');
        cy.contains('[data-testid="search-submit"]', 'Szukaj').click();
        cy.get('[href="/"]').click();
    });
});
