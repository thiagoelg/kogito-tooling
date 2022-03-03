describe("Dmn Editable Data Type.", function () {
  before("Visit page", function () {
    cy.visit("/dmn-editable");
    cy.loadEditors(["dmn-editable"]);
  });
  it("Test Add New Data Type And Check Dirty Indicator", function () {
    cy.editor("dmn-editable").find("[data-field='kie-palette']").should("be.visible");
    cy.editor("dmn-editable").ouiaId("editor-nav-tab", "Data Types", { timeout: 10000 }).should("be.visible").click();
    cy.editor("dmn-editable").ouiaId("add-data-type-button", "first").should("be.visible").click();
    cy.editor("dmn-editable")
      .ouiaId("dmn-data-type-item", "Insert a name")
      .should("be.visible")
      .find("[data-type-field='save-button']")
      .click();
    cy.ouiaType("content-dirty").should("be.visible");
  });
});
//# sourceMappingURL=dmn-editable-data-type.spec.js.map
