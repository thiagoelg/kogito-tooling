import { GIST_DEFAULT_BRANCH, GIT_DEFAULT_BRANCH } from "../services/GitService";
export declare enum WorkspaceKind {
  GITHUB_GIST = "GITHUB_GIST",
  GIT = "GIT",
  LOCAL = "LOCAL",
}
export declare type WorkspaceOrigin = LocalOrigin | GistOrigin | GitHubOrigin;
export interface LocalOrigin {
  kind: WorkspaceKind.LOCAL;
  branch: typeof GIT_DEFAULT_BRANCH;
  url?: undefined;
}
export interface GitHubOrigin {
  kind: WorkspaceKind.GIT;
  url: URL;
  branch: string;
}
export interface GistOrigin {
  kind: WorkspaceKind.GITHUB_GIST;
  url: URL;
  branch: typeof GIST_DEFAULT_BRANCH;
}
//# sourceMappingURL=WorkspaceOrigin.d.ts.map
