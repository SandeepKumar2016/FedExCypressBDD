
class ShippingPage{
  static userId = '#userId';
  static password = '#password'
  
  static validateShipWithAccount(){
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
}

export default ShippingPage;