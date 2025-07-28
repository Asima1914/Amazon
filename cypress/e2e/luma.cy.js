describe('luma iframe',()=>{

    it('iframe',()=>{

        cy.visit('https://luma-store.creator-spring.com/')
        cy.iframeLoaded('[class="sc-1w3tvxe-0 elgXyH"]')
        cy.iframe('[class="sc-1q9fwvy-0 gHHEeh"]')
        cy.iframe().find('a[href="http://www.w3.org/1999/xlink"]').click()
        cy.contains('button').click()
        cy.contains('[class="sc-1q9fwvy-0 gHHEeh"]').click()

        cy.get('[class="sc-vsbu1b-1 huiEmf"]').type('')
        

    })
})