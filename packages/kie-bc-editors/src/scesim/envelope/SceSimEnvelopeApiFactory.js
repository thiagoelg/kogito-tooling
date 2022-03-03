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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceSimEditorEnvelopeApiImpl = void 0;
var envelope_1 = require("@kie-tools-core/editor/dist/envelope");
var SceSimEditorFactory_1 = require("./SceSimEditorFactory");
var SceSimEditorEnvelopeApiImpl = (function (_super) {
  __extends(SceSimEditorEnvelopeApiImpl, _super);
  function SceSimEditorEnvelopeApiImpl(sceSimArgs, gwtEditorEnvelopeConfig) {
    var _this =
      _super.call(this, sceSimArgs, new SceSimEditorFactory_1.SceSimEditorFactory(gwtEditorEnvelopeConfig)) || this;
    _this.sceSimArgs = sceSimArgs;
    return _this;
  }
  SceSimEditorEnvelopeApiImpl.prototype.mySceSimEnvelopeMethod = function () {
    var _a;
    var editor = this.view().getEditor();
    var ret =
      (_a = editor === null || editor === void 0 ? void 0 : editor.mySceSimMethod()) !== null && _a !== void 0
        ? _a
        : "scesim-specific--default";
    return Promise.resolve(ret);
  };
  return SceSimEditorEnvelopeApiImpl;
})(envelope_1.KogitoEditorEnvelopeApiImpl);
exports.SceSimEditorEnvelopeApiImpl = SceSimEditorEnvelopeApiImpl;
//# sourceMappingURL=SceSimEnvelopeApiFactory.js.map
