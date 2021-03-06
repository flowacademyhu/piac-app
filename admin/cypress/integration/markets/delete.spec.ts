import { Market } from "market/Market";

describe("Delete market", () => {
  let markets: Market<number>[] = [];

  beforeEach(() => {
    cy.fixture("markets.json").then((marketsFromFixture) => {
      markets = marketsFromFixture;
    });
    cy.intercept("GET", "/v1/api/market", (req) => {
      req.reply(markets);
    });

    cy.login("john@example.com");
    cy.visit("./piac");
  });

  it("should delete a market", () => {
    cy.intercept("DELETE", "/v1/api/admin/market/1", (req) => {
      const url = req.url.split("/");
      const id = parseInt(url[url.length - 1], 10);
      markets = markets.filter((market) => market.id !== id);
      req.reply(markets);
      expect(req.headers.authorization).to.include("Bearer eyJhb");
    }).as("deleteMarketRequest");

    cy.contains("Piacok");
    cy.get("table tbody tr").as("rows");
    cy.get("@rows").should("have.length", 2);
    cy.get("@rows").eq(0).contains("Bödön Piac");
    cy.get("@rows").eq(1).contains("Böba Piac Karácsony");
    cy.contains("Töröl").click();
    cy.contains("Törlés").click();

    cy.wait("@deleteMarketRequest")
      .its("response.statusCode")
      .should("eq", 200);

    cy.get("@rows").should("have.length", 1);
    cy.contains("Bödön piac").should("not.exist");
  });
});
