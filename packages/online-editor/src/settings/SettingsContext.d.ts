import * as React from "react";
import { Octokit } from "@octokit/rest";
import { SettingsTabs } from "./SettingsModalBody";
import { OpenShiftSettingsConfig } from "../openshift/OpenShiftSettingsConfig";
import { OpenShiftInstanceStatus } from "../openshift/OpenShiftInstanceStatus";
import { OpenShiftService } from "../openshift/OpenShiftService";
export declare const KIE_SANDBOX_EXTENDED_SERVICES_HOST_COOKIE_NAME =
  "kie-tools-COOKIE__kie-sandbox-extended-services--host";
export declare const KIE_SANDBOX_EXTENDED_SERVICES_PORT_COOKIE_NAME =
  "kie-tools-COOKIE__kie-sandbox-extended-services--port";
export declare const OPENSHIFT_NAMESPACE_COOKIE_NAME = "kie-tools-COOKIE__dmn-dev-sandbox--connection-namespace";
export declare const OPENSHIFT_HOST_COOKIE_NAME = "kie-tools-COOKIE__dmn-dev-sandbox--connection-host";
export declare const OPENSHIFT_TOKEN_COOKIE_NAME = "kie-tools-COOKIE__dmn-dev-sandbox--connection-token";
export declare enum AuthStatus {
  SIGNED_OUT = 0,
  TOKEN_EXPIRED = 1,
  LOADING = 2,
  SIGNED_IN = 3,
}
export declare enum GithubScopes {
  GIST = "gist",
  REPO = "repo",
}
interface GithubUser {
  login: string;
  name: string;
  email: string;
}
export declare class ExtendedServicesConfig {
  readonly host: string;
  readonly port: string;
  constructor(host: string, port: string);
  buildUrl(): string;
}
export interface SettingsContextType {
  isOpen: boolean;
  activeTab: SettingsTabs;
  openshift: {
    status: OpenShiftInstanceStatus;
    config: OpenShiftSettingsConfig;
  };
  kieSandboxExtendedServices: {
    config: ExtendedServicesConfig;
  };
  github: {
    token?: string;
    user?: GithubUser;
    scopes?: string[];
    authStatus: AuthStatus;
  };
  general: {
    guidedTour: {
      isEnabled: boolean;
    };
  };
}
export interface SettingsDispatchContextType {
  open: (activeTab?: SettingsTabs) => void;
  close: () => void;
  openshift: {
    service: OpenShiftService;
    setStatus: React.Dispatch<React.SetStateAction<OpenShiftInstanceStatus>>;
    setConfig: React.Dispatch<React.SetStateAction<OpenShiftSettingsConfig>>;
  };
  kieSandboxExtendedServices: {
    setConfig: React.Dispatch<React.SetStateAction<ExtendedServicesConfig>>;
  };
  github: {
    authService: {
      reset: () => void;
      authenticate: (token: string) => Promise<void>;
    };
    octokit: Octokit;
  };
  general: {
    guidedTour: {
      setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
    };
  };
}
export declare const SettingsContext: React.Context<SettingsContextType>;
export declare const SettingsDispatchContext: React.Context<SettingsDispatchContextType>;
export declare function SettingsContextProvider(props: any): JSX.Element;
export declare function useSettings(): SettingsContextType;
export declare function useSettingsDispatch(): SettingsDispatchContextType;
export {};
//# sourceMappingURL=SettingsContext.d.ts.map
