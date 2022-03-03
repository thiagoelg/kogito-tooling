export interface OpenShiftSettingsConfig {
  namespace: string;
  host: string;
  token: string;
}
export declare const EMPTY_CONFIG: OpenShiftSettingsConfig;
export declare function isConfigValid(config: OpenShiftSettingsConfig): boolean;
export declare function isNamespaceValid(username: string): boolean;
export declare function isHostValid(host: string): boolean;
export declare function isTokenValid(token: string): boolean;
export declare function readConfigCookie(): OpenShiftSettingsConfig;
export declare function resetConfigCookie(): void;
export declare function saveConfigCookie(config: OpenShiftSettingsConfig): void;
//# sourceMappingURL=OpenShiftSettingsConfig.d.ts.map
