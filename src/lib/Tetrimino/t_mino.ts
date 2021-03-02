import { Tetrimino } from ".";
import type { RotateDegree, TetriminoState, TetriminoStateMap } from ".";

const stateMap: TetriminoStateMap = new Map<RotateDegree, TetriminoState>([
  [
    0,
    [
      [false, true, false],
      [true, true, true],
      [false, false, false],
    ],
  ],
  [
    90,
    [
      [false, true, false],
      [false, true, true],
      [false, true, false],
    ],
  ],
  [
    180,
    [
      [false, false, false],
      [true, true, true],
      [false, true, false],
    ],
  ],
  [
    270,
    [
      [false, true, false],
      [true, true, false],
      [false, true, false],
    ],
  ],
]);

export class TMino extends Tetrimino {
  stateMap = stateMap;

  constructor() {
    super();
  }
}
