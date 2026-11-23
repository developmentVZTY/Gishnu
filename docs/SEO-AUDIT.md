# Gishnu Gears website: redesign and SEO audit report

Date: 23 November 2026 · Scope: complete rebuild of www.gishnugears.com (39 pages)

## 1. Summary

The site has been rebuilt from the ground up as a fast static site with a single design system, unique SEO metadata and structured data on every page, and a technical SEO foundation that did not exist before (sitemap, robots.txt, llms.txt, canonicals, redirects).

Everything below marked **Verified** was tested locally against a server that mimics Vercel. Items that need the live domain, a Google account or a decision from Gishnu Gears are listed in sections 6 and 7. **Nothing has been deployed or committed.**

| | Before | After |
|---|---|---|
| Pages | 30 files, 5 of them duplicates or broken copies | 39 pages, no duplicates |
| Unique titles / descriptions | 1 description shared by every page; home title was "Gishnu" | 38 unique titles and descriptions |
| Canonical URLs | Pointing at `gishnu.vercel.app` or the wrong page | Self-referencing, absolute HTTPS |
| `<h1>` per page | 0 to 6 | Exactly 1 |
| Sitemap, robots.txt, llms.txt | None (404) | All generated on every build |
| Structured data | One `WebSite` node | Organization/LocalBusiness, WebSite, WebPage, BreadcrumbList, Product, BlogPosting, FAQPage, ItemList, VideoObject |
| Image `alt` text | Mostly empty | Descriptive on every content image |
| CSS shipped | about 1.1 MB (unused WordPress theme) | 61 kB (13 kB compressed) |
| JavaScript shipped | about 290 kB plus scripts hot-linked from an unrelated site | 3 kB core, feature modules loaded only where used |
| Third-party images | Blog images hot-linked from Pinterest, iStock, Dreamstime and others | None. All imagery is Gishnu's own |

## 2. How it was tested

| Check | Method | Result |
|---|---|---|
| SEO rules | Build-time audit in `tools/build.mjs` (fails the build) | Pass: unique title, description and primary keyword per page; one `<h1>`; no skipped heading levels; every image has `alt`, width and height; all JSON-LD parses; no broken internal links or missing images |
| Rendering | Headless Chrome crawl of all 39 pages at 360, 768, 1024, 1440 and 1920 px | Pass: no JavaScript errors, no failed requests, no broken images, no horizontal overflow |
| Links | Every internal link found on any page requested directly | Pass: 39 distinct internal URLs, all return 200 with no redirect hop |
| Redirects | 59 old URLs (every rule, with and without trailing slash) followed on the live site, 24 Nov 2026 | Pass: each ends on the right page with status 200. The first deploy returned 404 for 14 folder-style addresses; fixed the same day (see section 5) |
| Interaction | 46 scripted checks: mega menu, mobile menu, showcase tabs, series filter, gallery, map tabs, form validation, form success and failure | 46 of 46 pass |
| Accessibility | axe-core (WCAG 2.1 A/AA, 2.2 AA and best practices) on 19 pages, desktop and mobile | 0 violations |
| No JavaScript | Pages loaded with scripting disabled | Content fully visible; all nine series shown |
| Reduced motion | `prefers-reduced-motion: reduce` | Animations disabled |
| Performance | Lighthouse 12, lab conditions (see section 4) | 96 to 100 |

Form submissions were tested with the EmailJS endpoint intercepted, so **no real email was sent**. The request was confirmed to use the existing service, template, public key and field names.

## 3. Completed

