# HXI Lab Website V2

A redesigned Next.js website for the Human-X Interaction Lab at the University of Calgary.

## Local run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Upload/commit the project files to the existing GitHub repository connected to Vercel. Vercel should detect Next.js and redeploy automatically.

## Content editing

Most recurring content is in `data/site.ts`:
- currentMembers / alumni
- researchThemes / applicationAreas
- projects
- publications
- latestNews
- funding / collaboratorLogos

Images are under `public/assets/`.

## Publication filters

The Publications page supports:
- All
- Journal (includes journal articles + journal editorials)
- Conference
- Workshop
- Poster / EA (includes posters + extended abstracts)
- Book (book chapters)
- Other
- Year filter
- live text search

## Migration note

This V2 build migrates the current HXI visual assets and a curated, verified set of publication records to validate the interaction and information architecture. The remaining historical publication records can be copied into the same `publications` data array without changing the UI.
