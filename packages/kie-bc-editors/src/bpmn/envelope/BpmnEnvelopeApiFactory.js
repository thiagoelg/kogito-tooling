"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
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
exports.BpmnEditorEnvelopeApiImpl = void 0;
var envelope_1 = require("@kie-tools-core/editor/dist/envelope");
var BpmnEditorFactory_1 = require("./BpmnEditorFactory");
var BpmnEditorEnvelopeApiImpl = (function (_super) {
  __extends(BpmnEditorEnvelopeApiImpl, _super);
  function BpmnEditorEnvelopeApiImpl(bpmnArgs, gwtEditorEnvelopeConfig) {
    var _this = _super.call(this, bpmnArgs, new BpmnEditorFactory_1.BpmnEditorFactory(gwtEditorEnvelopeConfig)) || this;
    _this.bpmnArgs = bpmnArgs;
    return _this;
  }
  BpmnEditorEnvelopeApiImpl.prototype.myBpmnEnvelopeMethod = function () {
    var _a;
    this.bpmnArgs.envelopeContext.channelApi.notifications.myBpmnChannelMethod.send();
    var editor = this.view().getEditor();
    var ret =
      (_a = editor === null || editor === void 0 ? void 0 : editor.myBpmnMethod()) !== null && _a !== void 0
        ? _a
        : "bpmn-specific--default";
    return Promise.resolve(ret);
  };
  BpmnEditorEnvelopeApiImpl.prototype.canvas_getNodeIds = function () {
    return __awaiter(this, void 0, void 0, function () {
      var editor;
      return __generator(this, function (_a) {
        editor = this.view().getEditor();
        if (!editor) {
          throw new Error("Editor not found.");
        }
        return [2, editor.getNodeIds()];
      });
    });
  };
  BpmnEditorEnvelopeApiImpl.prototype.canvas_getBackgroundColor = function (uuid) {
    return __awaiter(this, void 0, void 0, function () {
      var editor;
      return __generator(this, function (_a) {
        editor = this.view().getEditor();
        if (!editor) {
          throw new Error("Editor not found.");
        }
        return [2, editor.getBackgroundColor(uuid)];
      });
    });
  };
  BpmnEditorEnvelopeApiImpl.prototype.canvas_setBackgroundColor = function (uuid, backgroundColor) {
    return __awaiter(this, void 0, void 0, function () {
      var editor;
      return __generator(this, function (_a) {
        editor = this.view().getEditor();
        if (!editor) {
          throw new Error("Editor not found.");
        }
        return [2, editor.setBackgroundColor(uuid, backgroundColor)];
      });
    });
  };
  BpmnEditorEnvelopeApiImpl.prototype.canvas_getBorderColor = function (uuid) {
    return __awaiter(this, void 0, void 0, function () {
      var editor;
      return __generator(this, function (_a) {
        editor = this.view().getEditor();
        if (!editor) {
          throw new Error("Editor not found.");
        }
        return [2, editor.getBorderColor(uuid)];
      });
    });
  };
  BpmnEditorEnvelopeApiImpl.prototype.canvas_setBorderColor = function (uuid, borderColor) {
    return __awaiter(this, void 0, void 0, function () {
      var editor;
      return __generator(this, function (_a) {
        editor = this.view().getEditor();
        if (!editor) {
          throw new Error("Editor not found.");
        }
        return [2, editor.setBorderColor(uuid, borderColor)];
      });
    });
  };
  BpmnEditorEnvelopeApiImpl.prototype.canvas_getLocation = function (uuid) {
    return __awaiter(this, void 0, void 0, function () {
      var editor;
      return __generator(this, function (_a) {
        editor = this.view().getEditor();
        if (!editor) {
          throw new Error("Editor not found.");
        }
        return [2, editor.getLocation(uuid)];
      });
    });
  };
  BpmnEditorEnvelopeApiImpl.prototype.canvas_getAbsoluteLocation = function (uuid) {
    return __awaiter(this, void 0, void 0, function () {
      var editor;
      return __generator(this, function (_a) {
        editor = this.view().getEditor();
        if (!editor) {
          throw new Error("Editor not found.");
        }
        return [2, editor.getAbsoluteLocation(uuid)];
      });
    });
  };
  BpmnEditorEnvelopeApiImpl.prototype.canvas_getDimensions = function (uuid) {
    return __awaiter(this, void 0, void 0, function () {
      var editor;
      return __generator(this, function (_a) {
        editor = this.view().getEditor();
        if (!editor) {
          throw new Error("Editor not found.");
        }
        return [2, editor.getDimensions(uuid)];
      });
    });
  };
  BpmnEditorEnvelopeApiImpl.prototype.canvas_applyState = function (uuid, state) {
    return __awaiter(this, void 0, void 0, function () {
      var editor;
      return __generator(this, function (_a) {
        editor = this.view().getEditor();
        if (!editor) {
          throw new Error("Editor not found.");
        }
        return [2, editor.applyState(uuid, state)];
      });
    });
  };
  BpmnEditorEnvelopeApiImpl.prototype.canvas_centerNode = function (uuid) {
    return __awaiter(this, void 0, void 0, function () {
      var editor;
      return __generator(this, function (_a) {
        editor = this.view().getEditor();
        if (!editor) {
          throw new Error("Editor not found.");
        }
        return [2, editor.centerNode(uuid)];
      });
    });
  };
  return BpmnEditorEnvelopeApiImpl;
})(envelope_1.KogitoEditorEnvelopeApiImpl);
exports.BpmnEditorEnvelopeApiImpl = BpmnEditorEnvelopeApiImpl;
//# sourceMappingURL=BpmnEnvelopeApiFactory.js.map
