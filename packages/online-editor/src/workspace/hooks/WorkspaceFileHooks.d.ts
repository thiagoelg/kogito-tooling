import { WorkspaceFile } from "../WorkspacesContext";
export declare function useWorkspaceFilePromise(
  workspaceId: string | undefined,
  relativePath: string | undefined
): import("./PromiseState").PromiseState<WorkspaceFile>;
export declare type WorkspaceFileEvents =
  | {
      type: "MOVE";
      newRelativePath: string;
      oldRelativePath: string;
    }
  | {
      type: "RENAME";
      newRelativePath: string;
      oldRelativePath: string;
    }
  | {
      type: "UPDATE";
      relativePath: string;
    }
  | {
      type: "DELETE";
      relativePath: string;
    }
  | {
      type: "ADD";
      relativePath: string;
    };
//# sourceMappingURL=WorkspaceFileHooks.d.ts.map
