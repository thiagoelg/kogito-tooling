import { WorkspaceFile } from "../WorkspacesContext";
import { WorkspaceDescriptor } from "../model/WorkspaceDescriptor";
import { StorageService } from "./StorageService";
import KieSandboxFs from "@kie-tools/kie-sandbox-fs";
import { WorkspaceDescriptorService } from "./WorkspaceDescriptorService";
import { WorkspaceFsService } from "./WorkspaceFsService";
import { WorkspaceOrigin } from "../model/WorkspaceOrigin";
export declare class WorkspaceService {
  readonly storageService: StorageService;
  private readonly workspaceDescriptorService;
  private readonly fsService;
  constructor(
    storageService: StorageService,
    workspaceDescriptorService: WorkspaceDescriptorService,
    fsService: WorkspaceFsService
  );
  create(args: {
    useInMemoryFs: boolean;
    storeFiles: (fs: KieSandboxFs, workspace: WorkspaceDescriptor) => Promise<WorkspaceFile[]>;
    broadcastArgs: {
      broadcast: boolean;
    };
    origin: WorkspaceOrigin;
    preferredName?: string;
  }): Promise<{
    workspace: WorkspaceDescriptor;
    files: WorkspaceFile[];
  }>;
  getFilesWithLazyContent(fs: KieSandboxFs, workspaceId: string, globPattern?: string): Promise<WorkspaceFile[]>;
  delete(
    workspaceId: string,
    broadcastArgs: {
      broadcast: boolean;
    }
  ): Promise<void>;
  rename(
    workspaceId: string,
    newName: string,
    broadcastArgs: {
      broadcast: boolean;
    }
  ): Promise<void>;
  prepareZip(fs: KieSandboxFs, workspaceId: string, onlyExtensions?: string[]): Promise<Blob>;
  createOrOverwriteFile(
    fs: KieSandboxFs,
    file: WorkspaceFile,
    broadcastArgs: {
      broadcast: boolean;
    }
  ): Promise<void>;
  getFile(args: { fs: KieSandboxFs; workspaceId: string; relativePath: string }): Promise<WorkspaceFile | undefined>;
  updateFile(
    fs: KieSandboxFs,
    file: WorkspaceFile,
    getNewContents: () => Promise<string>,
    broadcastArgs: {
      broadcast: boolean;
    }
  ): Promise<void>;
  deleteFile(
    fs: KieSandboxFs,
    file: WorkspaceFile,
    broadcastArgs: {
      broadcast: boolean;
    }
  ): Promise<void>;
  renameFile(args: {
    fs: KieSandboxFs;
    file: WorkspaceFile;
    newFileNameWithoutExtension: string;
    broadcastArgs: {
      broadcast: boolean;
    };
  }): Promise<WorkspaceFile>;
  existsFile(args: { fs: KieSandboxFs; workspaceId: string; relativePath: string }): Promise<boolean>;
  getAbsolutePath(args: { workspaceId: string; relativePath?: string }): string;
  deleteFiles(
    fs: KieSandboxFs,
    files: WorkspaceFile[],
    broadcastArgs: {
      broadcast: boolean;
    }
  ): Promise<void>;
  moveFiles(
    fs: KieSandboxFs,
    files: WorkspaceFile[],
    newDirPath: string,
    broadcastArgs: {
      broadcast: boolean;
    }
  ): Promise<void>;
  private toWorkspaceFile;
  private toStorageFile;
  getUniqueFileIdentifier(args: { workspaceId: string; relativePath: string }): string;
}
//# sourceMappingURL=WorkspaceService.d.ts.map
