import { render, cleanup } from "@testing-library/react";

import Test from "../../../src/components/Test";

afterEach(cleanup);

describe("Test component", () => {
  it("Test test", () => {
    const { getByTestId } = render(<Test text="Hello, world!" />);

    expect(getByTestId("test-text")).toHaveTextContent("Hello, world!");
  });
});
