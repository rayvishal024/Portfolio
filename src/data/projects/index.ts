
import { superInternationalCourier } from "./super-international-courier";
import { flyshipex } from "./flyshipex";
import { pollzen } from "./pollzen";
import { formzen } from "./formzen";
import { oidcAuthenticationService } from "./oidc-authentication-service";

export const projects = [
     superInternationalCourier,
     flyshipex,
     pollzen,
     oidcAuthenticationService,
     formzen,
] as const;

export const featuredProjects = projects.filter(
     (project) => project.featured,
);

export function getProjectBySlug(slug: string) {
     return projects.find((project) => project.slug === slug);
}
