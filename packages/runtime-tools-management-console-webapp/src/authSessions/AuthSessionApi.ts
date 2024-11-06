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

import { LfsFsCache } from "@kie-tools-core/workspaces-git-fs/dist/lfs/LfsFsCache";
import { LfsStorageService } from "@kie-tools-core/workspaces-git-fs/dist/lfs/LfsStorageService";
import { IDToken, ServerMetadata, TokenEndpointResponse, UserInfoResponse } from "openid-client";

export const authSessionFsCache = new LfsFsCache();
export const authSessionFsService = new LfsStorageService();
export const authSessionBroadcastChannel = new BroadcastChannel("auth_sessions");

export const AUTH_SESSIONS_FILE_PATH = "/authSessions.json";
export const AUTH_SESSIONS_FS_NAME = "auth_sessions";
export const AUTH_SESSIONS_VERSION_NUMBER = 1;
export const AUTH_SESSIONS_FS_NAME_WITH_VERSION = `${AUTH_SESSIONS_FS_NAME}_v${AUTH_SESSIONS_VERSION_NUMBER.toString()}`;

export const AUTH_SESSION_TEMP_OPENID_AUTH_DATA_STORAGE_KEY = "temporaryOpenIdAuthData";

export function mapSerializer(_: string, value: any) {
  if (value instanceof Map) {
    return {
      __$$jsClassName: "Map",
      value: Array.from(value.entries()),
    };
  }
  return value;
}

export function mapDeSerializer(_: string, value: any) {
  if (typeof value === "object" && value) {
    if (value.__$$jsClassName === "Map") {
      return new Map(value.value);
    }
  }
  return value;
}

export type OpenIDConfiguration = {
  issuer: string;
  token_endpoint: string;
  authorization_endpoint: string;
  userinfo_endpoint: string;
  token_endpoint_auth_methods_supported?: string[];
  jwks_uri: string;
  response_types_supported?: string[];
  grant_types_supported?: string[];
  token_endpoint_auth_signing_alg_values_supported?: string[];
  response_modes_supported?: string[];
  id_token_signing_alg_values_supported?: string[];
  revocation_endpoint: string;
  subject_types_supported?: string[];
  end_session_endpoint: string;
  introspection_endpoint: string;
};

export type AuthSession = {
  id: string;
  version: number;
  name: string;
  tokens: TokenEndpointResponse;
  claims: IDToken;
  openIdConfig: ServerMetadata;
  userInfo: UserInfoResponse;
  clientId: string;
  clientSecret?: string;
  runtimesUrl: string;
  createdAtDateISO: string;
};

export type TemporaryAuthSessionData = {
  runtimesUrl: string;
  clientId: string;
  name: string;
  code_challenge_method: string;
  code_verifier: string;
  code_challenge: string;
  redirect_uri: string;
  nonce?: string;
  serverMetadata: ServerMetadata;
};

export enum AuthSessionStatus {
  VALID,
  INVALID,
}
