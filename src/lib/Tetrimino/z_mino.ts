import { Tetrimino } from ".";
import type { RotateDegree, TetriminoState, TetriminoStateMap } from ".";

const stateMap: TetriminoStateMap = new Map<RotateDegree, TetriminoState>([
  [
    0,
    [
      [true, true, false],
      [false, true, true],
      [false, false, false],
    ],
  ],
  [
    90,
    [
      [false, false, true],
      [false, true, true],
      [false, true, false],
    ],
  ],
  [
    180,
    [
      [false, false, false],
      [true, true, false],
      [false, true, true],
    ],
  ],
  [
    270,
    [
      [false, true, false],
      [true, true, false],
      [true, false, false],
    ],
  ],
]);

export class ZMino extends Tetrimino {
  stateMap = stateMap;

  constructor() {
    super();
  }
}
