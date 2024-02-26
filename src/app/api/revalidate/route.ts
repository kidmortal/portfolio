import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { createClient } from "@/prismicio";

export async function POST(req: Request) {
  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    paths: ["we good bro"],
  });
  // const client = createClient();
  // const data = await req.json();
  // if (data.documents) {
  //   const revalidatedPaths: string[] = [];

  //   for await (const doc of data.documents) {
  //     const page = await client.getByID(doc);
  //     if (page) {
  //       const slug = page.slu;
  //       if (slug === "home") {
  //         revalidatePath("/");
  //       } else {
  //         revalidatePath(slug);
  //       }
  //       revalidatedPaths.push(slug);
  //     }
  //   }
  //   return NextResponse.json({
  //     revalidated: true,
  //     now: Date.now(),
  //     paths: revalidatedPaths,
  //   });
  // }

  // return NextResponse.json({ revalidated: false, message: "no slug provided" });
}
