import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("projects");
  return (
    <main>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}
