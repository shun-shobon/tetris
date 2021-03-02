import { Tetrimino } from ".";
import type { RotateDegree, TetriminoState, TetriminoStateMap } from ".";

const stateMap: TetriminoStateMap = new Map<RotateDegree, TetriminoState>([
  [
    0,
    [
      [true, false, false],
      [true, true, true],
      [false, false, false],
    ],
  ],
  [
    90,
    [
      [false, true, true],
      [false, true, false],
      [false, true, false],
    ],
  ],
  [
    180,
    [
      [false, false, false],
      [true, true, true],
      [false, false, true],
    ],
  ],
  [
    270,
    [
      [false, true, false],
      [false, true, false],
      [true, true, false],
    ],
  ],
]);

export class JMino extends Tetrimino {
  stateMap = stateMap;

  constructor() {
    super();
  }
}
