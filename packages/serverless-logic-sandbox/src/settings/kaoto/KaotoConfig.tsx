/*
 * Copyright 2022 Red Hat, Inc. and/or its affiliates.
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

import { getCookie, makeCookieName, setCookie } from "../../cookies";

export const KAOTO_BACKEND_API_URL_COOKIE_NAME = makeCookieName("kaoto", "backend-api-url");

export const DEFAULT_KAOTO_BACKEND_API_URL =
  "https://kaoto-backend-kaoto-kogito.rhba-0ad6762cc85bcef5745bb684498c2436-0000.us-south.containers.appdomain.cloud";

export interface KaotoSettingsConfig {
  kaotoBackendApiUrl: string;
}

export const DEFAULT_CONFIG: KaotoSettingsConfig = {
  kaotoBackendApiUrl: DEFAULT_KAOTO_BACKEND_API_URL,
};

export function readKaotoConfigCookie(): KaotoSettingsConfig {
  const kaotoBackendApiUrlCookie = getCookie(KAOTO_BACKEND_API_URL_COOKIE_NAME);
  return {
    kaotoBackendApiUrl: kaotoBackendApiUrlCookie || DEFAULT_KAOTO_BACKEND_API_URL,
  };
}

export function saveKaotoBackendApiUrlCookie(kaotoBackendApiUrl: string): void {
  setCookie(KAOTO_BACKEND_API_URL_COOKIE_NAME, kaotoBackendApiUrl);
}

export function saveConfigCookie(config: KaotoSettingsConfig): void {
  saveKaotoBackendApiUrlCookie(config.kaotoBackendApiUrl);
}
