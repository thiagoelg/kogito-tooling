import { Rect, Tutorial, UserInteraction } from "./api";
declare class KogitoGuidedTour {
  private static instance?;
  private domUtils;
  private eventBus;
  private registeredTutorials;
  private onTearDown;
  private positionProvider;
  private constructor();
  setup(onTearDown?: () => void): void;
  teardown(): void;
  start(tutorialLabel: string): void;
  registerTutorial(tutorial: Tutorial): void;
  getRegisteredTutorials(): Tutorial[];
  onUserInteraction(userInteraction: UserInteraction): void;
  onPositionReceived(rect: Rect, parentRect?: Rect): void;
  triggerPositionProvider(selector: string): void;
  registerPositionProvider(positionProvider: (selector: string) => void): void;
  static getInstance(): KogitoGuidedTour;
}
export { KogitoGuidedTour };
//# sourceMappingURL=index.d.ts.map
