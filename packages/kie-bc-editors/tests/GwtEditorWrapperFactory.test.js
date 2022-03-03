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
var GwtEditorWrapperFactory_1 = require("@kie-tools/kie-bc-editors/dist/common/GwtEditorWrapperFactory");
var gwtStateControl_1 = require("@kie-tools/kie-bc-editors/dist/common/gwtStateControl");
var common_1 = require("@kie-tools-core/envelope-bus/dist-tests/common");
var envelope_1 = require("@kie-tools-core/i18n/dist/envelope");
var api_1 = require("@kie-tools-core/editor/dist/api");
var GwtEditorWrapper_1 = require("@kie-tools/kie-bc-editors/dist/common/GwtEditorWrapper");
var cssResource = {
  type: "css",
  paths: ["resource1.css", "resource2.css"],
};
var jsResource = {
  type: "js",
  paths: [
    "resource1.js",
    "resource2.js",
    "resource3.js",
    "resource4.js",
    "resource5.js",
    "resource1.js",
    "resource2.js",
    "resource3.js",
    "resource4.js",
    "resource5.js",
    "resource1.js",
    "resource2.js",
    "resource3.js",
    "resource4.js",
    "resource5.js",
  ],
};
var xmlFormatter = {
  format: function (c) {
    return c;
  },
};
var gwtAppFormerApi = {
  onFinishedLoading: function (callback) {
    return (window.appFormerGwtFinishedLoading = callback);
  },
  getEditor: jest.fn(),
};
function waitForNScriptsToLoad(remaining) {
  if (remaining <= 0) {
    return Promise.resolve();
  }
  var script = Array.from(document.getElementsByTagName("script")).pop();
  return new Promise(function (res) {
    script.addEventListener("load", function () {
      waitForNScriptsToLoad(remaining - 1).then(res);
    });
    script.dispatchEvent(new Event("load"));
  });
}
describe("GwtEditorWrapperFactory", function () {
  test("create editor", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var testLanguageData, channelApiMock, gwtEditorWrapperFactory, editorCreation, links, scripts;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            testLanguageData = {
              type: "gwt",
              editorId: "editorID",
              gwtModuleName: "moduleName",
              resources: [cssResource, jsResource],
            };
            channelApiMock = (0, common_1.messageBusClientApiMock)();
            gwtEditorWrapperFactory = new GwtEditorWrapperFactory_1.GwtEditorWrapperFactory(
              testLanguageData,
              function (self) {
                return new GwtEditorWrapper_1.GwtEditorWrapper(
                  testLanguageData.editorId,
                  self.gwtAppFormerApi.getEditor(testLanguageData.editorId),
                  channelApiMock,
                  self.xmlFormatter,
                  self.gwtStateControlService,
                  self.kieBcEditorsI18n
                );
              },
              { shouldLoadResourcesDynamically: true },
              xmlFormatter,
              gwtAppFormerApi,
              new gwtStateControl_1.GwtStateControlService()
            );
            editorCreation = gwtEditorWrapperFactory.createEditor(
              {
                channelApi: channelApiMock,
                services: {
                  keyboardShortcuts: {},
                  i18n: new envelope_1.I18nService(),
                },
              },
              {
                resourcesPathPrefix: "",
                fileExtension: "txt",
                initialLocale: "en",
                isReadOnly: false,
                channel: api_1.ChannelType.ONLINE,
              }
            );
            return [4, waitForNScriptsToLoad(jsResource.paths.length)];
          case 1:
            _a.sent();
            return [4, window.appFormerGwtFinishedLoading()];
          case 2:
            _a.sent();
            return [4, editorCreation];
          case 3:
            _a.sent();
            links = document.getElementsByTagName("link");
            expect(links.length).toBe(cssResource.paths.length);
            Array.from(links).forEach(function (l, i) {
              expect(l.href).toContain(cssResource.paths[i]);
            });
            scripts = document.getElementsByTagName("script");
            expect(scripts.length).toBe(jsResource.paths.length);
            Array.from(scripts).forEach(function (s, i) {
              expect(s.src).toContain(jsResource.paths[i]);
            });
            return [2];
        }
      });
    });
  });
});
//# sourceMappingURL=GwtEditorWrapperFactory.test.js.map
