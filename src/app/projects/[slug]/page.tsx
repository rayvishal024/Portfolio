
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
     params: Promise<{ slug: string }>;
};

const statusLabels = {
     deployed: "Deployed",
     "in-development": "In development",
     "local-only": "Local development",
} as const;

export function generateStaticParams() {
     return projects.map((project) => ({
          slug: project.slug,
     }));
}

export default async function ProjectPage({
     params,
}: ProjectPageProps) {
     const { slug } = await params;
     const project = getProjectBySlug(slug);

     if (!project) {
          notFound();
     }

     return (
          <>
               <Navbar />

               <main className="flex-1">
                    <section className="py-16 md:py-24">
                         <Container>
                              <Link
                                   href="/#projects"
                                   className="inline-flex items-center gap-2 text-sm text-black/60 transition-colors hover:text-accent"
                              >
                                   <span aria-hidden="true">←</span>
                                   Back to projects
                              </Link>

                              <div className="mt-12 max-w-4xl">
                                   <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-wider text-black/55">
                                        <span>
                                             {project.category === "client"
                                                  ? "Client project"
                                                  : "Personal project"}
                                        </span>

                                        <span aria-hidden="true">/</span>

                                        <span>{statusLabels[project.status]}</span>
                                   </div>

                                   <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-7xl">
                                        {project.title}
                                   </h1>

                                   <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65 md:text-xl">
                                        {project.shortDescription}
                                   </p>
                              </div>

                              <div className="mt-12 grid gap-8 border-y border-[var(--border)] py-6 sm:grid-cols-2 lg:grid-cols-4">
                                   <div>
                                        <p className="text-xs font-mono uppercase tracking-wider text-black/45">
                                             Role
                                        </p>
                                        <p className="mt-2 text-sm font-medium">
                                             {project.role}
                                        </p>
                                   </div>

                                   <div>
                                        <p className="text-xs font-mono uppercase tracking-wider text-black/45">
                                             Timeline
                                        </p>
                                        <p className="mt-2 text-sm font-medium">
                                             {project.timeline}
                                        </p>
                                   </div>

                                   <div>
                                        <p className="text-xs font-mono uppercase tracking-wider text-black/45">
                                             Project type
                                        </p>
                                        <p className="mt-2 text-sm font-medium">
                                             {project.category === "client"
                                                  ? "Client work"
                                                  : "Personal work"}
                                        </p>
                                   </div>

                                   <div>
                                        <p className="text-xs font-mono uppercase tracking-wider text-black/45">
                                             Technologies
                                        </p>
                                        <p className="mt-2 text-sm font-medium">
                                             {project.stack.length} technologies
                                        </p>
                                   </div>
                              </div>

                              <div className="mt-12 flex flex-wrap gap-3">
                                   {project.links.live && (
                                        <a
                                             href={project.links.live}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--foreground)] px-6 text-sm font-medium text-white transition-opacity hover:opacity-80"
                                        >
                                             Visit live project ↗
                                        </a>
                                   )}

                                   {project.links.repository && (
                                        <a
                                             href={project.links.repository}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--border)] px-6 text-sm font-medium transition-colors hover:bg-white"
                                        >
                                             View source code ↗
                                        </a>
                                   )}
                              </div>
                         </Container>
                    </section>

                    <section className="border-t border-[var(--border)] py-16 md:py-20">
                         <Container>
                              <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-16">
                                   <div>
                                        <p className="font-mono text-xs uppercase tracking-wider text-black/45">
                                             01 / Overview
                                        </p>
                                        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                                             The project
                                        </h2>
                                   </div>

                                   <p className="max-w-3xl text-base leading-8 text-black/70 md:text-lg">
                                        {project.overview}
                                   </p>
                              </div>
                         </Container>
                    </section>

                    <section className="border-t border-[var(--border)] py-16 md:py-20">
                         <Container>
                              <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-16">
                                   <div>
                                        <p className="font-mono text-xs uppercase tracking-wider text-black/45">
                                             02 / Challenge
                                        </p>
                                        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                                             The problem
                                        </h2>
                                   </div>

                                   <p className="max-w-3xl text-base leading-8 text-black/70 md:text-lg">
                                        {project.caseStudy.problem}
                                   </p>
                              </div>
                         </Container>
                    </section>

                    <section className="border-t border-[var(--border)] py-16 md:py-20">
                         <Container>
                              <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-16">
                                   <div>
                                        <p className="font-mono text-xs uppercase tracking-wider text-black/45">
                                             03 / Approach
                                        </p>
                                        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                                             The solution
                                        </h2>
                                   </div>

                                   <p className="max-w-3xl text-base leading-8 text-black/70 md:text-lg">
                                        {project.caseStudy.solution}
                                   </p>
                              </div>
                         </Container>
                    </section>

                    <section className="border-t border-[var(--border)] py-16 md:py-20">
                         <Container>
                              <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-16">
                                   <div>
                                        <p className="font-mono text-xs uppercase tracking-wider text-black/45">
                                             04 / Engineering
                                        </p>
                                        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                                             My contributions
                                        </h2>
                                   </div>

                                   <ul className="max-w-3xl space-y-4">
                                        {project.caseStudy.contributions.map((item) => (
                                             <li
                                                  key={item}
                                                  className="flex gap-3 text-base leading-7 text-black/70"
                                             >
                                                  <span className="mt-1 text-accent" aria-hidden="true">
                                                       ↗
                                                  </span>
                                                  <span>{item}</span>
                                             </li>
                                        ))}
                                   </ul>
                              </div>
                         </Container>
                    </section>

                    <section className="border-t border-[var(--border)] py-16 md:py-20">
                         <Container>
                              <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-16">
                                   <div>
                                        <p className="font-mono text-xs uppercase tracking-wider text-black/45">
                                             05 / Technical details
                                        </p>
                                        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                                             Engineering highlights
                                        </h2>
                                   </div>

                                   <ul className="max-w-3xl space-y-4">
                                        {project.caseStudy.technicalHighlights.map((item) => (
                                             <li
                                                  key={item}
                                                  className="border-b border-[var(--border)] pb-4 text-base leading-7 text-black/70 last:border-0"
                                             >
                                                  {item}
                                             </li>
                                        ))}
                                   </ul>
                              </div>
                         </Container>
                    </section>

                    <section className="border-t border-[var(--border)] py-16 md:py-20">
                         <Container>
                              <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-16">
                                   <div>
                                        <p className="font-mono text-xs uppercase tracking-wider text-black/45">
                                             06 / Technology
                                        </p>
                                        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                                             Built with
                                        </h2>
                                   </div>

                                   <div className="flex flex-wrap content-start gap-2">
                                        {project.stack.map((technology) => (
                                             <span
                                                  key={technology}
                                                  className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm"
                                             >
                                                  {technology}
                                             </span>
                                        ))}
                                   </div>
                              </div>
                         </Container>
                    </section>

                    <section className="border-t border-[var(--border)] py-16 md:py-20">
                         <Container>
                              <div className="rounded-2xl bg-[var(--surface-dark)] p-6 text-[var(--foreground-dark)] sm:p-10 md:p-14">
                                   <p className="font-mono text-xs uppercase tracking-wider text-white/50">
                                        07 / Outcome
                                   </p>

                                   <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                                        What came out of it.
                                   </h2>

                                   <p className="mt-6 max-w-3xl leading-8 text-white/75">
                                        {project.caseStudy.outcome}
                                   </p>

                                   <Link
                                        href="/#projects"
                                        className="mt-8 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
                                   >
                                        Explore more projects <span aria-hidden="true">→</span>
                                   </Link>
                              </div>
                         </Container>
                    </section>
               </main>

               <Footer />
          </>
     );
}
