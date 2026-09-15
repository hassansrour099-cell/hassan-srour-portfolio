import { redirect } from "next/navigation";

export default async function BlogPostRedirect({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await params;
  redirect("/");
}
