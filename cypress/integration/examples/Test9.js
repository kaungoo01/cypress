/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
describe('My Test 8 suite', function() 

{
it('Test on Frame elements', function()
    {
        //Frame is html doc on top another html document, weapped around by the frame, we have to switch frames
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //Install the plugin "npm install -D cypress-iframe"
        // /// <reference types="cypress-iframe" />
        //import 'cypress-iframe'
        //Load the frame
        cy.frameLoaded('#courses-iframe')
        //add iframe
        cy.iframe().find("a[href*='mentorship']").eq(0).click()

        //Assertion
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
        


    })

   })


       