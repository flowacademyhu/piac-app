describe("Vendor list", () => {
  beforeEach(() => {
    cy.visit("/arusok");
  });

  it("should open the vendor list", () => {
    cy.get("h1").contains("Árusok");
  });

  it("should have a contact section", () => {
    cy.contains("Hiányolsz egy árust?");

    cy.get("a")
      .contains("Írj nekünk emailt!")
      .should("have.attr", "href", "mailto:felpenzzel.hu@gmail.com");
  });
});
