import { expect, test } from "@playwright/test";

test.describe("public site", () => {
  test("home renders identity and engineer badge", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Caspar/i);

    const nameHeading = page.getByRole("heading", { level: 1 });
    await expect(nameHeading).toBeVisible();
    await expect(nameHeading).toContainText(/Caspar/);
    await expect(nameHeading).toContainText(/Rubin/i);

    await expect(
      page.getByText(/Full-Stack Software Engineer/, { exact: false })
    ).toBeVisible();
  });

  test("robots.txt is reachable", async ({ page }) => {
    const res = await page.goto("/robots.txt");
    expect(res?.ok()).toBeTruthy();
    await expect(page.locator("body")).toContainText(/User-Agent/i);
  });

  test("sitemap is valid XML with URLs", async ({ request }) => {
    const res = await request.get("/sitemap.xml");
    expect(res.ok()).toBeTruthy();
    const text = await res.text();
    expect(text).toContain("<urlset");
    expect(text).toContain("casparrubin.ch");
  });

  test("web manifest exposes app metadata", async ({ request }) => {
    const res = await request.get("/manifest.webmanifest");
    expect(res.ok()).toBeTruthy();
    const json = await res.json();
    expect(json).toHaveProperty("name");
    expect(String(json.name)).toContain("Caspar");
  });
});
