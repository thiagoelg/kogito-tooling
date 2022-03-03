"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gwtStateControl_1 = require("@kie-tools/kie-bc-editors/dist/common/gwtStateControl");
var innerMessageHandler = jest.fn();
var messageBus;
var stateControlService;
var stateControlApi;
describe("StateControl", function () {
  beforeEach(function () {
    stateControlService = new gwtStateControl_1.GwtStateControlService();
    messageBus = new innerMessageHandler();
    stateControlApi = stateControlService.exposeApi(messageBus);
  });
  test("test undo redo without commands", function () {
    expect(function () {
      return stateControlService.undo();
    }).not.toThrow();
    expect(function () {
      return stateControlService.redo();
    }).not.toThrow();
  });
  test("test undo redo with commands", function () {
    var undoCommand = jest.fn();
    var redoCommand = jest.fn();
    stateControlApi.setUndoCommand(undoCommand);
    stateControlApi.setRedoCommand(redoCommand);
    stateControlService.undo();
    expect(undoCommand).toBeCalled();
    stateControlService.redo();
    expect(redoCommand).toBeCalled();
  });
});
//# sourceMappingURL=GwtStateControl.test.js.map
