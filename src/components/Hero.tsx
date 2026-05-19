import { site } from "../data/site";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Portfolio</p>
        <h1 id="hero-heading" className={styles.title}>
          {site.name}
        </h1>
        <p className={styles.tagline}>{site.tagline}</p>
        <div className={styles.actions}>
          <a href="#work" className={styles.primary}>
            View work
          </a>
          <a href={site.links.linkedin} className={styles.secondary} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
