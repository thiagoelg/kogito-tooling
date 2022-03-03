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
var dist_1 = require("@kie-tools-core/guided-tour/dist");
var api_1 = require("@kie-tools-core/guided-tour/dist/api");
describe("useSelectorHandler", function () {
  beforeEach(function () {
    document.querySelector = mockQuerySelector;
  });
  afterEach(function () {
    document.querySelector = realQuerySelector;
  });
  it("triggers a request position provider when step has a custom selector", function () {
    var selector = "CUSTOM:::Decision-1";
    ctx.currentTutorial.steps[0].selector = selector;
    (0, test_utils_1.act)(function () {
      (0, utils_1.useSelectorHandler)();
    });
    expect(triggerPositionProvider).toBeCalledWith(selector);
  });
  it("sets the current reference element position when step has a regular query selector", function () {
    ctx.currentTutorial.steps[0].selector = "div#my-element";
    (0, test_utils_1.act)(function () {
      (0, utils_1.useSelectorHandler)();
    });
    expect(ctx.currentRefElementPosition).toBe(elementPosition);
  });
  it("sets the default position when step does not have valid query selector", function () {
    ctx.currentTutorial.steps[0].selector = "2077";
    (0, test_utils_1.act)(function () {
      (0, utils_1.useSelectorHandler)();
    });
    expect(ctx.currentRefElementPosition).toBe(api_1.DEFAULT_RECT);
  });
});
jest.mock("react", function () {
  var ActualReact = jest.requireActual("react");
  return __assign(__assign({}, ActualReact), {
    useContext: function () {
      return ctx;
    },
    useEffect: function (fn) {
      return fn();
    },
    useMemo: function (fn, _deps) {
      return fn();
    },
  });
});
var triggerPositionProvider = jest.fn();
var guidedTour = dist_1.KogitoGuidedTour.getInstance();
guidedTour.triggerPositionProvider = triggerPositionProvider;
var ctx = {
  currentStep: 0,
  currentRefElementPosition: api_1.DEFAULT_RECT,
  currentTutorial: {
    steps: [
      {
        selector: "",
      },
    ],
  },
  setCurrentRefElementPosition: function (rect) {
    return (ctx.currentRefElementPosition = rect);
  },
};
var elementPosition = {
  bottom: 110,
  height: 100,
  left: 10,
  right: 110,
  top: 10,
  width: 100,
  x: 10,
  y: 10,
};
var realQuerySelector = document.querySelector;
var mockQuerySelector = function (selector) {
  return {
    getBoundingClientRect: function () {
      return selector === "div#my-element" ? elementPosition : api_1.DEFAULT_RECT;
    },
  };
};
//# sourceMappingURL=GuidedTourSelectorHandler.test.js.map
