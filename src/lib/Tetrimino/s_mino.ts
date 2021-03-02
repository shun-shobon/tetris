import { Tetrimino } from ".";
import type { RotateDegree, TetriminoState, TetriminoStateMap } from ".";

const stateMap: TetriminoStateMap = new Map<RotateDegree, TetriminoState>([
  [
    0,
    [
      [false, true, true],
      [true, true, false],
      [false, false, false],
    ],
  ],
  [
    90,
    [
      [false, true, false],
      [false, true, true],
      [false, false, true],
    ],
  ],
  [
    180,
    [
      [false, false, false],
      [false, true, true],
      [true, true, false],
    ],
  ],
  [
    270,
    [
      [true, false, false],
      [true, true, false],
      [false, true, false],
    ],
  ],
]);

export class SMino extends Tetrimino {
  stateMap = stateMap;

  constructor() {
    super();
  }
}
