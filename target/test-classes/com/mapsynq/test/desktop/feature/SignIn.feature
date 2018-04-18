Feature: Sign in using username and password

@FunctionalTest
Scenario Outline: Sign in using valid username and password

Given User already navigated to url
When User clicks on Sign in link
Then Directs user to Sign in page
Then User enters valid "<username>" and "<password>" click on sign-in button
Then User Sign in successfully

Examples:
	| username				     | password |
	| wijerathna.nilmi@gmail.com	 | test321 |