import { ReactNode } from "react";
import styles from "./component.module.css";

type Props = {
  children: ReactNode;
};

export const MulticolourSplash = ({ children }: Props) => {
  return <div className={styles.gradient}>{children}</div>;
};
