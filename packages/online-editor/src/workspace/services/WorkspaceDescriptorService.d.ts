import { WorkspaceDescriptor } from "../model/WorkspaceDescriptor";
import { StorageService } from "./StorageService";
import { WorkspaceOrigin } from "../model/WorkspaceOrigin";
export declare const NEW_WORKSPACE_DEFAULT_NAME = "Untitled Folder";
export declare class WorkspaceDescriptorService {
  private readonly storageService;
  private readonly descriptorsFs;
  constructor(storageService: StorageService, descriptorsFs?: any);
  listAll(): Promise<WorkspaceDescriptor[]>;
  bumpLastUpdatedDate(workspaceId: string): Promise<void>;
  get(workspaceId: string): Promise<WorkspaceDescriptor>;
  create(args: { origin: WorkspaceOrigin; preferredName?: string }): Promise<WorkspaceDescriptor>;
  delete(workspaceId: string): Promise<void>;
  rename(workspaceId: string, newName: string): Promise<void>;
  turnIntoGist(workspaceId: string, gistUrl: URL): Promise<void>;
  turnIntoGit(workspaceId: string, url: URL): Promise<void>;
  private toStorageFile;
  newWorkspaceId(): string;
}
//# sourceMappingURL=WorkspaceDescriptorService.d.ts.map
