import { Tetrimino } from ".";
import { Point } from "../point";
import type { RotateDegree, TetriminoState, TetriminoStateMap } from ".";

const stateMap: TetriminoStateMap = new Map<RotateDegree, TetriminoState>([
  [0, [new Point(1, 0), new Point(1, 1), new Point(1, 2), new Point(1, 3)]],
  [90, [new Point(0, 2), new Point(1, 2), new Point(2, 2), new Point(3, 2)]],
  [180, [new Point(2, 0), new Point(2, 1), new Point(2, 2), new Point(2, 3)]],
  [270, [new Point(0, 1), new Point(1, 1), new Point(2, 1), new Point(3, 1)]],
]);

export class IMino extends Tetrimino {
  stateMap = stateMap;

  constructor() {
    super();
  }
}
