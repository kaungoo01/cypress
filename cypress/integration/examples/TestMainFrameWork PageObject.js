/// <reference types="Cypress" />
import HomePage from "./pageObjects/HomePage"
import ProductPage from "./pageObjects/ProductPage"
/* Things to add assertion to validate,
1. What user entered in name box will show in example
2. Name has atleast 2 characters, so we will get the attribute to check it
3. Make sre Entrepreneur is disabled */

describe('My Test Main Frame suite', function() 

{
    before(() => {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then(function(data)
                {
                    this.data=data //'This' a global variable, which will available very where!
                })

      })


it('Test on Template elements', function()
    {
        const homePage=new HomePage() //Create a variable
        const productPage = new ProductPage()

        cy.visit("https://www.rahulshettyacademy.com/angularpractice/")
     
       //object from HomePage
       homePage.getNameBox().type(this.data.name)

       //object from HomePage
       homePage.getGender().select(this.data.gender)

       //Twoway obj from HomePage
       homePage.getTwowayDate().should('have.value',this.data.name)

       //getNamebox
       homePage.getNameBox().should('have.attr','minlength','2') //or any other attribute such as 'require', etc.

       //Validate the Entrepreneur from HomePage 
       homePage.getEntrepreneaur().should('be.disabled')

       //Go to Shop
       homePage.getShopTab().click()

       //Adding the products
       this.data.productName.forEach(function(element) {
                cy.selectProduct(element) //Reuse from commands.js

        })
        //Click on Cart button
        // checkOut from Product Page
        productPage.checkOut().click()


    })
 })


       