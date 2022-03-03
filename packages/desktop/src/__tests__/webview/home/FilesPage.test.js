"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var electron = require("electron");
var react_1 = require("@testing-library/react");
var FilesPage_1 = require("../../../webview/home/FilesPage");
var testing_utils_1 = require("../../testing_utils");
var test_utils_1 = require("react-dom/test-utils");
beforeEach(function () {
  document.execCommand = function () {
    return true;
  };
});
describe("FilesPage", function () {
  test("empty page", function () {
    var openFile = jest.fn();
    var openFileByPath = jest.fn();
    var component = (0, react_1.render)(
      (0, testing_utils_1.usingTestingDesktopI18nContext)(
        (0, testing_utils_1.usingTestingGlobalContext)(
          (0, jsx_runtime_1.jsx)(FilesPage_1.FilesPage, { openFile: openFile, openFileByPath: openFileByPath }, void 0)
        ).wrapper
      ).wrapper
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
  test("three recent files listed", function () {
    var openFile = jest.fn();
    var openFileByPath = jest.fn();
    var component = (0, react_1.render)(
      (0, testing_utils_1.usingTestingDesktopI18nContext)(
        (0, testing_utils_1.usingTestingGlobalContext)(
          (0, jsx_runtime_1.jsx)(FilesPage_1.FilesPage, { openFile: openFile, openFileByPath: openFileByPath }, void 0)
        ).wrapper
      ).wrapper
    );
    (0, test_utils_1.act)(function () {
      return electron.ipcRenderer.send("returnLastOpenedFiles", {
        lastOpenedFiles: [
          { filePath: "/a/b.dmn", preview: "" },
          { filePath: "/b/a.dmn", preview: "" },
          { filePath: "/c/c.dmn", preview: "" },
        ],
      });
    });
    expect(component.asFragment()).toMatchSnapshot();
  });
  test("three recent files in different directories listed ordered alphabetically", function () {
    var openFile = jest.fn();
    var openFileByPath = jest.fn();
    var component = (0, react_1.render)(
      (0, testing_utils_1.usingTestingDesktopI18nContext)(
        (0, testing_utils_1.usingTestingGlobalContext)(
          (0, jsx_runtime_1.jsx)(FilesPage_1.FilesPage, { openFile: openFile, openFileByPath: openFileByPath }, void 0)
        ).wrapper
      ).wrapper
    );
    (0, test_utils_1.act)(function () {
      return electron.ipcRenderer.send("returnLastOpenedFiles", {
        lastOpenedFiles: [
          { filePath: "/a/b.dmn", preview: "" },
          { filePath: "/b/a.dmn", preview: "" },
          { filePath: "/c/c.dmn", preview: "" },
        ],
      });
    });
    react_1.fireEvent.click(component.getByTestId("orderAlphabeticallyButton"));
    expect(component.asFragment()).toMatchSnapshot();
  });
  test("three recent files in the same directory listed ordered alphabetically", function () {
    var openFile = jest.fn();
    var openFileByPath = jest.fn();
    var component = (0, react_1.render)(
      (0, testing_utils_1.usingTestingDesktopI18nContext)(
        (0, testing_utils_1.usingTestingGlobalContext)(
          (0, jsx_runtime_1.jsx)(FilesPage_1.FilesPage, { openFile: openFile, openFileByPath: openFileByPath }, void 0)
        ).wrapper
      ).wrapper
    );
    (0, test_utils_1.act)(function () {
      return electron.ipcRenderer.send("returnLastOpenedFiles", {
        lastOpenedFiles: [
          { filePath: "/a/a.dmn", preview: "" },
          { filePath: "/a/b.dmn", preview: "" },
          { filePath: "/a/b.bpmn", preview: "" },
          { filePath: "/a/c.bpmn", preview: "" },
        ],
      });
    });
    react_1.fireEvent.click(component.getByTestId("orderAlphabeticallyButton"));
    expect(component.asFragment()).toMatchSnapshot();
  });
  test("three recent files listed ordered by access time", function () {
    var openFile = jest.fn();
    var openFileByPath = jest.fn();
    var component = (0, react_1.render)(
      (0, testing_utils_1.usingTestingDesktopI18nContext)(
        (0, testing_utils_1.usingTestingGlobalContext)(
          (0, jsx_runtime_1.jsx)(FilesPage_1.FilesPage, { openFile: openFile, openFileByPath: openFileByPath }, void 0)
        ).wrapper
      ).wrapper
    );
    (0, test_utils_1.act)(function () {
      return electron.ipcRenderer.send("returnLastOpenedFiles", {
        lastOpenedFiles: [
          { filePath: "/a/b.dmn", preview: "" },
          { filePath: "/b/a.dmn", preview: "" },
          { filePath: "/c/c.dmn", preview: "" },
        ],
      });
    });
    react_1.fireEvent.click(component.getByTestId("orderAlphabeticallyButton"));
    react_1.fireEvent.click(component.getByTestId("orderAlphabeticallyButton"));
    expect(component.asFragment()).toMatchSnapshot();
  });
});
//# sourceMappingURL=FilesPage.test.js.map
