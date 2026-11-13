<div align="center">

# QCSA
### Quantum Computing Science Association

*Connecting quantum computing students, researchers, and industry professionals across California.*

[![Live Site](https://img.shields.io/badge/Live%20Site-qcsa.org-234285?style=for-the-badge&logo=globe&logoColor=white)](https://qcsa.org)
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
| `/research` | Research projects, articles, and team |
| `/nonprofit-info` | Public charity status, organization details, and Tax990 profile |

---

## Tech Stack

| Technology | Version | Usage |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.2.3 | App Router, static generation |
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
├── nonprofit-info/
│   └── page.tsx              # Nonprofit and public-record information
├── coming-soon/
│   └── page.tsx              # Legacy link to QCSA information
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
npm run build   # Generate the static site in out/
npm run lint    # Lint with ESLint
```

---

## Deployment

The site is deployed as a static export on **Cloudflare Pages**. In the Pages project's build settings, select **Next.js (Static HTML Export)** or set:

- **Build command:** `npm run build`
- **Build output directory:** `out`

Replace any existing `npx @cloudflare/next-on-pages@1` build command; the adapter is deprecated and is not needed for this static site. Push the changes and trigger a new deployment after updating the settings.

The export is configured in `next.config.ts`, with Next.js image optimization disabled for static hosting. Run `npm run dev` for local development; to preview a production build, serve the `out` directory with a static file server. `next start` is not supported for static exports. Server-only Next.js features are not available, and new dynamic routes must be generated at build time.

---

## Required Google Ad Grants website checklist

Every developer and reviewer must use this checklist for website changes before merging, and verify affected behavior on the deployed site. The [Google Ad Grants website policy](https://support.google.com/nonprofits/answer/1657899) is the authoritative source and may change; review it when making or reviewing changes. This checklist supports review but does not guarantee compliance or continued approval.

- **Mission and identity:** Keep the nonprofit's mission, activities, and intended audience clear and supported by substantial, original content. Keep the public nonprofit status, address, and EIN in [`app/components/Footer.tsx`](app/components/Footer.tsx) accurate; confirm changes with QCSA leadership. Only publish contact addresses that are monitored and intended for public inquiries.
- **Complete, functional pages:** Do not publish placeholder pages, nonworking buttons, or links to unfinished sites. List Caltech, USC, and UCSD as branches without linking to their websites until those sites are ready. Test changed internal and external links, navigation, contact links, and forms.
- **Donations and commercial activity:** Do not add a donation button until it points to a working, secure HTTPS donation page. Keep the site focused on QCSA's mission; disclose how any commercial proceeds support nonprofit programs and clearly present financial information.
- **Advertising:** Ad Grants funds ads promoting the nonprofit; AdSense displays ads on a website. They are different products. Google's website policy says not to display AdSense ads on an Ad Grants site. Do not add AdSense or other advertising integrations without first checking current Google policy and obtaining QCSA leadership approval; AdSense approval alone does not establish Ad Grants compliance.
- **Security and domains:** Keep the site available over HTTPS without mixed content, and verify HTTP redirects to HTTPS after deployment. QCSA must control any domain submitted for ads; it must directly host the organization's site, not redirect to an unrelated domain or third-party portal. Before using another domain in ads, follow Google's [additional domain approval process](https://support.google.com/grants/contact/grants_v).
- **Mobile and performance:** Check affected pages and interactions on mobile and desktop. Optimize new images and avoid unnecessary scripts; review deployed mobile performance with [PageSpeed Insights](https://pagespeed.web.dev/).
- **Build and release:** Run `npm run build` and `npm run lint`, address issues introduced by the change, then test affected pages on the deployed site. Report any checks that could not be completed to the reviewer.

---

## Branch Links

| Branch | Website |
|---|---|
| UCLA | [qcsa-ucla.org](https://qcsa-ucla.org) |
| QDC | [qdc-qcsa.org](https://qdc-qcsa.org) |
| Caltech, USC, UCSD | No website link currently listed |
