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
exports.Base64PngGallery = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_core_1 = require("@patternfly/react-core");
var samplePaths = [
  { fileName: "sample", path: "examples/sample.base64png" },
  { fileName: "luiz", path: "examples/luiz.base64png" },
  { fileName: "tiago", path: "examples/tiago.base64png" },
  { fileName: "dorinha", path: "examples/dorinha.base64png" },
];
function Base64PngGallery(props) {
  var openSample = (0, react_1.useCallback)(function (fileName, filePath) {
    props.setFile({
      isReadOnly: false,
      fileExtension: "base64png",
      fileName: fileName,
      getFileContents: function () {
        return fetch(filePath).then(function (response) {
          return response.text();
        });
      },
    });
  }, []);
  var _a = __read((0, react_1.useState)([]), 2),
    images = _a[0],
    setImages = _a[1];
  (0, react_1.useEffect)(function () {
    Promise.all(
      samplePaths.map(function (_a) {
        var fileName = _a.fileName,
          path = _a.path;
        return fetch(path)
          .then(function (response) {
            return response.text();
          })
          .then(function (content) {
            return { name: fileName, content: content, path: path };
          });
      })
    ).then(function (samples) {
      return setImages(__spreadArray(__spreadArray([], __read(images), false), __read(samples), false));
    });
  }, []);
  return (0, jsx_runtime_1.jsx)(
    "div",
    {
      children: (0, jsx_runtime_1.jsxs)(
        react_core_1.Nav,
        __assign(
          { className: "webapp--page-navigation" },
          {
            children: [
              (0, jsx_runtime_1.jsx)(
                "div",
                __assign(
                  { className: "webapp--page-navigation-title-div" },
                  {
                    children: (0, jsx_runtime_1.jsx)(
                      react_core_1.Title,
                      __assign(
                        { className: "webapp--page-navigation-title-h3", headingLevel: "h3", size: "xl" },
                        { children: "Gallery" }
                      ),
                      void 0
                    ),
                  }
                ),
                void 0
              ),
              (0, jsx_runtime_1.jsx)(
                react_core_1.NavList,
                {
                  children: images.map(function (image) {
                    return (0, jsx_runtime_1.jsx)(
                      react_core_1.NavItem,
                      __assign(
                        {
                          className: "webapp--page-base64png-gallery--navigation-nav-item",
                          onClick: function () {
                            return openSample(image.name, image.path);
                          },
                        },
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            react_core_1.Card,
                            __assign(
                              { className: "webapp--page-base64png-gallery--navigation-nav-item-card" },
                              {
                                children: (0, jsx_runtime_1.jsx)(
                                  "img",
                                  { alt: image.name, src: "data:image/png;base64,".concat(image.content) },
                                  void 0
                                ),
                              }
                            ),
                            void 0
                          ),
                        }
                      ),
                      image.name
                    );
                  }),
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
exports.Base64PngGallery = Base64PngGallery;
//# sourceMappingURL=Base64PngGallery.js.map
