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
import { useCallback } from "react";
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from "react-router-dom";
import managementConsoleLogo from "../static/managementConsoleLogo.svg";
import PageLayout from "../ui/PageLayout/PageLayout";
import { AuthSessionsContextProvider } from "../authSessions/AuthSessionsContext";
import { ManagementConsoleNav } from "./ManagementConsoleNav";
import { ManagementConsoleContextProvider } from "./ManagementConsoleContext";
import { useHistory, useLocation } from "react-router";
import { ManagementConsoleRoutes } from "./ManagementConsoleRoutes";

export const App: React.FC = () => {
  return (
    <Router>
      <ManagementConsole />
    </Router>
  );
};

export const ManagementConsole: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <AuthSessionsContextProvider>
      <ManagementConsoleContextProvider>
        <PageLayout
          BrandSrc={managementConsoleLogo}
          pageNavOpen={true}
          BrandAltText={"Management Console Logo"}
          BrandClick={() => history.push("/")}
          withHeader={true}
          PageNav={<ManagementConsoleNav pathname={location.pathname} />}
          ouiaId="management-console"
        >
          <ManagementConsoleRoutes />
        </PageLayout>
      </ManagementConsoleContextProvider>
    </AuthSessionsContextProvider>
  );
};
