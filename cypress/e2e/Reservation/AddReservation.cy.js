describe('Add Reservation', () => {
  before(()=>{
cy.Open_webApp()
  })
  
  it('Add Reseravtaion for next day', () => {
    let date =' Saturday, 5th November 2022'
    let skybar='1'
    let indoor='2'
    let People='3'
    cy.Open_people_list()
    cy.Select_people_Number(5)
    cy.select_calendar()
    cy.select_day(date)
    cy.select_time_slot('5')
    cy.select_reservation_type(indoor)
    cy.Verify_Reservation_Details_Page_opened()
    cy.Verify_NumberOfPeople_is_Correct('5 people')
    cy.Verify_TimeAndDate_is_Correct('11:00 AM, Saturday November 5th')
    cy.Verify_ReservationType_is_Correct('Indoors')
    cy.Insert_Contatct_Details('mohamed','zakaria','+65 3496 6540','Mahammadzakariasaad@gmail.com')
    cy.Check_Submit_Button('be.disabled')
    cy.Check_Reservation_Policy()
    cy.Check_Submit_Button('not.be.disabled')
    cy.Click_Submit_Button()
    cy.Verify_Payment_Details_Page_opened()
    cy.get('.__PrivateStripeElement > iframe').then($iframe => {

      const iframe = $iframe.contents();
  
      const myInput = iframe.find("#Field-expiryInput");
      cy.wrap(myInput).type("33333");
  
      //you don't need to trigger events like keyup or change
  
  });
  })
})