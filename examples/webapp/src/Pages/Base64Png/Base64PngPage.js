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
exports.Base64PngPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("@kie-tools-core/editor/dist/api");
var api_2 = require("@kie-tools-core/editor/dist/api");
var react_1 = require("react");
var react_core_1 = require("@patternfly/react-core");
var embedded_1 = require("@kie-tools-core/editor/dist/embedded");
var Base64PngGallery_1 = require("./Base64PngGallery");
function Base64PngPage() {
  var _a = __read(
      (0, react_1.useState)({
        fileName: "new-file",
        fileExtension: "base64png",
        getFileContents: function () {
          return Promise.resolve("");
        },
        isReadOnly: false,
      }),
      2
    ),
    file = _a[0],
    setFile = _a[1];
  var editorEnvelopeLocator = (0, react_1.useMemo)(
    function () {
      return new api_2.EditorEnvelopeLocator(window.location.origin, [
        new api_2.EnvelopeMapping("base64png", "**/*.base64png", "envelope/", "envelope/base64-editor.html"),
      ]);
    },
    [file]
  );
  return (0, jsx_runtime_1.jsx)(
    react_core_1.Page,
    {
      children: (0, jsx_runtime_1.jsxs)(
        "div",
        __assign(
          { className: "webapp--page-main-div" },
          {
            children: [
              (0, jsx_runtime_1.jsx)(Base64PngGallery_1.Base64PngGallery, { setFile: setFile }, void 0),
              (0, jsx_runtime_1.jsx)(
                embedded_1.EmbeddedEditor,
                {
                  file: file,
                  editorEnvelopeLocator: editorEnvelopeLocator,
                  channelType: api_1.ChannelType.EMBEDDED,
                  locale: "en",
                },
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
}
exports.Base64PngPage = Base64PngPage;
//# sourceMappingURL=Base64PngPage.js.map
