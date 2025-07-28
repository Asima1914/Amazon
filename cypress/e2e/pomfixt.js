class LoginPage{
    Visit(){
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    }
    Username(){
        cy.get('[id="username"]').type('student')
    }
    Passwordfield(){
        cy.get('[id="password"]').type('Password123')
    }
    
}