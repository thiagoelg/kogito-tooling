"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvelopeBusMessageDirectSender = exports.EnvelopeBusMessagePurpose = void 0;
var EnvelopeBusMessagePurpose;
(function (EnvelopeBusMessagePurpose) {
  EnvelopeBusMessagePurpose["REQUEST"] = "request";
  EnvelopeBusMessagePurpose["RESPONSE"] = "response";
  EnvelopeBusMessagePurpose["NOTIFICATION_SUBSCRIPTION"] = "subscription";
  EnvelopeBusMessagePurpose["NOTIFICATION_UNSUBSCRIPTION"] = "unsubscription";
  EnvelopeBusMessagePurpose["NOTIFICATION"] = "notification";
  EnvelopeBusMessagePurpose["SHARED_VALUE_GET_DEFAULT"] = "shared-value-get-default";
  EnvelopeBusMessagePurpose["SHARED_VALUE_UPDATE"] = "shared-value-update";
})((EnvelopeBusMessagePurpose = exports.EnvelopeBusMessagePurpose || (exports.EnvelopeBusMessagePurpose = {})));
var EnvelopeBusMessageDirectSender;
(function (EnvelopeBusMessageDirectSender) {
  EnvelopeBusMessageDirectSender["ENVELOPE_CLIENT"] = "envelopeClient";
  EnvelopeBusMessageDirectSender["ENVELOPE_SERVER"] = "envelopeServer";
})(
  (EnvelopeBusMessageDirectSender =
    exports.EnvelopeBusMessageDirectSender || (exports.EnvelopeBusMessageDirectSender = {}))
);
//# sourceMappingURL=index.js.map
