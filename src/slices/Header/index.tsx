"use client";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.scss";
import { When } from "@/components/When";
import { useState } from "react";
import cn from "classnames";
import { BurgerMenuIcon } from "@/assets/BurgerMenu";

/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

/**
 * Component for "Header" Slices.
 */
const Header = ({ slice }: HeaderProps): JSX.Element => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { logo } = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
    >
      <When value={!!logo.url}>
        <img alt={logo.alt ?? ""} src={logo.url ?? ""} height={50} width={50} />
      </When>

      <div className={styles.hideOnMobile}>
        <div className={styles.linksContainer}>
          {slice.items.map((item) => (
            <PrismicNextLink
              key={`${JSON.stringify(item.link)}`}
              field={item.link}
            >
              <When value={!!item.icon.url}>
                <img
                  alt={item.icon.alt ?? ""}
                  src={item.icon.url ?? ""}
                  height={25}
                  width={25}
                />
              </When>
              {item.label}
            </PrismicNextLink>
          ))}
        </div>
      </div>
      <div className={styles.hideOnDesktop}>
        <div
          className={styles.iconContainer}
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <BurgerMenuIcon />
        </div>
        <div className={cn(styles.drawer, { [styles.openDrawer]: drawerOpen })}>
          {slice.items.map((item) => (
            <PrismicNextLink
              key={`${JSON.stringify(item.link)}`}
              field={item.link}
            >
              <When value={!!item.icon.url}>
                <img
                  alt={item.icon.alt ?? ""}
                  src={item.icon.url ?? ""}
                  height={25}
                  width={25}
                />
              </When>
              {item.label}
            </PrismicNextLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
