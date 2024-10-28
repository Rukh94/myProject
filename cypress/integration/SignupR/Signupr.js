import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(`I navigate to Demoblaze website`, () => {
    cy.visit('https://demoblaze.com/');
});

Then(`I verify the page displays the word PRODUCT STORE`, () => {
    cy.get("a[class='navbar-brand']").should('contain', 'PRODUCT STORE');
});

Then(`I click on Sign up button`, () => {
    cy.get('#signin2').should('be.visible').click();
});

When(`I input a randomly generated username and password`, () => {
    // Generate random credentials
    const randomUsername = `Ola${Math.floor(Math.random() * 1000)}`;
    const randomPassword = `Damm${Math.floor(Math.random() * 100)}`;
    
    cy.wait(2000);
    cy.get('#sign-username').type(randomUsername); // Use generated username
    cy.get('#sign-password').type(randomPassword); // Use generated password
});

Then(`I click on signup button`, () => {
    cy.get('button[onclick="register()"]').should('be.visible').click();
});
