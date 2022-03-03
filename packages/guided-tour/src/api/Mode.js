"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubTutorialMode = exports.DemoMode = exports.AutoMode = exports.BlockMode = void 0;
var BlockMode = (function () {
  function BlockMode(userInteraction, allowedSelectors) {
    this.userInteraction = userInteraction;
    this.allowedSelectors = allowedSelectors;
  }
  return BlockMode;
})();
exports.BlockMode = BlockMode;
var AutoMode = (function () {
  function AutoMode(delay) {
    this.delay = delay;
  }
  return AutoMode;
})();
exports.AutoMode = AutoMode;
var DemoMode = (function () {
  function DemoMode() {}
  return DemoMode;
})();
exports.DemoMode = DemoMode;
var SubTutorialMode = (function () {
  function SubTutorialMode(label) {
    this.label = label;
  }
  return SubTutorialMode;
})();
exports.SubTutorialMode = SubTutorialMode;
//# sourceMappingURL=Mode.js.map
