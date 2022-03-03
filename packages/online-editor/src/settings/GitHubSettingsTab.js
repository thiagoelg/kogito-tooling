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
Object.defineProperty(exports, "__esModule", { value: true });
exports.obfuscate =
  exports.GitHubSettingsTab =
  exports.GitHubSignInOption =
  exports.GITHUB_TOKENS_HOW_TO_URL =
  exports.GITHUB_TOKENS_URL =
  exports.GITHUB_OAUTH_TOKEN_SIZE =
    void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Page_1 = require("@patternfly/react-core/dist/js/components/Page");
var EmptyState_1 = require("@patternfly/react-core/dist/js/components/EmptyState");
var check_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/check-circle-icon");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var github_icon_1 = require("@patternfly/react-icons/dist/js/icons/github-icon");
var Spinner_1 = require("@patternfly/react-core/dist/js/components/Spinner");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var InputGroup_1 = require("@patternfly/react-core/dist/js/components/InputGroup");
var TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
var react_1 = require("react");
var SettingsContext_1 = require("./SettingsContext");
var exclamation_triangle_icon_1 = require("@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon");
var i18n_1 = require("../i18n");
var external_link_alt_icon_1 = require("@patternfly/react-icons/dist/js/icons/external-link-alt-icon");
exports.GITHUB_OAUTH_TOKEN_SIZE = 40;
exports.GITHUB_TOKENS_URL = "https://github.com/settings/tokens";
exports.GITHUB_TOKENS_HOW_TO_URL =
  "https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line";
