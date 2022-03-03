"use strict";
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
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnprocessedFilePath = exports.PrEditorsApp = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var GlobalContext_1 = require("../common/GlobalContext");
var IsolatedPrEditor_1 = require("./IsolatedPrEditor");
function PrEditorsApp(props) {
  var globals = (0, GlobalContext_1.useGlobals)();
  var _a = __read((0, react_1.useState)([]), 2),
    prFileContainers = _a[0],
    setPrFileContainers = _a[1];
  (0, react_1.useEffect)(function () {
    setPrFileContainers(supportedPrFileElements(globals.logger, globals.envelopeLocator, globals.dependencies));
  }, []);
  (0, react_1.useEffect)(
    function () {
      var observer = new MutationObserver(function (mutations) {
        var addedNodes = mutations.reduce(function (l, r) {
          return __spreadArray(__spreadArray([], __read(l), false), __read(Array.from(r.addedNodes)), false);
        }, []);
        if (addedNodes.length <= 0) {
          return;
        }
        var newContainers = supportedPrFileElements(globals.logger, globals.envelopeLocator, globals.dependencies);
        if (newContainers.length === prFileContainers.length) {
          globals.logger.log("Found new unsupported containers");
          return;
        }
        globals.logger.log("Found new containers...");
        setPrFileContainers(newContainers);
      });
      observer.observe(globals.dependencies.all.pr__mutationObserverTarget(), {
        childList: true,
        subtree: true,
      });
      return function () {
        observer.disconnect();
      };
    },
    [prFileContainers]
  );
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children: prFileContainers.map(function (container) {
        return (0,
        jsx_runtime_1.jsx)(IsolatedPrEditor_1.IsolatedPrEditor, { prInfo: props.prInfo, contentPath: props.contentPath, prFileContainer: container, fileExtension: getFileExtension(container, globals.dependencies), unprocessedFilePath: getUnprocessedFilePath(container, globals.dependencies), githubTextEditorToReplace: globals.dependencies.prView.githubTextEditorToReplaceElement(container) }, getUnprocessedFilePath(container, globals.dependencies));
      }),
    },
    void 0
  );
}
exports.PrEditorsApp = PrEditorsApp;
function supportedPrFileElements(logger, envelopeLocator, dependencies) {
  return prFileElements(logger, dependencies).filter(function (container) {
    return envelopeLocator.hasMappingFor(getFilePath(container, dependencies));
  });
}
function prFileElements(logger, dependencies) {
  var elements = dependencies.all.array.pr__supportedPrFileContainers();
  if (!elements) {
    logger.log("Could not find file containers...");
    return [];
  }
  return elements;
}
function getFileExtension(prFileContainer, dependencies) {
  var unprocessedFilePath = getUnprocessedFilePath(prFileContainer, dependencies);
  return (0, IsolatedPrEditor_1.getOriginalFilePath)(unprocessedFilePath).split(".").pop();
}
function getFilePath(prFileContainer, dependencies) {
  var unprocessedFilePath = getUnprocessedFilePath(prFileContainer, dependencies);
  return (0, IsolatedPrEditor_1.getOriginalFilePath)(unprocessedFilePath);
}
function getUnprocessedFilePath(prFileContainer, dependencies) {
  return dependencies.all.pr__unprocessedFilePathContainer(prFileContainer).title;
}
exports.getUnprocessedFilePath = getUnprocessedFilePath;
//# sourceMappingURL=PrEditorsApp.js.map
