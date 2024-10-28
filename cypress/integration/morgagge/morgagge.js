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
 Given('I am on the Mortgage calculator website', function(){
cy.visit('https://www.mortgagecalculator.org/')
})

 When('I enter the following data', (dataTable) => {
    cy.scrollTo('center')
    cy.wait(2000)
     cy.get('#homeval').should('be.visible').clear().type(dataTable.rawTable[1][1]);
cy.wait(2000)
      cy.get('#downpayment').should('be.visible').clear().type(dataTable.rawTable[2][1])
 cy.wait(2000)
      cy.get('#intrstsrate').should('be.visible').clear().type(dataTable.rawTable[3][1])
  cy.wait(2000)
      cy.get('#loanterm').should('be.visible').clear().type(dataTable.rawTable[4][1])
      cy.wait(2000)
      cy.get('select[ name="param[start_month]').should('be.visible').select(dataTable.rawTable[5][1])
      cy.wait(2000)
      cy.get('#start_year').should('be.visible').clear().type(dataTable.rawTable[6][1])
})

  When('accept default value for all the remaining values', ()=>{

})

  When('I click on calculate link', ()=>{
    cy.get('input[type="submit"]').should('be.visible').click()

})
Then('I should get mortgage offer with {string},{string},{string},{string},{string} and {string}',(totalMonthlyPayment, downPaymentAmount, downPaymentPercentage, loanPayoffDate, totalIntrestPaid , monthlyTaxPaid)=> {
   //Mortgage Repayment Summary would contain this datas
   cy.get('')
})

