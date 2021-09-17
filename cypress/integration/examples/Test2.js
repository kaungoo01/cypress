/// <reference types="Cypress" />
describe('My Test2 suite', function() 

{
    it('Test2 one', function()
    {
         //testcase one step
         //open URL
         cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
         cy.get('.search-keyword').type('ca')
         cy.wait(2000)
         cy.get('.products').as('mylocator')
         cy.get('@mylocator').find('.product').should('have.length',4)    
         cy.get('@mylocator').find('.product').eq(2).contains('ADD TO CART').click()

         //Use spy locator
         cy.get('.cart-icon > img').click()
         cy.contains('PROCEED TO CHECKOUT').click()
         cy.get(':nth-child(14)').click()
        //select country
        cy.wait(2000)
        cy.get('select').select('Nepal')
        cy.get('.chkAgree').click()
        cy.wait(2000)
        cy.get('button').click()
    })

        })
  