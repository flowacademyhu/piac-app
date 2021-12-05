import Vendor from "../../../src/vendor/Vendor";

describe("Add new vendor", () => {
  beforeEach(() => {
    cy.login("john@example.com");

    cy.visit("/arus");
  });

  it("should add new vendor", () => {
    cy.contains("ÚJ ÁRUS FELVÉTELE").click();

    cy.get('input[placeholder="Árus neve..."]').type("Másik árus");

    cy.get('input[placeholder="Árus logója..."]').type(
      "https://felpenzzel.hu/images/masik-arus.png"
    );

    cy.get('textarea[placeholder="Árus rövid bemutatkozása..."]').type(
      "Bemutatkozik egy másik árus"
    );

    cy.get('textarea[placeholder="Árus hosszú leírása..."]').type(
      "Sokkal hosszabb szöveggel is bemutatkozik egy másik árus.\nA szövegben lehet újsor is."
    );

    cy.get('[type="checkbox"]').check();

    cy.get('input[placeholder="Írd be a termék nevét és nyomj enter-t"]')
      .type("Egyik termék{enter}")
      .type("Másik termék{enter}")
      .type("Harmadik{enter}");

    cy.get('input[placeholder="Árus telefonszáma..."]').type("+36701234567");

    cy.get('input[placeholder="Árus e-mail címe..."]').type(
      "masik.arus@gmail.com"
    );

    cy.get('input[placeholder="Árus facebook linkje..."]').type("masikarus.fb");

    cy.get('input[placeholder="Árus instagram linkje..."]').type(
      "masikarus.insta"
    );

    cy.get('input[placeholder="Árus honlap címe..."]').type(
      "https://www.masikarus.com"
    );

    const newVendors: Vendor[] = [];

    cy.fixture("vendors.json").then((vendors) => {
      cy.intercept("GET", "/v1/api/vendor", (req) => {
        req.reply(vendors.concat(newVendors));
      });
    });

    cy.intercept("POST", "/v1/api/admin/vendor", (req) => {
      expect(req.body.name).to.equal("Másik árus");
      expect(req.body.profilePic).to.equal(
        "https://felpenzzel.hu/images/masik-arus.png"
      );
      expect(req.body.intro).to.equal("Bemutatkozik egy másik árus");
      expect(req.body.introductionLong).to.equal(
        "Sokkal hosszabb szöveggel is bemutatkozik egy másik árus.\nA szövegben lehet újsor is."
      );
      expect(req.body.products).to.deep.equal([
        "Egyik termék",
        "Másik termék",
        "Harmadik",
      ]);
      expect(req.body.cardPayment).to.equal(true);
      expect(req.body.email).to.equal("masik.arus@gmail.com");
      expect(req.body.facebook).to.equal("masikarus.fb");
      expect(req.body.instagram).to.equal("masikarus.insta");
      expect(req.body.phone).to.equal("+36701234567");
      expect(req.body.webSite).to.equal("https://www.masikarus.com");
      const newVendor = { id: 1, ...req.body };
      newVendors.push(newVendor);
      req.reply(newVendor);
    });

    cy.contains("Hozzáadás").click();

    cy.contains("ÚJ ÁRUS FELVÉTELE");

    cy.contains("Másik árus");
  });
});
