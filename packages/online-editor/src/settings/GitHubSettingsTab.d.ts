/// <reference types="react" />
export declare const GITHUB_OAUTH_TOKEN_SIZE = 40;
export declare const GITHUB_TOKENS_URL = "https://github.com/settings/tokens";
export declare const GITHUB_TOKENS_HOW_TO_URL =
  "https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line";
export declare enum GitHubSignInOption {
  PERSONAL_ACCESS_TOKEN = 0,
  OAUTH = 1,
}
export interface GitHubOAuthResponse {
  access_token: string;
  token_type: string;
  scope: string;
}
export declare function GitHubSettingsTab(): JSX.Element;
export declare function obfuscate(token?: string): string | undefined;
//# sourceMappingURL=GitHubSettingsTab.d.ts.map
