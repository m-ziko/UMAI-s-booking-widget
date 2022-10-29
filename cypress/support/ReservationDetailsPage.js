Cypress.Commands.add('Verify_Reservation_Details_Page_opened',()=>{
    cy.get('.ums-header__title').should('have.text','Reservation details')

})
Cypress.Commands.add('Verify_NumberOfPeople_is_Correct',(People)=>{
    cy.get('.um-user-reserv-details-section--content > :nth-child(1)').should('have.text', People)

})
Cypress.Commands.add('Verify_TimeAndDate_is_Correct',(Timedate)=>{
    cy.get('.um-user-reserv-details-section--content > :nth-child(2)').should('have.text',Timedate) 
})
Cypress.Commands.add('Verify_ReservationType_is_Correct',(ReservationType)=>{
    cy.get('.um-user-reserv-details-section--content > :nth-child(3)').should('have.text',ReservationType) 
})
Cypress.Commands.add('Insert_Contatct_Details',(FirstName,LastName,Phone,mail)=>{
    cy.get('#um-field--first-name').type(FirstName)
    cy.get('#um-field--last-name').type(LastName)
    cy.get('#um-field--phone-number').clear().type(Phone)
    cy.get('#um-field--email').type(mail)
})
Cypress.Commands.add('Check_Reservation_Policy',()=>{
    cy.get('#um-field-checkbox').check()
})
Cypress.Commands.add('Check_Submit_Button',(Status)=>{
    cy.get('#ums-proceed-to-add-payment-details-button').should(Status)
})
Cypress.Commands.add('Click_Submit_Button',(Status)=>{
    cy.get('#ums-proceed-to-add-payment-details-button').click()
})


