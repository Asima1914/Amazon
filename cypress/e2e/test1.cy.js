describe('login page',()=>{
    it('login',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
        cy.get('[name="username"]').type('Admin')
        cy.wait(2000)
       cy.get('[type="password"]').type('admin123')
       cy.wait(2000)
       cy.get('[type="submit"]').click()

        

    })
})

