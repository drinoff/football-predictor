describe("App start page test", () => {
    it("App should not crash on start", () => {
        cy.visit("/");
    });
    it("Start page should have a title", () => {
        cy.visit("/");
        cy.title().should("include", "Football Predictor");
    });
    it("Start page should have a logo", () => {
        cy.visit("/");
        cy.get('img[alt="alt-logo"]').should("exist");
    });
    it("Start page should have a navbar", () => {
        cy.visit("/");
        cy.get(".navigation").should("exist");
    });
    it("Start page should have a navbar with links", () => {
        cy.visit("/");
        cy.get(".navigation .li").should("exist");
    });
    it("Start page should welcome guest in initial load", () => {
        cy.visit("/");
        cy.contains("Welcome Guest");
    });
    it("Start page should have a login link for guest", () => {
        cy.visit("/");
        cy.get(".navigation .login").should("exist");
    });
    it("Start page should have a register link for guest", () => {
        cy.visit("/");
        cy.get(".navigation .register").should("exist");
    });
    it("Start page should have a logout link for authenticated user", () => {
        cy.visit("/");
        cy.contains("Login").click();
        cy.get("#email").type("test@test.com");
        cy.get("#password").type("123456");
        cy.get(".loginButton").click();
        cy.wait(2000);
        cy.contains("Logout").should("exist");
    });
    it("Start page should have a link to predictions page", () => {
        cy.visit("/");
        cy.contains("Predictions").should("exist");
    });
    it("Start page should have a link to about page", () => {
        cy.visit("/");
        cy.contains("About").should("exist");
    });
    it("Start page should have a link to contact page", () => {
        cy.visit("/");
        cy.contains("Contact").should("exist");
    });
    it("Start page should have a link to matches page", () => {
        cy.visit("/");
        cy.contains("Matches").should("exist");
    });
    it("Start page should have a Country filter for matches", () => {
        cy.visit("/");
        cy.get(".countryFilter").should("exist");
    });
    it("Start page should have a search button for matches", () => {
        cy.visit("/");
        cy.get(".matchSearchField").should("exist");
    });
    it("Start page should have a search icon for matches", () => {
        cy.visit("/");
        cy.get(".searchIcon").should("exist");
    });
    it("Start page should visualise the matches for the day", () => {
        cy.visit("/");
        cy.wait(3000);
        cy.get(".singleMatchContainer").should("exist");
    });
    it("Start page should show skeleton loader before data arrives", () => {
        cy.visit("/");
        cy.get(".skeleton").should("exist");
    });
    it("On start page match Details should visualise on click on a match", () => {
        cy.visit("/");
        cy.get(".singleMatchContainer").first().click();
        cy.get(".matchDetailsContainer").should("exist");
    });
});
