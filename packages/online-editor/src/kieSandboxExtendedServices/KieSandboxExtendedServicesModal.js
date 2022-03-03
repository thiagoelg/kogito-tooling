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
exports.KieSandboxExtendedServicesModal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Alert_1 = require("@patternfly/react-core/dist/js/components/Alert");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var ExpandableSection_1 = require("@patternfly/react-core/dist/js/components/ExpandableSection");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var Label_1 = require("@patternfly/react-core/dist/js/components/Label");
var List_1 = require("@patternfly/react-core/dist/js/components/List");
var Modal_1 = require("@patternfly/react-core/dist/js/components/Modal");
var Select_1 = require("@patternfly/react-core/dist/js/components/Select");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
var Wizard_1 = require("@patternfly/react-core/dist/js/components/Wizard");
var exclamation_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/exclamation-circle-icon");
var external_link_alt_icon_1 = require("@patternfly/react-icons/dist/js/icons/external-link-alt-icon");
var react_1 = require("react");
var AnimatedTripleDotLabel_1 = require("./AnimatedTripleDotLabel");
var i18n_1 = require("../i18n");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var SelectOs_1 = require("../os/SelectOs");
var operating_system_1 = require("@kie-tools-core/operating-system");
var OpenShiftService_1 = require("../openshift/OpenShiftService");
var KieSandboxExtendedServicesContext_1 = require("./KieSandboxExtendedServicesContext");
var KieSandboxExtendedServicesStatus_1 = require("./KieSandboxExtendedServicesStatus");
var Hooks_1 = require("../navigation/Hooks");
var SettingsContext_1 = require("../settings/SettingsContext");
var ModalPage;
(function (ModalPage) {
  ModalPage[(ModalPage["INITIAL"] = 0)] = "INITIAL";
  ModalPage[(ModalPage["WIZARD"] = 1)] = "WIZARD";
  ModalPage[(ModalPage["USE"] = 2)] = "USE";
})(ModalPage || (ModalPage = {}));
var UBUNTU_APP_INDICATOR_LIB = "apt install libappindicator3-dev";
var FEDORA_APP_INDICATOR_LIB = "dnf install libappindicator-gtk3";
function KieSandboxExtendedServicesModal() {
  var _a;
  var i18n = (0, i18n_1.useOnlineI18n)().i18n;
  var routes = (0, Hooks_1.useRoutes)();
  var _b = __read(
      (0, react_1.useState)(
        (_a = (0, operating_system_1.getOperatingSystem)()) !== null && _a !== void 0
          ? _a
          : operating_system_1.OperatingSystem.LINUX
      ),
      2
    ),
    operatingSystem = _b[0],
    setOperatingSystem = _b[1];
  var _c = __read((0, react_1.useState)(ModalPage.INITIAL), 2),
    modalPage = _c[0],
    setModalPage = _c[1];
  var kieSandboxExtendedServices = (0, KieSandboxExtendedServicesContext_1.useKieSandboxExtendedServices)();
  var KIE_SANDBOX_EXTENDED_SERVICES_MACOS_DMG = (0, react_1.useMemo)(
    function () {
      return "kie_sandbox_extended_services_macos_".concat(kieSandboxExtendedServices.version, ".dmg");
    },
    [kieSandboxExtendedServices.version]
  );
  var KIE_SANDBOX_EXTENDED_SERVICES_MACOS_APP = (0, react_1.useMemo)(function () {
    return "KIE Sandbox Extended Services.app";
  }, []);
  var KIE_SANDBOX_EXTENDED_SERVICES_WINDOWS_EXE = (0, react_1.useMemo)(
    function () {
      return "kie_sandbox_extended_services_windows_".concat(kieSandboxExtendedServices.version, ".exe");
    },
    [kieSandboxExtendedServices.version]
  );
  var KIE_SANDBOX_EXTENDED_SERVICES_LINUX_TAG_GZ = (0, react_1.useMemo)(
    function () {
      return "kie_sandbox_extended_services_linux_".concat(kieSandboxExtendedServices.version, ".tar.gz");
    },
    [kieSandboxExtendedServices.version]
  );
  var KIE_SANDBOX_EXTENDED_SERVICES_BINARIES = (0, react_1.useMemo)(function () {
    return "kie_sandbox_extended_services";
  }, []);
  var downloadKieSandboxExtendedServicesUrl = (0, react_1.useMemo)(
    function () {
      switch (operatingSystem) {
        case operating_system_1.OperatingSystem.MACOS:
          return process.env.WEBPACK_REPLACE__kieSandboxExtendedServicesMacOsDownloadUrl;
        case operating_system_1.OperatingSystem.WINDOWS:
          return process.env.WEBPACK_REPLACE__kieSandboxExtendedServicesWindowsDownloadUrl;
        case operating_system_1.OperatingSystem.LINUX:
        default:
          return process.env.WEBPACK_REPLACE__kieSandboxExtendedServicesLinuxDownloadUrl;
      }
    },
    [operatingSystem]
  );
  var macOsWizardSteps = (0, react_1.useMemo)(
    function () {
      return [
        {
          name: i18n.terms.install,
          component: (0, jsx_runtime_1.jsxs)(
            jsx_runtime_1.Fragment,
            {
              children: [
                kieSandboxExtendedServices.outdated &&
                  (0, jsx_runtime_1.jsxs)(
                    jsx_runtime_1.Fragment,
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)(
                          Alert_1.Alert,
                          __assign(
                            {
                              variant: Alert_1.AlertVariant.warning,
                              isInline: true,
                              title: i18n.dmnRunner.modal.wizard.outdatedAlert.title,
                            },
                            { children: i18n.dmnRunner.modal.wizard.outdatedAlert.message }
                          ),
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)("br", {}, void 0),
                      ],
                    },
                    void 0
                  ),
                (0, jsx_runtime_1.jsxs)(
                  List_1.List,
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(
                        List_1.ListItem,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Text_1.TextContent,
                            {
                              children: (0, jsx_runtime_1.jsxs)(
                                Text_1.Text,
                                __assign(
                                  { component: Text_1.TextVariants.p },
                                  {
                                    children: [
                                      (0, jsx_runtime_1.jsx)(
                                        Text_1.Text,
                                        __assign(
                                          {
                                            id: "kie-sandbox-extended-services-modal-download-macos",
                                            component: Text_1.TextVariants.a,
                                            href: downloadKieSandboxExtendedServicesUrl,
                                          },
                                          { children: i18n.terms.download }
                                        ),
                                        void 0
                                      ),
                                      i18n.dmnRunner.modal.wizard.macos.install.download,
                                    ],
                                  }
                                ),
                                void 0
                              ),
                            },
                            void 0
                          ),
                        },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)(
                        List_1.ListItem,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Text_1.TextContent,
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                Text_1.Text,
                                __assign(
                                  { component: Text_1.TextVariants.p },
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      react_components_1.I18nWrapped,
                                      __assign(
                                        {
                                          components: {
                                            file: (0, jsx_runtime_1.jsx)(
                                              Label_1.Label,
                                              { children: KIE_SANDBOX_EXTENDED_SERVICES_MACOS_DMG },
                                              void 0
                                            ),
                                          },
                                        },
                                        { children: i18n.dmnRunner.modal.wizard.macos.install.openFile }
                                      ),
                                      void 0
                                    ),
                                  }
                                ),
                                void 0
                              ),
                            },
                            void 0
                          ),
                        },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)(
                        List_1.ListItem,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Text_1.TextContent,
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                Text_1.Text,
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    react_components_1.I18nWrapped,
                                    __assign(
                                      {
                                        components: {
                                          file: (0, jsx_runtime_1.jsx)(
                                            Label_1.Label,
                                            { children: KIE_SANDBOX_EXTENDED_SERVICES_MACOS_APP },
                                            void 0
                                          ),
                                          folder: (0, jsx_runtime_1.jsx)(
                                            Label_1.Label,
                                            { children: i18n.terms.macosApplicationFolder },
                                            void 0
                                          ),
                                        },
                                      },
                                      {
                                        children:
                                          i18n.dmnRunner.modal.wizard.macos.install.dragFileToApplicationsFolder,
                                      }
                                    ),
                                    void 0
                                  ),
                                },
                                void 0
                              ),
                            },
                            void 0
                          ),
                        },
                        void 0
                      ),
                    ],
                  },
                  void 0
                ),
              ],
            },
            void 0
          ),
        },
        {
          name: i18n.terms.start,
          component: (0, jsx_runtime_1.jsx)(
            jsx_runtime_1.Fragment,
            {
              children:
                kieSandboxExtendedServices.status ===
                KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.STOPPED
                  ? (0, jsx_runtime_1.jsxs)(
                      jsx_runtime_1.Fragment,
                      {
                        children: [
                          (0, jsx_runtime_1.jsx)(
                            Alert_1.Alert,
                            __assign(
                              {
                                variant: Alert_1.AlertVariant.warning,
                                isInline: true,
                                title: i18n.dmnRunner.modal.wizard.stoppedAlert.title,
                              },
                              { children: i18n.dmnRunner.modal.wizard.stoppedAlert.message }
                            ),
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          (0, jsx_runtime_1.jsxs)(
                            List_1.List,
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)(
                                  List_1.ListItem,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      Text_1.TextContent,
                                      {
                                        children: (0, jsx_runtime_1.jsx)(
                                          Text_1.Text,
                                          __assign(
                                            { component: Text_1.TextVariants.p },
                                            {
                                              children:
                                                i18n.dmnRunner.modal.wizard.macos.start.stopped.startInstruction,
                                            }
                                          ),
                                          void 0
                                        ),
                                      },
                                      void 0
                                    ),
                                  },
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)(
                                  List_1.ListItem,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      Text_1.TextContent,
                                      {
                                        children: (0, jsx_runtime_1.jsx)(
                                          Text_1.Text,
                                          __assign(
                                            { component: Text_1.TextVariants.p },
                                            {
                                              children: (0, jsx_runtime_1.jsx)(
                                                react_components_1.I18nWrapped,
                                                __assign(
                                                  {
                                                    components: {
                                                      file: (0, jsx_runtime_1.jsx)(
                                                        Label_1.Label,
                                                        { children: KIE_SANDBOX_EXTENDED_SERVICES_MACOS_APP },
                                                        void 0
                                                      ),
                                                    },
                                                  },
                                                  {
                                                    children:
                                                      i18n.dmnRunner.modal.wizard.macos.start.stopped
                                                        .launchKieSandboxExtendedServices,
                                                  }
                                                ),
                                                void 0
                                              ),
                                            }
                                          ),
                                          void 0
                                        ),
                                      },
                                      void 0
                                    ),
                                  },
                                  void 0
                                ),
                              ],
                            },
                            void 0
                          ),
                        ],
                      },
                      void 0
                    )
                  : (0, jsx_runtime_1.jsxs)(
                      jsx_runtime_1.Fragment,
                      {
                        children: [
                          (0, jsx_runtime_1.jsx)(
                            Text_1.TextContent,
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                Text_1.Text,
                                __assign(
                                  { component: Text_1.TextVariants.p },
                                  { children: i18n.dmnRunner.modal.wizard.macos.start.firstTime.title }
                                ),
                                void 0
                              ),
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          (0, jsx_runtime_1.jsxs)(
                            List_1.List,
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)(
                                  List_1.ListItem,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      Text_1.TextContent,
                                      {
                                        children: (0, jsx_runtime_1.jsx)(
                                          Text_1.Text,
                                          __assign(
                                            { component: Text_1.TextVariants.p },
                                            {
                                              children: (0, jsx_runtime_1.jsx)(
                                                react_components_1.I18nWrapped,
                                                __assign(
                                                  {
                                                    components: {
                                                      folder: (0, jsx_runtime_1.jsx)(
                                                        Label_1.Label,
                                                        { children: i18n.terms.macosApplicationFolder },
                                                        void 0
                                                      ),
                                                    },
                                                  },
                                                  {
                                                    children:
                                                      i18n.dmnRunner.modal.wizard.macos.start.firstTime
                                                        .openApplicationsFolder,
                                                  }
                                                ),
                                                void 0
                                              ),
                                            }
                                          ),
                                          void 0
                                        ),
                                      },
                                      void 0
                                    ),
                                  },
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)(
                                  List_1.ListItem,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      Text_1.TextContent,
                                      {
                                        children: (0, jsx_runtime_1.jsx)(
                                          Text_1.Text,
                                          __assign(
                                            { component: Text_1.TextVariants.p },
                                            {
                                              children: (0, jsx_runtime_1.jsx)(
                                                react_components_1.I18nWrapped,
                                                __assign(
                                                  {
                                                    components: {
                                                      file: (0, jsx_runtime_1.jsx)(
                                                        Label_1.Label,
                                                        { children: KIE_SANDBOX_EXTENDED_SERVICES_MACOS_APP },
                                                        void 0
                                                      ),
                                                    },
                                                  },
                                                  {
                                                    children:
                                                      i18n.dmnRunner.modal.wizard.macos.start.firstTime.openAndCancel,
                                                  }
                                                ),
                                                void 0
                                              ),
                                            }
                                          ),
                                          void 0
                                        ),
                                      },
                                      void 0
                                    ),
                                  },
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)(
                                  List_1.ListItem,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      Text_1.TextContent,
                                      {
                                        children: (0, jsx_runtime_1.jsx)(
                                          Text_1.Text,
                                          __assign(
                                            { component: Text_1.TextVariants.p },
                                            {
                                              children: (0, jsx_runtime_1.jsx)(
                                                react_components_1.I18nWrapped,
                                                __assign(
                                                  {
                                                    components: {
                                                      file: (0, jsx_runtime_1.jsx)(
                                                        Label_1.Label,
                                                        { children: KIE_SANDBOX_EXTENDED_SERVICES_MACOS_APP },
                                                        void 0
                                                      ),
                                                      again: (0, jsx_runtime_1.jsx)(
                                                        "b",
                                                        {
                                                          children:
                                                            i18n.dmnRunner.modal.wizard.macos.start.firstTime.again,
                                                        },
                                                        void 0
                                                      ),
                                                    },
                                                  },
                                                  {
                                                    children:
                                                      i18n.dmnRunner.modal.wizard.macos.start.firstTime.openInstruction,
                                                  }
                                                ),
                                                void 0
                                              ),
                                            }
                                          ),
                                          void 0
                                        ),
                                      },
                                      void 0
                                    ),
                                  },
                                  void 0
                                ),
                              ],
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          (0, jsx_runtime_1.jsx)(
                            Text_1.TextContent,
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                Text_1.Text,
                                __assign(
                                  { component: Text_1.TextVariants.p },
                                  { children: i18n.dmnRunner.modal.wizard.macos.start.alreadyRanBefore }
                                ),
                                void 0
                              ),
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          (0, jsx_runtime_1.jsx)(
                            List_1.List,
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                List_1.ListItem,
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    Text_1.TextContent,
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        Text_1.Text,
                                        __assign(
                                          { component: Text_1.TextVariants.p },
                                          {
                                            children: (0, jsx_runtime_1.jsx)(
                                              react_components_1.I18nWrapped,
                                              __assign(
                                                {
                                                  components: {
                                                    file: (0, jsx_runtime_1.jsx)(
                                                      Label_1.Label,
                                                      { children: KIE_SANDBOX_EXTENDED_SERVICES_MACOS_APP },
                                                      void 0
                                                    ),
                                                  },
                                                },
                                                {
                                                  children:
                                                    i18n.dmnRunner.modal.wizard.macos.start
                                                      .launchKieSandboxExtendedServices,
                                                }
                                              ),
                                              void 0
                                            ),
                                          }
                                        ),
                                        void 0
                                      ),
                                    },
                                    void 0
                                  ),
                                },
                                void 0
                              ),
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          (0, jsx_runtime_1.jsx)("hr", {}, void 0),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          (0, jsx_runtime_1.jsxs)(
                            ExpandableSection_1.ExpandableSection,
                            __assign(
                              {
                                toggleTextExpanded: i18n.dmnRunner.modal.wizard.macos.start.advanced.title,
                                toggleTextCollapsed: i18n.dmnRunner.modal.wizard.macos.start.advanced.title,
                              },
                              {
                                children: [
                                  (0, jsx_runtime_1.jsx)(KieSandboxExtendedServicesPortForm, {}, void 0),
                                  (0, jsx_runtime_1.jsx)("br", {}, void 0),
                                  (0, jsx_runtime_1.jsx)(
                                    Text_1.TextContent,
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        Text_1.Text,
                                        __assign(
                                          { component: Text_1.TextVariants.p },
                                          {
                                            children:
                                              i18n.dmnRunner.modal.wizard.macos.start.advanced.runFollowingCommand,
                                          }
                                        ),
                                        void 0
                                      ),
                                    },
                                    void 0
                                  ),
                                  (0, jsx_runtime_1.jsx)("br", {}, void 0),
                                  (0, jsx_runtime_1.jsx)(
                                    Text_1.TextContent,
                                    {
                                      children: (0, jsx_runtime_1.jsxs)(
                                        Text_1.Text,
                                        __assign(
                                          { component: Text_1.TextVariants.p, className: "kogito--code" },
                                          {
                                            children: [
                                              "/Applications/KIE\\ Tooling\\ Extended\\ Services.app/Contents/MacOs/kogito -p",
                                              " ",
                                              kieSandboxExtendedServices.config.port,
                                            ],
                                          }
                                        ),
                                        void 0
                                      ),
                                    },
                                    void 0
                                  ),
                                  (0, jsx_runtime_1.jsx)("br", {}, void 0),
                                ],
                              }
                            ),
                            void 0
                          ),
                        ],
                      },
                      void 0
                    ),
            },
            void 0
          ),
        },
      ];
    },
    [
      i18n,
      kieSandboxExtendedServices.outdated,
      kieSandboxExtendedServices.status,
      kieSandboxExtendedServices.config.port,
      downloadKieSandboxExtendedServicesUrl,
      KIE_SANDBOX_EXTENDED_SERVICES_MACOS_DMG,
      KIE_SANDBOX_EXTENDED_SERVICES_MACOS_APP,
    ]
  );
  var windowsWizardSteps = (0, react_1.useMemo)(
    function () {
      return [
        {
          name: i18n.terms.install,
          component: (0, jsx_runtime_1.jsxs)(
            jsx_runtime_1.Fragment,
            {
              children: [
                kieSandboxExtendedServices.outdated &&
                  (0, jsx_runtime_1.jsxs)(
                    jsx_runtime_1.Fragment,
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)(
                          Alert_1.Alert,
                          __assign(
                            {
                              variant: Alert_1.AlertVariant.warning,
                              isInline: true,
                              title: i18n.dmnRunner.modal.wizard.outdatedAlert.title,
                            },
                            { children: i18n.dmnRunner.modal.wizard.outdatedAlert.message }
                          ),
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)("br", {}, void 0),
                      ],
                    },
                    void 0
                  ),
                (0, jsx_runtime_1.jsxs)(
                  List_1.List,
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(
                        List_1.ListItem,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Text_1.TextContent,
                            {
                              children: (0, jsx_runtime_1.jsxs)(
                                Text_1.Text,
                                __assign(
                                  { component: Text_1.TextVariants.p },
                                  {
                                    children: [
                                      (0, jsx_runtime_1.jsx)(
                                        Text_1.Text,
                                        __assign(
                                          {
                                            id: "kie-sandbox-extended-services-modal-download-windows",
                                            component: Text_1.TextVariants.a,
                                            href: downloadKieSandboxExtendedServicesUrl,
                                          },
                                          { children: i18n.terms.download }
                                        ),
                                        void 0
                                      ),
                                      i18n.dmnRunner.modal.wizard.windows.install.keepDownload,
                                    ],
                                  }
                                ),
                                void 0
                              ),
                            },
                            void 0
                          ),
                        },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)(
                        List_1.ListItem,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Text_1.TextContent,
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                react_components_1.I18nWrapped,
                                __assign(
                                  {
                                    components: {
                                      file: (0, jsx_runtime_1.jsx)(
                                        Label_1.Label,
                                        { children: KIE_SANDBOX_EXTENDED_SERVICES_WINDOWS_EXE },
                                        void 0
                                      ),
                                    },
                                  },
                                  { children: i18n.dmnRunner.modal.wizard.windows.install.moveTheFile }
                                ),
                                void 0
                              ),
                            },
                            void 0
                          ),
                        },
                        void 0
                      ),
                    ],
                  },
                  void 0
                ),
              ],
            },
            void 0
          ),
        },
        {
          name: i18n.terms.start,
          component: (0, jsx_runtime_1.jsx)(
            jsx_runtime_1.Fragment,
            {
              children:
                kieSandboxExtendedServices.status ===
                KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.STOPPED
                  ? (0, jsx_runtime_1.jsxs)(
                      jsx_runtime_1.Fragment,
                      {
                        children: [
                          (0, jsx_runtime_1.jsx)(
                            Alert_1.Alert,
                            __assign(
                              {
                                variant: Alert_1.AlertVariant.warning,
                                isInline: true,
                                title: i18n.dmnRunner.modal.wizard.stoppedAlert.title,
                              },
                              { children: i18n.dmnRunner.modal.wizard.stoppedAlert.message }
                            ),
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          (0, jsx_runtime_1.jsxs)(
                            List_1.List,
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)(
                                  List_1.ListItem,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      Text_1.TextContent,
                                      {
                                        children: (0, jsx_runtime_1.jsx)(
                                          Text_1.Text,
                                          __assign(
                                            { component: Text_1.TextVariants.p },
                                            {
                                              children:
                                                i18n.dmnRunner.modal.wizard.windows.start.stopped.startInstruction,
                                            }
                                          ),
                                          void 0
                                        ),
                                      },
                                      void 0
                                    ),
                                  },
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)(
                                  List_1.ListItem,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      Text_1.TextContent,
                                      {
                                        children: (0, jsx_runtime_1.jsx)(
                                          Text_1.Text,
                                          __assign(
                                            { component: Text_1.TextVariants.p },
                                            {
                                              children: (0, jsx_runtime_1.jsx)(
                                                react_components_1.I18nWrapped,
                                                __assign(
                                                  {
                                                    components: {
                                                      file: (0, jsx_runtime_1.jsx)(
                                                        Label_1.Label,
                                                        { children: KIE_SANDBOX_EXTENDED_SERVICES_WINDOWS_EXE },
                                                        void 0
                                                      ),
                                                    },
                                                  },
                                                  {
                                                    children:
                                                      i18n.dmnRunner.modal.wizard.windows.start.stopped
                                                        .launchKieSandboxExtendedServices,
                                                  }
                                                ),
                                                void 0
                                              ),
                                            }
                                          ),
                                          void 0
                                        ),
                                      },
                                      void 0
                                    ),
                                  },
                                  void 0
                                ),
                              ],
                            },
                            void 0
                          ),
                        ],
                      },
                      void 0
                    )
                  : (0, jsx_runtime_1.jsxs)(
                      jsx_runtime_1.Fragment,
                      {
                        children: [
                          (0, jsx_runtime_1.jsx)(
                            Text_1.TextContent,
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                Text_1.Text,
                                __assign(
                                  { component: Text_1.TextVariants.p },
                                  { children: i18n.dmnRunner.modal.wizard.windows.start.firstTime.title }
                                ),
                                void 0
                              ),
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          (0, jsx_runtime_1.jsxs)(
                            List_1.List,
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)(
                                  List_1.ListItem,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      Text_1.TextContent,
                                      {
                                        children: (0, jsx_runtime_1.jsx)(
                                          Text_1.Text,
                                          __assign(
                                            { component: Text_1.TextVariants.p },
                                            {
                                              children: (0, jsx_runtime_1.jsx)(
                                                react_components_1.I18nWrapped,
                                                __assign(
                                                  {
                                                    components: {
                                                      file: (0, jsx_runtime_1.jsx)(
                                                        Label_1.Label,
                                                        { children: KIE_SANDBOX_EXTENDED_SERVICES_WINDOWS_EXE },
                                                        void 0
                                                      ),
                                                    },
                                                  },
                                                  {
                                                    children:
                                                      i18n.dmnRunner.modal.wizard.windows.start.firstTime.openFolder,
                                                  }
                                                ),
                                                void 0
                                              ),
                                            }
                                          ),
                                          void 0
                                        ),
                                      },
                                      void 0
                                    ),
                                  },
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)(
                                  List_1.ListItem,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      Text_1.TextContent,
                                      {
                                        children: (0, jsx_runtime_1.jsx)(
                                          Text_1.Text,
                                          __assign(
                                            { component: Text_1.TextVariants.p },
                                            { children: i18n.dmnRunner.modal.wizard.windows.start.firstTime.runAnyway }
                                          ),
                                          void 0
                                        ),
                                      },
                                      void 0
                                    ),
                                  },
                                  void 0
                                ),
                              ],
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          (0, jsx_runtime_1.jsx)(
                            Text_1.TextContent,
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                Text_1.Text,
                                __assign(
                                  { component: Text_1.TextVariants.p },
                                  { children: i18n.dmnRunner.modal.wizard.windows.start.alreadyRanBefore }
                                ),
                                void 0
                              ),
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          (0, jsx_runtime_1.jsx)(
                            List_1.List,
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                List_1.ListItem,
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    Text_1.TextContent,
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        Text_1.Text,
                                        __assign(
                                          { component: Text_1.TextVariants.p },
                                          {
                                            children: (0, jsx_runtime_1.jsx)(
                                              react_components_1.I18nWrapped,
                                              __assign(
                                                {
                                                  components: {
                                                    file: (0, jsx_runtime_1.jsx)(
                                                      Label_1.Label,
                                                      { children: KIE_SANDBOX_EXTENDED_SERVICES_WINDOWS_EXE },
                                                      void 0
                                                    ),
                                                  },
                                                },
                                                {
                                                  children:
                                                    i18n.dmnRunner.modal.wizard.windows.start
                                                      .launchKieSandboxExtendedServices,
                                                }
                                              ),
                                              void 0
                                            ),
                                          }
                                        ),
                                        void 0
                                      ),
                                    },
                                    void 0
                                  ),
                                },
                                void 0
                              ),
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          (0, jsx_runtime_1.jsx)("hr", {}, void 0),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          (0, jsx_runtime_1.jsxs)(
                            ExpandableSection_1.ExpandableSection,
                            __assign(
                              {
                                toggleTextExpanded: i18n.dmnRunner.modal.wizard.windows.start.advanced.title,
                                toggleTextCollapsed: i18n.dmnRunner.modal.wizard.windows.start.advanced.title,
                              },
                              {
                                children: [
                                  (0, jsx_runtime_1.jsx)(KieSandboxExtendedServicesPortForm, {}, void 0),
                                  (0, jsx_runtime_1.jsx)("br", {}, void 0),
                                  (0, jsx_runtime_1.jsx)(
                                    Text_1.TextContent,
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        Text_1.Text,
                                        __assign(
                                          { component: Text_1.TextVariants.p },
                                          {
                                            children:
                                              i18n.dmnRunner.modal.wizard.windows.start.advanced.runFollowingCommand,
                                          }
                                        ),
                                        void 0
                                      ),
                                    },
                                    void 0
                                  ),
                                  (0, jsx_runtime_1.jsx)("br", {}, void 0),
                                  (0, jsx_runtime_1.jsx)(
                                    Text_1.TextContent,
                                    {
                                      children: (0, jsx_runtime_1.jsxs)(
                                        Text_1.Text,
                                        __assign(
                                          { component: Text_1.TextVariants.p, className: "kogito--code" },
                                          {
                                            children: [
                                              '"kie-sandbox-extended-services_windows_',
                                              kieSandboxExtendedServices.version,
                                              '.exe" -p',
                                              " ",
                                              kieSandboxExtendedServices.config.port,
                                            ],
                                          }
                                        ),
                                        void 0
                                      ),
                                    },
                                    void 0
                                  ),
                                  (0, jsx_runtime_1.jsx)("br", {}, void 0),
                                ],
                              }
                            ),
                            void 0
                          ),
                        ],
                      },
                      void 0
                    ),
            },
            void 0
          ),
        },
      ];
    },
    [
      i18n,
      kieSandboxExtendedServices.outdated,
      kieSandboxExtendedServices.status,
      kieSandboxExtendedServices.version,
      kieSandboxExtendedServices.config.port,
      downloadKieSandboxExtendedServicesUrl,
      KIE_SANDBOX_EXTENDED_SERVICES_WINDOWS_EXE,
    ]
  );
  var linuxWizardSteps = (0, react_1.useMemo)(
    function () {
      return [
        {
          name: i18n.terms.install,
          component: (0, jsx_runtime_1.jsxs)(
            jsx_runtime_1.Fragment,
            {
              children: [
                kieSandboxExtendedServices.outdated &&
                  (0, jsx_runtime_1.jsxs)(
                    jsx_runtime_1.Fragment,
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)(
                          Alert_1.Alert,
                          __assign(
                            {
                              variant: Alert_1.AlertVariant.warning,
                              isInline: true,
                              title: i18n.dmnRunner.modal.wizard.outdatedAlert.title,
                            },
                            { children: i18n.dmnRunner.modal.wizard.outdatedAlert.message }
                          ),
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)("br", {}, void 0),
                      ],
                    },
                    void 0
                  ),
                (0, jsx_runtime_1.jsxs)(
                  List_1.List,
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(
                        List_1.ListItem,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Text_1.TextContent,
                            {
                              children: (0, jsx_runtime_1.jsxs)(
                                Text_1.Text,
                                __assign(
                                  { component: Text_1.TextVariants.p },
                                  {
                                    children: [
                                      (0, jsx_runtime_1.jsx)(
                                        Text_1.Text,
                                        __assign(
                                          {
                                            id: "kie-sandbox-extended-services-modal-download-linux",
                                            component: Text_1.TextVariants.a,
                                            href: downloadKieSandboxExtendedServicesUrl,
                                          },
                                          { children: i18n.terms.download }
                                        ),
                                        void 0
                                      ),
                                      " ",
                                      i18n.dmnRunner.modal.wizard.linux.install.download,
                                    ],
                                  }
                                ),
                                void 0
                              ),
                            },
                            void 0
                          ),
                        },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)(
                        List_1.ListItem,
                        {
                          children: (0, jsx_runtime_1.jsxs)(
                            Text_1.TextContent,
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)(
                                  Text_1.Text,
                                  __assign(
                                    { component: Text_1.TextVariants.p },
                                    { children: i18n.dmnRunner.modal.wizard.linux.install.installAppIndicator }
                                  ),
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsxs)(
                                  List_1.List,
                                  {
                                    children: [
                                      (0, jsx_runtime_1.jsx)(
                                        List_1.ListItem,
                                        {
                                          children: (0, jsx_runtime_1.jsx)(
                                            react_components_1.I18nWrapped,
                                            __assign(
                                              {
                                                components: {
                                                  package: (0, jsx_runtime_1.jsx)(
                                                    Label_1.Label,
                                                    { children: UBUNTU_APP_INDICATOR_LIB },
                                                    void 0
                                                  ),
                                                },
                                              },
                                              { children: i18n.dmnRunner.modal.wizard.linux.install.ubuntuDependency }
                                            ),
                                            void 0
                                          ),
                                        },
                                        void 0
                                      ),
                                      (0, jsx_runtime_1.jsx)(
                                        List_1.ListItem,
                                        {
                                          children: (0, jsx_runtime_1.jsx)(
                                            react_components_1.I18nWrapped,
                                            __assign(
                                              {
                                                components: {
                                                  package: (0, jsx_runtime_1.jsx)(
                                                    Label_1.Label,
                                                    { children: FEDORA_APP_INDICATOR_LIB },
                                                    void 0
                                                  ),
                                                },
                                              },
                                              { children: i18n.dmnRunner.modal.wizard.linux.install.fedoraDependency }
                                            ),
                                            void 0
                                          ),
                                        },
                                        void 0
                                      ),
                                    ],
                                  },
                                  void 0
                                ),
                              ],
                            },
                            void 0
                          ),
                        },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)(
                        List_1.ListItem,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Text_1.TextContent,
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                Text_1.Text,
                                __assign(
                                  { component: Text_1.TextVariants.p },
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      react_components_1.I18nWrapped,
                                      __assign(
                                        {
                                          components: {
                                            file: (0, jsx_runtime_1.jsx)(
                                              Label_1.Label,
                                              { children: KIE_SANDBOX_EXTENDED_SERVICES_LINUX_TAG_GZ },
                                              void 0
                                            ),
                                          },
                                        },
                                        { children: i18n.dmnRunner.modal.wizard.linux.install.extractContent }
                                      ),
                                      void 0
                                    ),
                                  }
                                ),
                                void 0
                              ),
                            },
                            void 0
                          ),
                        },
                        void 0
                      ),
                    ],
                  },
                  void 0
                ),
                (0, jsx_runtime_1.jsx)("br", {}, void 0),
                (0, jsx_runtime_1.jsx)(
                  Text_1.TextContent,
                  {
                    children: (0, jsx_runtime_1.jsx)(
                      Text_1.Text,
                      __assign(
                        { component: Text_1.TextVariants.p },
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            react_components_1.I18nWrapped,
                            __assign(
                              {
                                components: {
                                  file: (0, jsx_runtime_1.jsx)(
                                    Label_1.Label,
                                    { children: KIE_SANDBOX_EXTENDED_SERVICES_BINARIES },
                                    void 0
                                  ),
                                },
                              },
                              { children: i18n.dmnRunner.modal.wizard.linux.install.binaryExplanation }
                            ),
                            void 0
                          ),
                        }
                      ),
                      void 0
                    ),
                  },
                  void 0
                ),
              ],
            },
            void 0
          ),
        },
        {
          name: i18n.terms.start,
          component: (0, jsx_runtime_1.jsxs)(
            jsx_runtime_1.Fragment,
            {
              children: [
                kieSandboxExtendedServices.status ===
                  KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.STOPPED &&
                  (0, jsx_runtime_1.jsxs)(
                    "div",
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)(
                          Alert_1.Alert,
                          __assign(
                            {
                              variant: Alert_1.AlertVariant.warning,
                              isInline: true,
                              title: i18n.dmnRunner.modal.wizard.stoppedAlert.title,
                            },
                            { children: i18n.dmnRunner.modal.wizard.stoppedAlert.message }
                          ),
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)("br", {}, void 0),
                      ],
                    },
                    void 0
                  ),
                (0, jsx_runtime_1.jsxs)(
                  List_1.List,
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(
                        List_1.ListItem,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Text_1.TextContent,
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                Text_1.Text,
                                __assign(
                                  { component: Text_1.TextVariants.p },
                                  { children: i18n.dmnRunner.modal.wizard.linux.start.openTerminal }
                                ),
                                void 0
                              ),
                            },
                            void 0
                          ),
                        },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)(
                        List_1.ListItem,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Text_1.TextContent,
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                Text_1.Text,
                                __assign(
                                  { component: Text_1.TextVariants.p },
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      react_components_1.I18nWrapped,
                                      __assign(
                                        {
                                          components: {
                                            file: (0, jsx_runtime_1.jsx)(
                                              Label_1.Label,
                                              { children: KIE_SANDBOX_EXTENDED_SERVICES_BINARIES },
                                              void 0
                                            ),
                                          },
                                        },
                                        { children: i18n.dmnRunner.modal.wizard.linux.start.goToFolder }
                                      ),
                                      void 0
                                    ),
                                  }
                                ),
                                void 0
                              ),
                            },
                            void 0
                          ),
                        },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)(
                        List_1.ListItem,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Text_1.TextContent,
                            {
                              children: (0, jsx_runtime_1.jsxs)(
                                Text_1.Text,
                                __assign(
                                  { component: Text_1.TextVariants.p },
                                  {
                                    children: [
                                      i18n.dmnRunner.modal.wizard.linux.start.runCommand,
                                      (0, jsx_runtime_1.jsx)(
                                        Text_1.Text,
                                        __assign(
                                          { component: Text_1.TextVariants.p, className: "kogito--code" },
                                          { children: "./kie_sandbox_extended_services" }
                                        ),
                                        void 0
                                      ),
                                    ],
                                  }
                                ),
                                void 0
                              ),
                            },
                            void 0
                          ),
                        },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)("br", {}, void 0),
                      (0, jsx_runtime_1.jsx)("hr", {}, void 0),
                      (0, jsx_runtime_1.jsx)("br", {}, void 0),
                      (0, jsx_runtime_1.jsxs)(
                        ExpandableSection_1.ExpandableSection,
                        __assign(
                          {
                            toggleTextExpanded: i18n.dmnRunner.modal.wizard.linux.start.advanced.title,
                            toggleTextCollapsed: i18n.dmnRunner.modal.wizard.linux.start.advanced.title,
                          },
                          {
                            children: [
                              (0, jsx_runtime_1.jsx)(KieSandboxExtendedServicesPortForm, {}, void 0),
                              (0, jsx_runtime_1.jsx)("br", {}, void 0),
                              (0, jsx_runtime_1.jsx)(
                                Text_1.TextContent,
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    Text_1.Text,
                                    __assign(
                                      { component: Text_1.TextVariants.p },
                                      {
                                        children: (0, jsx_runtime_1.jsx)(
                                          react_components_1.I18nWrapped,
                                          __assign(
                                            {
                                              components: {
                                                file: (0, jsx_runtime_1.jsx)(
                                                  Label_1.Label,
                                                  { children: KIE_SANDBOX_EXTENDED_SERVICES_BINARIES },
                                                  void 0
                                                ),
                                              },
                                            },
                                            {
                                              children:
                                                i18n.dmnRunner.modal.wizard.linux.start.advanced.runFollowingCommand,
                                            }
                                          ),
                                          void 0
                                        ),
                                      }
                                    ),
                                    void 0
                                  ),
                                },
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)("br", {}, void 0),
                              (0, jsx_runtime_1.jsx)(
                                Text_1.TextContent,
                                {
                                  children: (0, jsx_runtime_1.jsxs)(
                                    Text_1.Text,
                                    __assign(
                                      { component: Text_1.TextVariants.p, className: "kogito--code" },
                                      {
                                        children: [
                                          "./kie-sandbox-extended-services -p ",
                                          kieSandboxExtendedServices.config.port,
                                        ],
                                      }
                                    ),
                                    void 0
                                  ),
                                },
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)("br", {}, void 0),
                            ],
                          }
                        ),
                        void 0
                      ),
                    ],
                  },
                  void 0
                ),
              ],
            },
            void 0
          ),
        },
      ];
    },
    [
      i18n,
      kieSandboxExtendedServices.outdated,
      kieSandboxExtendedServices.status,
      kieSandboxExtendedServices.config.port,
      downloadKieSandboxExtendedServicesUrl,
      KIE_SANDBOX_EXTENDED_SERVICES_LINUX_TAG_GZ,
      KIE_SANDBOX_EXTENDED_SERVICES_BINARIES,
    ]
  );
  var wizardSteps = (0, react_1.useMemo)(
    function () {
      switch (operatingSystem) {
        case operating_system_1.OperatingSystem.MACOS:
          return macOsWizardSteps;
        case operating_system_1.OperatingSystem.WINDOWS:
          return windowsWizardSteps;
        case operating_system_1.OperatingSystem.LINUX:
        default:
          return linuxWizardSteps;
      }
    },
    [operatingSystem, macOsWizardSteps, windowsWizardSteps, linuxWizardSteps]
  );
  (0, react_1.useEffect)(
    function () {
      if (
        kieSandboxExtendedServices.status ===
        KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.NOT_RUNNING
      ) {
        setModalPage(ModalPage.INITIAL);
      } else if (
        kieSandboxExtendedServices.status ===
        KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.STOPPED
      ) {
        setModalPage(ModalPage.WIZARD);
      } else if (
        kieSandboxExtendedServices.status ===
        KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING
      ) {
        setModalPage(ModalPage.USE);
      }
      if (kieSandboxExtendedServices.outdated) {
        setModalPage(ModalPage.WIZARD);
      }
    },
    [kieSandboxExtendedServices.status, kieSandboxExtendedServices.outdated]
  );
  var onClose = (0, react_1.useCallback)(
    function () {
      setModalPage(ModalPage.INITIAL);
      kieSandboxExtendedServices.setModalOpen(false);
      if (
        kieSandboxExtendedServices.status ===
          KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.STOPPED ||
        kieSandboxExtendedServices.outdated
      ) {
        kieSandboxExtendedServices.setStatus(
          KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.NOT_RUNNING
        );
      }
    },
    [kieSandboxExtendedServices]
  );
  var modalTitle = (0, react_1.useMemo)(
    function () {
      switch (modalPage) {
        case ModalPage.INITIAL:
        case ModalPage.USE:
          return "";
        case ModalPage.WIZARD:
          return i18n.dmnRunner.modal.wizard.title;
      }
    },
    [modalPage, i18n]
  );
  var modalVariant = (0, react_1.useMemo)(
    function () {
      switch (modalPage) {
        case ModalPage.INITIAL:
        case ModalPage.USE:
          return Modal_1.ModalVariant.medium;
        case ModalPage.WIZARD:
          return Modal_1.ModalVariant.large;
      }
    },
    [modalPage]
  );
  return (0, jsx_runtime_1.jsxs)(
    Modal_1.Modal,
    __assign(
      {
        ouiaId: "kie-sandbox-extended-services-modal",
        isOpen: kieSandboxExtendedServices.isModalOpen,
        onClose: onClose,
        variant: modalVariant,
        "aria-label": "Steps to enable the Kie Sandbox Extended Services",
        title: modalTitle,
        description:
          modalPage === ModalPage.WIZARD &&
          (0, jsx_runtime_1.jsx)("p", { children: i18n.dmnRunner.modal.wizard.description }, void 0),
        footer: (0, jsx_runtime_1.jsxs)(
          jsx_runtime_1.Fragment,
          {
            children: [
              modalPage === ModalPage.INITIAL &&
                (0, jsx_runtime_1.jsx)(
                  Button_1.Button,
                  __assign(
                    {
                      className: "pf-u-mt-xl kogito--editor__kie-sandbox-extended-services-modal-initial-center",
                      onClick: function () {
                        return setModalPage(ModalPage.WIZARD);
                      },
                    },
                    { children: i18n.terms.setup }
                  ),
                  void 0
                ),
              modalPage === ModalPage.WIZARD &&
                (0, jsx_runtime_1.jsx)(
                  "div",
                  __assign(
                    { className: "kogito--editor__kie-sandbox-extended-services-modal-footer" },
                    {
                      children: (0, jsx_runtime_1.jsx)(
                        Alert_1.Alert,
                        {
                          variant: "default",
                          isInline: true,
                          className: "kogito--editor__kie-sandbox-extended-services-modal-footer-alert",
                          title: (0, jsx_runtime_1.jsx)(
                            AnimatedTripleDotLabel_1.AnimatedTripleDotLabel,
                            { label: i18n.dmnRunner.modal.wizard.footerWaitingToConnect, interval: 750 },
                            void 0
                          ),
                        },
                        void 0
                      ),
                    }
                  ),
                  void 0
                ),
              modalPage === ModalPage.USE && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0),
            ],
          },
          void 0
        ),
      },
      {
        children: [
          modalPage === ModalPage.INITIAL &&
            (0, jsx_runtime_1.jsxs)(
              "div",
              __assign(
                { className: "kogito--editor__kie-sandbox-extended-services-modal-initial" },
                {
                  children: [
                    (0, jsx_runtime_1.jsx)(
                      "div",
                      __assign(
                        { className: "kogito--editor__kie-sandbox-extended-services-modal-initial-title" },
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Text_1.TextContent,
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                Text_1.Text,
                                __assign(
                                  { component: Text_1.TextVariants.h1 },
                                  {
                                    children:
                                      kieSandboxExtendedServices.installTriggeredBy ===
                                      KieSandboxExtendedServicesContext_1.DependentFeature.DMN_DEV_SANDBOX
                                        ? i18n.names.dmnDevSandbox
                                        : i18n.names.dmnRunner,
                                  }
                                ),
                                void 0
                              ),
                            },
                            void 0
                          ),
                        }
                      ),
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)(
                      "div",
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          Text_1.TextContent,
                          __assign(
                            { className: "pf-u-mt-sm pf-u-mb-md" },
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                Text_1.Text,
                                __assign(
                                  { component: Text_1.TextVariants.p },
                                  { children: i18n.kieSandboxExtendedServices.modal.initial.subHeader }
                                ),
                                void 0
                              ),
                            }
                          ),
                          void 0
                        ),
                      },
                      void 0
                    ),
                    kieSandboxExtendedServices.installTriggeredBy ===
                      KieSandboxExtendedServicesContext_1.DependentFeature.DMN_RUNNER &&
                      (0, jsx_runtime_1.jsxs)(
                        "div",
                        __assign(
                          { className: "pf-u-display-flex pf-u-flex-direction-row" },
                          {
                            children: [
                              (0, jsx_runtime_1.jsxs)(
                                "div",
                                __assign(
                                  { className: "pf-u-w-25 pf-u-ml-sm" },
                                  {
                                    children: [
                                      (0, jsx_runtime_1.jsx)(
                                        Text_1.TextContent,
                                        {
                                          children: (0, jsx_runtime_1.jsx)(
                                            Text_1.Text,
                                            __assign(
                                              { component: Text_1.TextVariants.p },
                                              { children: i18n.dmnRunner.modal.initial.runDmnModels }
                                            ),
                                            void 0
                                          ),
                                        },
                                        void 0
                                      ),
                                      (0, jsx_runtime_1.jsx)(
                                        Text_1.TextContent,
                                        __assign(
                                          { className: "pf-u-mt-md" },
                                          {
                                            children: (0, jsx_runtime_1.jsx)(
                                              Text_1.Text,
                                              __assign(
                                                { component: Text_1.TextVariants.p },
                                                { children: i18n.dmnRunner.modal.initial.explanation }
                                              ),
                                              void 0
                                            ),
                                          }
                                        ),
                                        void 0
                                      ),
                                      (0, jsx_runtime_1.jsx)(
                                        Text_1.TextContent,
                                        __assign(
                                          { className: "pf-u-mt-md" },
                                          {
                                            children: (0, jsx_runtime_1.jsx)(
                                              Text_1.Text,
                                              __assign(
                                                { component: Text_1.TextVariants.p },
                                                {
                                                  children: (0, jsx_runtime_1.jsx)(
                                                    react_components_1.I18nWrapped,
                                                    __assign(
                                                      {
                                                        components: {
                                                          icon: (0, jsx_runtime_1.jsx)(
                                                            exclamation_circle_icon_1.ExclamationCircleIcon,
                                                            {},
                                                            void 0
                                                          ),
                                                        },
                                                      },
                                                      {
                                                        children:
                                                          i18n.dmnRunner.modal.initial.notificationPanelExplanation,
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
                                    ],
                                  }
                                ),
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                "div",
                                __assign(
                                  { className: "pf-u-w-75 pf-u-p-sm" },
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      "img",
                                      {
                                        className: "pf-u-h-100",
                                        src: routes.static.images.dmnRunnerGif.path({}),
                                        alt: "DMN Runner usage",
                                        width: "100%",
                                      },
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
                    kieSandboxExtendedServices.installTriggeredBy ===
                      KieSandboxExtendedServicesContext_1.DependentFeature.DMN_DEV_SANDBOX &&
                      (0, jsx_runtime_1.jsxs)(
                        "div",
                        __assign(
                          { className: "pf-u-mt-xl pf-u-display-flex pf-u-flex-direction-row" },
                          {
                            children: [
                              (0, jsx_runtime_1.jsxs)(
                                "div",
                                __assign(
                                  { className: "pf-u-w-25 pf-u-mr-sm" },
                                  {
                                    children: [
                                      (0, jsx_runtime_1.jsx)(
                                        Text_1.TextContent,
                                        {
                                          children: (0, jsx_runtime_1.jsx)(
                                            Text_1.Text,
                                            __assign(
                                              { component: Text_1.TextVariants.p },
                                              { children: i18n.dmnDevSandbox.introduction.explanation }
                                            ),
                                            void 0
                                          ),
                                        },
                                        void 0
                                      ),
                                      (0, jsx_runtime_1.jsx)(
                                        Text_1.TextContent,
                                        __assign(
                                          { className: "pf-u-mt-md" },
                                          {
                                            children: (0, jsx_runtime_1.jsx)(
                                              Text_1.Text,
                                              __assign(
                                                { component: Text_1.TextVariants.p },
                                                {
                                                  children: (0, jsx_runtime_1.jsx)(
                                                    react_components_1.I18nHtml,
                                                    { children: i18n.dmnDevSandbox.introduction.disclaimer },
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
                                        Text_1.TextContent,
                                        __assign(
                                          { className: "pf-u-mt-md" },
                                          {
                                            children: (0, jsx_runtime_1.jsx)(
                                              Text_1.Text,
                                              __assign(
                                                { component: Text_1.TextVariants.p },
                                                {
                                                  children: (0, jsx_runtime_1.jsxs)(
                                                    Text_1.Text,
                                                    __assign(
                                                      {
                                                        component: Text_1.TextVariants.a,
                                                        href: OpenShiftService_1.DEVELOPER_SANDBOX_URL,
                                                        target: "_blank",
                                                      },
                                                      {
                                                        children: [
                                                          i18n.dmnDevSandbox.common.learnMore,
                                                          (0, jsx_runtime_1.jsx)(
                                                            external_link_alt_icon_1.ExternalLinkAltIcon,
                                                            { className: "pf-u-mx-sm" },
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
                                    ],
                                  }
                                ),
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                "div",
                                __assign(
                                  { className: "pf-u-w-75" },
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      "img",
                                      {
                                        className: "pf-u-h-100",
                                        src: routes.static.images.dmnDevSandboxGif.path({}),
                                        alt: "DMN Dev Sandbox usage",
                                        width: "100%",
                                      },
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
          modalPage === ModalPage.WIZARD &&
            (0, jsx_runtime_1.jsxs)(
              "div",
              {
                children: [
                  (0, jsx_runtime_1.jsx)(
                    Form_1.Form,
                    __assign(
                      { isHorizontal: true },
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          Form_1.FormGroup,
                          __assign(
                            { fieldId: "select-os", label: i18n.terms.os.full },
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                SelectOs_1.SelectOs,
                                {
                                  selected: operatingSystem,
                                  onSelect: setOperatingSystem,
                                  direction: Select_1.SelectDirection.down,
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
                  (0, jsx_runtime_1.jsx)("br", {}, void 0),
                  (0, jsx_runtime_1.jsx)(
                    Wizard_1.Wizard,
                    {
                      steps: wizardSteps,
                      height: 400,
                      footer: (0, jsx_runtime_1.jsx)(
                        KieSandboxExtendedServicesWizardFooter,
                        { onClose: onClose, steps: wizardSteps, setModalPage: setModalPage },
                        void 0
                      ),
                    },
                    void 0
                  ),
                ],
              },
              void 0
            ),
          modalPage === ModalPage.USE &&
            (0, jsx_runtime_1.jsxs)(
              "div",
              __assign(
                { className: "kogito--editor__kie-sandbox-extended-services-modal-use" },
                {
                  children: [
                    (0, jsx_runtime_1.jsx)(
                      "div",
                      __assign(
                        { className: "kogito--editor__kie-sandbox-extended-services-modal-use-title" },
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Text_1.TextContent,
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                Text_1.Text,
                                __assign(
                                  { component: Text_1.TextVariants.h1 },
                                  { children: i18n.dmnRunner.modal.use.title }
                                ),
                                void 0
                              ),
                            },
                            void 0
                          ),
                        }
                      ),
                      void 0
                    ),
                    (0, jsx_runtime_1.jsxs)(
                      "div",
                      __assign(
                        { className: "kogito--editor__kie-sandbox-extended-services-modal-use-main-content" },
                        {
                          children: [
                            (0, jsx_runtime_1.jsx)(
                              Text_1.TextContent,
                              __assign(
                                { className: "kogito--editor__kie-sandbox-extended-services-modal-use-margin" },
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    Text_1.Text,
                                    __assign(
                                      {
                                        component: Text_1.TextVariants.h3,
                                        className: "kogito--editor__kie-sandbox-extended-services-modal-use-text-align",
                                      },
                                      { children: i18n.dmnRunner.modal.use.connected }
                                    ),
                                    void 0
                                  ),
                                }
                              ),
                              void 0
                            ),
                            (0, jsx_runtime_1.jsx)("br", {}, void 0),
                            (0, jsx_runtime_1.jsx)(
                              Button_1.Button,
                              __assign(
                                {
                                  variant: "primary",
                                  type: "submit",
                                  onClick: onClose,
                                  className: "kogito--editor__kie-sandbox-extended-services-modal-use-margin",
                                },
                                { children: i18n.dmnRunner.modal.use.backToEditor }
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
        ],
      }
    ),
    void 0
  );
}
exports.KieSandboxExtendedServicesModal = KieSandboxExtendedServicesModal;
function KieSandboxExtendedServicesWizardFooter(props) {
  var wizardContext = (0, react_1.useContext)(Wizard_1.WizardContext);
  var status = (0, KieSandboxExtendedServicesContext_1.useKieSandboxExtendedServices)().status;
  var i18n = (0, i18n_1.useOnlineI18n)().i18n;
  (0, react_1.useEffect)(
    function () {
      if (status === KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.STOPPED) {
        wizardContext.goToStepByName(props.steps[1].name);
      }
    },
    [status, props.setModalPage]
  );
  return (0, jsx_runtime_1.jsx)(
    Wizard_1.WizardFooter,
    {
      children: (0, jsx_runtime_1.jsx)(
        Wizard_1.WizardContextConsumer,
        {
          children: function (_a) {
            var activeStep = _a.activeStep,
              goToStepByName = _a.goToStepByName,
              goToStepById = _a.goToStepById,
              onNext = _a.onNext,
              onBack = _a.onBack;
            if (activeStep.name !== i18n.terms.start) {
              return (0, jsx_runtime_1.jsx)(
                jsx_runtime_1.Fragment,
                {
                  children: (0, jsx_runtime_1.jsx)(
                    Button_1.Button,
                    __assign({ variant: "primary", type: "submit", onClick: onNext }, { children: i18n.terms.next }),
                    void 0
                  ),
                },
                void 0
              );
            } else {
              return (0, jsx_runtime_1.jsx)(
                jsx_runtime_1.Fragment,
                {
                  children: (0, jsx_runtime_1.jsx)(
                    Button_1.Button,
                    __assign({ variant: "primary", type: "submit", onClick: onBack }, { children: i18n.terms.back }),
                    void 0
                  ),
                },
                void 0
              );
            }
          },
        },
        void 0
      ),
    },
    void 0
  );
}
function KieSandboxExtendedServicesPortForm() {
  var _a = (0, KieSandboxExtendedServicesContext_1.useKieSandboxExtendedServices)(),
    config = _a.config,
    saveNewConfig = _a.saveNewConfig;
  var i18n = (0, i18n_1.useOnlineI18n)().i18n;
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        (0, jsx_runtime_1.jsx)(
          Text_1.Text,
          __assign(
            { component: Text_1.TextVariants.p },
            {
              children: (0, jsx_runtime_1.jsx)(
                react_components_1.I18nWrapped,
                __assign(
                  {
                    components: {
                      port: (0, jsx_runtime_1.jsx)(
                        Text_1.Text,
                        __assign({ className: "kogito--code" }, { children: config.port }),
                        void 0
                      ),
                    },
                  },
                  { children: i18n.dmnRunner.modal.wizard.advancedSettings.title }
                ),
                void 0
              ),
            }
          ),
          void 0
        ),
        (0, jsx_runtime_1.jsx)("br", {}, void 0),
        (0, jsx_runtime_1.jsx)(
          Form_1.Form,
          __assign(
            { isHorizontal: true },
            {
              children: (0, jsx_runtime_1.jsx)(
                Form_1.FormGroup,
                __assign(
                  {
                    fieldId: "kie-sandbox-extended-services-port",
                    label: i18n.dmnRunner.modal.wizard.advancedSettings.label,
                    validated:
                      config.port === "" || parseInt(config.port, 10) < 0 || parseInt(config.port, 10) > 65353
                        ? "error"
                        : "success",
                    helperTextInvalid: i18n.dmnRunner.modal.wizard.advancedSettings.helperTextInvalid,
                  },
                  {
                    children: (0, jsx_runtime_1.jsx)(
                      TextInput_1.TextInput,
                      {
                        value: config.port,
                        type: "number",
                        onChange: function (value) {
                          return saveNewConfig(new SettingsContext_1.ExtendedServicesConfig(config.host, value));
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
        ),
      ],
    },
    void 0
  );
}
//# sourceMappingURL=KieSandboxExtendedServicesModal.js.map
