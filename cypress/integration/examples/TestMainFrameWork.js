/// <reference types="Cypress" />
/* Things to add assertion to validate,
1. What user entered in name box will show in example
2. Name has atleast 2 characters, so we will get the attribute to check it
3. Make sre Entrepreneur is disabled */

describe('My Test Main Frame suite', function() 

{
    before(() => {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then(function(data)
                {
                    this.data=data //'This' a global variable, which will available very where!
                })

      })


it('Test on Template elements', function()
    {
        cy.visit("https://www.rahulshettyacademy.com/angularpractice/")
     
        //Enter the data in normal way
       /* cy.get('input[name="name"]:nth-child(2)').type('Edward')
          cy.get('select').select("Male") */

       //Getting test data from Fixture > go to before()
       cy.get(':nth-child(1) > .form-control').type(this.data.name)
       cy.get('select').select(this.data.gender)

       //Validate on the below Example box
       cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)

       //Validate the attribute's property has 'minlength' 
       cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2') //or any other attribute such as 'require', etc.

       //Validate the Entrepreneur is disabled
       cy.get('#inlineRadio3').should('be.disabled')

       //Go to Shop
       //If a product name is iphone , click Add button

        cy.get(':nth-child(2) > .nav-link').click()
        
        //Call for special command > support > command
        cy.selectProduct('Blackberry')   

    })


   })


       