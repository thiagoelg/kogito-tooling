/// <reference types="react" />
import { GwtEditor } from "./GwtAppFormerApi";
import { Editor, KogitoEditorChannelApi } from "@kie-tools-core/editor/dist/api";
import { XmlFormatter } from "./XmlFormatter";
import { GwtStateControlService } from "./gwtStateControl";
import { MessageBusClientApi } from "@kie-tools-core/envelope-bus/dist/api";
import { I18n } from "@kie-tools-core/i18n/dist/core";
import { KieBcEditorsI18n } from "./i18n";
import { Notification } from "@kie-tools-core/notifications/dist/api";
export declare class GwtEditorWrapper implements Editor {
  readonly af_isReact = true;
  readonly af_componentId = "gwt-editor-wrapper";
  readonly af_componentTitle: string;
  readonly editorId: string;
  private readonly gwtEditor;
  private readonly xmlFormatter;
  private readonly channelApi;
  private readonly stateControlService;
  private readonly kieBcEditorsI18n;
  constructor(
    editorId: string,
    gwtEditor: GwtEditor,
    channelApi: MessageBusClientApi<KogitoEditorChannelApi>,
    xmlFormatter: XmlFormatter,
    stateControlService: GwtStateControlService,
    kieBcEditorsI18n: I18n<KieBcEditorsI18n>
  );
  af_onOpen(): void;
  af_componentRoot(): JSX.Element;
  undo(): Promise<void>;
  redo(): Promise<void>;
  getContent(): Promise<string>;
  getElementPosition(selector: string): Promise<Rect>;
  setContent(path: string, content: string): Promise<void>;
  getPreview(): Promise<string | undefined>;
  validate(): Promise<Notification[]>;
  private removeBusinessCentralHeaderPanel;
  private removeBusinessCentralPanelHeader;
  private removeHeaderIfOnlyOneItemOnTable;
  private injectStyleToFixResponsivenessIssue_DROOLS_3995;
}
//# sourceMappingURL=GwtEditorWrapper.d.ts.map
