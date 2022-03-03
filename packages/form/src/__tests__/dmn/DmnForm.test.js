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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var react_1 = require("@testing-library/react");
var dmn_1 = require("../../dmn");
var i18n_1 = require("../../dmn/i18n");
var schema = {
  $ref: "#/definitions/InputSet",
  definitions: {
    InputSet: {
      type: "object",
      properties: {
        name: { type: "string" },
        lastName: { type: "string" },
        daysAndTimeDuration: { format: "days and time duration", type: "string" },
        yearsAndMonthDuration: { format: "years and months duration", type: "string" },
      },
    },
  },
};
var props = {
  formData: jest.fn(),
  setFormData: jest.fn(),
  formError: false,
  setFormError: jest.fn(),
  showInlineError: true,
  notificationsPanel: false,
  autosave: false,
  placeholder: false,
  onSubmit: jest.fn(),
  onValidate: jest.fn(),
  locale: "en",
  formSchema: schema,
};
describe("DmnForm tests", function () {
  it("should render the DMN Form", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var newProps, findByTestId, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            newProps = __assign(__assign({}, props), {
              formData: { name: "Kogito", lastName: "Tooling", daysAndTimeDuration: "P1D" },
            });
            findByTestId = (0, react_1.render)(
              (0, jsx_runtime_1.jsx)(dmn_1.DmnForm, __assign({}, newProps), void 0)
            ).findByTestId;
            _a = expect;
            return [4, findByTestId("dmn-form")];
          case 1:
            _a.apply(void 0, [_b.sent()]).toMatchSnapshot();
            return [2];
        }
      });
    });
  });
  it("should submit the formData", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var formRef, onSubmit, formData, findByTestId, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            formRef = React.createRef();
            onSubmit = jest.fn();
            formData = { name: "Kogito", lastName: "Tooling", daysAndTimeDuration: "P1D" };
            findByTestId = (0, react_1.render)(
              (0, jsx_runtime_1.jsx)(
                dmn_1.DmnForm,
                __assign({}, props, { onSubmit: onSubmit, formRef: formRef, formData: formData }),
                void 0
              )
            ).findByTestId;
            _a = expect;
            return [4, findByTestId("dmn-form")];
          case 1:
            _a.apply(void 0, [_b.sent()]).toMatchSnapshot();
            return [
              4,
              (0, react_1.act)(function () {
                return __awaiter(void 0, void 0, void 0, function () {
                  var _a;
                  return __generator(this, function (_b) {
                    (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.submit();
                    return [2];
                  });
                });
              }),
            ];
          case 2:
            _b.sent();
            expect(onSubmit).toHaveBeenCalledWith(formData);
            return [2];
        }
      });
    });
  });
  it("shouldn't submit the formData", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var formRef, onSubmit, formData, findByTestId, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            formRef = React.createRef();
            onSubmit = jest.fn();
            formData = { daysAndTimeDuration: "p" };
            findByTestId = (0, react_1.render)(
              (0, jsx_runtime_1.jsx)(
                dmn_1.DmnForm,
                __assign({}, props, { onSubmit: onSubmit, formRef: formRef, formData: formData }),
                void 0
              )
            ).findByTestId;
            _a = expect;
            return [4, findByTestId("dmn-form")];
          case 1:
            _a.apply(void 0, [_b.sent()]).toMatchSnapshot();
            return [
              4,
              (0, react_1.act)(function () {
                return __awaiter(void 0, void 0, void 0, function () {
                  var _a;
                  return __generator(this, function (_b) {
                    (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.submit();
                    return [2];
                  });
                });
              }),
            ];
          case 2:
            _b.sent();
            expect(onSubmit).toHaveBeenCalledTimes(0);
            return [2];
        }
      });
    });
  });
  it("should validate the formData - success", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var formRef, onValidate, formData, findByTestId, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            formRef = React.createRef();
            onValidate = jest.fn();
            formData = { name: "Kogito", lastName: "Tooling", daysAndTimeDuration: "P1D" };
            findByTestId = (0, react_1.render)(
              (0, jsx_runtime_1.jsx)(
                dmn_1.DmnForm,
                __assign({}, props, { formRef: formRef, onValidate: onValidate, formData: formData }),
                void 0
              )
            ).findByTestId;
            _a = expect;
            return [4, findByTestId("dmn-form")];
          case 1:
            _a.apply(void 0, [_b.sent()]).toMatchSnapshot();
            return [
              4,
              (0, react_1.act)(function () {
                return __awaiter(void 0, void 0, void 0, function () {
                  var _a;
                  return __generator(this, function (_b) {
                    (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.submit();
                    return [2];
                  });
                });
              }),
            ];
          case 2:
            _b.sent();
            expect(onValidate).toHaveBeenCalledWith(formData, null);
            return [2];
        }
      });
    });
  });
  it("should validate the formData - invalid", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var formRef, onValidate, formData, findByTestId, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            formRef = React.createRef();
            onValidate = jest.fn();
            formData = { name: "Kogito", lastName: "Tooling", daysAndTimeDuration: "p" };
            findByTestId = (0, react_1.render)(
              (0, jsx_runtime_1.jsx)(
                dmn_1.DmnForm,
                __assign({}, props, { formRef: formRef, onValidate: onValidate, formData: formData }),
                void 0
              )
            ).findByTestId;
            _a = expect;
            return [4, findByTestId("dmn-form")];
          case 1:
            _a.apply(void 0, [_b.sent()]).toMatchSnapshot();
            return [
              4,
              (0, react_1.act)(function () {
                return __awaiter(void 0, void 0, void 0, function () {
                  var _a;
                  return __generator(this, function (_b) {
                    (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.submit();
                    return [2];
                  });
                });
              }),
            ];
          case 2:
            _b.sent();
            expect(onValidate).toHaveBeenCalledTimes(2);
            return [2];
        }
      });
    });
  });
  it("should have placeholder", function () {
    var schema = {
      $ref: "#/definitions/InputSet",
      definitions: {
        InputSet: {
          type: "object",
          properties: {
            name: { type: "string", enum: ["Tooling", "Kogito"] },
          },
        },
      },
    };
    var formRef = React.createRef();
    var formData = {};
    var getByText = (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(
        dmn_1.DmnForm,
        __assign({}, props, { placeholder: true, formSchema: schema, formRef: formRef, formData: formData }),
        void 0
      )
    ).getByText;
    expect(getByText(i18n_1.dmnFormI18n.getCurrent().form.preProcessing.selectPlaceholder)).toMatchSnapshot();
  });
  it("should create a text field and a label", function () {
    var schema = {
      $ref: "#/definitions/InputSet",
      definitions: {
        InputSet: {
          type: "object",
          properties: {
            name: {},
          },
        },
      },
    };
    var formRef = React.createRef();
    var formData = {};
    var getByText = (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(
        dmn_1.DmnForm,
        __assign({}, props, { placeholder: true, formSchema: schema, formRef: formRef, formData: formData }),
        void 0
      )
    ).getByText;
    expect(getByText("name")).toMatchSnapshot();
  });
  it("should remove require parameter", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var schema, formRef, formData, onSubmit, container;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            schema = {
              $ref: "#/definitions/InputSet",
              definitions: {
                InputSet: {
                  type: "object",
                  properties: {
                    name: {},
                  },
                  required: ["name"],
                },
              },
            };
            formRef = React.createRef();
            formData = {};
            onSubmit = jest.fn();
            container = (0, react_1.render)(
              (0, jsx_runtime_1.jsx)(
                dmn_1.DmnForm,
                __assign({}, props, {
                  placeholder: true,
                  formSchema: schema,
                  onSubmit: onSubmit,
                  formRef: formRef,
                  formData: formData,
                }),
                void 0
              )
            ).container;
            expect(container).toMatchSnapshot();
            return [
              4,
              (0, react_1.act)(function () {
                return __awaiter(void 0, void 0, void 0, function () {
                  var _a;
                  return __generator(this, function (_b) {
                    (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.submit();
                    return [2];
                  });
                });
              }),
            ];
          case 1:
            _a.sent();
            expect(onSubmit).toHaveBeenCalledTimes(1);
            return [2];
        }
      });
    });
  });
});
//# sourceMappingURL=DmnForm.test.js.map
