Cypress.Commands.add("getEditor", function () {
  cy.frameLoaded("iframe#kogito-iframe");
  return cy.iframe("iframe#kogito-iframe");
});
Cypress.Commands.add("loadEditor", function () {
  cy.getEditor().within(function () {
    cy.get("[data-testid='loading-screen-div']", { timeout: 15000 }).should("be.visible");
    cy.get("[data-testid='loading-screen-div']", { timeout: 60000 }).should("not.exist");
  });
});
Cypress.Commands.add("confirmAutomaticLayoutDialogue", function () {
  cy.getEditor().within(function () {
    cy.get("[data-testid='loading-screen-div']", { timeout: 15000 }).should("exist");
    cy.get(".spinner", { timeout: 15000 }).should("be.visible");
    cy.get(".modal-title").contains("Automatic Layout").should("be.visible");
    cy.get("[data-field='yes-button']").click();
    cy.get(".spinner", { timeout: 15000 }).should("not.exist");
    cy.get("[data-testid='loading-screen-div']", { timeout: 60000 }).should("not.exist");
  });
});
Cypress.Commands.add("ouia", { prevSubject: "optional" }, function (subject, locator, options) {
  if (options === void 0) {
    options = {};
  }
  var selector = "[data-ouia-component-id='".concat(locator.ouiaId, "']");
  if (locator.ouiaType !== undefined && locator.ouiaType !== "") {
    selector = "[data-ouia-component-type='".concat(locator.ouiaType, "']") + selector;
  }
  if (subject) {
    cy.wrap(subject, options).find(selector, options);
  } else {
    cy.get(selector, options);
  }
});
//# sourceMappingURL=commands.js.map
