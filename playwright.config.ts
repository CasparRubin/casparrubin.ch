import { defineConfig, devices } from "@playwright/test";

/**
 * Listening port for baseURL — must match a running dev server (`PORT`, default 3000).
 * When CI is unset, Playwright may reuse `next dev` already bound to this URL.
 */
const port = Number.parseInt(process.env.PORT ?? "3000", 10) || 3000;
const baseURL = `http://127.0.0.1:${port}`;

export default defineConfig({
  testDir: "e2e",
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? "dot" : "list",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "bun run dev",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
