
"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { aboutData } from "@/data/about";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function About() {
     const shouldReduceMotion = useReducedMotion();

     return (
          <Section
               id="about"
               aria-labelledby="about-title"
               className="border-t border-[var(--border)]"
          >
               <Container>
                    <motion.div
                         variants={shouldReduceMotion ? undefined : staggerContainer}
                         initial={shouldReduceMotion ? false : "hidden"}
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.2 }}
                         className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:gap-24"
                    >
                         <div>
                              <motion.p
                                   variants={shouldReduceMotion ? undefined : fadeUp}
                                   className="font-mono text-xs tracking-[0.18em] text-[var(--accent)]"
                              >
                                   {aboutData.eyebrow}
                              </motion.p>

                              <motion.h2
                                   id="about-title"
                                   variants={shouldReduceMotion ? undefined : fadeUp}
                                   className="mt-5 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl"
                              >
                                   {aboutData.heading}
                              </motion.h2>
                         </div>

                         <div className="space-y-6">
                              {aboutData.paragraphs.map((paragraph, index) => (
                                   <motion.p
                                        key={index}
                                        variants={shouldReduceMotion ? undefined : fadeUp}
                                        className="text-base leading-8 text-black/70 sm:text-lg sm:leading-9"
                                   >
                                        {paragraph}
                                   </motion.p>
                              ))}
                         </div>
                    </motion.div>
               </Container>
          </Section>
     );
}