### Design and UX
- One design system: graphite and warm off-white surfaces, the brand orange as the single accent, Archivo (variable) for text and IBM Plex Mono for technical data. Fonts are self-hosted.
- All 24 3D product renders are reused unchanged (20 from the repository, 4 recovered from the old `gishnu.vercel.app` deployment where they were only hot-linked). They are trimmed of empty margin, resized and converted to AVIF/WebP. Originals are kept in `src/images/originals/`.
- Product presentation: lit "stage" with a graduated dial, pointer-driven 3D tilt, interactive series showcase on the homepage, product gallery with multiple views.
- Each page type has its own layout: home, products hub (filterable grid), all-products catalogue (rows plus comparison table), series, product detail, aerator landing page, projects, infrastructure, about, careers, blog listing, article, contact, privacy policy, 404.
- Mobile-first: full-screen menu, buttons, chips and menu items at least 44 px tall on touch screens, layouts designed for small screens rather than scaled down.
- No testimonials section. There is no genuine testimonial content, and none was invented.

### On-page SEO
- Keyword map: one primary keyword per page, generated into [`KEYWORD-MAP.md`](KEYWORD-MAP.md). The build fails if two pages claim the same primary keyword.
- Unique title (29 to 64 characters) and meta description (98 to 160 characters) on every page.
- Canonical URL, robots directives, Open Graph and Twitter Card tags, and a unique 1200×630 social image on every page.
- Breadcrumbs (visible and as `BreadcrumbList`) on every page except the homepage.
- Descriptive image filenames (for example `gal-series-aluminium-worm-gearbox-blue-960.avif`) and `alt` text.
- Internal linking: series ↔ products ↔ related series, industries → series, articles → products, footer links to every section.

### Technical SEO
- `robots.txt`, `sitemap.xml` (38 URLs with `lastmod` and image entries), `llms.txt`, `llms-full.txt`, `site.webmanifest`, custom `404.html`. All are regenerated by the build, so new products and articles appear automatically. A sitemap index is not needed for 38 URLs.
- 49 permanent (301) redirect rules in `vercel.json`, plus trailing-slash normalisation.
- Security headers and long-lived cache headers for fingerprinted assets.
- `noindex` on the 404 page only.

### Structured data
JSON-LD `@graph` on every page: `Organization` + `LocalBusiness` (name, legal name, address, phone, GSTIN, map link, social profiles), `WebSite`, `WebPage` (or `AboutPage`, `ContactPage`, `CollectionPage`, `ItemPage`), `BreadcrumbList`. In addition: `Product` on 13 product pages, `BlogPosting` on 4 articles, `Blog`, `ItemList` on listing pages, `FAQPage` on the aerator page, `VideoObject` on the infrastructure page.

Deliberately left out because the facts are not available: prices and offers, ratings and reviews, opening hours, geo-coordinates, email address, `JobPosting` (no specific vacancies are published).

### Local SEO
- Consistent name, address and phone in the footer, contact page, structured data and llms.txt.
- Coimbatore, Tamil Nadu and India are used where they describe the business; no location pages were fabricated.
- Google Maps embed and an "Open in Google Maps" link to the existing Gishnu Gears listing.

### Performance
- AVIF and WebP at up to four widths with `srcset`/`sizes`; explicit dimensions on every image (no layout shift); hero image preloaded with high priority; everything below the fold lazy-loaded.
- One 13 kB (compressed) stylesheet. JavaScript is split: 1.3 kB core, with forms, showcase and gallery code fetched only on pages that use them.
- The EmailJS SDK is no longer downloaded. Forms call the same EmailJS endpoint directly.
- Google Tag Manager and GA4 load after the page has finished loading, so they do not compete with first render.
- The brand film loads only when scrolled into view.

### Accessibility and code quality
- Semantic landmarks, skip link, visible focus styles, keyboard-operable menus, tabs and gallery, native `<dialog>` for the mobile menu.
- Form fields have labels, inline error messages tied to the field, a live status region and focus management.
- Colour contrast meets WCAG AA throughout.
- No frameworks and no runtime dependencies.

## 4. Lighthouse results (lab)

Measured locally with Lighthouse 12 against a server that applies the same compression and caching as Vercel. Mobile uses Lighthouse's throttled "slow 4G, mid-range phone" profile.

