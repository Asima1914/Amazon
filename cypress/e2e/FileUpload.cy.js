  describe('How to upload files in webpage',()=>{
    it('file upload',()=>{
        cy.visit('https://commitquality.com/practice-file-upload')
        cy.get('#file-input').selectFile(['cypress//e2e//spec.cy.js','cypress//e2e//viewport.cy.js'])
        cy.get('[type="submit"]').click()

        cy.on('window:alert',(ok)=>{
            expect(ok).to.equal('File successfully uploaded!')
        })
    })
})


//radio button
//suggestion dropdown box
//static dropdown box
//list select
//check box
//window
//new tab
//alert
//confirm box
//mouse hover
//iframe
//webtable
//drag and drop
//viewport
//navigation
//file upload
//add to cart


//forward
//back
//hub
//prefix
//suffix
