describe("Bpmn Editable.", function () {
  before("Visit page", function () {
    cy.visit("/bpmn-editable");
    cy.loadEditors(["bpmn-editable"]);
  });
  it("Test Load File And View", function () {
    cy.editor("bpmn-editable").find("[data-field='kie-palette']").should("be.visible");
    cy.uploadFile("process-string.bpmn", "bpmn-editable");
    cy.viewFile("process-string.bpmn", "bpmn-editable");
    cy.editor("bpmn-editable").find("[data-title='Explore Diagram']").should("be.visible").click();
    cy.editor("bpmn-editable")
      .find("[data-field='explorerPanelBody']")
      .wait(1000)
      .scrollIntoView()
      .should("be.visible")
      .find("a.gwt-Anchor")
      .should("have.length", 7)
      .then(function ($links) {
        expect($links.eq(0)).to.contain.text("Process string");
        expect($links.eq(1)).to.contain.text("Start");
        expect($links.eq(2)).to.contain.text("Exclusive");
        expect($links.eq(3)).to.contain.text("Process the String");
        expect($links.eq(4)).to.contain.text("Log Error");
        expect($links.eq(5)).to.contain.text("End");
        expect($links.eq(6)).to.contain.text("End Error");
      });
  });
});
//# sourceMappingURL=bpmn-editable.spec.js.map
