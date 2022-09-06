import * as React from "react";
import { createContext } from "react";
import { WorkspaceDescriptor } from "../workspace/model/WorkspaceDescriptor";
import { VirtualServiceRegistryGroup } from "../workspace/virtualServiceRegistry/models/VirtualServiceRegistry";
import { WorkspaceFile } from "../workspace/WorkspacesContext";

export enum DEPLOYMENT_STATUS {
  STANDBY = "STANDBY",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
  FAILED = "FAILED",
  HAS_PREVIOUS_DEPLOY = "HAS_PREVIOUS_DEPLOY",
}

export enum DEPLOYMENT_ERROR_TYPE {
  UPLOAD_API_FAILED = "UPLOAD_API_FAILED",
  DEPLOYMENT_FAILED = "DEPLOYMENT_FAILED",
}

export type DeploymentError = {
  type: DEPLOYMENT_ERROR_TYPE;
  message: string;
};

export type DeploymentOptions = {
  shouldDeployAsProject: boolean;
  shouldUploadOpenApi: boolean;
  shouldAttachKafkaSource: boolean;
  shouldUseLastDeployedVersion: boolean;
};

export type DeploymentData = {
  descriptor: WorkspaceDescriptor;
  files: WorkspaceFile[];
  registryGroup: VirtualServiceRegistryGroup;
  options: DeploymentOptions;
  deploymentId?: string;
  parentDeploymentId?: string;
};

export type DeploymenStatus = {
  status: DEPLOYMENT_STATUS;
  error?: DeploymentError;
};

export interface DeploymentsContextType {
  deploymentsData: {
    [deploymentId: string]: DeploymentData;
  };
  deploymentsStatus: {
    [deploymentId: string]: DeploymenStatus;
  };
  addDeployment: (deploymentData: DeploymentData, parentDeploymentId: string) => string;
}

export const DeploymentsContext = createContext<DeploymentsContextType>({} as any);
