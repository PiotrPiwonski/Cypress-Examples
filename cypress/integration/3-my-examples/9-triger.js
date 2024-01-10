/// <reference types="cypress" />

describe('E2E - Scrolling / hovering', () => {
    it('Hovering', () => {
        cy.visit('/');
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get('[title="Jak działa OLX.pl"]').trigger('focus').click();
    });

    it('Scrolling', () => {
        cy.get('a[href="https://www.olx.pl/oferty/"]').scrollIntoView();
    });
});
