const url = "https://www.fedex.com/en-nl/home.html";
const nlTitle = `FedEx | Express Delivery, Courier & Shipping Services | Netherlands`;
const countryListUrl = `https://www.fedex.com/global/choose-location.html?location=home`;

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

class FedExPage {
  static emailId = 'testuser' + randomNumber(100, 999) + "@gmail.com";
  // Accept All Cookies
  static cookiesObj = `.fxg-cookie-consent__accept`;
  static signUpLink = `#fxg - dropdown - signIn span`;

  static trackingLink = '#fxg-dropdown-signIn span';
  static trackingInput = 'input#trackingModurackingNum';
  static customisedFedextracking = 'a[aria-label="Customised FedEx Tracking"]';
  // accountLink   =  'a[aria-label='Account'] span[class='fxg-mouse']';
  static accountLink = 'a[aria-label="Account"] span[class="fxg-mouse"]';
  static openAccount = 'a[aria-label="OPEN AN ACCOUNT"]';

  static openPersonalaccountButton = 'a[title="OPEN A PERSONAL ACCOUNT"]';
  static firstName = '#first-name';
  static lastName = '#last-name';
  static  address = '#address';
  static postCode = '#postal-code';
  static city = '#city';
  static phone = '#phone';
  static email = '#email';
  static userId = '#userId';
  static password = '#password'
  static enterLogindetailsBtn = 'div.action-bar button';
  static passwordLogindetails = '#password';
  static confirmPassword = '#confirmPassword';
  static acceptTAndC = '.ng-tns-c85-20 input';//check it
  // acceptTAndC= 'label#acceptPrivacyPolicyAndTermsAndConditions-label';//created now
  static createUseridButton = 'button[aria-label="Create your user ID. This screen will change. Please hold on a moment."]';//sandeep4156 is userid
  static accountTypeClick = '#account-type';//select it
  static companyName = '#company-name';
  static vatNum = '#vat';
  static useMyContactcheckbox = '#use-contact-address-label';//check it
  static openAccountBtn = '.ng-tns-c113-22.fdx-c-button--primary.fdx-c-button';

  static creditCardnum = '.ng-tns-c113-22.fdx-c-button--primary.fdx-c-button';
  static shippingLink = 'ul div:nth-child(1) a span';
  static shipWithaccount = 'a[title="ship"]';
  static shipWithoutaccount = 'a[aria-label="Ship without account"]';

  static yourName = '#fx-from-name';
  static addressShipwithoutAccount = '#fx-from-addr1';
  static postCodeshippingWithoutaccount = '#fx-from-zip';
  static cityShippingwithAccount = '#fx-from-city';
  static phoneShippingwithAccount = '#fx-from-phone';

  static recepientName = '#fx-to-name';
  static countryShippingwithAccount = '#fx-to-country';//make it click and select countries from list
  static addressRecepientShippingwithAccount = '#fx-to-addr1';
  static postalCoderecepientShippingwithAccount = '#fx-to-zip';
  static cityrecepientShippingwithAccount = '#fx-to-city';
  static phoneRecepientShippingwithAccount = '#fx-to-phone';

  static continueShippingwithoutAccountBtn = '#fx-address-button';

  static envelopeClick = 'img[aria-label="FedEx Envelope"]';//verify selecting image
  static packageWeight = '#fx-package-recal-packageWeight';
  static calculateRatesBtn = '#fx-package-recalculateRates';
  static deliveryDateSelect = 'span[class="vatRate"] sup';//verify
  static continuePaymentBtn = '#fx-shipment-details-button';

  static continueAftercreditDetails = '#fxid-payment-button';//cannot continue from here as credit card details are unknown. throws error here.  

  static trackingLink = 'div:nth-child(2) > li > a > span';
  static trackingInput = 'input#trackingModuleTrackingNum';
  static trackingButton = '.fxg-tracking-module form[method="POST"] button';
  static customisedFedexTracking = 'a[aria-label="Customised FedEx Tracking"]';
  static fedExTracking = '.fxg-align-left fxg-landing-hero-bg-heading';

