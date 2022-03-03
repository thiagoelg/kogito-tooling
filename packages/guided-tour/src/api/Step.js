"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NONE = exports.Step = void 0;
var _1 = require(".");
var Step = (function () {
  function Step(mode, content, selector, highlightEnabled, navigatorEnabled, position, negativeReinforcementMessage) {
    this.mode = mode;
    this.content = content;
    this.selector = selector;
    this.highlightEnabled = highlightEnabled;
    this.navigatorEnabled = navigatorEnabled;
    this.position = position;
    this.negativeReinforcementMessage = negativeReinforcementMessage;
  }
  return Step;
})();
exports.Step = Step;
exports.NONE = {
  mode: new _1.DemoMode(),
};
//# sourceMappingURL=Step.js.map
