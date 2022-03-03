import { KogitoEditorChannelApi } from "@kie-tools-core/editor/dist/api";
import { StateControlApi } from "../api/StateControlApi";
import { MessageBusClientApi } from "@kie-tools-core/envelope-bus/dist/api";
export declare class GwtStateControlService {
  private undoCommand;
  private redoCommand;
  undo(): void;
  redo(): void;
  exposeApi(channelApi: MessageBusClientApi<KogitoEditorChannelApi>): StateControlApi;
}
//# sourceMappingURL=GwtStateControlService.d.ts.map
