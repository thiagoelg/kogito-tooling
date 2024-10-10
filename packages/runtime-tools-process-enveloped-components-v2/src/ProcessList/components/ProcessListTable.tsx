/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { useEffect, useCallback, useState } from "react";
import { ExpandableRowContent } from "@patternfly/react-table/dist/js/components/Table";
import { TableComposable, Thead, Tbody, Tr, Th, Td } from "@patternfly/react-table/dist/js/components/TableComposable";
import _ from "lodash";
import ProcessListChildTable from "./ProcessListChildTable";
import { HistoryIcon } from "@patternfly/react-icons/dist/js/icons/history-icon";
import Moment from "react-moment";
import { getProcessInstanceDescription, ProcessInstanceIconCreator } from "./ProcessListUtils";
import ProcessListActionsKebab from "./ProcessListActionsKebab";
import { Checkbox } from "@patternfly/react-core/dist/js/components/Checkbox";
import DisablePopup from "./DisablePopup";
import ErrorPopover from "./ErrorPopover";
import { ProcessInstance, ProcessInstanceState } from "@kie-tools/runtime-tools-process-gateway-api/dist/types";
import { ProcessInfoModal } from "@kie-tools/runtime-tools-components/dist/components/ProcessInfoModal";
import { setTitle } from "@kie-tools/runtime-tools-components/dist/utils/Utils";
import { KogitoSpinner } from "@kie-tools/runtime-tools-components/dist/components/KogitoSpinner";
import {
  KogitoEmptyState,
  KogitoEmptyStateType,
} from "@kie-tools/runtime-tools-components/dist/components/KogitoEmptyState";
import { ItemDescriptor } from "@kie-tools/runtime-tools-components/dist/components/ItemDescriptor";
import { EndpointLink } from "@kie-tools/runtime-tools-components/dist/components/EndpointLink";
import { TitleType } from "@kie-tools/runtime-tools-shared-gateway-api/dist/types";
import { ProcessListApiClient, ProcessListSortBy } from "../api";

