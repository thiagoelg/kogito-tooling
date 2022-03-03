import { KogitoEditorChannelApi, KogitoEditorEnvelopeContextType } from "@kie-tools-core/editor/dist/api";
import { DefaultKeyboardShortcutsService } from "@kie-tools-core/keyboard-shortcuts/dist/envelope";
import * as React from "react";
import { I18nService } from "@kie-tools-core/i18n/dist/envelope";
import { I18nDictionariesProviderProps } from "@kie-tools-core/i18n/dist/react-components";
import { EditorEnvelopeI18n } from "@kie-tools-core/editor/dist/envelope/i18n";
export declare const DEFAULT_TESTING_ENVELOPE_CONTEXT: KogitoEditorEnvelopeContextType<KogitoEditorChannelApi>;
export declare function usingEnvelopeContext(
  children: React.ReactElement,
  ctx?: Partial<KogitoEditorEnvelopeContextType<KogitoEditorChannelApi>>
): {
  ctx: {
    channelApi: import("@kie-tools-core/envelope-bus/dist/api").MessageBusClientApi<KogitoEditorChannelApi>;
    operatingSystem?: import("@kie-tools-core/operating-system").OperatingSystem | undefined;
    services: {
      keyboardShortcuts: DefaultKeyboardShortcutsService;
      i18n: I18nService;
    };
  };
  wrapper: JSX.Element;
};
export declare function usingEditorEnvelopeI18nContext(
  children: React.ReactElement,
  ctx?: Partial<I18nDictionariesProviderProps<EditorEnvelopeI18n>>
): {
  ctx: I18nDictionariesProviderProps<EditorEnvelopeI18n>;
  wrapper: JSX.Element;
};
//# sourceMappingURL=utils.d.ts.map
