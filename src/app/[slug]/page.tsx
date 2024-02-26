import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Page({ params }: { params: { slug: string } }) {
  const client = createClient();
  const page = await client.getByUID("page", params.slug);
  console.log(`fetching ${params.slug}`);
  return <SliceZone slices={page.data.slices} components={components} />;
}
