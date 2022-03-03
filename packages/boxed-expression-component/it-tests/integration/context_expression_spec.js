"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buildEnv = require("@kie-tools/build-env");
describe("Context Expression Tests", function () {
  beforeEach(function () {
    cy.visit("http://localhost:".concat(buildEnv.boxedExpressionComponent.dev.port, "/"));
  });
  it("Define context expression", function () {
    cy.ouiaId("expression-container").click();
    cy.ouiaId("expression-popover-menu").contains("Context").click({ force: true });
    cy.ouiaId("expression-grid-table").should("contain.text", "ContextEntry-1");
  });
  it("Define nested Decision Table and sync output type", function () {
    cy.ouiaId("expression-container").click();
    cy.ouiaId("expression-popover-menu").contains("Context").click({ force: true });
    cy.ouiaId("expression-row-0").within(function ($row) {
      cy.ouiaId("expression-column-2").click();
    });
    cy.ouiaId("expression-popover-menu").contains("Decision Table").click({ force: true });
    cy.ouiaId("expression-row-0").within(function ($row) {
      cy.ouiaId("expression-column-1").contains("ContextEntry-1").click();
    });
    cy.ouiaId("edit-expression-data-type").within(function ($container) {
      cy.get("span.pf-c-select__toggle-text").click({ force: true });
    });
    cy.get("button:contains('boolean')").click({ force: true });
    cy.ouiaType("expression-column-header-cell-info").contains("boolean").should("be.visible");
  });
  it("Define nested Decision Table", function () {
    cy.ouiaId("expression-container").click();
    cy.ouiaId("expression-popover-menu").contains("Context").click({ force: true });
    cy.ouiaId("expression-row-0").within(function ($row) {
      cy.ouiaId("expression-column-2").click();
    });
    cy.ouiaId("expression-popover-menu").contains("Decision Table").click({ force: true });
    cy.ouiaType("expression-column-header-cell-info").contains("output-1").rightclick();
    cy.contains("Insert right").click({ force: true });
    cy.ouiaType("expression-column-header-cell-info").contains("output-1").rightclick();
    cy.contains("Insert left").click({ force: true });
    cy.get("th:contains('output-')").should(function ($outputs) {
      expect($outputs).to.have.length(3);
      expect($outputs.eq(0)).to.contain("output-3");
      expect($outputs.eq(1)).to.contain("output-1");
      expect($outputs.eq(2)).to.contain("output-2");
    });
  });
  it("Define nested Decision Table as result", function () {
    cy.ouiaId("expression-container").click();
    cy.ouiaId("expression-popover-menu").contains("Context").click({ force: true });
    cy.ouiaId("OUIA-Generated-TableRow-2").within(function ($row) {
      cy.contains("Select expression").click();
    });
    cy.ouiaId("expression-popover-menu").contains("Decision Table").click({ force: true });
    cy.ouiaType("expression-column-header-cell-info").contains("output-1").rightclick();
    cy.contains("Insert right").click({ force: true });
    cy.ouiaType("expression-column-header-cell-info").contains("output-1").rightclick();
    cy.contains("Insert left").click({ force: true });
    cy.get("th:contains('output-')").should(function ($outputs) {
      expect($outputs).to.have.length(4);
      expect($outputs.eq(0)).to.contain("output-1");
      expect($outputs.eq(1)).to.contain("output-3");
      expect($outputs.eq(2)).to.contain("output-1");
      expect($outputs.eq(3)).to.contain("output-2");
    });
  });
  it("Define nested Relation", function () {
    cy.ouiaId("expression-container").click();
    cy.ouiaId("expression-popover-menu").contains("Context").click({ force: true });
    cy.ouiaId("expression-row-0").within(function ($row) {
      cy.ouiaId("expression-column-2").click();
    });
    cy.ouiaId("expression-popover-menu").contains("Relation").click({ force: true });
    cy.ouiaType("expression-column-header-cell-info").contains("column-1").rightclick();
    cy.contains("Insert right").click({ force: true });
    cy.ouiaType("expression-column-header-cell-info").contains("column-1").rightclick();
    cy.contains("Insert left").click({ force: true });
    cy.get("th:contains('column-')").should(function ($siblings) {
      expect($siblings).to.have.length(3);
      expect($siblings.eq(0)).to.contain("column-3");
      expect($siblings.eq(1)).to.contain("column-1");
      expect($siblings.eq(2)).to.contain("column-2");
    });
  });
});
//# sourceMappingURL=context_expression_spec.js.map
