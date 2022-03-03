"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var dist_1 = require("@kie-tools-core/guided-tour/dist");
var api_1 = require("@kie-tools-core/guided-tour/dist/api");
var ReactDOM = require("react-dom");
var components_1 = require("@kie-tools-core/guided-tour/dist/components");
var core_1 = require("@kie-tools-core/guided-tour/dist/core");
describe("KogitoGuidedTour", function () {
  beforeEach(function () {
    return jest.clearAllMocks();
  });
  describe("setup", function () {
    it("renders the dialog when guided tour is enabled", function () {
      mockInstance(core_1.GuidedTourDomUtils, {
        getGuidedTourHTMLElement: function () {
          return document.createElement("div");
        },
      });
      dist_1.KogitoGuidedTour.getInstance().setup();
      expect(ReactDOM.render).toBeCalledWith(
        (0, jsx_runtime_1.jsx)(components_1.GuidedTour, {}, void 0),
        expect.any(HTMLElement),
        expect.any(Function)
      );
    });
  });
  describe("teardown", function () {
    it("removes the dialog when guided tour is enabled", function () {
      var removeGuidedTourHTMLElement = jest.fn();
      mockInstance(core_1.GuidedTourDomUtils, {
        removeGuidedTourHTMLElement: removeGuidedTourHTMLElement,
      });
      dist_1.KogitoGuidedTour.getInstance().teardown();
      expect(removeGuidedTourHTMLElement).toBeCalled();
    });
  });
  describe("start", function () {
    it("triggers the bus", function () {
      var startTutorial = jest.fn();
      var tutorialLabel = "Tutorial 1";
      mockInstance(core_1.GuidedTourEventBus, { startTutorial: startTutorial });
      dist_1.KogitoGuidedTour.getInstance().start(tutorialLabel);
      expect(startTutorial).toBeCalledWith(tutorialLabel);
    });
  });
  describe("registerTutorial", function () {
    it("registers a tutorial", function () {
      var guidedTour = dist_1.KogitoGuidedTour.getInstance();
      var tutorial1 = new api_1.Tutorial("Tutorial 1", []);
      var tutorial2 = new api_1.Tutorial("Tutorial 2", []);
      guidedTour.registerTutorial(tutorial1);
      guidedTour.registerTutorial(tutorial2);
      expect(guidedTour.getRegisteredTutorials()).toEqual([tutorial2, tutorial1]);
    });
  });
  describe("onUserInteraction", function () {
    it("triggers the bus", function () {
      var onUserInteraction = jest.fn();
      var userInteraction = new api_1.UserInteraction("CLICK", "Node");
      mockInstance(core_1.GuidedTourEventBus, { onUserInteraction: onUserInteraction });
      dist_1.KogitoGuidedTour.getInstance().onUserInteraction(userInteraction);
      expect(onUserInteraction).toBeCalledWith(userInteraction);
    });
  });
  describe("onPositionReceived", function () {
    it("triggers the bus", function () {
      var onPositionReceived = jest.fn();
      var rect = { bottom: 1, height: 1, left: 1, right: 1, top: 1, width: 1, x: 1, y: 1 };
      var parent = { bottom: 2, height: 2, left: 2, right: 2, top: 2, width: 2, x: 2, y: 2 };
      mockInstance(core_1.GuidedTourEventBus, { onPositionReceived: onPositionReceived });
      dist_1.KogitoGuidedTour.getInstance().onPositionReceived(rect, parent);
      expect(onPositionReceived).toBeCalledWith({
        bottom: 1,
        height: 1,
        left: 3,
        right: 1,
        top: 3,
        width: 1,
        x: 1,
        y: 1,
      });
    });
  });
  describe("positionProvider", function () {
    it("registers position provider", function () {
      var guidedTour = dist_1.KogitoGuidedTour.getInstance();
      var positionProvider = jest.fn();
      var selector = "Node";
      guidedTour.registerPositionProvider(positionProvider);
      guidedTour.triggerPositionProvider(selector);
      expect(positionProvider).toBeCalledWith(selector);
    });
  });
});
jest.mock("@kie-tools-core/guided-tour/dist/components");
jest.mock("@kie-tools-core/guided-tour/dist/core");
jest.mock("react-dom", function () {
  return {
    render: jest.fn(),
  };
});
function mockInstance(obj, methods) {
  var methodNames = Object.keys(methods);
  methodNames.forEach(function (methodName) {
    var methodImpl = methods[methodName];
    obj.prototype[methodName].mockImplementation(methodImpl);
  });
}
//# sourceMappingURL=index.test.js.map
