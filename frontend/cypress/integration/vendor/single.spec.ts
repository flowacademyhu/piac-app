describe("Vendor single", () => {
  beforeEach(() => {
    cy.visit("/arusok/31");
  });

  it("should have correct information about the vendor", () => {
    cy.get("h1").contains("An-Zsu Varázsládája");
  });

  it("should have a contact section", () => {
    cy.contains("Hiányolsz egy piacot?");

    cy.get("a")
      .contains("Írj nekünk emailt!")
      .should("have.attr", "href", "mailto:felpenzzel.hu@gmail.com");
  });
});
