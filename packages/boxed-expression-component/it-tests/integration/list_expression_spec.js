"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buildEnv = require("@kie-tools/build-env");
describe("List Expression Tests", function () {
  beforeEach(function () {
    cy.visit("http://localhost:".concat(buildEnv.boxedExpressionComponent.dev.port, "/"));
  });
  it("Define List expression", function () {
    cy.ouiaId("expression-container").click();
    cy.ouiaId("expression-popover-menu").contains("List").click({ force: true });
    cy.ouiaId("expression-row-0").should("contain.text", "1");
  });
});
//# sourceMappingURL=list_expression_spec.js.map
