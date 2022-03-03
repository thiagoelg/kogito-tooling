import { WorkspaceDescriptor } from "../model/WorkspaceDescriptor";
export declare function useWorkspaceDescriptorsPromise(): import("./PromiseState").PromiseState<WorkspaceDescriptor[]>;
export declare type WorkspacesEvents =
  | {
      type: "DELETE_ALL";
    }
  | {
      type: "ADD_WORKSPACE";
      workspaceId: string;
    }
  | {
      type: "RENAME_WORKSPACE";
      workspaceId: string;
    }
  | {
      type: "DELETE_WORKSPACE";
      workspaceId: string;
    };
//# sourceMappingURL=WorkspacesHooks.d.ts.map
