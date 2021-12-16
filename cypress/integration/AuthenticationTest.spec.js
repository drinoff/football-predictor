
beforeEach(() => {
    cy.visit('/');
    cy.contains("Login").click(); 
  })

describe('Authentication', () => {
    it('Unsuccess Modal should pop up on Authentication with wrong credentials', () => {   
        cy.get("#email").type("test@test.com");
        cy.get("#password").type("1234567");
        cy.get(".loginButton").click();
        cy.wait(1000);
        cy.contains("Invalid").should("exist");
    });
    it('Succcess Modal should pop up on Authentication with correct credentials', () => {
        cy.get("#email").type("test@test.com");
        cy.get("#password").type("123456");
        cy.get(".loginButton").click();
        cy.wait(1000);
        cy.contains("Success").should("exist"); 
    })
    it('User email should appear on header on successful authentication', () => {  
        cy.get("#email").type("test@test.com");
        cy.get("#password").type("123456");
        cy.get(".loginButton").click();
        cy.contains('test@test.com').should("exist");
    });
    it('Welcome guest should appear on header on successfull logout', () => {
        cy.get("#email").type("test@test.com");
        cy.get("#password").type("123456");
        cy.get(".loginButton").click();
        cy.wait(1000);
        cy.contains("Logout").click();
        cy.contains("Welcome Guest").should("exist");
    });
});