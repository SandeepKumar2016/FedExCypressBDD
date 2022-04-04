# List Of Search functionality Scenario and Test cases in GWT form
Feature: FedEx Features Testing

Scenario : Verify the Language page to select the English for Netherlands
Given User Launches the URL
When User FedEx application gets launched successfully
Then Validate the URL and Title of the FedEx application

Scenario Outline: Validate the Tracking Page display and search for tracking ID
Given User is on the Home page
When User Navigates to Tracking ID page
Then User Search with '<TrackingID>' 
And User should able to see Error Message
  Examples:
    | TrackingID |
    | TestTrackingNumber |

Scenario: Validate the Customized Tracking Page display
Given User is on the Home page
When User Navigates to Customized Tracking page
Then Validate the URL and Validate the Get Visibility object 

Scenario: Validate the Tracking Page display and search for tracking ID
Given User is on the Home page
When User Navigates to Tracking menu and click on Insert Tracking Number page
Then Validate the Tracking ID field

Scenario: Validate the Get Rate & Shipping Details 
Given User is on the Home page
When User navigate to Get Rates & Trasit Times
Then Validate the URL and the Calculate the Shipping rates heading

Scenario: Validate the Open Account Page and Creation
Given User is on the Home page
When User Navigates to Account Page
And User click on Open An Account and Click on the Open A Personal Account
Then User should able to fill the form

Scenario: Validate the Ship With Account Page
Given User is on the Home page
When User Navigates to Shipping menu
Then Click on the Ship With Account link
And validate the URL and Page Header

Scenario: Validate the Ship Without Account Page
Given User is on the Home page
When User Navigates to Shipping menu
Then Click on the Ship Without Account link
And validate the URL and Page Header