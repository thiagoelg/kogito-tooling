"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGuidedTourPositionProvider = void 0;
var react_1 = require("react");
var __1 = require("..");
function useGuidedTourPositionProvider(envelopeApi, iframeRef) {
  (0, react_1.useEffect)(
    function () {
      __1.KogitoGuidedTour.getInstance().registerPositionProvider(function (selector) {
        return envelopeApi.requests
          .kogitoGuidedTour_guidedTourElementPositionRequest(selector)
          .then(function (position) {
            var _a;
            var parentRect = (_a = iframeRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            __1.KogitoGuidedTour.getInstance().onPositionReceived(position, parentRect);
          });
      });
    },
    [envelopeApi]
  );
}
exports.useGuidedTourPositionProvider = useGuidedTourPositionProvider;
//# sourceMappingURL=Hooks.js.map
