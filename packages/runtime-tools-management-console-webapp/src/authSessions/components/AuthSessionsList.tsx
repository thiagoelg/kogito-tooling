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

import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button";
import {
  Card,
  CardActions,
  CardBody,
  CardExpandableContent,
  CardHeader,
  CardHeaderMain,
} from "@patternfly/react-core/dist/js/components/Card";
import { Stack } from "@patternfly/react-core/dist/js/layouts/Stack";
import { useAuthSessions, useAuthSessionsDispatch } from "../AuthSessionsContext";
import React, { useState } from "react";
import {
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
} from "@patternfly/react-core/dist/js/components/DescriptionList";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
import { Text, TextContent, TextVariants } from "@patternfly/react-core/dist/js/components/Text";
import ExclamationCircleIcon from "@patternfly/react-icons/dist/js/icons/exclamation-circle-icon";
import { Tooltip } from "@patternfly/react-core/dist/js/components/Tooltip";
import { AuthSession, AuthSessionStatus } from "../AuthSessionApi";
import { Flex } from "@patternfly/react-core/dist/js/layouts/Flex";

export function AuthSessionsList(props: {}) {
  const { authSessions } = useAuthSessions();

  return (
    <>
      <Stack hasGutter={true} style={{ height: "auto" }}>
        {[...authSessions.values()].map((authSession) => {
          return <AuthSessionCard key={authSession.id} authSession={authSession} />;
        })}
      </Stack>
    </>
  );
}

function AuthSessionCard(props: { authSession: AuthSession }) {
  const authSessionsDispatch = useAuthSessionsDispatch();
  const [isExpanded, setExpanded] = useState(false);
  const { authSessionStatus } = useAuthSessions();

  return (
    <Card key={props.authSession.id} isCompact={true} isExpanded={isExpanded}>
      <CardHeader onExpand={() => setExpanded((prev) => !prev)}>
        <CardActions>
          {authSessionStatus.get(props.authSession.id) === AuthSessionStatus.INVALID && (
            <Tooltip content={"Could not authenticate using this session. Its Token was probably revoked, or expired."}>
              <>
                <ExclamationCircleIcon style={{ color: "var(--pf-global--palette--red-100)" }} />
              </>
            </Tooltip>
          )}
          <Button variant={ButtonVariant.link} onClick={() => authSessionsDispatch.remove(props.authSession)}>
            Remove
          </Button>
        </CardActions>
        <CardHeaderMain
          style={{
            display: "flex",
          }}
        >
          <Flex alignItems={{ default: "alignItemsCenter" }} style={{ display: "inline-flex" }}>
            <TextContent>
              <Text component={TextVariants.h3}>{props.authSession.name}</Text>
            </TextContent>
          </Flex>
        </CardHeaderMain>
      </CardHeader>
      <CardExpandableContent>
        <CardBody>
          <>
            <br />
            <Divider inset={{ default: "insetXl" }} />
            <br />
            <AuthSessionDescriptionList authSession={props.authSession} />
          </>
        </CardBody>
      </CardExpandableContent>
    </Card>
  );
}

export function AuthSessionDescriptionList(props: { authSession: AuthSession }) {
  return (
    <>
      <DescriptionList isHorizontal={true} isCompact={true} isFluid={true}>
        <DescriptionListGroup>
          <DescriptionListTerm>Nmae</DescriptionListTerm>
          <DescriptionListDescription>{props.authSession.name}</DescriptionListDescription>
        </DescriptionListGroup>
        <>
          <DescriptionListGroup>
            <DescriptionListTerm>URL</DescriptionListTerm>
            <DescriptionListDescription>{props.authSession.runtimesUrl}</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Token</DescriptionListTerm>
            <DescriptionListDescription>{obfuscate(props.authSession.tokens.access_token)}</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Refresh Token</DescriptionListTerm>
            <DescriptionListDescription>
              {obfuscate(props.authSession.tokens.refresh_token ?? "")}
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Issuer</DescriptionListTerm>
            <DescriptionListDescription>{props.authSession.openIdConfig.issuer}</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Created at</DescriptionListTerm>
            <DescriptionListDescription>{props.authSession.createdAtDateISO}</DescriptionListDescription>
          </DescriptionListGroup>
        </>
      </DescriptionList>
    </>
  );
}

export function obfuscate(token: string) {
  if (token.length <= 8) {
    return token;
  }

  const stars = new Array(token.length - 8).join("*");
  const pieceToObfuscate = token.substring(4, token.length - 4);
  return token.replace(pieceToObfuscate, stars);
}
