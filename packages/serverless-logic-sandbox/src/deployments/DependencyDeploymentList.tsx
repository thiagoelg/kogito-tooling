import * as React from "react";
import { Button } from "@patternfly/react-core/dist/js/components/Button";
import {
  DataList,
  DataListAction,
  DataListCell,
  DataListItem,
  DataListItemCells,
  DataListItemRow,
} from "@patternfly/react-core/dist/js/components/DataList";
import { ActiveWorkspace } from "../workspace/model/ActiveWorkspace";
import { WorkspaceFile } from "../workspace/WorkspacesContext";
import { Text, TextContent } from "@patternfly/react-core/dist/js/components/Text";
import { useVirtualServiceRegistryDependencies } from "../workspace/virtualServiceRegistry/hooks/useVirtualServiceRegistryDependencies";

interface DependencyDeploymentListProps {
  workspace: ActiveWorkspace;
  workspaceFile: WorkspaceFile;
  deployAsProject: boolean;
  canUploadOpenApi: boolean;
}

export function DependencyDeploymentList(props: DependencyDeploymentListProps) {
  const { needsDependencyDeployment, virtualServiceRegistryDependencies } =
    useVirtualServiceRegistryDependencies(props);

  console.log({
    needsDependencyDeployment,
    virtualServiceRegistryDependencies,
  });

  return (
    <>
      <TextContent>
        <Text component="h2">Dependencies</Text>
        <Text>Your model has dependencies on other workspaces, how should we proceed?</Text>
      </TextContent>
      <DataList aria-label="single action data list example ">
        <DataListItem aria-labelledby="single-action-item1">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <span id="single-action-item1">Single actionable Primary content</span>
                </DataListCell>,
                <DataListCell key="secondary content">Single actionable Secondary content</DataListCell>,
              ]}
            />
            <DataListAction
              aria-labelledby="single-action-item1 single-action-action1"
              id="single-action-action1"
              aria-label="Actions"
            >
              <Button onClick={() => {}} variant="primary" key="delete-action">
                Delete
              </Button>
            </DataListAction>
          </DataListItemRow>
        </DataListItem>
        <DataListItem aria-labelledby="multi-actions-item1">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <span id="multi-actions-item1">Multi actions Primary content</span>
                </DataListCell>,
                <DataListCell key="secondary content">Multi actions Secondary content</DataListCell>,
              ]}
            />
            <DataListAction
              aria-labelledby="multi-actions-item1 multi-actions-action1"
              id="multi-actions-action1"
              aria-label="Actions"
              isPlainButtonAction
            >
              Action
            </DataListAction>
          </DataListItemRow>
        </DataListItem>
      </DataList>
    </>
  );
}
