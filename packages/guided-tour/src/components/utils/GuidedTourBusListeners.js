"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePositionListener = exports.useUserInteractionListener = exports.useStartTutorialListener = void 0;
var react_1 = require("react");
var useStartTutorialListener = function (onStartTutorial) {
  var type = "GuidedTour.startTutorial";
  useGuidedTourBusEffect(type, function (event) {
    return onStartTutorial(event.detail);
  });
};
exports.useStartTutorialListener = useStartTutorialListener;
var useUserInteractionListener = function (onUserInteraction) {
  var type = "GuidedTour.userInteraction";
  useGuidedTourBusEffect(type, function (event) {
    return onUserInteraction(event.detail);
  });
};
exports.useUserInteractionListener = useUserInteractionListener;
var usePositionListener = function (onPositionReceived) {
  var type = "GuidedTour.newPosition";
  useGuidedTourBusEffect(type, function (event) {
    return onPositionReceived(event.detail);
  });
};
exports.usePositionListener = usePositionListener;
function useGuidedTourBusEffect(eventLabel, consumer) {
  (0, react_1.useLayoutEffect)(createEffect(eventLabel, consumer), []);
}
function createEffect(eventLabel, consumer) {
  return function () {
    function listener(e) {
      consumer(e);
    }
    document.addEventListener(eventLabel, listener);
    return function () {
      document.removeEventListener(eventLabel, listener);
    };
  };
}
//# sourceMappingURL=GuidedTourBusListeners.js.map
