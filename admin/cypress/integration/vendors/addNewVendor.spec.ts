import Vendor from "../../../src/vendor/Vendor";

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

    cy.get('[type="checkbox"]').check();

    cy.get('input[placeholder="Írd be a termék nevét és nyomj enter-t"]')
      .type("C{enter}")
      .type("D{enter}");

    cy.get('input[placeholder="Árus telefonszáma..."]').type("06701234567");

    cy.get('input[placeholder="Árus e-mail címe..."]').type("e@gmail.com");

    cy.get('input[placeholder="Árus facebook linkje..."]').type("F");

    cy.get('input[placeholder="Árus instagram linkje..."]').type("G");

    cy.get('input[placeholder="Árus honlap címe..."]').type("http://www.h.com");

    const newVendors: Vendor[] = [];

    cy.fixture("vendors.json").then((vendors) => {
      cy.intercept("GET", "/v1/api/vendor", (req) => {
        req.reply(vendors.concat(newVendors));
      });
    });

    cy.intercept("POST", "/v1/api/admin/vendor", (req) => {
      expect(req.body.name).to.equal("Cypress példa");
      expect(req.body.profilePic).to.equal("https://bit.ly/3I7Xlyv");
      expect(req.body.intro).to.equal("A");
      expect(req.body.introductionLong).to.equal("B");
      expect(req.body.products).to.deep.equal(["C", "D"]);
      expect(req.body.cardPayment).to.equal(true);
      expect(req.body.email).to.equal("e@gmail.com");
      expect(req.body.facebook).to.equal("F");
      expect(req.body.instagram).to.equal("G");
      expect(req.body.phone).to.equal("06701234567");
      expect(req.body.webSite).to.equal("http://www.h.com");
      const newVendor = { id: 1, ...req.body };
      newVendors.push(newVendor);
      req.reply(newVendor);
    });

    cy.contains("Hozzáadás").click();

    cy.contains("ÚJ ÁRUS FELVÉTELE");

    cy.contains("Cypress példa");
  });
});
