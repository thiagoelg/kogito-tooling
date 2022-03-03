import {
  ResourceContent,
  ResourceContentOptions,
  ResourceListOptions,
  ResourcesList,
} from "@kie-tools-core/workspace/dist/api";
import * as React from "react";
import { WorkspaceDescriptor } from "./model/WorkspaceDescriptor";
import { WorkspaceService } from "./services/WorkspaceService";
import { WorkspaceDescriptorService } from "./services/WorkspaceDescriptorService";
import { WorkspaceFsService } from "./services/WorkspaceFsService";
import KieSandboxFs from "@kie-tools/kie-sandbox-fs";
import { GitService } from "./services/GitService";
import { GistOrigin, GitHubOrigin } from "./model/WorkspaceOrigin";
import { WorkspaceSvgService } from "./services/WorkspaceSvgService";
export declare const decoder: TextDecoder;
export declare const encoder: TextEncoder;
export declare class WorkspaceFile {
  private readonly args;
  constructor(args: { workspaceId: string; relativePath: string; getFileContents: () => Promise<Uint8Array> });
  get getFileContentsAsString(): () => Promise<string>;
  get getFileContents(): () => Promise<Uint8Array>;
  get workspaceId(): string;
  get relativePath(): string;
  get relativePathWithoutExtension(): string;
  get relativeDirPath(): string;
  get extension(): string;
  get nameWithoutExtension(): string;
  get name(): string;
}
export interface LocalFile {
  path: string;
  getFileContents: () => Promise<Uint8Array>;
}
export interface WorkspacesContextType {
  service: WorkspaceService;
  gitService: GitService;
  svgService: WorkspaceSvgService;
  descriptorService: WorkspaceDescriptorService;
  fsService: WorkspaceFsService;
  createWorkspaceFromLocal: (args: {
    useInMemoryFs: boolean;
    localFiles: LocalFile[];
    preferredName?: string;
  }) => Promise<{
    workspace: WorkspaceDescriptor;
    suggestedFirstFile?: WorkspaceFile;
  }>;
  createWorkspaceFromGitRepository: (args: {
    origin: GistOrigin | GitHubOrigin;
    gitConfig?: {
      email: string;
      name: string;
    };
    authInfo?: {
      username: string;
      password: string;
    };
  }) => Promise<{
    workspace: WorkspaceDescriptor;
    suggestedFirstFile?: WorkspaceFile;
  }>;
  pull(args: {
    fs: KieSandboxFs;
    workspaceId: string;
    gitConfig?: {
      email: string;
      name: string;
    };
    authInfo?: {
      username: string;
      password: string;
    };
  }): Promise<void>;
  addEmptyFile(args: {
    fs: KieSandboxFs;
    workspaceId: string;
    destinationDirRelativePath: string;
    extension: string;
  }): Promise<WorkspaceFile>;
  prepareZip(args: { fs: KieSandboxFs; workspaceId: string; onlyExtensions?: string[] }): Promise<Blob>;
  getFiles(args: { fs: KieSandboxFs; workspaceId: string }): Promise<WorkspaceFile[]>;
  hasLocalChanges(args: { fs: KieSandboxFs; workspaceId: string }): Promise<boolean>;
  createSavePoint(args: {
    fs: KieSandboxFs;
    workspaceId: string;
    gitConfig?: {
      email: string;
      name: string;
    };
  }): Promise<void>;
  getAbsolutePath(args: { workspaceId: string; relativePath?: string }): string;
  getUniqueFileIdentifier(args: { workspaceId: string; relativePath: string }): string;
  deleteWorkspace(args: { workspaceId: string }): Promise<void>;
  renameWorkspace(args: { workspaceId: string; newName: string }): Promise<void>;
  resourceContentList: (args: {
    fs: KieSandboxFs;
    workspaceId: string;
    globPattern: string;
    opts?: ResourceListOptions;
  }) => Promise<ResourcesList>;
  resourceContentGet: (args: {
    fs: KieSandboxFs;
    workspaceId: string;
    relativePath: string;
    opts?: ResourceContentOptions;
  }) => Promise<ResourceContent | undefined>;
  getFile(args: { fs: KieSandboxFs; workspaceId: string; relativePath: string }): Promise<WorkspaceFile | undefined>;
  renameFile(args: {
    fs: KieSandboxFs;
    file: WorkspaceFile;
    newFileNameWithoutExtension: string;
  }): Promise<WorkspaceFile>;
  updateFile(args: {
    fs: KieSandboxFs;
    file: WorkspaceFile;
    getNewContents: () => Promise<string | undefined>;
  }): Promise<void>;
  deleteFile(args: { fs: KieSandboxFs; file: WorkspaceFile }): Promise<void>;
  addFile(args: {
    fs: KieSandboxFs;
    workspaceId: string;
    name: string;
    destinationDirRelativePath: string;
    content: string;
    extension: string;
  }): Promise<WorkspaceFile>;
  existsFile(args: { fs: KieSandboxFs; workspaceId: string; relativePath: string }): Promise<boolean>;
}
export declare const WorkspacesContext: React.Context<WorkspacesContextType>;
export declare function useWorkspaces(): WorkspacesContextType;
//# sourceMappingURL=WorkspacesContext.d.ts.map
