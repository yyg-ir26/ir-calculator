IR Decision Support Suite: PWA package (v1.6)
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

SOURCE CONTROL AND HOSTING (required: HTTPS)
  1. Upload the contents of this package's ir-suite-pwa folder to a GitHub repository.
     Use a private repository if you want the source restricted to invited collaborators.
  2. Connect that repository to Cloudflare Pages and select the branch you want to deploy.
     This is a static site: no build command is required. Set the output directory to the
     folder containing index.html (the repository root if you uploaded these files directly).
  3. Before sharing the site, configure and test a Cloudflare Access application/policy so
     only the intended users can reach it. A private GitHub repository does not make the
     deployed website private by itself.
  Keep the folder structure. Relative paths mean it also works from a sub-folder.

INSTALL ON PHONES
  Android (Chrome): open the site > menu (three dots) > "Install app" or "Add to Home screen".
  iPhone/iPad (Safari): open the site > Share button > "Add to Home Screen" > Add.
Open it once while online; after that it works offline.

PUBLISHING AN UPDATE
  1. Edit index.html.
  2. In sw.js change CACHE_VERSION (currently 'ir-suite-v12'; increment this value for each subsequent release).
  3. Re-upload the files. Users receive the update the next time they open the app online
     (close and reopen the app once if it still shows the old version).

LICENSE
  Add a LICENSE file to the repository before publishing (GitHub: Add file > Create new file >
  name it LICENSE and choose a template). See the chat notes on MIT vs GPL vs AGPL.

NOTES
  - No patient data is collected, sent or stored. Only two preferences are kept in the browser:
    disclaimer accepted, and last tool opened.
  - Calculators are decision-support references. Verify against current guidelines and institutional protocols.


IR TEAM RESOURCES LINK
  In index.html, search for: const IR_RESOURCES_URL = '';
  Paste the full UH SharePoint folder URL between the quotes, for example:
    const IR_RESOURCES_URL = 'https://your-organization.sharepoint.com/sites/...';
  Save the file and publish the updated package. The link opens in a new browser context;
  users may need to sign in with their UH institutional account.

NEW REFERENCE PAGE
  The SIR Antibiotic Guidelines page provides a condensed summary based on the 2018 SIR Practice Parameter Update.
  It is explicitly dated and is not a substitute for current antimicrobial-stewardship
  guidance, pharmacy review or local protocols.


VERSION 1.6 UPDATE (November 2026)
  - Y-90: no default lung mass is assumed; a valid entered lung mass is required for mean lung-dose calculation.
    The conventional 1 kg assumption is explained but is not silently applied.
  - Cockcroft-Gault: added actual, Devine ideal, and adjusted body-weight selection; height is required
    for ideal/adjusted calculations, and the weight actually used is displayed.
  - LAST: expanded the reference using the ASRA 2020 checklist, including lipid dosing, repeat/double
    instructions, maximum dose, seizure/ACLS cautions, and observation windows.
  - Incremented service-worker cache to ir-suite-v12.

LIMITATIONS
  This release has passed source-level checks only. It has not undergone formal clinical validation,
  institutional approval, or complete testing on physical iOS/Android devices, PWA installation,
  offline operation, or service-worker update behavior. RADS summaries and numeric plausibility
  checks have not been exhaustively verified across every field.
