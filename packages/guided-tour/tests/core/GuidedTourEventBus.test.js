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
var core_1 = require("@kie-tools-core/guided-tour/dist/core");
var test_utils_1 = require("react-dom/test-utils");
describe("GuidedTourEventBus", function () {
  beforeEach(function () {
    dispatchedEvents = [];
    document.dispatchEvent = mockedDispatchEvent;
  });
  afterEach(function () {
    document.dispatchEvent = realDispatchEvent;
  });
  describe("startTutorial", function () {
    it("dispatches events when bus is enabled", function () {
      var eventBus = new core_1.GuidedTourEventBus();
      (0, test_utils_1.act)(function () {
        eventBus.startTutorial("Tutorial 1");
        eventBus.startTutorial("Tutorial 2");
        eventBus.enableBus();
      });
      expect(dispatchedEvents.length).toBe(2);
      expect(dispatchedEvents[0].detail).toBe("Tutorial 1");
      expect(dispatchedEvents[1].detail).toBe("Tutorial 2");
    });
    it("does not dispatch any event when bus is not enabled", function () {
      var eventBus = new core_1.GuidedTourEventBus();
      (0, test_utils_1.act)(function () {
        eventBus.startTutorial("Tutorial 1");
        eventBus.startTutorial("Tutorial 2");
      });
      expect(dispatchedEvents.length).toBe(0);
    });
  });
  describe("onPositionReceived", function () {
    var rect1 = { bottom: 1, height: 1, left: 1, right: 1, top: 1, width: 1, x: 1, y: 1 };
    var rect2 = { bottom: 2, height: 2, left: 2, right: 2, top: 2, width: 2, x: 2, y: 2 };
    var rect3 = { bottom: 3, height: 3, left: 3, right: 3, top: 3, width: 3, x: 3, y: 3 };
    it("dispatches events when bus is enabled", function () {
      var eventBus = new core_1.GuidedTourEventBus();
      (0, test_utils_1.act)(function () {
        eventBus.onPositionReceived(rect1);
        eventBus.onPositionReceived(rect2);
        eventBus.onPositionReceived(rect3);
        eventBus.enableBus();
      });
      expect(dispatchedEvents.length).toBe(3);
      expect(dispatchedEvents[0].detail).toBe(rect1);
      expect(dispatchedEvents[1].detail).toBe(rect2);
      expect(dispatchedEvents[2].detail).toBe(rect3);
    });
    it("does not dispatch any event when bus is not enabled", function () {
      var eventBus = new core_1.GuidedTourEventBus();
      (0, test_utils_1.act)(function () {
        eventBus.onPositionReceived(rect1);
        eventBus.onPositionReceived(rect2);
        eventBus.onPositionReceived(rect3);
      });
      expect(dispatchedEvents.length).toBe(0);
    });
  });
  describe("onUserInteraction", function () {
    var userInteraction1 = { action: "CREATED", target: "Node1" };
    var userInteraction2 = { action: "UPDATED", target: "Node2" };
    var userInteraction3 = { action: "REMOVED", target: "Node3" };
    var userInteraction4 = { action: "CLICKED", target: "Node4" };
    it("dispatches events when bus is enabled", function () {
      var eventBus = new core_1.GuidedTourEventBus();
      (0, test_utils_1.act)(function () {
        eventBus.onUserInteraction(userInteraction1);
        eventBus.onUserInteraction(userInteraction2);
        eventBus.onUserInteraction(userInteraction3);
        eventBus.onUserInteraction(userInteraction4);
        eventBus.enableBus();
      });
      expect(dispatchedEvents.length).toBe(4);
      expect(dispatchedEvents[0].detail).toBe(userInteraction1);
      expect(dispatchedEvents[1].detail).toBe(userInteraction2);
      expect(dispatchedEvents[2].detail).toBe(userInteraction3);
      expect(dispatchedEvents[3].detail).toBe(userInteraction4);
    });
    it("does not dispatch any event when bus is not enabled", function () {
      var eventBus = new core_1.GuidedTourEventBus();
      (0, test_utils_1.act)(function () {
        eventBus.onUserInteraction(userInteraction1);
        eventBus.onUserInteraction(userInteraction2);
        eventBus.onUserInteraction(userInteraction3);
        eventBus.onUserInteraction(userInteraction4);
      });
      expect(dispatchedEvents.length).toBe(0);
    });
  });
});
var dispatchedEvents = [];
var realDispatchEvent = document.dispatchEvent;
var mockedDispatchEvent = jest.fn(function (event) {
  dispatchedEvents = __spreadArray(__spreadArray([], __read(dispatchedEvents), false), [event], false);
  return true;
});
//# sourceMappingURL=GuidedTourEventBus.test.js.map
