/// <reference types="cypress" />

describe('Visual Regression', () => {
    it('Element loading', () => {
        cy.visit('https://picsum.photos/');
        cy.get('header.content-section-light').then(image => {
            cy.wrap(image).toMatchImageSnapshot();
        });
        //cy.document().toMatchImageSnapshot();
        //cy.percySnapshot();
    });
});
