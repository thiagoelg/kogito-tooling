"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dependencies = void 0;
var Dependencies = (function () {
  function Dependencies() {
    this.singleEdit = {
      iframeContainerTarget: function () {
        return document.querySelector(".file");
      },
      toolbarContainerTarget: function () {
        return document.querySelector(".js-breadcrumb-container.d-flex.flex-items-center.flex-wrap.flex-auto");
      },
      githubTextEditorToReplaceElement: function () {
        return document.querySelector(".js-code-editor");
      },
    };
    this.singleView = {
      iframeContainerTarget: function () {
        return document.querySelector(".Box.mt-3.position-relative");
      },
      toolbarContainerTarget: function () {
        return document.querySelector(".Box.mt-3.position-relative");
      },
      githubTextEditorToReplaceElement: function () {
        return document.querySelector(".Box-body.p-0.blob-wrapper.data");
      },
    };
    this.prView = {
      iframeContainerTarget: function (container) {
        return container;
      },
      toolbarContainerTarget: function (container) {
        return container.querySelector(".file-info");
      },
      githubTextEditorToReplaceElement: function (container) {
        return container.querySelector(".js-file-content");
      },
    };
    this.openRepoInExternalEditor = {
      buttonContainerOnRepoFilesList: function () {
        return document.querySelector(".file-navigation");
      },
      buttonContainerOnPrs: function () {
        return document.querySelector(".gh-header-actions");
      },
    };
    this.all = {
      notificationIndicator: function () {
        return document.querySelector(".notification-indicator");
      },
      body: function () {
        return document.body;
      },
      edit__githubFileNameInput: function () {
        return document.querySelector(".js-blob-filename");
      },
      edit__githubTextAreaWithFileContents: function () {
        return document.querySelector(".file-editor-textarea");
      },
      pr__mutationObserverTarget: function () {
        return document.getElementById("files");
      },
      pr__openWithExternalEditorLinkContainer: function (container) {
        return container.querySelectorAll("details-menu a")[0];
      },
      pr__viewOriginalFileLinkContainer: function (container) {
        return container.querySelectorAll("details-menu a")[0];
      },
      pr__unprocessedFilePathContainer: function (container) {
        return container.querySelector(".file-info > a.Link--primary");
      },
      array: {
        pr__supportedPrFileContainers: function () {
          var elements = Array.from(document.querySelectorAll(".file.js-file.js-details-container")).map(function (e) {
            return e;
          });
          return elements.length > 0 ? elements : null;
        },
        pr__prInfoContainer: function () {
          var elements = Array.from(document.querySelectorAll(".gh-header-meta .css-truncate-target"));
          return elements.length > 0 ? elements : null;
        },
      },
    };
  }
  return Dependencies;
})();
exports.Dependencies = Dependencies;
//# sourceMappingURL=Dependencies.js.map
