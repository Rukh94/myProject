Feature: Demoblaze login functionality test

Application regression​ testing

@signup
Scenario: signup with valid username and password
Given I navigigate to Demoblaze website
Then I verify the page displays the word PRODUCT STORE
Then I click on Sign up button
Then I input desired username and password
Then I click on signup button
