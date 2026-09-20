# HXI Lab Website — Next.js

A redesigned website for the Human-X Interaction Lab at the University of Calgary.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build static site

```bash
npm run build
```

The site uses `output: 'export'`, so the deployable static site is generated in `/out`.

## Deploy with GitHub + Vercel

1. Create a GitHub repository (for example `hxi-lab-website`).
2. Push this project to the repository.
3. Sign in to Vercel and import the GitHub repository.
4. Vercel should detect Next.js automatically; deploy with the defaults.
5. In Vercel → Project → Settings → Domains, add `hxi-lab.ca` and `www.hxi-lab.ca`.
6. Update DNS records at the domain registrar using the exact values Vercel provides.
7. After DNS verification, choose the preferred canonical domain and redirect the other one.

Every push to the production branch will then redeploy the website automatically.

## Editing content

Most recurring content is in:

`data/site.ts`

Edit arrays there to add or update:
- research areas
- application areas
- projects
- team members
- publications
- news

## Replacing initials with member photos

The first prototype deliberately uses graphic initials rather than copying photos from the existing Google Site. Add optimized photos under `public/people/`, then replace the `.avatar` block in `app/team/page.tsx` with `next/image`.

## Recommended next steps

- Add actual HXI project and lab photography.
- Add complete publication history, DOI/PDF/video/code links.
- Add alumni section.
- Add collaborators/funding page if desired.
- Add analytics (e.g. privacy-friendly Plausible or Vercel Analytics).
- Add SEO/social preview image.
