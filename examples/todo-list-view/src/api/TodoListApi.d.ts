import { Item } from "./TodoListEnvelopeApi";
export interface TodoListApi {
  addItem(item: string): Promise<void>;
  getItems(): Promise<Item[]>;
  markAllAsCompleted(): void;
}
//# sourceMappingURL=TodoListApi.d.ts.map
