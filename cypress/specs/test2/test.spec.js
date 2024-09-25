describe ("new test suite", function () {
    beforeEach( function () {
        cy.visit("https://www.google.com");
    });
    it( "first test case", function () {
        cy.get('[title="Search"]').should('be.visible').type("cypress automation");
        cy.get('[value="Google Search"]').eq(0).should('be.visible').click({force: true});
    });
    it( "second test case", function () {
        cy.contains('About').should('be.visible');
        cy.contains('Store').should('be.visible')
    });
});