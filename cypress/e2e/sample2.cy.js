describe('Sample login',()=>{
    

it('test login using test drive',()=>{
 cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.fixture('testlogin.json').then((userdata)=>{

     cy.get('input#username').type(userdata.user)
     cy.get('input#password').type(userdata.pass)
     cy.get('.btn').click()
    
})
})
})