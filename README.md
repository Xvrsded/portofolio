# Muhamad Guntur Irwansyah Portfolio

Professional, modern, high-performance personal portfolio built with Next.js 14, TypeScript strict mode, Tailwind CSS, Framer Motion, and Vercel Analytics.

## Tech Stack
- Next.js 14 (App Router)
- React 18 + TypeScript (strict)
- Tailwind CSS + custom theme system
- Framer Motion
- React Hook Form + Zod
- Vercel Analytics

## Architecture
```
/app
/components
	/sections
	/ui
	/animations
/data
/hooks
/lib
/styles
/public
/types
```

All section content is data-driven from files inside `data/`.

## Required Components Implemented
- Scroll Float
- Scroll Reveal
- Shiny Text
- Split Text
- Profile Card
- Pill Nav
- Logo Loop
- Lanyard
- Gradient Text
- Gradual Blur

## Performance Implementations
- `next/image` for optimized images
- Dynamic imports for heavy sections
- Code-splitting through App Router and dynamic chunks
- Optimized fonts via `next/font`
- Compressed assets (SVG)

## SEO & Accessibility
- Metadata, OpenGraph, Twitter card
- JSON-LD Person schema
- `sitemap.ts` and `robots.ts`
- Keyboard-friendly navigation and semantic sections
- Reduced-motion handling and high-contrast dark mode tokens

## Commands
- `npm run dev` - start development
- `npm run lint` - lint checks
- `npm run typecheck` - TypeScript checks
- `npm run build` - production build
- `npm run start` - run production server
- `npm run format` - format code

## Deployment
Deploy directly to Vercel. See `DEPLOYMENT_GUIDE.md` for full steps.

## Content Updates
- Profile: `data/profile.ts`
- Experience: `data/experience.ts`
- Projects: `data/projects.ts`
- Skills: `data/skills.ts`

See `SETUP_GUIDE.md`, `DEPLOYMENT_GUIDE.md`, and `UPDATE_GUIDE.md` for operational documentation.
