
import Login from "../fixtures/pomlogin";

describe('practice',()=>{
    it('login',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('[name="username"]').type('student')
        cy.get('[name="password"]').type('Password123')
        cy.get('#submit').click()
     cy.url().should('includes','practicetestautomation.com/logged-in-successfully/')
     cy.contains('Logged In Successfully').should('be.visible')
     cy.contains('Log out')
     })


     it('login using data drive pattern',()=>{

        cy.visit('https://practicetestautomation.com/practice-test-login/')

        cy.fixture('testlogin').then((userlogin)=>{

        cy.get('[name="username"]').type(userlogin.user)
        cy.get('[name="password"]').type(userlogin.pass)
        cy.get('#submit').click()
            
        })
     })

     it.only('login using POM',()=>{

      const loginpage=new Login();  
      
      loginpage.Visiting_Url();
      loginpage.Typeusername();
      loginpage.Typepassword();
      loginpage.Pushsubmitbutton();

     })

     it('login using reusable-commands',()=>{

      cy.asimalogin();

     })
    })