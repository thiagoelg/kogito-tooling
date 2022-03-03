describe("New file test", function () {
  beforeEach(function () {
    cy.visit("/");
  });
  it("should create new empty BPMN", function () {
    cy.get("[data-ouia-component-id='new-bpmn-button']").click();
    cy.loadEditor();
    cy.get("[aria-label='Edit file name']").should("have.value", "Untitled");
    cy.getEditor().within(function () {
      cy.get("[data-title='Properties']").click();
      cy.get("[name$='diagramSet.name']").should("have.value", "Untitled");
      cy.get("[name$='diagramSet.packageProperty']").should("have.value", "com.example");
      cy.get("[name$='diagramSet.id']").should("have.value", "Untitled");
      cy.get("[data-title='Explore Diagram']").click();
      cy.get("a.gwt-Anchor").should(function ($nodes) {
        expect($nodes).length(1);
        expect($nodes.eq(0)).text("Untitled");
      });
    });
  });
  it("should create new empty DMN", function () {
    cy.get("[data-ouia-component-id='new-dmn-button']").click();
    cy.loadEditor();
    cy.get("[aria-label='Edit file name']").should("have.value", "Untitled");
    cy.get("[data-ouia-component-id='dmn-guided-tour'] button[aria-label='Close']").click();
    cy.getEditor().within(function () {
      cy.get("[data-title='Decision Navigator']").click();
      cy.get("li[data-i18n-prefix='DecisionNavigatorTreeView.']").should(function ($nodes) {
        expect($nodes).length(1);
        expect($nodes.eq(0)).attr("title", "Untitled");
      });
      cy.get("[data-title='Properties']").click();
      cy.get("[name$='definitions.nameHolder']").should("have.value", "Untitled");
      cy.get("[data-title='Properties']").click();
      cy.get("[data-ouia-component-id='Data Types'] a").click();
      cy.get("[data-i18n-key='NoCustomDataTitle']").should("be.visible");
    });
  });
  it("should create new empty PMML", function () {
    cy.get("[data-ouia-component-id='new-pmml-button']").click();
    cy.getEditor().within(function () {
      cy.get("[data-testid='editor-page']", { timeout: 60000 }).should("be.visible");
    });
    cy.get("[aria-label='Edit file name']").should("have.value", "Untitled");
    cy.getEditor().within(function () {
      cy.get("[data-ouia-component-id='no-characteristics-defined-title']").should("be.visible");
      cy.get("[data-title='DataDictionary']").click();
      cy.get("[data-ouia-component-id='no-data-fields-title']").should("be.visible");
      cy.get("[data-title='DataDictionaryModalClose']").click();
      cy.get("[data-title='MiningSchema']").click();
      cy.get("[data-ouia-component-id='mining-schema-no-data-fields-title']").should("be.visible");
      cy.get("[data-title='MiningSchemaModalClose']").click();
      cy.get("[data-title='Outputs']").click();
      cy.get("[data-ouia-component-id='outputs-overview']").scrollTo("center");
      cy.get("[data-ouia-component-id='no-outputs-title']").should("be.visible");
      cy.get("[data-title='OutputsModalClose']").click();
    });
  });
});
//# sourceMappingURL=NewFileTest.js.map
