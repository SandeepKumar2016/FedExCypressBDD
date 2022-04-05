const url = "https://www.fedex.com/en-nl/home.html";
const nlTitle = `FedEx | Express Delivery, Courier & Shipping Services | Netherlands`;
const countryListUrl = `https://www.fedex.com/global/choose-location.html?location=home`;

class FedExPage {

  static signUpLink = `#fxg - dropdown - signIn span`;

  static trackingInput = 'input#trackingModurackingNum';
  static customisedFedextracking = 'a[aria-label="Customised FedEx Tracking"]';
  static accountLink = 'a[aria-label="Account"] span[class="fxg-mouse"]';
  static openAccount = 'a[aria-label="OPEN AN ACCOUNT"]';
  static openPersonalaccountButton = 'a[title="OPEN A PERSONAL ACCOUNT"]';


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

  static shippingLink = 'ul div:nth-child(1) a span';
  static shipWithaccount = 'a[title="ship"]';
  static shipWithoutaccount = 'a[aria-label="Ship without account"]';

  static trackingLink = '#fxg-dropdown-signIn span';


  static navigateToGetRatesPage(){
    cy.get("span[aria-label='Get Rates & Transit Times']").click();
  }

  static navigateToAcountPage() {
    cy.get(FedExPage.accountLink).click();
  }

  static validateTheGetRatesPage(){
    cy.url().should("eq", "https://www.fedex.com/en-nl/online/rating.html#")
    cy.contains('Calculate FedEx shipping rates.');
  }

  // Accept All Cookies
  static cookiesObj = `.fxg-cookie-consent__accept`;

  static launchApplication(){
      cy.visit(url)
  }

  static navigateToHomePage() {
    cy.get(this.cookiesObj).click();
    cy.get(`span[role=button]`).click();
    if (cy.get(`span[role=button]`).its('length') > 0) cy.get(`span[role=button]`).click();
  }

  static validateApplicationLaunch(){
    cy.get(this.cookiesObj).click();
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

  static navigateToShippingMenu() {
    cy.get(this.shippingLink).click();
  }

  static navigateToTrackingIdPage(){
    cy.get(FedExPage.trackingLink).click();
    cy.get(this.trackingInput).should("be.visible");
    cy.get(this.trackingInput).focus();
  }

  static searchWithTrackingId(TrackingID) {
    cy.get(this.trackingInput).type(TrackingID);
    cy.get(this.trackingButton).click();
  }
}

export default FedExPage;