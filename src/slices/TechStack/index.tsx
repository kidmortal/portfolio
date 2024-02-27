import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.scss";
import { Tooltip } from "@/components/Tooltip";

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
          <Tooltip key={icon.url} text={icon.alt ?? ""}>
            <img
              alt={icon.alt ?? "default-alt"}
              src={icon.url ?? ""}
              width={120}
              height={120}
            />
          </Tooltip>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
