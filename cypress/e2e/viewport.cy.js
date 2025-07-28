describe('Handle the screen resolution',()=>{
    it('viewport',()=>{
        cy.visit('https://www.flipkart.com/')
       cy.wait(1000)
        cy.viewport(550,750)
         cy.wait(1000)
        cy.viewport('iphone-6')
         cy.wait(1000)
        cy.viewport('macbook-15')
         cy.wait(1000)
        cy.viewport('samsung-note9')
         cy.wait(1000)

    })
})

//cypress.io
//folder structure
//e2e -end to end folder handle the test cases
//fixture -its like a helper to stored or handle the mocked data and stub data
//support- it will handle the custome commands


