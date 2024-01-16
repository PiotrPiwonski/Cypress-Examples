/// <reference types="cypress" />

describe('E2E - Variables', () => {
    it('Environment variables', () => {
        cy.visit(Cypress.env("url"));
    });
});
