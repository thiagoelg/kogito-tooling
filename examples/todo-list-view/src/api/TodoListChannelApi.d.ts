import { SharedValueProvider } from "@kie-tools-core/envelope-bus/dist/api";
export interface TodoListChannelApi {
  todoList__itemRemoved(item: string): void;
  todoList__potentialNewItem(): SharedValueProvider<string>;
}
//# sourceMappingURL=TodoListChannelApi.d.ts.map
