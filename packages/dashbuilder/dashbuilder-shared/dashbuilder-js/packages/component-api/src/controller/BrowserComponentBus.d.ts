import { ComponentMessage } from "../message";
import { ComponentBus } from "./ComponentBus";
export declare class BrowserComponentBus implements ComponentBus {
  private listener;
  private readonly messageListener;
  start(): void;
  send(componentId: string, message: ComponentMessage): void;
  setListener(onMessage: (message: ComponentMessage) => void): void;
  destroy(): void;
}
//# sourceMappingURL=BrowserComponentBus.d.ts.map
