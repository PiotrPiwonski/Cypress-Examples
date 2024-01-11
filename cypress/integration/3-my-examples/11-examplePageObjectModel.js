/// <reference types="cypress" />

import SelectPage from "../../support/page-object/selectPage";

describe('E2E - Select event', () => {
    it('Selecting options', () => {
        cy.visit('/');
        // wybieranie po nazwie
        cy.get('#jakiś_selektor').select('nazwa_opcji');

        // po value
        cy.get('#jakiś_selektor').select('value_name');

        // po index-ach
        cy.get('#jakiś_selektor').select(1);
    });

    it.only('Selecting all options', () => {
        cy.visit('https://miroslawzelent.pl/kurs-html/lista-wyboru-select/');
        SelectPage.selectAllOption();



        // cy.get('#jakiś_selektor').then(select => {
        //     cy.wrap(select).find('option').each(option => {
        //         cy.wrap(select).select(option.text());
        //     });
        // });

        //  Możecie to zapisać zgodnie z tym co podpowiada cypress. Tutaj, że za każdym razem mamy nową strone (nowy DOM), to musi pobrać ponownie argument. Ja zapisałem to tak i przechodzi.

        // cy.get('#jakiś_selektor').then(select => {
        //     cy.get(select).find("option").each(option => {
        //         cy.get('#jakiś_selektor').select(option.text())
        //     });
        // });
    });
});
