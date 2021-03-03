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
  it.todo("Can get rotated state");
  it.todo("Can rotate state");
});

export {};
