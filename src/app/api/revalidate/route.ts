import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { createClient } from "@/prismicio";

export async function POST(req: Request) {
  const data = await req.json();
  if (data.secret === process.env.PRISMIC_WEBHOOK_KEY) {
    const revalidatedPaths = [];
    const client = createClient();
    revalidatePath("/");
    revalidatedPaths.push("/");
    const documents = await client.getAllByType("page");
    for await (const doc of documents) {
      const url = `${doc.uid}`;
      revalidatePath(url);
      revalidatedPaths.push(url);
    }
    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      revalidatedPaths,
    });
  }

  return NextResponse.json({
    revalidated: false,
    message: "invalid secret",
    secret: data.secret,
  });
}
