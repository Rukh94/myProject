Feature: Demoblaze login functionality test

Application regression​ testing
 Background:
    Given I navigate Demoblaze ecommerce website
    Then the PRODUCT STORE page should be displayed

@signup
Scenario Outline: signup with valid username and password
Then I click on Sign up button
And I signup with "<username>" and "<password>" 
Then I click on signup button

 @signup
 Scenario Outline: Signup with blank username
  Then I click on Sign up button
  And I signup with "" and "<password>"
  Then I click on signup button
  Then I should see an error message indicating username is required

  @signup
Scenario Outline: Signup with blank password
  Then I click on Sign up button
  And I signup with "<username>" and ""
  Then I click on signup button
  Then I should see an error message indicating password is required

  @signup
Scenario Outline: Signup with an existing username
  Then I click on Sign up button
  And I signup with "<username>" and "<password>"
  Then I click on signup button
  Then I should see an error message indicating the username is already taken

  Examples: 
    Examples: 
  | username   | password  |
  | Rukh300    | Demoblaze |  # existing username
  | Rukh310    | Demoblaze |  # existing username
  | Faridat300 | Demoblaze |  # new username
  | Rukh292    | Demoblaze |
