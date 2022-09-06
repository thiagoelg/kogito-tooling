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
import { useCallback, useMemo, useState, ReactNode, createContext } from "react";
import { DeploymentData, DeploymentsContext, DeploymentsContextType, DEPLOYMENT_STATUS } from "./DeploymentsContext";

export function DeploymentsContextProvider(props: { children: ReactNode }) {
  const [deploymentsData, setDeploymentsData] = useState<DeploymentsContextType["deploymentsData"]>({});
  const [deploymentsStatus, setDeploymentsStatus] = useState<DeploymentsContextType["deploymentsStatus"]>({});

  const addDeployment = useCallback((deploymentData: DeploymentData, parentDeploymentId: string) => {
    const deploymentId = deploymentData.descriptor.workspaceId;
    setDeploymentsData((currentData) => ({
      ...currentData,
      [deploymentId]: {
        ...deploymentData,
        deploymentId,
        parentDeploymentId: parentDeploymentId ?? deploymentId,
      },
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
    [addDeployment, deploymentsData, deploymentsStatus]
  );

  return (
    <DeploymentsContext.Provider value={deploymentsContext}>
      <>{props.children}</>
    </DeploymentsContext.Provider>
  );
}
