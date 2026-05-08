<div align="center">

# QCSA
### Quantum Computing Science Association

*Connecting quantum computing students, researchers, and industry professionals across California.*

[![Live Site](https://img.shields.io/badge/Live%20Site-qcsa--ucla.org-234285?style=for-the-badge&logo=globe&logoColor=white)](https://qcsa-ucla.org)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deployed on Cloudflare](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)

</div>

---

## About

QCSA brings together chapters at UCLA, Caltech, USC, UCSD, and UCSB, as well as the **Quantum Device Community (QDC)**. The organization runs workshops, hackathons, research talks, and collaborative events to make quantum computing accessible and exciting for students at every level.

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — Hero, Mission, Branch cards, QDW 2026 banner, CTA |
| `/about-us` | Team page — branch tabs, board member cards with hover bios, faculty advisors |
| `/gallery` | Photo gallery — branch-filtered masonry grid with lightbox |
| `/coming-soon` | Placeholder for the Donate page |

---

## Tech Stack

| Technology | Version | Usage |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.2.3 | App Router, SSR/SSG |
| [React](https://react.dev) | 19.2.4 | UI components |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Styling |
| [framer-motion](https://www.framer.com/motion/) | ^12 | Animations & transitions |
| [lucide-react](https://lucide.dev) | ^1.8 | Icons |
| TypeScript | ^5 | Type safety |

---

## Project Structure

```
app/
├── page.tsx                  # Homepage
├── layout.tsx                # Root layout (Navbar not included here)
├── globals.css               # Global styles
├── about-us/
│   └── page.tsx              # Team & advisors page
├── gallery/
│   └── page.tsx              # Photo gallery
├── coming-soon/
│   └── page.tsx              # Donate placeholder
└── components/
    ├── Navbar.tsx            # Site-wide navigation (logo → home)
    ├── Hero.tsx              # Homepage hero section
    ├── Mission.tsx           # Mission statement section
    ├── Branches.tsx          # Branch cards (UCLA, QDC linked)
    ├── CTA.tsx               # Call-to-action section
    ├── Footer.tsx            # Site footer
    ├── QDWBanner.tsx         # QDW 2026 event advertisement banner
    └── ui/
        └── button.tsx        # Shared Button component
public/                       # Static assets (images, logos, posters)
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # Production build
npm run start   # Run production build locally
npm run lint    # Lint with ESLint
```

---

## Deployment

The site is deployed on **Cloudflare Pages**. Next.js image optimization is disabled (`images: { unoptimized: true }` in `next.config.ts`) for Cloudflare compatibility.

---

## Branch Links

| Branch | Website |
|---|---|
| UCLA | [qcsa-ucla.org](https://qcsa-ucla.org) |
| QDC | [qdc-qcsa.org](https://qdc-qcsa.org) |
| Caltech, USC, UCSD, UCSB | Coming soon |
