/// <reference types="Cypress" />
describe('My Test 8 suite', function() 

{
it('Test on Child window elements', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //Instead of clicking the button that will open a new window, reach to that URL directly!
        cy.get('#opentab').then(function(e1)
        {
            const url=e1.prop('href') //using prop to get the attribute from this elelment
            cy.log(url)
            cy.visit(url)

        })


    })


   })


       