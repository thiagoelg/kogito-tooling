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
exports.FileLoader = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var api_1 = require("@kie-tools-core/workspace/dist/api");
var FileLoader = function (props) {
  var fileInput = (0, react_1.useRef)(null);
  var handleSubmit = function (event) {
    event.preventDefault();
    if (fileInput.current.files.length > 0) {
      Array.from(fileInput.current.files).forEach(function (file) {
        readUploadedFileAsText(file).then(function (fileContent) {
          return props.setFiles(function (files) {
            return __spreadArray(
              __spreadArray([], __read(files), false),
              [{ name: file.name, value: { path: file.name, type: api_1.ContentType.TEXT, content: fileContent } }],
              false
            );
          });
        });
      });
      fileInput.current.value = "";
    }
  };
  var remove = function (resource) {
    props.setFiles(function (files) {
      var newFiles = Array.from(files);
      var resourceIndex = newFiles.findIndex(function (file) {
        return file.name === resource.name;
      });
      newFiles.splice(resourceIndex, 1);
      return newFiles;
    });
  };
  var download = function (resource) {
    alert(resource.value.content);
  };
  var view = function (resource) {
    props.onView(resource);
  };
  var renderedForm = (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children:
        props.allowUpload &&
        (0, jsx_runtime_1.jsxs)(
          "form",
          __assign(
            { onSubmit: handleSubmit, "data-ouia-component-type": "file-upload-form" },
            {
              children: [
                (0, jsx_runtime_1.jsxs)(
                  "label",
                  {
                    children: [
                      "File to upload:\u00A0",
                      (0, jsx_runtime_1.jsx)("input", { type: "file", ref: fileInput }, void 0),
                    ],
                  },
                  void 0
                ),
                (0, jsx_runtime_1.jsx)("button", __assign({ type: "submit" }, { children: "Submit" }), void 0),
              ],
            }
          ),
          void 0
        ),
    },
    void 0
  );
  var renderedFiles = (0, jsx_runtime_1.jsx)(
    "ul",
    __assign(
      { "data-ouia-component-type": "file-list" },
      {
        children: props.files.map(function (file) {
          var item = { name: file.name, value: file.value };
          return (0, jsx_runtime_1.jsxs)(
            "li",
            __assign(
              { "data-ouia-component-type": "file-list-item", "data-ouia-component-id": item.name },
              {
                children: [
                  (0, jsx_runtime_1.jsx)("span", { children: item.name }, void 0),
                  (0, jsx_runtime_1.jsx)(
                    "button",
                    __assign(
                      {
                        "data-ouia-component-type": "file-list-item-button",
                        "data-ouia-component-id": "view",
                        onClick: function () {
                          return view(item);
                        },
                      },
                      { children: "view" }
                    ),
                    void 0
                  ),
                  props.allowDownload &&
                    (0, jsx_runtime_1.jsx)(
                      "button",
                      __assign(
                        {
                          "data-ouia-component-type": "file-list-item-button",
                          "data-ouia-component-id": "download",
                          onClick: function () {
                            return download(item);
                          },
                        },
                        { children: "download" }
                      ),
                      void 0
                    ),
                  (0, jsx_runtime_1.jsx)(
                    "button",
                    __assign(
                      {
                        "data-ouia-component-type": "file-list-item-button",
                        "data-ouia-component-id": "remove",
                        onClick: function () {
                          return remove(item);
                        },
                      },
                      { children: "remove" }
                    ),
                    void 0
                  ),
                ],
              }
            ),
            item.name
          );
        }),
      }
    ),
    void 0
  );
  return (0, jsx_runtime_1.jsxs)(
    "div",
    __assign(
      {
        "data-ouia-component-type": "file-loader",
        "data-ouia-component-id": props.ouiaId,
        "data-ouia-safe": props.ouiaSafe ? props.ouiaSafe : true,
      },
      { children: [props.allowUpload && renderedForm, renderedFiles] }
    ),
    void 0
  );
};
exports.FileLoader = FileLoader;
function readUploadedFileAsText(inputFile) {
  var temporaryFileReader = new FileReader();
  return new Promise(function (resolve, reject) {
    temporaryFileReader.onerror = function () {
      temporaryFileReader.abort();
      reject(new DOMException("Problem parsing input file."));
    };
    temporaryFileReader.onload = function () {
      resolve(temporaryFileReader.result);
    };
    temporaryFileReader.readAsText(inputFile);
  });
}
//# sourceMappingURL=FileLoader.js.map
