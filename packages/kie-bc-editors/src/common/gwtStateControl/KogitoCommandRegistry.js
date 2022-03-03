"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultKogitoCommandRegistry = void 0;
var GwtStateControlCommand_1 = require("./GwtStateControlCommand");
var api_1 = require("@kie-tools-core/workspace/dist/api");
var DefaultKogitoCommandRegistry = (function () {
  function DefaultKogitoCommandRegistry(channelApi) {
    this.channelApi = channelApi;
    this.maxStackSize = 200;
    this.commands = [];
    this.undoneCommands = [];
  }
  DefaultKogitoCommandRegistry.prototype.onNewCommand = function (newCommand) {
    if (!this.undoneCommands.includes(newCommand.getId())) {
      this.channelApi.notifications.kogitoWorkspace_newEdit.send(new api_1.KogitoEdit(newCommand.getId()));
      this.undoneCommands = [];
    } else {
      this.undoneCommands.splice(this.undoneCommands.indexOf(newCommand.getId()), 1);
    }
  };
  DefaultKogitoCommandRegistry.prototype.register = function (id, command) {
    if (id && command) {
      if (this.commands.length + 1 > this.maxStackSize) {
        this.commands.shift();
      }
      var kogitoCommand = new GwtStateControlCommand_1.GwtStateControlCommand(id, command);
      this.commands.push(kogitoCommand);
      this.onNewCommand(kogitoCommand);
    }
  };
  DefaultKogitoCommandRegistry.prototype.peek = function () {
    var _a;
    if (((_a = this.commands) === null || _a === void 0 ? void 0 : _a.length) > 0) {
      return this.commands[this.commands.length - 1].get();
    }
    return null;
  };
  DefaultKogitoCommandRegistry.prototype.pop = function () {
    if (this.commands && this.commands.length > 0) {
      var command = this.commands.pop();
      if (command) {
        this.undoneCommands.push(command.getId());
        return command.get();
      }
    }
    return null;
  };
  DefaultKogitoCommandRegistry.prototype.isEmpty = function () {
    return this.commands.length === 0;
  };
  DefaultKogitoCommandRegistry.prototype.getCommands = function () {
    return this.commands.map(function (command) {
      return command.get();
    });
  };
  DefaultKogitoCommandRegistry.prototype.clear = function () {
    this.commands = [];
    this.undoneCommands = [];
  };
  DefaultKogitoCommandRegistry.prototype.setMaxSize = function (size) {
    this.maxStackSize = size;
  };
  DefaultKogitoCommandRegistry.prototype.getUndoneCommands = function () {
    return this.undoneCommands;
  };
  return DefaultKogitoCommandRegistry;
})();
exports.DefaultKogitoCommandRegistry = DefaultKogitoCommandRegistry;
//# sourceMappingURL=KogitoCommandRegistry.js.map
