import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { createClient } from "@/prismicio";
import "@/styles/global.scss";
import styles from "./styles.module.scss";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getSingle("home").catch(() => null);

  const title = home?.data.meta_title || "Allan Falcão · Full Stack Software Engineer";
  const description =
    home?.data.meta_description ||
    "Full Stack Software Engineer with 9+ years of experience in React, TypeScript, Next.js and NestJS.";
  const image = home?.data.meta_image?.url;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

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
