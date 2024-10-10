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
import { useCallback, useImperativeHandle, useState } from "react";
import { ProcessInstanceFilter, ProcessListChannelApi, ProcessListSortBy, ProcessListState } from "../api";
import "./styles.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
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
  const [filters, setFilters] = useState<ProcessInstanceFilter>();
  const [sortBy, setSortBy] = useState<ProcessListSortBy>();

  const setInitialState = useCallback((state: ProcessListState) => {
    setFilters(state.filters);
    setSortBy(state.sortBy);
  }, []);

  useImperativeHandle(
    forwardedRef,
    () => ({
      setInitialState,
    }),
    [setInitialState]
  );

  props.channelApi.requests.return(<></>);
});
