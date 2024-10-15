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
import React, { useCallback, useEffect, useState, useMemo } from "react";
import ProcessListTable from "./ProcessListTable";
import ProcessListToolbar from "./ProcessListToolbar";
import _ from "lodash";
import { alterOrderByObj } from "./ProcessListUtils";

import "./styles.css";
import {
  ProcessInstance,
  ProcessInstanceFilter,
  ProcessInstanceState,
  ProcessListSortBy,
} from "@kie-tools/runtime-tools-process-gateway-api/dist/types";
import { ServerErrors } from "@kie-tools/runtime-tools-components/dist/components/ServerErrors";
import { LoadMore } from "@kie-tools/runtime-tools-components/dist/components/LoadMore";
import {
  KogitoEmptyState,
  KogitoEmptyStateType,
} from "@kie-tools/runtime-tools-components/dist/components/KogitoEmptyState";
import { ProcessListApiClient } from "../api";

export interface ProcessListProps {
  filter: ProcessInstanceFilter;
  updateFilter: React.Dispatch<React.SetStateAction<ProcessInstanceFilter>>;
  sortBy: ProcessListSortBy;
  updateSortBy: React.Dispatch<React.SetStateAction<ProcessListSortBy>>;
  apiClient: ProcessListApiClient;
}

const DEFAULT_PAGE_SIZE = 10;

