"use strict";
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.KogitoGuidedTour = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ReactDOM = require("react-dom");
var components_1 = require("./components");
var core_1 = require("./core");
var KogitoGuidedTour = (function () {
  function KogitoGuidedTour() {
    this.domUtils = new core_1.GuidedTourDomUtils();
    this.eventBus = new core_1.GuidedTourEventBus();
    this.registeredTutorials = [];
    this.onTearDown = function () {};
  }
  KogitoGuidedTour.prototype.setup = function (onTearDown) {
    var _this = this;
    if (onTearDown === void 0) {
      onTearDown = function () {};
    }
    this.onTearDown = onTearDown;
    ReactDOM.render(
      (0, jsx_runtime_1.jsx)(components_1.GuidedTour, {}, void 0),
      this.domUtils.getGuidedTourHTMLElement(),
      function () {
        _this.eventBus.enableBus();
      }
    );
  };
  KogitoGuidedTour.prototype.teardown = function () {
    this.onTearDown();
    this.domUtils.removeGuidedTourHTMLElement();
  };
  KogitoGuidedTour.prototype.start = function (tutorialLabel) {
    this.eventBus.startTutorial(tutorialLabel);
  };
  KogitoGuidedTour.prototype.registerTutorial = function (tutorial) {
    this.registeredTutorials = __spreadArray([tutorial], __read(this.registeredTutorials), false);
  };
  KogitoGuidedTour.prototype.getRegisteredTutorials = function () {
    return this.registeredTutorials;
  };
  KogitoGuidedTour.prototype.onUserInteraction = function (userInteraction) {
    this.eventBus.onUserInteraction(userInteraction);
  };
  KogitoGuidedTour.prototype.onPositionReceived = function (rect, parentRect) {
    if (parentRect) {
      rect.left += parentRect.left;
      rect.top += parentRect.y;
    }
    this.eventBus.onPositionReceived(rect);
  };
  KogitoGuidedTour.prototype.triggerPositionProvider = function (selector) {
    this.positionProvider(selector);
  };
  KogitoGuidedTour.prototype.registerPositionProvider = function (positionProvider) {
    this.positionProvider = positionProvider;
  };
  KogitoGuidedTour.getInstance = function () {
    if (!this.instance) {
      this.instance = new KogitoGuidedTour();
    }
    return this.instance;
  };
  return KogitoGuidedTour;
})();
exports.KogitoGuidedTour = KogitoGuidedTour;
//# sourceMappingURL=index.js.map
