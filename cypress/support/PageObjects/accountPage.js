export class AccountPage {

    static openAccountPage() {
        cy.visit(Cypress.config().baseUrl);
        cy.get(".logo").should('be.visible');
        cy.viewport('macbook-16');
    }

    static clickCreateAnAccount() {
        cy.get("*.join-button")
            .contains("Create An Account")
            .click()
        cy.wait(1000)
    }

    static fillOutTheForm(accredited = false) {
        cy.get("input[data-testid='firstName']").type(Cypress.env('FIRST_NAME'));
        cy.get("input[data-testid='lastName']").type(Cypress.env('LAST_NAME'));
        cy.get("input[data-testid='email']").type(Cypress.env('EMAIL_ADDRESS'));
        cy.get("input[data-testid='password']").type(Cypress.env('PASSWORD'))
        cy.get("input[data-testid='confirm-password']").type(Cypress.env('PASSWORD'));
        if (accredited) {
            cy.get("input[id='accreditedYes']").click();
        } else {
            cy.get("input[id='accreditedNo']").click();
        }
        cy.get("input[id='hasAgreedTos']").click();
        cy.solveGoogleReCAPTCHA();
    }

    static submitAccount() {
        cy.get("button[data-testid='submit-button']")
            .contains("Create an account")
            .click();
        cy.wait(1000);
    }

    static verifyYourEmail(skip = true) {
        if (skip) {
            cy.get("button[data-testid='verify-mfa-skip']")
                .contains("Skip, I'll do it later")
                .click();
        } else {
            cy.get("button[data-testid='verify-mfa-send-code']")
                .contains("Send email")
                .click();
        }
        cy.wait(1000);
    }

    static clickSignIn() {
        cy.get("*.log-in-button")
            .contains("Sign In")
            .click();
        cy.wait(1000)
    }

    static clickSignOut() {
        cy.get("*.log-in-button")
            .contains("Sign Out")
            .click();
        cy.wait(1000);
    }

    static loginAccount() {
        cy.get("input[id='loginEmailTextbox']").type(Cypress.env('EMAIL_ADDRESS'));
        cy.get("input[id='loginPasswordTextbox']").type(Cypress.env('PASSWORD'));
        cy.get("*.login-button").contains('Log In').click();
    }

}