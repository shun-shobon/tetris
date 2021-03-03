import {
  Tetrimino,
  IMino,
  JMino,
  LMino,
  OMino,
  SMino,
  TMino,
  ZMino,
} from "../../src/lib/Tetrimino";

describe("Tetrimino", () => {
  it("Can get now state", () => {
    const iMino: Tetrimino = new IMino();
    const jMino: Tetrimino = new JMino();
    const lMino: Tetrimino = new LMino();
    const oMino: Tetrimino = new OMino();
    const sMino: Tetrimino = new SMino();
    const tMino: Tetrimino = new TMino();
    const zMino: Tetrimino = new ZMino();

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
    expect(iState).toEqual([
      [false, false, false, false],
      [true, true, true, true],
      [false, false, false, false],
      [false, false, false, false],
    ]);

    // ██░░░░
    // ██████
    // ░░░░░░
    expect(jState).toEqual([
      [true, false, false],
      [true, true, true],
      [false, false, false],
    ]);

    // ░░░░██
    // ██████
    // ░░░░░░
    expect(lState).toEqual([
      [false, false, true],
      [true, true, true],
      [false, false, false],
    ]);

    // ████
    // ████
    expect(oState).toEqual([
      [true, true],
      [true, true],
    ]);

    // ░░████
    // ████░░
    // ░░░░░░
    expect(sState).toEqual([
      [false, true, true],
      [true, true, false],
      [false, false, false],
    ]);

    // ░░██░░
    // ██████
    // ░░░░░░
    expect(tState).toEqual([
      [false, true, false],
      [true, true, true],
      [false, false, false],
    ]);

    // ████░░
    // ░░████
    // ░░░░░░
    expect(zState).toEqual([
      [true, true, false],
      [false, true, true],
      [false, false, false],
    ]);
  });
  it("Can get rotated state", () => {
    const iMino: Tetrimino = new IMino();
    const jMino: Tetrimino = new JMino();
    const lMino: Tetrimino = new LMino();
    const oMino: Tetrimino = new OMino();
    const sMino: Tetrimino = new SMino();
    const tMino: Tetrimino = new TMino();
    const zMino: Tetrimino = new ZMino();

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
    expect(iState).toEqual([
      [false, false, true, false],
      [false, false, true, false],
      [false, false, true, false],
      [false, false, true, false],
    ]);

    // ░░██░░
    // ░░██░░
    // ████░░
    expect(jState).toEqual([
      [false, true, false],
      [false, true, false],
      [true, true, false],
    ]);

    // ░░██░░
    // ░░██░░
    // ░░████
    expect(lState).toEqual([
      [false, true, false],
      [false, true, false],
      [false, true, true],
    ]);

    // ████
    // ████
    expect(oState).toEqual([
      [true, true],
      [true, true],
    ]);

    // ░░██░░
    // ░░████
    // ░░░░██
    expect(sState).toEqual([
      [false, true, false],
      [false, true, true],
      [false, false, true],
    ]);

    // ░░██░░
    // ████░░
    // ░░██░░
    expect(tState).toEqual([
      [false, true, false],
      [true, true, false],
      [false, true, false],
    ]);

    // ░░░░██
    // ░░████
    // ░░██░░
    expect(zState).toEqual([
      [false, false, true],
      [false, true, true],
      [false, true, false],
    ]);
  });
  it("Can rotate state", () => {
    const iMino: Tetrimino = new IMino();
    const jMino: Tetrimino = new JMino();
    const lMino: Tetrimino = new LMino();
    const oMino: Tetrimino = new OMino();
    const sMino: Tetrimino = new SMino();
    const tMino: Tetrimino = new TMino();
    const zMino: Tetrimino = new ZMino();

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

export {};
