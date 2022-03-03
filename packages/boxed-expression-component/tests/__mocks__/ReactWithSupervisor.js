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
jest.mock("react", function () {
  var actualReact = jest.requireActual("react");
  function useContext(context) {
    return __assign(__assign({}, actualReact.useContext(context)), {
      setSupervisorHash: function (hash) {
        return hash;
      },
    });
  }
  return __assign(__assign({}, actualReact), { useContext: useContext });
});
//# sourceMappingURL=ReactWithSupervisor.js.map
