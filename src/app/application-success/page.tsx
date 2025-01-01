import Image from "next/image";
import styles from "./page.module.css";

export default function ApplicationSuccess() {
  return (
    <main className={styles.maxWidthParent}>
      <div className={styles.maxWidthChild}>
        <div className={styles.success}>
          <Image src="/tick.svg" alt="Success tick" width={80} height={80} />
          <p className="h4">Application submitted</p>
          <p>Thank you for your interest! I will be in touch soon.</p>
        </div>
      </div>
    </main>
  );
}
