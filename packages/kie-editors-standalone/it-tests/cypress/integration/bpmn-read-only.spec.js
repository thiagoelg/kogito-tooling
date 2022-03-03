describe("Bpmn Read Only.", function () {
  before("Visit page", function () {
    cy.visit("/bpmn-read-only");
    cy.loadEditors(["bpmn-read-only"]);
  });
  describe("Loads empty editor in read only mode", function () {
    it("Editor palette is not visible", function () {
      cy.editor("bpmn-read-only").find("[data-field='palettePanel']").should("not.be.visible");
    });
    it("Editor properties bar is visible", function () {
      cy.editor("bpmn-read-only")
        .ouiaId("collapsed-docks-bar", "collapsed-docks-bar-E", { timeout: 10000 })
        .should("be.visible");
    });
  });
  describe("Loads non-empty editor in read only mode", function () {
    it("Loads non-empty editor without palette", function () {
      cy.uploadFile("process-string.bpmn", "bpmn-read-only");
      cy.viewFile("process-string.bpmn", "bpmn-read-only");
      cy.editor("bpmn-read-only").find("[data-field='palettePanel']").should("not.be.visible");
    });
    it("Loads non-empty editor with properties bar visible", function () {
      cy.editor("bpmn-read-only")
        .ouiaId("collapsed-docks-bar", "collapsed-docks-bar-E", { timeout: 10000 })
        .should("be.visible");
    });
    it("Editor properties bar can be opened", function () {
      cy.editor("bpmn-read-only")
        .ouiaId("docks-item", "docks-item-DiagramEditorPropertiesScreen")
        .find("button")
        .first()
        .should("be.visible")
        .click();
      cy.editor("bpmn-read-only").ouiaId("expanded-docks-bar", "expanded-docks-bar-E").should("be.visible");
    });
    describe("Editor properties are displayed as read-only", function () {
      var propertyItems;
      it("Properties have expected length", function () {
        cy.editor("bpmn-read-only")
          .ouiaId("expanded-docks-bar", "expanded-docks-bar-E")
          .within(function ($properties) {
            cy.wrap($properties)
              .find("[id='mainContainer']")
              .should("be.visible")
              .children(".row")
              .should("have.length", 17)
              .then(function ($items) {
                propertyItems = $items;
              });
          });
      });
      it("Process name property is read only", function () {
        cy.wrap(propertyItems)
          .find("input[name*='diagramSet.name']")
          .should("have.value", "Process string")
          .should("not.have.class", "editable");
      });
      it("Process documentation property is read only", function () {
        cy.wrap(propertyItems)
          .find("textarea[name*='diagramSet.documentation']")
          .should("have.value", "Documentation")
          .should("not.have.class", "editable");
      });
      it("Process ID property is read only", function () {
        cy.wrap(propertyItems)
          .find("input[name*='diagramSet.id']")
          .should("not.have.class", "editable")
          .should("have.value", "defaultProcessId");
      });
      it("Process package property is read only", function () {
        cy.wrap(propertyItems)
          .find("input[name*='diagramSet.packageProperty']")
          .should("not.have.class", "editable")
          .should("have.value", "com.example");
      });
      it("Process type property is read only", function () {
        cy.wrap(propertyItems)
          .find("select[name*='diagramSet.processType']")
          .should("not.have.class", "editable")
          .should("have.value", "Public");
      });
      it("Process version property is read only", function () {
        cy.wrap(propertyItems)
          .find("input[name*='diagramSet.version']")
          .should("not.have.class", "editable")
          .should("have.value", "1.0");
      });
      it("Process ad-hoc property is read only", function () {
        cy.wrap(propertyItems).find("input[name*='diagramSet.adHoc']").should("be.disabled").should("not.be.checked");
      });
      it("Process instance description property is read only", function () {
        cy.wrap(propertyItems)
          .find("input[name*='diagramSet.processInstanceDescription']")
          .should("not.have.class", "editable")
          .should("have.value", "");
      });
      it("Process imports property is read only", function () {
        cy.wrap(propertyItems)
          .find("input[id='importsTextBox']")
          .should("have.value", "No imports")
          .should("not.have.class", "editable");
      });
      it.skip("Process imports buttons is read only", function () {
        cy.wrap(propertyItems).find("button[id='importsButton']").should("be.disabled");
      });
      it("Process executable property is read only", function () {
        cy.wrap(propertyItems).find("input[name*='diagramSet.executable']").should("be.checked").should("be.disabled");
      });
      it("Process SLA due date property is read only", function () {
        cy.wrap(propertyItems)
          .find("input[name*='diagramSet.slaDueDate']")
          .should("have.value", "")
          .should("have.attr", "disabled");
      });
      it("Process variables (Process Data section) section is not disabled", function () {
        cy.wrap(propertyItems)
          .find("a")
          .contains("Process Data")
          .should("not.be.disabled")
          .click()
          .wait(1000)
          .scrollIntoView();
      });
      it("Process variables add button is read only", function () {
        cy.wrap(propertyItems).find("button[data-field='addVarButton']").should("be.disabled");
      });
      describe("Process variables are displayed as read only", function () {
        var processVariables;
        it("Process Variables have expected length", function () {
          cy.wrap(propertyItems)
            .contains("Process Variables")
            .siblings()
            .first()
            .should("not.be.disabled")
            .should("be.visible")
            .then(function ($processVariablesContainer) {
              processVariables = $processVariablesContainer;
              cy.wrap($processVariablesContainer).find("#variableRow").siblings().should("have.length", "0");
            });
        });
        it("Process variable name is read only", function () {
          cy.wrap(processVariables)
            .find("input[data-field='name']")
            .should("not.have.class", "editable")
            .should("have.value", "string_input");
        });
        it("Process variable data type is read only", function () {
          cy.wrap(processVariables)
            .find("select[data-field='dataType']")
            .should("not.have.class", "editable")
            .should("have.value", "String");
        });
        it.skip("Process variable TAG handle is read only", function () {
          cy.wrap(processVariables).find("a[data-field='variable-tags-settings']").should("be.disabled");
        });
        it("Process variable delete button is read only", function () {
          cy.wrap(processVariables).find("button[data-field='deleteButton']").should("not.have.class", "editable");
        });
      });
      it("Process advanced (Advanced section) section is not disabled", function () {
        cy.wrap(propertyItems)
          .find("a")
          .contains("Advanced")
          .should("not.be.disabled")
          .click()
          .wait(1000)
          .scrollIntoView();
      });
      describe("Process metadata attributes rows are displayed as read only", function () {
        var metadataAtttributes;
        it("Metadata attributes list have expected size", function () {
          cy.wrap(propertyItems)
            .contains("Metadata Attributes")
            .siblings()
            .first()
            .should("not.be.disabled")
            .should("be.visible")
            .then(function ($metadataAtributesContainer) {
              metadataAtttributes = $metadataAtributesContainer;
              cy.wrap($metadataAtributesContainer).find("#metaDataRow").siblings().should("have.length", "0");
            });
        });
        it("Process metadata attribute name is read only", function () {
          cy.wrap(metadataAtttributes)
            .find("input[data-field='attribute']")
            .should("not.have.class", "editable")
            .should("have.value", "perf_indicator");
        });
        it("Process metadata attribute value is read only", function () {
          cy.wrap(metadataAtttributes)
            .find("input[data-field='value']")
            .should("not.have.class", "editable")
            .should("have.value", "good_performance");
        });
        it("Process metadata attribute delete button is read only", function () {
          cy.wrap(metadataAtttributes).find("button[data-field='deleteButton']").should("be.disabled");
        });
      });
      describe("Process global variables rows are displayed as read only", function () {
        var globalVariables;
        it("Global variables list have expected length", function () {
          cy.wrap(propertyItems)
            .contains("Global Variables")
            .siblings()
            .first()
            .wait(1000)
            .scrollIntoView()
            .should("not.be.disabled")
            .should("be.visible")
            .then(function ($globalVariablesContainer) {
              globalVariables = $globalVariablesContainer;
              cy.wrap($globalVariablesContainer).find("#variableRow").siblings().should("have.length", "0");
            });
        });
        it("Process global variable name is read only", function () {
          cy.wrap(globalVariables)
            .find("input[data-field='name']")
            .should("not.have.class", "editable")
            .should("have.value", "is_processing");
        });
        it("Process global variable typeis read only", function () {
          cy.wrap(globalVariables)
            .find("select[data-field='dataType']")
            .should("not.have.class", "editable")
            .should("have.value", "Boolean");
        });
        it("Process metadata attribute delete button is read only", function () {
          cy.wrap(globalVariables).find("button[data-field='deleteButton']").should("be.disabled");
        });
      });
    });
  });
});
//# sourceMappingURL=bpmn-read-only.spec.js.map
