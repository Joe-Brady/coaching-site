import Image from "next/image";
import styles from "./page.module.css";
import { LinkButton } from "@/components/LinkButton/LinkButton";
import { TagText } from "@/components/TagText/TagText";
import { ImageAndText } from "@/components/ImageAndText/ImageAndText";
import { MulticolourSplash } from "@/components/MulticolourSplash/MulticolourSplash";

export default function Home() {
  return (
    <div className={styles.page}>
      <MulticolourSplash>
        <div className={styles.maxWidthParent}>
          <div className={`${styles.maxWidthChild} ${styles.hero}`}>
            <div>
              <span className="h4">{"2025 intake"}</span>
              <ImageAndText
                className={styles.heroTitle}
                image={
                  <Image
                    src="/engineering.svg"
                    alt="Engineering icon"
                    width={100}
                    height={100}
                    priority
                  />
                }
                text={
                  <h1 className="h2">
                    {"Web Software Engineer"}
                    <br />
                    {"Career Kickstart"}
                  </h1>
                }
              />
              <p className="h4">
                {"Personal coaching with Joe Brady,"}
                <br />
                {"Principal Software Engineer"}
              </p>
            </div>
            <div className={styles.heroCallToActionContainer}>
              <TagText>{"3 places available"}</TagText>
              <TagText>{"Applications close soon"}</TagText>
              <LinkButton href="#">{"Apply now"}</LinkButton>
            </div>
          </div>
        </div>
      </MulticolourSplash>

      <main className={styles.main}></main>
      {/* <footer className={styles.footer}>
        © 2025 Joe Brady Software Limited.
      </footer> */}
    </div>
  );
}
