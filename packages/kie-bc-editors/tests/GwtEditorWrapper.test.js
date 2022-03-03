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
var GwtEditorWrapper_1 = require("@kie-tools/kie-bc-editors/dist/common/GwtEditorWrapper");
var gwtStateControl_1 = require("@kie-tools/kie-bc-editors/dist/common/gwtStateControl");
var common_1 = require("@kie-tools-core/envelope-bus/dist-tests/common");
var core_1 = require("@kie-tools-core/i18n/dist/core");
var i18n_1 = require("@kie-tools/kie-bc-editors/dist/common/i18n");
var MockEditor = jest.fn(function () {
  return {
    undo: jest.fn(),
    redo: jest.fn(),
    getContent: jest.fn(),
    setContent: jest.fn(function () {
      return Promise.resolve();
    }),
    isDirty: jest.fn(),
    getPreview: jest.fn(),
    validate: jest.fn(),
  };
});
var mockEditor = new MockEditor();
var mockChannelApiImpl = (0, common_1.messageBusClientApiMock)();
var mockXmlFormatter = {
  format: function (c) {
    return c;
  },
};
var i18n = new core_1.I18n(i18n_1.kieBcEditorsI18nDefaults, i18n_1.kieBcEditorsI18nDictionaries);
var wrapper = new GwtEditorWrapper_1.GwtEditorWrapper(
  "MockEditorId",
  mockEditor,
  mockChannelApiImpl,
  mockXmlFormatter,
  new gwtStateControl_1.GwtStateControlService(),
  i18n
);
describe("GwtEditorWrapper", function () {
  test("set content", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, wrapper.setContent("path", " a content ")];
          case 1:
            _a.sent();
            expect(mockEditor.setContent).toHaveBeenCalledWith("path", "a content");
            return [2];
        }
      });
    });
  });
  test("set content error", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockEditor.setContent = jest.fn(function () {
              return Promise.reject();
            });
            return [4, expect(wrapper.setContent("path", " a content ")).rejects.toEqual(undefined)];
          case 1:
            _a.sent();
            expect(mockEditor.setContent).toHaveBeenCalledWith("path", "a content");
            return [2];
        }
      });
    });
  });
  test("af_onOpen removes header", function () {
    var parent = document.createElement("div");
    var workbenchHeaderPanel = document.createElement("div");
    var listBarHeading = document.createElement("div");
    listBarHeading.className = ".panel-heading.uf-listbar-panel-header";
    workbenchHeaderPanel.id = "workbenchHeaderPanel";
    parent.appendChild(workbenchHeaderPanel);
    document.body.appendChild(parent);
    wrapper.af_onOpen();
    var removedHeaderPanel = document.getElementById("workbenchHeaderPanel");
    var removedListBarHeader = document.querySelector(".panel-heading.uf-listbar-panel-header");
    expect(removedHeaderPanel).toBeFalsy();
    expect(removedListBarHeader).toBeFalsy();
  });
  test("af_onOpen no element to remove", function () {
    var removedHeaderPanel = document.getElementById("workbenchHeaderPanel");
    expect(removedHeaderPanel).toBeFalsy();
    wrapper.af_onOpen();
    removedHeaderPanel = document.getElementById("workbenchHeaderPanel");
    expect(removedHeaderPanel).toBeFalsy();
  });
});
//# sourceMappingURL=GwtEditorWrapper.test.js.map
