"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GwtStateControlService = void 0;
var KogitoCommandRegistry_1 = require("./KogitoCommandRegistry");
var GwtStateControlService = (function () {
  function GwtStateControlService() {}
  GwtStateControlService.prototype.undo = function () {
    if (this.undoCommand) {
      this.undoCommand();
    }
  };
  GwtStateControlService.prototype.redo = function () {
    if (this.redoCommand) {
      this.redoCommand();
    }
  };
  GwtStateControlService.prototype.exposeApi = function (channelApi) {
    var _this = this;
    return {
      registry: new KogitoCommandRegistry_1.DefaultKogitoCommandRegistry(channelApi),
      setUndoCommand: function (undoCommand) {
        return (_this.undoCommand = undoCommand);
      },
      setRedoCommand: function (redoCommand) {
        return (_this.redoCommand = redoCommand);
      },
    };
  };
  return GwtStateControlService;
})();
exports.GwtStateControlService = GwtStateControlService;
//# sourceMappingURL=GwtStateControlService.js.map
