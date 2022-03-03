"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buildEnv = require("@kie-tools/build-env");
describe("Relation Expression Tests", function () {
  beforeEach(function () {
    cy.visit("http://localhost:".concat(buildEnv.boxedExpressionComponent.dev.port, "/"));
  });
  var relationColumns = function (size) {
    var columns = new Array(size);
    for (var index = 0; index < size; index++) {
      columns[index] = {
        id: "column-".concat(index),
        name: "column-".concat(index),
        dataType: "<Undefined>",
        width: 150,
      };
    }
    return columns;
  };
  var relationRows = function (columnSize, rowSize) {
    var rows = new Array(rowSize);
    for (var rowIndex = 0; rowIndex < rowSize; rowIndex++) {
      var row = { id: "row-".concat(rowIndex), cells: new Array(columnSize) };
      for (var columnIndex = 0; columnIndex < columnSize; columnIndex++) {
        row.cells[columnIndex] = "row ".concat(rowIndex, " column ").concat(columnIndex);
      }
      rows[rowIndex] = row;
    }
    return rows;
  };
  var relation = function (columnSize, rowSize) {
    return {
      name: "Expression Name",
      dataType: "<Undefined>",
      id: "id1",
      isHeadless: false,
      logicType: "Relation",
      columns: relationColumns(columnSize),
      rows: relationRows(columnSize, rowSize),
    };
  };
  function defineRelationExpression(columnSize, rowsSize) {
    cy.ouiaId("expression-popover-menu").contains("Relation").click({ force: true });
    cy.ouiaId("edit-expression-json").click();
    cy.ouiaId("typed-expression-json").clear();
    cy.ouiaId("typed-expression-json")
      .invoke("val", JSON.stringify(relation(columnSize, rowsSize)))
      .type(" ");
    cy.ouiaId("confirm-expression-json").click();
  }
  it("Define 50x50 Relation expression", function () {
    cy.ouiaId("expression-container").click();
    defineRelationExpression(50, 50);
    cy.ouiaId("expression-grid-table").should("contain.text", "row 49 column 49");
  });
  it("Insert bellow", function () {
    cy.ouiaId("expression-container").click();
    defineRelationExpression(3, 3);
    cy.ouiaId("expression-grid-table").contains("row 1 column 1").rightclick();
    cy.ouiaId("expression-table-handler-menu").contains("Insert below").click({ force: true });
    cy.ouiaId("expression-row-2").within(function ($row) {
      cy.ouiaId("expression-column-0").should("have.text", "3");
      cy.ouiaId("expression-column-1").should("have.text", "");
      cy.ouiaId("expression-column-2").should("have.text", "");
      cy.ouiaId("expression-column-3").should("have.text", "");
    });
  });
  it("copy and paste", function () {
    cy.ouiaId("expression-container").click();
    defineRelationExpression(3, 1);
    cy.ouiaId("expression-grid-table").contains("row 0 column 0").rightclick();
    cy.ouiaId("expression-table-handler-menu").contains("Insert below").click({ force: true });
    cy.ouiaId("expression-grid-table")
      .contains("row 0 column 0")
      .trigger("mousedown", "topLeft", { which: 1 })
      .trigger("mousemove", { clientX: 300, clientY: 10 })
      .trigger("mouseup", { force: true });
    cy.realPress(["ControlLeft", "C"]);
    cy.ouiaId("expression-row-1").ouiaId("expression-column-1").click();
    cy.realPress(["ControlLeft", "V"]);
    cy.ouiaId("expression-row-1").within(function ($row) {
      cy.ouiaId("expression-column-0").should("have.text", "2");
      cy.ouiaId("expression-column-1").should("contain.text", "row 0 column 0");
      cy.ouiaId("expression-column-2").should("contain.text", "row 0 column 1");
      cy.ouiaId("expression-column-3").should("have.text", "");
    });
  });
});
//# sourceMappingURL=relation_expression_spec.js.map
