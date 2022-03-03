import { Rect } from "../../api";
export declare const calculatePositionStyle: (
  position: string,
  rect?: Rect | undefined
) =>
  | {
      left: string;
      top: string;
      transform: string;
    }
  | {
      left: number;
      top: number;
      transform: string;
    };
//# sourceMappingURL=PositionCalculator.d.ts.map
