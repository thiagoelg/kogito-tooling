import { ComponentMessage } from "../message";
import { DashbuilderComponentController } from "./DashbuilderComponentController";
export interface InternalComponentDispatcher {
  componentController: DashbuilderComponentController | undefined;
  init(): void;
  sendMessage(componentMessage: ComponentMessage): void;
}
//# sourceMappingURL=InternalComponentListener.d.ts.map
