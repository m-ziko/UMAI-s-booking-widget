Cypress.Commands.add('Verify_Payment_Details_Page_opened',()=>{
    cy.get('.ums-header__title').should('have.text','Payment details')

})