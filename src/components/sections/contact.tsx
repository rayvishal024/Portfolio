
"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { contactData } from "@/data/contact";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Contact() {
     const shouldReduceMotion = useReducedMotion();

     return (
          <Section
               id="contact"
               aria-labelledby="contact-title"
               spacing="large"
          >
               <Container>
                    <motion.div
                         variants={shouldReduceMotion ? undefined : staggerContainer}
                         initial={shouldReduceMotion ? false : "hidden"}
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.2 }}
                         className="relative overflow-hidden rounded-3xl bg-[var(--surface-dark)] px-6 py-12 text-[var(--foreground-dark)] sm:px-10 sm:py-16 lg:px-16 lg:py-20"
                    >
                         <div
                              aria-hidden="true"
                              className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-[var(--accent)]/15 blur-3xl"
                         />

                         <div className="relative max-w-3xl">
                              <motion.p
                                   variants={shouldReduceMotion ? undefined : fadeUp}
                                   className="font-mono text-xs tracking-[0.18em] text-blue-300"
                              >
                                   {contactData.eyebrow}
                              </motion.p>

                              <motion.h2
                                   id="contact-title"
                                   variants={shouldReduceMotion ? undefined : fadeUp}
                                   className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl md:text-7xl"
                              >
                                   {contactData.heading}
                              </motion.h2>

                              <motion.p
                                   variants={shouldReduceMotion ? undefined : fadeUp}
                                   className="mt-6 max-w-xl text-base leading-8 text-white/65 sm:text-lg"
                              >
                                   {contactData.description}
                              </motion.p>

                              {contactData.email && (
                                   <motion.a
                                        variants={shouldReduceMotion ? undefined : fadeUp}
                                        href={`mailto:${contactData.email}`}
                                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-blue-100"
                                   >
                                        {contactData.email}
                                        <span aria-hidden="true">↗</span>
                                   </motion.a>
                              )}

                              <motion.div
                                   variants={shouldReduceMotion ? undefined : fadeUp}
                                   className="mt-10 flex flex-wrap gap-x-6 gap-y-4 border-t border-white/15 pt-6"
                              >
                                   {contactData.links.map((link) => (
                                        <a
                                             key={link.label}
                                             href={link.href}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="text-sm text-white/65 transition-colors hover:text-white"
                                        >
                                             {link.label} <span aria-hidden="true">↗</span>
                                        </a>
                                   ))}
                              </motion.div>
                         </div>
                    </motion.div>
               </Container>
          </Section>
     );
}
