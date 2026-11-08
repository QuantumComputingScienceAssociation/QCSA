import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { ResearchBlog } from "./blogs";

/** Shared source of truth for research blog post presentation. */
export default function BlogPost({ post }: { post: ResearchBlog }) {
  return (
    <div className="min-h-screen bg-[#F3F8FF] flex flex-col">
      <Navbar />
      <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <a href="/research" className="text-sm font-semibold text-[#234285] hover:underline">
            ← Research projects
          </a>
          <header className="mb-10 mt-6 border-b border-[#234285]/15 pb-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#234285]/60">
              Research blog · {post.project}
            </p>
            <h1 className="text-3xl font-bold text-[#234285] sm:text-4xl">{post.title}</h1>
          </header>
          <div className="space-y-6 text-[#234285]/80">
            {/* Add post sections here. Figures are configured in blogs.ts. */}
            {post.figures.map((figure) => (
              <figure key={figure.src} className="space-y-2">
                <Image
                  src={figure.src}
                  alt={figure.alt}
                  width={1200}
                  height={800}
                  className="h-auto w-full rounded-xl"
                />
                {figure.caption && (
                  <figcaption className="text-sm text-[#234285]/60">{figure.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
