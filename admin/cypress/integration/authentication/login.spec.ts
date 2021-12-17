describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should open login page first", () => {
    cy.contains("E-mail");

    cy.get("input[placeholder=E-mail]").should("have.value", "");

    cy.get("button[type=submit]").contains("Küldés");
  });

  it("should be able send login email", () => {
    cy.get("input[placeholder=E-mail]").type("john@example.com");

    cy.intercept("POST", "/v1/api/login", (req) => {
      expect(req.body.emailAddress).to.equal("john@example.com");
      req.reply("Your code has been sent to your email: john@example.com");
    });

    cy.contains("Küldés").click();

    cy.contains(
      "E-mail küldése megtörtént! A csatolt linkre kattintva bejelentkezhet!"
    );
  });

  it("should show error message on failed login attempt", () => {
    cy.intercept("POST", "/v1/api/login", {
      statusCode: 500,
    });

    cy.get("input[placeholder=E-mail]").type("john@example.com");

    cy.contains("Küldés").click();

    cy.contains(
      "Hiba történt az e-mail kiküldése során. Az e-mail nem került kiküldésre."
    );
  });

  it("should redirect user with expired JWT token to login page", () => {
    cy.intercept("/v1/api/market", { fixture: "markets.json" });

    cy.intercept("DELETE", "/v1/api/admin/market/1", {
      statusCode: 401,
    });

    cy.login("john@example.com");

    cy.visit("/piac");

    cy.contains("Töröl").click();

    cy.contains("Törlés").click();

    cy.contains("Küldés");
  });

  it.skip("should logout when the token is expired", () => {
    // set expired token

    cy.url().should("eq", Cypress.config().baseUrl + "login");
  });
});
