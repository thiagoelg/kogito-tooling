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
import * as React from "react";
import * as ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import "@patternfly/patternfly/patternfly.css";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { TaskConsole, TaskConsoleRoutes } from "./components/console";
import { KeycloakUnavailablePage } from "@kie-tools/runtime-tools-components/dist/components/KeycloakUnavailablePage";
import { ServerUnavailablePage } from "@kie-tools/runtime-tools-shared-webapp-components/dist/ServerUnavailablePage";
import { UserContext } from "@kie-tools/runtime-tools-components/dist/contexts/KogitoAppContext";
import {
  isAuthEnabled,
  updateKeycloakToken,
  getToken,
  appRenderWithAxiosInterceptorConfig,
} from "@kie-tools/runtime-tools-components/dist/utils/KeycloakClient";
import { initEnv } from "./env/Env";

declare global {
  interface Window {
    DATA_INDEX_ENDPOINT: string;
  }
}

const onLoadFailure = () => {
  ReactDOM.render(<KeycloakUnavailablePage />, document.getElementById("root"));
};

const appRender = (ctx: UserContext) => {
  const httpLink = new HttpLink({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    uri: window.DATA_INDEX_ENDPOINT,
  });

  const fallbackUI = onError(({ networkError }: any) => {
    if (networkError && networkError.stack === "TypeError: Failed to fetch") {
      // eslint-disable-next-line react/no-render-return-value
      return ReactDOM.render(
        <TaskConsole apolloClient={client} userContext={ctx}>
          <ServerUnavailablePage displayName={"Task Console"} reload={() => window.location.reload()} />
        </TaskConsole>,
        document.getElementById("root")
      );
    }
  });

  const setGQLContext = setContext((_, { headers }) => {
    if (!isAuthEnabled()) {
      return {
        headers,
      };
    }
    return new Promise((resolve, reject) => {
      updateKeycloakToken()
        .then(() => {
          const token = getToken();
          resolve({
            headers: {
              ...headers,
              authorization: token ? `Bearer ${token}` : "",
            },
          });
        })
        .catch(() => {
          reject();
        });
    });
  });

  const cache = new InMemoryCache();
  const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    link: setGQLContext.concat(fallbackUI.concat(httpLink)),
  });

  ReactDOM.render(
    <TaskConsole apolloClient={client} userContext={ctx}>
      <TaskConsoleRoutes />
    </TaskConsole>,
    document.getElementById("root")
  );
};

initEnv().then((getEnv) => {
  const RUNTIME_TOOLS_TASK_CONSOLE_DATAINDEX_HTTP_URL =
    getEnv && getEnv("RUNTIME_TOOLS_TASK_CONSOLE_DATAINDEX_HTTP_URL");
  window.DATA_INDEX_ENDPOINT = RUNTIME_TOOLS_TASK_CONSOLE_DATAINDEX_HTTP_URL;
  appRenderWithAxiosInterceptorConfig((ctx: UserContext) => appRender(ctx), onLoadFailure);
});
