import type { FC } from "react";

type Props = {
  text: string;
};
const Test: FC<Props> = ({ text }) => <div data-testid="test-text">{text}</div>;

export default Test;
