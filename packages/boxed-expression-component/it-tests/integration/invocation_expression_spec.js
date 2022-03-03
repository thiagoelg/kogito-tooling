"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buildEnv = require("@kie-tools/build-env");
describe("Invocation Expression Tests", function () {
  beforeEach(function () {
    cy.visit("http://localhost:".concat(buildEnv.boxedExpressionComponent.dev.port, "/"));
  });
  it("Define Invocation expression", function () {
    cy.ouiaId("expression-container").click();
    cy.ouiaId("expression-popover-menu").contains("Invocation").click({ force: true });
    cy.ouiaId("expression-row-0").should("contain.text", "p-1").should("contain.text", "<Undefined>");
  });
});
//# sourceMappingURL=invocation_expression_spec.js.map
