import { describe, expect, test } from "bun:test";

import {
  buildJsonLdGraph,
  getEmployerDescription,
  getKeywords,
  getManifestDescription,
  getOgEmployerLine,
  JOB_TITLE,
  STACK,
} from "./site";

describe("site copy", () => {
  test("keeps public copy aligned with the job title", () => {
    expect(getEmployerDescription("ETH Zürich")).toMatch(
      /^Process automation engineer at ETH Zürich/
    );
    expect(getManifestDescription("ETH Zürich")).toMatch(
      /^Process automation engineer at ETH Zürich/
    );
    expect(getOgEmployerLine("ETH Zürich")).toBe(`${JOB_TITLE} at ETH Zürich`);
    expect(getKeywords("ETH Zürich")).toContain(JOB_TITLE);
    expect(getKeywords("ETH Zürich")).not.toContain("Software Engineer");
  });

  test("describes the ETH Zürich role accurately", () => {
    expect(getEmployerDescription("ETH Zürich")).toContain("ETH Zürich");
    expect(getManifestDescription("ETH Zürich")).toContain("ETH Zürich");
    expect(getKeywords("ETH Zürich")).toContain("ETH Zürich");
  });

  test("describes the University of Zürich role accurately", () => {
    expect(getEmployerDescription("University of Zürich")).toContain(
      "University of Zürich"
    );
    expect(getManifestDescription("University of Zürich")).toContain(
      "University of Zürich"
    );
    expect(getKeywords("University of Zürich")).toContain(
      "University of Zürich"
    );
  });

  test("exposes the public job title and stack", () => {
    expect(JOB_TITLE).toBe("Process Automation Engineer");
    expect(STACK.at(-1)).toEqual({
      category: "CRM & ERP",
      service: "Dynamics 365",
      icon: "/stack/dynamics365_64px.png",
    });
    expect(STACK.some((entry) => entry.service === "Power Automate")).toBe(
      true
    );
  });

  test("builds JSON-LD with the active employer", () => {
    const graph = buildJsonLdGraph("University of Zürich");
    const person = graph["@graph"][0] as {
      jobTitle: string;
      worksFor: { name: string };
      description: string;
    };

    expect(person.jobTitle).toBe(JOB_TITLE);
    expect(person.worksFor.name).toBe("University of Zürich");
    expect(person.description).toBe(
      getEmployerDescription("University of Zürich")
    );
  });
});
