@login
Feature: Demoblaze login functionality test

  Background:
    Given I navigate Demoblaze ecommerce website
    Then the PRODUCT STORE page should be displayed

  Scenario Outline: Login with valid details
    When I click on the login link
    And I login with "<username>" and "<password>"
    Then I click login
    Then I should be logged in successfully
    And I click logout

  
  Scenario Outline: Login with invalid details
    When I click on the login link
    And I login with "<username>" and "<password>"
    Then I click login
    Then I should see an error message indicating login failure

  Scenario Outline: Login with empty username
    When I click on the login link
    And I login with "" and "<password>"
    Then I click login
    Then I should see an error message for missing username

  Scenario Outline: Login with empty password
    When I click on the login link
    And I login with "<username>" and ""
    Then I click login
    Then I should see an error message for missing password

  Examples: 
    | username | password  |
    | Rukh290  | Demoblaze |
    | Rukh291  | Demoblaze |
    | invalidUser | invalidPass |
    | Rukh292  | Demoblaze |  

 