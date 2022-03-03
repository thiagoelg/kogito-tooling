"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("cypress-file-upload");
require("cypress-iframe");
require("./commands");
require("cypress-real-events/support");
Cypress.on("uncaught:exception", function (err, runnable) {
  return false;
});
//# sourceMappingURL=index.js.map
