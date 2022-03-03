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
exports.Sidebar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_core_1 = require("@patternfly/react-core");
var embedded_1 = require("@kie-tools-core/editor/dist/embedded");
function extractFileExtension(fileName) {
  var _a, _b, _c;
  return fileName.match(/[.]/)
    ? (_c =
        (_b = (_a = fileName.split(".")) === null || _a === void 0 ? void 0 : _a.pop()) === null || _b === void 0
          ? void 0
          : _b.match(/[\w\d]+/)) === null || _c === void 0
      ? void 0
      : _c.pop()
    : undefined;
}
function removeFileExtension(fileName) {
  var fileExtension = extractFileExtension(fileName);
  if (!fileExtension) {
    return fileName;
  }
  return fileName.substr(0, fileName.length - fileExtension.length - 1);
}
function Sidebar(props) {
  var isDirty = (0, embedded_1.useDirtyState)(props.editor);
  var downloadRef = (0, react_1.useRef)(null);
  var onDownload = (0, react_1.useCallback)(
    function () {
      var _a, _b;
      (_a = props.editor) === null || _a === void 0 ? void 0 : _a.getStateControl().setSavedCommand();
      (_b = props.editor) === null || _b === void 0
        ? void 0
        : _b.getContent().then(function (content) {
            if (downloadRef.current) {
              var fileBlob = new Blob([content], { type: "text/plain" });
              downloadRef.current.href = URL.createObjectURL(fileBlob);
              downloadRef.current.download = "".concat(props.file.fileName, ".").concat(props.fileExtension);
              downloadRef.current.click();
            }
          });
    },
    [props.editor]
  );
  var _a = __read((0, react_1.useState)(props.file.fileName), 2),
    fileName = _a[0],
    setFileName = _a[1];
  var onChangeName = (0, react_1.useCallback)(
    function () {
      props.setFile(__assign(__assign({}, props.file), { fileName: fileName }));
    },
    [props.file, fileName]
  );
  var onNewFile = (0, react_1.useCallback)(function () {
    setFileName("new-file");
    props.setFile({
      isReadOnly: false,
      fileExtension: props.fileExtension,
      fileName: "new-file",
      getFileContents: function () {
        return Promise.resolve("");
      },
    });
  }, []);
  var onOpenSample = (0, react_1.useCallback)(function () {
    setFileName("sample");
    props.setFile({
      isReadOnly: false,
      fileExtension: props.fileExtension,
      fileName: "sample",
      getFileContents: function () {
        return fetch("examples/sample.".concat(props.fileExtension)).then(function (response) {
          return response.text();
        });
      },
    });
  }, []);
  var inputRef = (0, react_1.useRef)(null);
  var onOpenFile = (0, react_1.useCallback)(function (e) {
    if (!inputRef.current.files) {
      return;
    }
    var currentFile = inputRef.current.files[0];
    if (!props.editorEnvelopeLocator.hasMappingFor(currentFile.name)) {
      return;
    }
    setFileName(removeFileExtension(currentFile.name));
    props.setFile({
      isReadOnly: false,
      fileExtension: extractFileExtension(currentFile.name),
      fileName: removeFileExtension(currentFile.name),
      getFileContents: function () {
        return new Promise(function (resolve) {
          var reader = new FileReader();
          reader.onload = function (event) {
            return resolve(event.target.result);
          };
          reader.readAsText(currentFile);
        });
      },
    });
  }, []);
  return (0, jsx_runtime_1.jsxs)(
    "div",
    {
      children: [
        (0, jsx_runtime_1.jsx)(
          react_core_1.Nav,
          __assign(
            { className: "webapp--page-navigation" },
            {
              children: (0, jsx_runtime_1.jsxs)(
                react_core_1.NavList,
                {
                  children: [
                    (0, jsx_runtime_1.jsx)(
                      react_core_1.NavItem,
                      __assign(
                        { className: "webapp--page-kogito-editors-sidebar--navigation-nav-item" },
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            "div",
                            __assign(
                              { className: "webapp--page-kogito-editors-sidebar--navigation-nav-item-div" },
                              {
                                children: (0, jsx_runtime_1.jsx)(
                                  react_core_1.TextInput,
                                  {
                                    className: "webapp--page-kogito-editors-sidebar--navigation-nav-item-text-input",
                                    value: fileName,
                                    type: "text",
                                    "aria-label": "Edit file name",
                                    onChange: setFileName,
                                    onBlur: onChangeName,
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
                    (0, jsx_runtime_1.jsx)(
                      react_core_1.NavItem,
                      __assign(
                        { className: "webapp--page-kogito-editors-sidebar--navigation-nav-item" },
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            "div",
                            __assign(
                              { className: "webapp--page-kogito-editors-sidebar--navigation-nav-item-div" },
                              {
                                children: (0, jsx_runtime_1.jsx)(
                                  "a",
                                  __assign(
                                    {
                                      className: "webapp--page-kogito-editors-sidebar--navigation-nav-item-a",
                                      onClick: onNewFile,
                                    },
                                    { children: "New Empty File" }
                                  ),
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
                    (0, jsx_runtime_1.jsx)(
                      react_core_1.NavItem,
                      __assign(
                        { className: "webapp--page-kogito-editors-sidebar--navigation-nav-item" },
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            "div",
                            __assign(
                              { className: "webapp--page-kogito-editors-sidebar--navigation-nav-item-div" },
                              {
                                children: (0, jsx_runtime_1.jsxs)(
                                  "a",
                                  __assign(
                                    { className: "webapp--page-kogito-editors-sidebar--navigation-nav-item-a" },
                                    {
                                      children: [
                                        "Open File",
                                        (0, jsx_runtime_1.jsx)(
                                          "input",
                                          {
                                            accept: props.accept,
                                            className:
                                              "webapp--page-kogito-editors-sidebar--navigation-nav-item-open-file pf-c-button",
                                            type: "file",
                                            "aria-label": "File selection",
                                            onChange: onOpenFile,
                                            ref: inputRef,
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
                        }
                      ),
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)(
                      react_core_1.NavItem,
                      __assign(
                        { className: "webapp--page-kogito-editors-sidebar--navigation-nav-item" },
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            "div",
                            __assign(
                              { className: "webapp--page-kogito-editors-sidebar--navigation-nav-item-div" },
                              {
                                children: (0, jsx_runtime_1.jsx)(
                                  "a",
                                  __assign(
                                    {
                                      className: "webapp--page-kogito-editors-sidebar--navigation-nav-item-a",
                                      onClick: onOpenSample,
                                    },
                                    { children: "Open Sample" }
                                  ),
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
                    (0, jsx_runtime_1.jsx)(
                      react_core_1.NavItem,
                      __assign(
                        { className: "webapp--page-kogito-editors-sidebar--navigation-nav-item" },
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            "div",
                            __assign(
                              { className: "webapp--page-kogito-editors-sidebar--navigation-nav-item-div" },
                              {
                                children: (0, jsx_runtime_1.jsx)(
                                  "a",
                                  __assign(
                                    {
                                      className: "webapp--page-kogito-editors-sidebar--navigation-nav-item-a",
                                      onClick: onDownload,
                                    },
                                    { children: "Download" }
                                  ),
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
                    isDirty &&
                      (0, jsx_runtime_1.jsx)(
                        "div",
                        __assign(
                          { style: { display: "flex", alignItems: "center", padding: "20px" } },
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              "p",
                              __assign({ style: { color: "red" } }, { children: "File Edited!" }),
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
        (0, jsx_runtime_1.jsx)("a", { ref: downloadRef }, void 0),
      ],
    },
    void 0
  );
}
exports.Sidebar = Sidebar;
//# sourceMappingURL=Sidebar.js.map
