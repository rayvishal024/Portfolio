
export const skillsData = {
     eyebrow: "ENGINEERING TOOLKIT",
     heading: "Tools for building software.",

     description:
          "A practical toolkit for building web applications, designing backend systems, and delivering software from development to deployment.",

     categories: [
          {
               id: "backend",
               title: "Backend Engineering",
               description: "APIs, application logic, and authentication.",
               skills: [
                    "Node.js",
                    "Express.js",
                    "TypeScript",
                    "REST APIs",
                    "JWT Authentication",
                    "OAuth 2.0",
                    "OpenID Connect",
                    "Zod",
               ],
          },
          {
               id: "databases",
               title: "Databases & Data",
               description: "Data modeling, queries, and persistence.",
               skills: [
                    "PostgreSQL",
                    "MongoDB",
                    "Prisma ORM",
                    "Drizzle ORM",
                    "SQL",
                    "Redis",
               ],
          },
          {
               id: "frontend",
               title: "Frontend Development",
               description: "Responsive interfaces and reusable components.",
               skills: [
                    "React",
                    "Next.js",
                    "Vite",
                    "Tailwind CSS",
                    "shadcn/ui",
                    "Zustand",
                    "React Hook Form",
               ],
          },
          {
               id: "infrastructure",
               title: "Infrastructure & Tools",
               description: "Development workflows and application delivery.",
               skills: [
                    "Git",
                    "GitHub",
                    "Docker",
                    "Linux",
                    "Nginx",
                    "GitHub Actions",
                    "Cloudflare",
               ],
          },
     ],
} as const;
