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

import { Octokit } from "@octokit/rest";
import { useMemo } from "react";
import { useAuthProviders } from "../authProviders/AuthProvidersContext";
import { AuthSession } from "../authSessions/AuthSessionApi";
import { INSECURELY_DISABLE_TLS_CERTIFICATE_VALIDATION_HEADERS } from "../authProviders/AuthProvidersApi";
import { useEnv } from "../env/hooks/EnvContext";

export function getOctokitClient(args: {
  githubToken?: string;
  domain?: string;
  proxyUrl?: string;
  insecurelyDisableTlsCertificateValidation?: boolean;
}) {
  return new Octokit({
    auth: args.githubToken,
    baseUrl: args.domain === "proxy.testing:9091" ? "proxy.testing:9092" : getGithubInstanceApiUrl(args.domain),
    request: {
      fetch: (url: RequestInfo | URL, options: RequestInit) => {
        const newUrl = args.insecurelyDisableTlsCertificateValidation
          ? `${args.proxyUrl}/${url.toString().replace(/^https?:\/\//, "")}`
          : url;
        return fetch(newUrl, {
          ...options,
          headers: {
            ...options.headers,
            ...(args.insecurelyDisableTlsCertificateValidation
              ? INSECURELY_DISABLE_TLS_CERTIFICATE_VALIDATION_HEADERS
              : {}),
          },
        });
      },
    },
  });
}

export function useGitHubClient(authSession: AuthSession | undefined): Octokit {
  const authProviders = useAuthProviders();
  const { env } = useEnv();

  return useMemo(() => {
    if (authSession?.type !== "git") {
      return getOctokitClient({});
    }

    const authProvider = authProviders.find((a) => a.id === authSession.authProviderId);
    if (authProvider?.type !== "github") {
      return getOctokitClient({});
    }

    return getOctokitClient({
      domain: authProvider.domain,
      githubToken: authSession.token,
      proxyUrl: authProvider.insecurelyDisableTlsCertificateValidation ? env.KIE_SANDBOX_CORS_PROXY_URL : undefined,
      insecurelyDisableTlsCertificateValidation: authProvider.insecurelyDisableTlsCertificateValidation,
    });
  }, [authProviders, env.KIE_SANDBOX_CORS_PROXY_URL, authSession]);
}

export const getGithubInstanceApiUrl = (domain?: string) => {
  if (!domain || domain === "github.com") {
    return undefined;
  }
  return `https://${domain}/api/v3`;
};
