import {
  EditorFactory,
  EditorInitArgs,
  KogitoEditorChannelApi,
  KogitoEditorEnvelopeContextType,
} from "@kie-tools-core/editor/dist/api";
import { I18n } from "@kie-tools-core/i18n/dist/core";
import {
  EditorContextApi,
  GuidedTourApi,
  I18nServiceApi,
  KeyboardShortcutsApi,
  NotificationsApi,
  ResourceContentApi,
  StateControlApi,
  WorkspaceServiceApi,
} from "./api";
import { GwtAppFormerApi } from "./GwtAppFormerApi";
import { GwtEditorWrapper } from "./GwtEditorWrapper";
import { GwtLanguageData } from "./GwtLanguageData";
import { GwtStateControlService } from "./gwtStateControl";
import { XmlFormatter } from "./XmlFormatter";
export interface CustomWindow extends Window {
  startStandaloneEditor?: () => void;
  gwt: {
    stateControl: StateControlApi;
  };
  envelope: {
    guidedTourService: GuidedTourApi;
    editorContext: EditorContextApi;
    resourceContentEditorService?: ResourceContentApi;
    keyboardShortcuts: KeyboardShortcutsApi;
    workspaceService: WorkspaceServiceApi;
    i18nService: I18nServiceApi;
    notificationsService: NotificationsApi;
  };
}
export declare class GwtEditorWrapperFactory<E extends GwtEditorWrapper>
  implements EditorFactory<E, KogitoEditorChannelApi>
{
  private readonly languageData;
  private readonly gwtEditorDelegate;
  readonly gwtEditorEnvelopeConfig: {
    shouldLoadResourcesDynamically: boolean;
  };
  readonly xmlFormatter: XmlFormatter;
  readonly gwtAppFormerApi: GwtAppFormerApi;
  readonly gwtStateControlService: GwtStateControlService;
  readonly kieBcEditorsI18n: I18n<import("./i18n").KieBcEditorsI18n>;
  constructor(
    languageData: GwtLanguageData,
    gwtEditorDelegate: (factory: GwtEditorWrapperFactory<E>, initArgs: EditorInitArgs) => E,
    gwtEditorEnvelopeConfig: {
      shouldLoadResourcesDynamically: boolean;
    },
    xmlFormatter?: XmlFormatter,
    gwtAppFormerApi?: GwtAppFormerApi,
    gwtStateControlService?: GwtStateControlService,
    kieBcEditorsI18n?: I18n<import("./i18n").KieBcEditorsI18n>
  );
  createEditor(
    envelopeContext: KogitoEditorEnvelopeContextType<KogitoEditorChannelApi>,
    initArgs: EditorInitArgs
  ): Promise<E>;
  private exposeEnvelopeContext;
  private appendGwtLocaleMetaTag;
  private loadResource;
  private recursivelyLoadScriptsStartingFrom;
}
//# sourceMappingURL=GwtEditorWrapperFactory.d.ts.map
