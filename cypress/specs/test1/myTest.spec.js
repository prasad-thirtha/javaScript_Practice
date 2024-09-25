const email = Cypress.env('email');
const password = Cypress.env('password');

describe ("first test suite", function () {
    beforeEach( function () {
        cy.visit("https://www.google.com");
    });
    it( "first test case", function () {
        cy.get('[value="Google Search"]').should('be.visible');
    });
    it( "second test case", function () {
        cy.get('[value="I\'m Feeling Lucky"]').should('be.visible');
    });
});