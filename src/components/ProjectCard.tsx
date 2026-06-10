import type { Project } from "../data/projects";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
  reversed?: boolean;
};

export function ProjectCard({ project, reversed = false }: ProjectCardProps) {
  return (
    <article
      className={`${styles.card} ${reversed ? styles.reversed : ""}`}
    >
      <a
        href={project.href}
        className={styles.media}
        style={
          project.imageBackground
            ? { background: project.imageBackground }
            : undefined
        }
        target="_blank"
        rel="noreferrer"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img src={project.image} alt="" loading="lazy" />
      </a>
      <div className={styles.content}>
        <h3>
          <a href={project.href} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        </h3>
        <p>{project.description}</p>
        <div className={styles.links}>
          <a href={project.href} target="_blank" rel="noreferrer">
            Visit
          </a>
          {project.repo ? (
            <a href={project.repo} target="_blank" rel="noreferrer">
              Source
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
