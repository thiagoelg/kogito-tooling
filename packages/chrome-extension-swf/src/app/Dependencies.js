"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dependencies = void 0;
var Dependencies = (function () {
  function Dependencies() {
    this.createServerlessWorkflow = {
      card: function () {
        return document.querySelector(".co-catalog");
      },
    };
    this.applicationServices = {
      menu: function () {
        return document.querySelector(".pf-c-nav__list");
      },
      main: function () {
        return document.querySelector(".ins-c-render");
      },
      page: function () {
        return document.querySelector(".applicationServices");
      },
    };
    this.deploymentViewer = {
      buildOverview: function () {
        return document.querySelector(".build-overview");
      },
      resourceName: function () {
        return document.querySelector(".co-resource-item__resource-name");
      },
    };
    this.all = {
      body: function () {
        return document.body;
      },
    };
  }
  return Dependencies;
})();
exports.Dependencies = Dependencies;
//# sourceMappingURL=Dependencies.js.map
