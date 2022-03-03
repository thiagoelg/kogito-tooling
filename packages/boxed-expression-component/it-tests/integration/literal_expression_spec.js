"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buildEnv = require("@kie-tools/build-env");
describe("Literal Expression Tests", function () {
  beforeEach(function () {
    cy.visit("http://localhost:".concat(buildEnv.boxedExpressionComponent.dev.port, "/"));
  });
  it("Change data type", function () {
    cy.ouiaId("expression-container").click();
    cy.ouiaId("expression-popover-menu").contains("Literal expression").click({ force: true });
    cy.get(".literal-expression-header").click();
    cy.ouiaId("edit-expression-data-type").within(function ($container) {
      cy.get("span.pf-c-select__toggle-text").click({ force: true });
    });
    cy.get("button:contains('boolean')").click({ force: true });
    cy.get(".expression-data-type").contains("boolean").should("be.visible");
  });
});
//# sourceMappingURL=literal_expression_spec.js.map
