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
exports.KogitoEditorChannelApiImpl = void 0;
var api_1 = require("@kie-tools-core/workspace/dist/api");
var api_2 = require("@kie-tools-core/editor/dist/api");
var minimatch_1 = require("minimatch");
var KogitoEditorChannelApiImpl = (function () {
  function KogitoEditorChannelApiImpl(stateControl, file, locale, overrides, resources) {
    this.stateControl = stateControl;
    this.file = file;
    this.locale = locale;
    this.overrides = overrides;
    this.resources = resources;
  }
  KogitoEditorChannelApiImpl.prototype.kogitoWorkspace_newEdit = function (edit) {
    var _a, _b;
    this.stateControl.updateCommandStack({ id: edit.id });
    (_b = (_a = this.overrides).kogitoWorkspace_newEdit) === null || _b === void 0 ? void 0 : _b.call(_a, edit);
  };
  KogitoEditorChannelApiImpl.prototype.kogitoEditor_stateControlCommandUpdate = function (command) {
    var _a, _b;
    switch (command) {
      case api_2.StateControlCommand.REDO:
        this.stateControl.redo();
        break;
      case api_2.StateControlCommand.UNDO:
        this.stateControl.undo();
        break;
      default:
        console.info("Unknown message type received: ".concat(command));
        break;
    }
    (_b = (_a = this.overrides).kogitoEditor_stateControlCommandUpdate) === null || _b === void 0
      ? void 0
      : _b.call(_a, command);
  };
  KogitoEditorChannelApiImpl.prototype.kogitoGuidedTour_guidedTourUserInteraction = function (userInteraction) {};
  KogitoEditorChannelApiImpl.prototype.kogitoGuidedTour_guidedTourRegisterTutorial = function (tutorial) {};
  KogitoEditorChannelApiImpl.prototype.kogitoEditor_contentRequest = function () {
    return __awaiter(this, void 0, void 0, function () {
      var content;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.file.getFileContents()];
          case 1:
            content = _a.sent();
            return [2, { content: content !== null && content !== void 0 ? content : "", path: this.file.fileName }];
        }
      });
    });
  };
  KogitoEditorChannelApiImpl.prototype.kogitoWorkspace_resourceContentRequest = function (request) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
      var resource, requestedContentType, _d, _e;
      return __generator(this, function (_f) {
        switch (_f.label) {
          case 0:
            resource = (_a = this.resources) === null || _a === void 0 ? void 0 : _a.get(request.path);
            if (!resource) {
              console.warn("The editor requested an unspecified resource: " + request.path);
              return [2, new api_1.ResourceContent(request.path, undefined)];
            }
            requestedContentType =
              (_c = (_b = request.opts) === null || _b === void 0 ? void 0 : _b.type) !== null && _c !== void 0
                ? _c
                : resource.contentType;
            if (requestedContentType !== resource.contentType) {
              console.warn(
                "The editor requested a resource with a different content type from the one specified: " +
                  request.path +
                  ". Content type requested: " +
                  requestedContentType
              );
              return [2, new api_1.ResourceContent(request.path, undefined)];
            }
            _d = api_1.ResourceContent.bind;
            _e = [void 0, request.path];
            return [4, resource.content];
          case 1:
            return [2, new (_d.apply(api_1.ResourceContent, _e.concat([_f.sent(), resource.contentType])))()];
        }
      });
    });
  };
  KogitoEditorChannelApiImpl.prototype.kogitoWorkspace_resourceListRequest = function (request) {
    return __awaiter(this, void 0, void 0, function () {
      var matcher, matches;
      return __generator(this, function (_a) {
        if (!this.resources) {
          return [2, new api_1.ResourcesList(request.pattern, [])];
        }
        matcher = new minimatch_1.Minimatch(request.pattern);
        matches = Array.from(this.resources.keys()).filter(function (path) {
          return matcher.match(path);
        });
        return [2, new api_1.ResourcesList(request.pattern, matches)];
      });
    });
  };
  KogitoEditorChannelApiImpl.prototype.kogitoWorkspace_openFile = function (path) {
    var _a, _b;
    (_b = (_a = this.overrides).kogitoWorkspace_openFile) === null || _b === void 0 ? void 0 : _b.call(_a, path);
  };
  KogitoEditorChannelApiImpl.prototype.kogitoEditor_ready = function () {
    var _a, _b;
    (_b = (_a = this.overrides).kogitoEditor_ready) === null || _b === void 0 ? void 0 : _b.call(_a);
  };
  KogitoEditorChannelApiImpl.prototype.kogitoEditor_setContentError = function (editorContent) {
    var _a, _b;
    (_b = (_a = this.overrides).kogitoEditor_setContentError) === null || _b === void 0
      ? void 0
      : _b.call(_a, editorContent);
  };
  KogitoEditorChannelApiImpl.prototype.kogitoI18n_getLocale = function () {
    return Promise.resolve(this.locale);
  };
  KogitoEditorChannelApiImpl.prototype.kogitoNotifications_createNotification = function (notification) {
    var _a, _b;
    (_b = (_a = this.overrides).kogitoNotifications_createNotification) === null || _b === void 0
      ? void 0
      : _b.call(_a, notification);
  };
  KogitoEditorChannelApiImpl.prototype.kogitoNotifications_setNotifications = function (path, notifications) {
    var _a, _b;
    (_b = (_a = this.overrides).kogitoNotifications_setNotifications) === null || _b === void 0
      ? void 0
      : _b.call(_a, path, notifications);
  };
  KogitoEditorChannelApiImpl.prototype.kogitoNotifications_removeNotifications = function (path) {
    var _a, _b;
    (_b = (_a = this.overrides).kogitoNotifications_removeNotifications) === null || _b === void 0
      ? void 0
      : _b.call(_a, path);
  };
  return KogitoEditorChannelApiImpl;
})();
exports.KogitoEditorChannelApiImpl = KogitoEditorChannelApiImpl;
//# sourceMappingURL=KogitoEditorChannelApiImpl.js.map
