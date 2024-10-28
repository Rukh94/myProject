import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

Given(`I navigigate to Demoblaze website`, () => {
    cy.visit('https://demoblaze.com/')
    // [Given] Sets up the initial state of the system.
});

Then(`I verify the page displays the word PRODUCT STORE`, () => {
    cy.get("a[class='navbar-brand']").should('contain','PRODUCT STORE')
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`I click on Sign up button`, () => {
    cy.get('#signin2').should('be.visible').click()
    // [Then] Describes the expected outcome or result of the scenario.
});


Then(`I input desired username and password`, () => {
    cy.wait(3000)
    cy.get('#sign-username').should('be.visible').type("Damola199")
    cy.wait(3000)
    cy.get('#sign-password').should('be.visible').type("Dami0905")
    //input for desirable password
    //  Describes the expected outcome or result of the scenario.
});


Then(`I click on signup button`, () => {
    cy.get('button[onclick="register()"]').should('be.visible').click()
    // [Then] Describes the expected outcome or result of the scenario.
});

