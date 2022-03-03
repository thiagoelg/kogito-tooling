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
var SingleEditorToolbar_1 = require("@kie-tools-core/chrome-extension/dist/app/components/single/SingleEditorToolbar");
var testing_utils_1 = require("../../../testing_utils");
beforeEach(function () {
  document.execCommand = function () {
    return true;
  };
});
describe("SingleEditorToolbar", function () {
  test("see as diagram", function () {
    var onSeeAsSource = jest.fn();
    var onSeeAsDiagram = jest.fn();
    var component = (0, react_1.render)(
      (0, testing_utils_1.usingTestingChromeExtensionI18nContext)(
        (0, testing_utils_1.usingTestingGlobalContext)(
          (0, testing_utils_1.usingTestingGitHubContext)(
            (0, jsx_runtime_1.jsx)(
              SingleEditorToolbar_1.SingleEditorToolbar,
              {
                readonly: true,
                textMode: true,
                errorOpeningFile: false,
                textModeAvailable: true,
                onFullScreen: undefined,
                onSeeAsSource: onSeeAsSource,
                onSeeAsDiagram: onSeeAsDiagram,
                onOpenInExternalEditor: undefined,
                linkToExternalEditor: "test.com/editor",
              },
              void 0
            )
          ).wrapper
        ).wrapper
      ).wrapper
    );
    expect(component.asFragment()).toMatchSnapshot();
    react_1.fireEvent.click(component.getByTestId("see-as-diagram-button"));
    expect(onSeeAsDiagram).toHaveBeenCalled();
  });
  test("readonly false | textMode true | textModeAvailable true", function () {
    expect(
      (0, react_1.render)(
        (0, testing_utils_1.usingTestingChromeExtensionI18nContext)(
          (0, testing_utils_1.usingTestingGlobalContext)(
            (0, testing_utils_1.usingTestingGitHubContext)(
              (0, jsx_runtime_1.jsx)(
                SingleEditorToolbar_1.SingleEditorToolbar,
                {
                  readonly: false,
                  textMode: true,
                  errorOpeningFile: false,
                  textModeAvailable: true,
                  onFullScreen: undefined,
                  onSeeAsSource: undefined,
                  onSeeAsDiagram: undefined,
                  onOpenInExternalEditor: undefined,
                  linkToExternalEditor: "test.com/editor",
                },
                void 0
              )
            ).wrapper
          ).wrapper
        ).wrapper
      ).asFragment()
    ).toMatchSnapshot();
  });
  test("readonly false | textMode false | textModeAvailable true", function () {
    expect(
      (0, react_1.render)(
        (0, testing_utils_1.usingTestingChromeExtensionI18nContext)(
          (0, testing_utils_1.usingTestingGlobalContext)(
            (0, testing_utils_1.usingTestingGitHubContext)(
              (0, jsx_runtime_1.jsx)(
                SingleEditorToolbar_1.SingleEditorToolbar,
                {
                  readonly: true,
                  textMode: false,
                  errorOpeningFile: false,
                  textModeAvailable: true,
                  onFullScreen: undefined,
                  onSeeAsSource: undefined,
                  onSeeAsDiagram: undefined,
                  onOpenInExternalEditor: undefined,
                  linkToExternalEditor: "test.com/editor",
                },
                void 0
              )
            ).wrapper
          ).wrapper
        ).wrapper
      ).asFragment()
    ).toMatchSnapshot();
  });
  test("see as source", function () {
    var onSeeAsSource = jest.fn();
    var onSeeAsDiagram = jest.fn();
    var component = (0, react_1.render)(
      (0, testing_utils_1.usingTestingChromeExtensionI18nContext)(
        (0, testing_utils_1.usingTestingGlobalContext)(
          (0, testing_utils_1.usingTestingGitHubContext)(
            (0, jsx_runtime_1.jsx)(
              SingleEditorToolbar_1.SingleEditorToolbar,
              {
                readonly: false,
                textMode: false,
                errorOpeningFile: false,
                textModeAvailable: true,
                onFullScreen: undefined,
                onSeeAsSource: onSeeAsSource,
                onSeeAsDiagram: onSeeAsDiagram,
                onOpenInExternalEditor: undefined,
                linkToExternalEditor: "test.com/editor",
              },
              void 0
            )
          ).wrapper
        ).wrapper
      ).wrapper
    );
    react_1.fireEvent.click(component.getByTestId("see-as-source-button"));
    expect(onSeeAsSource).toHaveBeenCalled();
    expect(component.asFragment()).toMatchSnapshot();
  });
  test("readonly true | textMode true | textModeAvailable false", function () {
    expect(
      (0, react_1.render)(
        (0, testing_utils_1.usingTestingChromeExtensionI18nContext)(
          (0, testing_utils_1.usingTestingGlobalContext)(
            (0, testing_utils_1.usingTestingGitHubContext)(
              (0, jsx_runtime_1.jsx)(
                SingleEditorToolbar_1.SingleEditorToolbar,
                {
                  readonly: true,
                  textMode: true,
                  errorOpeningFile: false,
                  textModeAvailable: false,
                  onFullScreen: undefined,
                  onSeeAsSource: undefined,
                  onSeeAsDiagram: undefined,
                  onOpenInExternalEditor: undefined,
                  linkToExternalEditor: "test.com/editor",
                },
                void 0
              )
            ).wrapper
          ).wrapper
        ).wrapper
      ).asFragment()
    ).toMatchSnapshot();
  });
  test("readonly false | textMode true | textModeAvailable false", function () {
    expect(
      (0, react_1.render)(
        (0, testing_utils_1.usingTestingChromeExtensionI18nContext)(
          (0, testing_utils_1.usingTestingGlobalContext)(
            (0, testing_utils_1.usingTestingGitHubContext)(
              (0, jsx_runtime_1.jsx)(
                SingleEditorToolbar_1.SingleEditorToolbar,
                {
                  readonly: false,
                  textMode: true,
                  errorOpeningFile: false,
                  textModeAvailable: false,
                  onFullScreen: undefined,
                  onSeeAsSource: undefined,
                  onSeeAsDiagram: undefined,
                  onOpenInExternalEditor: undefined,
                  linkToExternalEditor: "test.com/editor",
                },
                void 0
              )
            ).wrapper
          ).wrapper
        ).wrapper
      ).asFragment()
    ).toMatchSnapshot();
  });
  test("readonly true | textMode false | textModeAvailable false", function () {
    expect(
      (0, react_1.render)(
        (0, testing_utils_1.usingTestingChromeExtensionI18nContext)(
          (0, testing_utils_1.usingTestingGlobalContext)(
            (0, testing_utils_1.usingTestingGitHubContext)(
              (0, jsx_runtime_1.jsx)(
                SingleEditorToolbar_1.SingleEditorToolbar,
                {
                  readonly: true,
                  textMode: false,
                  errorOpeningFile: false,
                  textModeAvailable: false,
                  onFullScreen: undefined,
                  onSeeAsSource: undefined,
                  onSeeAsDiagram: undefined,
                  onOpenInExternalEditor: undefined,
                  linkToExternalEditor: "test.com/editor",
                },
                void 0
              )
            ).wrapper
          ).wrapper
        ).wrapper
      ).asFragment()
    ).toMatchSnapshot();
  });
  test("readonly false | textMode false | textModeAvailable false", function () {
    expect(
      (0, react_1.render)(
        (0, testing_utils_1.usingTestingChromeExtensionI18nContext)(
          (0, testing_utils_1.usingTestingGlobalContext)(
            (0, testing_utils_1.usingTestingGitHubContext)(
              (0, jsx_runtime_1.jsx)(
                SingleEditorToolbar_1.SingleEditorToolbar,
                {
                  readonly: false,
                  textMode: false,
                  errorOpeningFile: false,
                  textModeAvailable: false,
                  onFullScreen: undefined,
                  onSeeAsSource: undefined,
                  onSeeAsDiagram: undefined,
                  onOpenInExternalEditor: undefined,
                  linkToExternalEditor: "test.com/editor",
                },
                void 0
              )
            ).wrapper
          ).wrapper
        ).wrapper
      ).asFragment()
    ).toMatchSnapshot();
  });
  test("button actions", function () {
    var onFullScreen = jest.fn();
    var onSeeAsSource = jest.fn();
    var onSeeAsDiagram = jest.fn();
    var onOpenInExternalEditor = jest.fn();
    var component = (0, react_1.render)(
      (0, testing_utils_1.usingTestingChromeExtensionI18nContext)(
        (0, testing_utils_1.usingTestingGlobalContext)(
          (0, jsx_runtime_1.jsx)(
            SingleEditorToolbar_1.SingleEditorToolbar,
            {
              readonly: false,
              textMode: false,
              errorOpeningFile: false,
              textModeAvailable: false,
              onFullScreen: onFullScreen,
              onSeeAsSource: onSeeAsSource,
              onSeeAsDiagram: onSeeAsDiagram,
              onOpenInExternalEditor: onOpenInExternalEditor,
              linkToExternalEditor: "test.com/editor",
            },
            void 0
          )
        ).wrapper
      ).wrapper
    );
    react_1.fireEvent.click(component.getByTestId("go-fullscreen-button"));
    expect(onFullScreen).toHaveBeenCalled();
    react_1.fireEvent.click(component.getByTestId("open-ext-editor-button"));
    expect(onOpenInExternalEditor).toHaveBeenCalled();
    react_1.fireEvent.click(component.getByTestId("copy-link-button"));
    expect(component.asFragment()).toMatchSnapshot();
  });
  test("copied to clipboard message", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var component;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            component = (0, react_1.render)(
              (0, testing_utils_1.usingTestingChromeExtensionI18nContext)(
                (0, testing_utils_1.usingTestingGlobalContext)(
                  (0, jsx_runtime_1.jsx)(
                    SingleEditorToolbar_1.SingleEditorToolbar,
                    {
                      readonly: false,
                      textMode: false,
                      errorOpeningFile: false,
                      textModeAvailable: false,
                      onFullScreen: undefined,
                      onSeeAsSource: undefined,
                      onSeeAsDiagram: undefined,
                      onOpenInExternalEditor: undefined,
                      linkToExternalEditor: "test.com/editor",
                    },
                    void 0
                  )
                ).wrapper
              ).wrapper
            );
            react_1.fireEvent.click(component.getByTestId("copy-link-button"));
            return [
              4,
              (0, react_1.waitForElementToBeRemoved)(
                function () {
                  return component.queryByTestId("link-copied-alert");
                },
                { timeout: 10000 }
              ),
            ];
          case 1:
            _a.sent();
            expect(component.asFragment()).toMatchSnapshot();
            return [2];
        }
      });
    });
  });
});
//# sourceMappingURL=SingleEditorToolbar.test.js.map
