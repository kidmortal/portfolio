import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/global.scss";
import styles from "./styles.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kidmortal portfolio wow such dev",
  description: "Very dev wow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          async
          defer
          src="https://static.cdn.prismic.io/prismic.js?new=true&repo=kidmortal"
        ></script>
        <div className={styles.container}>
          <div className={styles.pageContainer}>{children}</div>
        </div>
      </body>
    </html>
  );
}
