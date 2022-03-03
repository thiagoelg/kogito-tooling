import { KogitoEditorChannelApi } from "@kie-tools-core/editor/dist/api";
import { MessageBusClientApi } from "@kie-tools-core/envelope-bus/dist/api";
export interface KogitoCommandRegistry<T> {
  register(id: string, command: T): void;
  peek(): T | null;
  pop(): T | null;
  isEmpty(): boolean;
  getCommands(): T[];
  clear(): void;
  setMaxSize(size: number): void;
}
export declare class DefaultKogitoCommandRegistry<T> implements KogitoCommandRegistry<T> {
  private readonly channelApi;
  private maxStackSize;
  private commands;
  private undoneCommands;
  constructor(channelApi: MessageBusClientApi<KogitoEditorChannelApi>);
  private onNewCommand;
  register(id: string, command: T): void;
  peek(): T | null;
  pop(): T | null;
  isEmpty(): boolean;
  getCommands(): T[];
  clear(): void;
  setMaxSize(size: number): void;
  getUndoneCommands(): string[];
}
//# sourceMappingURL=KogitoCommandRegistry.d.ts.map
