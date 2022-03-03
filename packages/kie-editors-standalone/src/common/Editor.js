"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEditor = void 0;
var createEditor = function (envelopeApi, stateControl, listener, iframe) {
  return {
    undo: function () {
      stateControl.undo();
      return Promise.resolve(envelopeApi.notifications.kogitoEditor_editorUndo.send());
    },
    redo: function () {
      stateControl.redo();
      return Promise.resolve(envelopeApi.notifications.kogitoEditor_editorRedo.send());
    },
    close: function () {
      window.removeEventListener("message", listener);
      iframe.remove();
    },
    getElementPosition: function (selector) {
      return envelopeApi.requests.kogitoGuidedTour_guidedTourElementPositionRequest(selector);
    },
    getContent: function () {
      return envelopeApi.requests.kogitoEditor_contentRequest().then(function (c) {
        return c.content;
      });
    },
    getPreview: function () {
      return envelopeApi.requests.kogitoEditor_previewRequest();
    },
    setContent: function (path, content) {
      return envelopeApi.requests.kogitoEditor_contentChanged({ path: path, content: content });
    },
    subscribeToContentChanges: function (callback) {
      return stateControl.subscribe(callback);
    },
    unsubscribeToContentChanges: function (callback) {
      return stateControl.unsubscribe(callback);
    },
    markAsSaved: function () {
      return stateControl.setSavedCommand();
    },
    validate: function () {
      return envelopeApi.requests.kogitoEditor_validate();
    },
    envelopeApi: envelopeApi,
  };
};
exports.createEditor = createEditor;
//# sourceMappingURL=Editor.js.map
