import { expect, test } from "@playwright/test";

import { getManifestDescription } from "../lib/site";

import { SITE_NAME } from "./helpers";

test.describe("SEO and metadata routes", () => {
  test("robots.txt allows crawlers and references sitemap", async ({
    page,
  }) => {
    const res = await page.goto("/robots.txt");
    expect(res?.ok()).toBeTruthy();

    const body = page.locator("body");
    await expect(body).toContainText(/User-Agent/i);
    await expect(body).toContainText(/Allow: \//i);
    await expect(body).toContainText("https://casparrubin.ch/sitemap.xml");
    await expect(body).toContainText("GPTBot");
    await expect(body).toContainText("ClaudeBot");
  });

  test("sitemap is valid XML with canonical home URL", async ({ request }) => {
    const res = await request.get("/sitemap.xml");
    expect(res.ok()).toBeTruthy();

    const text = await res.text();
    expect(text).toContain('<?xml version="1.0"');
    expect(text).toContain("<urlset");
    expect(text).toContain("<loc>https://casparrubin.ch</loc>");
    expect(text).toContain("<changefreq>monthly</changefreq>");
    expect(text).toContain("<priority>1</priority>");
  });

  test("web manifest exposes app metadata", async ({ request }) => {
    const res = await request.get("/manifest.webmanifest");
    expect(res.ok()).toBeTruthy();

    const json = (await res.json()) as {
      name: string;
      short_name: string;
      description: string;
      start_url: string;
      display: string;
      theme_color: string;
    };

    expect(json.name).toBe(SITE_NAME);
    expect(json.short_name).toBe("Caspar Rubin");
    expect(json.description).toBe(getManifestDescription());
    expect(json.start_url).toBe("/");
    expect(json.display).toBe("standalone");
    expect(json.theme_color).toBe("#ec003f");
  });

  test("opengraph image route responds with a PNG", async ({ request }) => {
    const res = await request.get("/opengraph-image");
    expect(res.ok()).toBeTruthy();
    expect(res.headers()["content-type"]).toContain("image/png");
  });

  test("favicon icon route is reachable", async ({ request }) => {
    const res = await request.get("/icon.png");
    expect(res.ok()).toBeTruthy();
    expect(res.headers()["content-type"]).toContain("image");
  });
});
