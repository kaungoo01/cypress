/// <reference types="Cypress" />
describe('My Test3 suite', function() 

{
it('Test3 on check box', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //testcase two step

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1') //check it and Assertion called 'be' behavior as checked.
        //verfify the property value is 'option1' of this check box Assertion 'and'

        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')    
        
        cy.get('input[type="checkbox"]').check(['option2','option3']) //Put the 'value' of the property , in this case option 2 and 3.
    })

    it('Test3 on dropdown', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //testcase two step

        //Fix and Static Drop down  > tag name is select#
        cy.get('select').select('option2').should('have.value','option2') //the value of the property 
        //should > Assertion > whether the value 'have' > option2

        //Dynamic Drop down > loop all the options and get the one you want
        cy.get('#autocomplete').type('Ind')

        cy.get('.ui-menu-item div').each(($el,index,$list) => 
        {
            if($el.text()==="India")
            {
                $el.trigger("click")

            }
        })   
        cy.get('#autocomplete').should('have.value','India')

    })    

})


       