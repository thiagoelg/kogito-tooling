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
exports.KogitoEditorEnvelopeApiImpl = void 0;
var api_1 = require("../api");
var api_2 = require("@kie-tools-core/guided-tour/dist/api");
var core_1 = require("@kie-tools-core/i18n/dist/core");
var i18n_1 = require("./i18n");
var KogitoEditorEnvelopeApiImpl = (function () {
  function KogitoEditorEnvelopeApiImpl(args, editorFactory, i18n) {
    var _this = this;
    if (i18n === void 0) {
      i18n = new core_1.I18n(i18n_1.editorEnvelopeI18nDefaults, i18n_1.editorEnvelopeI18nDictionaries);
    }
    this.args = args;
    this.editorFactory = editorFactory;
    this.i18n = i18n;
    this.capturedInitRequestYet = false;
    this.kogitoEditor_initRequest = function (association, initArgs) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, _b, editorContent;
        var _this = this;
        var _c, _d, _e, _f, _g;
        return __generator(this, function (_h) {
          switch (_h.label) {
            case 0:
              this.args.envelopeClient.associate(association.origin, association.envelopeServerId);
              if (this.hasCapturedInitRequestYet()) {
                return [2];
              }
              this.ackCapturedInitRequest();
              _a = this;
              return [4, this.args.viewDelegate()];
            case 1:
              _a.view = _h.sent();
              this.setupI18n(initArgs);
              _b = this;
              return [4, this.editorFactory.createEditor(this.args.envelopeContext, initArgs)];
            case 2:
              _b.editor = _h.sent();
              return [4, this.view().setEditor(this.editor)];
            case 3:
              _h.sent();
              (_d = (_c = this.editor).af_onStartup) === null || _d === void 0 ? void 0 : _d.call(_c);
              (_f = (_e = this.editor).af_onOpen) === null || _f === void 0 ? void 0 : _f.call(_e);
              this.view().setLoading();
              return [4, this.args.envelopeContext.channelApi.requests.kogitoEditor_contentRequest()];
            case 4:
              editorContent = _h.sent();
              return [
                4,
                this.editor
                  .setContent((_g = editorContent.path) !== null && _g !== void 0 ? _g : "", editorContent.content)
                  .catch(function (e) {
                    return _this.args.envelopeContext.channelApi.notifications.kogitoEditor_setContentError.send(
                      editorContent
                    );
                  })
                  .finally(function () {
                    return _this.view().setLoadingFinished();
                  }),
              ];
            case 5:
              _h.sent();
              this.registerDefaultShortcuts(initArgs);
              this.args.envelopeContext.channelApi.notifications.kogitoEditor_ready.send();
              return [2];
          }
        });
      });
    };
    this.kogitoEditor_contentChanged = function (editorContent) {
      var _a;
      _this.view().setLoading();
      return _this.editor
        .setContent((_a = editorContent.path) !== null && _a !== void 0 ? _a : "", editorContent.content)
        .catch(function (e) {
          _this.args.envelopeContext.channelApi.notifications.kogitoEditor_setContentError.send(editorContent);
          throw e;
        })
        .finally(function () {
          return _this.view().setLoadingFinished();
        });
    };
    this.kogitoGuidedTour_guidedTourElementPositionRequest = function (selector) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          return [
            2,
            this.editor.getElementPosition(selector).then(function (rect) {
              return rect !== null && rect !== void 0 ? rect : api_2.DEFAULT_RECT;
            }),
          ];
        });
      });
    };
    this.kogitoKeyboardShortcuts_channelKeyboardEvent = function (channelKeyboardEvent) {
      window.dispatchEvent(new CustomEvent(channelKeyboardEvent.type, { detail: channelKeyboardEvent }));
    };
  }
  KogitoEditorEnvelopeApiImpl.prototype.hasCapturedInitRequestYet = function () {
    return this.capturedInitRequestYet;
  };
  KogitoEditorEnvelopeApiImpl.prototype.ackCapturedInitRequest = function () {
    this.capturedInitRequestYet = true;
  };
  KogitoEditorEnvelopeApiImpl.prototype.kogitoEditor_editorUndo = function () {
    this.editor.undo();
  };
  KogitoEditorEnvelopeApiImpl.prototype.kogitoEditor_editorRedo = function () {
    this.editor.redo();
  };
  KogitoEditorEnvelopeApiImpl.prototype.kogitoEditor_contentRequest = function () {
    return this.editor.getContent().then(function (content) {
      return { content: sanitize(content) };
    });
  };
  KogitoEditorEnvelopeApiImpl.prototype.kogitoEditor_previewRequest = function () {
    return this.editor.getPreview().then(function (previewSvg) {
      return previewSvg !== null && previewSvg !== void 0 ? previewSvg : "";
    });
  };
  KogitoEditorEnvelopeApiImpl.prototype.kogitoI18n_localeChange = function (locale) {
    return this.args.envelopeContext.services.i18n.executeOnLocaleChangeSubscriptions(locale);
  };
  KogitoEditorEnvelopeApiImpl.prototype.kogitoEditor_validate = function () {
    return this.editor.validate();
  };
  KogitoEditorEnvelopeApiImpl.prototype.setupI18n = function (initArgs) {
    var _this = this;
    this.i18n.setLocale(initArgs.initialLocale);
    this.args.envelopeContext.services.i18n.subscribeToLocaleChange(function (locale) {
      _this.i18n.setLocale(locale);
      _this.view().setLocale(locale);
    });
  };
  KogitoEditorEnvelopeApiImpl.prototype.registerDefaultShortcuts = function (initArgs) {
    var _this = this;
    if (initArgs.channel === api_1.ChannelType.VSCODE || initArgs.isReadOnly) {
      return;
    }
    var i18n = this.i18n.getCurrent();
    var redoId = this.args.envelopeContext.services.keyboardShortcuts.registerKeyPress(
      "shift+ctrl+z",
      "".concat(i18n.keyBindingsHelpOverlay.categories.edit, " | ").concat(i18n.keyBindingsHelpOverlay.commands.redo),
      function () {
        return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            this.editor.redo();
            this.args.envelopeContext.channelApi.notifications.kogitoEditor_stateControlCommandUpdate.send(
              api_1.StateControlCommand.REDO
            );
            return [2];
          });
        });
      }
    );
    var undoId = this.args.envelopeContext.services.keyboardShortcuts.registerKeyPress(
      "ctrl+z",
      "".concat(i18n.keyBindingsHelpOverlay.categories.edit, " | ").concat(i18n.keyBindingsHelpOverlay.commands.undo),
      function () {
        return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            this.editor.undo();
            this.args.envelopeContext.channelApi.notifications.kogitoEditor_stateControlCommandUpdate.send(
              api_1.StateControlCommand.UNDO
            );
            return [2];
          });
        });
      }
    );
    var subscription = this.args.envelopeContext.services.i18n.subscribeToLocaleChange(function (locale) {
      _this.args.envelopeContext.services.keyboardShortcuts.deregister(redoId);
      _this.args.envelopeContext.services.keyboardShortcuts.deregister(undoId);
      _this.args.envelopeContext.services.i18n.unsubscribeToLocaleChange(subscription);
      _this.registerDefaultShortcuts(initArgs);
    });
  };
  return KogitoEditorEnvelopeApiImpl;
})();
exports.KogitoEditorEnvelopeApiImpl = KogitoEditorEnvelopeApiImpl;
function sanitize(str) {
  return str.replace(/[\u202a\u202b\u202c\u202d\u202e\u2066\u2067\u2068\u2069]/gu, "");
}
//# sourceMappingURL=KogitoEditorEnvelopeApiImpl.js.map
