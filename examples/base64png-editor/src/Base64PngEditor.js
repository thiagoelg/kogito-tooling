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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base64PngEditor = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var react_1 = require("react");
var react_core_1 = require("@patternfly/react-core");
var api_1 = require("@kie-tools-core/guided-tour/dist/api");
var cubes_icon_1 = require("@patternfly/react-icons/dist/js/icons/cubes-icon");
require("./styles.scss");
var Base64PngStateControl_1 = require("./Base64PngStateControl");
var INITIAL_CONTRAST = "100";
var INITIAL_BRIGHTNESS = "100";
var INITIAL_SATURATE = "100";
var INITIAL_SEPIA = "0";
var INITIAL_GRAYSCALE = "0";
var INITIAL_INVERT = "0";
exports.Base64PngEditor = React.forwardRef(function (props, forwardedRef) {
  var _a = __read((0, react_1.useState)(""), 2),
    editorContent = _a[0],
    setEditorContent = _a[1];
  var _b = __read((0, react_1.useState)(""), 2),
    originalContent = _b[0],
    setOriginalContent = _b[1];
  var stateControl = (0, react_1.useMemo)(
    function () {
      return new Base64PngStateControl_1.Base64PngStateControl();
    },
    [originalContent]
  );
  var getContent = (0, react_1.useCallback)(
    function () {
      return editorContent;
    },
    [editorContent]
  );
  var setContent = (0, react_1.useCallback)(
    function (path, content) {
      setOriginalContent(content);
      updateEditorToInitialState();
    },
    [stateControl]
  );
  var getPreview = (0, react_1.useCallback)(
    function () {
      var width = imageRef.current.width;
      var height = imageRef.current.height;
      return '\n<svg version="1.1" width="'
        .concat(width, '" height="')
        .concat(height, '" viewBox="0 0 ')
        .concat(width, " ")
        .concat(
          height,
          '"\n     xmlns="http://www.w3.org/2000/svg"\n     xmlns:xlink="http://www.w3.org/1999/xlink">\n    <image width="'
        )
        .concat(width, '" height="')
        .concat(height, '" xlink:href="data:image/png;base64,')
        .concat(editorContent, '" />\n</svg>');
    },
    [editorContent]
  );
  var undo = (0, react_1.useCallback)(
    function () {
      stateControl.undo();
      updateEditorStateWithCurrentEdit(stateControl.getCurrentBase64PngEdit());
    },
    [stateControl]
  );
  var redo = (0, react_1.useCallback)(
    function () {
      stateControl.redo();
      updateEditorStateWithCurrentEdit(stateControl.getCurrentBase64PngEdit());
    },
    [stateControl]
  );
  var updateEditorStateWithCurrentEdit = (0, react_1.useCallback)(function (edit) {
    if (edit) {
      setContrast(edit.contrast);
      setBrightness(edit.brightness);
      setSaturate(edit.saturate);
      setSepia(edit.sepia);
      setGrayscale(edit.grayscale);
      setInvert(edit.invert);
    } else {
      updateEditorToInitialState();
    }
  }, []);
  var updateEditorToInitialState = (0, react_1.useCallback)(function () {
    setContrast(INITIAL_CONTRAST);
    setBrightness(INITIAL_BRIGHTNESS);
    setSaturate(INITIAL_SATURATE);
    setSepia(INITIAL_SEPIA);
    setGrayscale(INITIAL_GRAYSCALE);
    setInvert(INITIAL_INVERT);
  }, []);
  (0, react_1.useEffect)(function () {
    props.envelopeContext.channelApi.notifications.kogitoEditor_ready.send();
  }, []);
  (0, react_1.useImperativeHandle)(forwardedRef, function () {
    return {
      getContent: function () {
        return Promise.resolve(getContent());
      },
      setContent: function (path, content) {
        return Promise.resolve(setContent(path, content));
      },
      getPreview: function () {
        return Promise.resolve(getPreview());
      },
      undo: function () {
        return Promise.resolve(undo());
      },
      redo: function () {
        return Promise.resolve(redo());
      },
      getElementPosition: function (selector) {
        return Promise.resolve(api_1.DEFAULT_RECT);
      },
      validate: function () {
        return Promise.resolve([]);
      },
    };
  });
  var _c = __read((0, react_1.useState)(true), 2),
    disabled = _c[0],
    setDisabled = _c[1];
  var imageRef = (0, react_1.useRef)(null);
  var canvasRef = (0, react_1.useRef)(null);
  var _d = __read((0, react_1.useState)(INITIAL_CONTRAST), 2),
    contrast = _d[0],
    setContrast = _d[1];
  var _e = __read((0, react_1.useState)(INITIAL_BRIGHTNESS), 2),
    brightness = _e[0],
    setBrightness = _e[1];
  var _f = __read((0, react_1.useState)(INITIAL_SATURATE), 2),
    saturate = _f[0],
    setSaturate = _f[1];
  var _g = __read((0, react_1.useState)(INITIAL_SEPIA), 2),
    sepia = _g[0],
    setSepia = _g[1];
  var _h = __read((0, react_1.useState)(INITIAL_GRAYSCALE), 2),
    grayscale = _h[0],
    setGrayscale = _h[1];
  var _j = __read((0, react_1.useState)(INITIAL_INVERT), 2),
    invert = _j[0],
    setInvert = _j[1];
  var tweakContrast = (0, react_1.useCallback)(
    function (value) {
      setContrast(value);
      var command = {
        id: new Date().getTime().toString(),
        filter: "contrast("
          .concat(value, "%) brightness(")
          .concat(brightness, "%) saturate(")
          .concat(saturate, "%) sepia(")
          .concat(sepia, "%) grayscale(")
          .concat(grayscale, "%) invert(")
          .concat(invert, "%)"),
        contrast: value,
        brightness: brightness,
        saturate: saturate,
        sepia: sepia,
        grayscale: grayscale,
        invert: invert,
      };
      stateControl.updateCommandStack({ id: JSON.stringify(command) });
      props.envelopeContext.channelApi.notifications.kogitoWorkspace_newEdit.send(command);
    },
    [contrast, brightness, saturate, sepia, grayscale, invert, stateControl]
  );
  var tweakBrightness = (0, react_1.useCallback)(
    function (value) {
      setBrightness(value);
      var command = {
        id: new Date().getTime().toString(),
        filter: "contrast("
          .concat(contrast, "%) brightness(")
          .concat(value, "%) saturate(")
          .concat(saturate, "%) sepia(")
          .concat(sepia, "%) grayscale(")
          .concat(grayscale, "%) invert(")
          .concat(invert, "%)"),
        contrast: contrast,
        brightness: value,
        saturate: saturate,
        sepia: sepia,
        grayscale: grayscale,
        invert: invert,
      };
      stateControl.updateCommandStack({ id: JSON.stringify(command) });
      props.envelopeContext.channelApi.notifications.kogitoWorkspace_newEdit.send(command);
    },
    [contrast, brightness, saturate, sepia, grayscale, invert, stateControl]
  );
  var tweakSaturate = (0, react_1.useCallback)(
    function (value) {
      setSaturate(value);
      var command = {
        id: new Date().getTime().toString(),
        filter: "contrast("
          .concat(contrast, "%) brightness(")
          .concat(brightness, "%) saturate(")
          .concat(value, "%) sepia(")
          .concat(sepia, "%) grayscale(")
          .concat(grayscale, "%) invert(")
          .concat(invert, "%)"),
        contrast: contrast,
        brightness: brightness,
        saturate: value,
        sepia: sepia,
        grayscale: grayscale,
        invert: invert,
      };
      stateControl.updateCommandStack({ id: JSON.stringify(command) });
      props.envelopeContext.channelApi.notifications.kogitoWorkspace_newEdit.send(command);
    },
    [contrast, brightness, saturate, sepia, grayscale, invert, stateControl]
  );
  var tweakSepia = (0, react_1.useCallback)(
    function (value) {
      setSepia(value);
      var command = {
        id: new Date().getTime().toString(),
        filter: "contrast("
          .concat(contrast, "%) brightness(")
          .concat(brightness, "%) saturate(")
          .concat(saturate, "%) sepia(")
          .concat(value, "%) grayscale(")
          .concat(grayscale, "%) invert(")
          .concat(invert, "%)"),
        contrast: contrast,
        brightness: brightness,
        saturate: saturate,
        sepia: value,
        grayscale: grayscale,
        invert: invert,
      };
      stateControl.updateCommandStack({ id: JSON.stringify(command) });
      props.envelopeContext.channelApi.notifications.kogitoWorkspace_newEdit.send(command);
    },
    [contrast, brightness, saturate, sepia, grayscale, invert, stateControl]
  );
  var tweakGrayscale = (0, react_1.useCallback)(
    function (value) {
      setGrayscale(value);
      var command = {
        id: new Date().getTime().toString(),
        filter: "contrast("
          .concat(contrast, "%) brightness(")
          .concat(brightness, "%) saturate(")
          .concat(saturate, "%) sepia(")
          .concat(sepia, "%) grayscale(")
          .concat(value, "%) invert(")
          .concat(invert, "%)"),
        contrast: contrast,
        brightness: brightness,
        saturate: saturate,
        sepia: sepia,
        grayscale: value,
        invert: invert,
      };
      stateControl.updateCommandStack({ id: JSON.stringify(command) });
      props.envelopeContext.channelApi.notifications.kogitoWorkspace_newEdit.send(command);
    },
    [contrast, brightness, saturate, sepia, grayscale, invert, stateControl]
  );
  var tweakInvert = (0, react_1.useCallback)(
    function (value) {
      setInvert(value);
      var command = {
        id: new Date().getTime().toString(),
        filter: "contrast("
          .concat(contrast, "%) brightness(")
          .concat(brightness, "%) saturate(")
          .concat(saturate, "%) sepia(")
          .concat(sepia, "%) grayscale(")
          .concat(grayscale, "%) invert(")
          .concat(value, "%)"),
        contrast: contrast,
        brightness: brightness,
        saturate: saturate,
        sepia: sepia,
        grayscale: grayscale,
        invert: value,
      };
      stateControl.updateCommandStack({ id: JSON.stringify(command) });
      props.envelopeContext.channelApi.notifications.kogitoWorkspace_newEdit.send(command);
    },
    [contrast, brightness, saturate, sepia, grayscale, invert, stateControl]
  );
  (0, react_1.useEffect)(
    function () {
      var invertId = props.envelopeContext.services.keyboardShortcuts.registerKeyPress(
        "i",
        "Edit | Invert Image",
        function () {
          return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
              if (!disabled && invert === "100") {
                tweakInvert("0");
              } else if (!disabled && invert === "0") {
                tweakInvert("100");
              }
              return [2];
            });
          });
        }
      );
      return function () {
        props.envelopeContext.services.keyboardShortcuts.deregister(invertId);
      };
    },
    [disabled, invert]
  );
  (0, react_1.useEffect)(
    function () {
      var _a, _b;
      var ctx = canvasRef.current.getContext("2d");
      ctx.filter =
        (_b = (_a = stateControl.getCurrentBase64PngEdit()) === null || _a === void 0 ? void 0 : _a.filter) !== null &&
        _b !== void 0
          ? _b
          : "contrast("
              .concat(contrast, "%) brightness(")
              .concat(brightness, "%) saturate(")
              .concat(saturate, "%) sepia(")
              .concat(sepia, "%) grayscale(")
              .concat(grayscale, "%) invert(")
              .concat(invert, "%)");
      ctx.drawImage(imageRef.current, 0, 0);
      setEditorContent(canvasRef.current.toDataURL().split(",")[1]);
    },
    [contrast, brightness, saturate, sepia, grayscale, invert, stateControl]
  );
  (0, react_1.useEffect)(function () {
    var ctx = canvasRef.current.getContext("2d");
    canvasRef.current.width = 0;
    canvasRef.current.height = 0;
    imageRef.current.onload = function () {
      canvasRef.current.width = imageRef.current.width;
      canvasRef.current.height = imageRef.current.height;
      ctx.drawImage(imageRef.current, 0, 0);
      setEditorContent(canvasRef.current.toDataURL().split(",")[1]);
      setDisabled(false);
    };
    return function () {
      imageRef.current.onload = null;
    };
  }, []);
  return (0, jsx_runtime_1.jsx)(
    react_core_1.Page,
    {
      children: (0, jsx_runtime_1.jsxs)(
        "div",
        __assign(
          { className: "base64png-editor--main" },
          {
            children: [
              (0, jsx_runtime_1.jsxs)(
                "div",
                __assign(
                  { className: "base64png-editor--viewport" },
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(
                        "img",
                        {
                          ref: imageRef,
                          className: "base64png-editor--image",
                          src: "data:image/png;base64,".concat(originalContent),
                          alt: "Original",
                        },
                        void 0
                      ),
                      disabled &&
                        (0, jsx_runtime_1.jsxs)(
                          react_core_1.EmptyState,
                          {
                            children: [
                              (0, jsx_runtime_1.jsx)(
                                react_core_1.EmptyStateIcon,
                                { icon: cubes_icon_1.default },
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                react_core_1.Title,
                                __assign({ headingLevel: "h5", size: "4xl" }, { children: "Empty image" }),
                                void 0
                              ),
                            ],
                          },
                          void 0
                        ),
                      (0, jsx_runtime_1.jsx)(
                        "canvas",
                        { ref: canvasRef, className: "base64png-editor--canvas" },
                        void 0
                      ),
                    ],
                  }
                ),
                void 0
              ),
              (0, jsx_runtime_1.jsx)(
                "div",
                __assign(
                  { className: "base64png-editor--tweaks" },
                  {
                    children: (0, jsx_runtime_1.jsx)(
                      react_core_1.Nav,
                      __assign(
                        { "aria-label": "Image tweaker" },
                        {
                          children: (0, jsx_runtime_1.jsxs)(
                            react_core_1.NavList,
                            {
                              children: [
                                (0, jsx_runtime_1.jsxs)(
                                  react_core_1.NavItem,
                                  __assign(
                                    { className: "base64png-editor--tweaks-nav-item", itemId: 0 },
                                    {
                                      children: [
                                        (0, jsx_runtime_1.jsx)("p", { children: "Contrast" }, void 0),
                                        (0, jsx_runtime_1.jsxs)(
                                          "div",
                                          __assign(
                                            { className: "base64png-editor--tweaks-nav-item-div" },
                                            {
                                              children: [
                                                (0, jsx_runtime_1.jsx)(
                                                  "input",
                                                  {
                                                    disabled: disabled,
                                                    className: "base64png-editor--tweaks-nav-item-input",
                                                    type: "range",
                                                    min: "0",
                                                    max: "200",
                                                    value: contrast,
                                                    onChange: function (e) {
                                                      return tweakContrast(e.target.value);
                                                    },
                                                  },
                                                  void 0
                                                ),
                                                (0, jsx_runtime_1.jsx)(
                                                  "span",
                                                  __assign(
                                                    { style: { width: "40px", textAlign: "right" } },
                                                    { children: contrast }
                                                  ),
                                                  void 0
                                                ),
                                              ],
                                            }
                                          ),
                                          void 0
                                        ),
                                      ],
                                    }
                                  ),
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsxs)(
                                  react_core_1.NavItem,
                                  __assign(
                                    { className: "base64png-editor--tweaks-nav-item", itemId: 1 },
                                    {
                                      children: [
                                        (0, jsx_runtime_1.jsx)("p", { children: "Brightness" }, void 0),
                                        (0, jsx_runtime_1.jsxs)(
                                          "div",
                                          __assign(
                                            { className: "base64png-editor--tweaks-nav-item-div" },
                                            {
                                              children: [
                                                (0, jsx_runtime_1.jsx)(
                                                  "input",
                                                  {
                                                    disabled: disabled,
                                                    className: "base64png-editor--tweaks-nav-item-input",
                                                    type: "range",
                                                    min: "0",
                                                    max: "200",
                                                    value: brightness,
                                                    onChange: function (e) {
                                                      return tweakBrightness(e.target.value);
                                                    },
                                                  },
                                                  void 0
                                                ),
                                                (0, jsx_runtime_1.jsx)(
                                                  "span",
                                                  __assign(
                                                    { className: "base64png-editor--tweaks-nav-item-span" },
                                                    { children: brightness }
                                                  ),
                                                  void 0
                                                ),
                                              ],
                                            }
                                          ),
                                          void 0
                                        ),
                                      ],
                                    }
                                  ),
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsxs)(
                                  react_core_1.NavItem,
                                  __assign(
                                    { className: "base64png-editor--tweaks-nav-item", itemId: 4 },
                                    {
                                      children: [
                                        (0, jsx_runtime_1.jsx)("p", { children: "Saturate" }, void 0),
                                        (0, jsx_runtime_1.jsxs)(
                                          "div",
                                          __assign(
                                            { className: "base64png-editor--tweaks-nav-item-div" },
                                            {
                                              children: [
                                                (0, jsx_runtime_1.jsx)(
                                                  "input",
                                                  {
                                                    disabled: disabled,
                                                    className: "base64png-editor--tweaks-nav-item-input",
                                                    type: "range",
                                                    min: "0",
                                                    max: "200",
                                                    value: saturate,
                                                    onChange: function (e) {
                                                      return tweakSaturate(e.target.value);
                                                    },
                                                  },
                                                  void 0
                                                ),
                                                (0, jsx_runtime_1.jsx)(
                                                  "span",
                                                  __assign(
                                                    { className: "base64png-editor--tweaks-nav-item-span" },
                                                    { children: saturate }
                                                  ),
                                                  void 0
                                                ),
                                              ],
                                            }
                                          ),
                                          void 0
                                        ),
                                      ],
                                    }
                                  ),
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsxs)(
                                  react_core_1.NavItem,
                                  __assign(
                                    { className: "base64png-editor--tweaks-nav-item", itemId: 2 },
                                    {
                                      children: [
                                        (0, jsx_runtime_1.jsx)("p", { children: "Sepia" }, void 0),
                                        (0, jsx_runtime_1.jsxs)(
                                          "div",
                                          __assign(
                                            { className: "base64png-editor--tweaks-nav-item-div" },
                                            {
                                              children: [
                                                (0, jsx_runtime_1.jsx)(
                                                  "input",
                                                  {
                                                    disabled: disabled,
                                                    className: "base64png-editor--tweaks-nav-item-input",
                                                    type: "range",
                                                    min: "0",
                                                    max: "100",
                                                    value: sepia,
                                                    onChange: function (e) {
                                                      return tweakSepia(e.target.value);
                                                    },
                                                  },
                                                  void 0
                                                ),
                                                (0, jsx_runtime_1.jsx)(
                                                  "span",
                                                  __assign(
                                                    { className: "base64png-editor--tweaks-nav-item-span" },
                                                    { children: sepia }
                                                  ),
                                                  void 0
                                                ),
                                              ],
                                            }
                                          ),
                                          void 0
                                        ),
                                      ],
                                    }
                                  ),
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsxs)(
                                  react_core_1.NavItem,
                                  __assign(
                                    { className: "base64png-editor--tweaks-nav-item", itemId: 3 },
                                    {
                                      children: [
                                        (0, jsx_runtime_1.jsx)("p", { children: "Grayscale" }, void 0),
                                        (0, jsx_runtime_1.jsxs)(
                                          "div",
                                          __assign(
                                            { className: "base64png-editor--tweaks-nav-item-div" },
                                            {
                                              children: [
                                                (0, jsx_runtime_1.jsx)(
                                                  "input",
                                                  {
                                                    disabled: disabled,
                                                    className: "base64png-editor--tweaks-nav-item-input",
                                                    type: "range",
                                                    min: "0",
                                                    max: "100",
                                                    value: grayscale,
                                                    onChange: function (e) {
                                                      return tweakGrayscale(e.target.value);
                                                    },
                                                  },
                                                  void 0
                                                ),
                                                (0, jsx_runtime_1.jsx)(
                                                  "span",
                                                  __assign(
                                                    { className: "base64png-editor--tweaks-nav-item-span" },
                                                    { children: grayscale }
                                                  ),
                                                  void 0
                                                ),
                                              ],
                                            }
                                          ),
                                          void 0
                                        ),
                                      ],
                                    }
                                  ),
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)(
                                  react_core_1.NavItem,
                                  __assign(
                                    { itemId: 5 },
                                    {
                                      children: (0, jsx_runtime_1.jsxs)(
                                        "div",
                                        __assign(
                                          { className: "base64png-editor--tweaks-nav-item" },
                                          {
                                            children: [
                                              (0, jsx_runtime_1.jsx)("p", { children: "Invert" }, void 0),
                                              (0, jsx_runtime_1.jsx)(
                                                react_core_1.Switch,
                                                {
                                                  id: "invert-switch",
                                                  isDisabled: disabled,
                                                  isChecked: invert === "100",
                                                  onChange: function (value) {
                                                    return tweakInvert(value ? "100" : "0");
                                                  },
                                                },
                                                void 0
                                              ),
                                            ],
                                          }
                                        ),
                                        void 0
                                      ),
                                    }
                                  ),
                                  void 0
                                ),
                                stateControl.isDirty() &&
                                  (0, jsx_runtime_1.jsx)(
                                    "div",
                                    __assign(
                                      { style: { display: "flex", alignItems: "center", padding: "20px" } },
                                      {
                                        children: (0, jsx_runtime_1.jsx)(
                                          "p",
                                          __assign({ style: { color: "red" } }, { children: "Image was Edited!" }),
                                          void 0
                                        ),
                                      }
                                    ),
                                    void 0
                                  ),
                              ],
                            },
                            void 0
                          ),
                        }
                      ),
                      void 0
                    ),
                  }
                ),
                void 0
              ),
            ],
          }
        ),
        void 0
      ),
    },
    void 0
  );
});
//# sourceMappingURL=Base64PngEditor.js.map
