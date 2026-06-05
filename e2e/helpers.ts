import { expect, type Page } from "@playwright/test";

import { EMAIL, SITE_NAME } from "../lib/site";

export { SITE_NAME };
export const EMAIL_ADDRESS = EMAIL;

export const CURRENT_EMPLOYER_PATTERN = /ETH Zürich|University of Zürich/;

export const STACK_BADGES = [
  "Azure",
  "Next.js",
  "Dataverse",
  "Power Automate",
  "Power Apps",
  "Dynamics 365",
  "SharePoint",
] as const;

export const EXTERNAL_LINKS = [
  { label: "GitHub", href: "https://github.com/CasparRubin" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/caspar-camille-rubin",
  },
  { label: "Helvety", href: "https://helvety.com" },
] as const;

export function getProfileCarousel(page: Page) {
  return page.locator('[data-slot="carousel"]');
}

export async function expectHomeIdentity(page: Page) {
  await expect(page).toHaveTitle(/Caspar Camille Rubin/i);

  const nameHeading = page.getByRole("heading", { level: 1 });
  await expect(nameHeading).toBeVisible();
  await expect(nameHeading).toContainText(/Caspar/);
  await expect(nameHeading).toContainText(/Rubin/i);

  await expect(
    page.getByText(/Full-Stack Software Engineer/, { exact: false })
  ).toBeVisible();
}
