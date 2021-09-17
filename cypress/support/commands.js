// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add('selectProduct', (productName) => {  
//Method to iterate if the title element's text is same as something click THAT add cart belongs to it
    cy.get('h4.card-title').each(($e1, index, $list) => 
        { //Iterate with each Method
 
            const text=$e1.text()
            if(text.includes(productName))
            {
            cy.get("button.btn.btn-info").eq(index).click()
            
            }
        })  
    })          
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
