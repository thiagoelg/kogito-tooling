describe("DMN Guided Tour Test", function () {
  beforeEach(function () {
    cy.visit("/");
  });
  it("follow first guided tour instruction", function () {
    cy.get("[data-ouia-component-id='new-dmn-button']").click();
    cy.loadEditor();
    cy.get("[data-ouia-component-id='dmn-guided-tour']").contains("Take tour").click();
    cy.getEditor().within(function () {
      cy.get("div[data-field='palettePanel'] button[title='DMN Decision']").click();
      cy.get("div[data-field='canvasPanel']").trigger("mousedown", 100, 300);
      cy.get("div[data-field='canvasPanel']").trigger("mouseup");
    });
    cy.get("[data-ouia-component-id='dmn-guided-tour'] div").contains("Rename our decision node").should("be.visible");
  });
});
//# sourceMappingURL=DMNGuidedTourTest.js.map
