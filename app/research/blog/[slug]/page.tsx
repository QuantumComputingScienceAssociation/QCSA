import { notFound } from "next/navigation";
import BlogPost from "../../BlogPost";
import { researchBlogs } from "../../blogs";

export function generateStaticParams() {
  return Object.keys(researchBlogs).map((slug) => ({ slug }));
}

export default async function ResearchBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchBlogs[slug];
  if (!post) notFound();
  return <BlogPost post={post} />;
}
