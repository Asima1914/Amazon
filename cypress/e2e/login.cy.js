describe('login page',()=>{
    it('login',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
         cy.get('h1')
         cy.wait(2000)
        cy.get('[id="name"]').type(' ')
        cy.wait(1000)
        cy.get('[id="email"]').type(' ')
        cy.wait(1000)
        cy.get('[id="phone"]').type(' ')
        cy.wait(1000)
        cy.get('[id="textarea"]').type(' ')
        cy.wait(1000)

    })


it('Selectors',()=>{
    it('radio button',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.wait(1000)
        cy.get('.form-check.form-check-inline').eq(0).click()
        cy.wait(1000)
        cy.get('.form-check.form-check-inline"]').eq(1).click()
    })
})

it('suggestion dropdown',()=>{
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('#country').type('ind')
    cy.get('option').each(($element)=>{
      if($element.text() === 'India')
        cy.wrap($element).click()
    })
})
})



//motto: neagative thinking with the positive income

//ts: laptop, atm card, atm, bike,school etc
//tc: detailed instructions

//frameworks:  mocha framework,cumcumber,JEST,.NET,PLAYRIGHT,WEBDRIVER IO ETC...

//MOCHA framework:Javascript, vs code, node js(environment)

//describe it...BDD style...>behavioural data driven pattern
//describe ....test  scenerio(test suite){}
//assertions: library-->sinon,chain asserrtion, jquery language

//cypress: 0.0.3 --->14.5.1--> cypresss documentation (docs)--cypress io


//cucumber frm: Given, When, Then etc