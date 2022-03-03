"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GwtAppFormerApi = exports.getGuidedTourElementPosition = void 0;
var getGuidedTourElementPosition = function (selector) {
  return window.JsInterop__Envelope__GuidedTour__GuidedTourCustomSelectorPositionProvider.getInstance().getPosition(
    selector
  );
};
exports.getGuidedTourElementPosition = getGuidedTourElementPosition;
var GwtAppFormerApi = (function () {
  function GwtAppFormerApi() {}
  GwtAppFormerApi.prototype.onFinishedLoading = function (callback) {
    window.appFormerGwtFinishedLoading = callback;
  };
  GwtAppFormerApi.prototype.getEditor = function (editorId) {
    var gwtEditor = window.gwtEditorBeans.get(editorId);
    if (!gwtEditor) {
      throw new Error("GwtEditor with id '".concat(editorId, "' was not found"));
    }
    return gwtEditor.get();
  };
  return GwtAppFormerApi;
})();
exports.GwtAppFormerApi = GwtAppFormerApi;
//# sourceMappingURL=GwtAppFormerApi.js.map
