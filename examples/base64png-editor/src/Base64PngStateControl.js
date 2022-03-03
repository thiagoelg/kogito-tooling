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
exports.Base64PngStateControl = void 0;
var channel_1 = require("@kie-tools-core/editor/dist/channel");
var Base64PngStateControl = (function (_super) {
  __extends(Base64PngStateControl, _super);
  function Base64PngStateControl() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Base64PngStateControl.prototype.getCurrentBase64PngEdit = function () {
    var command = _super.prototype.getCurrentCommand.call(this);
    if (command) {
      return JSON.parse(command.id);
    }
    return;
  };
  return Base64PngStateControl;
})(channel_1.StateControl);
exports.Base64PngStateControl = Base64PngStateControl;
//# sourceMappingURL=Base64PngStateControl.js.map
