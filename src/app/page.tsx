import Image from "next/image";
import styles from "./page.module.css";
import { LinkButton } from "@/components/LinkButton/LinkButton";
import { TagText } from "@/components/TagText/TagText";
import { ImageAndText } from "@/components/ImageAndText/ImageAndText";
import { MulticolourSplash } from "@/components/MulticolourSplash/MulticolourSplash";
import { SummaryInfo } from "@/components/SummaryInfo/SummaryInfo";

export default function Home() {
  return (
    <div>
      <MulticolourSplash>
        <div className={styles.maxWidthParent}>
          <div className={`${styles.maxWidthChild} ${styles.hero}`}>
            <div>
              <span className="h3">{"2025 intake"}</span>
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
                  <h1>
                    {"Web Software Engineer"}
                    <br />
                    {"Career Kickstart"}
                  </h1>
                }
              />
              <p className="h3">
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

      <main className={styles.maxWidthParent}>
        <div className={styles.maxWidthChild}>
          <div className={styles.summaryInfoGrid}>
            <SummaryInfo
              titleIcon={{
                src: "/code-editor.svg",
                alt: "Code editor icon",
              }}
              titleText="Learn how to code. Properly."
              bodyLines={[
                "Crafting and structuring code",
                "Architecture and system design",
                "Using the latest tools and frameworks",
              ]}
            />
            <SummaryInfo
              titleIcon={{
                src: "/heart.svg",
                alt: "Heart icon",
              }}
              titleText="Get a job that you love."
              bodyLines={[
                "Finding opportunities",
                "Acing interviews",
                "Navigating career paths",
              ]}
            />
            <SummaryInfo
              titleIcon={{
                src: "/plant-vase.svg",
                alt: "Plant vase icon",
              }}
              titleText="Hone your craft."
              bodyLines={[
                "Move faster with continuous mentoring",
                "Receive code reviews and feedback",
                "Learn more valuable skills",
              ]}
            />
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        © 2025 Joe Brady Software Limited.
      </footer> */}
    </div>
  );
}
