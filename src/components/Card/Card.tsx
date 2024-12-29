import { ReactNode } from "react";
import styles from "./card.module.css";

type Props = {
  children: ReactNode;
};

export const Card = ({ children }: Props) => {
  return <div className={styles.card}>{children}</div>;
};
