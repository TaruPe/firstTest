describe('Cura Make Appointment', function () {

    beforeEach(function () {
      cy.visit('https://katalon-demo-cura.herokuapp.com/');
    });
  
    it('Click on Make Appointment', function () {

        // btn-make-appointment click on this
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();
      
        // Wait for the URL to change after login
        cy.url().should('include', '#appointment');
      
        // Perform the following steps only after the URL has changed
        cy.get('select').select('Hongkong CURA Healthcare Center'); // select - Hongkong CURA Healtcare Center

        // checkbox click - #chk_hospotal_readmission
        cy.get('#chk_hospotal_readmission').click(); 

        cy.get('#radio_program_medicaid').click();
        cy.get('#txt_visit_date').type('20-11-2025');
        cy.get('#txt_comment').click({force: true});
        cy.get('#txt_comment').type('Matti Meikäläinen will be available at 20/11/2025');

        // click : btn-book-appointment
        cy.get('#btn-book-appointment').click();

        // Wait for the URL to change after login
        cy.url().should('include', '/appointment.php#summary');
      
         // h2 : Appontment Confirmation
        cy.get('h2').should('have.text', 'Appointment Confirmation');
        
        cy.get('#comment').should('have.text', 'Matti Meikäläinen will be available at 20/11/2025');
    });
  });
  