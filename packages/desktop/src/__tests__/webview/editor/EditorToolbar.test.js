"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var EditorToolbar_1 = require("../../../webview/editor/EditorToolbar");
var channel_1 = require("@kie-tools-core/editor/dist/channel");
var testing_utils_1 = require("../../testing_utils");
var onClose = jest.fn(function () {
  return null;
});
describe("EditorToolbar", function () {
  var stateControl;
  var onSave;
  beforeEach(function () {
    stateControl = new channel_1.StateControl();
    onSave = jest.fn().mockImplementation(function () {
      stateControl.setSavedCommand();
    });
  });
  describe("isDirty indicator", function () {
    test("should show the isDirty indicator when the isEdited is true", function () {
      var isEdited = true;
      var _a = (0, react_1.render)(
          (0, testing_utils_1.usingTestingDesktopI18nContext)(
            (0, testing_utils_1.usingTestingGlobalContext)(
              (0, jsx_runtime_1.jsx)(
                EditorToolbar_1.EditorToolbar,
                { onClose: onClose, onSave: onSave, isEdited: isEdited },
                void 0
              )
            ).wrapper
          ).wrapper
        ),
        queryByTestId = _a.queryByTestId,
        getByTestId = _a.getByTestId;
      expect(queryByTestId("is-dirty-indicator")).toBeVisible();
      expect(getByTestId("toolbar-title")).toMatchSnapshot();
    });
    test("shouldn't show the isDirty indicator when the isEdited is false", function () {
      var isEdited = false;
      var _a = (0, react_1.render)(
          (0, testing_utils_1.usingTestingDesktopI18nContext)(
            (0, testing_utils_1.usingTestingGlobalContext)(
              (0, jsx_runtime_1.jsx)(
                EditorToolbar_1.EditorToolbar,
                { onClose: onClose, onSave: onSave, isEdited: isEdited },
                void 0
              )
            ).wrapper
          ).wrapper
        ),
        queryByTestId = _a.queryByTestId,
        getByTestId = _a.getByTestId;
      expect(queryByTestId("is-dirty-indicator")).toBeNull();
      expect(getByTestId("toolbar-title")).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=EditorToolbar.test.js.map
