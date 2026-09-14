import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.scss";

/**
 * Props for `TechStack`.
 */
export type TechStackProps = SliceComponentProps<Content.TechStackSlice>;

/** Derive a readable label from the icon alt text or, failing that, its filename. */
function labelFor(icon: Content.TechStackSliceDefaultItem["icon"]): string {
  if (icon.alt) return icon.alt;
  const file = icon.url?.split("/").pop()?.split("?")[0] ?? "";
  const name = file
    .replace(/^[0-9a-f]{24}_/i, "")
    .replace(/\.(svg|png|jpe?g|webp)$/i, "")
    .replace(/(vscode-icons_file-type-|logos_|-original|-wordmark|-plain|-official)/g, "")
    .replace(/[-_]+/g, " ")
    .trim();
  return name ? name.charAt(0).toUpperCase() + name.slice(1) : "";
}

/**
 * Component for "TechStack" Slices.
 */
const TechStack = ({ slice }: TechStackProps): JSX.Element => {
  return (
    <section
      id="stack"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
    >
      <div className={styles.heading}>
        <h2>{slice.primary.title}</h2>
        {slice.primary.description && <p>{slice.primary.description}</p>}
      </div>

      <ul className={styles.grid}>
        {slice.items.map(({ icon }, i) => {
          const label = labelFor(icon);
          return (
            <li key={`${icon.url}-${i}`} className={styles.tech}>
              <img alt={label} src={icon.url ?? ""} loading="lazy" />
              {label && <span>{label}</span>}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TechStack;
