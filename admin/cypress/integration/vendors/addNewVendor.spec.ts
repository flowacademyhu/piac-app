describe("Vendors", () => {
  describe("List", () => {
    beforeEach(() => {
      cy.login("john@example.com");

      cy.intercept("/v1/api/vendor", { fixture: "vendors.json" });

      cy.visit("/arus");
    });

    it("should be able to add new vendor", () => {
      cy.contains("ÚJ ÁRUS FELVÉTELE").click();

      cy.get('input[placeholder="Árus neve..."]').type("Cypress példa");

      cy.get('input[placeholder="Árus logója..."]').type(
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.newprosoft.com%2Fwebcontentextractor%2Fdocumentation%2Furl_generator.htm&psig=AOvVaw3gTJmrghAzbYz60nVjFis3&ust=1638264398479000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMiv3M6gvfQCFQAAAAAdAAAAABAD"
      );

      cy.get('textarea[placeholder="Árus rövid bemutatkozása..."]').type(
        "Szia! Én egy vidám kis Cypress példa vagyok."
      );

      cy.get('textarea[placeholder="Árus hosszú leírása..."]').type(
        "Én még mindig egy Cypress példa vagyok."
      );

      cy.contains("Hozzáadás").click();

      cy.contains("ÚJ ÁRUS FELVÉTELE");

      cy.contains("Cypress példa");
    });
  });
});
