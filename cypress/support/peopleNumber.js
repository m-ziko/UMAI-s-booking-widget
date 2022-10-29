
Cypress.Commands.add('Open_people_list',()=>{
    cy.get('.css-1hio1c').should('be.visible').click()

})
Cypress.Commands.add('Select_people_Number',(people)=>{
people =people-1
    cy.get('#react-select-3-option-'+people).click()

})