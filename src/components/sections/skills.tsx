
"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { skillsData } from "@/data/skills";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Skills() {
     const shouldReduceMotion = useReducedMotion();

     return (
          <Section
               id="skills"
               aria-labelledby="skills-title"
               className="border-t border-[var(--border)]"
               spacing="large"
          >
               <Container>
                    <motion.div
                         initial={shouldReduceMotion ? false : "hidden"}
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.2 }}
                         className="mb-12 max-w-2xl md:mb-16"
                    >
                         <motion.p
                              variants={shouldReduceMotion ? undefined : fadeUp}
                              className="font-mono text-xs tracking-[0.18em] text-[var(--accent)]"
                         >
                              {skillsData.eyebrow}
                         </motion.p>

                         <motion.h2
                              id="skills-title"
                              variants={shouldReduceMotion ? undefined : fadeUp}
                              className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl md:text-6xl"
                         >
                              {skillsData.heading}
                         </motion.h2>

                         <motion.p
                              variants={shouldReduceMotion ? undefined : fadeUp}
                              className="mt-5 max-w-xl text-base leading-7 text-black/60 sm:text-lg"
                         >
                              {skillsData.description}
                         </motion.p>
                    </motion.div>

                    <motion.div
                         variants={shouldReduceMotion ? undefined : staggerContainer}
                         initial={shouldReduceMotion ? false : "hidden"}
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.1 }}
                         className="grid gap-4 sm:grid-cols-2"
                    >
                         {skillsData.categories.map((category, index) => (
                              <motion.article
                                   key={category.id}
                                   variants={shouldReduceMotion ? undefined : fadeUp}
                                   className="rounded-2xl border border-[var(--border)] bg-white/50 p-6 transition-colors duration-300 hover:bg-white sm:p-8"
                              >
                                   <div className="flex items-start justify-between gap-4">
                                        <div>
                                             <h3 className="text-xl font-semibold tracking-tight">
                                                  {category.title}
                                             </h3>

                                             <p className="mt-2 text-sm leading-6 text-black/55">
                                                  {category.description}
                                             </p>
                                        </div>

                                        <span className="font-mono text-xs text-[var(--accent)]">
                                             {String(index + 1).padStart(2, "0")}
                                        </span>
                                   </div>

                                   <div className="mt-6 flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                             <span
                                                  key={skill}
                                                  className="rounded-md border border-[var(--border)] px-3 py-2 text-sm text-black/70 transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                                             >
                                                  {skill}
                                             </span>
                                        ))}
                                   </div>
                              </motion.article>
                         ))}
                    </motion.div>
               </Container>
          </Section>
     );
}
