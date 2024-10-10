/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { MessageBusClientApi } from "@kie-tools-core/envelope-bus/dist/api";
import * as React from "react";
import { useCallback, useImperativeHandle, useState, useMemo } from "react";
import {
  ProcessInstanceFilter,
  ProcessInstanceState,
  ProcessListApiClient,
  ProcessListChannelApi,
  ProcessListInitArgs,
  ProcessListSortBy,
  ProcessListState,
} from "../api";
import { OperationType, OrderBy } from "@kie-tools/runtime-tools-shared-gateway-api/dist/types";
import { ProcessList } from "../components/ProcessList";
import { ProcessInstance } from "@kie-tools/runtime-tools-process-gateway-api/dist/types";

export interface ProcessListEnvelopeViewApi {
  setInitialState: (state: ProcessListState) => void;
}

interface Props {
  channelApi: MessageBusClientApi<ProcessListChannelApi>;
}

/**
 * The actual implementation of the Process List View.
 * In this case, it's a React component. See ProcessListEnvelope.tsx.
 *
 * Provides an imperative handle to give control of this component to its containing components.
 */
export const ProcessListEnvelopeView = React.forwardRef<ProcessListEnvelopeViewApi, Props>((props, forwardedRef) => {
  const [filter, setFilter] = useState<ProcessInstanceFilter>({
    status: [ProcessInstanceState.Active],
    businessKey: [],
  });
  const [sortBy, setSortBy] = useState<ProcessListSortBy>({
    lastUpdate: OrderBy.DESC,
  });

  const setInitialState = useCallback((initArgs: ProcessListInitArgs) => {
    setFilter(initArgs.filters);
    setSortBy(initArgs.sortBy);
  }, []);

  useImperativeHandle(
    forwardedRef,
    () => ({
      setInitialState,
    }),
    [setInitialState]
  );

  const apiClient: ProcessListApiClient = useMemo(
    () => ({
      getProcesses: (args: {
        offset: number;
        limit: number;
        filter: ProcessInstanceFilter;
        sortBy: ProcessListSortBy;
      }) => {
        return props.channelApi.requests.processList__getProcesses(args);
      },
      getChildProcesses: (rootProcessInstanceId: string) => {
        return props.channelApi.requests.processList__getChildProcesses(rootProcessInstanceId);
      },
      skipProcess: (processInstance: ProcessInstance) => {
        return props.channelApi.requests.processList__skipProcess(processInstance);
      },
      retryProcess: (processInstance: ProcessInstance) => {
        return props.channelApi.requests.processList__retryProcess(processInstance);
      },
      abortProcess: (processInstance: ProcessInstance) => {
        return props.channelApi.requests.processList__abortProcess(processInstance);
      },
      bulkProcessInstanceAction: (processInstances: ProcessInstance[], operationType: OperationType) => {
        return props.channelApi.requests.processList__bulkProcessInstanceAction(processInstances, operationType);
      },
      processInstanceSelected: (processInstance: ProcessInstance) => {
        return props.channelApi.requests.processList__processInstanceSelected(processInstance);
      },
    }),
    [props.channelApi.requests]
  );

  return (
    <>
      <ProcessList
        filter={filter}
        updateFilter={setFilter}
        sortBy={sortBy}
        updateSortBy={setSortBy}
        apiClient={apiClient}
      />
    </>
  );
});
