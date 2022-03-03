import * as React from "react";
import { ApiDefinition, MessageBusClientApi } from "@kie-tools-core/envelope-bus/dist/api";
import { KogitoEditorChannelApi } from "./KogitoEditorChannelApi";
import { DefaultKeyboardShortcutsService } from "@kie-tools-core/keyboard-shortcuts/dist/envelope";
import { I18nService } from "@kie-tools-core/i18n/dist/envelope";
import { OperatingSystem } from "@kie-tools-core/operating-system";
export interface KogitoEditorEnvelopeContextType<
  ChannelApi extends KogitoEditorChannelApi & ApiDefinition<ChannelApi>
> {
  channelApi: MessageBusClientApi<ChannelApi>;
  operatingSystem?: OperatingSystem;
  services: {
    keyboardShortcuts: DefaultKeyboardShortcutsService;
    i18n: I18nService;
  };
}
export declare const KogitoEditorEnvelopeContext: React.Context<KogitoEditorEnvelopeContextType<any>>;
export declare function useKogitoEditorEnvelopeContext<
  ChannelApi extends KogitoEditorChannelApi & ApiDefinition<ChannelApi> = KogitoEditorChannelApi
>(): KogitoEditorEnvelopeContextType<ChannelApi>;
//# sourceMappingURL=KogitoEditorEnvelopeContext.d.ts.map
