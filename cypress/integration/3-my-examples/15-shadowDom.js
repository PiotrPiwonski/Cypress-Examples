/// <reference types="cypress" />

describe('E2E - Shadow DOM', () => {
    it('Use shadow method', () => {
        cy.visit('https://www.htmlelements.com/demos/menu/shadow-dom/index.htm');
        // cy.contains('File');
        //cy.get('.smart-ui-component').shadow().contains('File').click();
        cy.get('.smart-ui-component').shadow().contains('Edit').click();
    });
});
