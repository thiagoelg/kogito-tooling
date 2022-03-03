describe("Dmn Editable - Expression.", function () {
  before("Visit page", function () {
    cy.visit("/dmn-editable");
    cy.loadEditors(["dmn-editable"]);
  });
  it.skip("Test New Expression Editor Can Be Activated", function () {
    cy.editor("dmn-editable").find("[data-field='kie-palette']").should("be.visible");
    cy.editor("dmn-editable")
      .ouiaId("collapsed-docks-bar", "collapsed-docks-bar-W", { timeout: 10000 })
      .should("be.visible");
    cy.uploadFile("Traffic Violation.dmn", "dmn-editable");
    cy.viewFile("Traffic Violation.dmn", "dmn-editable");
    cy.editor("dmn-editable")
      .ouiaId("collapsed-docks-bar", "collapsed-docks-bar-W")
      .find("button")
      .first()
      .should("be.visible")
      .click();
    cy.editor("dmn-editable")
      .ouiaId("expanded-docks-bar", "expanded-docks-bar-W")
      .should("be.visible")
      .within(function ($navigator) {
        cy.get("[title='Should the driver be suspended?'] div span").contains("Context").click();
      });
    cy.editor("dmn-editable").find("[data-field='beta-boxed-expression-toggle'] [data-field='try-it']").click();
    cy.editor("dmn-editable")
      .find("[data-ouia-component-id='expression-container']")
      .contains("Should the driver be suspended?")
      .should("be.visible");
    cy.editor("dmn-editable")
      .ouiaId("expanded-docks-bar", "expanded-docks-bar-W")
      .should("be.visible")
      .within(function ($navigator) {
        cy.get("[title='Fine'] div span").contains("Decision Table").click();
      });
    cy.editor("dmn-editable").find("[data-field='beta-boxed-expression-toggle'] [data-field='try-it']").click();
    cy.editor("dmn-editable")
      .find("[data-ouia-component-id='expression-container']")
      .contains("Fine")
      .should("be.visible");
  });
});
//# sourceMappingURL=dmn-new-expression-editor.spec.js.map
