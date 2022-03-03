"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChromeRouter = void 0;
var ChromeRouter = (function () {
  function ChromeRouter() {}
  ChromeRouter.prototype.getResourcesPathPrefix = function () {
    var _a;
    var relativePath = process.env.WEBPACK_REPLACE__relativePath;
    if (relativePath) {
      return "".concat(this.getTargetOrigin(), "/").concat(relativePath);
    } else {
      return (_a = this.getTargetOrigin()) !== null && _a !== void 0 ? _a : "";
    }
  };
  ChromeRouter.prototype.getTargetOrigin = function () {
    return process.env.WEBPACK_REPLACE__targetOrigin;
  };
  return ChromeRouter;
})();
exports.ChromeRouter = ChromeRouter;
//# sourceMappingURL=ChromeRouter.js.map
