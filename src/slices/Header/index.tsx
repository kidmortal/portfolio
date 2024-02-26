import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.scss";
import { When } from "@/components/When";

/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

/**
 * Component for "Header" Slices.
 */
const Header = ({ slice }: HeaderProps): JSX.Element => {
  const { logo } = slice.primary;
  console.log(slice.items[0].link);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
    >
      <img alt={logo.alt} src={logo.url} height={50} width={50} />
      <div className={styles.linksContainer}>
        {slice.items.map((item) => (
          <PrismicNextLink
            key={`${JSON.stringify(item.link)}`}
            field={item.link}
          >
            <When value={!!item.icon.url}>
              <img
                alt={item.icon.alt}
                src={item.icon.url}
                height={25}
                width={25}
              />
            </When>
            {item.label}
          </PrismicNextLink>
        ))}
      </div>
    </section>
  );
};

export default Header;