| Page | Device | Performance | Accessibility | Best practices | SEO | LCP | TBT | CLS | Page weight |
|---|---|---|---|---|---|---|---|---|---|
| `/` | mobile | 98 | 100 | 100 | 100 | 2.3 s | 0 ms | 0 | 218 KiB |
| `/` | desktop | 100 | 100 | 100 | 100 | 0.7 s | 0 ms | 0 | 393 KiB |
| `/products/` | mobile | 98 | 100 | 100 | 100 | 2.4 s | 0 ms | 0 | 339 KiB |
| `/series/g-series.html` | mobile | 99 | 100 | 100 | 100 | 2.1 s | 0 ms | 0 | 201 KiB |
| `/products/gh-20-80-inline-helical-geared-motor.html` | mobile | 96 | 100 | 100 | 100 | 2.7 s | 0 ms | 0 | 266 KiB |
| `/aerator-gearboxes.html` | mobile | 99 | 100 | 100 | 100 | 2.0 s | 0 ms | 0 | 188 KiB |
| `/all-product.html` | mobile | 98 | 100 | 100 | 100 | 2.5 s | 0 ms | 0 | 329 KiB |
| `/about-us/` | mobile | 99 | 100 | 100 | 100 | 2.0 s | 0 ms | 0 | 221 KiB |
| `/infrastructure/` | mobile | 99 | 100 | 100 | 100 | 2.1 s | 0 ms | 0 | 183 KiB |
| Blog article | mobile | 99 | 100 | 100 | 100 | 2.0 s | 0 ms | 0 | 172 KiB |
| `/contact/` | mobile | 99 | 100 | 100 | 100 | 2.0 s | 0 ms | 0 | 633 KiB |
| `/contact/` | desktop | 100 | 100 | 100 | 100 | 0.6 s | 0 ms | 0 | 771 KiB |

Two caveats. These runs do not include Google Tag Manager and GA4, because analytics is switched off outside the production domain; on the live site they add weight after load. They were also taken before the additional Google tag `GTM-5QV3WRM3` was added to the `<head>` of every page; that tag loads immediately rather than after load, so it has not been measured and the live scores should be re-checked with PageSpeed Insights. And lab numbers are not Core Web Vitals field data, which only Google's Chrome UX Report can provide once the site has traffic. The product-page LCP of 2.7 s is slightly over Google's 2.5 s guideline under the throttled lab profile; the contact page weight is almost entirely the Google Maps embed.

## 5. URL changes and redirects

Existing URLs were kept wherever they were sound, including `/all-product.html`, `/aerator-gearboxes.html` and `/series/*-series.html`. These changed, each with a 301:

| Old URL | New URL | Why |
|---|---|---|
| `/contact.php/` | `/contact/` | A folder named like a PHP file |
| `/Infrastructure/` | `/infrastructure/` | Mixed-case URL; lower case 404'd |
| `/series/galseries.html` | `/series/gal-series.html` | Consistent with the other series |
| `/products/custome-built/` | `/products/custom-built-gearboxes.html` | Misspelt |
| `/products/z-series.html` | `/series/z-series.html` | Duplicate of the series and project pages |
| `/blog/unlocking-power-with-gishnu-g-serier.html` | `/blog/unlocking-power-with-gishnu-g-series-gearboxes.html` | Misspelt |
| `/blog/Gisnu-G-Series-Powering-Innovation-in-Industry.html` | `/blog/gishnu-g-series-powering-innovation-in-industry.html` | Brand name misspelt |
| `/blog/Choosing-the-Right G-Series-Gearbox-for-Your-Application.html` | `/blog/choosing-the-right-g-series-gearbox-for-your-application.html` | Contained a space |
| `/blog/G-Series-Gearboxes-Built-for-Reliability-and-Longevity.html` | `/blog/g-series-gearboxes-built-for-reliability-and-longevity.html` | Mixed case |
| `/Infrastructure222/`, `/blog22/`, `/careers22/` | Their real counterparts | Leftover duplicate folders |
| `/index.html`, `/<section>/index.html` | `/`, `/<section>/` | One URL per page |

