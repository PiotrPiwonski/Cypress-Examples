/// <reference types="cypress" />

import AlertPage from "../../support/page-object/alertPage";

describe('E2E - Alerts', () => {
    it('Alert', () => {
        cy.visit('https://testowanie-oprogramowania.pl/lekcje/alerty/');
        cy.get('#alert').click();
        cy.on('window:alert', text => {
            expect(text).to.equal('Przykładowa treść alertu');
        });
    });

    it('Alert confirm', () => {
        cy.get('#alert-confirm').click();
        cy.on('window:confirm', text => {
            expect(text).to.equal('Zaakceptuj aby kontynuować!');
        });

        // kliknięcie w anuluj w alercie
        cy.on('window:confirm', () => false);
    });

    it('Alert POM', () => {
        AlertPage.clickOnBtnAlert1();
        AlertPage.verifyAlertText('Przykładowa treść alertu');
    });

    it('Alert confirm POM', () => {
        AlertPage.clickOnBtnAlert2();
        AlertPage.verifyAlertConfirmText();
        AlertPage.acceptAlert();
    });
});
