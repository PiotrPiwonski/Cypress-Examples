describe('LightHouse test', function () {
    it('first lighthouse test', () => {
        cy.visit('https://testowanie-oprogramowania.pl');
        cy.lighthouse({
            performance: 85,
            accessibility: 100,
            "best-practices": 85,
            seo: 85,
            pwa: 100,
        });
    });
});
