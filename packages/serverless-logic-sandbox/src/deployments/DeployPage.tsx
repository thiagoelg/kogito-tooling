/*
 * Copyright 2022 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";
import { useState, useEffect } from "react";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
import { Page, PageSection } from "@patternfly/react-core/dist/js/components/Page";
import { OnlineEditorPage } from "../pageTemplate/OnlineEditorPage";
import { Flex, FlexItem } from "@patternfly/react-core/dist/js/layouts/Flex";
import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button";
import { Title } from "@patternfly/react-core/dist/js/components/Title";
import { WorkspaceStatusIndicator } from "../workspace/components/WorkspaceStatusIndicator";
import { useRoutes } from "../navigation/Hooks";
import { useSettings, useSettingsDispatch } from "../settings/SettingsContext";
import { useHistory } from "react-router";
import { AngleLeftIcon } from "@patternfly/react-icons/dist/js/icons";
import { WorkspaceLabel } from "../workspace/components/WorkspaceLabel";
import { useWorkspacePromise } from "../workspace/hooks/WorkspaceHooks";
import { ActiveWorkspace } from "../workspace/model/ActiveWorkspace";

export interface DeployPageProps {
  workspaceId?: string;
}

export function DeployPage(props: DeployPageProps) {
  const routes = useRoutes();
  const settings = useSettings();
  const settingsDispatch = useSettingsDispatch();
  const history = useHistory();
  const [workspace, setWorkspace] = useState<ActiveWorkspace>();

  const workspacePromise = useWorkspacePromise(props.workspaceId);

  useEffect(() => {
    if (workspacePromise.data) {
      setWorkspace(workspacePromise.data);
    }
  }, [workspacePromise.data]);

  return (
    <OnlineEditorPage>
      {workspace && (
        <Page>
          <PageSection type={"nav"} variant={"light"} padding={{ default: "noPadding" }}>
            <Flex justifyContent={{ default: "justifyContentSpaceBetween" }}>
              <FlexItem>
                <Button
                  className={"kie-tools--masthead-hoverable"}
                  variant={ButtonVariant.plain}
                  onClick={() => history.goBack()}
                >
                  <AngleLeftIcon />
                </Button>
                &nbsp;&nbsp;
                <WorkspaceLabel descriptor={workspace.descriptor} />
                &nbsp;&nbsp;
                <div
                  data-testid={"toolbar-title-workspace"}
                  className={"kogito--editor__toolbar-name-container readonly"}
                >
                  <Title
                    aria-label={"EmbeddedEditorFile name"}
                    headingLevel={"h3"}
                    size={"md"}
                    style={{ fontStyle: "italic" }}
                  >
                    {workspace.descriptor.name}
                  </Title>
                </div>
                <WorkspaceStatusIndicator workspace={workspace} />
              </FlexItem>
            </Flex>
          </PageSection>
          <Divider />
          <PageSection hasOverflowScroll={true} padding={{ default: "noPadding" }}></PageSection>
        </Page>
      )}
    </OnlineEditorPage>
  );
}
