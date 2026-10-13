
"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { heroData } from "@/data/hero";

export function Hero() {
     const shouldReduceMotion = useReducedMotion();

     return (
          <Section
               as="section"
               spacing="large"
               className="flex min-h-[78svh] items-center"
               aria-labelledby="hero-title"
          >
               <Container>
                    <motion.div
                         variants={shouldReduceMotion ? undefined : staggerContainer}
                         initial={shouldReduceMotion ? false : "hidden"}
                         animate="visible"
                         className="max-w-4xl"
                    >
                         {heroData.availability.show && (
                              <motion.div
                                   variants={shouldReduceMotion ? undefined : fadeUp}
                                   className="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 text-sm text-[var(--foreground)]"
                              >
                                   <span
                                        aria-hidden="true"
                                        className="size-2 rounded-full bg-emerald-500"
                                   />
                                   {heroData.availability.label}
                              </motion.div>
                         )}

                         <motion.p
                              variants={shouldReduceMotion ? undefined : fadeUp}
                              className="mb-5 font-mono text-xs font-medium tracking-[0.18em] text-[var(--accent)] sm:text-sm"
                         >
                              {heroData.eyebrow}
                         </motion.p>

                         <motion.h1
                              id="hero-title"
                              variants={shouldReduceMotion ? undefined : fadeUp}
                              className="text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-7xl md:text-8xl"
                         >
                              {heroData.headline.firstLine}
                              <br />
                              <span className="text-[var(--accent)]">
                                   {heroData.headline.secondLine}
                              </span>
                         </motion.h1>

                         <motion.p
                              variants={shouldReduceMotion ? undefined : fadeUp}
                              className="mt-8 max-w-2xl text-base leading-8 text-black/65 sm:text-lg"
                         >
                              {heroData.description}
                         </motion.p>

                         <motion.div
                              variants={shouldReduceMotion ? undefined : fadeUp}
                              className="mt-10 flex flex-col gap-3 sm:flex-row"
                         >
                              {heroData.actions.map((action) => (
                                   <a
                                        key={action.label}
                                        href={action.href}
                                        className={
                                             action.type === "primary"
                                                  ? "inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[var(--accent)]"
                                                  : "inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium transition-colors duration-200 hover:border-[var(--foreground)] hover:bg-white"
                                        }
                                   >
                                        {action.label}
                                   </a>
                              ))}
                         </motion.div>
                    </motion.div>
               </Container>
          </Section>
     );
}
