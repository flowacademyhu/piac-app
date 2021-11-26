describe("Markets", () => {
  describe("List", () => {
    beforeEach(() => {
      cy.login("john@example.com");
      cy.intercept("/v1/api/market", { fixture: "markets.json" });

      cy.visit("/piac");
    });

    it("should open market list", () => {
      cy.contains("Piacok");

      cy.get("table tbody tr").as("rows");

      cy.get("@rows").should("have.length", 2);

      cy.get("@rows").eq(0).contains("Bödön Piac");
      cy.get("@rows").eq(1).contains("Böba Piac Karácsony");
    });
  });
});
