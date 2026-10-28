IR Decision Support Suite: PWA package (v1.2)
=============================================

FILES
  index.html            The app (all calculators and references, no external dependencies)
  manifest.webmanifest  App name, colors, icons
  sw.js                 Offline support (service worker)
  icons/                App icons (Android, iPhone, favicon)

NAVIGATION
  One selector at the top opens a list of every tool, grouped by topic under dark headings.
  The last tool you used is remembered, and each tool has its own link (e.g. yoursite/#hold).

DISCLAIMER
  Phones and tablets: shown once, on first launch. Computers (mouse/trackpad devices): shown every time the app opens,
  so it is never mistaken for an official or institution-approved application.
  The full text is under "Disclaimer & About". If you change the wording, change the disclaimer key
  ('ir_disclaimer_v2' in index.html) to 'ir_disclaimer_v3' so phone users are asked to accept it again.

HOSTING (required: HTTPS). Pick one, all free:
  A) Netlify Drop:      app.netlify.com/drop, drag this whole folder onto the page.
  B) GitHub Pages:      upload these files to a repository, then Settings > Pages > deploy from the main branch.
  C) Cloudflare Pages:  create a project and upload the folder.
Keep the folder structure. Relative paths mean it also works from a sub-folder.

INSTALL ON PHONES
  Android (Chrome): open the site > menu (three dots) > "Install app" or "Add to Home screen".
  iPhone/iPad (Safari): open the site > Share button > "Add to Home Screen" > Add.
Open it once while online; after that it works offline.

PUBLISHING AN UPDATE
  1. Edit index.html.
  2. In sw.js change CACHE_VERSION (currently 'ir-suite-v6'; use 'ir-suite-v7' for the next release).
  3. Re-upload the files. Users receive the update the next time they open the app online
     (close and reopen the app once if it still shows the old version).

LICENSE
  Add a LICENSE file to the repository before publishing (GitHub: Add file > Create new file >
  name it LICENSE and choose a template). See the chat notes on MIT vs GPL vs AGPL.

NOTES
  - No patient data is collected, sent or stored. Only two preferences are kept in the browser:
    disclaimer accepted, and last tool opened.
  - Calculators are decision-support references. Verify against current guidelines and institutional protocols.
