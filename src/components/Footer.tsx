import { site } from "../data/site";
import styles from "./Footer.module.css";

const contactLinks = [
  {
    label: "LinkedIn",
    href: site.links.linkedin,
    display: "linkedin.com/in/nicholas-battjes",
  },
  {
    label: "GitHub",
    href: site.links.github,
    display: "github.com/Battjmo",
  },
  {
    label: "Phone",
    href: site.links.phone,
    display: site.links.phoneDisplay,
  },
] as const;

export function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <h2>Get in touch</h2>
        <p className={styles.lead}>
          Open to conversations about engineering leadership, product work, and
          interesting problems.
        </p>
        <ul className={styles.links}>
          {contactLinks.map((link) => (
            <li key={link.label}>
              <span className={styles.label}>{link.label}</span>
              <a
                href={link.href}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {link.display}
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.copy}>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
