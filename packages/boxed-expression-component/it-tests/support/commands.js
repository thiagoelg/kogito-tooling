Cypress.Commands.add("ouiaId", { prevSubject: "optional" }, function (subject, id, options) {
  if (options === void 0) {
    options = {};
  }
  var idSelector = id ? "[data-ouia-component-id='".concat(id, "']") : "";
  var el;
  if (subject) {
    el = cy.wrap(subject, options).find(idSelector, options);
  } else {
    el = cy.get(idSelector, options);
  }
});
Cypress.Commands.add("ouiaType", { prevSubject: "optional" }, function (subject, type, options) {
  if (options === void 0) {
    options = {};
  }
  var typeSelector = type ? "[data-ouia-component-type='".concat(type, "']") : "";
  var el;
  if (subject) {
    el = cy.wrap(subject, options).find(typeSelector, options);
  } else {
    el = cy.get(typeSelector, options);
  }
});
//# sourceMappingURL=commands.js.map
