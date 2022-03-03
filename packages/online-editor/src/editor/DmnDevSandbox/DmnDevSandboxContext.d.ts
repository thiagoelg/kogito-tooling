import * as React from "react";
import { OpenShiftDeployedModel } from "../../openshift/OpenShiftDeployedModel";
import { WorkspaceFile } from "../../workspace/WorkspacesContext";
export interface DeploymentFile {
  path: string;
  getFileContents: () => Promise<string>;
}
export interface DmnDevSandboxContextType {
  deployments: OpenShiftDeployedModel[];
  isDropdownOpen: boolean;
  isDeploymentsDropdownOpen: boolean;
  isConfirmDeployModalOpen: boolean;
  setDeployments: React.Dispatch<React.SetStateAction<OpenShiftDeployedModel[]>>;
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDeploymentsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setConfirmDeployModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deploy: (workspaceFile: WorkspaceFile) => Promise<boolean>;
}
export declare const DmnDevSandboxContext: React.Context<DmnDevSandboxContextType>;
export declare function useDmnDevSandbox(): DmnDevSandboxContextType;
//# sourceMappingURL=DmnDevSandboxContext.d.ts.map
