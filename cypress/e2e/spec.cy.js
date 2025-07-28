describe('login page',()=>{
    it.only('check user',()=>{

        cy.visit('http://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(3000)
        cy.get('#dropdown-class-example').select('Option1')
        cy.wait(1000)
        cy.get('#dropdown-class-example').select('Option2')
         cy.wait(1000)
        cy.get('#dropdown-class-example').select('Option3')
         cy.wait(1000)
            })
})


describe('Selectors',()=>{
    it('radio button',()=>{

         cy.visit('http://rahulshettyacademy.com/AutomationPractice/')
         cy.get('h1')
         cy.wait(1000)
         cy.get('[value="radio1"]').click().should('be.checked')
         cy.wait(1000)
         cy.get('[value="radio2"]').click()
         cy.wait(1000)
         cy.get('[value="radio2"]').click() 
    })

})
it('suggestion dropdown',()=>{
    cy.visit('http://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#autocomplete').click().type('af')
    cy.get('.ui-menu-item').each(($element)=>{
      if($element.text() === 'Afganistan')
        cy.wrap($element).click()
    })
})


it('select dropdown',()=>{
    cy.visit('http://rahulshettyacademy.com/AutomationPractice/')
    cy.wait(2000)
    cy.get('#dropdown-class-example').select('option1')
    cy.wait(2000)
    cy.get('#dropdown-class-example').select('option2')
    cy.wait(2000)
    cy.get('#dropdown-class-example').select('option3')
})
