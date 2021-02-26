import type { FC } from "react";

import styles from "./App.module.scss";

const App: FC = () => {
  return (
    <>
      <h1 className={styles["title"]}>Hello, world!</h1>
    </>
  );
};

export default App;
