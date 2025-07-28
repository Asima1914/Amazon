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

Cypress.Commands.add('asimalogin',()=>{

cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('[name="username"]').type('student')
        cy.get('[name="password"]').type('Password123')
        cy.get('#submit').click()
     cy.url().should('includes','practicetestautomation.com/logged-in-successfully/')
     cy.contains('Logged In Successfully').should('be.visible')
     cy.contains('Log out')

})