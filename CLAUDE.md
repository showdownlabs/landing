# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint check
npm start        # Start production server
```

## Tech Stack

- **Next.js 16** with App Router (`src/app/`)
- **React 19** with React Compiler enabled (`reactCompiler: true` in next.config.ts)
- **TypeScript** in strict mode; path alias `@/*` → `./src/*`
- **Tailwind CSS 4** via `@tailwindcss/postcss`
- **ESLint 9** flat config extending `next/core-web-vitals` and `next/typescript`

## Architecture

This is the Showdown Labs corporate site. All routes live under `src/app/` using the Next.js App Router convention (each route is a `page.tsx` in its directory).

**Styling pattern:** Pages use inline `React.CSSProperties` objects (defined as a `styles` const at the bottom of each file) rather than Tailwind utility classes. The landing page (`src/app/page.tsx`) uses Tailwind. Follow whichever pattern the file you're editing already uses.

**Fonts:** Geist Sans and Geist Mono loaded via `next/font/google` in `layout.tsx`.

**Design:** Dark theme with `#0b1020` background, `#eaf0ff` text, and `rgba(234,240,255,*)` opacity variants for secondary text.
