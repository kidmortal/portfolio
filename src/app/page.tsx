import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home");
  return (
    <main>
      <script
        async
        defer
        src="https://static.cdn.prismic.io/prismic.js?new=true&repo=kidmortal"
      ></script>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}