  static getVisibility = '.fxg-subtext:nth-child(1) p';

  static launchApplication(){
    cy.visit(url)
  }

  static validateApplicationLaunch(){
    cy.get(this.cookiesObj).click();
  }

  static navigateToGetRatesPage(){
    cy.get("span[aria-label='Get Rates & Transit Times']").click();
  }

  static validateTheGetRatesPage(){
    cy.url().should("eq", "https://www.fedex.com/en-nl/online/rating.html#")
    cy.contains('Calculate FedEx shipping rates.');
  }

  static validateTheTitleAndUrl(){
    cy.title().should("eq", nlTitle);
    cy.url().should("eq", url);
  }

  static searchAndSelectCountry() {
    cy.get(`https://www.fedex.com/en-gb/home.html`)
    cy.get(`.js-geo-global-url`).click();
    cy.url().should("eq", countryListUrl);
    cy.get(`a[href='${homePageUrl}']`).click();
    cy.get(`a[data-country-code="nl"]`).click();
    cy.get(cookiesObj).click();
    cy.get(`span[role=button]`).click();
    if (cy.get(`span[role = button]`).its('length') > 0) cy.get(`span[role = button]`).click();
  }

  static navigateToAcountPage() {
    cy.get(accountLink).click();
  }

  static navigateToHomePage() {
    cy.get(this.cookiesObj).click();
    cy.get(`span[role=button]`).click();
    if (cy.get(`span[role=button]`).its('length') > 0) cy.get(`span[role=button]`).click();
  }

  static navigateToTrackingIdPage(){
    cy.get(this.trackingLink).click();
    cy.get(this.trackingInput).should("be.visible");
    cy.get(this.trackingInput).focus();
  }

  static searchWithTrackingId(TrackingID) {
    cy.get(this.trackingInput).type(TrackingID);
    cy.get(this.trackingButton).click();
  }

  static navigateToOpenAccountPage(){
    fedExObj.navigateToHomePage();
    cy.get(fedExObj.accountLink).click();
    cy.contains('OPEN AN ACCOUNT').click()
    cy.get(fedExObj.openPersonalaccountButton).click();
  }

  static customizedFedExTracking() {
    cy.get(this.trackingLink).click();
    cy.get(this.customisedFedexTracking).click();
    cy.get('body').then((body) => {
      if (body.find(`span.fxg-alert__close-btn`).length > 0) body.find(`span.fxg-alert__close-btn`).click();
    });
   }

   static navigateToShippingMenu() {
    cy.get(this.shippingLink).click();
  }

  static validateShipWithoutAccount(){
    cy.url().should("eq", 'https://www.fedex.com/secure-login/en-nl/#/login-credentials');
    cy.title().should("include", "Login");
    cy.get(this.userId).should("be.visible");
    cy.get(this.password).should("be.visible");
    cy.get(`h1`).should("have.text", " Enter your user ID and password to log in ");

  }

  static validateShipWithoutAccount() {
    cy.url().should("eq", 'https://www.fedex.com/lite/lite-ship.html?locale=en_nl&cntry_code=nl_english#address');
    cy.get("#addressheader").should("be.visible");
    cy.get(".fxlay-full-section h3").should("have.text", `Enter your (From) address and the recipient's (To) address.`);
  }

  static createAccount(){
    cy.get(this.firstName).type("hawlett");
    cy.get(this.lastName).type("packard");
    cy.get(this.address).type("Clara Maria");
    cy.wait(2000)
    cy.get(this.address).type('{downArrow}{enter}');
    cy.wait(2000);
    cy.get(this.phone).type("678675645");
    cy.get(this.email).type(fedExObj.emailId);
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
}

export default FedExPage;