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
exports.feelDefaultSuggestions =
  exports.feelDefaultConfig =
  exports.feelTokensConfig =
  exports.feelTheme =
  exports.MONACO_FEEL_THEME =
  exports.MONACO_FEEL_LANGUAGE =
    void 0;
var Monaco = require("@kie-tools-core/monaco-editor");
exports.MONACO_FEEL_LANGUAGE = "feel-language";
exports.MONACO_FEEL_THEME = "feel-theme";
var feelTheme = function () {
  return {
    base: "vs",
    inherit: true,
    rules: [
      { token: "feel-keyword", foreground: "26268C", fontStyle: "bold" },
      { token: "feel-numeric", foreground: "3232E7" },
      { token: "feel-boolean", foreground: "26268D", fontStyle: "bold" },
      { token: "feel-string", foreground: "2A9343" },
      { token: "feel-function", foreground: "3232E8" },
    ],
    colors: {
      "editorLineNumber.foreground": "#000000",
    },
  };
};
exports.feelTheme = feelTheme;
var feelTokensConfig = function () {
  return {
    tokenizer: {
      root: [
        [/(?:true|false)/, "feel-boolean"],
        [/[0-9]+/, "feel-numeric"],
        [/(?:"(?:.*?)")/, "feel-string"],
        [/(?:(?:[a-z ]+\()|(?:\()|(?:\)))/, "feel-function"],
        [/(?:if|then|else)/, "feel-keyword"],
        [
          /(?:for|in|return|if|then|else|some|every|satisfies|instance|of|function|external|or|and|between|not|null)/,
          "feel-keyword",
        ],
      ],
    },
  };
};
exports.feelTokensConfig = feelTokensConfig;
var feelDefaultConfig = function (options) {
  return __assign(
    {
      language: exports.MONACO_FEEL_LANGUAGE,
      theme: exports.MONACO_FEEL_THEME,
      fontSize: 15,
      contextmenu: false,
      useTabStops: false,
      folding: false,
      automaticLayout: true,
      lineNumbersMinChars: 0,
      overviewRulerBorder: false,
      scrollBeyondLastLine: false,
      hideCursorInOverviewRuler: true,
      scrollbar: {
        useShadows: false,
      },
      minimap: {
        enabled: false,
      },
    },
    options
  );
};
exports.feelDefaultConfig = feelDefaultConfig;
var feelDefaultSuggestions = function () {
  var e_1, _a, e_2, _b;
  var suggestions = [];
  var suggestionTypes = {
    Snippet: [
      ["if", "if $1 then\n\t$0\nelse\n\t"],
      ["for", "for element in $1 return\n\t$0"],
    ],
    Function: [
      ["substring(string, start position, length?)", "substring($1, $2, $3)"],
      ["string length(string)", "string length($1)"],
      ["upper case(string)", "upper case($1)"],
      ["lower case(string)", "lower case($1)"],
      ["substring before(string, match)", "substring before($1, $2)"],
      ["substring after(string, match)", "substring after($1, $2)"],
      ["replace(input, pattern, replacement, flags?)", "replace($1, $2, $3, $4)"],
      ["contains(string, match)", "contains($1, $2)"],
      ["starts with(string, match)", "starts with($1, $2)"],
      ["ends with(string, match)", "ends with($1, $2)"],
      ["matches(input, pattern, flags?)", "matches($1, $2, $3)"],
      ["split(string, delimiter)", "split($1, $2)"],
      ["list contains(list, element)", "list contains($1, $2)"],
      ["count(list)", "count($1)"],
      ["min(list)", "min($1)"],
      ["max(list)", "max($1)"],
      ["sum(list)", "sum($1)"],
      ["mean(list)", "mean($1)"],
      ["and(list)", "and($1)"],
      ["or(list)", "or($1)"],
      ["sublist(list, start position, length?)", "sublist($1, $2, $3)"],
      ["append(list, item...)", "append($1, $2)"],
      ["concatenate(list...)", "concatenate($1)"],
      ["insert before(list, position, newItem)", "insert before($1, $2, $3)"],
      ["remove(list, position)", "remove($1, $2)"],
      ["reverse(list)", "remove($1)"],
      ["index of(list, match)", "index of($1, $2)"],
      ["union(list...)", "union($1)"],
      ["distinct values(list)", "distinct values($1)"],
      ["flatten(list)", "flatten($1)"],
      ["product(list)", "product($1)"],
      ["median(list)", "median($1)"],
      ["stddev(list)", "stddev($1)"],
      ["mode(list)", "mode($1)"],
      ["decimal(n, scale)", "decimal($1, $2)"],
      ["floor(n)", "floor($1)"],
      ["ceiling(n)", "ceiling($1)"],
      ["abs(n)", "abs($1)"],
      ["modulo(dividend, divisor)", "modulo($1, $2)"],
      ["sqrt(number)", "sqrt($1)"],
      ["log(number)", "log($1)"],
      ["exp(number)", "exp($1)"],
      ["odd(number)", "odd($1)"],
      ["even(number)", "even($1)"],
      ["not(negand)", "not($1)"],
    ],
  };
  try {
    for (var _c = __values(suggestionTypes.Snippet), _d = _c.next(); !_d.done; _d = _c.next()) {
      var suggestion = _d.value;
      suggestions.push({
        kind: Monaco.languages.CompletionItemKind.Keyword,
        insertTextRules: Monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        label: suggestion[0],
        insertText: suggestion[1],
      });
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
  try {
    for (var _e = __values(suggestionTypes.Function), _f = _e.next(); !_f.done; _f = _e.next()) {
      var suggestion = _f.value;
      suggestions.push({
        kind: Monaco.languages.CompletionItemKind.Function,
        insertTextRules: Monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        label: suggestion[0],
        insertText: suggestion[1],
      });
    }
  } catch (e_2_1) {
    e_2 = { error: e_2_1 };
  } finally {
    try {
      if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
    } finally {
      if (e_2) throw e_2.error;
    }
  }
  return suggestions;
};
exports.feelDefaultSuggestions = feelDefaultSuggestions;
//# sourceMappingURL=FeelConfigs.js.map
