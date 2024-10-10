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

import { ProcessListEnvelopeContext } from "./ProcessListEnvelopeContext";
import { Association, ProcessListChannelApi, ProcessListEnvelopeApi, ProcessListInitArgs } from "../api";
import { ProcessListEnvelopeViewApi } from "./ProcessListEnvelopeView";
import { EnvelopeApiFactoryArgs } from "@kie-tools-core/envelope";

/**
 * Implements the ProcessListEnvelopeApi.
 *
 * These are the methods that the Channel can call.
 */
export class ProcessListEnvelopeApiImpl implements ProcessListEnvelopeApi {
  private view: () => ProcessListEnvelopeViewApi;
  constructor(
    private readonly args: EnvelopeApiFactoryArgs<
      ProcessListEnvelopeApi,
      ProcessListChannelApi,
      ProcessListEnvelopeViewApi,
      ProcessListEnvelopeContext
    >
  ) {}

  /**
   * Inits the Process List View.
   *
   * Calling envelopeClient.associate is mandatory if this Envelope will send messages
   * back to the Editor (which is almost always the case).
   *
   * @param association
   * @param initArgs Initial arguments of this Envelope. The `user` object is only for example purposes.
   */
  public async processList__init(association: Association, initArgs: ProcessListInitArgs) {
    this.args.envelopeClient.associate(association.origin, association.envelopeServerId);
    this.view = await this.args.viewDelegate();
    this.view().setInitialState(initArgs.initialState);
  }
}
