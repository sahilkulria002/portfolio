# Sahil Kulria: Robotics Portfolio + SVM Dhukra Initiative

This is a static website (plain HTML, CSS and JS) with no build step and no Node.js required. Open `index.html` in a browser to preview it.

```
index.html                     Main portfolio (dark theme)
assets/css/main.css            Main portfolio styles (colour tokens at the top)
assets/js/site.js              Shared: mobile menu, scroll reveal, footer year
assets/img/                    Portrait and favicon

svm-dhukra/
  index.html                   SVM Dhukra school page: lab, student projects, approach, plans
  partner.html                 Sponsor page (the link to email suppliers). Add ?for=Robocraze to show
                               "Prepared for Robocraze" at the top
  svm-data.js                  ★ ALL school content: stats, projects, videos, requirements, tiers
  svm-render.js                Renders svm-data.js into the pages (no need to edit)
  svm.css / doc.css            Page styles / A4 print-document styles
  school-portfolio.html        Document A (editable source)
  hardware-proposal.html       Document B (editable source)
  downloads/*.pdf              Generated PDFs (rebuild with tools/build-pdfs.ps1)
  img/                         Web-sized project photos (published)
  media/                       Original videos/photos (local only, git-ignored)

materials/                     Not published on the website
  outreach/                    Email, WhatsApp, LinkedIn, follow-up and pitch for each sponsor type
  school-project-inventory.md  Verified project inventory (to fill in)
  component-requirements.md    Requirements working sheet

tools/build-pdfs.ps1           Regenerates both PDFs with Edge/Chrome
```

## Common updates

| I want to… | Edit |
|---|---|
| Add a student project | `svm-dhukra/svm-data.js` → `projects` (example inside), web-sized photo in `svm-dhukra/img/` (originals stay in `media/`, which is git-ignored) |
| Add a school video | `svm-dhukra/svm-data.js` → `videos` (YouTube video ID only) |
| Change stats or the component list | `svm-dhukra/svm-data.js` |
| Add the robot-arm demo video | `index.html`: search for `PROJECT VIDEO`, paste the YouTube ID, uncomment |
| Add LinkedIn | `index.html`: search for `LINKEDIN`, paste the URL, uncomment |
| Edit portfolio text | `index.html` (each section is labelled with a comment) |

After changing anything school-related, **rebuild the PDFs** so the downloads match the site:

```powershell
powershell -ExecutionPolicy Bypass -File tools\build-pdfs.ps1
```

## Deploy (GitHub Pages)

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages → Source** and select **GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`, which publishes only `index.html`, `assets/` and `svm-dhukra/`.
4. The site will be at `https://<username>.github.io/<repo>/`. All links are relative, so it works at any sub-path.
   For a custom domain, add it under Settings → Pages.

Any other static host (Netlify, Cloudflare Pages, Vercel) works too: drag-and-drop the same three items.

## Accuracy rules for this project

- Professional facts come from the resume only. The Wipro PARI entry is deliberately generic.
- Robot-arm specs (payload, reach, accuracy) are not published until they've been measured.
- School projects are added only from real photos and videos. Never list components that can't be confirmed.
- Contribution levels are proposals, not commitments. Never state that a company has agreed to sponsor.
