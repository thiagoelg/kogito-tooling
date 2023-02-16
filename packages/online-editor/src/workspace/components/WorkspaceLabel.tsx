/*
 * Copyright 2021 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useCallback, useMemo } from "react";
import { Label } from "@patternfly/react-core/dist/js/components/Label";
import { CodeBranchIcon } from "@patternfly/react-icons/dist/js/icons/code-branch-icon";
import { GithubIcon } from "@patternfly/react-icons/dist/js/icons/github-icon";
import { GitlabIcon } from "@patternfly/react-icons/dist/js/icons/gitlab-icon";
import { PendingIcon } from "@patternfly/react-icons/dist/js/icons/pending-icon";
import { WorkspaceKind } from "@kie-tools-core/workspaces-git-fs/dist/worker/api/WorkspaceOrigin";
import { WorkspaceDescriptor } from "@kie-tools-core/workspaces-git-fs/dist/worker/api/WorkspaceDescriptor";
import { CodeIcon } from "@patternfly/react-icons/dist/js/icons/code-icon";
import { Flex, FlexItem } from "@patternfly/react-core/dist/js/layouts/Flex";
import BitbucketIcon from "@patternfly/react-icons/dist/js/icons/bitbucket-icon";
import { UrlType, useImportableUrl } from "../../importFromUrl/ImportableUrlHooks";
import { switchExpression } from "../../switchExpression/switchExpression";
import { Button } from "@patternfly/react-core/dist/js/components/Button";
import { ButtonVariant } from "@patternfly/react-core";
import { CopyIcon } from "@patternfly/react-icons/dist/js/icons/copy-icon";
import { Popover, PopoverProps } from "@patternfly/react-core/dist/js/components/Popover";
import { useGlobalAlert } from "../../alerts";
import { Alert } from "@patternfly/react-core/dist/js/components/Alert";
import { useOnlineI18n } from "../../i18n";
import { Tooltip, TooltipProps } from "@patternfly/react-core/dist/js/components/Tooltip";

function shorten(s: string, max: number) {
  return s.length > max ? s.substring(0, max / 2 - 1) + "..." + s.substring(s.length - max / 2 + 2, s.length) : s;
}

export function WorkspaceLabel(props: { descriptor?: WorkspaceDescriptor; showLinks?: boolean } = { showLinks: true }) {
  const { i18n } = useOnlineI18n();
  const workspaceImportableUrl = useImportableUrl(props.descriptor?.origin.url?.toString());

  const gitLabel = useMemo(() => {
    if (props.descriptor?.origin.kind !== WorkspaceKind.GIT) {
      return <></>;
    }

    if (workspaceImportableUrl.type === UrlType.GITHUB_DOT_COM) {
      return (
        <Label>
          <GithubIcon />
          &nbsp;&nbsp;Repository
        </Label>
      );
    } else if (props.descriptor?.origin.url.toString().includes("gitlab")) {
      return (
        <Label>
          <GitlabIcon />
          &nbsp;&nbsp;Repository
        </Label>
      );
    } else if (props.descriptor?.origin.url.toString().includes("bitbucket")) {
      return (
        <Label>
          <BitbucketIcon />
          &nbsp;&nbsp;Repository
        </Label>
      );
    } else {
      return (
        <Label>
          <CodeIcon />
          &nbsp;&nbsp;Git repository
        </Label>
      );
    }
  }, [props.descriptor, workspaceImportableUrl]);

  const copiedToClipboardAlert = useGlobalAlert(
    useCallback(
      () => <Alert className={"kogito--alert"} variant="info" title={i18n.editorToolbar.copiedToClipboard} />,
      [i18n]
    ),
    { durationInSeconds: 2 }
  );

  const labelDescription = useMemo(() => {
    return switchExpression(props.descriptor?.origin.kind, {
      GIT: `'${props.descriptor?.name}' is linked to a Git Repository.`,
      GITHUB_GIST: `'${props.descriptor?.name}' is linked to a GitHub Gist.`,
      BITBUCKET_SNIPPET: `'${props.descriptor?.name}' is linked to a Bitbucket Snippet.`,
      LOCAL: `'${props.descriptor?.name}' is saved directly in the browser. Incognito windows don't have access to it.`,
    });
  }, [props.descriptor?.name, props.descriptor?.origin.kind]);

  const copyUrlButton = useMemo(() => {
    if (!props.descriptor || !props.descriptor.origin.url) {
      return;
    }
    return (
      <>
        <Flex flexWrap={{ default: "nowrap" }}>
          <FlexItem>
            <a href={props.descriptor.origin.url} target={"_blank"} rel={"noopener"}>
              {shorten(props.descriptor.origin.url, 40)}
            </a>
          </FlexItem>
          <FlexItem>
            <Button
              variant={ButtonVariant.plain}
              onClick={async () => {
                await navigator.clipboard.writeText(props.descriptor!.origin.url!);
                copiedToClipboardAlert.show();
              }}
              style={{ padding: "0" }}
            >
              <CopyIcon />
            </Button>
          </FlexItem>
        </Flex>
      </>
    );
  }, [props.descriptor, copiedToClipboardAlert]);

  const DescriptionComponent = useMemo(() => {
    if (props.showLinks) {
      return (popoverProps: { children: PopoverProps["children"] }) => (
        <Popover bodyContent={labelDescription} footerContent={copyUrlButton} position={"right"}>
          <Button variant={ButtonVariant.plain} style={{ padding: 0 }}>
            {popoverProps.children}
          </Button>
        </Popover>
      );
    }
    return (tooltipProps: { children: TooltipProps["children"] }) => (
      <Tooltip position="right" content={labelDescription}>
        {tooltipProps.children}
      </Tooltip>
    );
  }, [copyUrlButton, labelDescription, props.showLinks]);

  return (
    <DescriptionComponent>
      <Flex
        flexWrap={{ default: "nowrap" }}
        justifyContent={{ default: "justifyContentFlexStart" }}
        spaceItems={{ default: "spaceItemsSm" }}
        style={{ display: "inline-flex" }}
      >
        {switchExpression(props.descriptor?.origin.kind, {
          GIT: (
            <>
              <FlexItem>{gitLabel}</FlexItem>
              <FlexItem>
                <Label>
                  <CodeBranchIcon />
                  &nbsp;&nbsp;{props.descriptor?.origin.branch}
                </Label>
              </FlexItem>
            </>
          ),
          GITHUB_GIST: (
            <FlexItem>
              <Label>
                <GithubIcon />
                &nbsp;&nbsp;Gist
              </Label>
            </FlexItem>
          ),
          BITBUCKET_SNIPPET: (
            <FlexItem>
              <Label>
                <BitbucketIcon />
                &nbsp;&nbsp;Snippet
              </Label>
            </FlexItem>
          ),
          LOCAL: (
            <FlexItem>
              <Label>
                <PendingIcon />
                &nbsp;&nbsp;Ephemeral
              </Label>
            </FlexItem>
          ),
        })}
      </Flex>
    </DescriptionComponent>
  );
}
