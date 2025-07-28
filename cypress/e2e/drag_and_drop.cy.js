import '@4tw/cypress-drag-drop'
describe('How to handle drag and drop',()=>{
it('drag and drop',()=>{
cy.visit('https://commitquality.com/practice-drag-and-drop')
cy.get('#small-box').drag('.large-box ').then((success)=>{
assert.isFalse(success)
})
})
})

//assert.isTrue(success)
