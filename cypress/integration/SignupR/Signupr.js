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

When(`I input a randomly generated username and password`, () => {
    it('Signs up using a randomly generated username and password', () => {
        // Step 1: Generate random credentials
        const randomUsername = `Ola${Math.floor(Math.random() * 1000)}`;
        cy.wait(2000)
        cy.get('#sign-username').type(randomUsername); // Use generated username
        const randomPassword = `Damm${Math.floor(Math.random() * 100)}`
        cy.wait(2000)
        cy.get('#sign-password').type(randomPassword); // Use generated password

    // [When] Describes the action or event that triggers the scenario.
});
});

Then(`I click on signup button`, () => {
    cy.get('button[onclick="register()"]').should('be.visible').click()
    // [Then] Describes the expected outcome or result of the scenario.
});