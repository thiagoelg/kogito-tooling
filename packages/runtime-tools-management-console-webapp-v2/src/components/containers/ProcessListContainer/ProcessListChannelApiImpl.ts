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

import {
  BulkProcessInstanceActionResponse,
  ProcessInstance,
  ProcessInstanceFilter,
  ProcessListChannelApi,
  ProcessListSortBy,
} from "@kie-tools/runtime-tools-process-enveloped-components-v2/dist/processList";
import { OperationType } from "@kie-tools/runtime-tools-shared-gateway-api/dist/types";
import {
  getProcessInstances,
  getChildProcessInstances,
  handleProcessSkip,
  handleProcessAbort,
  handleProcessRetry,
  handleProcessMultipleAction,
} from "@kie-tools/runtime-tools-process-gateway-api/dist/gatewayApi";
import { ApolloClient } from "apollo-client";

export class ProcessListChannelApiImpl implements ProcessListChannelApi {
  constructor(
    private readonly client: ApolloClient<any>,
    private readonly options?: { transformUrls?: (url?: string) => string }
  ) {}
  processList__getProcesses(args: {
    offset: number;
    limit: number;
    filter: ProcessInstanceFilter;
    sortBy: ProcessListSortBy;
  }): Promise<ProcessInstance[]> {
    return getProcessInstances(args.offset, args.limit, args.filter, args.sortBy, this.client).then(
      (processInstances) => {
        return processInstances.map((process) => ({
          ...process,
          endpoint: this.options?.transformUrls?.(process.endpoint) ?? process.endpoint,
          serviceUrl: this.options?.transformUrls?.(process.serviceUrl) ?? process.serviceUrl,
        }));
      }
    );
  }
  processList__getChildProcesses(rootProcessInstanceId: string): Promise<ProcessInstance[]> {
    return getChildProcessInstances(rootProcessInstanceId, this.client);
  }
  processList__skipProcess(processInstance: ProcessInstance): Promise<void> {
    return handleProcessSkip(processInstance, this.client);
  }
  processList__retryProcess(processInstance: ProcessInstance): Promise<void> {
    return handleProcessRetry(processInstance, this.client);
  }
  processList__abortProcess(processInstance: ProcessInstance): Promise<void> {
    return handleProcessAbort(processInstance, this.client);
  }
  processList__bulkProcessInstanceAction(
    processInstances: ProcessInstance[],
    operationType: OperationType
  ): Promise<BulkProcessInstanceActionResponse> {
    return handleProcessMultipleAction(processInstances, operationType, this.client);
  }
  processList__processInstanceSelected(processInstance: ProcessInstance): Promise<void> {
    console.log(`Selected process with id: ${processInstance.id} and name: ${processInstance.processName}`);
    return;
  }
}
