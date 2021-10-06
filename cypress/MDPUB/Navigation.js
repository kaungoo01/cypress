

describe('My First Test Suite', function()
{

    it('First Test Case',function()
    {

        //test step one - Open Browser
        cy.visit("http://rfmdpub-vq1:22080/configurator")
        .get('#userName').type('qauser')
        .get('#userPassword').type('testgfi')
        .get('.btn').click()  

        //Main Page

        //click the Menu
        cy.get('#selected').click()
        cy.wait(2000)

        //Feed Page
        cy.get(':nth-child(1) > .menuOption').click()
        cy.wait(2000)
        //verification code

        //click the Menu
        cy.get('#selected').click()
        cy.wait(2000)

        //Subscription group
        cy.get(':nth-child(3) > .menuOption').click()
        cy.wait(2000)
        //verification code

        //click the Menu
        cy.get('#selected').click()
        cy.wait(2000)

        //Xcloud Subscription group
        cy.get(':nth-child(4) > .menuOption').click()
        cy.wait(2000)
        //verification code

        //click the Menu
        cy.get('#selected').click()
        cy.wait(2000)

        //EAPI Subscription group
        cy.get(':nth-child(5) > .menuOption').click()
        cy.wait(2000)
        //verification code

        //click the Menu
        cy.get('#selected').click()
        cy.wait(2000)

        //Unused/Duplicated Subscription
        cy.get(':nth-child(6) > .menuOption').click()
        cy.wait(2000)
        //verification code

        //click the Menu
        cy.get('#selected').click()
        cy.wait(2000)

        //Unused/Duplicated Subscription
        cy.get('#idDefaultURL').click()
        cy.wait(2000)
        //verification code
    }
    )
	
	}
	)
