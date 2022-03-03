import * as vscode from "vscode";
import { TodoListChannelApi, TodoListEnvelopeApi } from "../api";
export declare class TodoListWebview {
  private readonly context;
  private readonly envelopeLocator;
  private readonly apiImpl;
  constructor(
    context: vscode.ExtensionContext,
    envelopeLocator: {
      targetOrigin: string;
      title: string;
      envelopePath: string;
    },
    apiImpl: TodoListChannelApi
  );
  open(
    pageId: string,
    opts: {
      onClose: () => void;
    }
  ): import("@kie-tools-core/envelope-bus/dist/api").MessageBusClientApi<TodoListEnvelopeApi>;
}
//# sourceMappingURL=TodoListWebview.d.ts.map
