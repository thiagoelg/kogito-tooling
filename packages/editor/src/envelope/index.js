"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __exportStar =
  (this && this.__exportStar) ||
  function (m, exports) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCustom = exports.init = void 0;
require("@patternfly/react-core/dist/styles/base.css");
require("./styles.scss");
var KogitoEditorEnvelope_1 = require("./KogitoEditorEnvelope");
var KogitoEditorEnvelopeApiImpl_1 = require("./KogitoEditorEnvelopeApiImpl");
var envelope_1 = require("@kie-tools-core/keyboard-shortcuts/dist/envelope");
var envelope_2 = require("@kie-tools-core/i18n/dist/envelope");
var envelope_3 = require("@kie-tools-core/envelope");
var operating_system_1 = require("@kie-tools-core/operating-system");
function init(args) {
  initCustom({
    container: args.container,
    bus: args.bus,
    apiImplFactory: {
      create: function (createArgs) {
        return new KogitoEditorEnvelopeApiImpl_1.KogitoEditorEnvelopeApiImpl(createArgs, args.editorFactory);
      },
    },
  });
}
exports.init = init;
function initCustom(args) {
  var defaultKeyboardShortcuts = new envelope_1.DefaultKeyboardShortcutsService({
    os: (0, operating_system_1.getOperatingSystem)(),
  });
  var i18nService = new envelope_2.I18nService();
  var envelope = new envelope_3.Envelope(args.bus);
  return new KogitoEditorEnvelope_1.KogitoEditorEnvelope(
    args.apiImplFactory,
    defaultKeyboardShortcuts,
    i18nService,
    envelope
  ).start(args.container);
}
exports.initCustom = initCustom;
__exportStar(require("./KogitoEditorEnvelopeApiImpl"), exports);
//# sourceMappingURL=index.js.map
