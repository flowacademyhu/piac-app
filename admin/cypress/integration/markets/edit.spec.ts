describe("Edit market", () => {
  beforeEach(() => {
    cy.intercept("/v1/api/market", { fixture: "markets.json" });
    cy.intercept("/v1/api/market/1", { fixture: "market-1.json" });
    cy.login("john@example.com");
    cy.visit("./piac");
  });

  it("should fill form with data of market", () => {
    cy.contains("Szerkeszt").click();
    cy.get("h1").contains("Piac módosítása");
    cy.get("input[data-test=name-input]").should("have.value", "Bödön Piac");
    cy.get("input[data-test=profilePic-input]").should(
      "have.value",
      "https://example.com/bodon.png"
    );
    cy.get("textarea[data-test=place-input]").should(
      "have.value",
      "Szeged Pláza"
    );
    cy.get("input[data-test=openingDate-input]").should(
      "have.value",
      "2021-09-04T10:00"
    );
    cy.get("input[data-test=closingDate-input]").should(
      "have.value",
      "2021-09-04T17:00"
    );
    cy.get("button").contains("Módosítás");
    cy.get("button").contains("Mégsem");
  });
});
