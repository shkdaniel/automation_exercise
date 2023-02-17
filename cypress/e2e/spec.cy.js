
import { AccountPage } from "../support/PageObjects/accountPage";
import { ProfilePage } from "../support/PageObjects/profilePage";

before(() => {
  AccountPage.openAccountPage()
});

after(() => {
  AccountPage.clickSignOut()
});


describe('Create An Account', () => {
  
  it('Create account & profile procedures should pass', () => {
    AccountPage.clickCreateAnAccount()
    AccountPage.fillOutTheForm()
    AccountPage.submitAccount()
    AccountPage.verifyYourEmail()
    ProfilePage.openProfile()
    ProfilePage.fillProfileDetails()
    ProfilePage.answerQuestion(true)
    ProfilePage.checkAssociation()
    ProfilePage.uploadAuthrizationLetter()
    ProfilePage.uploadPhotoID()
    ProfilePage.clickSave()
  })
})