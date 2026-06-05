import { defineConfig, devices } from "@playwright/test";

/**
 * Listening port for baseURL (`PORT`, default 3000).
 * Locally, Playwright may reuse `next dev` already bound to this URL.
 * In CI, the web server runs `next build && next start` against the same port.
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
    command: process.env.CI ? "bun run build && bun run start" : "bun run dev",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: process.env.CI ? 180_000 : 120_000,
  },
});
