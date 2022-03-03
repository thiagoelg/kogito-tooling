"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buildEnv = require("@kie-tools/build-env");
describe.skip("Decision Table Expression Tests", function () {
  beforeEach(function () {
    cy.visit("http://localhost:".concat(buildEnv.boxedExpressionComponent.dev.port, "/"));
  });
  var inColumns = function (size) {
    var columns = new Array(size);
    for (var index = 0; index < size; index++) {
      columns[index] = { id: "in-column-".concat(index), name: "in-column-".concat(index), dataType: "<Undefined>" };
    }
    return columns;
  };
  var outColumns = function (size) {
    var columns = new Array(size);
    for (var index = 0; index < size; index++) {
      columns[index] = { id: "out-column-".concat(index), name: "out-column-".concat(index), dataType: "<Undefined>" };
    }
    return columns;
  };
  var annotationColumns = function (size) {
    var columns = new Array(size);
    for (var index = 0; index < size; index++) {
      columns[index] = { id: "annotation-".concat(index), name: "annotation-".concat(index) };
    }
    return columns;
  };
  var rows = function (inSize, outSize, annotationSize, rulesSize) {
    var rows = new Array(rulesSize);
    for (var rowIndex = 0; rowIndex < rulesSize; rowIndex++) {
      var inValues = new Array(inSize);
      for (var index = 0; index < inSize; index++) {
        inValues[index] = "in-value-".concat(rowIndex, ":").concat(index);
      }
      var outValues = new Array(outSize);
      for (var index = 0; index < outSize; index++) {
        outValues[index] = "out-value-".concat(rowIndex, ":").concat(index);
      }
      var annotationValues = new Array(annotationSize);
      for (var index = 0; index < annotationSize; index++) {
        annotationValues[index] = "annotation-value-".concat(rowIndex, ":").concat(index);
      }
      rows[rowIndex] = {
        id: "row-".concat(rowIndex),
        inputEntries: inValues,
        outputEntries: outValues,
        annotationEntries: annotationValues,
      };
    }
    return rows;
  };
  var decisionTable = function (inSize, outSize, annotationSize, rulesSize) {
    return {
      name: "Expression Name",
      dataType: "<Undefined>",
      uid: "id1",
      logicType: "Decision Table",
      aggregation: "",
      input: inColumns(inSize),
      output: outColumns(outSize),
      annotations: annotationColumns(annotationSize),
      rules: rows(inSize, outSize, annotationSize, rulesSize),
    };
  };
  it("Define 50x50 Decision Table expression", function () {
    cy.ouiaId("expression-container").click();
    cy.ouiaId("expression-popover-menu").contains("Decision Table").click({ force: true });
    cy.ouiaId("edit-expression-json").click();
    cy.ouiaId("typed-expression-json").clear();
    cy.ouiaId("typed-expression-json")
      .invoke("val", JSON.stringify(decisionTable(20, 20, 10, 50)))
      .type(" ");
    cy.ouiaId("confirm-expression-json").click();
    cy.ouiaId("expression-grid-table").should("contain.text", "in-value-49:19");
    cy.ouiaId("expression-grid-table").should("contain.text", "out-value-49:19");
    cy.ouiaId("expression-grid-table").should("contain.text", "annotation-value-49:9");
  });
  it("Duplicate row", function () {
    cy.ouiaId("expression-container").click();
    cy.ouiaId("expression-popover-menu").contains("Decision Table").click({ force: true });
    cy.ouiaId("edit-expression-json").click();
    cy.ouiaId("typed-expression-json").clear();
    cy.ouiaId("typed-expression-json")
      .invoke("val", JSON.stringify(decisionTable(2, 2, 1, 5)))
      .type(" ");
    cy.ouiaId("confirm-expression-json").click();
    cy.ouiaId("expression-grid-table").contains("in-value-1:1").rightclick();
    cy.ouiaId("expression-table-handler-menu").contains("Duplicate").click({ force: true });
    cy.ouiaId("expression-row-2").within(function ($row) {
      cy.ouiaId("expression-column-0").should("have.text", "3");
      cy.ouiaId("expression-column-1").should("contain.text", "in-value-1:0");
      cy.ouiaId("expression-column-2").should("contain.text", "in-value-1:1");
      cy.ouiaId("expression-column-3").should("contain.text", "out-value-1:0");
      cy.ouiaId("expression-column-4").should("contain.text", "out-value-1:1");
      cy.ouiaId("expression-column-5").should("contain.text", "annotation-value-1:0");
    });
  });
});
//# sourceMappingURL=decision_table_expression.js.map
