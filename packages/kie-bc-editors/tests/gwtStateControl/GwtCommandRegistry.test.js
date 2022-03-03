"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gwtStateControl_1 = require("@kie-tools/kie-bc-editors/dist/common/gwtStateControl");
var common_1 = require("@kie-tools-core/envelope-bus/dist-tests/common");
var Command = (function () {
  function Command(id) {
    this.id = id;
  }
  Object.defineProperty(Command.prototype, "getId", {
    get: function () {
      return this.id;
    },
    enumerable: false,
    configurable: true,
  });
  return Command;
})();
var channelApiImpl;
var registry;
var COMMAND1 = new Command("1");
var COMMAND2 = new Command("2");
var COMMAND3 = new Command("3");
var COMMAND4 = new Command("4");
describe("DefaultKogitoCommandRegistry", function () {
  beforeEach(function () {
    channelApiImpl = (0, common_1.messageBusClientApiMock)();
    registry = new gwtStateControl_1.DefaultKogitoCommandRegistry(channelApiImpl);
  });
  test("test basic add/remove elements", function () {
    registry.register(COMMAND1.getId, COMMAND1);
    expect(channelApiImpl.notifications.kogitoWorkspace_newEdit.send).toBeCalledWith(
      expect.objectContaining({ id: "1" })
    );
    registry.register(COMMAND2.getId, COMMAND2);
    expect(channelApiImpl.notifications.kogitoWorkspace_newEdit.send).toBeCalledWith(
      expect.objectContaining({ id: "2" })
    );
    registry.register(COMMAND3.getId, COMMAND3);
    expect(channelApiImpl.notifications.kogitoWorkspace_newEdit.send).toBeCalledWith(
      expect.objectContaining({ id: "3" })
    );
    registry.register(COMMAND4.getId, COMMAND4);
    expect(channelApiImpl.notifications.kogitoWorkspace_newEdit.send).toBeCalledWith(
      expect.objectContaining({ id: "4" })
    );
    expect(channelApiImpl.notifications.kogitoWorkspace_newEdit.send).toBeCalledTimes(4);
    expect(registry.getCommands()).toHaveLength(4);
    expect(registry.getCommands()).toContain(COMMAND1);
    expect(registry.getCommands()).toContain(COMMAND2);
    expect(registry.getCommands()).toContain(COMMAND3);
    expect(registry.getCommands()).toContain(COMMAND4);
    expect(registry.isEmpty()).toBeFalsy();
    expect(registry.peek()).toBe(COMMAND4);
    expect(registry.getCommands()).toHaveLength(4);
    expect(registry.pop()).toBe(COMMAND4);
    expect(registry.getCommands()).toHaveLength(3);
    expect(registry.getCommands()).toContain(COMMAND1);
    expect(registry.getCommands()).toContain(COMMAND2);
    expect(registry.getCommands()).toContain(COMMAND3);
    expect(registry.isEmpty()).toBeFalsy();
    expect(registry.pop()).toBe(COMMAND3);
    expect(registry.getCommands()).toHaveLength(2);
    expect(registry.getCommands()).toContain(COMMAND1);
    expect(registry.getCommands()).toContain(COMMAND2);
    expect(registry.isEmpty()).toBeFalsy();
    registry.clear();
    expect(registry.getCommands()).toHaveLength(0);
    expect(registry.isEmpty()).toBeTruthy();
  });
  test("test adding reaching max elements", function () {
    registry.setMaxSize(2);
    registry.register(COMMAND1.getId, COMMAND1);
    expect(channelApiImpl.notifications.kogitoWorkspace_newEdit.send).toBeCalledWith(
      expect.objectContaining({ id: "1" })
    );
    registry.register(COMMAND2.getId, COMMAND2);
    expect(channelApiImpl.notifications.kogitoWorkspace_newEdit.send).toBeCalledWith(
      expect.objectContaining({ id: "2" })
    );
    expect(channelApiImpl.notifications.kogitoWorkspace_newEdit.send).toBeCalledTimes(2);
    expect(registry.getCommands()).toHaveLength(2);
    expect(registry.getCommands()).toContain(COMMAND1);
    expect(registry.getCommands()).toContain(COMMAND2);
    expect(registry.isEmpty()).toBeFalsy();
    registry.register(COMMAND3.getId, COMMAND3);
    expect(registry.getCommands()).toHaveLength(2);
    expect(registry.getCommands()).toContain(COMMAND3);
    expect(registry.getCommands()).toContain(COMMAND2);
    expect(registry.isEmpty()).toBeFalsy();
    registry.register(COMMAND4.getId, COMMAND4);
    expect(registry.getCommands()).toHaveLength(2);
    expect(registry.getCommands()).toContain(COMMAND3);
    expect(registry.getCommands()).toContain(COMMAND4);
    expect(registry.isEmpty()).toBeFalsy();
  });
  test("test basic adding elements after remove", function () {
    registry.register(COMMAND1.getId, COMMAND1);
    expect(channelApiImpl.notifications.kogitoWorkspace_newEdit.send).toBeCalledWith(
      expect.objectContaining({ id: "1" })
    );
    registry.register(COMMAND2.getId, COMMAND2);
    expect(channelApiImpl.notifications.kogitoWorkspace_newEdit.send).toBeCalledWith(
      expect.objectContaining({ id: "2" })
    );
    expect(channelApiImpl.notifications.kogitoWorkspace_newEdit.send).toBeCalledTimes(2);
    expect(registry.getCommands()).toHaveLength(2);
    expect(registry.getCommands()).toContain(COMMAND1);
    expect(registry.getCommands()).toContain(COMMAND2);
    expect(registry.isEmpty()).toBeFalsy();
    expect(registry.pop()).toBe(COMMAND2);
    expect(registry.pop()).toBe(COMMAND1);
    expect(registry.getUndoneCommands()).toHaveLength(2);
    expect(registry.getUndoneCommands()).toContain(COMMAND1.getId);
    expect(registry.getUndoneCommands()).toContain(COMMAND2.getId);
    expect(registry.isEmpty()).toBeTruthy();
    registry.register(COMMAND2.getId, COMMAND2);
    expect(channelApiImpl.notifications.kogitoWorkspace_newEdit.send).toBeCalledTimes(2);
    expect(registry.getCommands()).toHaveLength(1);
    expect(registry.getCommands()).toContain(COMMAND2);
    expect(registry.getUndoneCommands()).toHaveLength(1);
    expect(registry.getUndoneCommands()).toContain(COMMAND1.getId);
    expect(registry.isEmpty()).toBeFalsy();
    registry.register(COMMAND1.getId, COMMAND1);
    expect(channelApiImpl.notifications.kogitoWorkspace_newEdit.send).toBeCalledTimes(2);
    expect(registry.getCommands()).toHaveLength(2);
    expect(registry.getCommands()).toContain(COMMAND1);
    expect(registry.getCommands()).toContain(COMMAND2);
    expect(registry.getUndoneCommands()).toHaveLength(0);
    expect(registry.isEmpty()).toBeFalsy();
    registry.register(COMMAND3.getId, COMMAND3);
    expect(channelApiImpl.notifications.kogitoWorkspace_newEdit.send).toBeCalledWith(
      expect.objectContaining({ id: "3" })
    );
    expect(channelApiImpl.notifications.kogitoWorkspace_newEdit.send).toBeCalledTimes(3);
    expect(registry.getCommands()).toHaveLength(3);
    expect(registry.getCommands()).toContain(COMMAND1);
    expect(registry.getCommands()).toContain(COMMAND2);
    expect(registry.getCommands()).toContain(COMMAND3);
  });
});
//# sourceMappingURL=GwtCommandRegistry.test.js.map
