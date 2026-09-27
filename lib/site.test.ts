import { describe, expect, test } from "bun:test";

import {
  BRAND_COLOR,
  buildJsonLdGraph,
  EMPLOYER,
  getEmployerDescription,
  getKeywords,
  getManifestDescription,
  getOgEmployerLine,
  JOB_TITLE,
  STACK,
} from "./site";

describe("site copy", () => {
  test("keeps public copy aligned with the job title and employer", () => {
    expect(getEmployerDescription()).toBe(
      `Process automation engineer at ${EMPLOYER} building workflows with Microsoft Power Platform and Azure.`
    );
    expect(getManifestDescription()).toBe(
      `Process automation engineer at ${EMPLOYER}, using Microsoft Power Platform and Azure.`
    );
    expect(getOgEmployerLine()).toBe(EMPLOYER);
    expect(getKeywords()).toContain(JOB_TITLE);
    expect(getKeywords()).toContain(EMPLOYER);
    expect(getKeywords()).toContain("AI Foundry");
    expect(new Set(getKeywords()).size).toBe(getKeywords().length);
    expect(getKeywords()).not.toContain("Software Engineer");
    expect(BRAND_COLOR).toBe("#ff2764");
  });

  test("exposes the public job title and stack", () => {
    expect(JOB_TITLE).toBe("Process Automation Engineer");
    expect(EMPLOYER).toBe("University of Zürich");
    expect(STACK.at(-1)).toEqual({
      category: "CRM & ERP",
      service: "Dynamics 365",
      icon: "/stack/dynamics365_64px.png",
    });
    expect(STACK.some((entry) => entry.service === "Power Automate")).toBe(
      true
    );
  });

  test("builds JSON-LD with the employer", () => {
    const graph = buildJsonLdGraph();
    const person = graph["@graph"][0] as {
      jobTitle: string;
      worksFor: { name: string };
      description: string;
    };

    expect(person.jobTitle).toBe(JOB_TITLE);
    expect(person.worksFor.name).toBe(EMPLOYER);
    expect(person.description).toBe(getEmployerDescription());
  });
});
