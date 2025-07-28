describe('Handeling webtable',()=>{
    it('webtable',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.contains('Practice Page')
        cy.get('table[name="courses"]').should('be.visible')
        cy.get('table[name="courses"] tr')
        .contains('Learn SQL in Practical + Database Testing from Scratch')
        cy.get('table[name="courses"]').should('be.visible')
        cy.get('table[name="courses"] tr')
        .contains('td','Learn JMETER from Scratch - (Performance + Load) Testing Tool')
    })
})