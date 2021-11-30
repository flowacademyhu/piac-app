describe("Add new vendor", () => {
  beforeEach(() => {
    cy.login("john@example.com");

    cy.visit("/arus");
  });

  it("should add new vendor", () => {
    cy.contains("ÚJ ÁRUS FELVÉTELE").click();

    cy.get('input[placeholder="Árus neve..."]').type("Cypress példa");

    cy.get('input[placeholder="Árus logója..."]').type(
      "https://bit.ly/3I7Xlyv"
    );

    cy.get('textarea[placeholder="Árus rövid bemutatkozása..."]').type("A");

    cy.get('textarea[placeholder="Árus hosszú leírása..."]').type("B");

    cy.contains("Hozzáadás").click();

    cy.contains("ÚJ ÁRUS FELVÉTELE");

    cy.contains("Cypress példa");
  });
});
