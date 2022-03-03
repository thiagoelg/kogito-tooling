import * as React from "react";
import { EnvelopeServer } from "@kie-tools-core/envelope-bus/dist/channel";
import { TodoListApi, TodoListChannelApi, TodoListEnvelopeApi } from "../api";
export declare type EmbeddedTodoListRef = TodoListApi & {
  envelopeServer: EnvelopeServer<TodoListChannelApi, TodoListEnvelopeApi>;
};
export declare type Props = {
  targetOrigin: string;
  envelopePath: string;
  apiImpl: TodoListChannelApi;
};
export declare const EmbeddedTodoList: React.ForwardRefExoticComponent<
  Props & React.RefAttributes<EmbeddedTodoListRef>
>;
//# sourceMappingURL=EmbeddedTodoList.d.ts.map
