import { expect, test } from "@playwright/test";

import {
  CURRENT_EMPLOYER_PATTERN,
  EMAIL_ADDRESS,
  EXTERNAL_LINKS,
  STACK_BADGES,
  expectHomeIdentity,
  getProfileCarousel,
} from "./helpers";

test.describe("home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders identity, sections, and profile content", async ({ page }) => {
    await expectHomeIdentity(page);

    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("main")).toBeVisible();

    for (const section of ["Basics", "Stack", "More"] as const) {
      await expect(
        page.getByRole("heading", { level: 2, name: section })
      ).toBeVisible();
    }

    await expect(page.getByText(/Born in/i)).toContainText("1991");
    await expect(page.getByText(/Living in/i)).toContainText("Basel");
    await expect(page.getByText(/Married in/i)).toContainText("2022");
    await expect(page.getByText(/Working at/i)).toContainText(
      CURRENT_EMPLOYER_PATTERN
    );
    await expect(page.getByText(/Microsoft ecosystem/i)).toBeVisible();

    for (const badge of STACK_BADGES) {
      await expect(page.getByText(badge, { exact: true })).toBeVisible();
    }

    const carousel = getProfileCarousel(page);
    await expect(
      carousel.getByRole("img", { name: "Caspar Camille Rubin" }).first()
    ).toBeVisible();
    await expect(page.getByText(/Image \d+ \/ 8/).first()).toBeVisible();
  });

  test("navbar links home and exposes theme control", async ({ page }) => {
    await expect(page.getByRole("banner").getByRole("link")).toHaveAttribute(
      "href",
      "/"
    );
    await expect(
      page.getByRole("button", { name: "Switch Theme" })
    ).toBeVisible();
  });

  test("external profile links use correct destinations", async ({ page }) => {
    for (const { label, href } of EXTERNAL_LINKS) {
      await expect(
        page.getByRole("link", { name: label }).first()
      ).toHaveAttribute("href", href);
    }
  });

  test("email copy button exposes the contact address", async ({ page }) => {
    const copyButton = page.getByRole("button", {
      name: `Copy ${EMAIL_ADDRESS} to clipboard`,
    });

    await expect(copyButton).toBeVisible();
    await expect(copyButton).toContainText(EMAIL_ADDRESS);
  });

  test("includes structured data for person and profile page", async ({
    page,
  }) => {
    const jsonLd = await page
      .locator('script[type="application/ld+json"]')
      .textContent();

    expect(jsonLd).toBeTruthy();

    const data = JSON.parse(jsonLd!) as {
      "@graph": Array<{ "@type": string; name?: string; jobTitle?: string }>;
    };

    const person = data["@graph"].find(
      (entry) => entry["@type"] === "Person"
    ) as
      | {
          name?: string;
          jobTitle?: string;
          description?: string;
          worksFor?: { name?: string };
        }
      | undefined;
    const profilePage = data["@graph"].find(
      (entry) => entry["@type"] === "ProfilePage"
    );

    expect(person?.name).toBe("Caspar Camille Rubin");
    expect(person?.jobTitle).toBe("Full-Stack Software Engineer");
    expect(person?.description).toMatch(CURRENT_EMPLOYER_PATTERN);
    expect(person?.worksFor?.name).toMatch(CURRENT_EMPLOYER_PATTERN);
    expect(profilePage).toBeTruthy();
  });

  test("sets core SEO metadata", async ({ page }) => {
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /Software engineer at (ETH Zürich|University of Zürich)/i
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://casparrubin.ch"
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      /Full-Stack Software Engineer/i
    );
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      "content",
      "summary_large_image"
    );
  });
});
