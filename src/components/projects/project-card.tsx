
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { ProjectData } from "@/data/projects/types";

type ProjectCardProps = {
     project: ProjectData;
     index: number;
};

const statusLabels = {
     deployed: "Deployed",
     "in-development": "In development",
     "local-only": "Local development",
} as const;

export function ProjectCard({ project, index }: ProjectCardProps) {
     const shouldReduceMotion = useReducedMotion();

     return (
          <motion.article
               initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
               whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.15 }}
               transition={{
                    duration: shouldReduceMotion ? 0 : 0.5,
                    delay: shouldReduceMotion ? 0 : (index % 2) * 0.1,
                    ease: [0.22, 1, 0.36, 1],
               }}
               whileHover={shouldReduceMotion ? undefined : { y: -4 }}
               className="group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-white/60 p-6 transition-colors duration-300 hover:border-black/20 hover:bg-white sm:p-8"
          >
               <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs tracking-wider text-black/45">
                         {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-black/65">
                         {statusLabels[project.status]}
                    </span>
               </div>

               <div className="mt-8">
                    <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
                         {project.category === "client" ? "Client project" : "Personal project"}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                         {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-black/65 sm:text-base">
                         {project.shortDescription}
                    </p>
               </div>

               <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.slice(0, 5).map((technology) => (
                         <span
                              key={technology}
                              className="rounded-md bg-[var(--background)] px-2.5 py-1.5 font-mono text-[11px] text-black/65"
                         >
                              {technology}
                         </span>
                    ))}

                    {project.stack.length > 5 && (
                         <span className="rounded-md bg-[var(--background)] px-2.5 py-1.5 font-mono text-[11px] text-black/50">
                              +{project.stack.length - 5}
                         </span>
                    )}
               </div>

               <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--border)] pt-6 mt-8">
                    <Link
                         href={`/projects/${project.slug}`}
                         className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent)]"
                    >
                         View case study
                         <span
                              aria-hidden="true"
                              className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                         >
                              →
                         </span>
                    </Link>

                    {project.links.live && (
                         <a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-black/55 transition-colors hover:text-[var(--accent)]"
                         >
                              Live preview ↗
                         </a>
                    )}

                    {project.links.repository && (
                         <a
                              href={project.links.repository}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-black/55 transition-colors hover:text-[var(--accent)]"
                         >
                              Source code ↗
                         </a>
                    )}
               </div>
          </motion.article>
     );
}
