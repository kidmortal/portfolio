import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Page({ params }: { params: { slug: string } }) {
  const client = createClient();
  try {
    const page = await client.getByUID("page", params.slug);
    console.log(`fetching ${params.slug}`);
    return <SliceZone slices={page.data.slices} components={components} />;
  } catch (error) {
    return (
      <div>
        <h3 style={{ color: "white" }}>
          Deu ruim, error {JSON.stringify(error)}
        </h3>
      </div>
    );
  }
}
