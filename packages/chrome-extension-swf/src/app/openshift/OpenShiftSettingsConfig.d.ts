export declare const OPENSHIFT_PROXY_COOKIE_NAME =
  "KIE-TOOLS-COOKIE__serverless-workflow-chrome-extension--connection-proxy";
export declare const OPENSHIFT_NAMESPACE_COOKIE_NAME =
  "KIE-TOOLS-COOKIE__serverless-workflow-chrome-extension--connection-namespace";
export declare const OPENSHIFT_HOST_COOKIE_NAME =
  "KIE-TOOLS-COOKIE__serverless-workflow-chrome-extension--connection-host";
export declare const OPENSHIFT_TOKEN_COOKIE_NAME =
  "KIE-TOOLS-COOKIE__serverless-workflow-chrome-extension--connection-token";
export interface OpenShiftSettingsConfig {
  proxy: string;
  namespace: string;
  host: string;
  token: string;
}
export declare const EMPTY_CONFIG: OpenShiftSettingsConfig;
export declare function isConfigValid(config: OpenShiftSettingsConfig): boolean;
export declare function isProxyValid(proxy: string): boolean;
export declare function isNamespaceValid(username: string): boolean;
export declare function isHostValid(host: string): boolean;
export declare function isTokenValid(token: string): boolean;
export declare function readConfigCookie(): OpenShiftSettingsConfig;
export declare function resetConfigCookie(): void;
export declare function saveProxyCookie(proxy: string): void;
export declare function saveNamespaceCookie(namespace: string): void;
export declare function saveHostCookie(host: string): void;
export declare function saveTokenCookie(token: string): void;
export declare function saveConfigCookie(config: OpenShiftSettingsConfig): void;
//# sourceMappingURL=OpenShiftSettingsConfig.d.ts.map
