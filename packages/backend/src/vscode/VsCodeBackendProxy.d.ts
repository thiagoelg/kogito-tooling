import { I18n } from "@kie-tools-core/i18n/dist/core/I18n";
import * as vscode from "vscode";
import { BackendProxy, Capability, CapabilityResponse } from "../api";
import { BackendI18n } from "../i18n";
export declare class VsCodeBackendProxy extends BackendProxy {
  private readonly context;
  private readonly backendI18n;
  private readonly backendExtensionId?;
  constructor(
    context: vscode.ExtensionContext,
    backendI18n: I18n<BackendI18n>,
    backendExtensionId?: string | undefined
  );
  withCapability<T extends Capability, U>(
    serviceId: string,
    consumer: (capability: T) => Promise<CapabilityResponse<U>>
  ): Promise<CapabilityResponse<U>>;
  tryLoadBackendExtension(suggestInstall: boolean): Promise<void>;
  trySuggestBackendExtension(): void;
  suggestBackendExtension(): void;
}
//# sourceMappingURL=VsCodeBackendProxy.d.ts.map
