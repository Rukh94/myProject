@login
Feature: Demoblaze login functionality test

  Background:
    Given I navigate Demoblaze ecommerce website
    Then the PRODUCT STORE page should be displayed

  Scenario Outline: Login with valid details
    When I click on the login link
    And I login with "<username>" and "<password>"
    Then i click login
    Then I should be logged in successfully
    And I click logout

  Examples: 
    | username | password |
    | Rukh290  | Demoblaze |
    | Rukh291  | Demoblaze |
