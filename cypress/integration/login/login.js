/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach( function(){
    cy.fixture('example').then(function(data)
    {
        this.data = data
    })
})

Given('I navigate Demoblaze ecommerce website', function(){
    cy.visit('https://demoblaze.com/')
})

Then("the PRODUCT STORE page should be displayed", function (){
    cy.get("a[class='navbar-brand']").should('contain','PRODUCT STORE')
})
When("I click on the login link", function(){
    cy.get("a[id='login2']").should('be.visible').click();
})

When("I login with {string} and {string}" ,(username,password)=>{ 
    cy.wait(2000)
    cy.get("input[id='loginusername']").should('be.visible').type(username)
    cy.wait(2000)
    cy.get("input[id='loginpassword']").should('be.visible').type(password)
    cy.wait(2000)
})
Then("i click login",function(){
    cy.wait(2000)
    cy.get("button[onclick='logIn()']").should('include.text', 'Log in').click();
})

Then("I should be logged in successfully",function(){
    cy.wait(4000)
    cy.get("a[id='nameofuser']").should('include.text', 'Welcome')
})
Then("I click logout",function(){
    cy.wait(2000)
    cy.get("#logout2").should('be.visible').click()
})