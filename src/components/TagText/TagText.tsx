import styles from "./component.module.css";

type Props = {
  children: string;
};

export const TagText = ({ children }: Props) => {
  return <span className={styles.tagText}>{children}</span>;
};
