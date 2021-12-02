import jwt from "jsonwebtoken";

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string): void;
    }
  }
}

Cypress.Commands.add("login", (email: string) => {
  const token = jwt.sign({ sub: email }, "test-secret");
  cy.setLocalStorage("token", token);
});
