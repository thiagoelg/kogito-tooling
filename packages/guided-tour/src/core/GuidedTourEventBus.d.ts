import { Rect, UserInteraction } from "../api";
export declare type EventLabel = "GuidedTour.startTutorial" | "GuidedTour.userInteraction" | "GuidedTour.newPosition";
export declare class GuidedTourEventBus {
  private isEnabled;
  private queuedEvents;
  enableBus(): void;
  onUserInteraction(userInteraction: UserInteraction): void;
  onPositionReceived(rect: Rect): void;
  startTutorial(tutorialLabel: string): void;
  private triggerQueuedEvents;
  private createEvent;
  private dispatchEvent;
  private isBusEnabled;
}
//# sourceMappingURL=GuidedTourEventBus.d.ts.map
