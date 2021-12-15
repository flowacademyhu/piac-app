import { Vendor } from "vendor/Vendor";

describe.only("Delete vendor", () => {
  let vendors: Vendor[] = [];

  beforeEach(() => {
    cy.fixture("vendors.json").then((vendorsFromFixture) => {
      vendors = vendorsFromFixture;
    });
    cy.intercept("GET", "/v1/api/vendors", (req) => {
      req.reply(vendors);
    });

    cy.intercept("/v1/api/vendor/1", { fixture: "vendor-1.json" });

    cy.login("john@example.com");
    cy.visit("./arus");
  });

  it("should delete a vendor", () => {
    cy.intercept("DELETE", "/v1/api/admin/vendor/1", (req) => {
      const url = req.url.split("/");
      const id = url[url.length - 1];
      vendors = vendors.filter((vendor) => vendor.id !== id);
      console.log(vendors);
      req.reply(vendors);
    }).as("deleteVendorRequest");

    cy.contains("Árusok");
    cy.get("table tbody tr").as("rows");

    console.log(vendors.length);

    cy.get("@rows").should("have.length", 3);
    cy.get("@rows").eq(0).contains("Chilikirály");
    cy.get("@rows").eq(1).contains("Just incase");
    cy.get("@rows").eq(2).contains("Valami bolt");
    cy.contains("Töröl").click();
    cy.contains("Törlés").click();

    console.log(vendors.length);

    cy.wait("@deleteVendorRequest")
      .its("response.statusCode")
      .should("eq", 200);

    cy.get("@rows").should("have.length", 2);
    cy.contains("Chilikirály").should("not.exist");
  });
});
