import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.scss";
import { PrismicNextLink } from "@prismicio/next";
import { GithubIcon } from "@/assets/Github";
import { LinkIcon } from "@/assets/Link";
import { TechLogos } from "@/assets/TechLogos";
import { Tooltip } from "@/components/Tooltip";

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
      id="projects"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
    >
      <div className={styles.heading}>
        <h2>{slice.primary.title}</h2>
        {slice.primary.description && <p>{slice.primary.description}</p>}
      </div>

      <ul className={styles.grid}>
        {slice.items.map((project, i) => {
          const technologies = project.stack
            ?.split(",")
            .map((t) => t.trim().toLowerCase())
            .filter(Boolean);

          return (
            <li key={`${project.title}-${i}`} className={styles.card}>
              {isFilled.image(project.cover) && (
                <div className={styles.cover}>
                  <img
                    alt={project.cover.alt ?? project.title ?? ""}
                    src={project.cover.url}
                    loading="lazy"
                  />
                </div>
              )}

              <div className={styles.body}>
                <h3 className={styles.title}>{project.title}</h3>
                {project.description && (
                  <p className={styles.description}>{project.description}</p>
                )}

                <div className={styles.footer}>
                  <div className={styles.stack}>
                    {technologies?.map((tech) => <Logo key={tech} name={tech} />)}
                  </div>
                  <div className={styles.links}>
                    {isFilled.link(project.preview) && (
                      <PrismicNextLink field={project.preview} className={styles.link}>
                        <LinkIcon />
                        <span>Live</span>
                      </PrismicNextLink>
                    )}
                    {isFilled.link(project.github) && (
                      <PrismicNextLink field={project.github} className={styles.link}>
                        <GithubIcon />
                        <span>Code</span>
                      </PrismicNextLink>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

function Logo({ name }: { name: string }) {
  const selectedLogo = TechLogos[name as keyof typeof TechLogos];
  if (!selectedLogo) return null;
  return <Tooltip text={name}>{selectedLogo}</Tooltip>;
}

export default Projects;