export const ProcessList: React.FC<ProcessListProps> = ({ apiClient, filter, updateFilter, sortBy, updateSortBy }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(DEFAULT_PAGE_SIZE);
  const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);
  const [processInstances, setProcessInstances] = useState<ProcessInstance[]>([]);
  const [error, setError] = useState<string>();
  const [processStates, setProcessStates] = useState<ProcessInstanceState[]>([]);
  const [expanded, setExpanded] = React.useState<{ [key: number]: boolean }>({});
  const [selectedInstances, setSelectedInstances] = useState<ProcessInstance[]>([]);
  const [selectableInstances, setSelectableInstances] = useState<number>(0);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);

  const countExpandableRows = useCallback(
    (instances: ProcessInstance[]) => {
      instances.forEach((processInstance, index) => {
        expanded[index] = false;
        processInstance.isSelected = false;
        processInstance.isOpen = false;
        processInstance.childProcessInstances = [];
        if (processInstance.serviceUrl && processInstance.addons?.includes("process-management")) {
          setSelectableInstances((prev) => prev + 1);
        }
      });
    },
    [expanded]
  );

  const refresh = useCallback(
    async (args: {
      offset: number;
      limit: number;
      filter: ProcessInstanceFilter;
      sortBy: ProcessListSortBy;
      resetProcesses?: boolean;
      resetPagination?: boolean;
      loadMore: boolean;
    }) => {
      setIsLoadingMore(args.loadMore);
      setSelectableInstances(0);
      setSelectedInstances([]);
      setIsLoading(true);
      try {
        const response: ProcessInstance[] = await apiClient.getProcesses({
          offset: args.offset,
          limit: args.limit,
          filter: args.filter,
          sortBy: args.sortBy,
        });
        setLimit(response.length);
        setProcessInstances((currentProcessInstances) => {
          let updatedProcessInstances: ProcessInstance[] = [];
          if (args.resetProcesses) {
            countExpandableRows(response);
            updatedProcessInstances = response;
          } else {
            const newData = currentProcessInstances.concat(response);
            countExpandableRows(newData);
            updatedProcessInstances = newData;
          }
          return updatedProcessInstances;
        });
        if (args.resetPagination) {
          setOffset(args.offset);
        }
      } catch (err) {
        setError(err.errorMessage);
      } finally {
        setIsLoading(false);
        setIsLoadingMore(false);
      }
    },
    [apiClient, countExpandableRows]
  );

  useEffect(() => {
    if (selectedInstances.length === selectableInstances && selectableInstances !== 0) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  }, [processInstances, selectableInstances, selectedInstances.length]);

  const applyFilter = useCallback(
    async (updatedFilter: ProcessInstanceFilter) => {
      setProcessInstances([]);
      updateFilter(updatedFilter);
      await refresh({
        offset: 0,
        limit: DEFAULT_PAGE_SIZE,
        filter: updatedFilter,
        sortBy,
        resetProcesses: true,
        resetPagination: true,
        loadMore: false,
      });
    },
    [refresh, sortBy, updateFilter]
  );

  const applySorting = useCallback(
    async (event, index: number, direction: "asc" | "desc") => {
      setProcessInstances([]);
      let sortingColumn: string = event.target.innerText;
      sortingColumn = _.camelCase(sortingColumn);
      let sortByObj = _.set({}, sortingColumn, direction.toUpperCase());
      sortByObj = alterOrderByObj(sortByObj);
      updateSortBy(sortByObj);
      await refresh({
        offset: 0,
        limit: DEFAULT_PAGE_SIZE,
        filter,
        sortBy: sortByObj,
        resetProcesses: true,
        resetPagination: true,
        loadMore: false,
      });
    },
    [filter, refresh, updateSortBy]
  );

  const doRefresh = useCallback(async () => {
    setProcessInstances([]);
    await refresh({
      offset: 0,
      limit: DEFAULT_PAGE_SIZE,
      filter,
      sortBy,
      resetProcesses: true,
      resetPagination: true,
      loadMore: false,
    });
  }, [filter, refresh, sortBy]);

  const doResetFilters = useCallback(async () => {
    const resetFilter = {
      status: [ProcessInstanceState.Active],
      businessKey: [],
    };
    setProcessStates([]);
    await applyFilter(resetFilter);
  }, [applyFilter]);

  const mustShowLoadMore = useMemo(
    () => (!isLoading || isLoadingMore) && processInstances && limit === pageSize && filter.status.length > 0,
    [filter.status.length, isLoading, isLoadingMore, limit, pageSize, processInstances]
  );

  if (error) {
    return <ServerErrors error={error} variant={"large"} />;
  }

  return (
    <div>
      <ProcessListToolbar
        applyFilter={applyFilter}
        refresh={doRefresh}
        filter={filter}
        updateFilter={updateFilter}
        processStates={processStates}
        setProcessStates={setProcessStates}
        selectedInstances={selectedInstances}
        setSelectedInstances={setSelectedInstances}
        processInstances={processInstances}
        setProcessInstances={setProcessInstances}
        isAllChecked={isAllChecked}
        setIsAllChecked={setIsAllChecked}
        apiClient={apiClient}
      />
      {filter.status.length > 0 ? (
        <>
          <ProcessListTable
            processInstances={processInstances}
            isLoading={isLoading}
            expanded={expanded}
            setExpanded={setExpanded}
            apiClient={apiClient}
            onSort={applySorting}
            sortBy={sortBy}
            setProcessInstances={setProcessInstances}
            selectedInstances={selectedInstances}
            setSelectedInstances={setSelectedInstances}
            selectableInstances={selectableInstances}
            setSelectableInstances={setSelectableInstances}
            setIsAllChecked={setIsAllChecked}
          />
          {mustShowLoadMore && (
            <LoadMore
              offset={offset}
              setOffset={setOffset}
              getMoreItems={(_offset, _limit) => {
                setPageSize(_limit);
                refresh({
                  offset: _offset,
                  limit: _limit,
                  filter,
                  sortBy,
                  resetProcesses: false,
                  resetPagination: true,
                  loadMore: true,
                });
              }}
              pageSize={pageSize}
              isLoadingMore={isLoadingMore}
            />
          )}
        </>
      ) : (
        <div className="process-list__emptyState-card">
          <KogitoEmptyState
            type={KogitoEmptyStateType.Reset}
            title="No filters applied."
            body="Try applying at least one filter to see results"
            onClick={doResetFilters}
          />
        </div>
      )}
    </div>
  );
};
