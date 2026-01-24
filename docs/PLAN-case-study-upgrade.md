# PLAN-case-study-upgrade

> [!IMPORTANT]
> **Decision: NEXT.JS MIGRATION**
> To align with the goal of targeting L2 roles at Google/Meta, this plan now includes a migration from Create React App to **Next.js**. This aligns with modern industry standards and allows for file-system based routing (`/case-studies/[slug]`).

## Goal Description
Transition the portfolio to a Next.js application to support "Deep Dive Case Studies" with Server-Side Rendering (SSR), improved SEO, and modern architecture.

## Proposed Changes

### 1. Migration to Next.js
- **Dependencies:** Remove `react-scripts`. Install `next`, `react`, `react-dom`.
- **Config:** Add `next.config.mjs`, `tsconfig.json` updates.
- **Structure:**
  - Move `src/` to `app/` (using App Router) or keep `src/` and add `app/` directory.
  - Convert `App.tsx` to `app/layout.tsx` and `app/page.tsx`.
  - Move global styles.

### 2. Data Structure (`src/data/projects.ts`)
Extract the `projects` array from `Projects.tsx` into a dedicated data file.

```typescript
export interface DeepDiveContent {
  problemStatement: string;
  architectureDiagramUrl: string; // Placeholder
  challengesOvercome: string[];
  outcomeMetrics: string[]; // e.g., "90% accuracy"
}

export interface Project {
  id: number;
  slug: string; // New field
  title: string;
  description: string;
  technologies: string[];
  category: 'fullstack' | 'ml' | 'frontend' | 'backend';
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  deepDiveContent?: DeepDiveContent; // Optional, only for top 3
}
```

### 3. Components

#### [NEW] `src/components/ProjectNavigator.tsx`
Logic to navigate between projects cyclically. Next.js `<Link>` will be used.

#### [NEW] `app/case-studies/[slug]/page.tsx`
The layout template for the case study.
- **Dynamic Route:** Uses `params.slug` to look up project data.
- **Layout:** Hero, Challenge, Solution, Impact.

## Timeline / Checklist

- [ ] **Phase 1: Next.js Migration**
    - [ ] Install Next.js dependencies.
    - [ ] Set up `app` directory structure.
    - [ ] Migrate `App.tsx` -> `app/layout.tsx` (Home).
    - [ ] Ensure Tailwind/PostCSS works with Next.js.

- [ ] **Phase 2: Data & Routing**
    - [ ] Create `src/data/projects.ts` with slugs.
    - [ ] Create `app/case-studies/[slug]/page.tsx`.

- [ ] **Phase 3: Components**
    - [ ] Implement `ProjectNavigator`.
    - [ ] Build Case Study UI sections.

## Verification Plan

### Automated Tests
- **Method:** `npm run dev` / `npm run build`
- **Verify:** Next.js build succeeds without errors.
- **Tests:** Verify routing works for `/case-studies/dsa-platform`.

### Manual Verification
1.  **Migration Check:** Home page looks identical to before.
2.  **Routing Check:** Navigation to case studies works.
