describe("Test DMN Documentation tab", function () {
  beforeEach(function () {
    cy.visit("/");
  });
  it("Decision Question and Allowed Answers are present", function () {
    cy.get("#upload-field").attachFile("testModelDocumentation.dmn", { subjectType: "drag-n-drop" });
    cy.loadEditor();
    cy.get("[aria-label='Edit file name']").should("have.value", "testModelDocumentation");
    cy.ouia({ ouiaId: "dmn-guided-tour" }).get("button[aria-label='Close']").click();
    cy.getEditor().within(function () {
      cy.ouia({ ouiaId: "Documentation", ouiaType: "editor-nav-tab" }).find("a").click();
      cy.get(".drd-component").contains("What is output?").should("exist");
      cy.get(".drd-component").contains("Always a constant 0.").should("exist");
    });
  });
});
//# sourceMappingURL=DMNDocumentationTest.js.map
