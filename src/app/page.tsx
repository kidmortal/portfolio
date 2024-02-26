import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import Head from "next/head";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home");
  return (
    <main>
      <Head>
        <title>{prismic.asText(page.data.titulos)}</title>
      </Head>
      <h1>{prismic.asText(page.data.titulos)}</h1>
      <span>bom dia</span>
      <SliceZone slices={page.data.body} components={components} />
    </main>
  );
}
