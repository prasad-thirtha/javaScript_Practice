const email = Cypress.env('email');
const password = Cypress.env('password');

describe ("first test suite", function () {
    beforeEach( function () {
        
    });
    it( "first test case", function () {
        cy.visit("anyURL");
        cy.get('#signinButton').should('be.visible');


    });
});