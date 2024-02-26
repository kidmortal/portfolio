import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.scss";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
    >
      <h1>{slice.primary.title}</h1>
      <h3>{slice.primary.description}</h3>
      <div className={styles.projectsContainer}>
        {slice.items.map((project) => (
          <div key={project.title} className={styles.project}>
            <img
              alt={project.cover.alt ?? ""}
              src={project.cover.url ?? ""}
              height={25}
              width={25}
            />
            <h3>{project.title}</h3>
            <span>{project.description}</span>
            <PrismicNextLink
              key={`${JSON.stringify(project.preview)}`}
              field={project.preview}
            >
              Live Preview
            </PrismicNextLink>
            <PrismicNextLink
              key={`${JSON.stringify(project.github)}`}
              field={project.github}
            >
              Github
            </PrismicNextLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
