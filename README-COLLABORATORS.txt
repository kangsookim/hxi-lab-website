HXI Lab Research Collaborators update

Changes:
- Research Collaborators rebuilt as 16 entries in a 4-column desktop logo wall.
- Added uploaded collaborator logos under public/assets/collaborators/.
- VizUS temporarily uses the supplied Utah State University seal.
- HUG moved from Funding Agencies to Research Collaborators.
- Raster logos converted to WebP and obvious empty borders trimmed where safe.
- SVG retained for NUS JEDI Lab and Utah State University for vector quality.

Files to copy into the existing project:
- app/funding-collaborators/page.tsx
- app/globals.css
- data/site.ts
- public/assets/collaborators/*

Note: npm build was not run in this exported copy because node_modules is not present in the working package. Run npm run build in your local project after copying these files.
