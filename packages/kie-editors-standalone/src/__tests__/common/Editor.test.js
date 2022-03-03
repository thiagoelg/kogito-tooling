"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Editor_1 = require("../../common/Editor");
var channel_1 = require("@kie-tools-core/envelope-bus/dist/channel");
var channel_2 = require("@kie-tools-core/editor/dist/channel");
jest.mock("@kie-tools-core/editor/dist/api", function () {
  return {
    KogitoEditorEnvelopeApi: jest.fn().mockImplementation(),
  };
});
describe("createEditor", function () {
  var envelopeServer = new channel_1.EnvelopeServer(
    {
      postMessage: function (message) {},
    },
    "",
    function (self) {
      return Promise.resolve();
    }
  );
  var stateControl = new channel_2.StateControl();
  test("setContent calls envelope with path and content", function () {
    var editor = (0, Editor_1.createEditor)(
      envelopeServer.envelopeApi,
      stateControl,
      function (message) {},
      document.createElement("iframe")
    );
    var spyOnContentChangedNotification = jest.spyOn(
      envelopeServer.envelopeApi.requests,
      "kogitoEditor_contentChanged"
    );
    editor.setContent("my-path", "my-content");
    expect(spyOnContentChangedNotification).toHaveBeenCalledWith({
      path: "my-path",
      content: "my-content",
    });
  });
});
//# sourceMappingURL=Editor.test.js.map
