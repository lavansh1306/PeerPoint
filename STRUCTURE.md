# Project structure — DoubtSpark HQ (PeerPoint)

This document gives a guided tour of the important folders and files in the repo so contributors can find their way quickly.

Top-level layout

- `index.html` — Application HTML entry. Meta tags, Open Graph settings, and mount point (`#root`).
- `package.json` — Dependencies and scripts. Use `npm run dev` for local development.
- `vite.config.ts` — Vite configuration and plugins.
- `src/` — Application source code (detailed below).

src/ overview

- `main.tsx` — App bootstrap and render.
- `App.tsx` — Root app component and route wrapper.
- `index.css` / `App.css` — Global and component styles (Tailwind + custom CSS).

Key directories in `src/`

- `components/` — Reusable UI components and small features:
  - `AnimatedPostCard.tsx`, `FloatingParticles.tsx`, `MorphingBackground.tsx`, `XPBarAnimated.tsx` etc.
  - `ui/` — design-system-like primitives (buttons, inputs, forms, dialogs, toasts). These are small, composable, and reusable across pages.

- `hooks/` — Custom React hooks, e.g., `use-mobile.tsx`, `use-toast.ts`.

- `lib/` — Utilities shared across the app, e.g., `utils.ts`.

- `pages/` — Page-level routes for the app:
  - `Feed.tsx` — Main feed of questions/answers.
  - `Profile.tsx`, `Leaderboard.tsx`, `NotFound.tsx`, `Splash.tsx`, `Index.tsx` — other route components.

Other files

- `tailwind.config.ts` — Tailwind configuration and theme extensions.
- `postcss.config.js` — PostCSS setup.
- `tsconfig.json` / `tsconfig.app.json` — TypeScript configuration.

Tests & tooling

- ESLint and TypeScript are used for code quality. See `eslint.config.js` and `tsconfig.json`.

Where to add new things

- New components: `src/components/` or `src/components/ui/` for primitives.
- New pages: `src/pages/`.
- Utilities or shared helpers: `src/lib/`.

Quick tips for contributors

- Keep components small and focused. Prefer composition over large monolithic components.
- Add or update storybook/tests (if present) when adding new UI logic.
- Use TypeScript types for public props and exported functions.

If you'd like, I can generate a visual ASCII tree of the repository or add a `CONTRIBUTING.md` with PR templates next.