var GitHubSignInOption;
(function (GitHubSignInOption) {
  GitHubSignInOption[(GitHubSignInOption["PERSONAL_ACCESS_TOKEN"] = 0)] = "PERSONAL_ACCESS_TOKEN";
  GitHubSignInOption[(GitHubSignInOption["OAUTH"] = 1)] = "OAUTH";
})((GitHubSignInOption = exports.GitHubSignInOption || (exports.GitHubSignInOption = {})));
var GitHubTokenScope;
(function (GitHubTokenScope) {
  GitHubTokenScope["GIST"] = "gist";
  GitHubTokenScope["REPO"] = "repo";
})(GitHubTokenScope || (GitHubTokenScope = {}));
function GitHubSettingsTab() {
  var _a, _b, _c, _d;
  var settings = (0, SettingsContext_1.useSettings)();
  var settingsDispatch = (0, SettingsContext_1.useSettingsDispatch)();
  var i18n = (0, i18n_1.useOnlineI18n)().i18n;
  var _e = __read((0, react_1.useState)(GitHubSignInOption.PERSONAL_ACCESS_TOKEN), 2),
    githubSignInOption = _e[0],
    setGitHubSignInOption = _e[1];
  var _f = __read((0, react_1.useState)(undefined), 2),
    potentialGitHubToken = _f[0],
    setPotentialGitHubToken = _f[1];
  var _g = __read((0, react_1.useState)(true), 2),
    isGitHubTokenValid = _g[0],
    setIsGitHubTokenValid = _g[1];
  var githubTokenValidated = (0, react_1.useMemo)(
    function () {
      return isGitHubTokenValid ? "default" : "error";
    },
    [isGitHubTokenValid]
  );
  var githubTokenHelperText = (0, react_1.useMemo)(
    function () {
      return isGitHubTokenValid ? undefined : "Invalid token. Check if it has the 'repo' scope.";
    },
    [isGitHubTokenValid]
  );
  var githubTokenToDisplay = (0, react_1.useMemo)(
    function () {
      return obfuscate(
        potentialGitHubToken !== null && potentialGitHubToken !== void 0 ? potentialGitHubToken : settings.github.token
      );
    },
    [settings.github, potentialGitHubToken]
  );
  var onPasteGitHubToken = (0, react_1.useCallback)(
    function (e) {
      var token = e.clipboardData.getData("text/plain").slice(0, exports.GITHUB_OAUTH_TOKEN_SIZE);
      setPotentialGitHubToken(token);
      settingsDispatch.github.authService
        .authenticate(token)
        .then(function () {
          return setIsGitHubTokenValid(true);
        })
        .catch(function (e) {
          return setIsGitHubTokenValid(false);
        });
    },
    [settingsDispatch.github.authService]
  );
  var onSignOutFromGitHub = (0, react_1.useCallback)(
    function () {
      settingsDispatch.github.authService.reset();
      setPotentialGitHubToken(undefined);
    },
    [settingsDispatch.github.authService]
  );
  return (0, jsx_runtime_1.jsxs)(
    Page_1.Page,
    {
      children: [
        settings.github.authStatus === SettingsContext_1.AuthStatus.TOKEN_EXPIRED &&
          (0, jsx_runtime_1.jsx)(
            Page_1.PageSection,
            {
              children: (0, jsx_runtime_1.jsxs)(
                EmptyState_1.EmptyState,
                {
                  children: [
                    (0, jsx_runtime_1.jsx)(
                      EmptyState_1.EmptyStateIcon,
                      { icon: exclamation_triangle_icon_1.ExclamationTriangleIcon },
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)(
                      Text_1.TextContent,
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          Text_1.Text,
                          __assign({ component: "h2" }, { children: "GitHub Token expired" }),
                          void 0
                        ),
                      },
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)("br", {}, void 0),
                    (0, jsx_runtime_1.jsxs)(
                      EmptyState_1.EmptyStateBody,
                      {
                        children: [
                          (0, jsx_runtime_1.jsx)(
                            Text_1.TextContent,
                            { children: "Reset your token to sign in with GitHub again." },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          (0, jsx_runtime_1.jsx)(
                            Button_1.Button,
                            __assign(
                              { variant: Button_1.ButtonVariant.tertiary, onClick: onSignOutFromGitHub },
                              { children: "Reset" }
                            ),
                            void 0
                          ),
                        ],
                      },
                      void 0
                    ),
                  ],
                },
                void 0
              ),
            },
            void 0
          ),
        settings.github.authStatus === SettingsContext_1.AuthStatus.LOADING &&
          (0, jsx_runtime_1.jsx)(
            Page_1.PageSection,
            {
              children: (0, jsx_runtime_1.jsxs)(
                EmptyState_1.EmptyState,
                {
                  children: [
                    (0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStateIcon, { icon: github_icon_1.GithubIcon }, void 0),
                    (0, jsx_runtime_1.jsx)(
                      Text_1.TextContent,
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          Text_1.Text,
                          __assign({ component: "h2" }, { children: "Signing in with GitHub" }),
                          void 0
                        ),
                      },
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)("br", {}, void 0),
                    (0, jsx_runtime_1.jsx)("br", {}, void 0),
                    (0, jsx_runtime_1.jsx)(Spinner_1.Spinner, {}, void 0),
                  ],
                },
                void 0
              ),
            },
            void 0
          ),
        settings.github.authStatus === SettingsContext_1.AuthStatus.SIGNED_IN &&
          (0, jsx_runtime_1.jsx)(
            Page_1.PageSection,
            {
              children: (0, jsx_runtime_1.jsxs)(
                EmptyState_1.EmptyState,
                {
                  children: [
                    (0, jsx_runtime_1.jsx)(
                      EmptyState_1.EmptyStateIcon,
                      { icon: check_circle_icon_1.CheckCircleIcon, color: "var(--pf-global--success-color--100)" },
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)(
                      Text_1.TextContent,
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          Text_1.Text,
                          __assign({ component: "h2" }, { children: "You're signed in with GitHub." }),
                          void 0
                        ),
                      },
                      void 0
                    ),
                    (0, jsx_runtime_1.jsxs)(
                      EmptyState_1.EmptyStateBody,
                      {
                        children: [
                          (0, jsx_runtime_1.jsxs)(
                            Text_1.TextContent,
                            {
                              children: [
                                "Gists are ",
                                (0, jsx_runtime_1.jsxs)(
                                  "b",
                                  {
                                    children: [
                                      (
                                        (_a = settings.github.scopes) === null || _a === void 0
                                          ? void 0
                                          : _a.includes(GitHubTokenScope.GIST)
                                      )
                                        ? "enabled"
                                        : "disabled",
                                      ".",
                                    ],
                                  },
                                  void 0
                                ),
                              ],
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsxs)(
                            Text_1.TextContent,
                            {
                              children: [
                                "Private repositories are",
                                " ",
                                (0, jsx_runtime_1.jsxs)(
                                  "b",
                                  {
                                    children: [
                                      (
                                        (_b = settings.github.scopes) === null || _b === void 0
                                          ? void 0
                                          : _b.includes(GitHubTokenScope.REPO)
                                      )
                                        ? "enabled"
                                        : "disabled",
                                      ".",
                                    ],
                                  },
                                  void 0
                                ),
                              ],
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          (0, jsx_runtime_1.jsxs)(
                            Text_1.TextContent,
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)("b", { children: "Token: " }, void 0),
                                (0, jsx_runtime_1.jsx)("i", { children: obfuscate(settings.github.token) }, void 0),
                              ],
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsxs)(
                            Text_1.TextContent,
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)("b", { children: "User: " }, void 0),
                                (0, jsx_runtime_1.jsx)(
                                  "i",
                                  {
                                    children: (_c = settings.github.user) === null || _c === void 0 ? void 0 : _c.login,
                                  },
                                  void 0
                                ),
                              ],
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsxs)(
                            Text_1.TextContent,
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)("b", { children: "Scope: " }, void 0),
                                (0, jsx_runtime_1.jsx)(
                                  "i",
                                  {
                                    children:
                                      ((_d = settings.github.scopes) === null || _d === void 0
                                        ? void 0
                                        : _d.join(", ")) || "(none)",
                                  },
                                  void 0
                                ),
                              ],
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          (0, jsx_runtime_1.jsx)(
                            Button_1.Button,
                            __assign(
                              { variant: Button_1.ButtonVariant.tertiary, onClick: onSignOutFromGitHub },
                              { children: "Sign out" }
                            ),
                            void 0
                          ),
                        ],
                      },
                      void 0
                    ),
                  ],
                },
                void 0
              ),
            },
            void 0
          ),
        settings.github.authStatus === SettingsContext_1.AuthStatus.SIGNED_OUT &&
          (0, jsx_runtime_1.jsx)(
            jsx_runtime_1.Fragment,
            {
              children: (0, jsx_runtime_1.jsx)(
                Page_1.PageSection,
                {
                  children:
                    githubSignInOption == GitHubSignInOption.PERSONAL_ACCESS_TOKEN &&
                    (0, jsx_runtime_1.jsx)(
                      jsx_runtime_1.Fragment,
                      {
                        children: (0, jsx_runtime_1.jsxs)(
                          Page_1.PageSection,
                          __assign(
                            { variant: "light", isFilled: true, style: { height: "100%" } },
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)(
                                  jsx_runtime_1.Fragment,
                                  {
                                    children: (0, jsx_runtime_1.jsxs)(
                                      "p",
                                      {
                                        children: [
                                          (0, jsx_runtime_1.jsx)(
                                            "span",
                                            __assign(
                                              { className: "pf-u-mr-sm" },
                                              { children: i18n.githubTokenModal.body.disclaimer }
                                            ),
                                            void 0
                                          ),
                                          (0, jsx_runtime_1.jsxs)(
                                            "a",
                                            __assign(
                                              { href: exports.GITHUB_TOKENS_HOW_TO_URL, target: "_blank" },
                                              {
                                                children: [
                                                  i18n.githubTokenModal.body.learnMore,
                                                  (0, jsx_runtime_1.jsx)(
                                                    external_link_alt_icon_1.ExternalLinkAltIcon,
                                                    { className: "pf-u-mx-sm" },
                                                    void 0
                                                  ),
                                                ],
                                              }
                                            ),
                                            void 0
                                          ),
                                        ],
                                      },
                                      void 0
                                    ),
                                  },
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)("br", {}, void 0),
                                (0, jsx_runtime_1.jsx)(
                                  "h3",
                                  {
                                    children: (0, jsx_runtime_1.jsxs)(
                                      "a",
                                      __assign(
                                        { href: exports.GITHUB_TOKENS_URL, target: "_blank" },
                                        {
                                          children: [
                                            i18n.githubTokenModal.footer.createNewToken,
                                            (0, jsx_runtime_1.jsx)(
                                              external_link_alt_icon_1.ExternalLinkAltIcon,
                                              { className: "pf-u-mx-sm" },
                                              void 0
                                            ),
                                          ],
                                        }
                                      ),
                                      void 0
                                    ),
                                  },
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)("br", {}, void 0),
                                (0, jsx_runtime_1.jsx)(
                                  Form_1.Form,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      Form_1.FormGroup,
                                      __assign(
                                        {
                                          isRequired: true,
                                          helperTextInvalid: githubTokenHelperText,
                                          validated: githubTokenValidated,
                                          label: "Token",
                                          fieldId: "github-pat",
                                          helperText: "Your token must include the 'repo' scope.",
                                        },
                                        {
                                          children: (0, jsx_runtime_1.jsx)(
                                            InputGroup_1.InputGroup,
                                            {
                                              children: (0, jsx_runtime_1.jsx)(
                                                TextInput_1.TextInput,
                                                {
                                                  autoComplete: "off",
                                                  id: "token-input",
                                                  name: "tokenInput",
                                                  "aria-describedby": "token-text-input-helper",
                                                  placeholder: "Paste your GitHub token here",
                                                  maxLength: exports.GITHUB_OAUTH_TOKEN_SIZE,
                                                  validated: githubTokenValidated,
                                                  value: githubTokenToDisplay,
                                                  onPaste: onPasteGitHubToken,
                                                  autoFocus: true,
                                                },
                                                void 0
                                              ),
                                            },
                                            void 0
                                          ),
                                        }
                                      ),
                                      void 0
                                    ),
                                  },
                                  void 0
                                ),
                              ],
                            }
                          ),
                          void 0
                        ),
                      },
                      void 0
                    ),
                },
                void 0
              ),
            },
            void 0
          ),
      ],
    },
    void 0
  );
}
exports.GitHubSettingsTab = GitHubSettingsTab;
function obfuscate(token) {
  if (!token) {
    return undefined;
  }
  if (token.length <= 8) {
    return token;
  }
  var stars = new Array(token.length - 8).join("*");
  var pieceToObfuscate = token.substring(4, token.length - 4);
  return token.replace(pieceToObfuscate, stars);
}
exports.obfuscate = obfuscate;
//# sourceMappingURL=GitHubSettingsTab.js.map
