//open new window and tab

// ctrl+shift+I open to inspect
//press right click and then it show inspect option to click

//id, class,attribute,tag,-css selector
//cy.get,visit,url,title,origin- locator


describe('Test the new window &tab',()=>{
    it('open new Tab',()=>{
 cy.visit('http://rahulshettyacademy.com/AutomationPractice/')
 cy.get('#opentab').invoke('removeAttr','target').click()
 cy.origin('https://www.qaclickacademy.com/',()=>{
    cy.contains('Courses').click()
 })
    })

it('new window',()=>{
    cy.visit('http://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#openwindow').click().then(()=>{
        cy.wait(2000)
        cy.contains("Home").click()

    })

})
})



