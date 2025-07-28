describe('How to handle the add to cart',()=>{
it('add product',()=>{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('[type="search"]').type('Ca').click()
    cy.get('.product').should('have.length',5)
    cy.get('.product').eq(3).contains('ADD TO CART').click()
    cy.get('.increment').eq(3).contains('+').click()
    cy.get('.decrement').eq(3).click({force : true})
    cy.screenshot('test1')
    cy.get('.brand.greenLogo').screenshot('greenKart')
})
})     