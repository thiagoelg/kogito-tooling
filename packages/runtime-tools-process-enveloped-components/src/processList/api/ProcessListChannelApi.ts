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
  OperationType,
  ProcessInstance,
  ProcessInstanceFilter,
  ProcessListSortBy,
} from "@kie-tools/runtime-tools-swf-gateway-api/dist/types";

export interface ProcessListChannelApi {
  processList__initialLoad(filter: ProcessInstanceFilter, sortBy: ProcessListSortBy): Promise<void>;
  processList__openProcess(process: ProcessInstance): Promise<void>;
  processList__applyFilter(filter: ProcessInstanceFilter): Promise<void>;
  processList__applySorting(sortBy: ProcessListSortBy): Promise<void>;
  processList__handleProcessSkip(processInstance: ProcessInstance): Promise<void>;
  processList__handleProcessRetry(processInstance: ProcessInstance): Promise<void>;
  processList__handleProcessAbort(processInstance: ProcessInstance): Promise<void>;
  processList__handleProcessMultipleAction(
    processInstances: ProcessInstance[],
    operationType: OperationType
  ): Promise<BulkProcessInstanceActionResponse>;
  processList__query(offset: number, limit: number): Promise<ProcessInstance[]>;
  processList__getChildProcessesQuery(rootProcessInstanceId: string): Promise<ProcessInstance[]>;
  processList__openTriggerCloudEvent(processInstance?: ProcessInstance): void;
}
