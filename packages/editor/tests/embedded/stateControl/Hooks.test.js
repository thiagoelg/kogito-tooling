"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_hooks_1 = require("@testing-library/react-hooks");
var embedded_1 = require("@kie-tools-core/editor/dist/embedded");
var channel_1 = require("@kie-tools-core/editor/dist/channel");
describe("useDirtyState", function () {
  var editorRef;
  var stateControl;
  beforeEach(function () {
    stateControl = new channel_1.StateControl();
    editorRef = {
      iframeRef: React.createRef(),
      isReady: true,
      getStateControl: function () {
        return stateControl;
      },
      getEnvelopeServer: function () {
        return {};
      },
      undo: jest.fn(),
      redo: jest.fn(),
      getContent: jest.fn(),
      getPreview: jest.fn(),
      setContent: jest.fn(),
      validate: jest.fn(),
      getElementPosition: jest.fn(),
    };
  });
  describe("false", function () {
    test("after initialization", function () {
      var result = (0, react_hooks_1.renderHook)(function () {
        return (0, embedded_1.useDirtyState)(editorRef);
      }).result;
      expect(result.current).toBeFalsy();
    });
    test("redo without any command to be redone", function () {
      var result = (0, react_hooks_1.renderHook)(function () {
        return (0, embedded_1.useDirtyState)(editorRef);
      }).result;
      (0, react_hooks_1.act)(function () {
        stateControl.redo();
      });
      expect(result.current).toBeFalsy();
    });
    test("add command and save it", function () {
      var result = (0, react_hooks_1.renderHook)(function () {
        return (0, embedded_1.useDirtyState)(editorRef);
      }).result;
      (0, react_hooks_1.act)(function () {
        stateControl.updateCommandStack({ id: "1" });
        stateControl.setSavedCommand();
      });
      expect(result.current).toBeFalsy();
    });
    test("add command and undo it", function () {
      var result = (0, react_hooks_1.renderHook)(function () {
        return (0, embedded_1.useDirtyState)(editorRef);
      }).result;
      (0, react_hooks_1.act)(function () {
        stateControl.updateCommandStack({ id: "1" });
        stateControl.undo();
      });
      expect(result.current).toBeFalsy();
    });
    test("add command, save it, undo and redo", function () {
      var result = (0, react_hooks_1.renderHook)(function () {
        return (0, embedded_1.useDirtyState)(editorRef);
      }).result;
      (0, react_hooks_1.act)(function () {
        stateControl.updateCommandStack({ id: "1" });
        stateControl.setSavedCommand();
        stateControl.undo();
        stateControl.redo();
      });
      expect(result.current).toBeFalsy();
    });
  });
  describe("true", function () {
    test("add command without saving", function () {
      var result = (0, react_hooks_1.renderHook)(function () {
        return (0, embedded_1.useDirtyState)(editorRef);
      }).result;
      (0, react_hooks_1.act)(function () {
        stateControl.updateCommandStack({ id: "1" });
      });
      expect(result.current).toBeTruthy();
    });
    test("add command, undo and redo", function () {
      var result = (0, react_hooks_1.renderHook)(function () {
        return (0, embedded_1.useDirtyState)(editorRef);
      }).result;
      (0, react_hooks_1.act)(function () {
        stateControl.updateCommandStack({ id: "1" });
        stateControl.undo();
        stateControl.redo();
      });
      expect(result.current).toBeTruthy();
    });
    test("add command, save it, undo and new command", function () {
      var result = (0, react_hooks_1.renderHook)(function () {
        return (0, embedded_1.useDirtyState)(editorRef);
      }).result;
      (0, react_hooks_1.act)(function () {
        stateControl.updateCommandStack({ id: "1" });
        stateControl.setSavedCommand();
        stateControl.undo();
        stateControl.updateCommandStack({ id: "2" });
      });
      expect(result.current).toBeTruthy();
    });
  });
});
//# sourceMappingURL=Hooks.test.js.map
