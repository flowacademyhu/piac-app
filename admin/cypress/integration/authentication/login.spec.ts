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
});
