@signup2
Feature: Sign Up

  Scenario: Sign up with dynamic credentials
    Given I navigigate to Demoblaze website
    Then I verify the page displays the word PRODUCT STORE
    Then I click on Sign up button
    When I input a randomly generated username and password
    Then I click on signup button