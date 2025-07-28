describe('practice',()=>{
    it('login',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('[name="username"]').type('student')
        cy.wait(1000)
        cy.get('[name="password"]').type('Password123')
        cy.wait(1000)
        cy.get('#submit').click()
     cy.url().should('includes','practicetestautomation.com/logged-in-successfully/')
     cy.contains('Logged In Successfully').should('be.visible')
     cy.contains('Log out')
     })

    })

    it('Negative username test',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('[name="username"]').type('student122')
        cy.get('[name="password"]').type('Password123')
        cy.get('#submit').click()
        cy.contains('Your username is invalid!')
       .should('be.visible')
       cy.contains('Your username is invalid!').should('have.text','Your username is invalid!')

    })

it('Negative password test',()=>{
    
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('[name="username"]').type('student')
        cy.get('[name="password"]').type('password@1334')
        cy.get('#submit').click()
        cy.contains('Your password is invalid!')
        .should('be.visible')  
        cy.contains('Your password is invalid!').should('have.text','Your password is invalid!')
})



describe('sample login',()=>{        //=> pipe line


    it('login ',()=>{
        

    })
})

