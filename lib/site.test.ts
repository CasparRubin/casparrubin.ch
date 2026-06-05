import { describe, expect, test } from "bun:test";

import {
  buildJsonLdGraph,
  getEmployerDescription,
  getKeywords,
  getManifestDescription,
} from "./site";

describe("site copy", () => {
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

  test("builds JSON-LD with the active employer", () => {
    const graph = buildJsonLdGraph("University of Zürich");
    const person = graph["@graph"][0] as {
      worksFor: { name: string };
      description: string;
    };

    expect(person.worksFor.name).toBe("University of Zürich");
    expect(person.description).toContain("University of Zürich");
  });
});
