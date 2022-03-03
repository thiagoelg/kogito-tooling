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
exports.LocalHttpService = void 0;
var HttpService_1 = require("./HttpService");
var LocalHttpService = (function (_super) {
  __extends(LocalHttpService, _super);
  function LocalHttpService() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.hostname = "http://localhost";
    return _this;
  }
  LocalHttpService.prototype.registerPort = function (port) {
    this.port = port;
  };
  LocalHttpService.prototype.execute = function (path, body) {
    if (!this.port) {
      return Promise.reject("Local port not registered.");
    }
    return _super.prototype.execute.call(this, "".concat(this.hostname, ":").concat(this.port).concat(path), body);
  };
  return LocalHttpService;
})(HttpService_1.HttpService);
exports.LocalHttpService = LocalHttpService;
//# sourceMappingURL=LocalHttpService.js.map
