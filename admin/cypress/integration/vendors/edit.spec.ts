import { VendorWithId } from "vendor/Vendor";

describe("Edit vendor", () => {
  let vendors: VendorWithId<number>[] = [];

  beforeEach(() => {
    cy.fixture("vendors.json").then((vendorsFixture) => {
      vendors = vendorsFixture;
    });
    cy.intercept("GET", "/v1/api/vendor", (req) => {
      req.reply(vendors);
    });

    cy.intercept("/v1/api/vendor/1", { fixture: "vendor-1.json" });

    cy.login("john@example.com");
    cy.visit("./arus");
  });

  it("should modify the vendor", () => {
    cy.intercept("PUT", "/v1/api/admin/vendor/1", (req) => {
      expect(req.body.name).to.equal("Nagyon jó árus");
      expect(req.body.profilePic).to.equal("https://example.com/joarus.png");
      expect(req.body.intro).to.equal(
        "Én nagyon jó dolgokat árulok szinte ingyen."
      );
      expect(req.body.introductionLong).to.equal(
        "Ahogy mondtam, nagyon jó dolgokat árulok, gyakorlatilag fizetni se kell értük. Vigyétek őket!"
      );

      expect(req.body.cardPayment).to.equal(false);
      expect(req.body.products).to.deep.equal([
        "paprikakrémek",
        "minden más",
        "termék 1",
      ]);
      expect(req.body.phone).to.equal("+369876543");
      expect(req.body.email).to.equal("modositottEmail@gmail.com");
      expect(req.body.facebook).to.equal("modositottFacebook");
      expect(req.body.instagram).to.equal("modositottInstagram");
      expect(req.body.webSite).to.equal("http://www.modositottweblap.com");
      expect(req.headers.authorization).to.include("Bearer eyJhb");
      const editedVendor = { id: 1, ...req.body };
      vendors = vendors.map((vendor) =>
        vendor.id === 1 ? editedVendor : vendor
      );
      req.reply(vendors);
    }).as("putVendorRequest");

    cy.contains("Szerkeszt").click();
    cy.get("h1").contains("Árus módosítása");
    cy.get('input[placeholder="Árus neve..."]')
      .should("have.value", "Chilikirály")
      .clear()
      .type("Nagyon jó árus");
    cy.get('input[placeholder="Árus logója..."]')
      .should("have.value", "https://bit.ly/3I7Xlyva3")
      .clear()
      .type("https://example.com/joarus.png");
    cy.get('textarea[placeholder="Árus rövid bemutatkozása..."]')
      .should(
        "have.value",
        "Chilizz velünk, Magyarország legjobb chilijeivel..."
      )
      .clear()
      .type("Én nagyon jó dolgokat árulok szinte ingyen.");
    cy.get('textarea[placeholder="Árus hosszú leírása..."]')
      .should(
        "have.value",
        "Mi áruljuk a legjobb chiliket, ehhez kétség sem fér. Köcsá!"
      )
      .clear()
      .type(
        "Ahogy mondtam, nagyon jó dolgokat árulok, gyakorlatilag fizetni se kell értük. Vigyétek őket!"
      );
    cy.get('[data-test="cardPayment-checkbox"]')
      .should("have.checked")
      .uncheck();
    cy.get('input[placeholder="Írd be a termék nevét és nyomj enter-t"]')
      .parent()
      .contains("chilik")
      .parent()
      .find(".react-tag-input__tag__remove")
      .click();
    cy.get('input[placeholder="Írd be a termék nevét és nyomj enter-t"]')
      .parent()
      .contains("paprikakrémek");
    cy.get('input[placeholder="Írd be a termék nevét és nyomj enter-t"]')
      .parent()
      .contains("minden más");
    cy.get('input[placeholder="Írd be a termék nevét és nyomj enter-t"]').type(
      "termék 1{enter}"
    );
    cy.get('input[placeholder="Árus telefonszáma..."]')
      .should("have.value", "+36302345678")
      .clear()
      .type("+369876543");
    cy.get('input[placeholder="Árus e-mail címe..."]')
      .should("have.value", "chiliking@flow.hu3")
      .clear()
      .type("modositottEmail@gmail.com");
    cy.get('input[placeholder="Árus facebook linkje..."]')
      .should("have.value", "Chiliking")
      .clear()
      .type("modositottFacebook");
    cy.get('input[placeholder="Árus instagram linkje..."]')
      .should("have.value", "chillchill")
      .clear()
      .type("modositottInstagram");
    cy.get('input[placeholder="Árus honlap címe..."]')
      .should("have.value", "http://www.chilizgetes.com")
      .clear()
      .type("http://www.modositottweblap.com");
    cy.get("button").contains("Mégsem");
    cy.get("button").contains("Módosítás").click();

    cy.wait("@putVendorRequest").its("response.statusCode").should("eq", 200);

    cy.contains("Nagyon jó árus");
  });
});
