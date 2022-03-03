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
exports.GwtEditorWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var GwtAppFormerApi_1 = require("./GwtAppFormerApi");
var GwtEditorMapping_1 = require("./GwtEditorMapping");
var GwtEditorWrapper = (function () {
  function GwtEditorWrapper(editorId, gwtEditor, channelApi, xmlFormatter, stateControlService, kieBcEditorsI18n) {
    this.af_isReact = true;
    this.af_componentId = "gwt-editor-wrapper";
    this.af_componentTitle = editorId;
    this.stateControlService = stateControlService;
    this.af_isReact = true;
    this.gwtEditor = gwtEditor;
    this.channelApi = channelApi;
    this.editorId = editorId;
    this.xmlFormatter = xmlFormatter;
    this.kieBcEditorsI18n = kieBcEditorsI18n;
  }
  GwtEditorWrapper.prototype.af_onOpen = function () {
    this.removeBusinessCentralHeaderPanel();
    if (this.editorId === GwtEditorMapping_1.editors.bpmn.id) {
      this.removeHeaderIfOnlyOneItemOnTable();
    } else {
      this.injectStyleToFixResponsivenessIssue_DROOLS_3995();
    }
  };
  GwtEditorWrapper.prototype.af_componentRoot = function () {
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
  };
  GwtEditorWrapper.prototype.undo = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2, this.stateControlService.undo()];
      });
    });
  };
  GwtEditorWrapper.prototype.redo = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2, this.stateControlService.redo()];
      });
    });
  };
  GwtEditorWrapper.prototype.getContent = function () {
    var _this = this;
    return this.gwtEditor.getContent().then(function (content) {
      return _this.xmlFormatter.format(content);
    });
  };
  GwtEditorWrapper.prototype.getElementPosition = function (selector) {
    return Promise.resolve((0, GwtAppFormerApi_1.getGuidedTourElementPosition)(selector));
  };
  GwtEditorWrapper.prototype.setContent = function (path, content) {
    var _this = this;
    setTimeout(function () {
      return _this.removeBusinessCentralPanelHeader();
    }, 100);
    return this.gwtEditor.setContent(path, content.trim());
  };
  GwtEditorWrapper.prototype.getPreview = function () {
    return this.gwtEditor.getPreview();
  };
  GwtEditorWrapper.prototype.validate = function () {
    return this.gwtEditor.validate();
  };
  GwtEditorWrapper.prototype.removeBusinessCentralHeaderPanel = function () {
    var headerPanel = document.getElementById("workbenchHeaderPanel");
    if (headerPanel) {
      var parentNode = headerPanel.parentNode;
      if (parentNode) {
        parentNode.remove();
      }
    }
  };
  GwtEditorWrapper.prototype.removeBusinessCentralPanelHeader = function () {
    var panelHeaderSpan = document.querySelector(".panel-heading.uf-listbar-panel-header span");
    if (panelHeaderSpan) {
      panelHeaderSpan.textContent = "";
    }
  };
  GwtEditorWrapper.prototype.removeHeaderIfOnlyOneItemOnTable = function () {
    var headerTable = document.querySelector(".tabbable.uf-tabbar-panel.uf-multi-page-editor > table");
    if (headerTable && headerTable.querySelectorAll("td > ul > li").length <= 1) {
      headerTable.remove();
    }
  };
  GwtEditorWrapper.prototype.injectStyleToFixResponsivenessIssue_DROOLS_3995 = function () {
    var style = document.createElement("style");
    style.textContent = '[data-i18n-prefix="DataTypeListItemView."] .list-view-pf-body { display: flex !important; }';
    document.head.appendChild(style);
  };
  return GwtEditorWrapper;
})();
exports.GwtEditorWrapper = GwtEditorWrapper;
//# sourceMappingURL=GwtEditorWrapper.js.map
