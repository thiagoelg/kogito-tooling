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
import { ICell, IRow, IRowCell, Table, TableBody, TableHeader } from "@patternfly/react-table/dist/js/components/Table";
import React, { useEffect, useState, useCallback } from "react";
import { getProcessInstanceDescription, ProcessInstanceIconCreator } from "./ProcessListUtils";
import { HistoryIcon } from "@patternfly/react-icons/dist/js/icons/history-icon";
import Moment from "react-moment";
import ProcessListActionsKebab from "./ProcessListActionsKebab";
import { Checkbox } from "@patternfly/react-core/dist/js/components/Checkbox";
import DisablePopup from "./DisablePopup";
import ErrorPopover from "./ErrorPopover";
import { ProcessInstance, ProcessInstanceState } from "@kie-tools/runtime-tools-process-gateway-api/dist/types";
import { ItemDescriptor } from "@kie-tools/runtime-tools-components/dist/components/ItemDescriptor";
import { EndpointLink } from "@kie-tools/runtime-tools-components/dist/components/EndpointLink";
import { KogitoSpinner } from "@kie-tools/runtime-tools-components/dist/components/KogitoSpinner";
import { ServerErrors } from "@kie-tools/runtime-tools-components/dist/components/ServerErrors";
import {
  KogitoEmptyState,
  KogitoEmptyStateType,
} from "@kie-tools/runtime-tools-components/dist/components/KogitoEmptyState";
import _ from "lodash";
import { ProcessListApiClient } from "../api";

