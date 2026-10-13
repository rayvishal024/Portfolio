
export const experienceData = {
     eyebrow: "EXPERIENCE",
     heading: "Learning by building.",

     entries: [
          {
               id: "freelance-software-developer",
               role: "Freelance Software Developer",
               organization: "Independent",
               period: "July 2026 – Present",
               type: "Freelance",
               description:
                    "Building and deploying software solutions for real business needs, from understanding requirements and designing application workflows to implementation and production deployment.",
               highlights: [
                    "Translate client requirements into practical application features.",
                    "Develop full-stack applications with modern frontend, backend, and database technologies.",
                    "Configure deployment infrastructure and support applications after release.",
               ],
               technologies: [
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "Express",
                    "PostgreSQL",
                    "Prisma ORM",
                    "Docker",
               ],
          },
          {
               id: "nbr-group-internship",
               role: "Software Developer Intern",
               organization: "NBR Group",
               period: "August 2026 – January 2027",
               type: "Internship",
               description:
                    "Contributing to software development across backend and web development, collaborating with a team to implement application functionality.",
               highlights: [
                    "Contribute to backend and web development tasks.",
                    "Work with application APIs and data-driven functionality.",
                    "Collaborate with team members throughout the development process.",
               ],
               technologies: [],
          },
     ],
} as const;
