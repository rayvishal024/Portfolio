
import type { ProjectData } from "./types";

export const flyshipex: ProjectData = {
     slug: "flyshipex",
     title: "FlyShipEx",

     shortDescription:
          "A modern, responsive frontend experience for a courier and logistics company.",

     overview:
          "A client-facing website project focused on presenting logistics services through a clear information hierarchy, reusable interface components, and responsive layouts.",

     category: "client",
     status: "in-development",
     featured: true,

     role: "Freelance Frontend Developer",
     timeline: "In development",

     stack: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
     ],

     links: {
          live: "https://flyshipex.vercel.app/",
     },

     caseStudy: {
          problem:
               "The project required a modern web interface that presents courier services clearly and remains usable across desktop and mobile screen sizes.",

          solution:
               "Developed the frontend with reusable components, responsive layouts, and consistent visual styling.",

          contributions: [
               "Implemented the website frontend using Next.js and TypeScript.",
               "Built reusable interface components and page sections.",
               "Applied responsive layouts for desktop and mobile devices.",
               "Refined typography, spacing, and visual consistency across sections.",
          ],

          technicalHighlights: [
               "Component-based frontend architecture.",
               "Responsive layouts using Tailwind CSS.",
               "Reusable styling patterns to simplify maintenance.",
               "Frontend structure prepared for future backend integration.",
          ],

          outcome:
               "A frontend preview is available online while development continues. Backend functionality and integrations will be documented when they are implemented and verified.",
     },
};