New pages: 13 product detail pages under `/products/`, and `/privacy-policy/` (the forms linked to a privacy policy that did not exist).

**Correction after the first deploy (24 Nov 2026).** For a short period after going live, 14 old folder-style addresses returned 404 instead of redirecting: `/Infrastructure/`, `/Infrastructure222/`, `/blog22/`, `/careers22/`, `/contact-us/`, `/products/custome-built/`, `/series/`, `/en/`, `/de/` and the guessed addresses `/all-product`, `/all-products`, `/aerator-gearboxes`, `/about` and `/privacy`. Old `.html` addresses were not affected. Vercel matches a redirect source exactly and adds the trailing slash first, so a rule written as `/old/:path*` did not match `/old/`; the local preview server was more lenient and had passed them. The build now writes a second rule for the trailing-slash form (49 rules in total), the preview server matches the strict way, and all 59 old addresses were re-tested on the live site.

## 6. Content decisions that need confirmation from Gishnu Gears

No specification, certification or customer name was invented. Where the old site contradicted itself or made a claim that could not be supported from the site alone, the safer reading was used. Please confirm or correct each of these.

1. **Named customers.** The old Z-Series page said the gearboxes are "used in Tesla/Mahindra electric vehicles". This now reads "electric vehicle and automation projects". Restore the names only if Gishnu Gears has permission to cite them.
2. **ISO logo.** The old site displayed ISO's own logo. ISO does not allow certified companies to use it, so the site now states "ISO 9001:2015 certified" in text. Recommended: add the certificate number and certification body, and use the certification body's mark.
3. **G-Series gear type.** The site now describes the G-Series as *worm reduction gearboxes*. The old site never named the gear type; this is read from the renders and the GU/GV model naming. Please confirm.
4. **G-Series model ranges.** The series page listed GU 162–337 and GV 400–900; an old blog post said "GU 300–1000". The series page version is used.
5. **Comparison table.** The old "A, B, C, G" row (up to 4,000 Nm, 1–30 HP, 10:1 to 80:1) contradicted the individual series pages, so each series now shows its own published ratio and motor range. The old O-Series row (up to 6,000 Nm, 3–25 HP) was dropped because the O-Series is gears, not gearboxes. Torque figures are kept only where the old site gave one for a single series: GAL 800 Nm, H 5,000 Nm, Z 10,000 Nm.
6. **Aerator specification table.** Carried over word for word (ratios up to 50:1, torque up to 10,000 Nm, EN-GJS-600, VG 220/320 oil). These do not match the A-Series models (ratios 11 to 14.4, 1 to 3 HP). Engineering should check them.
7. **GAL sizes.** The page says GAL 40 to 150; the image files are named "GAL 40 to 90".
8. **A3 image.** The render used for the A3 is a file named "A Series A1 -1". The old page used it for the A3, so that mapping is kept.
9. **Datasheets.** The old "DATASHEET.PDF" buttons pointed to catalogue PDFs that no longer exist anywhere. They are now "Request datasheet" buttons that open the enquiry form with the product filled in. Supply the PDFs and they can become direct downloads.
10. **MM Gears Private Limited.** Listed by name and address as on the old site. `llms-full.txt` calls it an "associated company". Please confirm the wording.
11. **Machinery names.** "Hoffler" and "Klinglenberg" are corrected to Höfler and Klingelnberg. "Brinell hardness tester KB300H" is kept as written.
12. **Company age.** "Over 20 years" is replaced by "since 1995" and "three decades".
13. **Blog dates.** No dates were published. The four articles use 24 May 2025 (when they first went live, from the repository history) as the publication date and today as the modified date. The articles were expanded with general engineering guidance; product facts come from the series pages.
14. **Privacy policy.** Written from what the site actually does (EmailJS, Google Analytics, Google Maps). It should be reviewed by the company's legal adviser.
15. **Careers form.** The old form only showed a pop-up and sent nothing. It now sends through the same EmailJS template as the contact form, with "[Careers application]" at the top of the message. Say if applications should go somewhere else.
16. **Removed.** The homepage line about "valve technology solutions" (left over from the template the site was built on), the stock illustrations, and the hot-linked third-party blog images.

