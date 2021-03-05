import { Tetrimino } from ".";
import Point from "../point";
import type { RotateDegree, TetriminoState, TetriminoStateMap } from ".";

const stateMap: TetriminoStateMap = new Map<RotateDegree, TetriminoState>([
  [0, [new Point(0, 0), new Point(0, 1), new Point(1, 1), new Point(1, 2)]],
  [90, [new Point(0, 2), new Point(1, 1), new Point(1, 2), new Point(2, 1)]],
  [180, [new Point(1, 0), new Point(1, 1), new Point(2, 1), new Point(2, 2)]],
  [270, [new Point(0, 1), new Point(1, 0), new Point(1, 1), new Point(2, 0)]],
]);

export class ZMino extends Tetrimino {
  stateMap = stateMap;

  constructor() {
    super();
  }
}
