import KieSandboxFs from "@kie-tools/kie-sandbox-fs";
export declare const GIST_DEFAULT_BRANCH = "master";
export declare const GIST_ORIGIN_REMOTE_NAME = "origin";
export declare const GIT_ORIGIN_REMOTE_NAME = "origin";
export declare const GIT_DEFAULT_BRANCH = "main";
export interface CloneArgs {
  fs: KieSandboxFs;
  repositoryUrl: URL;
  sourceBranch: string;
  dir: string;
  gitConfig?: {
    name: string;
    email: string;
  };
  authInfo?: {
    username: string;
    password: string;
  };
}
export interface CommitArgs {
  fs: KieSandboxFs;
  message: string;
  targetBranch: string;
  dir: string;
  author: {
    name: string;
    email: string;
  };
}
export interface PushArgs {
  fs: KieSandboxFs;
  dir: string;
  ref: string;
  remoteRef?: string;
  remote: string;
  force: boolean;
  authInfo: {
    username: string;
    password: string;
  };
}
export interface RemoteRefArgs {
  fs: KieSandboxFs;
  dir: string;
  remoteRef?: string;
  authInfo?: {
    username: string;
    password: string;
  };
}
export declare class GitService {
  private readonly corsProxy;
  constructor(corsProxy: string);
  clone(args: CloneArgs): Promise<void>;
  branch(args: { fs: KieSandboxFs; dir: string; name: string; checkout: boolean }): Promise<void>;
  addRemote(args: { fs: KieSandboxFs; dir: string; name: string; url: string; force: boolean }): Promise<void>;
  commit(args: CommitArgs): Promise<void>;
  pull(args: {
    fs: KieSandboxFs;
    dir: string;
    ref: string;
    author: {
      name: string;
      email: string;
    };
    authInfo?: {
      username: string;
      password: string;
    };
  }): Promise<void>;
  getRemoteRef(args: RemoteRefArgs): Promise<import("isomorphic-git").ServerRef | undefined>;
  push(args: PushArgs): Promise<void>;
  add(args: { fs: KieSandboxFs; dir: string; relativePath: string }): Promise<void>;
  setupGitConfig(
    fs: KieSandboxFs,
    dir: string,
    config: {
      name: string;
      email: string;
    }
  ): Promise<void>;
  init(args: { fs: KieSandboxFs; dir: string }): Promise<void>;
  isIgnored(args: { fs: KieSandboxFs; dir: string; filepath: string }): Promise<boolean>;
  rm(args: { fs: KieSandboxFs; dir: string; relativePath: string }): Promise<void>;
  hasLocalChanges(args: { fs: KieSandboxFs; dir: string }): Promise<boolean>;
  unstagedModifiedFileRelativePaths(args: { fs: KieSandboxFs; dir: string }): Promise<string[]>;
  resolveRef(args: { fs: KieSandboxFs; dir: string; ref: string }): Promise<string>;
}
//# sourceMappingURL=GitService.d.ts.map
