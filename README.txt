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

INSTALL ON PHONES
  Android (Chrome): open the site > menu (three dots) > "Install app" or "Add to Home screen".
  iPhone/iPad (Safari): open the site > Share button > "Add to Home Screen" > Add.
Open it once while online; after that it works offline.

PUBLISHING AN UPDATE
  1. Edit index.html.
  2. In sw.js change CACHE_VERSION (currently 'ir-suite-v16'; increment this value for each subsequent release).
  3. Re-upload the files. Users receive the update the next time they open the app online
     (close and reopen the app once if it still shows the old version).

NOTES
  - No patient data is collected, sent or stored. Browser local storage keeps the disclaimer preference,
    last tool opened, and the two resource URLs entered by the user. Resource URLs remain on that device/browser profile.
  - Calculators are decision-support references. Verify against current guidelines and institutional protocols.


RESOURCES PAGE
  The Resources page has two independent link fields: Shared Folder and Institutional Resource Page.
  Each user can enter their own HTTPS URL and select Save link. The URLs are saved in localStorage
  for that browser profile on that device; they are not built into the app and are not shared with
  other users or devices. Users can change or clear either link at any time. No default institution
  or default URL is configured. Opening a link may require the user's institutional sign-in.
  Do not enter passwords or patient-identifiable information. On a shared computer, anyone using
  the same browser profile may be able to see the saved URLs.

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
  - Incremented service-worker cache to ir-suite-v16.
  - Resources page now supports independently saved Shared Folder and Institutional Resource Page URLs,
    stored locally per browser/device with no institution-specific default.

LIMITATIONS
  This release has passed source-level checks only. It has not undergone formal clinical validation,
  institutional approval, or complete testing on physical iOS/Android devices, PWA installation,
  offline operation, or service-worker update behavior. RADS summaries and numeric plausibility
  checks have not been exhaustively verified across every field.
