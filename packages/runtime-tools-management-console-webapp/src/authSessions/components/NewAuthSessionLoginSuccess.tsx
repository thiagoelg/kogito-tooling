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

import React, { useEffect } from "react";
import { useAuthSessions, useAuthSessionsDispatch } from "../AuthSessionsContext";
import { RouteComponentProps } from "react-router";
import * as client from "openid-client";
import { v4 as uuid } from "uuid";
import {
  AUTH_SESSION_TEMP_OPENID_AUTH_DATA_STORAGE_KEY,
  AUTH_SESSIONS_VERSION_NUMBER,
  TemporaryAuthSessionData,
} from "../AuthSessionApi";

export const NewAuthSessionLoginSuccess: React.FC<RouteComponentProps> = ({ ...props }) => {
  const { add, setCurrentAuthSessionId } = useAuthSessionsDispatch();
  const { isAuthSessionsReady } = useAuthSessions();

  useEffect(() => {
    console.log({ isAuthSessionsReady });
    if (!isAuthSessionsReady) {
      return;
    }
    const callback = async () => {
      const { runtimesUrl, clientId, code_verifier, nonce, serverMetadata, name } = JSON.parse(
        window.localStorage.getItem(AUTH_SESSION_TEMP_OPENID_AUTH_DATA_STORAGE_KEY)!
      ) as TemporaryAuthSessionData;
      console.log({ runtimesUrl, clientId, code_verifier, nonce, serverMetadata, name });

      const config = new client.Configuration(serverMetadata, clientId);

      client.allowInsecureRequests(config);

      // Authorization Code Grant
      const currentUrl: URL = new URL(window.location.href);
      const tokens = await client.authorizationCodeGrant(config, currentUrl, {
        pkceCodeVerifier: code_verifier,
        expectedNonce: nonce,
        idTokenExpected: true,
      });

      const { access_token } = tokens;
      const claims = tokens.claims()!;
      const { sub } = claims;

      // UserInfo Request
      const userInfo = await client.fetchUserInfo(config, access_token, sub);

      console.log("UserInfo Response", userInfo);
      console.log("Tokens", tokens);
      console.log("Claims", claims);

      const authSessionId = uuid();

      await add({
        id: authSessionId,
        name,
        clientId,
        tokens,
        claims,
        runtimesUrl,
        openIdConfig: serverMetadata,
        userInfo: userInfo,
        createdAtDateISO: new Date(Date.now()).toISOString(),
        version: AUTH_SESSIONS_VERSION_NUMBER,
      });

      setCurrentAuthSessionId(authSessionId);

      window.localStorage.removeItem(AUTH_SESSION_TEMP_OPENID_AUTH_DATA_STORAGE_KEY);
    };

    callback().then(() => {
      props.history.push("/");
    });
  }, [add, props.history, setCurrentAuthSessionId, isAuthSessionsReady]);

  return (
    <>
      <div>
        <pre></pre>
      </div>
      <div>Login success, you may close this window.</div>
    </>
  );
};
