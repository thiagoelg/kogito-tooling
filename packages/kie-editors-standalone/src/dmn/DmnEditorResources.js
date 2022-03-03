"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmnEditorResources = void 0;
var fs = require("fs");
var EditorResources_1 = require("../common/EditorResources");
var stunnerEditors = require("@kie-tools/stunner-editors");
var api_1 = require("@kie-tools/kie-bc-editors/dist/dmn/api");
var DmnEditorResources = (function (_super) {
  __extends(DmnEditorResources, _super);
  function DmnEditorResources() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  DmnEditorResources.prototype.get = function (args) {
    var _this = this;
    var dmnLanguageData = (0, api_1.getDmnLanguageData)(args.resourcesPathPrefix);
    var dmnEditorResources = {
      envelopeJsResource: this.createResource({ path: "dist/envelope/dmn-envelope.js" }),
      baseJsResources: dmnLanguageData.resources
        .filter(function (r) {
          return r.type === "js";
        })
        .flatMap(function (r) {
          return r.paths;
        })
        .map(function (p) {
          return _this.createResource({ path: p }, ["\\", "`", "$"]);
        }),
      referencedJsResources: this.getReferencedJSPaths(args.resourcesPathPrefix, dmnLanguageData.gwtModuleName).map(
        function (rp) {
          return _this.createResource(rp, ["\\", "`", "$"]);
        }
      ),
      baseCssResources: dmnLanguageData.resources
        .filter(function (r) {
          return r.type === "css";
        })
        .flatMap(function (r) {
          return r.paths;
        })
        .map(function (p) {
          return _this.createResource({ path: p });
        }),
      referencedCssResources: this.getReferencedCSSPaths(args.resourcesPathPrefix, dmnLanguageData.gwtModuleName).map(
        function (rp) {
          return _this.createResource(rp);
        }
      ),
      fontResources: this.getFontResources(args.resourcesPathPrefix, dmnLanguageData.gwtModuleName),
    };
    return dmnEditorResources;
  };
  DmnEditorResources.prototype.getReferencedJSPaths = function (resourcesPathPrefix, gwtModuleName) {
    var editorDir = fs.readdirSync("".concat(resourcesPathPrefix, "/").concat(gwtModuleName));
    var gwtJsFiles = editorDir.filter(function (file) {
      return file.indexOf(".cache.js") >= 0;
    });
    return gwtJsFiles.map(function (file) {
      return {
        path: ""
          .concat(resourcesPathPrefix, "/")
          .concat(gwtModuleName, "/")
          .concat(file === null || file === void 0 ? void 0 : file.split("/").pop()),
      };
    });
  };
  DmnEditorResources.prototype.getReferencedCSSPaths = function (resourcesPathPrefix, gwtModuleName) {
    return [
      { path: "".concat(resourcesPathPrefix, "/").concat(gwtModuleName, "/jquery-ui/jquery-ui.min.css") },
      {
        path: ""
          .concat(resourcesPathPrefix, "/")
          .concat(gwtModuleName, "/bootstrap-daterangepicker/daterangepicker.css"),
      },
      {
        path: ""
          .concat(resourcesPathPrefix, "/")
          .concat(gwtModuleName, "/bootstrap-select/css/bootstrap-select.min.css"),
      },
      { path: "".concat(resourcesPathPrefix, "/").concat(gwtModuleName, "/uberfire-patternfly.css") },
      { path: "".concat(resourcesPathPrefix, "/").concat(gwtModuleName, "/css/patternfly-additions.min.css") },
      {
        path: ""
          .concat(resourcesPathPrefix, "/")
          .concat(gwtModuleName, "/css/bootstrap-datepicker3-1.6.4.min.cache.css"),
      },
      { path: "".concat(resourcesPathPrefix, "/").concat(gwtModuleName, "/css/animate-3.5.2.min.cache.css") },
      { path: "".concat(resourcesPathPrefix, "/").concat(gwtModuleName, "/css/bootstrap-notify-custom.min.cache.css") },
      { path: "".concat(resourcesPathPrefix, "/").concat(gwtModuleName, "/css/card-1.0.1.cache.css") },
      { path: "".concat(resourcesPathPrefix, "/").concat(gwtModuleName, "/css/bootstrap-slider-9.2.0.min.cache.css") },
      {
        path: ""
          .concat(resourcesPathPrefix, "/")
          .concat(gwtModuleName, "/css/bootstrap-datetimepicker-2.4.4.min.cache.css"),
      },
      { path: "".concat(resourcesPathPrefix, "/").concat(gwtModuleName, "/css/typeahead-0.10.5.min.cache.css") },
    ];
  };
  DmnEditorResources.prototype.getFontResources = function (resourcesPathPrefix, gwtModuleName) {
    return [
      {
        family: "FontAwesome",
        additionalStyle: "font-weight:normal;font-style:normal;",
        sources: [
          this.createFontSource(
            "".concat(resourcesPathPrefix, "/").concat(gwtModuleName, "/fonts/fontawesome-webfont.ttf")
          ),
        ],
      },
      {
        family: "PatternFlyIcons-webfont",
        additionalStyle: "font-weight:normal;font-style:normal;",
        sources: [
          this.createFontSource(
            "".concat(resourcesPathPrefix, "/").concat(gwtModuleName, "/fonts/PatternFlyIcons-webfont.ttf")
          ),
        ],
      },
      {
        family: "Glyphicons Halflings",
        sources: [
          this.createFontSource(
            "".concat(resourcesPathPrefix, "/").concat(gwtModuleName, "/fonts/glyphicons-halflings-regular.ttf")
          ),
        ],
      },
      {
        family: "Open Sans",
        additionalStyle: "font-weight:300;font-style:normal;",
        sources: [
          this.createFontSource(
            "".concat(resourcesPathPrefix, "/").concat(gwtModuleName, "/fonts/OpenSans-Light-webfont.ttf")
          ),
        ],
      },
      {
        family: "Open Sans",
        additionalStyle: "font-weight:400;font-style:normal;",
        sources: [
          this.createFontSource(
            "".concat(resourcesPathPrefix, "/").concat(gwtModuleName, "/fonts/OpenSans-Regular-webfont.ttf")
          ),
        ],
      },
      {
        family: "Open Sans",
        additionalStyle: "font-weight:600;font-style:normal;",
        sources: [
          this.createFontSource(
            "".concat(resourcesPathPrefix, "/").concat(gwtModuleName, "/fonts/OpenSans-Semibold-webfont.ttf")
          ),
        ],
      },
      {
        family: "Open Sans",
        additionalStyle: "font-weight:700;font-style:normal;",
        sources: [
          this.createFontSource(
            "".concat(resourcesPathPrefix, "/").concat(gwtModuleName, "/fonts/OpenSans-Bold-webfont.ttf")
          ),
        ],
      },
      {
        family: "Open Sans",
        additionalStyle: "font-weight:800;font-style:normal;",
        sources: [
          this.createFontSource(
            "".concat(resourcesPathPrefix, "/").concat(gwtModuleName, "/fonts/OpenSans-ExtraBold-webfont.ttf")
          ),
        ],
      },
      {
        family: "Font Awesome 5 Free",
        additionalStyle: "font-weight:900;font-style:normal;",
        sources: [
          this.createFontSource(
            "".concat(resourcesPathPrefix, "/").concat(gwtModuleName, "/fonts/fontawesome-webfont.ttf")
          ),
        ],
      },
    ];
  };
  DmnEditorResources.prototype.getEditorResourcesPath = function () {
    return stunnerEditors.dmnEditorPath();
  };
  DmnEditorResources.prototype.getTemplatePath = function () {
    return "dist/resources/dmn/dmnEnvelopeIndex.template";
  };
  DmnEditorResources.prototype.getHtmlOutputPath = function () {
    return "dist/resources/dmn/dmnEnvelopeIndex.html";
  };
  return DmnEditorResources;
})(EditorResources_1.BaseEditorResources);
exports.DmnEditorResources = DmnEditorResources;
//# sourceMappingURL=DmnEditorResources.js.map
