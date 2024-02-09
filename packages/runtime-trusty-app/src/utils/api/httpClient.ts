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
import axios, { AxiosRequestConfig, CancelTokenSource } from "axios";

declare global {
  interface Window {
    TRUSTY_ENDPOINT: string;
  }
}

export const httpClient = axios.create({
  timeout: 5000,
  headers: {},
});

export const EXECUTIONS_PATH = "/executions";

export const callOnceHandler = () => {
  let caller: CancelTokenSource;

  return (config: AxiosRequestConfig) => {
    if (caller) {
      caller.cancel("Request superseded");
    }
    caller = axios.CancelToken.source();

    config.cancelToken = caller.token;
    return httpClient(config);
  };
};
