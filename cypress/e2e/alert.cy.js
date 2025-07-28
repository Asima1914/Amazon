//alert box


describe('handling alertBox from webpage',()=>{
    it.only('alert box',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.url().should('includes','/AutomationPractice/')
        cy.get('#alertbtn').should('be.visible')
        cy.on('window:alert',(string)=>{
            expert(string).to.equal('Hello , share this practice page and share your knowledge')
        })
    })


 it('confirm box',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.url().should('includes','/AutomationPractice/')
        cy.get('#confirmbtn').should('be.visible')
        cy.on('window:alert',(string)=>{
            expert(string).to.equal('Hello , share this practice page and share your knowledge')
            return false
        })
    })

})