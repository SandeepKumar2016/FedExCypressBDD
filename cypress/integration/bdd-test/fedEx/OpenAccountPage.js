import FedExPage from './FedExPage'

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

class OpenAccountPage {
    static firstName = '#first-name';
    static lastName = '#last-name';
    static  address = '#address';
    static postCode = '#postal-code';
    static city = '#city';
    static phone = '#phone';
    static email = '#email';
    static enterLogindetailsBtn = 'div.action-bar button';
    static passwordLogindetails = '#password';
    static confirmPassword = '#confirmPassword';
    static acceptTAndC = '.ng-tns-c85-20 input';//check it

    static createUseridButton = 'button[aria-label="Create your user ID. This screen will change. Please hold on a moment."]';//sandeep4156 is userid
    static accountTypeClick = '#account-type';//select it
    static companyName = '#company-name';
    static vatNum = '#vat';
    static useMyContactcheckbox = '#use-contact-address-label';//check it
    static openAccountBtn = '.ng-tns-c113-22.fdx-c-button--primary.fdx-c-button';
  
    static creditCardnum = '.ng-tns-c113-22.fdx-c-button--primary.fdx-c-button';
    static emailId = 'testuser' + randomNumber(100, 999) + "@gmail.com";

    static createAccount(){
        cy.get(this.firstName).type("hawlett");
        cy.get(this.lastName).type("packard");
        cy.get(this.address).type("Clara Maria");
        cy.wait(2000)
        cy.get(this.address).type('{downArrow}{enter}');
        cy.wait(2000);
        cy.get(this.phone).type("678675645");
        cy.get(this.email).type(this.emailId);
        cy.get(this.enterLogindetailsBtn).click();
    
        //create Fedex UserID
        cy.get(this.passwordLogindetails).type("Amloo4156");
        cy.get(this.confirmPassword).type("Amloo4156");
        cy.get(this.acceptTAndC).focus();
        cy.get(this.acceptTAndC).check({ force: true });
        cy.get(this.createUseridButton).click();
    
        console.log("Length is ", cy.get(".ng-star-inserted h1").its('length'));
        if (cy.get(".ng-star-inserted h1").its('length') > 0) {
          return;
        }
    
        cy.get(this.enterLogindetailsBtn).click();
        cy.get(this.creditCardnum).type("5634233434565678");
      }

     
      
      static navigateToOpenAccountPage(){
        FedExPage.navigateToHomePage();
        cy.get(FedExPage.accountLink).click();
        cy.contains('OPEN AN ACCOUNT').click()
        cy.get(FedExPage.openPersonalaccountButton).click();
      }
    
}

export default OpenAccountPage;