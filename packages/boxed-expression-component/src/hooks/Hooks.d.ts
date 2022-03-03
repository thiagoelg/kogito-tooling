import React from "react";
export declare function useContextMenuHandler(domEventTarget?: HTMLDivElement | Document): {
  contextMenuRef: React.RefObject<HTMLDivElement>;
  contextMenuXPos: string;
  contextMenuYPos: string;
  contextMenuVisibility: boolean;
  setContextMenuVisibility: (value: ((prevState: boolean) => boolean) | boolean) => void;
  targetElement?: EventTarget;
};
//# sourceMappingURL=Hooks.d.ts.map
