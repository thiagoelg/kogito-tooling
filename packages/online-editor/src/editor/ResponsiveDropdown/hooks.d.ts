export declare type Breakpoint = "2xl" | "xl" | "lg" | "md" | "sm" | "xs";
export declare enum RelationToBreakpoint {
  Above = 0,
  Below = 1,
}
export declare function useWindowWidth(): number;
export declare function useWindowSizeRelationToBreakpoint(breakpoint: Breakpoint): RelationToBreakpoint;
//# sourceMappingURL=hooks.d.ts.map
