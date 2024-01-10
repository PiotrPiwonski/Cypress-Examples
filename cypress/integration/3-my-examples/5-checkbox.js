/// <reference types="cypress" />

describe('E2E - Clicking checkbox', () => {
    it('Checkbox', () => {
        cy.visit('/');
        // Do zaznaczenia checkbox-a używamy opcji .check()
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get('#search').type('szafa{enter}', {delay: 200});
        cy.get('[data-testid="dropdown-head"]').eq(0).click();
        cy.get('[data-testid="flyout-content"]')
            .find('input').then(checkbox => {
                cy.get(checkbox).eq(0);
                cy.get(checkbox).eq(1);
                cy.get(checkbox).eq(2);
                cy.get(checkbox).eq(3).check({force: true});
                cy.get(checkbox).eq(3).invoke('prop', 'checked').then(checked => {
                    cy.log(checked);
                });
        });
    });
});
