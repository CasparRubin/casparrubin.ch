import { describe, expect, test } from "bun:test";

import { ETH_END_DATE, getCurrentEmployer } from "./employer";

describe("getCurrentEmployer", () => {
  test("returns ETH Zürich before the transition deadline", () => {
    expect(getCurrentEmployer(new Date(2026, 5, 5))).toBe("ETH Zürich");
  });

  test("returns ETH Zürich on the last day of the transition period", () => {
    expect(getCurrentEmployer(ETH_END_DATE)).toBe("ETH Zürich");
  });

  test("returns University of Zürich after the transition deadline", () => {
    expect(getCurrentEmployer(new Date(2026, 7, 1))).toBe(
      "University of Zürich"
    );
  });
});
