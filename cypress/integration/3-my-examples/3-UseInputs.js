/// <reference types="cypress" />

describe('E2E - Typing Input event', () => {
    it('Typing on an element input', () => {
        cy.visit('/');
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get('#search').type('szafa{enter}', {delay: 200});
    });

    it('Clearing on an input element', () => {
        cy.get('#search').clear();
        //cy.get('#onetrust-accept-btn-handler').click();
        cy.searchPhrase('komoda', 200);
    });
});
