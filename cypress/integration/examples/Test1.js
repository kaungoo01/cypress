/// <reference types="Cypress" />
describe('My Test1 suite', function() 

{
    it('Test1 one', function()
    {
         //testcase one step
         //open URL
         cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
         cy.get('.search-keyword').type('ca')
         cy.wait(2000)
         //Assertion > class product , should , this is the one method to check
         cy.get('.product:visible').should('have.length',4)
         //:visable need to add cuz, it will ONLY retreate visiable elements.

        //Parent and Child Chainning
        cy.wait(2000)

        //Create a target Parent, first.
        //as --> alias whatever name.
        cy.get('.products').as('mylocator')
        
        //using 'find' the descendent DOM element of a secific selector. In this case ONLY for 'products'.
        cy.get('@mylocator').find('.product').should('have.length',4)    

        //eq , like a Index , we have 4 and 2 for 2nd button that has 'ADD TO CART' and click it.
        //contain, search the text containing in that element, example the button.
        cy.get('@mylocator').find('.product').eq(2).contains('ADD TO CART').click().then(function() //then > maually handle it only after ADD TO CART
           {
                console.log('Just add it!')
           })
        
        //we want to make an array get all collect all the text, do something, when we found what we looking for...   
        //Method call , each ... it will run one element at a time $e1, $e2, $e3 ...etc
        cy.get('@mylocator').find('.product').each(($el, index, $list) => {

          //create a web element , on $e1 , this section for product pic, text, pic, etc...
          const textVeg = $el.find('h4.product-name').text() //Give us a text. h4.product-name text , this 4 texts (Caulifower , Carrot, Capsium, Cashews)
          
          if (textVeg.includes('Cashews'))
                {
                   $el.find('button').trigger("click")
                }
          
    })

    
    /* //assert if logo text is correctly displayed
    cy.get('.brand').should('have.text','GREENKART')

     
    //this is to print in logs
    cy.get('.brand').then(function(logoelement) //first get the element, then (until this is promised), add a function with variable
    {
        cy.log(logoelement.text()) //log is the method to print in the test runner
    
    })

    it('Test1 two', function()
    {

        //testcase two step
    }) */

    }) 
})