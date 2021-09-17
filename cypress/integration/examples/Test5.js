/// <reference types="Cypress" />
describe('My Test5 suite', function() 

{
it('Test5 on Popup elements', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //get the element
        //assertion > should 
        //be > behavior > visiable
        
        cy.get('#alertbtn').click()

        //TO get the text of that popup
        cy.on('window:alert',(str) => 
        {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        }
        
        )

       cy.get('#confirmbtn').click()

        //TO get the text of above Confirmation popup
        cy.on('window:confirm',(str) => 
        {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        }
        
        )
    })

it('Test5 on Child Tab and Moving Between Pages', function()
    {
        //click the Button , remove the target attribute by using invoke method.
        cy.get('#opentab').invoke('removeAttr','target').click()

                //validate by getting the URL
                cy.url().should('include','index')

        //Go back to the previous
        cy.go('back')

                //validate by getting the URL
                cy.url().should('include','AutomationPractice')

        cy.wait(200)

     })

   })


       