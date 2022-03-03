"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, "__esModule", { value: true });
require("cypress-file-upload");
require("cypress-iframe");
Cypress.Commands.add("ouiaId", { prevSubject: "optional" }, function (subject, type, id, options) {
  if (options === void 0) {
    options = {};
  }
  var typeSelector = type ? "[data-ouia-component-type='".concat(type, "']") : "";
  var idSelector = id ? "[data-ouia-component-id='".concat(id, "']") : "";
  if (subject) {
    cy.wrap(subject, options).find(typeSelector + idSelector, options);
  } else {
    cy.get(typeSelector + idSelector, options);
  }
});
Cypress.Commands.add("ouiaType", { prevSubject: "optional" }, function (subject, type, options) {
  if (options === void 0) {
    options = {};
  }
  var typeSelector = type ? "[data-ouia-component-type='".concat(type, "']") : "";
  if (subject) {
    cy.wrap(subject, options).find(typeSelector, options);
  } else {
    cy.get(typeSelector, options);
  }
});
Cypress.Commands.add("loadEditors", function (editorIds, options) {
  var opts = __assign({ log: false }, options);
  cy.get("div#root", opts)
    .should("exist")
    .within(opts, function ($root) {
      for (var id in editorIds) {
        cy.ouiaId("editor", editorIds[id], opts).should("exist");
        cy.frameLoaded("div#" + editorIds[id] + " iframe", opts);
      }
      for (var id in editorIds) {
        cy.iframe("div#" + editorIds[id] + " iframe", opts)
          .find("[data-testid='loading-screen-div']", __assign({ timeout: 1000 }, opts))
          .should("be.visible");
      }
      for (var id in editorIds) {
        cy.iframe("div#" + editorIds[id] + " iframe", opts)
          .find(".kie-tools--keyboard-shortcuts-icon", __assign({ timeout: 120000 }, opts))
          .should("be.visible");
      }
    });
  cy.wait(1000);
  Cypress.log({ name: "loadEditor", message: "Wait for editor '".concat(editorIds, "' to load.") });
});
Cypress.Commands.add("editor", function (editorId, options) {
  cy.iframe("div#" + editorId + " iframe", { log: false });
  Cypress.log({ name: "editor", message: "Using editor ".concat(editorId) });
});
Cypress.Commands.add("uploadFile", function (fileName, editorId) {
  var noLogOpts = { log: false };
  cy.ouiaId("file-loader", editorId, noLogOpts).within(noLogOpts, function ($loader) {
    cy.ouiaType("file-upload-form", noLogOpts).within(noLogOpts, function ($form) {
      cy.get("input[type='file']", noLogOpts).attachFile(fileName);
      cy.get("button", noLogOpts).click();
    });
  });
  Cypress.log({
    name: "upload file",
    message: "Uploading file ".concat(fileName, " for editor ").concat(editorId, "."),
  });
});
Cypress.Commands.add("viewFile", function (fileName, editorId, options) {
  var opts = __assign({ log: false }, { options: options });
  cy.ouiaId("file-loader", editorId, opts)
    .ouiaType("file-list", opts)
    .ouiaId("file-list-item", fileName, opts)
    .should("be.visible")
    .ouiaId("file-list-item-button", "view", opts)
    .should("be.visible")
    .click();
  cy.loadEditors([editorId], options);
  Cypress.log({ name: "view file", message: "Viewing file ".concat(fileName, " in editor ").concat(editorId, ".") });
});
//# sourceMappingURL=commands.js.map
