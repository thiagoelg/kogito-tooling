import { ActiveWorkspace } from "../model/ActiveWorkspace";
export declare function useWorkspaceGitStatusPromise(
  workspace: ActiveWorkspace | undefined
): import("./PromiseState").PromiseState<{
  hasLocalChanges: boolean;
  isSynced: boolean;
}>;
export declare function useWorkspacePromise(
  workspaceId: string | undefined
): import("./PromiseState").PromiseState<ActiveWorkspace>;
export declare type WorkspaceEvents =
  | {
      type: "ADD";
      workspaceId: string;
    }
  | {
      type: "CREATE_SAVE_POINT";
      workspaceId: string;
    }
  | {
      type: "PULL";
      workspaceId: string;
    }
  | {
      type: "RENAME";
      workspaceId: string;
    }
  | {
      type: "DELETE";
      workspaceId: string;
    }
  | {
      type: "ADD_FILE";
      relativePath: string;
    }
  | {
      type: "MOVE_FILE";
      newRelativePath: string;
      oldRelativePath: string;
    }
  | {
      type: "RENAME_FILE";
      newRelativePath: string;
      oldRelativePath: string;
    }
  | {
      type: "UPDATE_FILE";
      relativePath: string;
    }
  | {
      type: "DELETE_FILE";
      relativePath: string;
    }
  | {
      type: "ADD_BATCH";
      workspaceId: string;
      relativePaths: string[];
    }
  | {
      type: "MOVE_BATCH";
      workspaceId: string;
      relativePaths: Map<string, string>;
    }
  | {
      type: "DELETE_BATCH";
      workspaceId: string;
      relativePaths: string[];
    };
//# sourceMappingURL=WorkspaceHooks.d.ts.map
