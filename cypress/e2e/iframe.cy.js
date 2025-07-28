//iframe is a isolated content fromt the html file
//how to access th iframe using cypress

// <reference types='cypress-iframe'/>


import 'cypress-iframe'

describe('Handling Iframe',()=>{
    it('Iframe',()=>{
        cy.visit('http://rahulshettyacademy.com/AutomationPractice/')
       cy.frameLoaded('#courses-iframe')
       cy.wait(4000)
       cy.iframe().find('[href="/"]').eq(0).click()
       cy.wait(4000)
       cy.iframe().find('a[href="mentorship"]').eq(0).click()
       cy.wait(4000)
       cy.iframe().contains('PLATINUM')
       cy.wait(2000)
       cy.iframe().contains('JOIN NOW').click()

    }) 

    it('Mouse Hover',()=>{
        cy.visit('http://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover')
        cy.contains('Top').click({force:true})
        cy.wait(4000)
        cy.contains('Reload').click({force:true})
        
    })
})