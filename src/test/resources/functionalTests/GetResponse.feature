@FUNCTIONAL
Feature: Get Rssponse of Books Api

Description: Purpose is to get Response and Validate body


Background: User generates token for Authorisation
	Given I am an authorized user

@SMOKE
Scenario: Verify Response when user get list of all books FOR SMOKE.
	Given A list of books are available
	Then Response Body Contains some data
	
@REGRESSION
Scenario: Verify Response when user get list of all books for REGRESSION.
	Given A list of books are available
	Then Response Body Contains some data
	
@REGRESSION
Scenario: Added to Check Jenkins Reports list of all books for REGRESSION.
	Given A list of books are available
	Then Response Body Contains some data