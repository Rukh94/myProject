Feature: Demoblaze login functionality test

Application regression​ testing
 Background:
    Given I navigate Demoblaze ecommerce website
    Then the PRODUCT STORE page should be displayed
    Then I navigate to the categories section

Scenario Outline: Add a single Item to cart
And I select a single item of my choice
Then I click add to cart button
Then I verify item is added successfully

Scenario: Add multiple Items to cart
And I select a multiple Items of my choice
Then I click add to cart button
Then I verify multiple item is added successfully

# Scenario: Remove Item from cart
# And I select a single item of my choice
# Then I click add to cart button
# Then I click on cart to view added Items
# Then I click click the remove button
# Then I verify item is removed succesfully

# Scenario: Remove one Item from  cart
# And I select a single item of my choice
# Then I click add to cart button
# Then I click on cart to view added Items
# Then I click click the remove button
# Then I verify item is removed succesfully

    Examples:
      | username | password  |
      | Ruk290   | Demoblaze|
    