export interface ProcessListTableProps {
  processInstances: ProcessInstance[];
  isLoading: boolean;
  expanded: {
    [key: number]: boolean;
  };
  setExpanded: React.Dispatch<
    React.SetStateAction<{
      [key: number]: boolean;
    }>
  >;
  apiClient: ProcessListApiClient;
  onSort: (event: React.SyntheticEvent<EventTarget>, index: number, direction: "desc" | "asc") => void;
  sortBy: ProcessListSortBy;
  setProcessInstances: React.Dispatch<React.SetStateAction<ProcessInstance[]>>;
  selectedInstances: ProcessInstance[];
  setSelectedInstances: React.Dispatch<React.SetStateAction<ProcessInstance[]>>;
  selectableInstances: number;
  setSelectableInstances: React.Dispatch<React.SetStateAction<number>>;
  setIsAllChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProcessListTable: React.FC<ProcessListTableProps> = ({
  isLoading,
  expanded,
  setExpanded,
  sortBy,
  onSort,
  processInstances,
  setProcessInstances,
  selectedInstances,
  setSelectedInstances,
  selectableInstances,
  setSelectableInstances,
  setIsAllChecked,
  apiClient,
}) => {
  const [rowPairs, setRowPairs] = useState<any>([]);
  const columns: string[] = ["__Toggle", "__Select", "Id", "Status", "Created", "Last update", "__Actions"];
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalContent, setModalContent] = useState<string>("");
  const [titleType, setTitleType] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProcessInstance, setSelectedProcessInstance] = useState<ProcessInstance>();

  const toggleModal = useCallback(() => {
    setIsModalOpen((currentIsModalOpen) => !currentIsModalOpen);
  }, []);

  const onShowMessage = useCallback(
    (title: string, content: string, type: TitleType, processInstance: ProcessInstance) => {
      setSelectedProcessInstance(processInstance);
      setTitleType(type);
      setModalTitle(title);
      setModalContent(content);
      toggleModal();
    },
    [toggleModal]
  );

  const onSkipClick = useCallback(
    async (processInstance: ProcessInstance): Promise<void> => {
      try {
        await apiClient.skipProcess(processInstance);
        onShowMessage(
          "Skip operation",
          `The process ${processInstance.processName} was successfully skipped.`,
          TitleType.SUCCESS,
          processInstance
        );
      } catch (error) {
        onShowMessage(
          "Skip operation",
          `The process ${processInstance.processName} failed to skip. Message: ${error.message}`,
          TitleType.FAILURE,
          processInstance
        );
      } finally {
        toggleModal();
      }
    },
    [apiClient, onShowMessage, toggleModal]
  );

  const onRetryClick = useCallback(
    async (processInstance: ProcessInstance): Promise<void> => {
      try {
        await apiClient.retryProcess(processInstance);
        onShowMessage(
          "Retry operation",
          `The process ${processInstance.processName} was successfully re-executed.`,
          TitleType.SUCCESS,
          processInstance
        );
      } catch (error) {
        onShowMessage(
          "Retry operation",
          `The process ${processInstance.processName} failed to re-execute. Message: ${error.message}`,
          TitleType.FAILURE,
          processInstance
        );
      } finally {
        toggleModal();
      }
    },
    [apiClient, onShowMessage, toggleModal]
  );

  const onAbortClick = useCallback(
    async (processInstance: ProcessInstance): Promise<void> => {
      try {
        await apiClient.abortProcess(processInstance);
        onShowMessage(
          "Abort operation",
          `The process ${processInstance.processName} was successfully aborted.`,
          TitleType.SUCCESS,
          processInstance
        );
        setProcessInstances((currentProcessInstances) => {
          return currentProcessInstances.map((instance) => {
            if (instance.id === processInstance.id) {
              return {
                ...instance,
                state: ProcessInstanceState.Aborted,
              };
            }
            return instance;
          });
        });
      } catch (error) {
        onShowMessage(
          "Abort operation",
          `Failed to abort process ${processInstance.processName}. Message: ${error.message}`,
          TitleType.FAILURE,
          processInstance
        );
      } finally {
        toggleModal();
      }
    },
    [apiClient, onShowMessage, setProcessInstances, toggleModal]
  );

  const handleClick = useCallback(
    async (processInstance: ProcessInstance) => {
      await apiClient.processInstanceSelected(processInstance);
    },
    [apiClient]
  );

  const checkBoxSelect = useCallback(
    (processInstance: ProcessInstance): void => {
      setProcessInstances((currentProcessInstances) => {
        return currentProcessInstances.map((instance) => {
          if (processInstance.id === instance.id) {
            if (instance.isSelected) {
              setSelectedInstances((currentSelectedInstances) => {
                return currentSelectedInstances.filter((selectedInstance) => selectedInstance.id !== instance.id);
              });
              return {
                ...instance,
                isSelected: false,
              };
            } else {
              setSelectedInstances((currentSelectedInstances) => {
                return [...currentSelectedInstances, instance];
              });
              return {
                ...instance,
                isSelected: true,
              };
            }
          }
          return instance;
        });
      });
    },
    [setProcessInstances, setSelectedInstances]
  );

  useEffect(() => {
    if (!_.isEmpty(processInstances)) {
      const tempRows: any[] = [];
      processInstances.forEach((processInstance: ProcessInstance) => {
        tempRows.push({
          id: processInstance.id,
          parent: [
            <>
              {processInstance.addons?.includes("process-management") && processInstance.serviceUrl !== null ? (
                <Checkbox
                  isChecked={processInstance.isSelected}
                  onChange={() => checkBoxSelect(processInstance)}
                  aria-label="process-list-checkbox"
                  data-testid={`checkbox-${processInstance.id}`}
                  id={`checkbox-${processInstance.id}`}
                  name={`checkbox-${processInstance.id}`}
                />
              ) : (
                <DisablePopup
                  processInstanceData={processInstance}
                  component={
                    <Checkbox
                      aria-label="process-list-checkbox-disabled"
                      data-testid={`checkbox-${processInstance.id}`}
                      id={`checkbox-${processInstance.id}`}
                      isDisabled={true}
                    />
                  }
                />
              )}
            </>,
            <>
              <a className="process-list__link" onClick={() => handleClick(processInstance)}>
                <strong>
                  <ItemDescriptor itemDescription={getProcessInstanceDescription(processInstance)} />
                </strong>
              </a>
              <EndpointLink serviceUrl={processInstance.serviceUrl} isLinkShown={false} />
            </>,
            processInstance.state === ProcessInstanceState.Error ? (
              <ErrorPopover
                processInstanceData={processInstance}
                onSkipClick={onSkipClick}
                onRetryClick={onRetryClick}
              />
            ) : (
              ProcessInstanceIconCreator(processInstance.state)
            ),
            processInstance.start ? <Moment fromNow>{new Date(`${processInstance.start}`)}</Moment> : "",
            processInstance.lastUpdate ? (
              <span>
                <HistoryIcon className="pf-u-mr-sm" /> {"Updated "}
                <Moment fromNow>{new Date(`${processInstance.lastUpdate}`)}</Moment>
              </span>
            ) : (
              ""
            ),
            <ProcessListActionsKebab
              processInstance={processInstance}
              onSkipClick={onSkipClick}
              onRetryClick={onRetryClick}
              onAbortClick={onAbortClick}
              key={processInstance.id}
            />,
          ],
          child: [processInstance.id],
        });
      });
      setRowPairs(tempRows);
    } else {
      setRowPairs([]);
    }
  }, [checkBoxSelect, handleClick, onAbortClick, onRetryClick, onSkipClick, processInstances]);

  const loadChild = (parentId: string, parentIndex: number): JSX.Element | null => {
    if (!expanded[parentIndex]) {
      return null;
    } else {
      return (
        <ProcessListChildTable
          parentProcessId={parentId}
          processInstances={processInstances}
          setProcessInstances={setProcessInstances}
          selectedInstances={selectedInstances}
          setSelectedInstances={setSelectedInstances}
          setSelectableInstances={setSelectableInstances}
          apiClient={apiClient}
          onSkipClick={onSkipClick}
          onRetryClick={onRetryClick}
          onAbortClick={onAbortClick}
        />
      );
    }
  };

  const onToggle = (pairIndex: number, pair: any): void => {
    setExpanded({
      ...expanded,
      [pairIndex]: !expanded[pairIndex],
    });

    if (expanded[pairIndex]) {
      const processInstance = processInstances.find((instance) => instance.id === pair.id);
      processInstance?.childProcessInstances?.forEach((childInstance: ProcessInstance) => {
        if (childInstance.isSelected) {
          const index = selectedInstances.findIndex((selectedInstance) => selectedInstance.id === childInstance.id);
          if (index !== -1) {
            selectedInstances.splice(index, 1);
          }
        }
      });
      processInstances.forEach((instance: ProcessInstance) => {
        if (processInstance?.id === instance.id) {
          instance.isOpen = false;
          instance.childProcessInstances?.forEach((child: ProcessInstance) => {
            if (child.serviceUrl && child.addons?.includes("process-management")) {
              setSelectableInstances((prev) => prev - 1);
            }
          });
        }
      });
    } else {
      let processInstance;
      if (!_.isEmpty(processInstances)) {
        processInstance = processInstances.find((instance) => instance.id === pair.id);
        processInstances.forEach((instance: ProcessInstance) => {
          if (processInstance?.id === instance.id) {
            instance.isOpen = true;
          }
        });
      }
    }
    if (selectedInstances.length === selectableInstances && selectableInstances !== 0) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  };

  return (
    <React.Fragment>
      <ProcessInfoModal
        isModalOpen={isModalOpen}
        handleModalToggle={toggleModal}
        modalTitle={setTitle(titleType, modalTitle)}
        modalContent={modalContent}
        processName={selectedProcessInstance && selectedProcessInstance.processName}
        ouiaId={selectedProcessInstance && "process-" + selectedProcessInstance.id}
      />
      <TableComposable data-testid="process-list-table" aria-label="Process List Table">
        <Thead>
          <Tr ouiaId="process-list-table-header">
            {columns.map((column, columnIndex) => {
              let sortParams = {};
              if (!isLoading && rowPairs.length > 0) {
                sortParams = {
                  sort: {
                    sortBy,
                    onSort,
                    columnIndex,
                  },
                };
              }
              let styleParams;
              switch (columnIndex) {
                case 0:
                  styleParams = { width: "72px" };
                  sortParams = {};
                  break;
                case 1:
                  styleParams = { width: "86px" };
                  sortParams = {};
                  break;
                case columns.length - 1:
                  styleParams = { width: "188px" };
                  sortParams = {};
                  break;
              }
              return (
                <Th style={styleParams} key={`${column}_header`} {...sortParams}>
                  {column.startsWith("__") ? "" : column}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        {!isLoading && !_.isEmpty(rowPairs) ? (
          rowPairs.map((pair, pairIndex) => {
            const parentRow = (
              <Tr key={`${pair.id}-parent`}>
                <Td
                  key={`${pair.id}-parent-0`}
                  expand={{
                    rowIndex: pairIndex,
                    isExpanded: expanded[pairIndex],
                    onToggle: () => onToggle(pairIndex, pair),
                  }}
                />
                {pair.parent.map((cell, cellIndex) => (
                  <Td key={`${pair.id}-parent-${columns[cellIndex + 1]}`} dataLabel={columns[cellIndex + 1]}>
                    {cell}
                  </Td>
                ))}
              </Tr>
            );
            const childRow = (
              <Tr key={`${pair.id}-child`} isExpanded={expanded[pairIndex] === true}>
                <Td key={`${pair.id}-child-0`} />
                {rowPairs[pairIndex].child.map((cell, cellIndex) => (
                  <Td
                    key={`${pair.id}-child-${columns[++cellIndex]}`}
                    dataLabel={columns[cellIndex]}
                    noPadding={rowPairs[pairIndex].noPadding}
                    colSpan={6}
                  >
                    <ExpandableRowContent>{loadChild(cell, pairIndex)}</ExpandableRowContent>
                  </Td>
                ))}
              </Tr>
            );
            return (
              <Tbody key={`${pair.id}_tBody`}>
                {parentRow}
                {childRow}
              </Tbody>
            );
          })
        ) : (
          <tbody>
            <Tr>
              <Td colSpan={7}>
                <>
                  {isLoading && rowPairs.length === 0 && <KogitoSpinner spinnerText={"Loading process instances..."} />}
                  {!isLoading && rowPairs.length === 0 && (
                    <KogitoEmptyState
                      type={KogitoEmptyStateType.Search}
                      title="No results found"
                      body="Try using different filters"
                    />
                  )}
                </>
              </Td>
            </Tr>
          </tbody>
        )}
      </TableComposable>
    </React.Fragment>
  );
};

export default ProcessListTable;
