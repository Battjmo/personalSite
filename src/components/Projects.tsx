import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section id="work" className={styles.section} aria-labelledby="work-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="work-heading">Selected work</h2>
          <p>Products and experiments I have shipped or contributed to.</p>
        </header>
        <ul className={styles.grid}>
          {projects.map((project, index) => (
            <li key={project.id}>
              <ProjectCard project={project} reversed={index % 2 === 1} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
