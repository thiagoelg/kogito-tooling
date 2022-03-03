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
Object.defineProperty(exports, "__esModule", { value: true });
exports.KogitoEditorEnvelope = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("../api");
var EditorEnvelopeView_1 = require("./EditorEnvelopeView");
var ReactDOM = require("react-dom");
var React = require("react");
var i18n_1 = require("./i18n");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var operating_system_1 = require("@kie-tools-core/operating-system");
var KogitoEditorEnvelope = (function () {
  function KogitoEditorEnvelope(
    kogitoEditorEnvelopeApiFactory,
    keyboardShortcutsService,
    i18nService,
    envelope,
    context
  ) {
    if (context === void 0) {
      context = {
        channelApi: envelope.channelApi,
        operatingSystem: (0, operating_system_1.getOperatingSystem)(),
        services: {
          keyboardShortcuts: keyboardShortcutsService,
          i18n: i18nService,
        },
      };
    }
    this.kogitoEditorEnvelopeApiFactory = kogitoEditorEnvelopeApiFactory;
    this.keyboardShortcutsService = keyboardShortcutsService;
    this.i18nService = i18nService;
    this.envelope = envelope;
    this.context = context;
  }
  KogitoEditorEnvelope.prototype.start = function (container) {
    var _this = this;
    return this.envelope.start(
      function () {
        return _this.renderView(container);
      },
      this.context,
      this.kogitoEditorEnvelopeApiFactory
    );
  };
  KogitoEditorEnvelope.prototype.renderView = function (container) {
    var editorEnvelopeViewRef = React.createRef();
    var app = (0, jsx_runtime_1.jsx)(
      api_1.KogitoEditorEnvelopeContext.Provider,
      __assign(
        { value: this.context },
        {
          children: (0, jsx_runtime_1.jsx)(
            react_components_1.I18nDictionariesProvider,
            __assign(
              {
                defaults: i18n_1.editorEnvelopeI18nDefaults,
                dictionaries: i18n_1.editorEnvelopeI18nDictionaries,
                ctx: i18n_1.EditorEnvelopeI18nContext,
                initialLocale: navigator.language,
              },
              {
                children: (0, jsx_runtime_1.jsx)(
                  i18n_1.EditorEnvelopeI18nContext.Consumer,
                  {
                    children: function (_a) {
                      var setLocale = _a.setLocale;
                      return (0, jsx_runtime_1.jsx)(
                        EditorEnvelopeView_1.EditorEnvelopeView,
                        { ref: editorEnvelopeViewRef, setLocale: setLocale },
                        void 0
                      );
                    },
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
    );
    return new Promise(function (res) {
      setTimeout(function () {
        ReactDOM.render(app, container, function () {
          res(function () {
            return editorEnvelopeViewRef.current;
          });
        });
      }, 0);
    });
  };
  return KogitoEditorEnvelope;
})();
exports.KogitoEditorEnvelope = KogitoEditorEnvelope;
//# sourceMappingURL=KogitoEditorEnvelope.js.map
