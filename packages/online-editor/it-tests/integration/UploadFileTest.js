describe("Upload file test", function () {
  beforeEach(function () {
    cy.visit("/");
  });
  it("should upload BPMN file", function () {
    cy.get("#upload-field").attachFile("testProcess.bpmn", { subjectType: "drag-n-drop" });
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
      cy.get("[data-ouia-component-id='tree-item-Start test node']").click();
      cy.get("iframe").type("tgse", { force: true });
      cy.get("[data-title='Properties']").click();
      cy.get("div[data-i18n-prefix='FormDisplayerViewImpl.']:not([hidden]) [name$='general.name']")
        .focus()
        .clear()
        .type("End test node");
      cy.get("[data-title='Explore Diagram']").click();
      cy.get("a.gwt-Anchor").should(function ($nodes) {
        expect($nodes).length(6);
        expect($nodes.eq(0)).text("Test process");
        expect($nodes.eq(1)).text("Start test node");
        expect($nodes.eq(2)).text("Task");
        expect($nodes.eq(3)).text("Parallel");
        expect($nodes.eq(4)).text("Sub-process");
        expect($nodes.eq(5)).text("End test node");
      });
    });
    cy.wait(1000);
    cy.get("[data-ouia-component-id='kebab-sm']").click();
    cy.get("[data-ouia-component-id='download-file-dropdown-button']").click();
    cy.readFile("downloads/testProcess.bpmn").should(function ($text) {
      expect($text).match(/<\?xml version="1.0" encoding="UTF-8"\?>/);
      expect($text).match(/<bpmn2:endEvent id="[A-Z0-9_-]*" name="End test node">/);
      expect($text).match(/<bpmn2:startEvent id="[A-Z0-9_-]*" name="Start test node">/);
    });
  });
  it("should upload DMN file", function () {
    cy.get("#upload-field").attachFile("testModel.dmn", { subjectType: "drag-n-drop" });
    cy.loadEditor();
    cy.get("[aria-label='Edit file name']").should("have.value", "testModel");
    cy.get("[data-ouia-component-id='dmn-guided-tour'] button[aria-label='Close']").click();
    cy.getEditor().within(function () {
      cy.get("[data-title='Properties']").click();
      cy.get("[name$='definitions.nameHolder']").should("have.value", "Test model");
      cy.get("[name$='definitions.description']").should("have.value", "This is test model.");
      cy.get("[data-title='Decision Navigator']").click();
      cy.get("li[data-i18n-prefix='DecisionNavigatorTreeView.']").should(function ($nodes) {
        expect($nodes).length(2);
        expect($nodes.eq(0)).attr("title", "Test model");
        expect($nodes.eq(1)).attr("title", "Test input data");
      });
      cy.get("[title='Test input data'] > div").click();
      cy.get("iframe").type("d", { force: true });
      cy.get("[title='Decision-1'] > div").should("be.visible");
      cy.get("[title='Decision-1'] > div").click();
      cy.get("[data-title='Decision Navigator']").click();
      cy.get("[data-title='Properties']").click();
      cy.get("[name$='nameHolder']").focus().clear().type("Test decision node").type("{enter}");
      cy.get("[data-title='Decision Navigator']").click();
      cy.get("li[data-i18n-prefix='DecisionNavigatorTreeView.']").should(function ($nodes) {
        expect($nodes).length(3);
        expect($nodes.eq(0)).attr("title", "Test model");
        expect($nodes.eq(1)).attr("title", "Test decision node");
        expect($nodes.eq(2)).attr("title", "Test input data");
      });
    });
    cy.wait(1000);
    cy.get("[data-ouia-component-id='kebab-sm']").click();
    cy.get("[data-ouia-component-id='download-file-dropdown-button']").click();
    cy.readFile("downloads/testModel.dmn").should(function ($text) {
      expect($text).match(/<\?xml version="1.0" encoding="UTF-8"\?>/);
      expect($text).match(/<dmn:inputData id="[A-Z0-9_-]*" name="Test input data">/);
      expect($text).match(/<dmn:decision id="[A-Z0-9_-]*" name="Test decision node">/);
    });
  });
  it("DMN Guided Tour popup shouldn't appear when opening broken file", function () {
    cy.on("uncaught:exception", function (err, runnable) {
      return false;
    });
    cy.get("#upload-field").attachFile("testModelBroken.dmn", { subjectType: "drag-n-drop" });
    cy.loadEditor();
    cy.get("[aria-label='Edit file name']").should("have.value", "testModelBroken");
    cy.get("[data-ouia-component-id='dmn-guided-tour']").should("not.be.visible");
    cy.get("[data-ouia-component-id='set-content-error-alert']").should("be.visible");
  });
  it("DMN Automatic Layout dialogue should appear when opening file without DMNDI", function () {
    cy.get("#upload-field").attachFile("testModelWithoutLayout.dmn", { subjectType: "drag-n-drop" });
    cy.confirmAutomaticLayoutDialogue();
  });
  it("should upload PMML file", function () {
    cy.get("#upload-field").attachFile("testScoreCard.pmml", { subjectType: "drag-n-drop" });
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
      cy.get("#add-characteristic-button").click();
      cy.get("#characteristic-name").focus().clear().type("Second Test Characteristic");
      cy.get("#characteristic-reason-code").focus().clear().type("4");
      cy.get("#characteristic-baseline-score").focus().clear().type("47");
      cy.get("#characteristics-toolbar").click();
      cy.get(".characteristics-container div > strong").should(function ($characteristics) {
        expect($characteristics).length(2);
        expect($characteristics.eq(0)).text("Test Characteristic");
        expect($characteristics.eq(1)).text("Second Test Characteristic");
      });
    });
    cy.wait(1000);
    cy.get("[data-ouia-component-id='kebab-sm']").click();
    cy.get("[data-ouia-component-id='download-file-dropdown-button']").click();
    cy.readFile("downloads/testScoreCard.pmml").should(function ($text) {
      expect($text).contains('<Characteristic name="Test Characteristic" reasonCode="3" baselineScore="22"/>');
      expect($text).contains('<Characteristic name="Second Test Characteristic" reasonCode="4" baselineScore="47"/>');
    });
  });
});
//# sourceMappingURL=UploadFileTest.js.map
