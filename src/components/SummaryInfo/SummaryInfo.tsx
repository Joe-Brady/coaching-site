import styles from "./component.module.css";
import { ImageAndText } from "../ImageAndText/ImageAndText";
import Image from "next/image";

type Props = {
  titleIcon: { src: string; alt: string };
  titleText: string;
  bodyLines: string[];
};

export const SummaryInfo = ({ titleIcon, titleText, bodyLines }: Props) => {
  return (
    <div>
      <ImageAndText
        image={
          <Image
            src={titleIcon.src}
            alt={titleIcon.alt}
            width={40}
            height={40}
          />
        }
        text={<h2>{titleText}</h2>}
      />
      <div className={styles.body}>
        {bodyLines.map((bodyLine, index) => (
          <p
            key={`summaryInfoBodyLine-${index}`}
            className={`m ${styles.bodyLine}`}
          >
            {bodyLine}
          </p>
        ))}
      </div>
    </div>
  );
};
