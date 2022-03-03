export interface TodoListEnvelopeApi {
  todoList__init(association: Association, initArgs: TodoListInitArgs): Promise<void>;
  todoList__addItem(item: string): Promise<void>;
  todoList__getItems(): Promise<Item[]>;
  todoList__markAllAsCompleted(): void;
}
export interface Association {
  origin: string;
  envelopeServerId: string;
}
export interface TodoListInitArgs {
  user: string;
}
export interface Item {
  label: string;
  completed: boolean;
}
//# sourceMappingURL=TodoListEnvelopeApi.d.ts.map
