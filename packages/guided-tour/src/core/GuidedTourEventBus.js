"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuidedTourEventBus = void 0;
var GuidedTourEventBus = (function () {
  function GuidedTourEventBus() {
    this.isEnabled = false;
    this.queuedEvents = [];
  }
  GuidedTourEventBus.prototype.enableBus = function () {
    this.isEnabled = true;
    this.triggerQueuedEvents();
  };
  GuidedTourEventBus.prototype.onUserInteraction = function (userInteraction) {
    var event = this.createEvent("GuidedTour.userInteraction", userInteraction);
    this.dispatchEvent(event);
  };
  GuidedTourEventBus.prototype.onPositionReceived = function (rect) {
    var event = this.createEvent("GuidedTour.newPosition", rect);
    this.dispatchEvent(event);
  };
  GuidedTourEventBus.prototype.startTutorial = function (tutorialLabel) {
    var event = this.createEvent("GuidedTour.startTutorial", tutorialLabel);
    this.dispatchEvent(event);
  };
  GuidedTourEventBus.prototype.triggerQueuedEvents = function () {
    while (this.queuedEvents.length > 0 && this.isBusEnabled()) {
      this.dispatchEvent(this.queuedEvents.shift());
    }
  };
  GuidedTourEventBus.prototype.createEvent = function (eventLabel, detail) {
    return new CustomEvent(eventLabel, { detail: detail });
  };
  GuidedTourEventBus.prototype.dispatchEvent = function (event) {
    if (this.isBusEnabled()) {
      document.dispatchEvent(event);
    } else {
      this.queuedEvents.push(event);
    }
  };
  GuidedTourEventBus.prototype.isBusEnabled = function () {
    return this.isEnabled;
  };
  return GuidedTourEventBus;
})();
exports.GuidedTourEventBus = GuidedTourEventBus;
//# sourceMappingURL=GuidedTourEventBus.js.map
