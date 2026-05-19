import { site } from "../data/site";
import styles from "./Header.module.css";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          {site.name.split(" ")[0]}
        </a>
        <nav className={styles.nav} aria-label="Primary">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
