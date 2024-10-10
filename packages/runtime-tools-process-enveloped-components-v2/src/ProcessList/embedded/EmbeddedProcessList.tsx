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

import * as React from "react";
import { useCallback } from "react";
import { EnvelopeServer } from "@kie-tools-core/envelope-bus/dist/channel";
import { ContainerType } from "@kie-tools-core/envelope/dist/api";
import { EmbeddedEnvelopeProps, RefForwardingEmbeddedEnvelope } from "@kie-tools-core/envelope/dist/embedded";
import { ProcessInstanceState, ProcessListApi, ProcessListChannelApi, ProcessListEnvelopeApi } from "../api";
import { init } from "../envelope";

export type EmbeddedProcessListRef = ProcessListApi & {
  envelopeServer: EnvelopeServer<ProcessListChannelApi, ProcessListEnvelopeApi>;
};

export type Props = {
  targetOrigin: string;
  channelApiImpl: ProcessListChannelApi;
};

/**
 * Convenience component to embed a Todo List View.
 *
 * This is aimed to be used mostly by Web applications. It exposes a `ref` to give control to the parent component.
 */
export const EmbeddedProcessList = React.forwardRef<EmbeddedProcessListRef, Props>((props, forwardedRef) => {
  const { channelApiImpl, targetOrigin } = props;
  /*
   * This is the pollInit parameter. Used to connect the Envelope with this instance of EnvelopeServer.
   */
  const pollInit = useCallback(
    async (
      envelopeServer: EnvelopeServer<ProcessListChannelApi, ProcessListEnvelopeApi>,
      container: () => HTMLDivElement
    ) => {
      init({
        config: {
          containerType: ContainerType.DIV,
          envelopeId: envelopeServer.id,
        },
        container: container(),
        bus: {
          postMessage(message, targetOrigin, transfer) {
            window.postMessage(message, targetOrigin!, transfer);
          },
        },
      });
      return envelopeServer.envelopeApi.requests.processList__init(
        {
          origin: envelopeServer.origin,
          envelopeServerId: envelopeServer.id,
        },
        {
          filters: {
            status: [ProcessInstanceState.Active],
          },
          sortBy: {},
        }
      );
    },
    []
  );

  const refDelegate = useCallback(
    (envelopeServer: EnvelopeServer<ProcessListChannelApi, ProcessListEnvelopeApi>): ProcessListApi => ({}),
    []
  );

  return (
    <EmbeddedProcessListEnvelope
      ref={forwardedRef}
      apiImpl={channelApiImpl}
      origin={targetOrigin}
      refDelegate={refDelegate}
      pollInit={pollInit}
      config={{ containerType: ContainerType.DIV }}
    />
  );
});

const EmbeddedProcessListEnvelope = React.forwardRef<
  ProcessListApi,
  EmbeddedEnvelopeProps<ProcessListChannelApi, ProcessListEnvelopeApi, ProcessListApi>
>(RefForwardingEmbeddedEnvelope);
