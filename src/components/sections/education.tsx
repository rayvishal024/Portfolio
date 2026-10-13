
"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { educationData } from "@/data/education";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Education() {
     const shouldReduceMotion = useReducedMotion();

     return (
          <Section
               id="education"
               aria-labelledby="education-title"
               className="border-t border-[var(--border)]"
               spacing="large"
          >
               <Container>
                    <motion.div
                         initial={shouldReduceMotion ? false : "hidden"}
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.2 }}
                         className="mb-12 max-w-3xl md:mb-16"
                    >
                         <motion.p
                              variants={shouldReduceMotion ? undefined : fadeUp}
                              className="font-mono text-xs tracking-[0.18em] text-[var(--accent)]"
                         >
                              {educationData.eyebrow}
                         </motion.p>

                         <motion.h2
                              id="education-title"
                              variants={shouldReduceMotion ? undefined : fadeUp}
                              className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl md:text-6xl"
                         >
                              {educationData.heading}
                         </motion.h2>
                    </motion.div>

                    <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                         <motion.div
                              variants={shouldReduceMotion ? undefined : staggerContainer}
                              initial={shouldReduceMotion ? false : "hidden"}
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.15 }}
                         >
                              <h3 className="mb-7 text-xl font-semibold tracking-tight">
                                   Education
                              </h3>

                              <div className="space-y-8">
                                   {educationData.education.map((item) => (
                                        <motion.article
                                             key={item.id}
                                             variants={shouldReduceMotion ? undefined : fadeUp}
                                             className="border-l-2 border-[var(--border)] pl-5"
                                        >
                                             <p className="font-mono text-xs text-black/50">
                                                  {item.period}
                                             </p>

                                             <h4 className="mt-3 text-lg font-semibold leading-snug">
                                                  {item.degree}
                                             </h4>

                                             <p className="mt-2 text-sm font-medium text-[var(--accent)]">
                                                  {item.institution}
                                             </p>

                                             <p className="mt-1 text-sm text-black/55">
                                                  {item.location}
                                             </p>

                                             <p className="mt-3 text-sm text-black/70">
                                                  {item.detail}
                                             </p>
                                        </motion.article>
                                   ))}
                              </div>
                         </motion.div>

                         <motion.div
                              variants={shouldReduceMotion ? undefined : staggerContainer}
                              initial={shouldReduceMotion ? false : "hidden"}
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.15 }}
                         >
                              <h3 className="mb-7 text-xl font-semibold tracking-tight">
                                   Achievements
                              </h3>

                              <div className="space-y-4">
                                   {educationData.achievements.map((achievement, index) => (
                                        <motion.article
                                             key={achievement.id}
                                             variants={shouldReduceMotion ? undefined : fadeUp}
                                             className="rounded-xl border border-[var(--border)] bg-white/50 p-5 transition-colors duration-300 hover:bg-white sm:p-6"
                                        >
                                             <p className="font-mono text-xs text-[var(--accent)]">
                                                  {String(index + 1).padStart(2, "0")}
                                             </p>

                                             <h4 className="mt-3 text-lg font-semibold leading-snug">
                                                  {achievement.title}
                                             </h4>

                                             <p className="mt-2 text-sm leading-7 text-black/60">
                                                  {achievement.description}
                                             </p>
                                        </motion.article>
                                   ))}
                              </div>
                         </motion.div>
                    </div>
               </Container>
          </Section>
     );
}
