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

import React, { useCallback, useState } from "react";
import { Modal, ModalVariant } from "@patternfly/react-core/dist/js/components/Modal";
import {
  AUTH_SESSION_TEMP_OPENID_AUTH_DATA_STORAGE_KEY,
  AUTH_SESSIONS_VERSION_NUMBER,
  TemporaryAuthSessionData,
} from "../AuthSessionApi";
import { Button } from "@patternfly/react-core/dist/js/components/Button";
import { v4 as uuid } from "uuid";
import { useAuthSessions, useAuthSessionsDispatch } from "../AuthSessionsContext";
import * as client from "openid-client";

export function NewAuthSessionModal() {
  const [runtimesUrl, setRuntimesUrl] = useState<string>();
  const [name, setName] = useState<string>();
  const [clientId, setClientId] = useState<string>("kogito-management-console");

  const { isNewAuthSessionModalOpen } = useAuthSessions();
  const { setIsNewAuthSessionModalOpen } = useAuthSessionsDispatch();

  const onCancel = useCallback(() => {
    setIsNewAuthSessionModalOpen(false);
    setRuntimesUrl("");
    setName("");
    setClientId("kogito-management-console");
  }, [setIsNewAuthSessionModalOpen]);

  const onConnect = useCallback(async () => {
    if (!runtimesUrl || !name) {
      return;
    }
    const config: client.Configuration = await client.discovery(new URL(runtimesUrl), clientId, undefined, undefined, {
      execute: [client.allowInsecureRequests],
    });

    const code_challenge_method = "S256";
    /**
     * The following (code_verifier and potentially nonce) MUST be generated for
     * every redirect to the authorization_endpoint. You must store the
     * code_verifier and nonce in the end-user session such that it can be recovered
     * as the user gets redirected from the authorization server back to your
     * application.
     */
    const code_verifier = client.randomPKCECodeVerifier();
    const code_challenge = await client.calculatePKCECodeChallenge(code_verifier);
    const redirect_uri = `${window.location.origin}/Login`;
    let nonce: string | undefined = undefined;

    // redirect user to as.authorization_endpoint
    const parameters: Record<string, string> = {
      redirect_uri,
      scope: "openid email",
      code_challenge,
      code_challenge_method,
    };

    /**
     * We cannot be sure the AS supports PKCE so we're going to use nonce too. Use
     * of PKCE is backwards compatible even if the AS doesn't support it which is
     * why we're using it regardless.
     */
    if (!config.serverMetadata().supportsPKCE()) {
      nonce = client.randomNonce();
      parameters.nonce = nonce;
    }

    const redirectTo = client.buildAuthorizationUrl(config, parameters);

    const tempOpenIdAuthData: TemporaryAuthSessionData = {
      runtimesUrl,
      clientId,
      name,
      code_challenge_method,
      code_verifier,
      code_challenge,
      redirect_uri,
      nonce,
      serverMetadata: config.serverMetadata(),
    };

    window.localStorage.setItem(AUTH_SESSION_TEMP_OPENID_AUTH_DATA_STORAGE_KEY, JSON.stringify(tempOpenIdAuthData));

    console.log("redirecting to", redirectTo.href);
    window.location.href = redirectTo.href;
  }, [clientId, runtimesUrl, name]);

  return (
    <Modal
      data-testid={"kie-tools--dmn-editor--included-models-modal"}
      isOpen={isNewAuthSessionModalOpen}
      onClose={onCancel}
      title={"Connect to a runtimes instance"}
      variant={ModalVariant.large}
      actions={[
        <Button key="confirm" variant="primary" onClick={() => {}}>
          Save
        </Button>,
        <Button key="cancel" variant="link" onClick={onCancel}>
          Cancel
        </Button>,
      ]}
    >
      <>
        <input onChange={(e) => setName(e.target.value)} placeholder="name"></input>
        <input onChange={(e) => setRuntimesUrl(e.target.value)} placeholder="runtimes url"></input>
        <Button key="connect" variant="link" onClick={onConnect} isDisabled={!runtimesUrl}>
          Connect
        </Button>
      </>
    </Modal>
  );
}
