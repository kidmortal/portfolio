import { Content, isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.scss";
import { GithubIcon } from "@/assets/Github";
import { LinkedinIcon, MailIcon, FileIcon, PinIcon } from "@/assets/Icons";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const { eyebrow, name, headline, summary, location, linkedin, github, resume, email } =
    slice.primary;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
    >
      <div className={styles.content}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1 className={styles.name}>{name}</h1>
        {headline && <p className={styles.headline}>{headline}</p>}
        {summary && <p className={styles.summary}>{summary}</p>}

        <div className={styles.actions}>
          {isFilled.link(linkedin) && (
            <PrismicNextLink field={linkedin} className={styles.primaryButton}>
              <LinkedinIcon /> LinkedIn
            </PrismicNextLink>
          )}
          {isFilled.link(github) && (
            <PrismicNextLink field={github} className={styles.button}>
              <GithubIcon /> GitHub
            </PrismicNextLink>
          )}
          {isFilled.link(resume) && (
            <PrismicNextLink field={resume} className={styles.button}>
              <FileIcon /> Resume
            </PrismicNextLink>
          )}
          {email && (
            <a href={`mailto:${email}`} className={styles.button}>
              <MailIcon /> Email
            </a>
          )}
        </div>

        {location && (
          <span className={styles.location}>
            <PinIcon /> {location}
          </span>
        )}
      </div>


      {slice.items.length > 0 && (
        <ul className={styles.stats}>
          {slice.items.map((stat, i) => (
            <li key={`${stat.value}-${i}`} className={styles.stat}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Hero;
