/*
 * Copyright 2021 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";
import { useCallback, useEffect, useMemo, useState, ReactNode, createContext } from "react";
import { WorkspaceDescriptor } from "../../workspace/model/WorkspaceDescriptor";
import { VirtualServiceRegistryGroup } from "../../workspace/virtualServiceRegistry/models/VirtualServiceRegistry";
import { WorkspaceFile } from "../../workspace/WorkspacesContext";

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
  addDeployment: (deploymentData: DeploymentData) => string;
}

export const DeploymentsContext = createContext<DeploymentsContextType>({} as any);

export function DeploymentsContextProvider(props: { children: ReactNode }) {
  const [deploymentsData, setDeploymentsData] = useState<DeploymentsContextType["deploymentsData"]>({});
  const [deploymentsStatus, setDeploymentsStatus] = useState<DeploymentsContextType["deploymentsStatus"]>({});

  const addDeployment = useCallback((deploymentData: DeploymentData) => {
    const deploymentId = deploymentData.descriptor.workspaceId;
    setDeploymentsData((currentData) => ({
      ...currentData,
      [deploymentId]: deploymentData,
    }));
    setDeploymentsStatus((currentStatus) => ({
      ...currentStatus,
      [deploymentId]: {
        status: DEPLOYMENT_STATUS.STANDBY,
      },
    }));
    return deploymentId;
  }, []);

  const deploymentsContext: DeploymentsContextType = useMemo(
    () => ({
      deploymentsData,
      deploymentsStatus,
      addDeployment,
    }),
    [deploymentsData, deploymentsStatus]
  );

  return (
    <DeploymentsContext.Provider value={deploymentsContext}>
      <>{props.children}</>
    </DeploymentsContext.Provider>
  );
}
