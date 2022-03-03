"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var SingleEditorApp_1 = require("@kie-tools-core/chrome-extension/dist/app/components/single/SingleEditorApp");
var testing_utils_1 = require("../../../testing_utils");
var utils_1 = require("@kie-tools-core/chrome-extension/dist/app/utils");
beforeAll(function () {
  chrome.extension = {
    getURL: jest.fn(function (path) {
      return "chrome-testing://".concat(path);
    }),
  };
});
beforeEach(function () {
  (0, utils_1.removeAllChildren)(document.body);
});
var testFileInfo = {
  repo: "test-repo",
  org: "test-org",
  path: "test/path/to/file.txt",
  gitRef: "test-branch",
};
function newDivOnBody() {
  var div = document.createElement("div");
  document.body.appendChild(div);
  return div;
}
describe("SingleEditorApp", function () {
  test("readonly", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        (0,
        react_1.render)((0, testing_utils_1.usingTestingChromeExtensionI18nContext)((0, testing_utils_1.usingTestingGlobalContext)((0, testing_utils_1.usingTestingGitHubContext)((0, jsx_runtime_1.jsx)(SingleEditorApp_1.SingleEditorApp, { openFileExtension: "txt", readonly: false, getFileName: jest.fn(), getFileContents: jest.fn(), toolbarContainer: newDivOnBody(), iframeContainer: newDivOnBody(), githubTextEditorToReplace: newDivOnBody(), fileInfo: testFileInfo }, void 0)).wrapper).wrapper).wrapper);
        expect(document.body).toMatchSnapshot();
        return [2];
      });
    });
  });
  test("not readonly", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        (0,
        react_1.render)((0, testing_utils_1.usingTestingChromeExtensionI18nContext)((0, testing_utils_1.usingTestingGlobalContext)((0, testing_utils_1.usingTestingGitHubContext)((0, jsx_runtime_1.jsx)(SingleEditorApp_1.SingleEditorApp, { openFileExtension: "txt", readonly: true, getFileName: jest.fn(), getFileContents: jest.fn(), toolbarContainer: newDivOnBody(), iframeContainer: newDivOnBody(), githubTextEditorToReplace: newDivOnBody(), fileInfo: testFileInfo }, void 0)).wrapper).wrapper).wrapper);
        expect(document.body).toMatchSnapshot();
        return [2];
      });
    });
  });
  test("go fullscreen", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        (0,
        react_1.render)((0, testing_utils_1.usingTestingChromeExtensionI18nContext)((0, testing_utils_1.usingTestingGlobalContext)((0, testing_utils_1.usingTestingGitHubContext)((0, jsx_runtime_1.jsx)(SingleEditorApp_1.SingleEditorApp, { openFileExtension: "txt", readonly: false, getFileName: jest.fn(), getFileContents: jest.fn(), toolbarContainer: newDivOnBody(), iframeContainer: newDivOnBody(), githubTextEditorToReplace: newDivOnBody(), fileInfo: testFileInfo }, void 0)).wrapper).wrapper).wrapper);
        react_1.fireEvent.click(react_1.screen.getByTestId("go-fullscreen-button"));
        expect(document.body).toMatchSnapshot();
        return [2];
      });
    });
  });
  test("go fullscreen and back", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        (0,
        react_1.render)((0, testing_utils_1.usingTestingChromeExtensionI18nContext)((0, testing_utils_1.usingTestingGlobalContext)((0, testing_utils_1.usingTestingGitHubContext)((0, jsx_runtime_1.jsx)(SingleEditorApp_1.SingleEditorApp, { openFileExtension: "txt", readonly: false, getFileName: jest.fn(), getFileContents: jest.fn(), toolbarContainer: newDivOnBody(), iframeContainer: newDivOnBody(), githubTextEditorToReplace: newDivOnBody(), fileInfo: testFileInfo }, void 0)).wrapper).wrapper).wrapper);
        react_1.fireEvent.click(react_1.screen.getByTestId("go-fullscreen-button"));
        react_1.fireEvent.click(react_1.screen.getByTestId("exit-fullscreen-button"));
        expect(document.body).toMatchSnapshot();
        return [2];
      });
    });
  });
  test("open external editor", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var globalContext;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            (0, react_1.render)(
              (0, testing_utils_1.usingTestingChromeExtensionI18nContext)(
                (globalContext = (0, testing_utils_1.usingTestingGlobalContext)(
                  (0, testing_utils_1.usingTestingGitHubContext)(
                    (0, jsx_runtime_1.jsx)(
                      SingleEditorApp_1.SingleEditorApp,
                      {
                        openFileExtension: "txt",
                        readonly: false,
                        getFileName: jest.fn(function () {
                          return "file.txt";
                        }),
                        getFileContents: jest.fn(function () {
                          return Promise.resolve("file contents");
                        }),
                        toolbarContainer: newDivOnBody(),
                        iframeContainer: newDivOnBody(),
                        githubTextEditorToReplace: newDivOnBody(),
                        fileInfo: testFileInfo,
                      },
                      void 0
                    )
                  ).wrapper
                )).wrapper
              ).wrapper
            );
            react_1.fireEvent.click(react_1.screen.getByTestId("open-ext-editor-button"));
            return [
              4,
              (0, react_1.waitFor)(function () {
                var _a;
                return expect(
                  (_a = globalContext.ctx.externalEditorManager) === null || _a === void 0 ? void 0 : _a.open
                ).toHaveBeenCalled();
              }),
            ];
          case 1:
            _a.sent();
            expect(document.body).toMatchSnapshot();
            return [2];
        }
      });
    });
  });
  test("open external editor and wait for come back", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var globalContext;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            (0, react_1.render)(
              (0, testing_utils_1.usingTestingChromeExtensionI18nContext)(
                (globalContext = (0, testing_utils_1.usingTestingGlobalContext)(
                  (0, testing_utils_1.usingTestingGitHubContext)(
                    (0, jsx_runtime_1.jsx)(
                      SingleEditorApp_1.SingleEditorApp,
                      {
                        openFileExtension: "txt",
                        readonly: false,
                        getFileName: jest.fn(function () {
                          return "file.txt";
                        }),
                        getFileContents: jest.fn(function () {
                          return Promise.resolve("file contents 1");
                        }),
                        toolbarContainer: newDivOnBody(),
                        iframeContainer: newDivOnBody(),
                        githubTextEditorToReplace: newDivOnBody(),
                        fileInfo: testFileInfo,
                      },
                      void 0
                    )
                  ).wrapper
                )).wrapper
              ).wrapper
            );
            react_1.fireEvent.click(react_1.screen.getByTestId("open-ext-editor-button"));
            return [
              4,
              (0, react_1.waitFor)(function () {
                var _a;
                return expect(
                  (_a = globalContext.ctx.externalEditorManager) === null || _a === void 0 ? void 0 : _a.open
                ).toHaveBeenCalled();
              }),
            ];
          case 1:
            _a.sent();
            expect(document.body).toMatchSnapshot();
            return [2];
        }
      });
    });
  });
});
//# sourceMappingURL=SingleEditorApp.test.js.map
