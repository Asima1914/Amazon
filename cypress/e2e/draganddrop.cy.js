describe('navigation',()=>{
    it('test',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[placeholder="Username"]').type('Admin')
        cy.get('[placeholder="Password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.get('h6').contains('Dashboard')
        cy.wait(1000)
        cy.get('.oxd-main-menu-item').eq(2).click()
        cy.wait(2000)
        cy.go('back')
        cy.go('forward')

       
    })
})

import '@4tw/cypress-drag-drop'
describe('How to handle drag and drop',()=>{
it('drag and drop',()=>{
cy.visit('https://commitquality.com/practice-drag-and-drop')
cy.get('#small-box').drag('.large-box ').then((success)=>{
assert.isTrue(success)
})
})
})