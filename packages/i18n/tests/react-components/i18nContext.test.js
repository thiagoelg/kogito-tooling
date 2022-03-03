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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var immutableDeepMerge_1 = require("@kie-tools-core/i18n/dist/core/immutableDeepMerge");
var react_1 = require("@testing-library/react");
var utils_1 = require("../utils");
describe("I18nDictionariesProvider", function () {
  describe("I18nDictionariesProvider::component", function () {
    it("should have the same dictionary as the dummy", function () {
      var dictionaries = new Map([["en", utils_1.dummyDefault]]);
      var getByTestId = (0, react_1.render)(
        (0, jsx_runtime_1.jsx)(
          react_components_1.I18nDictionariesProvider,
          __assign(
            {
              defaults: { locale: "en", dictionary: utils_1.dummyDefault },
              dictionaries: dictionaries,
              ctx: utils_1.DummyContext,
            },
            { children: (0, jsx_runtime_1.jsx)(utils_1.DummyComponent, {}, void 0) }
          ),
          void 0
        )
      ).getByTestId;
      expect(getByTestId("dummy-component")).toHaveTextContent(JSON.stringify(utils_1.dummyDefault));
    });
    it("should use the provided default dictionary due to `en` dictionary doesn't exist", function () {
      var dictionaries = new Map([["en-US", utils_1.dummyDefault]]);
      var getByTestId = (0, react_1.render)(
        (0, jsx_runtime_1.jsx)(
          react_components_1.I18nDictionariesProvider,
          __assign(
            {
              defaults: { locale: "en", dictionary: utils_1.dummyDefault },
              dictionaries: dictionaries,
              ctx: utils_1.DummyContext,
            },
            { children: (0, jsx_runtime_1.jsx)(utils_1.DummyComponent, {}, void 0) }
          ),
          void 0
        )
      ).getByTestId;
      expect(getByTestId("dummy-component")).toHaveTextContent(JSON.stringify(utils_1.dummyDefault));
    });
    it("should use the `en` dictionary due to the `en-US` doesn't exist and 'en' is the location prefix", function () {
      var dummyOptional = {
        welcome: "Welcome!!!",
      };
      var dictionaries = new Map([
        ["en", dummyOptional],
        ["en-UK", utils_1.dummyDefault],
      ]);
      var getByTestId = (0, react_1.render)(
        (0, jsx_runtime_1.jsx)(
          react_components_1.I18nDictionariesProvider,
          __assign(
            {
              defaults: { locale: "en-US", dictionary: utils_1.dummyDefault },
              dictionaries: dictionaries,
              ctx: utils_1.DummyContext,
            },
            { children: (0, jsx_runtime_1.jsx)(utils_1.DummyComponent, {}, void 0) }
          ),
          void 0
        )
      ).getByTestId;
      expect(getByTestId("dummy-component")).toHaveTextContent(
        JSON.stringify((0, immutableDeepMerge_1.immutableDeepMerge)(utils_1.dummyDefault, dummyOptional))
      );
    });
  });
  describe("I18nDictionariesProvider::mergeSelectedDictionaryWithDefault", function () {
    it("should override the welcome property on dummyDefault and create a new object", function () {
      var dummyOptional = {
        welcome: "Bienvenido",
      };
      var merged = (0, immutableDeepMerge_1.immutableDeepMerge)(utils_1.dummyDefault, dummyOptional);
      expect(merged).toEqual({
        greeting: utils_1.interpolationFunction,
        welcome: "Bienvenido",
        modal: {
          title: "My title",
          text: "My text",
        },
      });
      expect(utils_1.dummyDefault).toEqual({
        greeting: utils_1.interpolationFunction,
        welcome: "Welcome",
        modal: {
          title: "My title",
          text: "My text",
        },
      });
      expect(dummyOptional).toEqual({
        welcome: "Bienvenido",
      });
    });
    it("shouldn't override the welcome property on dummyDefault", function () {
      var dummyOptional = {
        welcome: undefined,
      };
      var merged = (0, immutableDeepMerge_1.immutableDeepMerge)(utils_1.dummyDefault, dummyOptional);
      expect(merged).toEqual({
        greeting: utils_1.interpolationFunction,
        welcome: "Welcome",
        modal: {
          title: "My title",
          text: "My text",
        },
      });
      expect(utils_1.dummyDefault).toEqual({
        greeting: utils_1.interpolationFunction,
        welcome: "Welcome",
        modal: {
          title: "My title",
          text: "My text",
        },
      });
      expect(dummyOptional).toEqual({
        welcome: undefined,
      });
    });
    it("should override the interpolation function", function () {
      var dummyInterpolationFunction = function (name, lastLogin) {
        return "Hi ".concat(name, ". Last login: ").concat(lastLogin);
      };
      var dummyOptional = {
        greeting: dummyInterpolationFunction,
      };
      var merged = (0, immutableDeepMerge_1.immutableDeepMerge)(utils_1.dummyDefault, dummyOptional);
      expect(merged).toEqual({
        greeting: dummyInterpolationFunction,
        welcome: "Welcome",
        modal: {
          title: "My title",
          text: "My text",
        },
      });
      expect(utils_1.dummyDefault).toEqual({
        greeting: utils_1.interpolationFunction,
        welcome: "Welcome",
        modal: {
          title: "My title",
          text: "My text",
        },
      });
      expect(dummyOptional).toEqual({
        greeting: dummyInterpolationFunction,
      });
    });
    it("should override the nested properties that were specified", function () {
      var dummyOptional = {
        welcome: "Bienvenido",
        modal: {
          title: "Mi título",
        },
      };
      var merged = (0, immutableDeepMerge_1.immutableDeepMerge)(utils_1.dummyDefault, dummyOptional);
      expect(merged).toEqual({
        greeting: utils_1.interpolationFunction,
        welcome: "Bienvenido",
        modal: {
          title: "Mi título",
          text: "My text",
        },
      });
      expect(utils_1.dummyDefault).toEqual({
        greeting: utils_1.interpolationFunction,
        welcome: "Welcome",
        modal: {
          title: "My title",
          text: "My text",
        },
      });
      expect(dummyOptional).toEqual({
        welcome: "Bienvenido",
        modal: {
          title: "Mi título",
        },
      });
    });
    it("shouldn't override the nested object with a undefined value", function () {
      var dummyOptional = {
        modal: {
          title: undefined,
        },
      };
      var merged = (0, immutableDeepMerge_1.immutableDeepMerge)(utils_1.dummyDefault, dummyOptional);
      expect(merged).toEqual({
        greeting: utils_1.interpolationFunction,
        welcome: "Welcome",
        modal: {
          title: "My title",
          text: "My text",
        },
      });
      expect(utils_1.dummyDefault).toEqual({
        greeting: utils_1.interpolationFunction,
        welcome: "Welcome",
        modal: {
          title: "My title",
          text: "My text",
        },
      });
      expect(dummyOptional).toEqual({
        modal: {
          title: undefined,
        },
      });
    });
  });
});
//# sourceMappingURL=i18nContext.test.js.map
