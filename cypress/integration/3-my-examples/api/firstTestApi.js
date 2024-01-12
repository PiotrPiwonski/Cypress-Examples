/// <reference types="cypress" />

describe('E2E - API tests', () => {
    let apiData;
    beforeEach(() => {
        cy.fixture('example').then(data => {
            apiData = data;
        });
    })

    it('Api tags verification', () => {
        cy.intercept('GET', 'https://api.realworld.io/api/tags').as('tagRequest');
        cy.visit('https://angularjs.realworld.io/#/');
        cy.wait('@tagRequest');
        cy.get('@tagRequest').then(res => {
            console.log(res);
            expect(res.response.statusCode).to.equal(200);
            expect(res.response.body.tags).to.contain('eos')
                .and.to.contain('est');
        });
    });

    it('Incorrect login', () => {
        cy.intercept('POST', 'https://api.realworld.io/api/users/login')
            .as('loginRequest');
        cy.get('a.nav-link').contains('Sign in').click();
        cy.login('email@test.com', '123456@');
        cy.wait('@loginRequest');
        cy.get('@loginRequest').then(res => {
            console.log(res);
            expect(res.response.statusCode).to.equal(403);

            expect(res.response.statusMessage).to.equal('Forbidden');

            cy.fixture('example').then(data => {
                expect(res.response.statusMessage).to.equal(data.statusMessage403);
            });

            expect(res.response.statusMessage).to.equal(apiData.statusMessage403);
        });
    });
});
