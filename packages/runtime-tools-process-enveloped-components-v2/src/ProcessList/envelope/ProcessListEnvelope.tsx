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

import { EnvelopeBus } from "@kie-tools-core/envelope-bus/dist/api";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ProcessListEnvelopeContext } from "./ProcessListEnvelopeContext";
import { ProcessListEnvelopeApiImpl } from "./ProcessListEnvelopeApiImpl";
import { ProcessListChannelApi, ProcessListEnvelopeApi } from "../api";
import { ProcessListEnvelopeView, ProcessListEnvelopeViewApi } from "./ProcessListEnvelopeView";
import { Envelope } from "@kie-tools-core/envelope";

/**
 * Function that starts an Envelope application.
 *
 * @param args.container: The HTML element in which the Todo List View will render
 * @param args.bus: The implementation of a `bus` that knows how to send messages to the Channel.
 *
 */
export function init(args: { container: HTMLElement; bus: EnvelopeBus }) {
  /**
   * Creates a new generic Envelope, typed with the right interfaces.
   */
  const envelope = new Envelope<
    ProcessListEnvelopeApi,
    ProcessListChannelApi,
    ProcessListEnvelopeViewApi,
    ProcessListEnvelopeContext
  >(args.bus);

  /**
   * Function that knows how to render a Todo List View.
   * In this case, it's a React application, but any other framework can be used.
   *
   * Returns a Promise<() => ProcessListEnvelopeViewApi> that can be used in ProcessListEnvelopeApiImpl.
   */
  const envelopeViewDelegate = async () => {
    const ref = React.createRef<ProcessListEnvelopeViewApi>();
    return new Promise<() => ProcessListEnvelopeViewApi>((res) => {
      ReactDOM.render(<ProcessListEnvelopeView ref={ref} channelApi={envelope.channelApi} />, args.container, () =>
        res(() => ref.current!)
      );
    });
  };

  // Starts the Envelope application with the provided ProcessListEnvelopeApi implementation.
  const context: ProcessListEnvelopeContext = {};
  return envelope.start(envelopeViewDelegate, context, {
    create: (apiFactoryArgs) => new ProcessListEnvelopeApiImpl(apiFactoryArgs),
  });
}
