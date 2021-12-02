describe("Market list", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should open the market list as the home page", () => {
    cy.get("h1").contains("Piacok");
  });

  it("should have a list with markets", () => {
    cy.get("[data-test=market-card]").should("have.length", 2);

    cy.get("[data-test=market-card]")
      .eq(0)
      .should("include.text", "Bödön Piac")
      .should("include.text", "Szeged Pláza")
      .should("include.text", "nov")
      .should("include.text", "28")
      .should("include.text", "vasárnap")
      .should("include.text", "09:00 - 14:00")
      .should("include.text", "77 árus");

    cy.get("[data-test=market-card]")
      .eq(1)
      .should("include.text", "Pop Up Piac - After Work")
      .should(
        "include.text",
        "Szálka Halászcsárda és Rendezvényház (Szeged, Közép Kikötő sor 9/A.)"
      )
      .should("include.text", "dec")
      .should("include.text", "08")
      .should("include.text", "szerda")
      .should("include.text", "14:00 - 19:00")
      .should("include.text", "Szervezés alatt...");
  });

  it("should have a contact section", () => {
    cy.contains("Hiányolsz egy piacot?");

    cy.get("a")
      .contains("Írj nekünk emailt!")
      .should("have.attr", "href", "mailto:felpenzzel.hu@gmail.com");
  });
});
