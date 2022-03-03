import { FsCache } from "./FsCache";
import { WorkspaceFile } from "../WorkspacesContext";
import { StorageFile, StorageService } from "./StorageService";
export declare class WorkspaceSvgService {
  private readonly storageService;
  private readonly fsCache;
  constructor(storageService: StorageService, fsCache?: FsCache);
  getWorkspaceSvgsFs(workspaceId: string): Promise<any>;
  getSvg(workspaceFile: WorkspaceFile): Promise<StorageFile | undefined>;
  deleteSvg(workspaceFile: WorkspaceFile): Promise<void>;
  createOrOverwriteSvg(workspaceFile: WorkspaceFile, svgString: string): Promise<void>;
  renameSvg(workspaceFile: WorkspaceFile, newFileNameWithoutExtension: string): Promise<StorageFile | undefined>;
  delete(workspaceId: string): Promise<void>;
  private static getSvgStoreName;
}
//# sourceMappingURL=WorkspaceSvgService.d.ts.map
