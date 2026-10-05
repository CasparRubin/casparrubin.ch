export const SITE_URL = "https://casparrubin.ch";
export const SITE_NAME = "Caspar Camille Rubin";
export const JOB_TITLE = "Process Automation Engineer";
export const EMPLOYER = "University of Zürich";
export const EMAIL = "caspar@helvety.com";
export const BRAND_COLOR = "#ff2764";
/** ISO date updated when public site content changes. Overridable via env. */
export const SITE_LAST_MODIFIED = "2026-10-05";
const LOCATION = "Basel, Switzerland";

export const BIRTH = { year: 1991, month: 6, day: 18 } as const;
export const MARRIED_YEAR = 2022;
export const DAUGHTER_BIRTH = { year: 2022, month: 12, day: 1 } as const;
export const DOG_BIRTH = { year: 2020, month: 12, day: 1 } as const;

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
    category: "Customer Experience",
    service: "Next.js",
    icon: "/stack/nextjs_64px.png",
  },
  {
    category: "CRM & ERP",
    service: "Dynamics 365",
    icon: "/stack/dynamics365_64px.png",
  },
] as const;

const PROFILE_IMAGE = `${SITE_URL}/caspar/casparCamilleRubin_1200x1600px_8.webp`;
const PERSON_ID = `${SITE_URL}/#person`;

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

export function getEmployerDescription(): string {
  return `Process automation engineer at ${EMPLOYER} building workflows with Microsoft Power Platform and Azure.`;
}

export function getManifestDescription(): string {
  return `Process automation engineer at ${EMPLOYER}, using Microsoft Power Platform and Azure.`;
}

export function getOgEmployerLine(): string {
  return EMPLOYER;
}

export function getKeywords(): string[] {
  return [
    ...new Set([
      SITE_NAME,
      JOB_TITLE,
      "Workflow Automation",
      EMPLOYER,
      "Microsoft",
      "Power Platform",
      "Process Automation",
      ...KNOWS_ABOUT,
    ]),
  ];
}

export function getSiteLastModified(): Date {
  const override = process.env.NEXT_PUBLIC_SITE_LAST_MODIFIED;
  return new Date(override || SITE_LAST_MODIFIED);
}

export function buildJsonLdGraph() {
  const description = getEmployerDescription();

  const person = {
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE_NAME,
    jobTitle: JOB_TITLE,
    description,
    worksFor: { "@type": "Organization", name: EMPLOYER },
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
        "@id": `${SITE_URL}/#profile`,
        url: SITE_URL,
        mainEntity: { "@id": PERSON_ID },
      },
    ],
  };
}
