"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
chrome.runtime.onInstalled.addListener(function () {
  console.log("KIE Tools extension is running.");
});
function removeHeader(headers, name) {
  for (var i = 0; i < headers.length; i++) {
    if (headers[i].name.toLowerCase() === name) {
      headers.splice(i, 1);
      break;
    }
  }
}
chrome.webRequest.onHeadersReceived.addListener(
  function (details) {
    removeHeader(details.responseHeaders, "content-security-policy");
    removeHeader(details.responseHeaders, "x-frame-options");
    return { responseHeaders: details.responseHeaders };
  },
  { urls: ["https://github.com/*"] },
  ["blocking", "responseHeaders"]
);
var activeTabId;
chrome.tabs.onActivated.addListener(function (activeInfo) {
  activeTabId = activeInfo.tabId;
});
function getActiveTab(callback) {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];
    if (activeTab) {
      callback(activeTab);
    } else {
      chrome.tabs.get(activeTabId, function (tab) {
        if (tab) {
          callback(tab);
        } else {
          console.debug("No active tab identified.");
        }
      });
    }
  });
}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.messageId === "OPEN_ONLINE_EDITOR") {
    openOnlineEditor(request, sender, sendResponse);
  } else if (request.messageId === "RETURN_FROM_EXTERNAL_EDITOR") {
    updateGitHub(request, sender);
  }
  sendResponse({ success: true });
});
function openOnlineEditor(request, sender, sendResponse) {
  chrome.tabs.create(
    {
      url:
        "".concat(process.env.WEBPACK_REPLACE__onlineEditor_url, "/?ext#/editor/") +
        (0, utils_1.extractFileExtension)(request.filePath),
    },
    function (tab) {
      var newTabReady = function () {
        newTabReady = function () {};
        chrome.tabs.onUpdated.removeListener(tabUpdateListener);
        chrome.tabs.sendMessage(tab.id, {
          messageId: "LOAD_ONLINE_EDITOR",
          filePath: (0, utils_1.removeDirectories)(request.filePath),
          fileContent: request.fileContent,
          readonly: request.readonly,
          senderTabId: sender.tab.id,
        });
      };
      chrome.tabs.get(tab.id, function (newTab) {
        if (newTab.status === "complete") {
          newTabReady();
        }
      });
      var tabUpdateListener = function (updatedTabId, changeInfo) {
        if (updatedTabId === tab.id && changeInfo.status === "complete") {
          newTabReady();
        }
        sendResponse({ success: true });
      };
      chrome.tabs.onUpdated.addListener(tabUpdateListener);
    }
  );
}
function updateGitHub(request, sender) {
  chrome.tabs.sendMessage(
    request.senderTabId,
    {
      messageId: "RETURN_FROM_EXTERNAL_EDITOR",
      fileName: request.fileName,
      fileContent: request.fileContent,
    },
    function (response) {
      if (response === null || response === void 0 ? void 0 : response.success) {
        chrome.tabs.remove(sender.tab.id, function () {
          chrome.tabs.update(request.senderTabId, { active: true, selected: true });
        });
      }
    }
  );
}
//# sourceMappingURL=background.js.map
