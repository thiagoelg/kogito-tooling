import { ComponentMessage } from "../message";
export interface ComponentBus {
  start(): void;
  send(componentId: string, message: ComponentMessage): void;
  setListener(onMessage: (message: ComponentMessage) => void): void;
  destroy(): void;
}
//# sourceMappingURL=ComponentBus.d.ts.map
