import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.scss";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const Footer = ({ slice }: FooterProps): JSX.Element => {
  return (
    <footer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
    >
      <nav className={styles.links} aria-label="Footer">
        {slice.items.map((item, i) => (
          <PrismicNextLink key={`${item.label}-${i}`} field={item.link} className={styles.link}>
            {item.label}
          </PrismicNextLink>
        ))}
      </nav>
      <div className={styles.description}>
        <PrismicRichText field={slice.primary.description} />
      </div>
    </footer>
  );
};

export default Footer;
