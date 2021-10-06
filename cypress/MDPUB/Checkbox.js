describe('My 2nd Test Suite', function()
{

    it('First Test Case',function()
    {

        //test step one - Open Browser + Login
        cy.visit("http://rfmdpub-vq1:22080/configurator")
        .get('#userName').type('qauser')
        .get('#userPassword').type('testgfi')
        .get('.btn').click()  

        //click the Menu
        cy.get('#selected').click()
        cy.wait(2000)

        cy.get('#idDefaultURL').click()

        cy.get('body div div fieldset div div div table tbody tr td').each(($e1, index, $list) => {
 
            const text=$e1.text()
            if(text.includes("ALGOMI_FINRA_TRACE"))
            {
         
                cy.get(".recordSetRow").eq(index).next().then(function(check)
                {
                    const checkText = check.text()

                }
                
                )
                
            }
         
        })
               
    }
    )
	
	}
	)
