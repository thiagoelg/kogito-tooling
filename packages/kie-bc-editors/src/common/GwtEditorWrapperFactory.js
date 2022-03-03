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
var __values =
  (this && this.__values) ||
  function (o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        },
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.GwtEditorWrapperFactory = void 0;
var core_1 = require("@kie-tools-core/i18n/dist/core");
var DefaultXmlFormatter_1 = require("./DefaultXmlFormatter");
var GwtAppFormerApi_1 = require("./GwtAppFormerApi");
var gwtStateControl_1 = require("./gwtStateControl");
var i18n_1 = require("./i18n");
var GwtEditorWrapperFactory = (function () {
  function GwtEditorWrapperFactory(
    languageData,
    gwtEditorDelegate,
    gwtEditorEnvelopeConfig,
    xmlFormatter,
    gwtAppFormerApi,
    gwtStateControlService,
    kieBcEditorsI18n
  ) {
    if (xmlFormatter === void 0) {
      xmlFormatter = new DefaultXmlFormatter_1.DefaultXmlFormatter();
    }
    if (gwtAppFormerApi === void 0) {
      gwtAppFormerApi = new GwtAppFormerApi_1.GwtAppFormerApi();
    }
    if (gwtStateControlService === void 0) {
      gwtStateControlService = new gwtStateControl_1.GwtStateControlService();
    }
    if (kieBcEditorsI18n === void 0) {
      kieBcEditorsI18n = new core_1.I18n(i18n_1.kieBcEditorsI18nDefaults, i18n_1.kieBcEditorsI18nDictionaries);
    }
    this.languageData = languageData;
    this.gwtEditorDelegate = gwtEditorDelegate;
    this.gwtEditorEnvelopeConfig = gwtEditorEnvelopeConfig;
    this.xmlFormatter = xmlFormatter;
    this.gwtAppFormerApi = gwtAppFormerApi;
    this.gwtStateControlService = gwtStateControlService;
    this.kieBcEditorsI18n = kieBcEditorsI18n;
  }
  GwtEditorWrapperFactory.prototype.createEditor = function (envelopeContext, initArgs) {
    var _this = this;
    var _a;
    this.kieBcEditorsI18n.setLocale(initArgs.initialLocale);
    envelopeContext.services.i18n.subscribeToLocaleChange(function (locale) {
      _this.kieBcEditorsI18n.setLocale(locale);
      window.alert("This Editor doesn't support changing locales yet.");
    });
    this.appendGwtLocaleMetaTag();
    this.exposeEnvelopeContext(envelopeContext, initArgs);
    var gwtFinishedLoading = new Promise(function (res) {
      _this.gwtAppFormerApi.onFinishedLoading(function () {
        res(_this.gwtEditorDelegate(_this, initArgs));
        return Promise.resolve();
      });
    });
    if (!this.gwtEditorEnvelopeConfig.shouldLoadResourcesDynamically) {
      (_a = window.startStandaloneEditor) === null || _a === void 0 ? void 0 : _a.call(window);
      return gwtFinishedLoading;
    }
    return Promise.all(
      this.languageData.resources.map(function (resource) {
        return _this.loadResource(resource);
      })
    ).then(function () {
      return gwtFinishedLoading;
    });
  };
  GwtEditorWrapperFactory.prototype.exposeEnvelopeContext = function (envelopeContext, initArgs) {
    var _a;
    window.gwt = {
      stateControl: this.gwtStateControlService.exposeApi(envelopeContext.channelApi),
    };
    window.envelope = __assign(__assign({}, (_a = window.envelope) !== null && _a !== void 0 ? _a : {}), {
      editorContext: {
        operatingSystem: envelopeContext.operatingSystem,
        channel: initArgs.channel,
        readOnly: initArgs.isReadOnly,
      },
      keyboardShortcuts: envelopeContext.services.keyboardShortcuts,
      guidedTourService: {
        refresh: function (userInteraction) {
          envelopeContext.channelApi.notifications.kogitoGuidedTour_guidedTourUserInteraction.send(userInteraction);
        },
        registerTutorial: function (tutorial) {
          envelopeContext.channelApi.notifications.kogitoGuidedTour_guidedTourRegisterTutorial.send(tutorial);
        },
        isEnabled: function () {
          return true;
        },
      },
      resourceContentEditorService: {
        get: function (path, opts) {
          return envelopeContext.channelApi.requests
            .kogitoWorkspace_resourceContentRequest({ path: path, opts: opts })
            .then(function (r) {
              return r === null || r === void 0 ? void 0 : r.content;
            });
        },
        list: function (pattern, opts) {
          return envelopeContext.channelApi.requests
            .kogitoWorkspace_resourceListRequest({ pattern: pattern, opts: opts })
            .then(function (r) {
              return r.paths.sort();
            });
        },
      },
      workspaceService: {
        openFile: function (path) {
          envelopeContext.channelApi.notifications.kogitoWorkspace_openFile.send(path);
        },
      },
      i18nService: {
        getLocale: function () {
          return envelopeContext.channelApi.requests.kogitoI18n_getLocale();
        },
        onLocaleChange: function (onLocaleChange) {
          envelopeContext.services.i18n.subscribeToLocaleChange(onLocaleChange);
        },
      },
      notificationsService: {
        createNotification: function (notification) {
          envelopeContext.channelApi.notifications.kogitoNotifications_createNotification.send(notification);
        },
        removeNotifications: function (path) {
          envelopeContext.channelApi.notifications.kogitoNotifications_removeNotifications.send(path);
        },
        setNotifications: function (path, notifications) {
          envelopeContext.channelApi.notifications.kogitoNotifications_setNotifications.send(path, notifications);
        },
      },
    });
  };
  GwtEditorWrapperFactory.prototype.appendGwtLocaleMetaTag = function () {
    var meta = document.createElement("meta");
    meta.id = "gwt-locale";
    meta.name = "gwt.property";
    meta.content = "locale=".concat(this.kieBcEditorsI18n.getLocale().split("-").join("_"));
    document.head.appendChild(meta);
  };
  GwtEditorWrapperFactory.prototype.loadResource = function (resource) {
    var e_1, _a;
    var _b;
    switch (resource.type) {
      case "css":
        try {
          for (var _c = __values(resource.paths), _d = _c.next(); !_d.done; _d = _c.next()) {
            var sheet = _d.value;
            var link = document.createElement("link");
            link.href = sheet;
            link.rel = (_b = resource.rel) !== null && _b !== void 0 ? _b : "text/css";
            document.head.appendChild(link);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        return Promise.resolve();
      case "js":
        return this.recursivelyLoadScriptsStartingFrom(resource.paths, 0);
    }
  };
  GwtEditorWrapperFactory.prototype.recursivelyLoadScriptsStartingFrom = function (urls, i) {
    var _this = this;
    if (i >= urls.length) {
      return Promise.resolve();
    }
    return new Promise(function (res) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = urls[i];
      script.addEventListener(
        "load",
        function () {
          return _this.recursivelyLoadScriptsStartingFrom(urls, i + 1).then(res);
        },
        false
      );
      document.head.appendChild(script);
    });
  };
  return GwtEditorWrapperFactory;
})();
exports.GwtEditorWrapperFactory = GwtEditorWrapperFactory;
//# sourceMappingURL=GwtEditorWrapperFactory.js.map
