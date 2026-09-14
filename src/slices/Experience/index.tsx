import { Content, isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.scss";

/**
 * Props for `Experience`.
 */
export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

/**
 * Component for "Experience" Slices.
 */
const Experience = ({ slice }: ExperienceProps): JSX.Element => {
  return (
    <section
      id="experience"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
    >
      <div className={styles.heading}>
        <h2>{slice.primary.title}</h2>
        {slice.primary.description && <p>{slice.primary.description}</p>}
      </div>

      <ol className={styles.timeline}>
        {slice.items.map((job, i) => {
          const stack = job.stack
            ?.split(",")
            .map((s) => s.trim())
            .filter(Boolean);

          return (
            <li key={`${job.company}-${i}`} className={styles.item}>
              <div className={styles.meta}>
                <span className={styles.period}>{job.period}</span>
                {job.location && <span className={styles.location}>{job.location}</span>}
              </div>

              <div className={styles.body}>
                <h3 className={styles.role}>
                  {job.role}
                  {job.company && (
                    <>
                      <span className={styles.at}> · </span>
                      {isFilled.link(job.link) ? (
                        <PrismicNextLink field={job.link} className={styles.company}>
                          {job.company}
                        </PrismicNextLink>
                      ) : (
                        <span className={styles.company}>{job.company}</span>
                      )}
                    </>
                  )}
                </h3>
                {job.summary && <p className={styles.summary}>{job.summary}</p>}
                {stack && stack.length > 0 && (
                  <ul className={styles.stack}>
                    {stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Experience;
