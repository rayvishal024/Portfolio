
export type ProjectStatus =
     | "deployed"
     | "in-development"
     | "local-only";

export type ProjectCategory =
     | "client"
     | "personal";

export type ProjectData = {
     slug: string;
     title: string;
     shortDescription: string;
     overview: string;

     category: ProjectCategory;
     status: ProjectStatus;
     featured: boolean;

     role: string;
     timeline: string;

     stack: string[];

     links: {
          live?: string;
          repository?: string;
     };

     coverImage?: string;

     caseStudy: {
          problem: string;
          solution: string;
          contributions: string[];
          technicalHighlights: string[];
          outcome: string;
     };
};
