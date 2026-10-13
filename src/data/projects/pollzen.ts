
import type { ProjectData } from "./types";

export const pollzen: ProjectData = {
     slug: "pollzen",
     title: "PollZen",

     shortDescription:
          "A real-time polling application for creating polls and viewing live results.",

     overview:
          "A full-stack polling application built to explore authentication, poll management, real-time updates, and interactive result visualization.",

     category: "personal",
     status: "deployed",
     featured: true,

     role: "Full-Stack Developer",
     timeline: "Personal project",

     stack: [
          "React",
          "Vite",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "Zustand",
          "Node.js",
          "Express",
          "MongoDB",
          "Socket.IO",
     ],

     links: {
          live: "https://pollzen.rayvishal.dev/",
          repository: "https://github.com/rayvishal024/pollzen",
     },

     caseStudy: {
          problem:
               "Polling applications need a straightforward way to create polls, collect responses, and present updated results without requiring users to repeatedly refresh the page.",

          solution:
               "Built a full-stack polling application with poll management, authentication, and real-time result updates.",

          contributions: [
               "Developed the frontend using React and Vite.",
               "Built backend endpoints with Node.js and Express.",
               "Integrated MongoDB for application data.",
               "Implemented authentication and poll-management workflows.",
               "Integrated Socket.IO for real-time functionality.",
               "Created interfaces for displaying poll results and analytics.",
          ],

          technicalHighlights: [
               "Separated frontend and backend responsibilities.",
               "Used Socket.IO to support real-time communication.",
               "Used Zustand for client-side state management.",
               "Combined reusable UI components with a dedicated API layer.",
          ],

          outcome:
               "Deployed a working personal project that demonstrates full-stack development and real-time application functionality.",
     },
};
