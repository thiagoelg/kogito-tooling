describe("Open from source test", function () {
  var SAMPLES_URL =
    "https://raw.githubusercontent.com/kiegroup/kie-tools/main/packages/online-editor/it-tests/fixtures/";
  beforeEach(function () {
    cy.visit("/");
  });
  it("should open BPMN file from GitHub url", function () {
    cy.get("[data-ouia-component-id='import-from-url-button']").should("be.enabled");
    cy.get("[data-ouia-component-id='import-url-form-input']").type(SAMPLES_URL + "testProcess.bpmn");
    cy.get("[data-ouia-component-id='import-url-form-input']").should("have.value", SAMPLES_URL + "testProcess.bpmn");
    cy.get("[data-ouia-component-id='import-from-url-button']", { timeout: 15000 }).should("be.enabled");
    cy.get("[data-ouia-component-id='import-from-url-button']").click();
    cy.loadEditor();
    cy.get("[aria-label='Edit file name']").should("have.value", "testProcess");
    cy.getEditor().within(function () {
      cy.get("[data-title='Properties']").click();
      cy.get("[name$='diagramSet.name']").should("have.value", "Test process");
      cy.get("[name$='diagramSet.packageProperty']").should("have.value", "org.kie");
      cy.get("[name$='diagramSet.id']").should("have.value", "test-process");
      cy.get("[data-title='Explore Diagram']").click();
      cy.get("a.gwt-Anchor").should(function ($nodes) {
        expect($nodes).length(2);
        expect($nodes.eq(0)).text("Test process");
        expect($nodes.eq(1)).text("Start test node");
      });
    });
  });
  it("should open DMN file from GitHub url", function () {
    cy.get("[data-ouia-component-id='import-from-url-button']").should("be.enabled");
    cy.get("[data-ouia-component-id='import-url-form-input']").type(SAMPLES_URL + "testModel.dmn");
    cy.get("[data-ouia-component-id='import-url-form-input']").should("have.value", SAMPLES_URL + "testModel.dmn");
    cy.get("[data-ouia-component-id='import-from-url-button']", { timeout: 15000 }).should("be.enabled");
    cy.get("[data-ouia-component-id='import-from-url-button']").click();
    cy.loadEditor();
    cy.get("[aria-label='Edit file name']").should("have.value", "testModel");
    cy.get("[data-ouia-component-id='dmn-guided-tour'] button[aria-label='Close']").click();
    cy.getEditor().within(function () {
      cy.get("[data-title='Properties']").click();
      cy.get("[name$='definitions.nameHolder']").should("have.value", "Test model");
      cy.get("[name$='definitions.description']").should("have.value", "This is test model.");
      cy.get("[data-title='Properties']").click();
      cy.get("[data-title='Decision Navigator']").click();
      cy.get("li[data-i18n-prefix='DecisionNavigatorTreeView.']").should(function ($nodes) {
        expect($nodes).length(2);
        expect($nodes.eq(0)).attr("title", "Test model");
        expect($nodes.eq(1)).attr("title", "Test input data");
      });
    });
  });
  it("should open PMML file from GitHub url", function () {
    cy.get("[data-ouia-component-id='import-from-url-button']").should("be.enabled");
    cy.get("[data-ouia-component-id='import-url-form-input']").type(SAMPLES_URL + "testScoreCard.pmml");
    cy.get("[data-ouia-component-id='import-url-form-input']").should("have.value", SAMPLES_URL + "testScoreCard.pmml");
    cy.get("[data-ouia-component-id='import-from-url-button']", { timeout: 15000 }).should("be.enabled");
    cy.get("[data-ouia-component-id='import-from-url-button']").click();
    cy.getEditor().within(function () {
      cy.get("[data-testid='editor-page']", { timeout: 60000 }).should("be.visible");
    });
    cy.get("[aria-label='Edit file name']").should("have.value", "testScoreCard");
    cy.getEditor().within(function () {
      cy.get(".modelTitle__truncate").should("have.text", "Test model");
      cy.get(".characteristics-container div > strong").should(function ($characteristics) {
        expect($characteristics).length(1);
        expect($characteristics.eq(0)).text("Test Characteristic");
      });
      cy.get("[data-title='DataDictionary']").click();
      cy.get(".data-type-item__name").should(function ($dataTypes) {
        expect($dataTypes).length(1);
        expect($dataTypes.eq(0)).text("Test Data Type");
      });
      cy.get("[data-title='DataDictionaryModalClose']").click();
      cy.get("[data-title='MiningSchema']").click();
      cy.get(".mining-schema-list__item__name").should(function ($miningSchema) {
        expect($miningSchema).length(1);
        expect($miningSchema.eq(0)).text("Test Data Type");
      });
      cy.get("[data-title='MiningSchemaModalClose']").click();
      cy.get("[data-title='Outputs']").click();
      cy.get(".outputs-container div > strong").should(function ($outputs) {
        expect($outputs).length(1);
        expect($outputs.eq(0)).text("Test Output");
      });
      cy.get("[data-title='OutputsModalClose']").click();
    });
  });
});
//# sourceMappingURL=OpenFromSourceTest.js.map
