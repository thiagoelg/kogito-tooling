import { UserInteraction } from ".";
export declare class BlockMode {
  userInteraction: UserInteraction;
  allowedSelectors: string[];
  constructor(userInteraction: UserInteraction, allowedSelectors: string[]);
}
export declare class AutoMode {
  delay: number;
  constructor(delay: number);
}
export declare class DemoMode {}
export declare class SubTutorialMode {
  label: string;
  constructor(label: string);
}
export declare type Mode = BlockMode | AutoMode | DemoMode | SubTutorialMode;
//# sourceMappingURL=Mode.d.ts.map
