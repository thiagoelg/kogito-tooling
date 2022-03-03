import { MessageBusClientApi } from "@kie-tools-core/envelope-bus/dist/api";
import * as React from "react";
import { Item, TodoListChannelApi } from "../api";
import "./styles.scss";
export interface TodoListEnvelopeViewApi {
  setUser(user: string): void;
  addItem(item: string): void;
  getItems(): Item[];
  markAllAsCompleted(): void;
}
interface Props {
  channelApi: MessageBusClientApi<TodoListChannelApi>;
}
export declare const TodoListEnvelopeView: React.ForwardRefExoticComponent<
  Props & React.RefAttributes<TodoListEnvelopeViewApi>
>;
export {};
//# sourceMappingURL=TodoListEnvelopeView.d.ts.map
