
import type { ProjectData } from "./types";

export const superInternationalCourier: ProjectData = {
     slug: "super-international-courier",
     title: "Super International Courier",

     shortDescription:
          "A courier and cargo management system built to support day-to-day business operations.",

     overview:
          "An end-to-end software project focused on organizing courier operations, customer records, shipment tracking, billing, invoicing, and reporting in one application.",

     category: "client",
     status: "deployed",
     featured: true,

     role: "Freelance Software Developer",
     timeline: "July 2026 – Present",

     stack: [
          "Next.js",
          "TypeScript",
          "Node.js",
          "Express",
          "PostgreSQL",
          "Prisma ORM",
          "Zod",
          "Docker",
          "Nginx",
          "Cloudflare",
          "GitHub Actions",
     ],

     links: {},

     caseStudy: {
          problem:
               "Courier operations involve related workflows such as customer management, shipment records, tracking, billing, and reporting. The goal was to bring these workflows into a single application designed around the company's operational requirements.",

          solution:
               "Designed, developed, and deployed a full-stack management application with branch-aware data access, role-based permissions, shipment workflows, and billing features.",

          contributions: [
               "Worked through business requirements and translated them into application workflows.",
               "Designed and implemented frontend and backend functionality.",
               "Built APIs, database models, request validation, and authentication.",
               "Implemented customer, docket, order, tracking, billing, and invoice workflows.",
               "Configured deployment infrastructure and automated deployment workflows.",
               "Deployed the application and supported its use in business operations.",
          ],

          technicalHighlights: [
               "Branch-aware data access to keep operational records scoped appropriately.",
               "Role-based permissions for administrative and operational users.",
               "Shipment status updates managed through authorized application workflows.",
               "Invoice snapshots that preserve finalized billing details.",
               "Containerized deployment with Docker and a reverse proxy.",
               "Deployment workflow integrated with GitHub Actions.",
          ],

          outcome:
               "The application is deployed and being used by the company. The project provided practical experience in translating business requirements into a working full-stack system and taking responsibility through deployment.",
     },
};
