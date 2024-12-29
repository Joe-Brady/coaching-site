import Link from "next/link";
import { ReactNode } from "react";
import styles from "./component.module.css";

type Props = {
  href: string;
  children: ReactNode;
};

export const LinkButton = ({ href, children }: Props) => {
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
};
