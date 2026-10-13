
import type { Variants } from "motion/react";

export const fadeUp: Variants = {
     hidden: {
          opacity: 0,
          y: 24,
     },
     visible: {
          opacity: 1,
          y: 0,
          transition: {
               duration: 0.6,
               ease: [0.22, 1, 0.36, 1],
          },
     },
};

export const staggerContainer: Variants = {
     hidden: {},
     visible: {
          transition: {
               staggerChildren: 0.12,
               delayChildren: 0.08,
          },
     },
};

export const scaleReveal: Variants = {
     hidden: {
          opacity: 0,
          scale: 0.97,
     },
     visible: {
          opacity: 1,
          scale: 1,
          transition: {
               duration: 0.5,
               ease: [0.22, 1, 0.36, 1],
          },
     },
};
