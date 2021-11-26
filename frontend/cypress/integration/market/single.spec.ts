describe("Market single", () => {
  beforeEach(() => {
    cy.visit("/piacok/15");
  });

  it("should have correct information about the market", () => {
    cy.get("[data-test=market-image]").should(
      "have.css",
      "background-image",
      'url("https://felpenzzel.hu/images/piacok/bodonpiac.png")'
    );
    cy.get("h1").contains("Bödön Piac");

    cy.contains("Szeged Pláza");

    cy.get("[data-test=market-date]").should(
      "have.text",
      "november 28. 09:00 - 14:00"
    );
  });
});
