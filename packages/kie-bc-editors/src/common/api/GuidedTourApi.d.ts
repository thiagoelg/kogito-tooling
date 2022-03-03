import { Tutorial, UserInteraction } from "@kie-tools-core/guided-tour/dist/api";
export interface GuidedTourApi {
  refresh(userInteraction: UserInteraction): void;
  registerTutorial(tutorial: Tutorial): void;
  isEnabled(): boolean;
}
//# sourceMappingURL=GuidedTourApi.d.ts.map
