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
            <h1 className="text-3xl font-bold text-[#234285] sm:text-4xl">{post.title}</h1>
          </header>
          <div className="space-y-6 text-[#234285]/80">
            {post.introductionHeading && (
              <section aria-labelledby="blog-introduction">
                <h2 id="blog-introduction" className="mb-4 text-2xl font-bold text-[#234285]">
                  {post.introductionHeading}
                </h2>
              </section>
            )}
            {post.content?.map((block, index) => block.type === "paragraph" ? (
              <p key={index}>{block.text}</p>
            ) : (
              <details key={index} className="ml-4 sm:ml-6">
                <summary className="cursor-pointer text-[#234285] marker:text-[#234285]/60">
                  {block.summary}
                </summary>
                <p className="mt-4 leading-relaxed">{block.body}</p>
              </details>
            ))}
            {post.methodologyOverview && (
              <section aria-labelledby="methodology-overview" className="space-y-4 pt-6">
                <h2 id="methodology-overview" className="text-2xl font-bold text-[#234285]">
                  Methodology Overview
                </h2>
                <Image
                  src={post.methodologyOverview.src}
                  alt={post.methodologyOverview.alt}
                  width={1600}
                  height={1120}
                  className="h-auto w-full"
                />
              </section>
            )}
            {post.resultsHeading && (
              <section aria-labelledby="blog-results" className="pt-6">
                <h2 id="blog-results" className="text-2xl font-bold text-[#234285]">
                  {post.resultsHeading}
                </h2>
              </section>
            )}
            {/* Figures are configured in blogs.ts. */}
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
