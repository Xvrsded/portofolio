# Deployment Guide (Vercel)

## Pre-deploy Checklist
- Use Node.js `20.x` (see `.nvmrc`).
- Install dependencies with lockfile: `pnpm install`.
- Verify quality gates:
	- `npm run lint`
	- `npm run typecheck`
	- `npm run build`
- Confirm profile/project/contact content in `data/*.ts` is up to date.

## Steps
1. Push repository to GitHub.
2. Import project in Vercel.
3. Framework preset: Next.js.
4. Build command: `npm run build`.
5. Output directory: default (`.next`).
6. Deploy.

## Recommended Vercel Settings
- Enable Analytics.
- Enable automatic preview deployments.
- Set Node.js version to `20.x`.

## CI/CD Suggestion
- Protect `main` with required checks:
	- `npm run lint`
	- `npm run typecheck`
	- `npm run build`
- Auto-deploy previews on pull requests.

## Post-deploy Validation
- Validate `sitemap.xml` and `robots.txt`.
- Run Lighthouse on production URL.
- Confirm all navigation anchors and contact links.

## Quick Smoke Test
- Open `/` on desktop and mobile widths.
- Test all nav anchors: Home, About, Experience, Projects, Skills, Contact.
- Test filter buttons in Projects.
- Submit Contact form and verify success message appears.
