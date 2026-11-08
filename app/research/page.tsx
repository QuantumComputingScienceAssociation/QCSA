import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { researchProjects } from "./projects";
import { researchTeam } from "./team";
import TeamHeadshot from "./TeamHeadshot";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#F3F8FF] flex flex-col">
      <Navbar />
      <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <header className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-[#234285] md:text-5xl">Research</h1>
            <p className="mx-auto max-w-2xl text-lg text-[#234285]/70">
              QCSA hosts research projects that investigate questions ranging from VQE benchmarking to Josephson junctions.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#234285]/70">
              If you are interested in joining or recruiting PhD students, masters students, and undergrads for your own research projects, please email{" "}
              <a className="font-semibold text-[#234285] underline underline-offset-4 hover:text-blue-700" href="mailto:research@qcsa.org">
                research@qcsa.org
              </a>.
            </p>
          </header>
          <section aria-labelledby="current-projects">
            <h2 id="current-projects" className="mb-6 text-2xl font-bold text-[#234285]">
              Current Research Projects
            </h2>
            <div className="divide-y divide-[#234285]/20 border-y border-[#234285]/20">
              {researchProjects.map((project) => (
                <article key={project.blogSlug} className="flex items-center gap-5 py-7 sm:gap-8 sm:py-8">
                  <div className="relative h-20 w-20 shrink-0 sm:h-24 sm:w-24">
                    <Image src={project.image} alt={project.imageAlt} fill sizes="96px" className="object-contain" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-[#234285]">{project.title}</h3>
                    <p className="mb-4 text-[#234285]/70">{project.description}</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
                      <a href={project.paperUrl} target="_blank" rel="noreferrer" className="text-[#234285] hover:text-blue-700">
                        {project.paperLabel} link ↗
                      </a>
                      <a href={`/research/blog/${project.blogSlug}`} className="text-[#234285] hover:text-blue-700">
                        Project blog →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section aria-labelledby="research-team" className="mt-14">
            <h2 id="research-team" className="mb-6 text-2xl font-bold text-[#234285]">
              Research Team
            </h2>
            <div className="grid gap-x-12 gap-y-8 border-y border-[#234285]/20 py-6 sm:grid-cols-2 sm:gap-y-10">
              {researchTeam.map((member) => {
                return (
                  <article key={member.name} className="flex items-center gap-5 py-3 sm:gap-6">
                    <TeamHeadshot name={member.name} stem={member.headshot} />
                    <div>
                      <h3 className="text-lg font-bold text-[#234285]">{member.name}</h3>
                      <p className="mt-1 text-[#234285]/70">{member.role}</p>
                      {member.blurb && <p className="mt-2 max-w-3xl text-[#234285]/70">{member.blurb}</p>}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
