class AlertPage {
    get btnAlert1() {
        return cy.get('#alert');
    }

    get btnAlert2() {
        return cy.get('#alert-confirm');
    }

    clickOnBtnAlert1() {
        this.btnAlert1.click();
    }

    clickOnBtnAlert2() {
        this.btnAlert2.click();
    }

    verifyAlertText(content) {
        cy.on('window:alert', text => {
            expect(text).to.equal(content);
        });
    }

    verifyAlertConfirmText() {
        cy.on('window:confirm', text => {
            expect(text).to.equal('Zaakceptuj aby kontynuować!');
        });
    }

    acceptAlert() {
        cy.on('window:confirm', () => true);
    }

    rejectAlert() {
        cy.on('window:confirm', () => false);
    }
}

export default new AlertPage();
