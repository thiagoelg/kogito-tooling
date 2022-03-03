"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GwtStateControlCommand = void 0;
var GwtStateControlCommand = (function () {
  function GwtStateControlCommand(id, executable) {
    this.id = id;
    this.executable = executable;
  }
  GwtStateControlCommand.prototype.getId = function () {
    return this.id;
  };
  GwtStateControlCommand.prototype.get = function () {
    return this.executable;
  };
  return GwtStateControlCommand;
})();
exports.GwtStateControlCommand = GwtStateControlCommand;
//# sourceMappingURL=GwtStateControlCommand.js.map
