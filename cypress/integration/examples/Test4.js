/// <reference types="Cypress" />
describe('My Test4 suite', function() 

{
it('Test4 on Invisible elements', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //get the element
        //assertion > should 
        //be > behavior > visiable
        cy.get('#displayed-text').should('be.visible')
        //
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')

        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })

it('Test4 on radio button', function()
    {
        cy.get('[value="radio2"]').check().should('be.checked')
        //using value with attribute
    })


    
   })


       