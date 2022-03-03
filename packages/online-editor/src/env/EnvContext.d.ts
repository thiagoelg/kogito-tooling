import * as React from "react";
declare type EnvVarNames = "KIE_SANDBOX_EXTENDED_SERVICES_URL" | "CORS_PROXY_URL";
export declare type EnvVars = Record<EnvVarNames, string>;
export declare const DEFAULT_KIE_SANDBOX_EXTENDED_SERVICES_HOST = "http://localhost";
export declare const DEFAULT_KIE_SANDBOX_EXTENDED_SERVICES_PORT = "21345";
export declare const DEFAULT_CORS_PROXY_URL = "https://cors.isomorphic-git.org";
export declare const DEFAULT_ENV_VARS: EnvVars;
export interface EnvContextType {
  vars: EnvVars;
}
export declare const EnvContext: React.Context<EnvContextType>;
export declare function useEnv(): EnvContextType;
export {};
//# sourceMappingURL=EnvContext.d.ts.map
