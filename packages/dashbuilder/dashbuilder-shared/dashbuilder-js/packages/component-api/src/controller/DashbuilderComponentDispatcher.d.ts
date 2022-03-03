import { ComponentMessage } from "../message";
import { ComponentBus } from "./ComponentBus";
import { DashbuilderComponentController } from "./DashbuilderComponentController";
import { InternalComponentDispatcher } from "./InternalComponentListener";
export declare class DashbuilderComponentDispatcher implements InternalComponentDispatcher {
  private readonly bus;
  readonly componentController: DashbuilderComponentController;
  private componentId;
  constructor(bus: ComponentBus, componentController: DashbuilderComponentController);
  private readonly messageDispatcher;
  isAutoReady(): boolean;
  init(): void;
  sendMessage(componentMessage: ComponentMessage): void;
  stop(): void;
}
//# sourceMappingURL=DashbuilderComponentDispatcher.d.ts.map
