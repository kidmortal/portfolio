import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.scss";

/**
 * Props for `TechStack`.
 */
export type TechStackProps = SliceComponentProps<Content.TechStackSlice>;

/**
 * Component for "TechStack" Slices.
 */
const TechStack = ({ slice }: TechStackProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
    >
      <h1>{slice.primary.title}</h1>
      <span>{slice.primary.description}</span>
      <div className={styles.iconsGrid}>
        {slice.items.map(({ icon }) => (
          <img
            key={icon.url}
            alt={icon.alt ?? "default-alt"}
            src={icon.url ?? ""}
            width={120}
            height={120}
          />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
