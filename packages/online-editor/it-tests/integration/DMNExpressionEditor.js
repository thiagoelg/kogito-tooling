describe("DMN Expression Editor Test :: Expressions", function () {
  beforeEach(function () {
    cy.visit("/");
  });
  it("Test New Expresssion editor - context", function () {
    cy.ouia({ ouiaId: "try-dmn-sample-button" }).click();
    cy.loadEditor();
    cy.ouia({ ouiaId: "dmn-guided-tour" }).children("button[aria-label='Close']").click();
    cy.getEditor().within(function () {
      cy.ouia({ ouiaId: "docks-item-org.kie.dmn.decision.navigator" }).children("button").click();
      cy.get("li[data-i18n-prefix='DecisionNavigatorTreeView.']").within(function ($navigator) {
        cy.get("[title='Back End Ratio'] div span").contains("Context").click();
      });
      cy.get("[data-field='beta-boxed-expression-toggle'] [data-field='try-it']").click();
      cy.ouia({ ouiaId: "expression-container" }).contains("Back End Ratio").should("be.visible");
      cy.get(".expression-title").contains("Back End Ratio").should("be.visible");
      cy.get(".expression-type").contains("Context").should("be.visible");
    });
  });
  it("Test New Expresssion editor - function", function () {
    cy.ouia({ ouiaId: "try-dmn-sample-button" }).click();
    cy.loadEditor();
    cy.ouia({ ouiaId: "dmn-guided-tour" }).children("button[aria-label='Close']").click();
    cy.getEditor().within(function () {
      cy.ouia({ ouiaId: "docks-item-org.kie.dmn.decision.navigator" }).children("button").click();
      cy.get("li[data-i18n-prefix='DecisionNavigatorTreeView.']").within(function ($navigator) {
        cy.get("[title='PITI'] div span").contains("Function").click();
      });
      cy.get("[data-field='beta-boxed-expression-toggle'] [data-field='try-it']").click();
      cy.ouia({ ouiaId: "expression-container" }).contains("PITI").should("be.visible");
      cy.get(".expression-title").contains("PITI").should("be.visible");
      cy.get(".expression-type").contains("Function").should("be.visible");
    });
  });
  it("Test New Expresssion editor - decision table", function () {
    cy.ouia({ ouiaId: "try-dmn-sample-button" }).click();
    cy.loadEditor();
    cy.ouia({ ouiaId: "dmn-guided-tour" }).children("button[aria-label='Close']").click();
    cy.getEditor().within(function () {
      cy.ouia({ ouiaId: "docks-item-org.kie.dmn.decision.navigator" }).children("button").click();
      cy.get("li[data-i18n-prefix='DecisionNavigatorTreeView.']").within(function ($navigator) {
        cy.get("[title='Credit Score Rating'] div span").contains("Decision Table").click();
      });
      cy.get("[data-field='beta-boxed-expression-toggle'] [data-field='try-it']").click();
      cy.ouia({ ouiaId: "expression-container" }).contains("Credit Score Rating").should("be.visible");
      cy.get(".expression-title").contains("Credit Score Rating").should("be.visible");
      cy.get(".expression-type").contains("Decision Table").should("be.visible");
    });
  });
});
describe("DMN Expression Editor Test :: Data types", function () {
  beforeEach(function () {
    cy.visit("/");
  });
  it("Change Decision Table from Any to Custom Data Type", function () {
    cy.get("#upload-field").attachFile("testModelWithCustomDataType.dmn", { subjectType: "drag-n-drop" });
    cy.loadEditor();
    cy.ouia({ ouiaId: "dmn-guided-tour" }).children("button[aria-label='Close']").click();
    cy.getEditor().within(function () {
      cy.ouia({ ouiaId: "docks-item-org.kie.dmn.decision.navigator" }).children("button").click();
      cy.get("li[data-i18n-prefix='DecisionNavigatorTreeView.']").within(function ($navigator) {
        cy.get("[title='Final Salary'] div span").contains("Decision Table").click();
      });
      cy.get("[data-field='beta-boxed-expression-toggle'] [data-field='try-it']").click();
      cy.get(".header-cell-info").contains("Final Salary").click();
      cy.ouia({ ouiaId: "manage-data-type-link" }).click();
      cy.ouia({ ouiaType: "add-data-type-button", ouiaId: "first" }).click();
      changeNewDataTypeEntry("tSalary", "Structure");
      changeNewDataTypeEntry("Amount", "number");
      cy.ouia({ ouiaId: "Amount" }).within(function ($row) {
        cy.get("[data-type-field='add-data-type-row-button']").click();
      });
      changeNewDataTypeEntry("Currency", "string");
      cy.get("[data-ouia-component-id='Editor'] a").click();
      cy.get("[data-field='beta-boxed-expression-toggle'] [data-field='try-it']").click();
      cy.get(".header-cell-info").contains("Final Salary").click();
      cy.ouia({ ouiaId: "edit-expression-data-type" }).click();
      cy.ouia({ ouiaId: "expression-popover-menu" }).within(function ($menu) {
        cy.ouia({ ouiaId: "tSalary" }).click({ force: true });
      });
      cy.get("[data-ouia-component-type='expression-column-header-cell-info']:contains('tSalary')").should(
        "be.visible"
      );
    });
  });
  it.skip("Change BKM Decision Table from Any to Custom Data Type", function () {
    cy.get("#upload-field").attachFile("testModelWithCustomDataType.dmn", { subjectType: "drag-n-drop" });
    cy.loadEditor();
    cy.ouiaId("dmn-guided-tour").children("button[aria-label='Close']").click();
    cy.getEditor().within(function () {
      cy.ouiaId("docks-item-org.kie.dmn.decision.navigator").children("button").click();
      cy.get("li[data-i18n-prefix='DecisionNavigatorTreeView.']").within(function ($navigator) {
        cy.get("[title='Salary Coefficient'] div span").contains("Function").click();
      });
      cy.get("[data-field='beta-boxed-expression-toggle'] [data-field='try-it']").click();
      cy.get("[data-ouia-component-type='expression-column-header-cell-info']:contains('number')").should("not.exist");
      cy.get(".header-cell-info").contains("Salary Coefficient").click();
      cy.ouiaId("edit-expression-data-type").click();
      cy.ouiaId("expression-popover-menu").within(function ($menu) {
        cy.ouiaId("number").click({ force: true });
      });
      cy.get("[data-ouia-component-type='expression-column-header-cell-info']:contains('number')").should("be.visible");
    });
  });
  it.skip("Change BKM Decision Table from Any to Custom Data Type", function () {
    cy.get("#upload-field").attachFile("testModelWithCustomDataType.dmn", { subjectType: "drag-n-drop" });
    cy.loadEditor();
    cy.ouiaId("dmn-guided-tour").children("button[aria-label='Close']").click();
    cy.getEditor().within(function () {
      cy.ouiaId("docks-item-org.kie.dmn.decision.navigator").children("button").click();
      cy.get("li[data-i18n-prefix='DecisionNavigatorTreeView.']").within(function ($navigator) {
        cy.get("[title='Salary Coefficient'] div span").contains("Function").click();
      });
      cy.get("[data-field='beta-boxed-expression-toggle'] [data-field='try-it']").click();
      cy.get("[data-ouia-component-type='expression-column-header-cell-info']:contains('number')").should("not.exist");
      cy.get(".header-cell-info").contains("Salary Coefficient").click();
      cy.ouiaId("edit-expression-data-type").click();
      cy.ouiaId("expression-popover-menu").within(function ($menu) {
        cy.ouiaId("number").click({ force: true });
      });
      cy.get("[data-ouia-component-type='expression-column-header-cell-info']:contains('number')").should("be.visible");
    });
  });
});
function changeNewDataTypeEntry(newEntryName, newDataType) {
  cy.ouia({ ouiaId: "Insert a name" }).within(function ($row) {
    cy.get("input[data-type-field='name-input']").type(newEntryName);
    cy.get("[data-i18n-prefix='DataTypeSelectView.']").should("exist");
    cy.get("[data-i18n-prefix='DataTypeSelectView.']").should("be.visible");
    cy.get("[data-i18n-prefix='DataTypeSelectView.']").within(function ($navigator) {
      cy.get("button[data-toggle='dropdown']").click();
    });
  });
  selectInDataTypesSearchableDropdown(newDataType);
  cy.ouia({ ouiaId: "Insert a name" }).within(function ($row) {
    cy.get("[data-type-field='save-button']").click();
  });
}
function selectInDataTypesSearchableDropdown(entryName) {
  cy.get(".bs-searchbox input").last().type(entryName);
  cy.get("ul").find("li.active").find("a").contains(entryName).should("be.visible");
  cy.get("ul").find("li.active").find("a").contains(entryName).click();
  cy.get("ul").find("li.active").find("a").contains(entryName).should("not.exist");
}
describe("DMN Expression Editor Test :: keyboard shortcuts", function () {
  beforeEach(function () {
    cy.visit("/");
  });
  it.skip("Test New Expresssion editor - undo", function () {
    cy.ouia({ ouiaId: "try-dmn-sample-button" }).click();
    cy.loadEditor();
    cy.ouia({ ouiaId: "dmn-guided-tour" }).children("button[aria-label='Close']").click();
    cy.getEditor().within(function () {
      cy.ouia({ ouiaId: "docks-item-org.kie.dmn.decision.navigator" }).children("button").click();
      cy.get("li[data-i18n-prefix='DecisionNavigatorTreeView.']").within(function ($navigator) {
        cy.get("[title='Back End Ratio'] div span").contains("Context").click();
      });
      cy.get("[data-field='beta-boxed-expression-toggle'] [data-field='try-it']").click();
      cy.ouia({ ouiaId: "expression-container" }).contains("Back End Ratio").should("be.visible");
      cy.get(".expression-title").contains("Back End Ratio").should("be.visible");
      cy.get(".expression-type").contains("Context").should("be.visible");
      cy.get(".editable-cell").contains("Applicant Data.Monthly.Repayments + Applicant Data.Monthly.Expenses").click();
      cy.realPress("Enter");
      cy.realType(" + 0");
      cy.realPress("Tab");
      cy.get(".editable-cell")
        .contains("Applicant Data.Monthly.Repayments + Applicant Data.Monthly.Expenses + 0")
        .should("be.visible");
      cy.realPress(["ControlLeft", "Z"]);
      cy.get(".editable-cell")
        .contains("Applicant Data.Monthly.Repayments + Applicant Data.Monthly.Expenses + 0")
        .should("not.be.visible");
    });
  });
});
//# sourceMappingURL=DMNExpressionEditor.js.map
