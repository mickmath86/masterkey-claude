# CLAUDE.md — MasterKey

## Project Overview

MasterKey is an AI-powered real estate platform built as a Next.js 16 marketing site. The app is a single-page landing with sections for platform features, services, technology, testimonials, and a CTA.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React Server Components)
- **Language:** TypeScript 5 (strict mode)
- **React:** 19
- **Styling:** Tailwind CSS v4 with `@tailwindcss/postcss`
- **Component Library:** shadcn/ui (new-york style, configured but not yet populated)
- **Icons:** lucide-react
- **Utilities:** clsx + tailwind-merge via `cn()` helper (`src/lib/utils.ts`)

## Design System

### Design References

Use **Tailwind CSS**, **shadcn/ui** (new-york variant), and **Tailark** component patterns as the basis for all UI design. Components should follow shadcn/ui conventions and be compatible with the Tailark layout system.

### Typography

- **Headlines:** Futura (font-family: `"Futura", "Futura PT", "Century Gothic", sans-serif`)
- **Body / standard copy:** Inter (font-family: `"Inter", ui-sans-serif, system-ui, sans-serif`)
- Headlines use tight tracking (`tracking-tighter` or `tracking-tight`) and bold/heavy weights
- Body text uses regular weight with relaxed line-height for readability

### Colors

| Token               | Value       | Usage                              |
|----------------------|-------------|-------------------------------------|
| `--color-accent`     | `#0ea5e9`   | Primary accent (Tailwind `sky-500`) |
| `--color-accent-light` | `#38bdf8` | Lighter accent (Tailwind `sky-400`) |
| `--color-background` | `#000000`   | Page background                     |
| `--color-foreground` | `#ffffff`   | Primary text                        |
| `--color-muted`      | `#a1a1aa`   | Secondary text                      |
| `--color-muted-foreground` | `#71717a` | Tertiary text                  |
| `--color-surface`    | `#111111`   | Card/section backgrounds            |
| `--color-surface-light` | `#1a1a1a` | Hover/elevated surfaces            |
| `--color-border`     | `#262626`   | Borders and dividers                |

The accent color is **sky-500** (`#0ea5e9`). Use `text-accent`, `bg-accent`, `border-accent` etc. via Tailwind theme tokens. The lighter variant (`sky-400` / `#38bdf8`) is used for gradients and hover states.

### Dark Theme

The site is dark-mode only. The `<html>` element has `class="dark"` hardcoded. Do not add light-mode support unless explicitly requested.

### Animations

Custom keyframes defined in `globals.css`:
- `fade-in-up` — entry animation with upward slide
- `fade-in` — simple opacity fade
- `slide-in-left` — entry from left
- `pulse-glow` — subtle pulsing glow (infinite)
- `gradient-shift` — animated gradient backgrounds (infinite)
- Delay utilities: `.delay-100` through `.delay-600`

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Theme variables, animations, Tailwind config
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Landing page (all sections as local components)
│   └── favicon.ico
└── lib/
    └── utils.ts           # cn() helper (clsx + tailwind-merge)
```

### Path Aliases

`@/*` maps to `./src/*` (configured in tsconfig.json).

### shadcn/ui

Configured via `components.json` (new-york style, RSC enabled, lucide icons). Components install to `@/components/ui`. Use `npx shadcn@latest add <component>` to add new components.

## Commands

```bash
npm run dev      # Start dev server (Next.js)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Coding Conventions

- All page components currently live in `src/app/page.tsx` as local function components
- Use `"use client"` directive only when client-side interactivity is needed
- Prefer Tailwind utility classes for styling; avoid custom CSS unless adding new keyframes
- Use the `cn()` utility from `@/lib/utils` for conditional/merged class names
- Follow shadcn/ui patterns when creating reusable components (extract to `src/components/ui/`)
- Use lucide-react for all icons
- Keep class-variance-authority (cva) for component variants
