### Goal
Help contributors and AI agents make small, safe, and idiomatic changes to this Next.js (app router) TypeScript project that uses TailwindCSS and static exports.

### Quick facts (what to know immediately)
- Framework: Next.js 15 (App Router). Project root uses `app/` with server/client components.
- Styling: Tailwind CSS (see `tailwind.config.ts`) and global styles in `src/app/globals.css`.
- Build: static export enabled in `next.config.mjs` (output: "export"). Use `npm run dev` (turbopack) for local dev and `npm run build` then `npm run start` for production-like checks.
- Types: TypeScript with path alias `@/*` mapped to `./src/*` in `tsconfig.json`.
- Language/Direction: Arabic UI. Root layout sets `lang='ar'` and `dir='rtl'` in `src/app/layout.tsx` — be careful with LTR assumptions.

### Where to look for common patterns
- Routes & pages: `src/app/*.tsx` and nested folders (e.g. `src/app/about/*`, `src/app/cleaning/*`). Pages are server components by default; files that need client interactivity use `"use client"` at top.
- Shared UI: `src/components/` contains `Nav.tsx`, `Footer.tsx`, `TermsModal.tsx`, `Logo.tsx`. Follow their existing prop patterns and aria attributes.
- Static data: Most page content is provided via plain TS files under `src/app/*/_data.ts` and `src/data/*` (e.g., `src/app/about/_data.ts`, `src/data/heroSlides.ts`). Edit these to change copy/UI content rather than hard-coding in components.
- Assets: images/videos/icons are in `public/` (e.g., `public/images/about/`, `public/videos/`). Use absolute paths (`/images/...`) consistent with Next static serving.

### Conventions and gotchas (do not assume defaults)
- Client vs Server: Add `"use client"` only when component uses state, effects, refs, or browser-only APIs. Many components are server components — prefer server rendering for static content.
- Prefetching: Nav links set `prefetch={false}` intentionally. Preserve this unless you understand the navigation trade-offs.
- RTL layout: UI uses right-to-left alignment and Arabic strings; ensure any inserted text or icons respect `dir='rtl'` and `text-right` utilities.
- Images: `next.config.mjs` disables optimization (images.unoptimized: true). Components often pass remote/static images to `next/image` with `fill` or fixed sizes — keep the same props.
- Export build: site is configured for static export (output: "export" and trailingSlash: true). Avoid server-only APIs, getServerSideProps, or any Node-only runtime code.

### Typical tasks examples (how to make safe edits)
- Add new static content: create or edit `src/app/<route>/_data.ts` and update the page to import fields. Follow existing data shapes (see `src/app/about/_data.ts` for types: `BulletBlock`, `Gallery`, `Partner`, `TimelineItem`).
- Small UI change: prefer editing `src/components/*` and reusing Tailwind classes. Keep aria labels and focus styles (see `Nav.tsx` and `TermsModal.tsx`) for accessibility.
- Replace or add image assets: add to `public/images/...` and reference with `/images/...`. Update any TS files referencing images.

### Build & dev commands (exact)
- Install: npm install
- Dev (fast): npm run dev  # uses `next dev --turbopack`
- Build (static export): npm run build
- Start (serve built output): npm run start
- Lint: npm run lint

### Tests & CI
- No test suite present. Changes should be validated by running dev and build commands locally. The project expects static export — verify `npm run build` completes without server/runtime-only APIs.

### Safety rules for AI edits
1. Do not introduce server-only APIs (getServerSideProps/api routes) — project is static-export oriented.
2. Preserve directionality: do not change `dir='rtl'` in `src/app/layout.tsx` unless explicitly requested.
3. When modifying routing or links, keep `prefetch={false}` unless there's a clear reason to change.
4. Keep accessible attributes (aria-labels, roles, keyboard handlers). Many components include keyboard interactions and focus management.
5. When changing paths or adding imports use `@/` alias or relative imports consistent with `tsconfig.json`.

### Useful files to reference (examples)
- `src/app/layout.tsx` — global layout, metadata, rtl + global CSS
- `src/app/page.tsx` — main home page demonstrating client state, carousels, images, and animations
- `src/components/Nav.tsx` — navigation patterns, active link logic (`useIsActive`) and mobile menu
- `src/app/about/_data.ts` — canonical data shapes and content types for pages
- `next.config.mjs`, `tailwind.config.ts`, `tsconfig.json` — important build/runtime config

If anything in this doc is unclear or you want more detail (edge cases, preferred commit style, or CI details), tell me which section to expand and I will iterate.
