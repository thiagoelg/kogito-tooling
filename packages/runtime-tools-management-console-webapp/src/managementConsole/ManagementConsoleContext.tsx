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
import React, { FC, ReactElement, createContext, useContext, useEffect, useLayoutEffect, useState } from "react";
import { useCurrentAuthSession } from "../authSessions/AuthSessionsContext";
import { ProcessListContextProvider } from "@kie-tools/runtime-tools-process-webapp-components/dist/ProcessList";
import { ProcessDetailsContextProvider } from "@kie-tools/runtime-tools-process-webapp-components/dist/ProcessDetails";
import { JobsManagementContextProvider } from "@kie-tools/runtime-tools-process-webapp-components/dist/JobsManagement";
import { TaskInboxContextProvider } from "@kie-tools/runtime-tools-process-webapp-components/dist/TaskInbox";
import { TaskFormContextProvider } from "@kie-tools/runtime-tools-process-webapp-components/dist/TaskForms";
import ApolloClient from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import {
  KogitoAppContextProvider,
  UserContext,
} from "@kie-tools/runtime-tools-components/dist/contexts/KogitoAppContext";

function createApolloClient(args: { runtimesUrl: string; token: string }) {
  const httpLink = new HttpLink({
    uri: args.runtimesUrl,
  });

  const setGQLContext = setContext((_, { headers }) => {
    return Promise.resolve({
      headers: {
        ...headers,
        authorization: args.token ? `Bearer ${args.token}` : "",
      },
    });
  });

  const cache = new InMemoryCache();
  const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    link: setGQLContext.concat(httpLink),
  });

  return client;
}

export type ManagementConsoleContextType = {
  apolloClient?: ApolloClient<NormalizedCacheObject>;
  userContext?: UserContext;
};

export const ManagementConsoleContext = createContext({} as ManagementConsoleContextType);

export function useManagementConsole() {
  return useContext(ManagementConsoleContext);
}

export interface ManagementConsoleContextProviderProps {
  children: ReactElement;
}

export const ManagementConsoleContextProvider: FC<ManagementConsoleContextProviderProps> = ({ children }) => {
  const [apolloClient, setApolloClient] = useState<ApolloClient<NormalizedCacheObject>>();
  const [userContext, setUserContext] = useState<UserContext>();
  const currentAuthSession = useCurrentAuthSession();

  useLayoutEffect(() => {
    console.log(currentAuthSession);
    if (!currentAuthSession) {
      setApolloClient(undefined);
      setUserContext(undefined);
    } else {
      setApolloClient(
        createApolloClient({
          runtimesUrl: `${currentAuthSession.runtimesUrl}/graphql`,
          token: currentAuthSession.tokens.access_token,
        })
      );
      setUserContext({
        getCurrentUser: () => {
          return {
            id: currentAuthSession.name,
            groups: [],
          };
        },
      });
    }
  }, [currentAuthSession]);

  console.log({ apolloClient, userContext });

  return (
    <ManagementConsoleContext.Provider value={{ apolloClient, userContext }}>
      {!apolloClient || !userContext ? (
        <>{children}</>
      ) : (
        <ApolloProvider client={apolloClient}>
          <KogitoAppContextProvider userContext={userContext}>
            <ProcessListContextProvider apolloClient={apolloClient}>
              <ProcessDetailsContextProvider apolloClient={apolloClient}>
                <JobsManagementContextProvider apolloClient={apolloClient}>
                  <TaskInboxContextProvider apolloClient={apolloClient}>
                    <TaskFormContextProvider>{children}</TaskFormContextProvider>
                  </TaskInboxContextProvider>
                </JobsManagementContextProvider>
              </ProcessDetailsContextProvider>
            </ProcessListContextProvider>
          </KogitoAppContextProvider>
        </ApolloProvider>
      )}
    </ManagementConsoleContext.Provider>
  );
};
