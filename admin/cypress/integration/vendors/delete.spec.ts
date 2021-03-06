import { VendorWithId } from "vendor/Vendor";

describe("Delete vendor", () => {
  let vendors: VendorWithId<number>[] = [];

  beforeEach(() => {
    cy.fixture("vendors.json").then((vendorsFromFixture) => {
      vendors = vendorsFromFixture;
    });
    cy.intercept("GET", "/v1/api/vendor", (req) => {
      req.reply(vendors);
    });
    cy.login("john@example.com");
    cy.visit("./arus");
  });

  it("should delete a vendor", () => {
    cy.intercept("DELETE", "/v1/api/admin/vendor/1", (req) => {
      expect(req.headers.authorization).to.include("Bearer eyJhb");
      const url = req.url.split("/");
      const id = parseInt(url[url.length - 1], 10);
      vendors = vendors.filter((vendor) => vendor.id !== id);
      req.reply(vendors);
    }).as("deleteVendorRequest");

    cy.contains("Árusok");
    cy.get("table tbody tr").as("rows");
    cy.get("@rows").should("have.length", 4);
    cy.get("@rows").eq(0).contains("Chilikirály");
    cy.get("@rows").eq(1).contains("Just incase");
    cy.get("@rows").eq(2).contains("Valami bolt");
    cy.get("@rows").eq(3).contains("Másik bolt");
    cy.contains("Töröl").click();
    cy.contains("Törlés").click();

    cy.wait("@deleteVendorRequest")
      .its("response.statusCode")
      .should("eq", 200);

    cy.get("@rows").should("have.length", 3);
    cy.contains("Chilikirály").should("not.exist");
  });
});
