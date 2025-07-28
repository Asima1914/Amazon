  describe('Assertion',()=>{

    it('login',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.oxd-text--h5').should('contain.text',"Login")
        cy.get('[type="submit"]').should('be.visible')
        cy.get('[type="submit"]').click()
        cy.wait(2000)
        cy.get('p').should('contain.text','Forgot your password? ')
    })

})

// assertion -- chai library