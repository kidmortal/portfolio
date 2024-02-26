import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const client = createClient();
  const documents = await client.getAllByType("page");
  return documents.map((doc) => ({
    slug: doc.uid,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const client = createClient();
  console.log(`fetching ${params.slug}`);
  const page = await client.getByUID("page", params.slug);
  return <SliceZone slices={page.data.slices} components={components} />;
}
