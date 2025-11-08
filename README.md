# J3 Swim Fit Website Starter

This repository contains an initial static website implementation and asset organisation plan for the J3 Swim Fit learn-to-swim school located at the Shoppes of Maraval, Trinidad.

## Project Goals

- Present a welcoming, modern landing page that highlights comfort, safety, and stroke development.
- Share class schedules, programme overviews, frequently asked questions, and contact information sourced from the client’s brief.
- Provide an easy call to action linking to the existing Google Form registration.
- Organise assets and code so that future updates remain straightforward for the client or supporting developers.

## Folder Structure

```
site/
├── assets/
│   └── images/
│       ├── logo.png
│       ├── pool-1.jpg
│       └── pool-2.jpg
├── index.html
├── scripts/
│   └── main.js
└── styles/
    └── main.css
```

- `site/index.html`: Main landing page that pulls together the hero section, programme summaries, schedule, FAQ, and registration CTA.
- `site/styles/main.css`: Global styles with colour variables, layout rules, responsive design, and ticker animation.
- `site/scripts/main.js`: Lightweight enhancements for the mobile navigation menu, dynamic copyright year, and ticker duplication.
- `site/assets/images/`: Optimised copies of supplied imagery for use on the web page.

Additional original design files (logo, print assets, photography) remain in the repository root for reference.

## Next Steps & Suggestions

- Add optimised web versions of any additional photography or video assets to `site/assets/` and reference them in new sections as required.
- Consider exporting SVG artwork from the AI/PDF logo for sharper rendering across devices.
- If more pages are needed (e.g., dedicated FAQ or Blog), create additional HTML files within `site/` and reuse the shared CSS/JS assets.
- When ready to deploy, host the contents of the `site/` directory via a static hosting service such as Netlify, Vercel, or GitHub Pages.


