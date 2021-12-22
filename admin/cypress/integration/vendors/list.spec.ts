describe("Vendor list", () => {
  beforeEach(() => {
    cy.login("john@example.com");
    cy.intercept("/v1/api/market", { fixture: "vendors.json" });

    cy.visit("/arus");
  });

  it("should open vendor list", () => {
    cy.contains("Árusok");

    cy.get("table tbody tr").as("rows");

    cy.get("@rows").should("have.length", 4);

    cy.get("@rows").eq(0).contains("Chilikirály");
    cy.get("@rows").eq(1).contains("Just incase");
    cy.get("@rows").eq(2).contains("Valami bolt");
    cy.get("@rows").eq(3).contains("Másik bolt");
  });
});
