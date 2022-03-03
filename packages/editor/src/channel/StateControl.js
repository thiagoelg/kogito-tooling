"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateControl = void 0;
var StateControl = (function () {
  function StateControl() {
    this.commandStack = [];
    this.registeredCallbacks = [];
  }
  StateControl.prototype.subscribe = function (callback) {
    this.registeredCallbacks.push(callback);
    return callback;
  };
  StateControl.prototype.unsubscribe = function (callback) {
    var index = this.registeredCallbacks.indexOf(callback);
    if (index > -1) {
      this.registeredCallbacks.splice(index, 1);
    } else {
      console.error("Can't unsubscribe callback because it wasn't subscribed.");
    }
  };
  StateControl.prototype.getSavedCommand = function () {
    return this.savedCommand;
  };
  StateControl.prototype.getCurrentCommand = function () {
    return this.currentCommand;
  };
  StateControl.prototype.getCommandStack = function () {
    return this.commandStack;
  };
  StateControl.prototype.getRegisteredCallbacks = function () {
    return this.registeredCallbacks;
  };
  StateControl.prototype.setSavedCommand = function () {
    this.savedCommand = this.currentCommand;
    var isDirty = this.isDirty();
    this.registeredCallbacks.forEach(function (callback) {
      return callback(isDirty);
    });
  };
  StateControl.prototype.setCurrentCommand = function (command) {
    this.currentCommand = command;
    var isDirty = this.isDirty();
    this.registeredCallbacks.forEach(function (callback) {
      return callback(isDirty);
    });
  };
  StateControl.prototype.isDirty = function () {
    return this.currentCommand !== this.savedCommand;
  };
  StateControl.prototype.undo = function () {
    var _a, _b;
    var indexOfCommandToUndo = this.commandStack.indexOf(this.currentCommand);
    var nextCurrentCommandAfterUndo;
    if (this.commandStack[indexOfCommandToUndo - 1]) {
      nextCurrentCommandAfterUndo = this.commandStack[indexOfCommandToUndo - 1];
    }
    (_b = (_a = this.currentCommand) === null || _a === void 0 ? void 0 : _a.undo) === null || _b === void 0
      ? void 0
      : _b.call(_a);
    this.setCurrentCommand(nextCurrentCommandAfterUndo);
  };
  StateControl.prototype.redo = function () {
    var _a;
    var indexOfCurrentCommand = this.commandStack.indexOf(this.currentCommand);
    if (this.commandStack[indexOfCurrentCommand + 1]) {
      var commandRedone = this.commandStack[indexOfCurrentCommand + 1];
      (_a = commandRedone === null || commandRedone === void 0 ? void 0 : commandRedone.redo) === null || _a === void 0
        ? void 0
        : _a.call(commandRedone);
      this.setCurrentCommand(commandRedone);
    }
  };
  StateControl.prototype.eraseRedoCommands = function () {
    return this.commandStack.slice(0, this.commandStack.indexOf(this.currentCommand) + 1);
  };
  StateControl.prototype.updateCommandStack = function (command) {
    var _a;
    this.commandStack = this.eraseRedoCommands();
    if (command.id !== ((_a = this.currentCommand) === null || _a === void 0 ? void 0 : _a.id)) {
      this.setCurrentCommand(command);
      this.commandStack = this.commandStack.concat(command);
    }
  };
  return StateControl;
})();
exports.StateControl = StateControl;
//# sourceMappingURL=StateControl.js.map
