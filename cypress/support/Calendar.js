Cypress.Commands.add("select_calendar",()=>{
    cy.get('#um-reservation-date-picker').should('be.visible').click()


})
Cypress.Commands.add('select_day',(date)=>{
    cy.get('[aria-label="Not available.'+date+'"'+'] > .day-content').click()

})
Cypress.Commands.add('select_time_slot',(slot)=>{
  
    cy.get('#timeslot-morning-'+slot).click()
})
Cypress.Commands.add('select_reservation_type',(type)=>{
    cy.get('.um-location-popover > :nth-child('+type+')').click()
})
