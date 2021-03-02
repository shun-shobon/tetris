import { Tetrimino } from ".";
import type { RotateDegree, TetriminoState, TetriminoStateMap } from ".";

const stateMap: TetriminoStateMap = new Map<RotateDegree, TetriminoState>([
  [
    0,
    [
      [false, false, false, false],
      [true, true, true, true],
      [false, false, false, false],
      [false, false, false, false],
    ],
  ],
  [
    90,
    [
      [false, false, true, false],
      [false, false, true, false],
      [false, false, true, false],
      [false, false, true, false],
    ],
  ],
  [
    180,
    [
      [false, false, false, false],
      [false, false, false, false],
      [true, true, true, true],
      [false, false, false, false],
    ],
  ],
  [
    270,
    [
      [false, true, false, false],
      [false, true, false, false],
      [false, true, false, false],
    ],
  ],
]);

export class IMino extends Tetrimino {
  stateMap = stateMap;

  constructor() {
    super();
  }
}
