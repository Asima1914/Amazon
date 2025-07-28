
class Login{

    Visiting_Url(){
     cy.visit('https://practicetestautomation.com/practice-test-login/')

    }

    Typeusername(){
    cy.get('[name="username"]').type('student')

    }

    Typepassword(){
    cy.get('[name="password"]').type('Password123')

    }

    Pushsubmitbutton(){
    cy.get('#submit').click()

    }

}

export default Login;