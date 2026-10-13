
"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { experienceData } from "@/data/experience";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Experience() {
     const shouldReduceMotion = useReducedMotion();

     return (
          <Section
               id="experience"
               aria-labelledby="experience-title"
               className="border-t border-[var(--border)]"
               spacing="large"
          >
               <Container>
                    <motion.div
                         variants={shouldReduceMotion ? undefined : staggerContainer}
                         initial={shouldReduceMotion ? false : "hidden"}
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.15 }}
                         className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20"
                    >
                         <div>
                              <motion.p
                                   variants={shouldReduceMotion ? undefined : fadeUp}
                                   className="font-mono text-xs tracking-[0.18em] text-[var(--accent)]"
                              >
                                   {experienceData.eyebrow}
                              </motion.p>

                              <motion.h2
                                   id="experience-title"
                                   variants={shouldReduceMotion ? undefined : fadeUp}
                                   className="mt-5 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl"
                              >
                                   {experienceData.heading}
                              </motion.h2>

                              <motion.p
                                   variants={shouldReduceMotion ? undefined : fadeUp}
                                   className="mt-6 max-w-sm text-base leading-7 text-black/60"
                              >
                                   Practical experience through client projects, collaboration, and
                                   hands-on software development.
                              </motion.p>
                         </div>

                         <div className="space-y-10">
                              {experienceData.entries.map((entry, index) => (
                                   <motion.article
                                        key={entry.id}
                                        variants={shouldReduceMotion ? undefined : fadeUp}
                                        className="relative border-l border-[var(--border)] pb-2 pl-6 sm:pl-8"
                                   >
                                        <span
                                             aria-hidden="true"
                                             className="absolute -left-[5px] top-1 size-[9px] rounded-full bg-[var(--accent)] ring-4 ring-[var(--background)]"
                                        />

                                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                             <p className="font-mono text-xs tracking-wide text-black/50">
                                                  {entry.period}
                                             </p>

                                             <span className="w-fit rounded-full border border-[var(--border)] px-3 py-1 text-xs text-black/60">
                                                  {entry.type}
                                             </span>
                                        </div>

                                        <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                                             {entry.role}
                                        </h3>

                                        <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                                             {entry.organization}
                                        </p>

                                        <p className="mt-4 text-sm leading-7 text-black/65 sm:text-base">
                                             {entry.description}
                                        </p>

                                        <ul className="mt-5 space-y-3">
                                             {entry.highlights.map((highlight) => (
                                                  <li
                                                       key={highlight}
                                                       className="flex gap-3 text-sm leading-6 text-black/65"
                                                  >
                                                       <span
                                                            aria-hidden="true"
                                                            className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                                                       />
                                                       <span>{highlight}</span>
                                                  </li>
                                             ))}
                                        </ul>

                                        {entry.technologies.length > 0 && (
                                             <div className="mt-5 flex flex-wrap gap-2">
                                                  {entry.technologies.map((technology) => (
                                                       <span
                                                            key={technology}
                                                            className="rounded-md bg-white/70 px-2.5 py-1.5 font-mono text-[11px] text-black/60"
                                                       >
                                                            {technology}
                                                       </span>
                                                  ))}
                                             </div>
                                        )}
                                   </motion.article>
                              ))}
                         </div>
                    </motion.div>
               </Container>
          </Section>
     );
}
