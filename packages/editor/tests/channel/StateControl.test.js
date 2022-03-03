"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var channel_1 = require("@kie-tools-core/editor/dist/channel");
describe("StateControl", function () {
  var stateControl;
  beforeEach(function () {
    stateControl = new channel_1.StateControl();
  });
  describe("commandStack", function () {
    test("should be empty", function () {
      expect(stateControl.getCommandStack()).toEqual([]);
    });
    test("should set new commands on the stack", function () {
      var commands = ["1", "2", "3", "4"].map(function (id) {
        return { id: id };
      });
      commands.forEach(function (command) {
        return stateControl.updateCommandStack(command);
      });
      expect(stateControl.getCommandStack()).toEqual(commands);
    });
    test("should set new commands on the stack", function () {
      ["1", "2", "3", "4"]
        .map(function (id) {
          return { id: id };
        })
        .forEach(function (command, index, commands) {
          stateControl.updateCommandStack(command);
          expect(stateControl.getCommandStack()).toEqual(commands.slice(0, index + 1));
        });
    });
  });
  describe("currentCommand", function () {
    test("should be undefined", function () {
      expect(stateControl.getCurrentCommand()).toBeUndefined();
    });
    test("should be the last added command on the stack", function () {
      ["1", "2", "3", "4"]
        .map(function (id) {
          return { id: id };
        })
        .forEach(function (command) {
          stateControl.updateCommandStack(command);
          expect(stateControl.getCurrentCommand()).toEqual(command);
        });
    });
  });
  describe("savedCommand", function () {
    test("should be undefined", function () {
      expect(stateControl.getSavedCommand()).toBeUndefined();
      stateControl.getSavedCommand();
      expect(stateControl.getSavedCommand()).toBeUndefined();
      ["1", "2", "3", "4"]
        .map(function (id) {
          return { id: id };
        })
        .forEach(function (command) {
          stateControl.updateCommandStack(command);
          expect(stateControl.getSavedCommand()).toBeUndefined();
        });
    });
    test("should be the last command added", function () {
      ["1", "2", "3", "4"]
        .map(function (id) {
          return { id: id };
        })
        .forEach(function (command) {
          stateControl.updateCommandStack(command);
          stateControl.setSavedCommand();
          expect(stateControl.getSavedCommand()).toEqual(command);
        });
    });
    test("should be the saved command", function () {
      var specialCommand = { id: "special" };
      stateControl.updateCommandStack(specialCommand);
      stateControl.setSavedCommand();
      ["1", "2", "3", "4"]
        .map(function (id) {
          return { id: id };
        })
        .forEach(function (command) {
          stateControl.updateCommandStack(command);
          expect(stateControl.getSavedCommand()).toEqual(specialCommand);
        });
    });
  });
  describe("isDirty::StateControl", function () {
    test("should be false", function () {
      expect(stateControl.isDirty()).toBeFalsy();
      ["1", "2", "3", "4"]
        .map(function (id) {
          return { id: id };
        })
        .forEach(function (command) {
          stateControl.updateCommandStack(command);
          stateControl.setSavedCommand();
          expect(stateControl.isDirty()).toBeFalsy();
        });
    });
    test("should be true", function () {
      ["1", "2", "3", "4"]
        .map(function (id) {
          return { id: id };
        })
        .forEach(function (command) {
          stateControl.updateCommandStack(command);
          expect(stateControl.isDirty()).toBeTruthy();
        });
    });
    test("should be true", function () {
      var specialCommand = { id: "special" };
      stateControl.updateCommandStack(specialCommand);
      stateControl.setSavedCommand();
      expect(stateControl.isDirty()).toBeFalsy();
      ["1", "2", "3", "4"]
        .map(function (id) {
          return { id: id };
        })
        .forEach(function (command) {
          stateControl.updateCommandStack(command);
          expect(stateControl.isDirty()).toBeTruthy();
        });
      stateControl.setSavedCommand();
      expect(stateControl.isDirty()).toBeFalsy();
    });
  });
  describe("updateCommandStack::StateControl", function () {
    test("shouldn't erase commands", function () {
      var commands = ["1", "2", "3", "4"].map(function (id) {
        return { id: id };
      });
      stateControl.updateCommandStack({ id: "1" });
      expect(stateControl.getCommandStack()).toEqual([{ id: "1" }]);
      commands.forEach(function (command) {
        return stateControl.updateCommandStack(command);
      });
      expect(stateControl.getCommandStack()).toEqual(commands);
    });
    test("should erase", function () {
      var commands = ["1", "2", "3", "4"].map(function (id) {
        return { id: id };
      });
      commands.forEach(function (command) {
        return stateControl.updateCommandStack(command);
      });
      stateControl.undo();
      stateControl.undo();
      stateControl.updateCommandStack({ id: "5" });
      expect(stateControl.getCommandStack()).toEqual([{ id: "1" }, { id: "2" }, { id: "5" }]);
    });
  });
  describe("undo::StateControl", function () {
    test("shouldn't undo an empty command stack", function () {
      stateControl.undo();
      expect(stateControl.getCurrentCommand()).toBeUndefined();
    });
    test("should undo to previous command and maintain command stack", function () {
      var commands = ["1", "2", "3", "4"].map(function (id) {
        return { id: id };
      });
      commands.forEach(function (command) {
        return stateControl.updateCommandStack(command);
      });
      ["4", "3", "2", "1"]
        .map(function (id) {
          return { id: id };
        })
        .forEach(function (command) {
          expect(stateControl.getCurrentCommand()).toEqual(command);
          stateControl.undo();
        });
      expect(stateControl.getCurrentCommand()).toBeUndefined();
      expect(stateControl.getCommandStack()).toEqual(commands);
    });
  });
  describe("redo::StateControl", function () {
    test("shouldn't redo an empty command stack", function () {
      stateControl.redo();
      expect(stateControl.getCurrentCommand()).toBeUndefined();
    });
    test("should redo to the next possible command on the command stack", function () {
      var commands = ["1", "2", "3", "4"].map(function (id) {
        return { id: id };
      });
      commands.forEach(function (command) {
        return stateControl.updateCommandStack(command);
      });
      commands.forEach(function (command) {
        return stateControl.undo();
      });
      expect(stateControl.getCurrentCommand()).toBeUndefined();
      commands.forEach(function (command) {
        stateControl.redo();
        expect(stateControl.getCurrentCommand()).toEqual(command);
      });
      stateControl.redo();
      expect(stateControl.getCurrentCommand()).toEqual(commands.pop());
    });
  });
  describe("subscribe::StateControl", function () {
    var isDirty = false;
    var setIsDirty = function (newState) {
      isDirty = newState;
    };
    test("should update the state when a change occurs", function () {
      stateControl.subscribe(setIsDirty);
      expect(stateControl.isDirty()).toBeFalsy();
      stateControl.updateCommandStack({ id: "1" });
      expect(stateControl.isDirty()).toBeTruthy();
      expect(isDirty).toBeTruthy();
      stateControl.setSavedCommand();
      expect(stateControl.isDirty()).toBeFalsy();
      expect(isDirty).toBeFalsy();
    });
  });
  describe("unsubscribe::StateControl", function () {
    var isDirty = false;
    var setIsDirty = function (newState) {
      isDirty = newState;
    };
    test("should unsubscribe and make inconsistent data", function () {
      stateControl.subscribe(setIsDirty);
      stateControl.updateCommandStack({ id: "1" });
      stateControl.unsubscribe(setIsDirty);
      stateControl.setSavedCommand();
      expect(stateControl.isDirty()).toBeFalsy();
      expect(isDirty).toBeTruthy();
    });
  });
  describe("complete workflow", function () {
    test("shouldn't redo an empty command stack", function () {
      stateControl.updateCommandStack({ id: "1" });
      stateControl.updateCommandStack({ id: "2" });
      expect(stateControl.isDirty()).toBeTruthy();
      stateControl.setSavedCommand();
      expect(stateControl.isDirty()).toBeFalsy();
      stateControl.undo();
      expect(stateControl.isDirty()).toBeTruthy();
      stateControl.redo();
      expect(stateControl.isDirty()).toBeFalsy();
      expect(stateControl.getCommandStack()).toEqual([{ id: "1" }, { id: "2" }]);
      stateControl.undo();
      expect(stateControl.getCurrentCommand()).toEqual({ id: "1" });
      stateControl.updateCommandStack({ id: "3" });
      expect(stateControl.getCommandStack()).toEqual([{ id: "1" }, { id: "3" }]);
      stateControl.redo();
      expect(stateControl.getCurrentCommand()).toEqual({ id: "3" });
    });
  });
});
//# sourceMappingURL=StateControl.test.js.map
