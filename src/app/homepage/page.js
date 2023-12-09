import styles from "./page.module.css";

import Button from "@/app/components/Button/Button";
import Cards from "@/app/components/Cards/Cards";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.grid}>
      <div>
        <div className="w-[140px] flex justify-end">
          <Button text="Say Hello" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center  gap-5">
        <h1 className="text-6xl font-semibold text-main-blue shadow-outline-blue">
          <div className={styles.boxShadowMyName}>David Molizane</div>
        </h1>
        <h2 className="text-3xl font-light text-second-blue">
          Front-End Developer
        </h2>
      </div>
      <p className="text-3xl text-second-blue">My Resume</p>
      <div className={styles.cardsGrid}>
        <div className={styles.cardsGroupOne}>
          <Link href="/homepage/about-me">
            <Cards text="About Me" />
          </Link>
          <Link href="/homepage/skills">
            <Cards text="Social Medias" />
          </Link>
        </div>
        <div className={styles.cardsGroupTwo}>
          <Link href="">
            <Cards text="My Projects" />
          </Link>
          <Link href="">
            <Cards text="My Contributions" />
          </Link>
        </div>
      </div>
    </div>
  );
}
