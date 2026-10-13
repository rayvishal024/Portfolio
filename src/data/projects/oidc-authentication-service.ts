
import type { ProjectData } from "./types";

export const oidcAuthenticationService: ProjectData = {
     slug: "oidc-authentication-service",
     title: "OIDC Authentication Service",

     shortDescription:
          "A backend authentication service exploring secure token issuance and public-key discovery.",

     overview:
          "A TypeScript and Node.js authentication service built around RS256-signed JWTs, a JWKS endpoint, request validation, and PostgreSQL persistence.",

     category: "personal",
     status: "deployed",
     featured: true,

     role: "Backend Developer",
     timeline: "Personal project",

     stack: [
          "TypeScript",
          "Node.js",
          "Express",
          "PostgreSQL",
          "Drizzle ORM",
          "Zod",
          "JWT",
          "RS256",
          "JWKS",
     ],

     links: {
          repository:
               "https://github.com/rayvishal024/OIDC-Authentication-service",
     },

     caseStudy: {
          problem:
               "Authentication services need a consistent approach to token issuance, verification, validation, and public-key distribution.",

          solution:
               "Built a backend service using RS256-signed JWTs and a JWKS endpoint, with PostgreSQL persistence and schema-based request validation.",

          contributions: [
               "Implemented backend routes using Node.js and Express.",
               "Worked with PostgreSQL through Drizzle ORM.",
               "Implemented RS256-based JWT signing and verification.",
               "Exposed a JWKS endpoint for public-key discovery.",
               "Used Zod for request validation.",
          ],

          technicalHighlights: [
               "Asymmetric JWT signing using RS256.",
               "Public-key discovery through a JWKS endpoint.",
               "Typed database access with Drizzle ORM.",
               "Schema-based validation using Zod.",
          ],

          outcome:
               "Deployed and accessible, this project demonstrates backend authentication concepts and API engineering. Its exact protocol capabilities should be evaluated against the implemented endpoints rather than inferred from its name.",
     },
};
