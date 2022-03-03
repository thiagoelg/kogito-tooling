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
exports.useDmnTour = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Divider_1 = require("@patternfly/react-core/dist/js/components/Divider");
var List_1 = require("@patternfly/react-core/dist/js/components/List");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var book_open_icon_1 = require("@patternfly/react-icons/dist/js/icons/book-open-icon");
var trophy_icon_1 = require("@patternfly/react-icons/dist/js/icons/trophy-icon");
var channel_1 = require("@kie-tools-core/guided-tour/dist/channel");
var api_1 = require("@kie-tools-core/guided-tour/dist/api");
var i18n_1 = require("../i18n");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var SettingsContext_1 = require("../settings/SettingsContext");
function useDmnTour(shouldShow) {
  var i18n = (0, i18n_1.useOnlineI18n)().i18n;
  var settings = (0, SettingsContext_1.useSettings)();
  var settingsDispatch = (0, SettingsContext_1.useSettingsDispatch)();
  (0, react_1.useEffect)(
    function () {
      if (!settings.general.guidedTour.isEnabled || shouldShow) {
        return;
      }
      var guidedTour = channel_1.KogitoGuidedTour.getInstance();
      guidedTour.setup(function () {
        return settingsDispatch.general.guidedTour.setEnabled(false);
      });
    },
    [shouldShow, settings, settingsDispatch]
  );
  (0, react_1.useEffect)(
    function () {
      if (shouldShow && settings.general.guidedTour.isEnabled) {
        var guidedTour = channel_1.KogitoGuidedTour.getInstance();
        var tutorial = getOnlineEditorTutorial(i18n);
        guidedTour.registerTutorial(tutorial);
        guidedTour.start(tutorial.label);
      }
    },
    [shouldShow, i18n, settings]
  );
}
exports.useDmnTour = useDmnTour;
function getOnlineEditorTutorial(i18n) {
  function dismissAndStartDmnRunner(props) {
    var _a;
    props.dismiss();
    (_a = document.getElementById("dmn-runner-button")) === null || _a === void 0 ? void 0 : _a.click();
  }
  return new api_1.Tutorial("DMN Online Editor Tutorial", [
    {
      position: "center",
      mode: new api_1.DemoMode(),
      content: function (props) {
        return (0, jsx_runtime_1.jsxs)(
          "div",
          __assign(
            { className: "pf-c-content kgt-slide--with-accent" },
            {
              children: [
                (0, jsx_runtime_1.jsx)(
                  book_open_icon_1.BookOpenIcon,
                  { size: "xl", className: "kgt-icon--with-accent" },
                  void 0
                ),
                (0, jsx_runtime_1.jsx)(
                  Title_1.Title,
                  __assign({ headingLevel: "h3", size: "xl" }, { children: i18n.guidedTour.init.title }),
                  void 0
                ),
                (0, jsx_runtime_1.jsx)(Text_1.Text, { children: i18n.guidedTour.init.learnMore }, void 0),
                (0, jsx_runtime_1.jsx)(Text_1.Text, { children: i18n.guidedTour.init.dmnRunnerIntro }, void 0),
                (0, jsx_runtime_1.jsx)(Text_1.Text, { children: "  " }, void 0),
                (0, jsx_runtime_1.jsx)(
                  Button_1.Button,
                  __assign(
                    {
                      ouiaId: "dmn-guided-tour-skip-runner-start-button",
                      onClick: function () {
                        return dismissAndStartDmnRunner(props);
                      },
                      variant: "link",
                    },
                    { children: i18n.guidedTour.init.skipTourAndUseDmnRunner }
                  ),
                  void 0
                ),
                (0, jsx_runtime_1.jsx)("br", {}, void 0),
                (0, jsx_runtime_1.jsx)(
                  Button_1.Button,
                  __assign({ onClick: props.dismiss, variant: "link" }, { children: i18n.guidedTour.init.skipTour }),
                  void 0
                ),
                (0, jsx_runtime_1.jsx)(Text_1.Text, { children: "  " }, void 0),
                (0, jsx_runtime_1.jsx)(
                  Button_1.Button,
                  __assign(
                    { onClick: props.nextStep, variant: "primary" },
                    { children: i18n.guidedTour.init.takeTour }
                  ),
                  void 0
                ),
              ],
            }
          ),
          void 0
        );
      },
    },
    {
      mode: new api_1.SubTutorialMode("DMN 101 Tutorial"),
    },
    {
      position: "center",
      mode: new api_1.DemoMode(),
      content: function (props) {
        return (0, jsx_runtime_1.jsxs)(
          "div",
          __assign(
            { className: "pf-c-content kgt-slide--with-accent" },
            {
              children: [
                (0, jsx_runtime_1.jsx)(
                  Title_1.Title,
                  __assign({ headingLevel: "h3", size: "xl" }, { children: i18n.guidedTour.end.title }),
                  void 0
                ),
                (0, jsx_runtime_1.jsx)(
                  trophy_icon_1.TrophyIcon,
                  { size: "xl", className: "kgt-icon--with-accent" },
                  void 0
                ),
                (0, jsx_runtime_1.jsx)(Text_1.Text, { children: i18n.guidedTour.end.motivational }, void 0),
                (0, jsx_runtime_1.jsx)(Divider_1.Divider, {}, void 0),
                (0, jsx_runtime_1.jsxs)(
                  Text_1.Text,
                  __assign(
                    { className: "pf-c-content--align-left" },
                    { children: [i18n.guidedTour.end.nextSteps.title, ":"] }
                  ),
                  void 0
                ),
                (0, jsx_runtime_1.jsxs)(
                  List_1.List,
                  __assign(
                    { className: "pf-c-content--align-left" },
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)(
                          List_1.ListItem,
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              react_components_1.I18nHtml,
                              { children: i18n.guidedTour.end.nextSteps.firstStep },
                              void 0
                            ),
                          },
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)(
                          List_1.ListItem,
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              react_components_1.I18nHtml,
                              { children: i18n.guidedTour.end.nextSteps.secondStep },
                              void 0
                            ),
                          },
                          void 0
                        ),
                        (0, jsx_runtime_1.jsxs)(
                          List_1.ListItem,
                          {
                            children: [
                              i18n.guidedTour.end.nextSteps.thirdStep,
                              " ",
                              (0, jsx_runtime_1.jsx)(
                                Button_1.Button,
                                __assign(
                                  {
                                    isInline: true,
                                    onClick: function () {
                                      return dismissAndStartDmnRunner(props);
                                    },
                                    variant: "link",
                                  },
                                  { children: i18n.guidedTour.end.nextSteps.startDmnRunner }
                                ),
                                void 0
                              ),
                            ],
                          },
                          void 0
                        ),
                      ],
                    }
                  ),
                  void 0
                ),
                (0, jsx_runtime_1.jsxs)(
                  Text_1.Text,
                  __assign(
                    { className: "pf-c-content--align-left" },
                    {
                      children: [
                        "".concat(i18n.guidedTour.end.findUsefulInfo, " "),
                        (0, jsx_runtime_1.jsx)(
                          "a",
                          __assign(
                            { target: "_blank", href: "http://learn-dmn-in-15-minutes.com" },
                            { children: i18n.guidedTour.end.learnDMN }
                          ),
                          void 0
                        ),
                        " ",
                        "".concat(i18n.guidedTour.end.courseOr, " "),
                        (0, jsx_runtime_1.jsx)(
                          "a",
                          __assign(
                            {
                              target: "_blank",
                              href: "https://docs.jboss.org/kogito/release/latest/html_single/#_using_dmn_models_in_kogito_services",
                            },
                            { children: i18n.guidedTour.end.kogitoDoc }
                          ),
                          void 0
                        ),
                        " ",
                        ":-)",
                      ],
                    }
                  ),
                  void 0
                ),
                (0, jsx_runtime_1.jsx)(
                  Button_1.Button,
                  __assign({ onClick: props.dismiss, variant: "primary" }, { children: i18n.guidedTour.end.finish }),
                  void 0
                ),
              ],
            }
          ),
          void 0
        );
      },
    },
  ]);
}
//# sourceMappingURL=GuidedTourInitializer.js.map
