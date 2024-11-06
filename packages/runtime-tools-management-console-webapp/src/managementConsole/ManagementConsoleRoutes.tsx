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
import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { LocationProps, PageNotFound } from "@kie-tools/runtime-tools-shared-webapp-components/dist/PageNotFound";
import { NoData } from "@kie-tools/runtime-tools-shared-webapp-components/dist/NoData";
import { NewAuthSessionLoginSuccess } from "../authSessions/components/NewAuthSessionLoginSuccess";
import { JobsPage } from "../jobs";
import { ProcessDetailsPage, ProcessListPage } from "../process";
import { TaskDetailsPage, TasksPage } from "../tasks";
import { RouteComponentProps, StaticContext } from "react-router";
import { useCurrentAuthSession } from "../authSessions/AuthSessionsContext";
import { ManagementConsoleEmptyState } from "./ManagementConsoleEmptyState";
import { AuthSession } from "../authSessions/AuthSessionApi";
import { useManagementConsole } from "./ManagementConsoleContext";

export const ManagementConsoleUnauthenticatedRoutes: FC<{ currentAuthSession?: AuthSession }> = (props) => {
  return (
    <>
      <Route path="/Login" render={(routeProps) => <NewAuthSessionLoginSuccess {...routeProps} />} />
      <Route
        path="*"
        render={(_props: RouteComponentProps<{}, StaticContext, LocationProps>) =>
          !props.currentAuthSession ? (
            <ManagementConsoleEmptyState />
          ) : (
            <PageNotFound {..._props} defaultPath="/" defaultButton="Page not found!" />
          )
        }
      />
    </>
  );
};

export const ManagementConsoleAuthenticatedRoutes: FC<{ currentAuthSession?: AuthSession }> = (props) => {
  return (
    <>
      <Route exact path="/" render={() => <Redirect to="/ProcessInstances" />} />
      <Route exact path="/ProcessInstances" component={ProcessListPage} />
      <Route exact path="/Jobs" component={JobsPage} />
      <Route exact path="/Process/:instanceID" component={ProcessDetailsPage} />
      <Route exact path="/Tasks" component={TasksPage} />
      <Route exact path="/TaskDetails/:taskId" render={(routeProps) => <TaskDetailsPage {...routeProps} />} />
    </>
  );
};

export const ManagementConsoleRoutes: FC = () => {
  const currentAuthSession = useCurrentAuthSession();
  const { apolloClient, userContext } = useManagementConsole();
  return (
    <Switch>
      {apolloClient && userContext && <ManagementConsoleAuthenticatedRoutes currentAuthSession={currentAuthSession} />}
      <ManagementConsoleUnauthenticatedRoutes currentAuthSession={currentAuthSession} />
    </Switch>
  );
};
