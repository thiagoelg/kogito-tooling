import { UserInteraction } from "./UserInteraction";
import { Tutorial } from "./Tutorial";
export interface GuidedTourChannelApi {
  kogitoGuidedTour_guidedTourUserInteraction(userInteraction: UserInteraction): void;
  kogitoGuidedTour_guidedTourRegisterTutorial(tutorial: Tutorial): void;
}
//# sourceMappingURL=GuidedTourChannelApi.d.ts.map
