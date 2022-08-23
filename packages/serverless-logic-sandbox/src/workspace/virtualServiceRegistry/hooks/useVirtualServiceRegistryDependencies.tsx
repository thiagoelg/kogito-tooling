import * as React from "react";
import { useState, useEffect, useCallback, useMemo } from "react";
import { isServerlessWorkflow } from "../../../extension";
import { ActiveWorkspace } from "../../model/ActiveWorkspace";
import { getVirtualServiceRegistryDependencies } from "../models/VirtualServiceRegistry";
import { useWorkspaces, WorkspaceFile } from "../../WorkspacesContext";

export enum DEPLOYMENT_STATUS {
  STANDBY = "STANDBY",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
  FAILED = "FAILED",
}

export enum DEPLOYMENT_ERROR {
  UPLOAD_API = "UPLOAD_API",
  DEPLOYMENT_FAILED = "DEPLOYMENT_FAILED",
}

export type DeploymentDependencyError = {
  type: DEPLOYMENT_ERROR;
  message: string;
};

export type DeploymentDependency = {
  deploymentStatus: DEPLOYMENT_STATUS;
  workspace: ActiveWorkspace;
};

// Should return list of dependencies workspaces descriptors and a component to deploy said workspaces
// Should be able to see progress of deployments
// Should virtually replace functions with service registry when deployments are over
export function useVirtualServiceRegistryDependencies(props: {
  workspace: ActiveWorkspace;
  workspaceFile: WorkspaceFile;
  deployAsProject: boolean;
  canUploadOpenApi: boolean;
}) {
  const [virtualServiceRegistryDependencies, setVirtualServiceRegistryDependencies] = useState<Array<ActiveWorkspace>>(
    []
  );
  const [dependenciesDeployStatus, setDependenciesDeployStatus] = useState<Record<string, DEPLOYMENT_STATUS>>({});
  const workspaces = useWorkspaces();

  useEffect(() => {
    const updateWorkspacesList = async () => {
      let dependencies: Array<string> = [];
      if (props.deployAsProject) {
        if (props.workspace?.files) {
          dependencies = (
            await Promise.all(
              props.workspace.files
                .map((file) => isServerlessWorkflow(file.relativePath) && getVirtualServiceRegistryDependencies(file))
                .filter((value): value is Promise<Array<string>> => Boolean(value))
            )
          ).flat();
        }
      } else {
        dependencies = await getVirtualServiceRegistryDependencies(props.workspaceFile);
      }

      setVirtualServiceRegistryDependencies(
        await Promise.all(
          dependencies.map(async (workspaceId) => ({
            descriptor: await workspaces.descriptorService.get(workspaceId),
            files: await workspaces.getFiles({ fs: await workspaces.fsService.getFs(workspaceId), workspaceId }),
          }))
        )
      );
    };
    updateWorkspacesList();
  }, [props.deployAsProject, props.workspace.files, props.workspaceFile, workspaces]);

  const needsDependencyDeployment = useMemo(
    () => virtualServiceRegistryDependencies.length > 0,
    [virtualServiceRegistryDependencies]
  );

  const dependenciesDeployments = useMemo(
    () =>
      needsDependencyDeployment
        ? virtualServiceRegistryDependencies.map((workspace) => ({
            workspace,
            deploymentStatus: dependenciesDeployStatus[workspace.descriptor.workspaceId] || DEPLOYMENT_STATUS.STANDBY,
          }))
        : [],
    [dependenciesDeployStatus, needsDependencyDeployment, virtualServiceRegistryDependencies]
  );

  const deployDependency = useCallback((dependency: DeploymentDependency) => {}, []);

  const errors = useMemo(() => {
    const errors: Array<DeploymentDependencyError> = [];
    if (virtualServiceRegistryDependencies.length > 0 && !props.canUploadOpenApi) {
      errors.push({ type: DEPLOYMENT_ERROR.UPLOAD_API, message: "Uploading API to Service Registry is required." });
    }
    if (dependenciesDeployments.some((deployment) => deployment.deploymentStatus === DEPLOYMENT_STATUS.FAILED)) {
      errors.push({ type: DEPLOYMENT_ERROR.DEPLOYMENT_FAILED, message: "One or more deployments failed." });
    }
    return errors;
  }, [dependenciesDeployments, props.canUploadOpenApi, virtualServiceRegistryDependencies.length]);

  return { needsDependencyDeployment, dependenciesDeployments, errors, deployDependency };
}
