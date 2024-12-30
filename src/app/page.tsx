import Image from "next/image";
import styles from "./page.module.css";
import { LinkButton } from "@/components/LinkButton/LinkButton";
import { TagText } from "@/components/TagText/TagText";
import { MulticolourSplash } from "@/components/MulticolourSplash/MulticolourSplash";
import { SummaryInfo } from "@/components/SummaryInfo/SummaryInfo";
import { Card } from "@/components/Card/Card";
import { Button } from "@/components/Button/Button";
import { ImageAndText } from "@/components/ImageAndText/ImageAndText";
import { LogoStrip } from "@/components/LogoStrip/LogoStrip";

export default function Home() {
  return (
    <div>
      <MulticolourSplash>
        <div className={styles.maxWidthParent}>
          <div className={`${styles.maxWidthChild} ${styles.hero}`}>
            <div>
              <ImageAndText
                image={
                  <Image
                    src="/engineering.svg"
                    alt="Engineering icon"
                    width={40}
                    height={40}
                    priority
                  />
                }
                text={<span className="h3">{"2025 intake"}</span>}
              />

              <h1 className={styles.heroTitle}>
                {"Web Software Engineer"}
                <br />
                {"Career Kickstart"}
              </h1>

              <p className="h3">
                {"Personal coaching with Joe Brady,"}
                <br />
                {"Principal Software Engineer"}
              </p>
            </div>
            <div className={styles.heroCallToActionContainer}>
              <TagText>{"3 places available"}</TagText>
              <TagText>{"Applications close soon"}</TagText>
              <TagText>{"Free consultation"}</TagText>
              <LinkButton href="#apply-now">{"Apply now"}</LinkButton>
            </div>

            <div className={styles.profileImage}>
              <Image
                src="/joe-headshot.webp"
                alt="Photo of Joe"
                width={160}
                height={160}
                priority
              />
            </div>
          </div>
        </div>
      </MulticolourSplash>

      <main className={styles.maxWidthParent}>
        <div className={styles.maxWidthChild}>
          <div className={styles.logoStripContainer}>
            <LogoStrip />
          </div>

          <div className={styles.profileAndSummaryGrid}>
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
                  "Negotiating a great salary",
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

            <div className={styles.profile}>
              <Card>
                <h2 className="mb4">Hi!</h2>
                <p>
                  {
                    "I'm Joe, a Principal Software Engineer specialising in web tech (Typescript, React, NodeJS, web infrastructure and databases)."
                  }
                </p>
                <p>
                  {
                    "Over the past decade, I have led projects across a diverse range of industries including Fortune 500 companies, governments, and startups."
                  }
                </p>
                <p>
                  {
                    "I have also mentored many early-stage engineers as part of my work who have since found success in top positions such as Head of Engineering at a startup, or Engineering Advocate at Amazon."
                  }
                </p>
                <p className="bold">
                  {"Now, you can access this same career kickstart."}
                </p>
                <p>
                  {
                    "The coaching that I provide is completely one-to-one and tailored to your goals. However, because this is a personal service that I provide alongside my full-time work in the industry, I can only take on three students per year. Applications for the 2025 intake are open from now until the 31st January."
                  }
                </p>
                <p>
                  {"Apply now to get a "}
                  <span className="bold">
                    {"free, no-commitment initial consultation"}
                  </span>
                  {" to discuss your personal requirements."}
                </p>
                <p>{"I look forward to hearing from you!"}</p>
                <p>{"Joe"}</p>

                <div className="mt4">
                  <LinkButton href="#apply-now">{"Apply now"}</LinkButton>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className={styles.formContainer}>
          <h1 id="apply-now">Apply now</h1>
          <form
            className={styles.form}
            name="application"
            method="POST"
            data-netlify="true"
          >
            <label>
              {"Name"}
              <input type="text" name="name" />
            </label>
            <label>
              {"Email address"}
              <input type="text" name="email" />
            </label>
            <label>
              {"Phone number (optional)"}
              <input type="text" name="phone" />
            </label>
            <label>
              {"Message"}
              <textarea
                name="message"
                rows={10}
                placeholder={`E.g. "I am looking for my first job in the industry. So far I have attended a bootcamp and want to refine my skills."`}
              />
            </label>

            <Button type="submit">Submit</Button>
          </form>

          {/* <table></table> */}
        </div>
      </main>

      <footer className={styles.footer}>
        © 2025 Joe Brady Software Limited.
      </footer>
    </div>
  );
}
