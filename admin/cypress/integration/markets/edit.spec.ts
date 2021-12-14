import { Market } from "market/Market";

describe("Edit market", () => {
  let newMarket: Market = {
    numberOfVendors: 0,
    id: "",
    name: "",
    profilePic: "",
    place: "",
    openingDate: 0,
    closingDate: 0,
  };

  beforeEach(() => {
    cy.fixture("markets.json").then((markets) => {
      cy.intercept("GET", "/v1/api/market", (req) => {
        req.reply(
          newMarket.id ? [{ ...newMarket }, ...markets.slice(1)] : markets
        );
      });
    });

    cy.intercept("/v1/api/market/1", { fixture: "market-1.json" });

    cy.login("john@example.com");
    cy.visit("./piac");
  });

  it("should modify the market", () => {
    cy.intercept("PUT", "/v1/api/admin/market/1", (req) => {
      expect(req.body.name).to.equal("Popup Piac");
      expect(req.body.profilePic).to.equal("https://example.com/popup.png");
      expect(req.body.place).to.equal("Szálka Halászcsárda és Rendezvényház");
      expect(req.body.openingDate).to.equal(1639816200);
      expect(req.body.closingDate).to.equal(1639845000);
      expect(req.headers.authorization).to.include("Bearer eyJhb");
      newMarket = { id: 1, ...req.body };
      req.reply(newMarket);
    }).as("putMarketRequest");

    cy.contains("Szerkeszt").click();
    cy.get("h1").contains("Piac módosítása");
    cy.get("input[data-test=name-input]")
      .should("have.value", "Bödön Piac")
      .clear()
      .type("Popup Piac");
    cy.get("input[data-test=profilePic-input]")
      .should("have.value", "https://example.com/bodon.png")
      .clear()
      .type("https://example.com/popup.png");
    cy.get("textarea[data-test=place-input]")
      .should("have.value", "Szeged Pláza")
      .clear()
      .type("Szálka Halászcsárda és Rendezvényház");
    cy.get("input[data-test=openingDate-input]")
      .should("have.value", "2021-09-04T10:00")
      .clear()
      .type("2021-12-18T09:30");
    cy.get("input[data-test=closingDate-input]")
      .should("have.value", "2021-09-04T17:00")
      .clear()
      .type("2021-12-18T17:30");
    cy.get("button").contains("Mégsem");
    cy.get("button").contains("Módosítás").click();

    cy.wait("@putMarketRequest").its("response.statusCode").should("eq", 200);

    cy.contains("Popup Piac");
    cy.contains("Szálka Halászcsárda és Rendezvényház");
  });
});
