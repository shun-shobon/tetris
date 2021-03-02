import { Tetrimino } from ".";
import type { RotateDegree, TetriminoState, TetriminoStateMap } from ".";

const stateMap: TetriminoStateMap = new Map<RotateDegree, TetriminoState>([
  [
    0,
    [
      [false, false, true],
      [true, true, true],
      [false, false, false],
    ],
  ],
  [
    90,
    [
      [false, true, false],
      [false, true, false],
      [false, true, true],
    ],
  ],
  [
    180,
    [
      [false, false, false],
      [true, true, true],
      [true, false, false],
    ],
  ],
  [
    270,
    [
      [true, true, false],
      [false, true, false],
      [false, true, false],
    ],
  ],
]);

export class LMino extends Tetrimino {
  stateMap = stateMap;

  constructor() {
    super();
  }
}
