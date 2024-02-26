import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.scss";
import { PrismicNextLink } from "@prismicio/next";
import { GithubIcon } from "@/assets/github";
import { LinkIcon } from "@/assets/link";

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
            <img alt={project.cover.alt ?? ""} src={project.cover.url ?? ""} />
            <div className={styles.contentContainer}>
              <h3>{project.title}</h3>
              <span>{project.description}</span>
              <div className={styles.linksContainer}>
                <PrismicNextLink
                  key={`${JSON.stringify(project.preview)}`}
                  field={project.preview}
                >
                  <LinkIcon />
                  <span>Live Preview</span>
                </PrismicNextLink>
                <PrismicNextLink
                  key={`${JSON.stringify(project.github)}`}
                  field={project.github}
                >
                  <GithubIcon />
                  <span>Github</span>
                </PrismicNextLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
