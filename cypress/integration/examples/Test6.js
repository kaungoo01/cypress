/// <reference types="Cypress" />
describe('My Test 6 suite', function() 

{
it('Test on Web Table elements', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //First need to create a locator to isolate the table
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => { //Iterate with each Method
 
            const text=$e1.text()
            if(text.includes("Python"))
            {
         
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price) //we're moving between sibling tags ".next"
                //The index iteration will be updating to 7th 
                //> Right 'next' column to capture that element 
                //> 'then' and save in "price" use function
                {
                 const priceText=   price.text() //Assign a constant value priceText
                 expect(priceText).to.equal('25') //priceText as 25
                })
            }
         
        })
         
         
        })
        


    })





       