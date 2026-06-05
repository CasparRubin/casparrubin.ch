import { getCurrentEmployer } from "./employer";

export const SITE_URL = "https://casparrubin.ch";
export const SITE_NAME = "Caspar Camille Rubin";
export const JOB_TITLE = "Full-Stack Software Engineer";
export const EMAIL = "caspar@helvety.com";
export const LOCATION = "Basel, Switzerland";

const PROFILE_IMAGE = `${SITE_URL}/caspar/casparCamilleRubin_1200x1600px_8.webp`;

const SAME_AS = [
  "https://github.com/CasparRubin",
  "https://www.linkedin.com/in/caspar-camille-rubin",
  "https://helvety.com",
] as const;

const KNOWS_ABOUT = [
  "Azure",
  "Next.js",
  "Dataverse",
  "SharePoint",
  "Power Automate",
  "Power Apps",
  "Dynamics 365",
  "AI Foundry",
] as const;

export function getEmployerDescription(
  employer: string = getCurrentEmployer()
): string {
  return `Software engineer at ${employer} building Microsoft and Azure tools that automate internal workflows.`;
}

export function getManifestDescription(
  employer: string = getCurrentEmployer()
): string {
  return `Software engineer at ${employer} specializing in process automation with enterprise-grade Microsoft and Azure services.`;
}

export function getOgEmployerLine(
  employer: string = getCurrentEmployer()
): string {
  return `Software Engineer at ${employer}`;
}

export function getKeywords(employer: string = getCurrentEmployer()): string[] {
  return [
    SITE_NAME,
    "Full Stack Engineer",
    "Software Engineer",
    "Workflow Automation",
    employer,
    "Azure",
    "Next.js",
    "Microsoft",
    "Power Platform",
    "Dataverse",
    "SharePoint",
    "Process Automation",
  ];
}

export function buildJsonLdGraph(employer: string = getCurrentEmployer()) {
  const description = getEmployerDescription(employer);

  const person = {
    "@type": "Person",
    name: SITE_NAME,
    jobTitle: JOB_TITLE,
    description,
    worksFor: { "@type": "Organization", name: employer },
    url: SITE_URL,
    image: PROFILE_IMAGE,
    sameAs: [...SAME_AS],
    knowsAbout: [...KNOWS_ABOUT],
    address: {
      "@type": "PostalAddress",
      addressLocality: LOCATION.split(",")[0]?.trim() ?? "Basel",
      addressCountry: "CH",
    },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "ProfilePage",
        mainEntity: {
          "@type": "Person",
          name: SITE_NAME,
          jobTitle: JOB_TITLE,
          description,
          url: SITE_URL,
          image: PROFILE_IMAGE,
          sameAs: [...SAME_AS],
        },
      },
    ],
  };
}
