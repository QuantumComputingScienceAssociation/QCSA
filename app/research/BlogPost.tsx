import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { ResearchBlog } from "./blog-data";

function renderBlogText(text: string, post: ResearchBlog) {
  const pieces = text.split(/(\[\[ref:[\w-]+\]\]|https?:\/\/\S+)/g);
  return pieces.map((piece, index) => {
    const citation = piece.match(/^\[\[ref:([\w-]+)\]\]$/);
    if (citation) {
      const referenceIndex = post.references?.findIndex((reference) => reference.id === citation[1]) ?? -1;
      if (referenceIndex < 0) return piece;
      const reference = post.references![referenceIndex];
      return (
        <sup key={index} className="ml-0.5 text-xs">
          <a id={`citation-${reference.id}`} href={`#reference-${reference.id}`} className="font-semibold text-[#234285] hover:underline">
            {referenceIndex + 1}
          </a>
        </sup>
      );
    }
    if (/^https?:\/\//.test(piece)) {
      return <a key={index} href={piece} className="break-all underline underline-offset-2 hover:text-[#234285]">{piece}</a>;
    }
    return piece;
  });
}

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
            {post.articleTitle && (
              <h2 className="mt-5 text-2xl font-semibold leading-snug text-[#234285] sm:text-3xl">
                {post.articleTitle}
              </h2>
            )}
            {post.articleByline && (
              <p className="mt-4 text-base leading-relaxed">{post.articleByline}</p>
            )}
            {(post.articleAuthor || post.articleDate) && (
              <p className="mt-2 text-sm text-[#234285]/65">
                {[post.articleAuthor, post.articleDate].filter(Boolean).join(" · ")}
              </p>
            )}
          </header>
          <div className="space-y-6 text-[#234285]/80">
            {post.introductionHeading && (
              <section aria-labelledby="blog-introduction">
                <h2 id="blog-introduction" className="mb-4 text-2xl font-bold text-[#234285]">
                  {post.introductionHeading}
                </h2>
              </section>
            )}
            {post.content?.map((block, index) => {
              if (block.type === "paragraph") return <p key={index}>{renderBlogText(block.text, post)}</p>;
              if (block.type === "caption") {
                return <p key={index} className="text-sm leading-relaxed text-[#234285]/65">{block.text}</p>;
              }
              if (block.type === "figure") {
                return (
                  <figure key={`${block.src}-${index}`} className="space-y-2">
                    <Image src={block.src} alt={block.alt} width={1200} height={800} className="h-auto w-full" />
                    {block.caption && <figcaption className="text-sm text-[#234285]/65">{block.caption}</figcaption>}
                  </figure>
                );
              }
              if (block.type === "heading") {
                return block.level === 3 ? (
                  <h3 key={index} className="pt-2 text-xl font-semibold text-[#234285]">{block.text}</h3>
                ) : (
                  <h2 key={index} className="pt-6 text-2xl font-bold text-[#234285]">{block.text}</h2>
                );
              }
              return (
                <details key={index} className="ml-4 sm:ml-6">
                  <summary className="cursor-pointer text-[#234285] marker:text-[#234285]/60">
                    {block.summary}
                  </summary>
                  <p className="mt-4 leading-relaxed">{block.body}</p>
                </details>
              );
            })}
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
                {post.resultsContent && <p className="mt-4">{post.resultsContent}</p>}
              </section>
            )}
            {post.references && post.references.length > 0 && (
              <section aria-labelledby="blog-references" className="border-t border-[#234285]/15 pt-6">
                <h2 id="blog-references" className="mb-4 text-xl font-bold text-[#234285]">References</h2>
                <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed">
                  {post.references.map((reference) => (
                    <li key={reference.id} id={`reference-${reference.id}`} className="scroll-mt-8 pl-1">
                      {renderBlogText(reference.text, post)}{" "}
                      <a href={`#citation-${reference.id}`} aria-label="Back to citation" className="ml-1 text-[#234285] hover:underline">↩</a>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
