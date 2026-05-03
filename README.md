# casparrubin.ch

Personal website of Caspar Camille Rubin.

[![Next.js](https://img.shields.io/badge/Next.js_16-000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-58c4dc?logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-0f172a?logo=tailwindcss&logoColor=38bdf8)](https://tailwindcss.com/)
[![Playwright](https://img.shields.io/badge/Playwright-2ead33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![Prettier](https://img.shields.io/badge/Prettier-1a2c34?logo=prettier&logoColor=white)](https://prettier.io/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript_6-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## Prerequisites

- **Node.js** 24.x (`engines.node` in `package.json`).
- **[Bun](https://bun.sh/)** for installs and npm scripts (`bun.lock`); you can
  substitute `npm`/`pnpm` if you prefer.

## Scripts

| Command                           | Purpose                                                                 |
| --------------------------------- | ----------------------------------------------------------------------- |
| `bun run dev`                     | Next.js dev server (Turbopack).                                         |
| `bun run build` / `bun run start` | Production build and server.                                            |
| `bun run lint`                    | ESLint, **no warnings** (`--max-warnings 0`).                           |
| `bun run lint:fix`                | ESLint with `--fix`.                                                    |
| `bun run format`                  | Apply **Prettier** across the repo (`prettier.config.mjs`).             |
| `bun run format:check`            | Verify formatting (CI-style).                                           |
| `bun run predeploy`               | `lint` → `format:check` → Playwright `test` → `build`.                  |
| `bun run test`                    | Playwright smoke tests in `e2e/`.                                       |
| `bun run test:ci`                 | Same as `test`, with `CI=1` so Playwright starts the dev server itself. |
| `bun run test:install`            | Download Chromium for Playwright (run once per machine or CI image).    |

## Testing

Locally, `bun run test` tries to **reuse** a dev server already listening at
`127.0.0.1` on **`PORT`** (see `playwright.config.ts`; unset → **3000**).
**`bun run test:ci`** is meant for automation: only one Next.js dev server may
run per project directory, so do not keep `next dev` open in parallel when using
`test:ci`.

## Stack notes

UI is scaffolded with the **shadcn/ui** CLI and **style `base-lyra`**
(`components.json`); primitives come from **`@base-ui/react`**. Deployed with
**Vercel** (`@vercel/analytics`).
