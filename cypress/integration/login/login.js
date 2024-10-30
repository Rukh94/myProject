/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(function () {
  cy.fixture('example').then(function (data) {
    this.data = data;
  });
});

Given('I navigate Demoblaze ecommerce website', function () {
  cy.visit('https://demoblaze.com/');
});

Then('the PRODUCT STORE page should be displayed', function () {
  cy.get("a[class='navbar-brand']").should('contain', 'PRODUCT STORE');
});

When('I click on the login link', function () {
  cy.get("a[id='login2']").should('be.visible').click();
  cy.wait(1000); // wait for login modal to appear
});

// Scenario: Login with empty username
When("I login with {string} and {string}", (username, password) => {
    // Leaving the username blank if username input is an empty string
    if (username) {
      cy.get("input[id='loginusername']").clear().type(username);
    } else {
      cy.get("input[id='loginusername']").clear();
    }
  
    // Leaving the password blank if password input is an empty string
    if (password) {
      cy.get("input[id='loginpassword']").clear().type(password);
    } else {
      cy.get("input[id='loginpassword']").clear();
    }
  });
  
Then("I click login", function () {
  cy.get("button[onclick='logIn()']").should('include.text', 'Log in').click();
  cy.wait(2000); // wait for login action to complete
});

Then("I should be logged in successfully", function () {
  cy.get("a[id='nameofuser']").should('include.text', 'Welcome');
});

Then("I click logout", function () {
  cy.get("#logout2").should('be.visible').click();
});

Then("I should see an error message indicating login failure", function () {
  cy.on('window:alert', (alertText) => {
    expect(alertText).to.contain('User does not exist.');
    return true;
  });
});

Then("I should see an error message for missing username", function () {
  cy.on('window:alert', (alertText) => {
    expect(alertText).to.contain('Please fill out Username and Password.');
    return true;
  });
});

Then("I should see an error message for missing password", function () {
  cy.on('window:alert', (alertText) => {
    expect(alertText).to.contain('Please fill out Username and Password.');
    return true;
  });
});
