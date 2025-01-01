import { ReactNode } from "react";
import styles from "./component.module.css";
import Image from "next/image";

type Props = {
  children: ReactNode;
};

export const MulticolourSplash = ({ children }: Props) => {
  return (
    <div className={styles.splashContainer}>
      <div className={styles.gradient}>
        <Image src="/splash.avif" alt="Colour splash" fill />;
      </div>
      {children}
    </div>
  );
};
