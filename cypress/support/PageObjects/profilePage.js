export class ProfilePage {

    static openProfile() {
        cy.get(".user-button").contains(`Hi ${Cypress.env('FIRST_NAME')}`).invoke('show');
        cy.get(".menu-container").contains('Profile and Settings').click({force: true}); 
        cy.wait(3000) 
    }

    static fillProfileDetails() {
        cy.get("input[name='ssn']").type(Cypress.env('SSN'));

        cy.get("button[name='maritalStatus']").click().then(() => {
            cy.get("li[role='option']").contains(Cypress.env('MARITAL_STATUS')).click();
        });

        cy.get("button[name='residenceStatus']").click().then(() => {
            cy.get("li[role='option']").contains(Cypress.env('RESIDENCE_STATUS')).click();
        });

        cy.get("button[name='citizenshipCountry']").click().then(() => {
            cy.get("li[role='option']").contains(Cypress.env('COUNTRY_OF_CITIZENSHIP')).click();
        });

        cy.get("input[name='dob']").type(Cypress.env('DATE_OF_BIRTH'));

        cy.get("input[name='address']").type(Cypress.env('ADDRESS'));

        cy.get("input[name='city']").type(Cypress.env('CITY'));

        cy.get("input[name='zipCode']").type(Cypress.env('ZIP_CODE'));

        cy.get("button[name='state']").click().then(() => {
            cy.get("li[role='option']").contains(Cypress.env('STATE')).click();
        });

        cy.get("button[name='country']").click().then(() => {
            cy.get("li[role='option']").contains(Cypress.env('COUNTRY')).click();
        });
    }

    static answerQuestion(areYou = false) {
        if (areYou) {
            cy.get("input[id='user-profile-has-regulatory-associations-true']").click();
        } else {
            cy.get("input[id='user-profile-has-regulatory-associations-false']").click();
        }
        cy.wait(1000);
    }

    static checkAssociation(
        options = ['Broker-dealer', 
                   'Investment advisor', 
                   'FINRA or other SRO (self-regulatory organization)', 
                   'State or Federal securities regulator']) {

        options.forEach(element => {
            cy.get("*.text-sm")
                .contains(element)
                .parent()
                .find("input[type='checkbox']")
                .check()

        });
    }

    static uncheckAssociation(
        options = ['Broker-dealer', 
                   'Investment advisor', 
                   'FINRA or other SRO (self-regulatory organization)', 
                   'State or Federal securities regulator']) {

        options.forEach(element => {
            cy.get("*.text-sm")
                .contains(element)
                .parent()
                .find("input[type='checkbox']")
                .uncheck()

        });
    }

    static uploadAuthrizationLetter() {
        cy.get(".grid").contains('Association authorization letter *')
            .parent().parent()
            .find(".text-md").contains('Drag and drop your files here or')
            .selectFile(Cypress.env('AUTHORIZATION_LETTER'), { action: 'drag-drop'})
            
    }

    static uploadPhotoID() {
        cy.get("*.text-md").contains('Government-issued photo ID *')
            .nextUntil("*.margin-y--lg")
            .find(".text-md").contains('Drag and drop your files here or')
            .selectFile(Cypress.env('PHOTO_ID_PATH'), { action: 'drag-drop'})
    }

    static clickSave() {
        cy.get("button[data-testid='submit-button']").contains('Save').click()
    }


}
