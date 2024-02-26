import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home");
  console.log("get home");
  return <SliceZone slices={page.data.slices} components={components} />;
}
