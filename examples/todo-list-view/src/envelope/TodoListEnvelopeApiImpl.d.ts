import { TodoListEnvelopeContext } from "./TodoListEnvelopeContext";
import { Association, TodoListChannelApi, TodoListEnvelopeApi, TodoListInitArgs } from "../api";
import { TodoListEnvelopeViewApi } from "./TodoListEnvelopeView";
import { EnvelopeApiFactoryArgs } from "@kie-tools-core/envelope";
export declare class TodoListEnvelopeApiImpl implements TodoListEnvelopeApi {
  private readonly args;
  private view;
  constructor(
    args: EnvelopeApiFactoryArgs<
      TodoListEnvelopeApi,
      TodoListChannelApi,
      TodoListEnvelopeViewApi,
      TodoListEnvelopeContext
    >
  );
  todoList__init(association: Association, initArgs: TodoListInitArgs): Promise<void>;
  todoList__addItem(item: string): Promise<void>;
  todoList__getItems(): Promise<import("../api").Item[]>;
  todoList__markAllAsCompleted(): void;
}
//# sourceMappingURL=TodoListEnvelopeApiImpl.d.ts.map
