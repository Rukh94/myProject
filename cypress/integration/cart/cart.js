/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(function () {
  cy.fixture('example').then(function (data) {
    this.data = data;
  });
});

Given(`I navigate Demoblaze ecommerce website`, () => {
    cy.visit('https://demoblaze.com/');
    // [Given] Sets up the initial state of the system.
});

Then(`the PRODUCT STORE page should be displayed`, () => {
    cy.get("a[class='navbar-brand']").should('contain', 'PRODUCT STORE');
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`I navigate to the categories section`, () => {
    cy.scrollTo('center')
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`I select a single item of my choice`, () => {
    cy.xpath("//a[normalize-space()='Nokia lumia 1520']").click();
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`I click add to cart button`, () => {
    cy.xpath("//a[normalize-space()='Add to cart']").should('be.visible').click()
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`I verify item is added successfully`, () => {
    cy.get('#cartur').click() ;
     cy.xpath("//td[normalize-space()='Nokia lumia 1520']").should('contain','Nokia lumia 1520')
    });

Then(`I select a multiple Items of my choice`, () => {
    cy.wait(2000)
     cy.xpath("(//a[@class='nav-link'])[1]").click()
      cy.xpath("//a[normalize-space()='Nexus 6']").click()
       cy.xpath("//a[normalize-space()='Add to cart']").click()
        cy.wait(2000)

    cy.xpath("(//a[@class='nav-link'])[1]").click()
     cy.wait(2000)
      cy.xpath("//a[normalize-space()='Samsung galaxy s6']").click()
       cy.xpath("//a[normalize-space()='Add to cart']").click()
        cy.wait(2000)
    
    cy.xpath("(//a[@class='nav-link'])[1]").click()
     cy.wait(2000) 
      cy.xpath("//a[normalize-space()='Iphone 6 32gb']").click()
       cy.xpath("//a[normalize-space()='Add to cart']").click() 
        
});

Then('I verify multiple item is added successfully',()=>{
    cy.get('#cartur').click();
})

// Then(`I navigate cart section`, () => {
//     // [Then] Describes the expected outcome or result of the scenario.
// });

// Then(`I select Item to remove from cart`, () => {
//     // [Then] Describes the expected outcome or result of the scenario.
// });

// Then(`I click click the remove button`, () => {
//     // [Then] Describes the expected outcome or result of the scenario.
// });

// Then(`I verify item is removed succesfully`, () => {
//     // [Then] Describes the expected outcome or result of the scenario.
// });