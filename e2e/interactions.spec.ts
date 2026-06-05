import { expect, test } from "@playwright/test";

import { EMAIL_ADDRESS, getProfileCarousel } from "./helpers";

test.describe("interactive UI", () => {
  test.beforeEach(async ({ page, context }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.addInitScript(() => {
      localStorage.setItem("theme", "light");

      let copiedText = "";
      const clipboard = {
        writeText: async (text: string) => {
          copiedText = text;
        },
        readText: async () => copiedText,
      };

      Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value: clipboard,
      });
    });
    await page.goto("/");
  });

  test("theme toggle switches between light and dark", async ({ page }) => {
    const html = page.locator("html");
    const toggle = page.getByRole("button", { name: "Switch Theme" });

    await expect(toggle).toBeVisible();
    await expect(html).not.toHaveClass(/dark/);

    await toggle.click();
    await expect(html).toHaveClass(/dark/);

    await toggle.click();
    await expect(html).not.toHaveClass(/dark/);
  });

  test("email copy button writes address to clipboard", async ({ page }) => {
    const copyButton = page.getByRole("button", {
      name: `Copy ${EMAIL_ADDRESS} to clipboard`,
    });

    await copyButton.click();

    await expect(page.getByText("Copied!")).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Email address copied to clipboard" })
    ).toBeVisible();

    await expect
      .poll(async () => page.evaluate(() => navigator.clipboard.readText()))
      .toBe(EMAIL_ADDRESS);
  });

  test("profile carousel can advance with next control", async ({ page }) => {
    const carousel = getProfileCarousel(page);
    const track = carousel.locator('[data-slot="carousel-content"] > div');
    const initialTransform = await track.evaluate(
      (element) => getComputedStyle(element).transform
    );

    await carousel.getByRole("button", { name: "Next slide" }).click();

    await expect
      .poll(async () =>
        track.evaluate((element) => getComputedStyle(element).transform)
      )
      .not.toBe(initialTransform);
  });
});

test.describe("mobile layout", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("shows short name on small screens", async ({ page }) => {
    await page.goto("/");

    const heading = page.getByRole("heading", { level: 1 });
    await expect(
      heading.getByText("Caspar Rubin", { exact: true })
    ).toBeVisible();
    await expect(
      heading.getByText("Caspar Camille Rubin", { exact: true })
    ).toBeHidden();
  });
});
