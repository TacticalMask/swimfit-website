# J3 Swim Fit Website Starter

This repository contains two static website experiences for the J3 Swim Fit learn-to-swim school located at the Shoppes of Maraval, Trinidad:

- **Single-page experience**: the original landing page that combines programme highlights, schedule snapshots, FAQs, and a registration call-to-action in one scrollable view.
- **Multipage experience**: an alternative build that splits the content across dedicated Home, About, Schedule & FAQ, Contact/Registration, and Blog pages while reusing the same messaging and data.

## Folder Structure

```
site/
├── assets/
│   └── images/
│       ├── logo.png
│       ├── pool-1.jpg
│       └── pool-2.jpg
├── about.html
├── blog.html
├── contact-registration.html
├── index.html
├── schedule-faq.html
├── single-page.html
├── scripts/
│   ├── main.js
│   └── multipage.js
└── styles/
    ├── main.css
    └── multipage.css
```

- `site/single-page.html`: Original one-page layout that continues to use `styles/main.css` and `scripts/main.js`.
- `site/index.html`, `site/about.html`, `site/schedule-faq.html`, `site/contact-registration.html`, `site/blog.html`: The multipage variant, all powered by `styles/multipage.css` and `scripts/multipage.js` for shared styling and behaviour.
- `site/assets/images/`: Optimised copies of supplied imagery for use on the web pages.

Additional original design files (logo, print assets, photography) remain in the repository root for reference.

## Next Steps & Suggestions

- Add optimised web versions of any additional photography or video assets to `site/assets/` and reference them in the relevant sections.
- Consider exporting SVG artwork from the AI/PDF logo for sharper rendering across devices.
- Keep blog entries fresh by replacing the placeholder content in `site/blog.html` with real programme updates or swim tips.
- When ready to deploy, host the contents of the `site/` directory via a static hosting service such as Netlify, Vercel, or GitHub Pages.


