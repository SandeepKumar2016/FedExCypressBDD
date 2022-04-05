import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import FedExPage from './FedExPage'
import OpenAccountPage from './OpenAccountPage'
import CustomizedTrackingPage from './CustomizedTrackingPage'
import ShippingPage from './ShippingPage'
  
Given('User Launches the URL', ()=>{
    FedExPage.launchApplication();
});

When('User FedEx application gets launched successfully', ()=>{
    FedExPage.validateApplicationLaunch();
});

Then('Validate the URL Title of the FedEx application', ()=>{
    cy.get(FedExPage.cookiesObj).click();
    FedExPage.validateTheTitleAndUrl();
});

Given('User is on the Home page', ()=>{
    FedExPage.launchApplication();
    FedExPage.navigateToHomePage(); 
});

When('User Navigates to Tracking ID page', ()=>{
    FedExPage.navigateToTrackingIdPage();
});

Then(`User Search with '<TrackingID>`, (TrackingID)=>{
    FedExPage.launchApplication();
    FedExPage.searchWithTrackingId(TrackingID);
});

And('User should able to see Error Message', ()=>{
    cy.get('span.systemErrorMessageTop').should("be.visible");
});

When('User Navigates to Customized Tracking page', ()=>{
    CustomizedTrackingPage.navigateToCustomizedFedExTracking();
});

Then('Validate the URL And Validate the Get Visibility object', ()=>{
    CustomizedTrackingPage.validateCustomizedTrackingPage()
});

When('User Navigates to Tracking menu And click on Insert Tracking Number page', ()=>{
    FedExPage.navigateToTrackingIdPage();
    FedExPage.searchWithTrackingId();
});

Then('Validate the Tracking ID field', ()=>{
    FedExPage.navigateToTrackingIdPage();
    cy.get(FedExPage.trackingInput).should("be.visible");
});

When('User navigate to Get Rates & Trasit Times', ()=>{
   FedExPage.navigateToGetRatesPage();
});

Then('Validate the URL And the Calculate the Shipping rates heading', ()=>{
    FedExPage.validateTheGetRatesPage();
});

When('User Navigates to Account Page', ()=>{    
    FedExPage.navigateToAcountPage();
});

And('User click on Open An Account And Click on the Open A Personal Account', ()=>{
    OpenAccountPage.navigateToOpenAccountPage();
});

Then('User should able to fill the form', ()=>{
    OpenAccountPage.createAccount();
});

When('User Navigates to Shipping menu', ()=>{
    cy.get(FedExPage.shippingLink).clikc()
});

Then('Click on the Ship With Account link', ()=>{
    cy.get(FedExPage.shipWithaccount).click();
    cy.wait(2000);
});

And('validate the URL And Page Header of Ship With Account Page', ()=>{
    ShippingPage.validateShipWithAccount();
});

Then('Click on the Ship Without Account link', ()=>{
    cy.get(FedExPage.shipWithoutaccount).click();
    cy.wait(2000);
});

And('validate the URL And Page Header of Ship Without Account Page', ()=>{
    ShippingPage.validateShipWithoutAccount();
});