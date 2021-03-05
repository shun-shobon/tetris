import { isUndefined } from "../../utils/validator";
import Point from "../point";

export type RotateDegree = 0 | 90 | 180 | 270;
export type RotateDirection = "right" | "left";
export type TetriminoState = Point[];
export type TetriminoStateMap = ReadonlyMap<RotateDegree, TetriminoState>;

export interface ITetrimino {
  getState(direction?: RotateDirection): TetriminoState;
  rotate(direction: RotateDirection): TetriminoState;
}
export abstract class Tetrimino implements ITetrimino {
  protected abstract readonly stateMap: TetriminoStateMap;

  private rotateDegree: RotateDegree;

  protected constructor() {
    this.rotateDegree = 0;
  }

  private getRotateDegree(direction: RotateDirection): RotateDegree {
    let degree = this.rotateDegree;
    switch (direction) {
      case "right":
        degree += 90;
        break;
      case "left":
        degree -= 90;
        break;
    }
    if (degree < 0) degree = 270;
    if (270 < degree) degree = 0;

    return degree as RotateDegree;
  }

  public getState(direction?: RotateDirection): TetriminoState {
    const degree = isUndefined(direction)
      ? this.rotateDegree
      : this.getRotateDegree(direction);
    const state = this.stateMap.get(degree);
    if (isUndefined(state)) throw new Error("Cannot get state");
    return state;
  }

  public rotate(direction: RotateDirection): TetriminoState {
    this.rotateDegree = this.getRotateDegree(direction);
    return this.getState();
  }
}

export { IMino } from "./i_mino";
export { JMino } from "./j_mino";
export { LMino } from "./l_mino";
export { OMino } from "./o_mino";
export { SMino } from "./s_mino";
export { TMino } from "./t_mino";
export { ZMino } from "./z_mino";
