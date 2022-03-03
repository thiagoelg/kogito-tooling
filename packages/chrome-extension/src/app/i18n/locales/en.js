"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.en = void 0;
exports.en = {
  openIn: function (name) {
    return "Open in ".concat(name);
  },
  seeAsDiagram: "See as diagram",
  fullScreen: "Full Screen",
  reset: "Reset",
  note: "Note",
  single: {
    exitFullScreen: "Exit Full Screen",
    editorToolbar: {
      fixAndSeeAsDiagram: "Fix your file and try reopening it.",
      errorOpeningFile: "Can't open Editor for this file.",
      seeAsSource: "See as source",
      copyLinkTo: function (name) {
        return "Copy link to ".concat(name);
      },
      linkCopied: "Link copied to clipboard",
      readOnly: "This is a read-only visualization.",
    },
  },
  pr: {
    isolated: {
      viewOriginal: "View original file",
    },
    toolbar: {
      closeDiagram: "Close diagram",
      original: "Original",
      changes: "Changes",
    },
  },
  common: {
    menu: {
      createToken: "Create token",
      placeYourToken: "Place your token here...",
      tokenInfo: {
        title: "Tokens are only stored locally as cookies.",
        disclaimer: "We never store or share your token with anyone.",
        explanation:
          "We use your GitHub OAuth Token to provide a better experience while using custom editors. The official GitHub API has a throttling mechanism with a fairly low threshold for unauthenticated requests.",
        whichPermissionUserGive:
          "By authenticating with your OAuth Token we are able to avoid delays when fetching recently updated files and also provide features that need to read from your repositories, like Work Item Definitions on BPMN diagrams.",
        permission: ""
          .concat(
            "For public repositories, no special permissions are required".bold(),
            ". In fact, you can generate a Token without ticking any checkbox. For private repositories, however, you should provide a Token with the "
          )
          .concat("'repo'".bold(), " permission."),
      },
    },
  },
};
//# sourceMappingURL=en.js.map
