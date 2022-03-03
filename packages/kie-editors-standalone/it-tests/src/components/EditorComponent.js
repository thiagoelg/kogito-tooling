"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var FileLoader_1 = require("./FileLoader");
var api_1 = require("@kie-tools-core/workspace/dist/api");
var EditorComponent = function (props) {
  var _a;
  var _b = __read((0, react_1.useState)(false), 2),
    isDirty = _b[0],
    setDirty = _b[1];
  var editorRef = (0, react_1.useRef)(null);
  var _c = __read((0, react_1.useState)((_a = props.defaultModelName) !== null && _a !== void 0 ? _a : "Untitled"), 2),
    modelName = _c[0],
    setModelName = _c[1];
  var _d = __read((0, react_1.useState)([]), 2),
    files = _d[0],
    setFiles = _d[1];
  var editorContainerDivRef = (0, react_1.useRef)(null);
  (0, react_1.useEffect)(
    function () {
      var e = props.openEditor({
        container: editorContainerDivRef.current,
        initialContent: props.initialContent,
        readOnly: props.readOnly,
        origin: props.origin,
        resources: props.resources,
      });
      e.subscribeToContentChanges(setDirty);
      editorRef.current = e;
      return function () {
        e.close();
      };
    },
    [props.id, props.readOnly, props.origin, props.resources, props.initialContent]
  );
  var setEditorContents = (0, react_1.useCallback)(function (resource) {
    var _a, _b;
    (_a = editorRef.current) === null || _a === void 0
      ? void 0
      : _a.setContent(resource.value.path, (_b = resource.value.content) !== null && _b !== void 0 ? _b : "");
    setModelName(resource.name);
  }, []);
  var editorUndo = function () {
    var _a;
    (_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.undo();
  };
  var editorRedo = function () {
    var _a;
    (_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.redo();
  };
  var editorSave = function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var content;
      var _a, _b;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            return [4, (_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.getContent()];
          case 1:
            content = _c.sent();
            setFiles(
              __spreadArray(
                __spreadArray([], __read(files), false),
                [{ name: modelName, value: { path: modelName, type: api_1.ContentType.TEXT, content: content } }],
                false
              )
            );
            (_b = editorRef.current) === null || _b === void 0 ? void 0 : _b.markAsSaved();
            return [2];
        }
      });
    });
  };
  var downloadSvg = function () {
    var _a;
    (_a = editorRef.current) === null || _a === void 0
      ? void 0
      : _a.getPreview().then(function (content) {
          var elem = window.document.createElement("a");
          elem.href = "data:text/svg+xml;charset=utf-8," + encodeURIComponent(content);
          elem.download = modelName + ".svg";
          document.body.appendChild(elem);
          elem.click();
          document.body.removeChild(elem);
        });
  };
  var downloadXml = function () {
    var _a;
    (_a = editorRef.current) === null || _a === void 0
      ? void 0
      : _a.getContent().then(function (content) {
          var elem = window.document.createElement("a");
          elem.href = "data:text/plain;charset=utf-8," + encodeURIComponent(content);
          elem.download = modelName;
          document.body.appendChild(elem);
          elem.click();
          document.body.removeChild(elem);
        });
  };
  var buttons = (0, jsx_runtime_1.jsxs)(
    "div",
    __assign(
      { id: "buttons", style: { flex: "0 1 auto" } },
      {
        children: [
          (0, jsx_runtime_1.jsx)(
            "button",
            __assign({ id: "undo", onClick: editorUndo, disabled: !isDirty }, { children: "undo" }),
            void 0
          ),
          (0, jsx_runtime_1.jsx)(
            "button",
            __assign({ id: "redo", onClick: editorRedo, disabled: !isDirty }, { children: "redo" }),
            void 0
          ),
          (0, jsx_runtime_1.jsx)(
            "button",
            __assign({ id: "save", onClick: editorSave, disabled: !isDirty }, { children: "save" }),
            void 0
          ),
          (0, jsx_runtime_1.jsx)(
            "button",
            __assign({ id: "xml", onClick: downloadXml }, { children: "Download XML" }),
            void 0
          ),
          (0, jsx_runtime_1.jsx)(
            "button",
            __assign({ id: "svg", onClick: downloadSvg }, { children: "Download SVG" }),
            void 0
          ),
        ],
      }
    ),
    void 0
  );
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        (0, jsx_runtime_1.jsx)(
          FileLoader_1.FileLoader,
          {
            allowDownload: true,
            allowUpload: true,
            onView: setEditorContents,
            files: files,
            setFiles: setFiles,
            ouiaId: props.id,
          },
          void 0
        ),
        isDirty &&
          (0, jsx_runtime_1.jsx)(
            "div",
            __assign({ id: "dirty", "data-ouia-component-type": "content-dirty" }, { children: "Unsaved changes." }),
            void 0
          ),
        buttons,
        (0, jsx_runtime_1.jsx)(
          "div",
          {
            id: props.id,
            "data-ouia-component-type": "editor",
            "data-ouia-component-id": props.id,
            ref: editorContainerDivRef,
            style: { flex: "1 1 auto" },
          },
          void 0
        ),
      ],
    },
    void 0
  );
};
exports.EditorComponent = EditorComponent;
//# sourceMappingURL=EditorComponent.js.map
