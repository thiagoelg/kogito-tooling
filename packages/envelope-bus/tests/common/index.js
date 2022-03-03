"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageBusClientApiMock = void 0;
function messageBusClientApiMock() {
  var mocks = new Map();
  var proxyMock = function (value) {
    return new Proxy(
      {},
      {
        get: function (target, name) {
          var _a;
          return (_a = mocks.get(name)) !== null && _a !== void 0 ? _a : mocks.set(name, value).get(name);
        },
      }
    );
  };
  return {
    notifications: proxyMock({
      send: jest.fn(),
      subscribe: jest.fn(),
      unsubscribe: jest.fn(),
    }),
    requests: proxyMock(jest.fn()),
    shared: proxyMock({
      set: jest.fn(),
      subscribe: jest.fn(),
      unsubscribe: jest.fn(),
    }),
  };
}
exports.messageBusClientApiMock = messageBusClientApiMock;
//# sourceMappingURL=index.js.map
