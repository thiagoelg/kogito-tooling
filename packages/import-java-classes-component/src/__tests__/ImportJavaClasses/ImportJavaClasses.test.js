"use strict";
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
var react_1 = require("@testing-library/react");
var components_1 = require("../../components");
describe("ImportJavaClasses component tests", function () {
  test("should render ImportJavaClasses Button component", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var baseElement;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            baseElement = (0, react_1.render)(
              (0, jsx_runtime_1.jsx)(
                components_1.ImportJavaClasses,
                {
                  gwtLayerService: gwtLayerServiceMock,
                  javaCodeCompletionService: getJavaCodeCompletionServiceMock(
                    jest.fn(function () {
                      return [];
                    })
                  ),
                },
                void 0
              )
            ).baseElement;
            return [4, testImportJavaClassesButtonEnabled(baseElement)];
          case 1:
            _a.sent();
            expect(baseElement).toMatchSnapshot();
            return [2];
        }
      });
    });
  });
  test("Should show Modal after clicking on the button", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var _a, baseElement, getByText, modalWizardButton;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            (_a = (0, react_1.render)(
              (0, jsx_runtime_1.jsx)(
                components_1.ImportJavaClasses,
                {
                  gwtLayerService: gwtLayerServiceMock,
                  javaCodeCompletionService: getJavaCodeCompletionServiceMock(
                    jest.fn(function () {
                      return [];
                    })
                  ),
                },
                void 0
              )
            )),
              (baseElement = _a.baseElement),
              (getByText = _a.getByText);
            return [4, testImportJavaClassesButtonEnabled(baseElement)];
          case 1:
            _b.sent();
            modalWizardButton = getByText("Import Java classes");
            modalWizardButton.click();
            expect(baseElement).toMatchSnapshot();
            return [2];
        }
      });
    });
  });
  test.skip("Should search box works", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var _a, baseElement, getByText, resetButton;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            (_a = (0, react_1.render)(
              (0, jsx_runtime_1.jsx)(
                components_1.ImportJavaClasses,
                {
                  gwtLayerService: gwtLayerServiceMock,
                  javaCodeCompletionService: getJavaCodeCompletionServiceMock(
                    jest.fn(function () {
                      return [];
                    })
                  ),
                },
                void 0
              )
            )),
              (baseElement = _a.baseElement),
              (getByText = _a.getByText);
            return [4, testImportJavaClassesButtonEnabled(baseElement)];
          case 1:
            _b.sent();
            testSearchInput(baseElement, getByText);
            resetButton = baseElement.querySelector('[aria-label="Reset"]');
            expect(resetButton).toBeInTheDocument();
            resetButton.click();
            expect(baseElement.querySelector('[aria-label="Reset"]')).not.toBeInTheDocument();
            return [2];
        }
      });
    });
  });
  test.skip("Should search box with results works", function () {
    var _a = (0, react_1.render)(
        (0, jsx_runtime_1.jsx)(
          components_1.ImportJavaClasses,
          {
            gwtLayerService: gwtLayerServiceMock,
            javaCodeCompletionService: getJavaCodeCompletionServiceMock(
              jest.fn(function (value) {
                return [{ query: "com.Book" }, { query: "com.Author" }];
              })
            ),
          },
          void 0
        )
      ),
      baseElement = _a.baseElement,
      getByText = _a.getByText;
    testSearchInput(baseElement, getByText);
    testJavaClassSelection(baseElement, false);
    var checkSecondElement = baseElement.querySelector('[aria-labelledby="com.Author"]');
    react_1.fireEvent.click(checkSecondElement);
    checkSecondElement = baseElement.querySelector('[aria-labelledby="com.Author"]');
    expect(checkSecondElement).not.toBeChecked();
    expect(baseElement).toMatchSnapshot();
  });
  test.skip("Should close Modal after opening it and clicking on the Cancel button", function () {
    var _a = (0, react_1.render)(
        (0, jsx_runtime_1.jsx)(
          components_1.ImportJavaClasses,
          {
            gwtLayerService: gwtLayerServiceMock,
            javaCodeCompletionService: getJavaCodeCompletionServiceMock(jest.fn()),
          },
          void 0
        )
      ),
      baseElement = _a.baseElement,
      getByText = _a.getByText;
    var modalWizardButton = getByText("Import Java classes");
    modalWizardButton.click();
    var cancelButton = getByText("Cancel");
    cancelButton.click();
    expect(baseElement).toMatchSnapshot();
  });
  test.skip("Should move to second step", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var _a, baseElement, getByText;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            (_a = (0, react_1.render)(
              (0, jsx_runtime_1.jsx)(
                components_1.ImportJavaClasses,
                {
                  gwtLayerService: gwtLayerServiceMock,
                  javaCodeCompletionService: getJavaCodeCompletionServiceMock(
                    jest.fn(function (value) {
                      return [{ query: "com.Book" }, { query: "com.Author" }, { query: "com.Test" }];
                    })
                  ),
                },
                void 0
              )
            )),
              (baseElement = _a.baseElement),
              (getByText = _a.getByText);
            testSearchInput(baseElement, getByText);
            testJavaClassSelection(baseElement, true);
            return [4, testNextStepFieldsTable(baseElement, getByText)];
          case 1:
            _b.sent();
            expect(baseElement).toMatchSnapshot();
            return [2];
        }
      });
    });
  });
  test.skip("Should move to second step and fetch a Java Class", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var _a, baseElement, getByText, fetchButton;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            (_a = (0, react_1.render)(
              (0, jsx_runtime_1.jsx)(
                components_1.ImportJavaClasses,
                {
                  gwtLayerService: gwtLayerServiceMock,
                  javaCodeCompletionService: getJavaCodeCompletionServiceMock(
                    jest.fn(function (value) {
                      return [{ query: "com.Book" }, { query: "com.Author" }, { query: "com.Test" }];
                    })
                  ),
                },
                void 0
              )
            )),
              (baseElement = _a.baseElement),
              (getByText = _a.getByText);
            testSearchInput(baseElement, getByText);
            testJavaClassSelection(baseElement, true);
            return [4, testNextStepFieldsTable(baseElement, getByText)];
          case 1:
            _b.sent();
            fetchButton = getByText('Fetch "Test" class');
            fetchButton.click();
            return [
              4,
              (0, react_1.waitFor)(function () {
                expect(getByText("(Test)")).toBeInTheDocument();
              }),
            ];
          case 2:
            _b.sent();
            expect(baseElement).toMatchSnapshot();
            return [2];
        }
      });
    });
  });
  test.skip("Should move to second step and fetch, remove a Java Class", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var _a, baseElement, getByText, backButton, checkThirdElement, nextButton, fetchButton;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            (_a = (0, react_1.render)(
              (0, jsx_runtime_1.jsx)(
                components_1.ImportJavaClasses,
                {
                  gwtLayerService: gwtLayerServiceMock,
                  javaCodeCompletionService: getJavaCodeCompletionServiceMock(
                    jest.fn(function (value) {
                      return [{ query: "com.Book" }, { query: "com.Author" }, { query: "com.Test" }];
                    })
                  ),
                },
                void 0
              )
            )),
              (baseElement = _a.baseElement),
              (getByText = _a.getByText);
            testSearchInput(baseElement, getByText);
            testJavaClassSelection(baseElement, true);
            return [4, testNextStepFieldsTable(baseElement, getByText)];
          case 1:
            _b.sent();
            return [4, testFetchClicked(getByText)];
          case 2:
            _b.sent();
            backButton = getByText("Back");
            react_1.fireEvent.click(backButton);
            checkThirdElement = baseElement.querySelector('[aria-labelledby="com.Test"]');
            expect(checkThirdElement).toBeInTheDocument();
            expect(checkThirdElement).toBeChecked();
            react_1.fireEvent.click(checkThirdElement);
            checkThirdElement = baseElement.querySelector('[aria-labelledby="com.Test"]');
            expect(checkThirdElement).not.toBeInTheDocument();
            nextButton = getByText("Next");
            react_1.fireEvent.click(nextButton);
            fetchButton = getByText('Fetch "Test" class');
            expect(fetchButton).toBeInTheDocument();
            return [2];
        }
      });
    });
  });
  test.skip("Should move to third step", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var _a, baseElement, getByText;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            (_a = (0, react_1.render)(
              (0, jsx_runtime_1.jsx)(
                components_1.ImportJavaClasses,
                {
                  gwtLayerService: gwtLayerServiceMock,
                  javaCodeCompletionService: getJavaCodeCompletionServiceMock(
                    jest.fn(function (value) {
                      return [{ query: "com.Book" }, { query: "com.Author" }, { query: "com.Test" }];
                    })
                  ),
                },
                void 0
              )
            )),
              (baseElement = _a.baseElement),
              (getByText = _a.getByText);
            testSearchInput(baseElement, getByText);
            testJavaClassSelection(baseElement, true);
            return [4, testNextStepFieldsTable(baseElement, getByText)];
          case 1:
            _b.sent();
            return [4, testNextStepFieldsTable(baseElement, getByText)];
          case 2:
            _b.sent();
            expect(baseElement).toMatchSnapshot();
            return [2];
        }
      });
    });
  });
  function testSearchInput(baseElement, getByText) {
    var modalWizardButton = getByText("Import Java classes");
    modalWizardButton.click();
    var inputElement = baseElement.querySelector('[aria-label="Search input"]');
    expect(inputElement).toHaveValue("");
    expect(baseElement.querySelector('[aria-label="Reset"]')).not.toBeInTheDocument();
    react_1.fireEvent.change(inputElement, { target: { value: "test" } });
    expect(inputElement).toHaveValue("test");
    expect(baseElement.querySelector('[aria-label="Reset"]')).toBeInTheDocument();
  }
  function testJavaClassSelection(baseElement, hasThirdElement) {
    var firstElement = baseElement.querySelector('[id="com.Book"]');
    expect(firstElement).toBeInTheDocument();
    var secondElement = baseElement.querySelector('[id="com.Author"]');
    expect(secondElement).toBeInTheDocument();
    if (hasThirdElement) {
      var thirdElement = baseElement.querySelector('[id="com.Test"]');
      expect(thirdElement).toBeInTheDocument();
    }
    var checkFirstElement = baseElement.querySelector('[aria-labelledby="com.Book"]');
    expect(checkFirstElement).toBeInTheDocument();
    expect(checkFirstElement).not.toBeChecked();
    var checkSecondElement = baseElement.querySelector('[aria-labelledby="com.Author"]');
    expect(checkSecondElement).toBeInTheDocument();
    expect(checkSecondElement).not.toBeChecked();
    var checkThirdElement = baseElement.querySelector('[aria-labelledby="com.Test"]');
    if (hasThirdElement) {
      expect(checkThirdElement).toBeInTheDocument();
      expect(checkThirdElement).not.toBeChecked();
    }
    react_1.fireEvent.click(checkFirstElement);
    checkFirstElement = baseElement.querySelector('[aria-labelledby="com.Book"]');
    expect(checkFirstElement).toBeChecked();
    expect(checkSecondElement).not.toBeChecked();
    if (hasThirdElement) {
      expect(checkThirdElement).not.toBeChecked();
    }
    react_1.fireEvent.click(checkSecondElement);
    checkSecondElement = baseElement.querySelector('[aria-labelledby="com.Author"]');
    expect(checkFirstElement).toBeChecked();
    expect(checkSecondElement).toBeChecked();
    if (hasThirdElement) {
      expect(checkThirdElement).not.toBeChecked();
    }
  }
  function testNextStepFieldsTable(baseElement, getByText) {
    return __awaiter(this, void 0, void 0, function () {
      var nextButton, expandToggle;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            nextButton = getByText("Next");
            react_1.fireEvent.click(nextButton);
            return [
              4,
              (0, react_1.waitFor)(function () {
                expect(baseElement.querySelector('[aria-label="field-table"]')).toBeInTheDocument();
              }),
            ];
          case 1:
            _a.sent();
            expandToggle = baseElement.querySelector('[id="expand-toggle0"]');
            expect(expandToggle).toHaveAttribute("aria-expanded", "true");
            react_1.fireEvent.click(expandToggle);
            expect(expandToggle).toHaveAttribute("aria-expanded", "false");
            react_1.fireEvent.click(expandToggle);
            return [2];
        }
      });
    });
  }
  function testFetchClicked(getByText) {
    return __awaiter(this, void 0, void 0, function () {
      var fetchButton;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            fetchButton = getByText('Fetch "Test" class');
            fetchButton.click();
            return [
              4,
              (0, react_1.waitFor)(function () {
                expect(getByText("(Test)")).toBeInTheDocument();
              }),
            ];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  }
  function testImportJavaClassesButtonEnabled(baseElement) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              (0, react_1.waitFor)(function () {
                expect(baseElement.querySelector('[aria-disabled="false"][type="button"]')).toBeInTheDocument();
              }),
            ];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  }
  var lspGetClassFieldsServiceMocked = function (className) {
    return __awaiter(void 0, void 0, void 0, function () {
      var bookClassFieldsMap, authorClassFieldsMap;
      return __generator(this, function (_a) {
        bookClassFieldsMap = new Map();
        bookClassFieldsMap.set("title", "java.lang.String");
        bookClassFieldsMap.set("year", "java.lang.Integer");
        bookClassFieldsMap.set("test", "com.Test");
        authorClassFieldsMap = new Map();
        authorClassFieldsMap.set("name", "java.lang.String");
        authorClassFieldsMap.set("isAlive", "java.lang.Boolean");
        if (className === "com.Book") {
          return [2, bookClassFieldsMap];
        } else if (className === "com.Author") {
          return [2, authorClassFieldsMap];
        } else {
          return [2, new Map()];
        }
        return [2];
      });
    });
  };
  var gwtLayerServiceMock = {
    importJavaClassesInDataTypeEditor: jest.fn(function (javaClasses) {}),
  };
  function getJavaCodeCompletionServiceMock(getClassesMock) {
    var javaCodeCompletionServiceMock = {
      getClasses: getClassesMock,
      getFields: jest.fn(function () {
        return new Promise(function () {
          return [];
        });
      }),
      isLanguageServerAvailable: isLanguageServerAvailableMock,
    };
    return javaCodeCompletionServiceMock;
  }
  var isLanguageServerAvailableMock = function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2, true];
      });
    });
  };
});
//# sourceMappingURL=ImportJavaClasses.test.js.map
