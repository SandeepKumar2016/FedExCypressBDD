import FedExPage from "./FedExPage";

class CustomizedTrackingPage{
  static getVisibility = '.fxg-subtext:nth-child(1) p';
 

    static navigateToCustomizedFedExTracking() {
        cy.get(FedExPage.trackingLink).click();
        cy.get(FedExPage.customisedFedexTracking).click();
        cy.get('body').then((body) => {
          if (body.find(`span.fxg-alert__close-btn`).length > 0) body.find(`span.fxg-alert__close-btn`).click();
        });
    }

    

    validateCustomizedTracmingPage(){
      cy.url().should("eq", "https://www.FedExPage.com/en-nl/tracking/advanced.html")
      cy.get(this.getVisibility).should("have.text", 'Get visibility and details on the status of your shipments - all in a fully customised format.');
    }
}

export default CustomizedTrackingPage;