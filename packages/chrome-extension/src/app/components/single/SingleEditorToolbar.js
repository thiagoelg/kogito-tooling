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
exports.SingleEditorToolbar = exports.ALERT_AUTO_CLOSE_TIMEOUT = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var GlobalContext_1 = require("../common/GlobalContext");
var i18n_1 = require("../../i18n");
exports.ALERT_AUTO_CLOSE_TIMEOUT = 3000;
function SingleEditorToolbar(props) {
  var globals = (0, GlobalContext_1.useGlobals)();
  var _a = __read((0, react_1.useState)(false), 2),
    copyLinkSuccessAlertVisible = _a[0],
    setCopyLinkSuccessAlertVisible = _a[1];
  var linkToExternalEditorTextAreaRef = (0, react_1.useRef)(null);
  var copyLinkSuccessAlertRef = (0, react_1.useRef)(null);
  var i18n = (0, i18n_1.useChromeExtensionI18n)().i18n;
  var goFullScreen = (0, react_1.useCallback)(function (e) {
    e.preventDefault();
    props.onFullScreen();
  }, []);
  var seeAsSource = (0, react_1.useCallback)(function (e) {
    e.preventDefault();
    props.onSeeAsSource();
  }, []);
  var seeAsDiagram = (0, react_1.useCallback)(function (e) {
    e.preventDefault();
    props.onSeeAsDiagram();
  }, []);
  var openInExternalEditor = (0, react_1.useCallback)(function (e) {
    var _a;
    e.preventDefault();
    (_a = props.onOpenInExternalEditor) === null || _a === void 0 ? void 0 : _a.call(props);
  }, []);
  var copyLinkToExternalEditor = (0, react_1.useCallback)(function (e) {
    var _a;
    e.preventDefault();
    (_a = linkToExternalEditorTextAreaRef.current) === null || _a === void 0 ? void 0 : _a.select();
    if (document.execCommand("copy")) {
      setCopyLinkSuccessAlertVisible(true);
    }
    e.target.focus();
  }, []);
  var closeCopyLinkSuccessAlert = (0, react_1.useCallback)(function () {
    setCopyLinkSuccessAlertVisible(false);
  }, []);
  (0, react_1.useEffect)(
    function () {
      if (closeCopyLinkSuccessAlert) {
        var autoCloseCopyLinkSuccessAlert_1 = setTimeout(closeCopyLinkSuccessAlert, exports.ALERT_AUTO_CLOSE_TIMEOUT);
        return function () {
          return clearInterval(autoCloseCopyLinkSuccessAlert_1);
        };
      }
      return function () {};
    },
    [copyLinkSuccessAlertVisible]
  );
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        (0, jsx_runtime_1.jsxs)(
          "div",
          __assign(
            { style: { display: "flex" } },
            {
              children: [
                (0, jsx_runtime_1.jsx)(
                  "textarea",
                  {
                    ref: linkToExternalEditorTextAreaRef,
                    defaultValue: props.linkToExternalEditor,
                    style: { opacity: 0, width: 0, height: 0 },
                  },
                  void 0
                ),
                !props.textMode &&
                  (0, jsx_runtime_1.jsx)(
                    "button",
                    __assign(
                      {
                        "data-testid": "go-fullscreen-button",
                        className: "btn d-none d-md-inline-block kogito-button",
                        onClick: goFullScreen,
                      },
                      { children: i18n.fullScreen }
                    ),
                    void 0
                  ),
                !props.textMode &&
                  (0, jsx_runtime_1.jsx)(
                    "button",
                    __assign(
                      {
                        "data-testid": "see-as-source-button",
                        disabled: !props.textModeAvailable,
                        className: "btn d-none d-md-inline-block kogito-button",
                        onClick: seeAsSource,
                      },
                      { children: i18n.single.editorToolbar.seeAsSource }
                    ),
                    void 0
                  ),
                props.textMode &&
                  (0, jsx_runtime_1.jsx)(
                    "button",
                    __assign(
                      {
                        "data-testid": "see-as-diagram-button",
                        className: "btn d-none d-md-inline-block kogito-button",
                        onClick: seeAsDiagram,
                      },
                      { children: i18n.seeAsDiagram }
                    ),
                    void 0
                  ),
                globals.externalEditorManager &&
                  props.onOpenInExternalEditor &&
                  (0, jsx_runtime_1.jsx)(
                    "button",
                    __assign(
                      {
                        "data-testid": "open-ext-editor-button",
                        className: "btn d-none d-md-inline-block kogito-button",
                        onClick: openInExternalEditor,
                      },
                      { children: i18n.openIn(globals.externalEditorManager.name) }
                    ),
                    void 0
                  ),
                globals.externalEditorManager &&
                  props.linkToExternalEditor &&
                  (0, jsx_runtime_1.jsxs)(
                    "div",
                    __assign(
                      { className: "position-relative" },
                      {
                        children: [
                          (0, jsx_runtime_1.jsx)(
                            "button",
                            __assign(
                              {
                                "data-testid": "copy-link-button",
                                className: "btn d-none d-md-inline-block kogito-button",
                                onClick: copyLinkToExternalEditor,
                              },
                              { children: i18n.single.editorToolbar.copyLinkTo(globals.externalEditorManager.name) }
                            ),
                            void 0
                          ),
                          copyLinkSuccessAlertVisible &&
                            (0, jsx_runtime_1.jsx)(
                              "div",
                              __assign(
                                {
                                  "data-testid": "link-copied-alert",
                                  ref: copyLinkSuccessAlertRef,
                                  className: "position-absolute",
                                  style: { marginTop: "34px", right: "0" },
                                },
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    "div",
                                    __assign(
                                      { className: "dropdown-menu dropdown-menu-sw kogito-github-action-alert" },
                                      {
                                        children: (0, jsx_runtime_1.jsx)(
                                          "span",
                                          { children: i18n.single.editorToolbar.linkCopied },
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
              ],
            }
          ),
          void 0
        ),
        !props.errorOpeningFile &&
          props.readonly &&
          !props.textMode &&
          (0, jsx_runtime_1.jsx)(
            "div",
            __assign(
              {
                style: { height: "32px", padding: "5px 15px 5px 15px", whiteSpace: "nowrap" },
                className: "flash flash-info",
              },
              { children: (0, jsx_runtime_1.jsx)("h5", { children: i18n.single.editorToolbar.readOnly }, void 0) }
            ),
            void 0
          ),
        props.errorOpeningFile &&
          props.textMode &&
          !props.readonly &&
          (0, jsx_runtime_1.jsx)(
            "div",
            __assign(
              {
                style: { height: "32px", padding: "5px 15px 5px 15px", whiteSpace: "nowrap" },
                className: "flash flash-info",
              },
              {
                children: (0, jsx_runtime_1.jsxs)(
                  "h5",
                  {
                    children: [
                      i18n.single.editorToolbar.fixAndSeeAsDiagram,
                      "\u00A0",
                      props.textModeAvailable &&
                        (0, jsx_runtime_1.jsxs)(
                          jsx_runtime_1.Fragment,
                          {
                            children: [
                              (0, jsx_runtime_1.jsx)(
                                "a",
                                __assign({ href: "#", onClick: seeAsDiagram }, { children: i18n.seeAsDiagram }),
                                void 0
                              ),
                              ".",
                            ],
                          },
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
        props.errorOpeningFile &&
          !props.textMode &&
          (0, jsx_runtime_1.jsx)(
            "div",
            __assign(
              {
                style: { height: "32px", padding: "5px 15px 5px 15px", whiteSpace: "nowrap" },
                className: "flash flash-error",
              },
              {
                children: (0, jsx_runtime_1.jsxs)(
                  "h5",
                  {
                    children: [
                      i18n.single.editorToolbar.errorOpeningFile,
                      "\u00A0",
                      props.textModeAvailable &&
                        (0, jsx_runtime_1.jsxs)(
                          jsx_runtime_1.Fragment,
                          {
                            children: [
                              (0, jsx_runtime_1.jsx)(
                                "a",
                                __assign(
                                  { href: "#", onClick: seeAsSource },
                                  { children: i18n.single.editorToolbar.seeAsSource }
                                ),
                                void 0
                              ),
                              ".",
                            ],
                          },
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
      ],
    },
    void 0
  );
}
exports.SingleEditorToolbar = SingleEditorToolbar;
//# sourceMappingURL=SingleEditorToolbar.js.map
