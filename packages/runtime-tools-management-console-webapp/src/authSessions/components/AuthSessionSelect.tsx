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

import * as React from "react";
import {
  Select,
  SelectGroup,
  SelectOption,
  SelectPosition,
  SelectProps,
  SelectVariant,
} from "@patternfly/react-core/dist/js/components/Select";
import { useAuthSessionsDispatch, useAuthSessions, useCurrentAuthSession } from "../AuthSessionsContext";
import { useEffect, useMemo, useState } from "react";
import { ValidatedOptions } from "@patternfly/react-core/dist/js/helpers";
import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button";
import PlusIcon from "@patternfly/react-icons/dist/js/icons/plus-icon";
import ExclamationCircleIcon from "@patternfly/react-icons/dist/js/icons/exclamation-circle-icon";
import { Flex, FlexItem } from "@patternfly/react-core/dist/js/layouts/Flex";
import { Tooltip } from "@patternfly/react-core/dist/js/components/Tooltip";
import { AuthSessionStatus } from "../AuthSessionApi";

export function AuthSessionSelect(props: {
  isPlain: boolean;
  position?: SelectPosition;
  menuAppendTo?: SelectProps["menuAppendTo"];
}) {
  const [isAuthSessionSelectorOpen, setAuthSessionSelectorOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const { authSessions, authSessionStatus, currentAuthSessionId } = useAuthSessions();
  const { setIsNewAuthSessionModalOpen, setCurrentAuthSessionId } = useAuthSessionsDispatch();
  const currentAuthSession = useCurrentAuthSession();

  const validated = useMemo(() => {
    if (!currentAuthSessionId) {
      return ValidatedOptions.warning; // no authSession selected
    }
    return ValidatedOptions.default;
  }, [currentAuthSessionId]);

  const unfilteredItems = useMemo(() => {
    return [...authSessions.values()].map((authSession) => {
      return {
        authSession,
        status: authSessionStatus.get(authSession.id),
      };
    });
  }, [authSessionStatus, authSessions]);

  // Always start the Select with showMore = false.
  useEffect(() => {
    if (!isAuthSessionSelectorOpen) {
      setShowMore(false);
    }
  }, [isAuthSessionSelectorOpen]);

  return (
    <Select
      position={props.position}
      validated={validated}
      variant={SelectVariant.single}
      selections={currentAuthSession?.id ?? "Select authentication"}
      isOpen={isAuthSessionSelectorOpen}
      onToggle={setAuthSessionSelectorOpen}
      isPlain={validated === ValidatedOptions.default ? props.isPlain : false}
      onSelect={(e, value) => {
        e.stopPropagation();
        setCurrentAuthSessionId(value as string);
        setAuthSessionSelectorOpen(false);
      }}
      className={`kogito-management-console__auth-session-select ${props.isPlain ? "kie-tools--masthead-hoverable" : ""}`}
      menuAppendTo={props.menuAppendTo ?? "parent"}
      maxHeight={"400px"}
      style={{ minWidth: "400px" }}
      footer={
        <>
          <Button
            variant={ButtonVariant.link}
            isInline={true}
            icon={<PlusIcon />}
            onClick={() => {
              setIsNewAuthSessionModalOpen(true);
            }}
          >
            Connect to an application...
          </Button>
        </>
      }
    >
      {unfilteredItems.map((item) => (
        <SelectOption
          key={item.authSession.id}
          value={item.authSession.id}
          description={<i>{item.authSession.name}</i>}
        >
          <Flex justifyContent={{ default: "justifyContentSpaceBetween" }}>
            <FlexItem>
              &nbsp;&nbsp;
              {item.authSession.name}
            </FlexItem>
            {authSessionStatus.get(item.authSession.id) === AuthSessionStatus.INVALID && (
              <FlexItem style={{ zIndex: 99999 }}>
                <InvalidAuthSessionIcon />
              </FlexItem>
            )}
          </Flex>
        </SelectOption>
      ))}
    </Select>
  );
}

export function InvalidAuthSessionIcon() {
  return (
    <Tooltip
      position={"bottom"}
      content={"Could not authenticate using this session. Its Token was probably revoked, or expired."}
    >
      <>
        <ExclamationCircleIcon style={{ color: "var(--pf-global--palette--red-100)" }} />
      </>
    </Tooltip>
  );
}
