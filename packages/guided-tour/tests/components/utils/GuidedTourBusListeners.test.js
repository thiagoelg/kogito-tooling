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
var test_utils_1 = require("react-dom/test-utils");
var utils_1 = require("@kie-tools-core/guided-tour/dist/components/utils");
testGuidedTourListener("useStartTutorialListener", "GuidedTour.startTutorial", utils_1.useStartTutorialListener);
testGuidedTourListener("useUserInteractionListener", "GuidedTour.userInteraction", utils_1.useUserInteractionListener);
testGuidedTourListener("usePositionListener", "GuidedTour.newPosition", utils_1.usePositionListener);
var addedListeners = {};
var removedListeners = {};
var realAddEventListener = document.addEventListener;
var realRemoveEventListener = document.removeEventListener;
var mockAddEventListener = jest.fn(function (event, fn) {
  return (addedListeners[event] = fn);
});
var mockRemoveEventListener = jest.fn(function (event, fn) {
  return (removedListeners[event] = fn);
});
var listener = function (_) {
  return undefined;
};
function testGuidedTourListener(methodName, eventName, guidedTourlistener) {
  describe(methodName, function () {
    beforeAll(function () {
      document.addEventListener = mockAddEventListener;
      document.removeEventListener = mockRemoveEventListener;
    });
    afterAll(function () {
      document.addEventListener = realAddEventListener;
      document.removeEventListener = realRemoveEventListener;
    });
    it("properly adds the event listener", function () {
      (0, test_utils_1.act)(function () {
        return guidedTourlistener(listener);
      });
      expect(addedListeners[eventName]).not.toBeUndefined();
    });
    it("properly removes the event listener", function () {
      (0, test_utils_1.act)(function () {
        return guidedTourlistener(listener);
      });
      expect(removedListeners[eventName]).not.toBeUndefined();
    });
  });
}
jest.mock("react", function () {
  var ActualReact = jest.requireActual("react");
  return __assign(__assign({}, ActualReact), {
    useLayoutEffect: function (fn) {
      return fn()();
    },
  });
});
//# sourceMappingURL=GuidedTourBusListeners.test.js.map
