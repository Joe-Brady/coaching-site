import Image from "next/image";
import styles from "./logo-strip.module.css";

export const LogoStrip = () => {
  const logoList: { src: string; alt: string }[] = [
    { src: "/vogue.webp", alt: "Vogue logo" },
    { src: "/lloyds.webp", alt: "Lloyds logo" },
    { src: "/mns.webp", alt: "M&S logo" },
    { src: "/ukgov.webp", alt: "UK Government logo" },
    { src: "/ibm.webp", alt: "IBM logo" },
    { src: "/pret.webp", alt: "Pret logo" },
    { src: "/schroders.webp", alt: "Schroders logo" },
  ];

  return (
    <div className={styles.logoStrip}>
      {logoList.map(({ src, alt }) => (
        <div key={src} className={styles.imageContainer}>
          <Image src={src} alt={alt} fill objectFit="contain" />
        </div>
      ))}
    </div>
  );
};
