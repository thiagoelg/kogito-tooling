import * as React from "react";
import { ExtendedServicesConfig } from "../settings/SettingsContext";
import { KieSandboxExtendedServicesStatus } from "./KieSandboxExtendedServicesStatus";
export declare enum DependentFeature {
  DMN_RUNNER = "DMN_RUNNER",
  DMN_DEV_SANDBOX = "DMN_DEV_SANDBOX",
}
export interface KieSandboxExtendedServicesContextType {
  status: KieSandboxExtendedServicesStatus;
  setStatus: React.Dispatch<KieSandboxExtendedServicesStatus>;
  config: ExtendedServicesConfig;
  saveNewConfig: React.Dispatch<ExtendedServicesConfig>;
  version: string;
  outdated: boolean;
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<boolean>;
  installTriggeredBy?: DependentFeature;
  setInstallTriggeredBy: React.Dispatch<React.SetStateAction<DependentFeature>>;
}
export declare const KieSandboxExtendedServicesContext: React.Context<KieSandboxExtendedServicesContextType>;
export declare function useKieSandboxExtendedServices(): KieSandboxExtendedServicesContextType;
//# sourceMappingURL=KieSandboxExtendedServicesContext.d.ts.map
