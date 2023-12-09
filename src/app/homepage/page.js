import styles from "./page.module.css";

import Button from "@/app/components/Button/Button";
import Cards from "@/app/components/Cards/Cards";

export default function Home() {
  return (
    <div className={styles.grid}>
      <div>
        <div className="w-[140px] flex justify-end">
          <Button text="Say Hello" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center  gap-5">
        <h1 className="text-7xl font-semibold text-main-blue shadow-outline-blue">
          <div className={styles.boxShadowMyName}>David Molizane</div>
        </h1>
        <h2 className="text-4xl font-light text-second-blue">
          Front-End Developer
        </h2>
      </div>
      <p className="text-4xl text-second-blue">My Resume</p>
      <div className={styles.cardsGrid}>
        <div className={styles.cardsGroupOne}>
          <Cards text="About Me" />
          <Cards text="Social Medias" />
        </div>
        <Cards text="My Projects" />
      </div>
    </div>
  );
}