export interface ProcessListChildTableProps {
  parentProcessId: string;
  processInstances: ProcessInstance[];
  setProcessInstances: React.Dispatch<React.SetStateAction<ProcessInstance[]>>;
  selectedInstances: ProcessInstance[];
  setSelectedInstances: React.Dispatch<React.SetStateAction<ProcessInstance[]>>;
  apiClient: ProcessListApiClient;
  onSkipClick: (processInstance: ProcessInstance) => Promise<void>;
  onRetryClick: (processInstance: ProcessInstance) => Promise<void>;
  onAbortClick: (processInstance: ProcessInstance) => Promise<void>;
  setSelectableInstances: React.Dispatch<React.SetStateAction<number>>;
}
const ProcessListChildTable: React.FC<ProcessListChildTableProps> = ({
  parentProcessId,
  selectedInstances,
  setSelectedInstances,
  processInstances,
  setProcessInstances,
  apiClient,
  onSkipClick,
  onRetryClick,
  onAbortClick,
  setSelectableInstances,
}) => {
  const [rows, setRows] = useState<(IRow | string[])[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showNoDataEmptyState, setShowNoDataEmptyState] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const columnNames: string[] = ["__Select", "Id", "Status", "Created", "Last update", "__Actions"];
  const columns: ICell[] = columnNames.map((it) => ({
    title: it.startsWith("__") ? "" : it,
  }));

  const handleClick = useCallback(
    async (processInstance: ProcessInstance) => {
      await apiClient.processInstanceSelected(processInstance);
    },
    [apiClient]
  );

  const checkBoxSelect = useCallback(
    (processInstance: ProcessInstance) => {
      setProcessInstances((currentProcessInstances) => {
        return currentProcessInstances.map((instance) => {
          if (instance.id === parentProcessId) {
            return {
              ...instance,
              childProcessInstances: instance.childProcessInstances?.map((childInstance) => {
                if (childInstance.id === processInstance.id) {
                  if (childInstance.isSelected) {
                    setSelectedInstances((currentSelectedInstances) => {
                      return currentSelectedInstances.filter(
                        (selectedInstance) => selectedInstance.id !== childInstance.id
                      );
                    });
                    return {
                      ...childInstance,
                      isSelected: false,
                    };
                  } else {
                    setSelectedInstances((currentSelectedInstances) => {
                      return [...currentSelectedInstances, childInstance];
                    });
                    return {
                      ...childInstance,
                      isSelected: true,
                    };
                  }
                }
                return childInstance;
              }),
            };
          }
          return instance;
        });
      });
    },
    [parentProcessId, setProcessInstances, setSelectedInstances]
  );

  const createRows = useCallback(
    (childProcessInstances: ProcessInstance[]) => {
      if (!_.isEmpty(childProcessInstances)) {
        const tempRows: IRow[] = [];
        childProcessInstances.forEach((child: ProcessInstance) => {
          const cells: IRowCell[] = [
            {
              title: (
                <>
                  {child.addons?.includes("process-management") && child.serviceUrl !== null ? (
                    <Checkbox
                      isChecked={child.isSelected}
                      onChange={() => {
                        checkBoxSelect(child);
                      }}
                      aria-label="process-list-checkbox"
                      id={`checkbox-${child.id}`}
                      name={`checkbox-${child.id}`}
                      data-testid={`checkbox-${child.id}`}
                    />
                  ) : (
                    <DisablePopup
                      processInstanceData={child}
                      component={
                        <Checkbox
                          aria-label="process-list-checkbox-disabled"
                          id={`checkbox-${child.id}`}
                          isDisabled={true}
                        />
                      }
                    />
                  )}
                </>
              ),
            },
            {
              title: (
                <>
                  <a className="process-list__link" onClick={() => handleClick(child)}>
                    <strong>
                      <ItemDescriptor itemDescription={getProcessInstanceDescription(child)} />
                    </strong>
                  </a>
                  <EndpointLink serviceUrl={child.serviceUrl} isLinkShown={false} />
                </>
              ),
            },
            {
              title:
                child.state === ProcessInstanceState.Error ? (
                  <ErrorPopover processInstanceData={child} onSkipClick={onSkipClick} onRetryClick={onRetryClick} />
                ) : (
                  ProcessInstanceIconCreator(child.state)
                ),
            },
            {
              title: child.start ? <Moment fromNow>{new Date(`${child.start}`)}</Moment> : "",
            },
            {
              title: child.lastUpdate ? (
                <span>
                  {" "}
                  <HistoryIcon className="pf-u-mr-sm" /> Updated{" "}
                  <Moment fromNow>{new Date(`${child.lastUpdate}`)}</Moment>
                </span>
              ) : (
                ""
              ),
            },
            {
              title: (
                <ProcessListActionsKebab
                  processInstance={child}
                  onSkipClick={onSkipClick}
                  onRetryClick={onRetryClick}
                  onAbortClick={onAbortClick}
                  key={child.id}
                />
              ),
            },
          ];
          tempRows.push({
            // props are not passed to the actual <tr> element (to set OUIA attributes).
            // Seems that only solution is to use TableComposable instead.
            cells: cells,
          });
        });
        setRows(tempRows);
        setShowNoDataEmptyState(false);
      } else {
        setShowNoDataEmptyState(true);
      }
    },
    [checkBoxSelect, handleClick, onAbortClick, onRetryClick, onSkipClick]
  );

  const getChildProcessInstances = useCallback(async () => {
    try {
      setIsLoading(true);
      const response: ProcessInstance[] = await apiClient.getChildProcesses(parentProcessId);

      setProcessInstances((currentProcessInstances) => {
        return currentProcessInstances.map((processInstance) => {
          if (processInstance.id === parentProcessId) {
            response.forEach((child: ProcessInstance) => {
              child.isSelected = false;
              if (child.serviceUrl && child.addons?.includes("process-management")) {
                setSelectableInstances((prev) => prev + 1);
              }
            });
            return {
              ...processInstance,
              childProcessInstances: response,
            };
          }
          return processInstance;
        });
      });
      createRows(response);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [apiClient, createRows, parentProcessId, setProcessInstances, setSelectableInstances]);

  useEffect(() => {
    if (processInstances.length > 0) {
      const processInstance = processInstances.find((instance: ProcessInstance) => instance.id === parentProcessId);
      processInstance && createRows(processInstance.childProcessInstances!);
    }
  }, [createRows, parentProcessId, processInstances]);

  useEffect(() => {
    getChildProcessInstances();
  }, [getChildProcessInstances]);

  if (isLoading) {
    return <KogitoSpinner spinnerText={"Loading child instances..."} />;
  }

  if (error) {
    return <ServerErrors error={error} variant="large" />;
  }

  if (!isLoading && showNoDataEmptyState) {
    return (
      <KogitoEmptyState
        type={KogitoEmptyStateType.Info}
        title={`No child process instances`}
        body={`This process has no related sub processes`}
      />
    );
  }

  return (
    <Table
      aria-label="Process List Child Table"
      cells={columns}
      rows={rows}
      variant={"compact"}
      className="process-list__compact-table"
    >
      <TableHeader />
      <TableBody />
    </Table>
  );
};

export default ProcessListChildTable;
