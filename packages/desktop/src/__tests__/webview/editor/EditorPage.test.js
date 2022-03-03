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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var EditorPage_1 = require("../../../webview/editor/EditorPage");
var testing_utils_1 = require("../../testing_utils");
var fileExtension = "";
var onClose = jest.fn(function () {
  return null;
});
var onFilenameChange = jest.fn(function (filePath) {
  return null;
});
function mockFunctions() {
  var original = jest.requireActual("@kie-tools-core/editor/dist/embedded");
  return __assign(__assign({}, original), {
    useDirtyState: jest
      .fn(function () {
        return true;
      })
      .mockImplementationOnce(function () {
        return false;
      }),
  });
}
jest.mock("@kie-tools-core/editor/dist/embedded", function () {
  return mockFunctions();
});
describe("EditorPage", function () {
  describe("Unsaved Alert", function () {
    test("should not appear by default with isDirty equal to false", function () {
      var queryByTestId = (0, react_1.render)(
        (0, testing_utils_1.usingTestingDesktopI18nContext)(
          (0, testing_utils_1.usingTestingGlobalContext)(
            (0, jsx_runtime_1.jsx)(
              EditorPage_1.EditorPage,
              { onFilenameChange: onFilenameChange, onClose: onClose },
              void 0
            )
          ).wrapper
        ).wrapper
      ).queryByTestId;
      expect(queryByTestId("unsaved-alert")).toBeNull();
    });
    test("should not appear by default with isDirty equal to true", function () {
      var queryByTestId = (0, react_1.render)(
        (0, testing_utils_1.usingTestingDesktopI18nContext)(
          (0, testing_utils_1.usingTestingGlobalContext)(
            (0, jsx_runtime_1.jsx)(
              EditorPage_1.EditorPage,
              { onFilenameChange: onFilenameChange, onClose: onClose },
              void 0
            )
          ).wrapper
        ).wrapper
      ).queryByTestId;
      expect(queryByTestId("unsaved-alert")).toBeNull();
    });
    test("should appear when tries to close after an edit with isDirty equal to true", function () {
      var _a = (0, react_1.render)(
          (0, testing_utils_1.usingTestingDesktopI18nContext)(
            (0, testing_utils_1.usingTestingGlobalContext)(
              (0, jsx_runtime_1.jsx)(
                EditorPage_1.EditorPage,
                { onFilenameChange: onFilenameChange, onClose: onClose },
                void 0
              )
            ).wrapper
          ).wrapper
        ),
        getByTestId = _a.getByTestId,
        queryByTestId = _a.queryByTestId;
      react_1.fireEvent.click(getByTestId("close-editor-button"));
      expect(queryByTestId("unsaved-alert")).toBeVisible();
    });
    test("should appear and then close after click on save with isDirty equal to true", function () {
      var _a = (0, react_1.render)(
          (0, testing_utils_1.usingTestingDesktopI18nContext)(
            (0, testing_utils_1.usingTestingGlobalContext)(
              (0, jsx_runtime_1.jsx)(
                EditorPage_1.EditorPage,
                { onFilenameChange: onFilenameChange, onClose: onClose },
                void 0
              )
            ).wrapper
          ).wrapper
        ),
        getByTestId = _a.getByTestId,
        queryByTestId = _a.queryByTestId;
      react_1.fireEvent.click(getByTestId("close-editor-button"));
      react_1.fireEvent.click(getByTestId("unsaved-alert-save-button"));
      expect(queryByTestId("unsaved-alert")).toBeNull();
    });
    test("should appear and then close after click on close with isDirty equal to true", function () {
      var _a = (0, react_1.render)(
          (0, testing_utils_1.usingTestingDesktopI18nContext)(
            (0, testing_utils_1.usingTestingGlobalContext)(
              (0, jsx_runtime_1.jsx)(
                EditorPage_1.EditorPage,
                { onFilenameChange: onFilenameChange, onClose: onClose },
                void 0
              )
            ).wrapper
          ).wrapper
        ),
        getByTestId = _a.getByTestId,
        queryByTestId = _a.queryByTestId;
      react_1.fireEvent.click(getByTestId("close-editor-button"));
      react_1.fireEvent.click(getByTestId("unsaved-alert-close-button"));
      expect(queryByTestId("unsaved-alert")).toBeNull();
    });
    test("should appear and then close after click on close without save with isDirty equal to true", function () {
      var _a = (0, react_1.render)(
          (0, testing_utils_1.usingTestingDesktopI18nContext)(
            (0, testing_utils_1.usingTestingGlobalContext)(
              (0, jsx_runtime_1.jsx)(
                EditorPage_1.EditorPage,
                { onFilenameChange: onFilenameChange, onClose: onClose },
                void 0
              )
            ).wrapper
          ).wrapper
        ),
        getByTestId = _a.getByTestId,
        queryByTestId = _a.queryByTestId;
      react_1.fireEvent.click(getByTestId("close-editor-button"));
      react_1.fireEvent.click(getByTestId("unsaved-alert-close-without-save-button"));
      expect(queryByTestId("unsaved-alert")).toBeNull();
    });
  });
});
//# sourceMappingURL=EditorPage.test.js.map
