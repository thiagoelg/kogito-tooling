"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GwtAppFormerApi_1 = require("@kie-tools/kie-bc-editors/dist/common/GwtAppFormerApi");
var DummyEditor_1 = require("./DummyEditor");
var DummyGwtEditor = (function () {
  function DummyGwtEditor(wrappedEditor) {
    this.wrappedEditor = wrappedEditor;
  }
  DummyGwtEditor.prototype.get = function () {
    return this.wrappedEditor;
  };
  return DummyGwtEditor;
})();
var dummyEditor = new DummyEditor_1.DummyEditor();
var dummyGwtEditor = new DummyGwtEditor(dummyEditor);
var editorId = "dummy editor";
var appFormerGwtApi = new GwtAppFormerApi_1.GwtAppFormerApi();
window.gwtEditorBeans = new Map();
window.gwtEditorBeans.set(editorId, dummyGwtEditor);
describe("AppFormerGwtApi", function () {
  test("get existing editor", function () {
    var possibleEditor = appFormerGwtApi.getEditor(editorId);
    expect(possibleEditor).toBeTruthy();
  });
  test("get non existing editor", function () {
    expect(function () {
      return appFormerGwtApi.getEditor("X");
    }).toThrowError();
  });
});
//# sourceMappingURL=GwtAppFormerApi.test.js.map
