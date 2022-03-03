import { EnvelopeBus } from "@kie-tools-core/envelope-bus/dist/api";
import { TodoListChannelApi, TodoListEnvelopeApi } from "../api";
export declare function init(args: {
  container: HTMLElement;
  bus: EnvelopeBus;
}): Promise<
  import("@kie-tools-core/envelope-bus/dist/envelope").EnvelopeClient<TodoListEnvelopeApi, TodoListChannelApi>
>;
//# sourceMappingURL=TodoListEnvelope.d.ts.map
