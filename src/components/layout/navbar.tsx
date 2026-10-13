
"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/container";
import { navigationData } from "@/data/navigation";

export function Navbar() {
     const [menuOpen, setMenuOpen] = useState(false);
     const shouldReduceMotion = useReducedMotion();

     return (
          <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-xl">
               <Container className="flex min-h-20 items-center justify-between gap-6">
                    <a
                         href={navigationData.brand.href}
                         className="flex shrink-0 items-center gap-3"
                         aria-label={`${navigationData.brand.name} home`}
                         onClick={() => setMenuOpen(false)}
                    >
                         <span className="flex size-10 items-center justify-center rounded-full bg-[var(--foreground)] font-mono text-xs font-semibold text-white">
                              {navigationData.brand.monogram}
                         </span>
                         <span className="text-sm font-semibold tracking-tight">
                              {navigationData.brand.name}
                         </span>
                    </a>

                    <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
                         {navigationData.links.map((link) => (
                              <a
                                   key={link.href}
                                   href={link.href}
                                   className="text-sm text-black/65 transition-colors hover:text-[var(--accent)]"
                              >
                                   {link.label}
                              </a>
                         ))}

                         <a
                              href={navigationData.resume.href}
                              className="rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent)]"
                         >
                              {navigationData.resume.label}
                         </a>
                    </nav>

                    <button
                         type="button"
                         className="flex size-11 items-center justify-center rounded-full border border-[var(--border)] md:hidden"
                         aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                         aria-expanded={menuOpen}
                         aria-controls="mobile-navigation"
                         onClick={() => setMenuOpen((open) => !open)}
                    >
                         <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
                              <motion.span
                                   animate={
                                        menuOpen
                                             ? { rotate: 45, y: 4 }
                                             : { rotate: 0, y: 0 }
                                   }
                                   transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                                   className="h-px w-5 bg-current"
                              />
                              <motion.span
                                   animate={{ opacity: menuOpen ? 0 : 1 }}
                                   transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
                                   className="h-px w-5 bg-current"
                              />
                              <motion.span
                                   animate={
                                        menuOpen
                                             ? { rotate: -45, y: -4 }
                                             : { rotate: 0, y: 0 }
                                   }
                                   transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                                   className="h-px w-5 bg-current"
                              />
                         </span>
                    </button>
               </Container>

               <AnimatePresence initial={false}>
                    {menuOpen && (
                         <motion.nav
                              id="mobile-navigation"
                              aria-label="Mobile navigation"
                              initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={
                                   shouldReduceMotion
                                        ? { opacity: 0 }
                                        : { opacity: 0, height: 0 }
                              }
                              transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
                              className="overflow-hidden border-t border-[var(--border)] md:hidden"
                         >
                              <Container className="flex flex-col gap-1 py-4">
                                   {navigationData.links.map((link, index) => (
                                        <motion.a
                                             key={link.href}
                                             href={link.href}
                                             initial={shouldReduceMotion ? false : { opacity: 0, x: -8 }}
                                             animate={{ opacity: 1, x: 0 }}
                                             transition={{
                                                  duration: shouldReduceMotion ? 0 : 0.2,
                                                  delay: shouldReduceMotion ? 0 : index * 0.04,
                                             }}
                                             onClick={() => setMenuOpen(false)}
                                             className="rounded-lg px-3 py-3 text-sm text-black/70 transition-colors hover:bg-white hover:text-[var(--accent)]"
                                        >
                                             {link.label}
                                        </motion.a>
                                   ))}

                                   <a
                                        href={navigationData.resume.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="mt-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-center text-sm font-medium text-white"
                                   >
                                        {navigationData.resume.label}
                                   </a>
                              </Container>
                         </motion.nav>
                    )}
               </AnimatePresence>
          </header>
     );
}
