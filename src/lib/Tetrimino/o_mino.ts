import { Tetrimino } from ".";
import type { RotateDegree, TetriminoState, TetriminoStateMap } from ".";

const stateMap: TetriminoStateMap = new Map<RotateDegree, TetriminoState>([
  [
    0,
    [
      [true, true],
      [true, true],
    ],
  ],
  [
    90,
    [
      [true, true],
      [true, true],
    ],
  ],
  [
    180,
    [
      [true, true],
      [true, true],
    ],
  ],
  [
    270,
    [
      [true, true],
      [true, true],
    ],
  ],
]);

export class OMino extends Tetrimino {
  stateMap = stateMap;

  constructor() {
    super();
  }
}
