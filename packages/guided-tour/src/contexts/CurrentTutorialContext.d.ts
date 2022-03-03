/// <reference types="react" />
import { UserInteraction, Tutorial, Rect } from "../api";
export interface CurrentTutorialContextType {
  currentTutorial?: Tutorial;
  currentStep: number;
  completedStep: number;
  currentRefElementPosition?: Rect;
  isNegativeReinforcementStateEnabled: boolean;
  isHighlightLayerEnabled: boolean;
  latestUserInteraction?: UserInteraction;
  setCurrentTutorial: (tutorial?: Tutorial) => void;
  setCurrentStep: (index: number) => void;
  setCompletedStep: (index: number) => void;
  setCurrentRefElementPosition: (rect?: Rect) => void;
  setIsNegativeReinforcementStateEnabled: (isEnabled: boolean) => void;
  setIsHighlightLayerEnabled: (isEnabled: boolean) => void;
  setLatestUserInteraction: (userInteraction: UserInteraction) => void;
}
export declare const CurrentTutorialContext: import("react").Context<CurrentTutorialContextType>;
//# sourceMappingURL=CurrentTutorialContext.d.ts.map
