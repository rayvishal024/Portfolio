
"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/projects/project-card";
import { featuredProjects } from "@/data/projects";
import { fadeUp } from "@/lib/animations";

export function Projects() {
     const shouldReduceMotion = useReducedMotion();

     return (
          <Section
               id="projects"
               aria-labelledby="projects-title"
               className="border-t border-[var(--border)]"
               spacing="large"
          >
               <Container>
                    <motion.div
                         initial={shouldReduceMotion ? false : "hidden"}
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.2 }}
                         className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between"
                    >
                         <div>
                              <motion.p
                                   variants={shouldReduceMotion ? undefined : fadeUp}
                                   className="font-mono text-xs tracking-[0.18em] text-[var(--accent)]"
                              >
                                   SELECTED WORK
                              </motion.p>

                              <motion.h2
                                   id="projects-title"
                                   variants={shouldReduceMotion ? undefined : fadeUp}
                                   className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl md:text-6xl"
                              >
                                   Projects with purpose.
                              </motion.h2>
                         </div>

                         <motion.p
                              variants={shouldReduceMotion ? undefined : fadeUp}
                              className="max-w-md text-base leading-7 text-black/60"
                         >
                              Client work and personal projects exploring practical software,
                              backend engineering, and thoughtful product development.
                         </motion.p>
                    </motion.div>

                    <div className="grid gap-5 md:grid-cols-2">
                         {featuredProjects.map((project, index) => (
                              <ProjectCard
                                   key={project.slug}
                                   project={project}
                                   index={index}
                              />
                         ))}
                    </div>
               </Container>
          </Section>
     );
}
