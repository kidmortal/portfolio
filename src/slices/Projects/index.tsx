import { Content } from "@prismicio/client";
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
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
    >
      <h1>{slice.primary.title}</h1>
      <h3>{slice.primary.description}</h3>
      <div className={styles.projectsContainer}>
        {slice.items.map((project) => {
          const technologies = project?.stack?.replace(" ", "").split(",");

          return (
            <div key={project.title} className={styles.project}>
              <img
                alt={project.cover.alt ?? ""}
                src={project.cover.url ?? ""}
              />
              <div className={styles.contentContainer}>
                <div className={styles.textContentContainer}>
                  <h1>{project.title}</h1>
                  <span>{project.description}</span>
                </div>
                <div></div>
                <span className={styles.stackContainer}>
                  {technologies?.map((tech) => <Logo key={tech} name={tech} />)}
                </span>
                <div className={styles.linksContainer}>
                  <PrismicNextLink
                    key={`${JSON.stringify(project.preview)}`}
                    field={project.preview}
                  >
                    <LinkIcon />
                    <span>Preview</span>
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
          );
        })}
      </div>
    </section>
  );
};

function Logo({ name }: { name: string }) {
  const selectedLogo = TechLogos[name] as any;

  if (selectedLogo) {
    return <Tooltip text={name}>{selectedLogo}</Tooltip>;
  } else {
    return "";
  }
}

export default Projects;
