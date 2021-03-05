import {
  IMino,
  JMino,
  LMino,
  OMino,
  SMino,
  TMino,
  ZMino,
} from "../../src/lib/tetrimino";
import type { ITetrimino, TetriminoState } from "../../src/lib/tetrimino";

const pointsToMatrix = (points: TetriminoState): (0 | 1)[][] => {
  const matrix: (0 | 1)[][] = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  points.forEach(({ row, col }) => {
    matrix[row][col] = 1;
  });

  return matrix;
};

describe("Tetrimino", () => {
  it("Can get now state", () => {
    const iMino: ITetrimino = new IMino();
    const jMino: ITetrimino = new JMino();
    const lMino: ITetrimino = new LMino();
    const oMino: ITetrimino = new OMino();
    const sMino: ITetrimino = new SMino();
    const tMino: ITetrimino = new TMino();
    const zMino: ITetrimino = new ZMino();

    const iState = iMino.getState();
    const jState = jMino.getState();
    const lState = lMino.getState();
    const oState = oMino.getState();
    const sState = sMino.getState();
    const tState = tMino.getState();
    const zState = zMino.getState();

    // ░░░░░░░░
    // ████████
    // ░░░░░░░░
    // ░░░░░░░░
    expect(pointsToMatrix(iState)).toEqual([
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);

    // ██░░░░░░
    // ██████░░
    // ░░░░░░░░
    // ░░░░░░░░
    expect(pointsToMatrix(jState)).toEqual([
      [1, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);

    // ░░░░██░░
    // ██████░░
    // ░░░░░░░░
    // ░░░░░░░░
    expect(pointsToMatrix(lState)).toEqual([
      [0, 0, 1, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);

    // ░░░░░░░░
    // ░░████░░
    // ░░████░░
    // ░░░░░░░░
    expect(pointsToMatrix(oState)).toEqual([
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ]);

    // ░░████░░
    // ████░░░░
    // ░░░░░░░░
    // ░░░░░░░░
    expect(pointsToMatrix(sState)).toEqual([
      [0, 1, 1, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);

    // ░░██░░░░
    // ██████░░
    // ░░░░░░░░
    // ░░░░░░░░
    expect(pointsToMatrix(tState)).toEqual([
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);

    // ████░░░░
    // ░░████░░
    // ░░░░░░░░
    // ░░░░░░░░
    expect(pointsToMatrix(zState)).toEqual([
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  });
  it("Can get rotated state", () => {
    const iMino: ITetrimino = new IMino();
    const jMino: ITetrimino = new JMino();
    const lMino: ITetrimino = new LMino();
    const oMino: ITetrimino = new OMino();
    const sMino: ITetrimino = new SMino();
    const tMino: ITetrimino = new TMino();
    const zMino: ITetrimino = new ZMino();

    const iState = iMino.getState("right");
    const jState = jMino.getState("left");
    const lState = lMino.getState("right");
    const oState = oMino.getState("left");
    const sState = sMino.getState("right");
    const tState = tMino.getState("left");
    const zState = zMino.getState("right");

    // ░░░░██░░
    // ░░░░██░░
    // ░░░░██░░
    // ░░░░██░░
    expect(pointsToMatrix(iState)).toEqual([
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
    ]);

    // ░░██░░░░
    // ░░██░░░░
    // ████░░░░
    // ░░░░░░░░
    expect(pointsToMatrix(jState)).toEqual([
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ]);

    // ░░██░░░░
    // ░░██░░░░
    // ░░████░░
    // ░░░░░░░░
    expect(pointsToMatrix(lState)).toEqual([
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ]);

    // ░░░░░░░░
    // ░░████░░
    // ░░████░░
    // ░░░░░░░░
    expect(pointsToMatrix(oState)).toEqual([
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ]);

    // ░░██░░░░
    // ░░████░░
    // ░░░░██░░
    // ░░░░░░░░
    expect(pointsToMatrix(sState)).toEqual([
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ]);

    // ░░██░░░░
    // ████░░░░
    // ░░██░░░░
    // ░░░░░░░░
    expect(pointsToMatrix(tState)).toEqual([
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ]);

    // ░░░░██░░
    // ░░████░░
    // ░░██░░░░
    // ░░░░░░░░
    expect(pointsToMatrix(zState)).toEqual([
      [0, 0, 1, 0],
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ]);
  });
  it("Can rotate state", () => {
    const iMino: ITetrimino = new IMino();
    const jMino: ITetrimino = new JMino();
    const lMino: ITetrimino = new LMino();
    const oMino: ITetrimino = new OMino();
    const sMino: ITetrimino = new SMino();
    const tMino: ITetrimino = new TMino();
    const zMino: ITetrimino = new ZMino();

    const iState = iMino.getState("right");
    const jState = jMino.getState("left");
    const lState = lMino.getState("right");
    const oState = oMino.getState("left");
    const sState = sMino.getState("right");
    const tState = tMino.getState("left");
    const zState = zMino.getState("right");

    const iRotatedState = iMino.rotate("right");
    const jRotatedState = jMino.rotate("left");
    const lRotatedState = lMino.rotate("right");
    const oRotatedState = oMino.rotate("left");
    const sRotatedState = sMino.rotate("right");
    const tRotatedState = tMino.rotate("left");
    const zRotatedState = zMino.rotate("right");

    expect(iState).toEqual(iRotatedState);
    expect(jState).toEqual(jRotatedState);
    expect(lState).toEqual(lRotatedState);
    expect(oState).toEqual(oRotatedState);
    expect(sState).toEqual(sRotatedState);
    expect(tState).toEqual(tRotatedState);
    expect(zState).toEqual(zRotatedState);
  });
});
