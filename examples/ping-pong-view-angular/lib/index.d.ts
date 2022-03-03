import { NgElement, WithProperties } from "@angular/elements";
import { ContainerType } from "@kie-tools-core/envelope/dist/api";
import "@kie-tools-examples/ping-pong-view-angular/dist/wc";
export declare const pingPongEnvelopViewRenderDiv: (container: HTMLElement, envelopeId: string) => Promise<void>;
declare global {
  interface HTMLElementTagNameMap {
    "ping-pong-angular": NgElement &
      WithProperties<{
        containerType: ContainerType;
        envelopeid: string;
      }>;
  }
}
//# sourceMappingURL=index.d.ts.map
