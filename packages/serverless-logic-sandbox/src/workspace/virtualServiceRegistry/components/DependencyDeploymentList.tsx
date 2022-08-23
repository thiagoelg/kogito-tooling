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
import {
  Dropdown,
  DropdownItem,
  DropdownPosition,
  KebabToggle,
} from "@patternfly/react-core/dist/js/components/Dropdown";
import { ActiveWorkspace } from "../../model/ActiveWorkspace";
import { WorkspaceFile } from "../../WorkspacesContext";

interface DependencyDeploymentListProps {
  workspace: ActiveWorkspace;
  workspaceFile: WorkspaceFile;
  deployAsProject: boolean;
  canUploadOpenApi: boolean;
}

export function DependencyDeploymentList(props: DependencyDeploymentListProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDeleted, setIsDeleted] = React.useState(false);

  const onToggle = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  const onSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DataList aria-label="single action data list example ">
      {!isDeleted && (
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
              <Button
                onClick={() => {
                  if (confirm("Are you sure?")) {
                    setIsDeleted(true);
                  }
                }}
                variant="primary"
                key="delete-action"
              >
                Delete
              </Button>
            </DataListAction>
          </DataListItemRow>
        </DataListItem>
      )}
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
            <Dropdown
              isPlain
              position={DropdownPosition.right}
              isOpen={isOpen}
              onSelect={onSelect}
              toggle={<KebabToggle onToggle={onToggle} />}
              dropdownItems={[
                <DropdownItem key="link">Link</DropdownItem>,
                <DropdownItem key="action" component="button">
                  Action
                </DropdownItem>,
                <DropdownItem key="disabled link" isDisabled>
                  Disabled Link
                </DropdownItem>,
              ]}
            />
          </DataListAction>
        </DataListItemRow>
      </DataListItem>
    </DataList>
  );
}
