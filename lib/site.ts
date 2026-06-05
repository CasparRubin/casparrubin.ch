import { getCurrentEmployer } from "./employer";

export const SITE_URL = "https://casparrubin.ch";
export const SITE_NAME = "Caspar Camille Rubin";
export const JOB_TITLE =
  "Power Platform Workflow & Process Automation Engineer";
export const EMAIL = "caspar@helvety.com";
export const LOCATION = "Basel, Switzerland";

export const STACK = [
  {
    category: "Cloud Platform",
    service: "Azure",
    icon: "/stack/azure_64px.png",
  },
  {
    category: "Database",
    service: "Dataverse",
    icon: "/stack/dataverse_64px.png",
  },
  {
    category: "Files & Documents",
    service: "SharePoint",
    icon: "/stack/sharepoint_64px.png",
  },
  {
    category: "Orchestration",
    service: "Power Automate",
    icon: "/stack/powerautomate_64px.png",
  },
  {
    category: "Backend Processing",
    service: "Power Apps",
    icon: "/stack/powerapps_64px.png",
  },
  {
    category: "CRM",
    service: "Dynamics 365",
    icon: "/stack/dynamics365_64px.png",
  },
  {
    category: "Customer Experience",
    service: "Next.js",
    icon: "/stack/nextjs_64px.png",
  },
] as const;

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
  return `Power Platform engineer at ${employer} building workflow and process automation with Microsoft and Azure.`;
}

export function getManifestDescription(
  employer: string = getCurrentEmployer()
): string {
  return `Power Platform workflow and process automation engineer at ${employer}, using enterprise Microsoft and Azure services.`;
}

export function getOgEmployerLine(
  employer: string = getCurrentEmployer()
): string {
  return `Software Engineer at ${employer}`;
}

export function getKeywords(employer: string = getCurrentEmployer()): string[] {
  return [
    SITE_NAME,
    JOB_TITLE,
    "Power Automate",
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
