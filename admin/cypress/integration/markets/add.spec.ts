import { Market, MarketWithId } from "market/Market";

describe("Add new market", () => {
  let newMarkets: MarketWithId<number>[] = [];

  beforeEach(() => {
    newMarkets = [];

    cy.fixture("markets.json").then((markets) => {
      cy.intercept("GET", "/v1/api/market", (req) => {
        req.reply(markets.concat(newMarkets));
      });
    });

    cy.login("john@example.com");

    cy.visit("/piac");
  });

  it("should add new market", () => {
    cy.intercept("POST", "/v1/api/admin/market", (req) => {
      expect(req.body.name).to.equal("Másik piac");
      expect(req.body.profilePic).to.equal(
        "https://felpenzzel.hu/images/masik-piac.png"
      );
      expect(req.body.place).to.equal("Mars tér");
      expect(req.body.openingDate).to.equal(1636013400);
      expect(req.body.closingDate).to.equal(1670258100);
      expect(req.body.vendors).to.deep.equal([2, 4]);
      expect(req.headers.authorization).to.include("Bearer eyJhb");

      const newMarket: MarketWithId<number> = { id: 1, ...req.body };
      newMarkets.push(newMarket);
      req.reply(newMarket);
    }).as("addMarketRequest");

    cy.contains("ÚJ PIAC FELVÉTELE").click();

    cy.get('input[placeholder="Piac neve..."]').type("Másik piac");
    cy.get('input[placeholder="Piac logója..."]').type(
      "https://felpenzzel.hu/images/masik-piac.png"
    );
    cy.get('textarea[placeholder="Piac helyszíne..."]').type("Mars tér");
    cy.get("input[data-test=openingDate-input]").type("2021-11-04T09:10");
    cy.get("input[data-test=closingDate-input]").type("2022-12-05T17:35");

    cy.get("form").contains("Árusok").parent().as("arusok-checkbox-list");
    cy.get("@arusok-checkbox-list").contains("Chilikirály");
    cy.get("@arusok-checkbox-list").contains("Just incase");
    cy.get("@arusok-checkbox-list").contains("Valami bolt");
    cy.get("@arusok-checkbox-list").contains("Másik bolt");

    cy.get("@arusok-checkbox-list")
      .find("input[data-test=vendors-2-checkbox]")
      .check();
    cy.get("@arusok-checkbox-list")
      .find("input[data-test=vendors-4-checkbox]")
      .check();

    cy.contains("Hozzáadás").click();

    cy.wait("@addMarketRequest").its("response.statusCode").should("eq", 200);

    cy.contains("ÚJ PIAC FELVÉTELE");
    cy.contains("Másik piac");
  });

  it("should show error message if add new market failed", () => {
    cy.intercept("POST", "/v1/api/admin/market", (req) => {
      req.reply({
        statusCode: 500,
      });
    }).as("addMarketRequest");

    cy.contains("ÚJ PIAC FELVÉTELE").click();

    cy.get('input[placeholder="Piac neve..."]').type("Másik piac");
    cy.get('input[placeholder="Piac logója..."]').type(
      "https://felpenzzel.hu/images/masik-piac.png"
    );
    cy.get('textarea[placeholder="Piac helyszíne..."]').type("Mars tér");
    cy.get("input[data-test=openingDate-input]").type("2021-11-04T09:10");
    cy.get("input[data-test=closingDate-input]").type("2022-12-05T17:35");

    cy.contains("Hozzáadás").click();

    cy.contains("Nem sikerült a piacot hozzáadni!");
  });
});
