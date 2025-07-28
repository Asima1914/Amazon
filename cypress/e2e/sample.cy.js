describe('sample login',()=>{

    before(()=>{
cy.visit('https://practicetestautomation.com/practice-test-login/')
    })

it('1st test login into to the application',()=>{
    
     cy.get('input#username').type('student')
     cy.get('input#password').type('Password123')
     cy.get('.btn').click()

     cy.url().should('includes','successfully/')  //assertion the url and page
    cy.get('.wp-block-button__link').click()     //logout page

})
// it('2nd case',()=>{

//     cy.fixture('testlogin.json').then((userdata)=>{

    
//      cy.get('input#username').type('userdata.user')
//      cy.get('input#password').type('userdata.pass')
//      cy.get('btn').click()
    
// })
// })
})