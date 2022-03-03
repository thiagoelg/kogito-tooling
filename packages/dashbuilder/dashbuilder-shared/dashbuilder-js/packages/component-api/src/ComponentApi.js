"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentApi = void 0;
var BrowserComponentBus_1 = require("./controller/BrowserComponentBus");
var DashbuilderComponentController_1 = require("./controller/DashbuilderComponentController");
var DashbuilderComponentDispatcher_1 = require("./controller/DashbuilderComponentDispatcher");
var ComponentApi = (function () {
  function ComponentApi() {
    this.bus = new BrowserComponentBus_1.BrowserComponentBus();
    this.controller = new DashbuilderComponentController_1.DashbuilderComponentController(this.bus);
    this.listener = new DashbuilderComponentDispatcher_1.DashbuilderComponentDispatcher(this.bus, this.controller);
    this.listener.init();
  }
  ComponentApi.prototype.getComponentController = function (onInit, onDataSet) {
    if (onInit) {
      this.controller.setOnInit(onInit);
    }
    if (onDataSet) {
      this.controller.setOnDataSet(onDataSet);
    }
    return this.controller;
  };
  ComponentApi.prototype.restart = function () {
    this.destroy();
    this.listener.init();
  };
  ComponentApi.prototype.destroy = function () {
    this.listener.stop();
  };
  return ComponentApi;
})();
exports.ComponentApi = ComponentApi;
//# sourceMappingURL=ComponentApi.js.map
