/// <reference types="Cypress" />
describe('My Test 7 suite', function() 

{
it('Test on Mouse over inviciable elements', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
     
        //Method called 'show' to open this mouse over, the stable way
        //cy.get('div.mouse-hover-content').invoke('show') //makesure to add the element, NOT on the button itself, but on the child 'div.mouse-hover-content'
        //cy.contains('Top').click()
        //or 
        //Force click
        cy.contains('Top').click({force: true})

        //check the URL
        cy.url().should('include','top')
           

    })


 })


       