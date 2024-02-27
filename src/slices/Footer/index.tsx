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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
    >
      <div className={styles.linksContainer}>
        {slice.items.map((item) => (
          <PrismicNextLink
            key={`${JSON.stringify(item.link)}`}
            field={item.link}
          >
            {item.label}
          </PrismicNextLink>
        ))}
      </div>
      <div className={styles.descriptionContainer}>
        <PrismicRichText field={slice.primary.description} />
      </div>
    </section>
  );
};

export default Footer;
