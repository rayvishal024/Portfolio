
import type { ProjectData } from "./types";

export const formzen: ProjectData = {
     slug: "formzen",
     title: "FormZen",

     shortDescription:
          "A form-builder project exploring visual form creation, management, and analytics.",

     overview:
          "A locally running form-builder application built to explore form creation workflows, reusable interfaces, backend API architecture, and data persistence.",

     category: "personal",
     status: "local-only",
     featured: false,

     role: "Full-Stack Developer",
     timeline: "Personal project",

     stack: [
          "Next.js",
          "TypeScript",
          "tRPC",
          "Drizzle ORM",
          "PostgreSQL",
          "Tailwind CSS",
     ],

     links: {
          repository: "https://github.com/rayvishal024/formzen",
     },

     caseStudy: {
          problem:
               "Creating and managing forms can involve repetitive configuration and disconnected workflows. This project explores how form creation and management can be organized in one interface.",

          solution:
               "Developed a local form-builder application with a dashboard and visual form-creation workflows.",

          contributions: [
               "Built the application interface using Next.js and TypeScript.",
               "Worked on form-builder and dashboard experiences.",
               "Integrated the application with its backend API architecture.",
               "Used PostgreSQL and Drizzle ORM for data persistence.",
          ],

          technicalHighlights: [
               "Explored a type-safe API architecture with tRPC.",
               "Used Drizzle ORM to work with PostgreSQL.",
               "Organized the application into reusable interface components.",
          ],

          outcome:
               "The project runs locally and provides a foundation for further development. It is not currently deployed, so no public live demo is available.",
     },
};
