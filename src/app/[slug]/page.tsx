import { createClient } from "@/prismicio";

export default async function Page({ params: { slug } }: any) {
  const client = createClient();
  const page = await client.getByUID("teste", slug);
  console.log(page);
  return <p>Post: slug</p>;
}
