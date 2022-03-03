describe("Bpmn Workitem E2E Test.", function () {
  var NAME_INPUT_LOCATOR = "input[data-field='name']";
  var DATATYPE_SELECT_LOCATOR = "select[data-field='dataType']";
  before("Visit page", function () {
    cy.visit("/bpmn-workitem");
    cy.loadEditors(["bpmn-workitem"]);
  });
  it("Loads custom workitem definition to Palette on open", function () {
    cy.editor("bpmn-workitem")
      .find("[data-field='kie-palette']")
      .should("be.visible")
      .find("[data-field='listGroupItem'] [data-field='categoryIcon']")
      .should("have.length", 9)
      .then(function ($items) {
        expect($items.eq(0)).to.have.attr("title", "Start Events");
        expect($items.eq(1)).to.have.attr("title", "Intermediate Events");
        expect($items.eq(2)).to.have.attr("title", "End Events");
        expect($items.eq(3)).to.have.attr("title", "Activities");
        expect($items.eq(4)).to.have.attr("title", "SubProcesses");
        expect($items.eq(5)).to.have.attr("title", "Gateways");
        expect($items.eq(6)).to.have.attr("title", "Containers");
        expect($items.eq(7)).to.have.attr("title", "Artifacts");
        expect($items.eq(8)).to.have.attr("title", "Custom Tasks");
        cy.wrap($items.eq(8)).click();
      });
    cy.editor("bpmn-workitem")
      .find("[data-field='listGroupItem']")
      .eq(8)
      .find("[data-field='floatingPanel']")
      .find("[data-field='name']")
      .should("exist")
      .should("contain.text", "CreateCustomer");
  });
  it("Loads the Custom Workitem in diagram explorer", function () {
    cy.editor("bpmn-workitem").find("[data-title='Explore Diagram']").should("be.visible").click();
    cy.editor("bpmn-workitem")
      .find("[data-field='explorerPanelBody']")
      .wait(1000)
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.editor("bpmn-workitem")
      .find("[data-field='explorerPanelBody']")
      .wait(1000)
      .scrollIntoView()
      .should("be.visible")
      .find("a.gwt-Anchor")
      .should("have.length", 4)
      .then(function ($links) {
        expect($links.eq(0)).to.contain.text("process-wid");
        expect($links.eq(1)).to.contain.text("Start");
        expect($links.eq(2)).to.contain.text("End");
        expect($links.eq(3)).to.contain.text("Create Customer Internal Service");
        cy.wrap($links.eq(3)).click();
        cy.editor("bpmn-workitem")
          .ouiaId("docks-item", "docks-item-DiagramEditorPropertiesScreen")
          .find("button")
          .first()
          .should("be.visible")
          .click();
        cy.editor("bpmn-workitem").ouiaId("expanded-docks-bar", "expanded-docks-bar-E").should("be.visible");
      });
  });
  describe("Custom workitem task has expected properties.", function () {
    var propertyItems;
    it("Properties have expected length", function () {
      cy.editor("bpmn-workitem")
        .ouiaId("expanded-docks-bar", "expanded-docks-bar-E")
        .within(function ($properties) {
          cy.wrap($properties)
            .find("[id='mainContainer']")
            .should("be.visible")
            .children(".row")
            .then(function ($items) {
              propertyItems = $items;
            });
        });
    });
    it("Custom workitem has expected name", function () {
      cy.wrap(propertyItems)
        .find("textarea[name*='general.name']")
        .should("have.value", "Create Customer Internal Service")
        .should("not.be", "disabled");
    });
    it("Custom workitem has expected documentation", function () {
      cy.wrap(propertyItems)
        .find("textarea[name*='general.documentation']")
        .should("have.value", "Calls internal service that creates the customer in database server.")
        .should("not.be", "disabled");
    });
    it("Custom workitem has expected isAsync value", function () {
      cy.wrap(propertyItems)
        .find("input[name*='executionSet.isAsync']")
        .should("not.be.checked")
        .should("not.be.disabled");
    });
    it("Custom workitem has expected AdHoc Autostart value", function () {
      cy.wrap(propertyItems)
        .find("input[name*='executionSet.adHocAutostart']")
        .should("not.be.checked")
        .should("not.be.disabled");
    });
    it("Custom workitem has expected SLA Due Date", function () {
      cy.wrap(propertyItems)
        .find("input[name*='executionSet.slaDueDate']")
        .should("have.value", "")
        .should("not.be", "disabled");
    });
    it("Custom workitem has expected data assignment size", function () {
      cy.wrap(propertyItems)
        .find("input[id='assignmentsTextBox']")
        .should("have.value", "7 data inputs, 1 data output")
        .should("not.be", "disabled");
    });
    it("Data assignments of custom work item tasks are not disabled", function () {
      cy.wrap(propertyItems)
        .find("a")
        .contains("Data Assignments")
        .should("not.be.disabled")
        .click()
        .wait(1000)
        .scrollIntoView();
    });
    describe("Custom workitem task has expected data inputs and data output assignments.", function () {
      var dataAssignments;
      after(function () {
        cy.editor("bpmn-workitem").find(".modal-body").contains("button", "OK").click();
      });
      it("Custom workitem has expected size of data assignments when opened for edit", function () {
        cy.wrap(propertyItems).find("button[id='assignmentsButton']").should("not.be", "disabled").click();
        cy.editor("bpmn-workitem")
          .find(".modal-content")
          .should("be.visible")
          .within(function () {
            cy.get(".modal-title").should("have.text", "Create Customer Internal Service Data I/O");
            cy.get("tr[id='assignment']")
              .should("have.length", 8)
              .then(function ($assignments) {
                dataAssignments = $assignments;
              });
          });
      });
      it("Custom workitem has correct in_customer_id data input assignments", function () {
        cy.wrap(dataAssignments.eq(0)).within(function () {
          cy.get(NAME_INPUT_LOCATOR)
            .should("have.value", "in_customer_id")
            .get(DATATYPE_SELECT_LOCATOR)
            .should("have.value", "String");
        });
      });
      it("Custom workitem has correct in_customer_initial_balance data input assignment", function () {
        cy.wrap(dataAssignments.eq(1)).within(function () {
          cy.get(NAME_INPUT_LOCATOR)
            .should("have.value", "in_customer_initial_balance")
            .get(DATATYPE_SELECT_LOCATOR)
            .should("have.value", "Float");
        });
      });
      it("Custom workitem has correct in_customer_level_id data input assignments", function () {
        cy.wrap(dataAssignments.eq(2)).within(function () {
          cy.get(NAME_INPUT_LOCATOR)
            .should("have.value", "in_customer_level_id")
            .get(DATATYPE_SELECT_LOCATOR)
            .should("have.value", "Integer");
        });
      });
      it("Custom workitem has correct in_customer_level_label data input assignment", function () {
        cy.wrap(dataAssignments.eq(3)).within(function () {
          cy.get(NAME_INPUT_LOCATOR)
            .should("have.value", "in_customer_level_label")
            .get(DATATYPE_SELECT_LOCATOR)
            .should("have.value", "java.lang.Object");
        });
      });
      it("Custom workitem has correct in_customer_roles data input assignment", function () {
        cy.wrap(dataAssignments.eq(4)).within(function () {
          cy.get(NAME_INPUT_LOCATOR)
            .should("have.value", "in_customer_roles")
            .get(DATATYPE_SELECT_LOCATOR)
            .should("have.value", "java.util.List");
        });
      });
      it("Custom workitem has correct in_message data input assignment", function () {
        cy.wrap(dataAssignments.eq(5)).within(function () {
          cy.get(NAME_INPUT_LOCATOR)
            .should("have.value", "in_message")
            .get(DATATYPE_SELECT_LOCATOR)
            .should("have.value", "java.lang.Object");
        });
      });
      it("Custom workitem has correct in_security_token data input assignment", function () {
        cy.wrap(dataAssignments.eq(6)).within(function () {
          cy.get(NAME_INPUT_LOCATOR)
            .should("have.value", "in_security_token")
            .get(DATATYPE_SELECT_LOCATOR)
            .should("have.value", "java.lang.Object");
        });
      });
      it("Custom workitem has correct out_operation_success data output assignment", function () {
        cy.wrap(dataAssignments.eq(7)).within(function () {
          cy.get(NAME_INPUT_LOCATOR)
            .should("have.value", "out_operation_success")
            .get(DATATYPE_SELECT_LOCATOR)
            .should("have.value", "Boolean");
        });
      });
    });
  });
  describe.skip("Unknown custom workitem task has expected properties.", function () {
    var unknownCustomWorkitemProperties;
    it("Loads the unknown custom workitem in diagram explorer", function () {
      cy.editor("bpmn-workitem").find("[data-title='Explore Diagram']").should("be.visible").click();
      cy.editor("bpmn-workitem")
        .find("[data-field='explorerPanelBody']")
        .wait(1000)
        .scrollIntoView()
        .should("be.visible")
        .find("a.gwt-Anchor")
        .should("have.length", 5)
        .then(function ($links) {
          expect($links.eq(2)).to.contain.text("Email");
          cy.wrap($links.eq(2)).click();
          cy.editor("bpmn-workitem")
            .ouiaId("docks-item", "docks-item-DiagramEditorPropertiesScreen")
            .find("button")
            .first()
            .should("be.visible")
            .click();
          cy.editor("bpmn-workitem").ouiaId("expanded-docks-bar", "expanded-docks-bar-E").should("be.visible");
        });
    });
    it.skip("Unkown custom workitem properties have expected length.", function () {
      cy.editor("bpmn-workitem")
        .ouiaId("expanded-docks-bar", "expanded-docks-bar-E")
        .within(function ($properties) {
          cy.wrap($properties)
            .find("[id='mainContainer']")
            .should("be.visible")
            .children(".row")
            .should("have.length", 11)
            .then(function ($items) {
              unknownCustomWorkitemProperties = $items;
            });
        });
    });
  });
});
//# sourceMappingURL=bpmn-workitem.spec.js.map
