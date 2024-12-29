import { ReactNode } from "react";
import styles from "./component.module.css";

type Props = {
  image: ReactNode;
  text: ReactNode;
  className?: string;
};

export const ImageAndText = ({ image, text, className }: Props) => {
  return (
    <div className={`${styles.container} ${className ?? ""}`}>
      {image}
      {text}
    </div>
  );
};