## 7. Pending: needs the live site or account access

| Item | Who | Notes |
|---|---|---|
| ~~Deploy and re-test redirects~~ | Done 24 Nov 2026 | The site is live on Vercel. All 38 sitemap URLs return 200 and all 59 old addresses redirect correctly, including `/Infrastructure/` → `/infrastructure/` (301, no loop). |
| Submit `sitemap.xml` | Site owner | Google Search Console and Bing Webmaster Tools |
| Validate structured data | Developer | Google Rich Results Test and validator.schema.org need public URLs. Locally the JSON-LD was checked for syntax and structure only. `Product` pages carry no price, so they are valid but not eligible for price rich results |
| PageSpeed Insights on live URLs | Developer | Lab figures are in section 4; field data needs real traffic |
| Send one real enquiry and one careers application | Site owner | Confirms EmailJS delivery end to end |
| Verify the additional Google tag `GTM-5QV3WRM3` | Velozity Global Solutions | Added to every page as supplied. Confirm in Tag Assistant that the container fires, and that it does not send page views to the same GA4 property as the original `GTM-5LR7RMVW` / `G-LVZ0ERHB04` setup, which is still in place and would double-count. Unlike the original tags it also loads on preview URLs. |
| Google Business Profile | Site owner | Make the name, address and phone match the site exactly; add the website URL |
| Catalogue PDFs, real factory photography, email address, opening hours | Gishnu Gears | Each would strengthen the site; none could be created without the source material |

One note for transparency: during testing a single analytics page view from `localhost` may have reached the GA4 property before analytics was restricted to the production domain.

### Post-deploy checklist

```text
curl -I https://www.gishnugears.com/                    → 200
curl -I https://www.gishnugears.com/infrastructure/     → 200 (must not redirect)
curl -I https://www.gishnugears.com/Infrastructure/     → 301 → /infrastructure/
curl -I https://www.gishnugears.com/contact.php/        → 301 → /contact/
curl -I https://www.gishnugears.com/series/galseries.html → 301 → /series/gal-series.html
curl -I https://www.gishnugears.com/sitemap.xml         → 200
curl -I https://www.gishnugears.com/robots.txt          → 200
curl -I https://www.gishnugears.com/llms.txt            → 200
curl -I https://www.gishnugears.com/no-such-page        → 404
```

## 8. Recommendations

1. **Publish datasheets.** A downloadable PDF per series is the most-requested asset in this market and gives each product page a reason to be linked.
2. **Add real photography.** Shop-floor, machine and team photographs would lift the infrastructure, about and careers pages more than any design change. The walkthrough video referenced by an old copy of the infrastructure page no longer exists at its address; if the file is available it belongs on that page.
3. **Complete product data.** Dimensions, weights, output speeds and torque by size would make the product pages competitive for specification searches and allow richer `Product` markup.
4. **Publish regularly.** Topics with clear search demand: paddle-wheel aerator gearbox maintenance, worm versus helical gearbox selection, service factor explained, gearbox lubrication intervals. A new article needs one entry in `src/data/posts.mjs`.
5. **Earn local citations.** List the business on IndiaMART, TradeIndia and industry directories with the identical name, address and phone.
6. **Add a consent banner** if marketing to Europe grows. Consent defaults are already set to "denied" for EEA, UK and Swiss visitors, but there is no banner for them to grant consent.
7. **Consider a Content-Security-Policy** once the tags inside the GTM container are known.
8. **Testimonials and client logos** should be added only with written permission from each customer.
