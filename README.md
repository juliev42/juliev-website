# Julie Vaughn — Humane AI for Health

Next.js 14 + TypeScript site with Tailwind, shadcn-style components, MDX writing, and Framer Motion micro-interactions.

## Quick start

```bash
pnpm install
pnpm dev
```

Other package managers work too (`npm install && npm run dev`).

## Content editing
- Projects live in `content/projects/*.json` (schema: title, oneLiner, role, dates, links, tags, cover).
- Writing and poetry live in `content/writing/*.mdx` with front matter (title, description, date, tags, cover). Essays auto-generate a table of contents.
- Images live under `public/images`.

## Tech
- Next.js App Router, React Server Components, MDX via `@next/mdx` + `next-mdx-remote`.
- Tailwind CSS with custom tokens for dark-first theming; shadcn-inspired UI primitives.
- Framer Motion for animations; next-themes for light/dark toggle.
- Accessible navigation with skip link, route highlighting, and prefers-reduced-motion fallbacks.

## Deployment
Deploy to Vercel:
1. Push this repo to GitHub.
2. Create a new Vercel project, import the repo, and pick the Next.js framework preset.
3. Set build command `pnpm build` (or `npm run build`) and output `.next`.
4. Add a custom domain (e.g., `juliev.com`).

## Notes
- `/api/contact` logs payloads server-side and returns `{ ok: true }`.
- Plausible/analytics is stubbed; add your script in `app/layout.tsx` when ready.
