// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
beforeEach(() => {
  cy.intercept("/v1/api/**", {
    statusCode: 501,
  });

  cy.intercept("/v1/api/market/upcoming", {
    fixture: "upcoming-markets.json",
  });

  cy.intercept("/v1/api/market/15", {
    fixture: "market-15.json",
  });

  cy.intercept("/v1/api/vendor", {
    fixture: "vendor-list.json",
  });

  cy.intercept("/v1/api/vendor/31", {
    fixture: "vendor-31.json",
  });

  cy.intercept("/v1/api/vendor/31/upcoming", {
    fixture: "upcoming-markets.json",
  });
});
