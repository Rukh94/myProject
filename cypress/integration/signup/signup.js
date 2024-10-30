import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(`I navigate Demoblaze ecommerce website`, () => {
    cy.visit('https://demoblaze.com/');
    // [Given] Sets up the initial state of the system.
});

Then(`the PRODUCT STORE page should be displayed`, () => {
    cy.get("a[class='navbar-brand']").should('contain', 'PRODUCT STORE');
    // [Then] Confirms the PRODUCT STORE page is displayed.
});

Then(`I click on Sign up button`, () => {
    cy.get('#signin2').should('be.visible').click();
    // [Then] Clicks the sign-up button.
});

When(`I signup with {string} and {string}`, (username, password) => {
    cy.wait(2000);
    
    // Input username if provided, otherwise clear the field
    if (username) {
        cy.get('#sign-username').clear().type(username);
    } else {
        cy.get('#sign-username').clear();
    }
    
    // Input password if provided, otherwise clear the field
    if (password) {
        cy.get('#sign-password').clear().type(password);
    } else {
        cy.get('#sign-password').clear();
    }
    // [When] Inputs the provided username and password for signup.
});


Then(`I signup with {string} and  {string}`, (Existingusername, password) => {
    cy.wait(2000);
    
    // Input username if provided, otherwise clear the field
    if (Existingusername) {
        cy.get('#sign-username').clear().type(username);
    } else {
        cy.get('#sign-username').clear();
    }
    
    // Input password if provided, otherwise clear the field
    if (password) {
        cy.get('#sign-password').clear().type(password);
    } else {
        cy.get('#sign-password').clear();
    }
    // [When] Inputs the provided username and password for signup.
});


Then(`I click on signup button`, () => {
    cy.get('button[onclick="register()"]').should('be.visible').click();
    // [Then] Clicks the final signup button.
});

// Success message for valid signup
Then(`I should see a success message indicating signup was successful`, () => {
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Sign up successful.');
    });
    // Checks for a success alert.
});

// Error message for blank username
Then(`I should see an error message indicating username is required`, () => {
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Please fill out Username and Password.');
    });
    // Checks for an error alert indicating missing username.
});

// // Error message for blank password
Then(`I should see an error message indicating password is required`, () => {
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Please fill out Username and Password.');
    });
    // Checks for an error alert indicating missing password.
});

// Error message for existing username
Then(`I should see an error message indicating the username is already taken`, () => {
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('This user already exists.');
    });
    // Checks for an error alert indicating duplicate username.
});
