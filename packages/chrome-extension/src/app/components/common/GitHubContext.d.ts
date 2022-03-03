import { Octokit } from "@octokit/rest";
import * as React from "react";
export interface GitHubContextType {
  octokit: () => Octokit;
  setToken: (token: string) => void;
  token?: string;
  userIsLoggedIn: () => boolean;
}
export declare const GitHubContext: React.Context<GitHubContextType>;
export declare function useGitHubApi(): GitHubContextType;
export declare function setCookie(name: string, value: string): void;
export declare function getCookie(name: string): string | undefined;
export declare const GitHubContextProvider: React.FC<{}>;
//# sourceMappingURL=GitHubContext.d.ts.map
