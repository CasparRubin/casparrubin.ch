import { describe, expect, test } from "bun:test";

import { getAge } from "./age";

describe("getAge", () => {
  const birthDate = new Date(1991, 5, 18);

  test("returns age on birthday", () => {
    expect(getAge(new Date(2026, 5, 18), birthDate)).toBe(35);
  });

  test("returns age after birthday in the same year", () => {
    expect(getAge(new Date(2026, 11, 1), birthDate)).toBe(35);
  });

  test("returns age before birthday in the same year", () => {
    expect(getAge(new Date(2026, 5, 17), birthDate)).toBe(34);
  });

  test("returns age on January 1 before birthday", () => {
    expect(getAge(new Date(2026, 0, 1), birthDate)).toBe(34);
  });

  test("handles leap-year edge case before February birthday", () => {
    const feb29Birth = new Date(2000, 1, 29);
    expect(getAge(new Date(2024, 1, 28), feb29Birth)).toBe(23);
    expect(getAge(new Date(2024, 2, 1), feb29Birth)).toBe(24);
  });
});
