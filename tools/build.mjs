// Static site generator for gishnugears.com
// -----------------------------------------------------------------------------
//   cd tools && npm install && npm run build
//
// Reads content from src/data, templates from src/templates, styles from
// src/css and scripts from src/js, and writes the finished site into the
// repository root (the folder Vercel serves). It also regenerates sitemap.xml,
// robots.txt, llms.txt, llms-full.txt, vercel.json and docs/KEYWORD-MAP.md, so
// they can never drift out of step with the pages.
//
// The build fails loudly on SEO or link problems (see `audit` at the bottom).

import { mkdir, readFile, writeFile, readdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { site, machinery, industries } from '../src/data/site.mjs';
import { series, products, zProjects } from '../src/data/catalog.mjs';
import { posts } from '../src/data/posts.mjs';
import { document as shell } from '../src/templates/layout.mjs';
import { seriesUrl, productUrl, productsOf, seriesById, imageSrc, abs } from '../src/templates/components.mjs';
import { home } from '../src/templates/home.mjs';
import { productsHub, allProducts, seriesPage, productPage, aerator } from '../src/templates/catalog.mjs';
import { about, infrastructure, projects, projectZ, careers, contact, privacy, notFound } from '../src/templates/company.mjs';
import { blogIndex, blogPost, postUrl } from '../src/templates/blog.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT_DATE = '2026-11-23'; // date of the last content revision; bump when page copy changes
const out = (...p) => path.join(ROOT, ...p);
const hash = (s) => createHash('sha256').update(s).digest('hex').slice(0, 10);
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

async function write(file, content) {
  await mkdir(path.dirname(out(file)), { recursive: true });
  await writeFile(out(file), content);
}

// ---- 1. Assets: bundle, minify, fingerprint ---------------------------------------
let esbuild = null;
try { esbuild = await import('esbuild'); } catch { console.warn('! esbuild not installed: CSS/JS will be written unminified. Run "npm install" in tools/.'); }

async function minify(code, loader) {
  if (!esbuild) return code;
  const res = await esbuild.transform(code, { loader, minify: true, legalComments: 'none', ...(loader === 'js' ? { format: 'esm', target: 'es2020' } : {}) });
  for (const w of res.warnings) console.warn(`! ${loader}: ${w.text}`);
  return res.code;
}

async function clean(dir, keep) {
  if (!existsSync(out(dir))) return;
  for (const f of await readdir(out(dir))) if (!keep.has(f)) await rm(out(dir, f));
}

async function buildAssets() {
  const cssFiles = (await readdir(out('src/css'))).filter((f) => f.endsWith('.css')).sort();
  const css = await minify((await Promise.all(cssFiles.map((f) => readFile(out('src/css', f), 'utf8')))).join('\n'), 'css');
  const cssName = `site.${hash(css)}.css`;
  await write(`assets/css/${cssName}`, css);
  await clean('assets/css', new Set([cssName]));

  const keep = new Set();
  const chunks = {};
  for (const name of ['showcase', 'forms', 'ui']) {
    const code = await minify(await readFile(out('src/js', `${name}.js`), 'utf8'), 'js');
    chunks[name] = `${name}.${hash(code)}.js`;
    keep.add(chunks[name]);
    await write(`assets/js/${chunks[name]}`, code);
  }
  let entry = await minify(await readFile(out('src/js/site.js'), 'utf8'), 'js');
  for (const [name, file] of Object.entries(chunks)) entry = entry.replace(`__CHUNK_${name}__`, `/assets/js/${file}`);
  if (/__CHUNK_/.test(entry)) throw new Error('Unresolved chunk placeholder in site.js');
  const jsName = `site.${hash(entry)}.js`;
  keep.add(jsName);
  await write(`assets/js/${jsName}`, entry);
  await clean('assets/js', keep);
  return { css: `/assets/css/${cssName}`, js: `/assets/js/${jsName}`, sizes: { css: css.length, js: entry.length } };
}

// ---- 2. Pages ---------------------------------------------------------------------
const ogKey = (file) =>
  file === 'index.html'
    ? 'home'
    : file.replace(/\/index\.html$/, '').replace(/\.html$/, '').replace(/^(series|products|blog)\//, '').replace(/\//g, '-');

function collectPages() {
  const list = [
    home(),
    productsHub(),
    allProducts(),
    aerator(),
    ...series.map(seriesPage),
    ...products.map(productPage),
    projects(),
    projectZ(),
    infrastructure(),
    about(),
    careers(),
    blogIndex(),
    ...posts.map(blogPost),
    contact(),
    privacy(),
    notFound(),
  ];
  for (const p of list) {
    p.modified ||= CONTENT_DATE;
    p.ogKey = p.ogImageKey || ogKey(p.file);
    p.ogImage = `/assets/og/${p.ogKey}.jpg`;
  }
  return list;
}

// ---- 3. Redirects (old URL -> new URL, all permanent) -------------------------------
function redirects(pages) {
  const r = [];
  const add = (source, destination) => { if (!r.some((x) => x.source === source)) r.push({ source, destination, statusCode: 301 }); };
  add('/index.html', '/');
  for (const p of pages) if (p.file.endsWith('/index.html')) add(`${p.url}index.html`, p.url);
  // Renamed sections and pages
  add('/Infrastructure/:path*', '/infrastructure/');
  add('/Infrastructure222/:path*', '/infrastructure/');
  add('/contact.php/:path*', '/contact/');
  add('/contact-us/:path*', '/contact/');
  add('/blog22/:path*', '/blog/');
  add('/careers22/:path*', '/careers/');
  add('/series', '/products/');
  add('/series/index.html', '/products/');
  add('/series/galseries.html', '/series/gal-series.html');
  add('/products/z-series.html', '/series/z-series.html');
  add('/products/custome-built/:path*', '/products/custom-built-gearboxes.html');
  add('/products/g-series/Gu-type.html', '/products/gu-type-worm-gearbox.html');
  add('/products/g-series/Gv-type.html', '/products/gv-type-worm-gearbox.html');
  for (const p of posts) for (const old of p.oldPaths || []) add(old, postUrl(p));
  // Common guesses for the two pages that keep their .html address
  add('/all-product', '/all-product.html');
  add('/all-products', '/all-product.html');
  add('/all-products.html', '/all-product.html');
  add('/aerator-gearboxes', '/aerator-gearboxes.html');
  add('/about', '/about-us/');
  add('/privacy', '/privacy-policy/');
  // Language prefixes left over from the previous template
  add('/en/:path*', '/:path*');
  add('/de/:path*', '/');
  return r;
}

const vercelConfig = (pages) => ({
  $schema: 'https://openapi.vercel.sh/vercel.json',
  cleanUrls: false,
  trailingSlash: true,
  redirects: redirects(pages),
  headers: [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
      ],
    },
    { source: '/assets/(css|js|fonts)/(.*)', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
    { source: '/assets/(img|og|video)/(.*)', headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=604800' }] },
    { source: '/(favicon.ico|favicon.svg|apple-touch-icon.png|site.webmanifest)', headers: [{ key: 'Cache-Control', value: 'public, max-age=604800' }] },
    { source: '/(llms.txt|llms-full.txt)', headers: [{ key: 'Content-Type', value: 'text/plain; charset=utf-8' }, { key: 'Cache-Control', value: 'public, max-age=3600' }] },
  ],
});

// ---- 4. Crawl files ---------------------------------------------------------------
const xml = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function sitemap(pages) {
  const urls = pages
    .filter((p) => !p.noindex)
    .map((p) => {
      const images = [...p.body.matchAll(/<img src="(\/assets\/img\/(?:products|photos)\/[^"]+)"[^>]*? alt="([^"]*)"/g)]
        .filter((m, i, all) => m[2] && all.findIndex((x) => x[1] === m[1]) === i)
        .slice(0, 12);
      return `  <url>
    <loc>${xml(abs(p.url))}</loc>
    <lastmod>${p.modified}</lastmod>
    <changefreq>${p.changefreq || 'monthly'}</changefreq>
    <priority>${p.priority || '0.5'}</priority>${images.map((m) => `\n    <image:image><image:loc>${xml(abs(m[1]))}</image:loc></image:image>`).join('')}
  </url>`;
    });
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join('\n')}
</urlset>
`;
}

const robots = () => `# robots.txt for ${site.url}
# All public content may be crawled, including CSS, JavaScript and images.
# The site has no private or administrative routes.

User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`;

const fullAddress = `${site.address.street}, ${site.address.locality} – ${site.address.postalCode}, ${site.address.region}, ${site.address.countryName}`;

function llms(pages) {
  const page = (url) => pages.find((p) => p.url === url);
  const link = (url, label, note) => `- [${label}](${abs(url)})${note ? `: ${note}` : ''}`;
  return `# ${site.name}

> ${site.description}

${site.legalName} is located at ${fullAddress}. It was founded in ${site.founded} as M.M Gears (P) Ltd and has operated as Gishnu Gears since ${site.renamed}. The company is ISO 9001:2015 certified and manufactures in a 50,000 sq. ft facility across three units, with in-house design, gear cutting, gear grinding and inspection. It supplies customers across India and in international markets.

- Official website: ${site.url}/
- Phone (sales): ${site.phoneDisplay}
- Enquiries and quotations: ${abs('/contact/')}
- GSTIN: ${site.gstin}

## Product series

${series.map((s) => link(seriesUrl(s), `${s.name}: ${s.type}`, s.lede)).join('\n')}

## Key product pages

${link('/products/', 'Products overview', 'All nine series with a guide to choosing between them.')}
${link('/all-product.html', 'All models and specifications', 'Every model with published ratios and motor ratings, plus a series comparison table.')}
${link('/aerator-gearboxes.html', 'Aerator gearboxes', 'Paddle-wheel aerator gearboxes for aquaculture and wastewater treatment, with specifications and FAQs.')}
${products.map((p) => link(productUrl(p), cap(p.name), p.summary)).join('\n')}

## Manufacturing capabilities

${link('/infrastructure/', 'Infrastructure', '50,000 sq. ft facility, machinery list and departments.')}
${machinery.map((g) => `- ${g.group}: ${g.items.map((m) => m.name).join(', ')}`).join('\n')}

## Company

${link('/about-us/', 'About Gishnu Gears', 'History, certification and international growth.')}
${link('/projects/', 'Custom gearbox projects', 'How custom M-Series and Z-Series gearboxes are engineered to order.')}
${link('/projects/z-series.html', 'Z-Series projects', 'Screw-jack, cooling tower and tyre changer gearboxes.')}
${link('/careers/', 'Careers', 'How to apply to work at Gishnu Gears.')}
${link('/contact/', 'Contact', 'Address, phone, map and enquiry form.')}

## Articles

${posts.map((p) => link(postUrl(p), p.title, p.excerpt)).join('\n')}

## Optional

${link('/llms-full.txt', 'Full company and product reference', 'Expanded plain-text version of the information on this site.')}
${link('/sitemap.xml', 'XML sitemap')}
${link('/privacy-policy/', 'Privacy policy')}
`;
}

function llmsFull() {
  const spec = (rows) => rows.map(([k, v]) => `- ${k}: ${v}`).join('\n');
  return `# ${site.name}: full company and product reference

Source: ${site.url}/ (official website of ${site.legalName}). Figures below are those published by the company. Ratings of individual gearboxes depend on size and ratio and should be confirmed with the manufacturer.

## Company overview

${site.description}

- Legal name: ${site.legalName}
- Brand name: ${site.name}
- Tagline: ${site.tagline}
- Founded: ${site.founded}, as M.M Gears (P) Ltd. Operating as Gishnu Gears since ${site.renamed}.
- Certification: ISO 9001:2015
- Address: ${fullAddress}
- Phone: ${site.phoneDisplay}
- GSTIN: ${site.gstin}
- Website: ${site.url}/
- Associated company: ${site.associate.name}, ${site.associate.lines.join(', ')} (GSTIN ${site.associate.gstin})
- Social profiles: ${Object.values(site.social).join(', ')}

Gishnu Gears specialises in custom-built gear solutions for industrial, automotive, textile and nuclear applications. It manufactures bevel gears, helical gearboxes, planetary gear systems, worm gearboxes and other specialised gear solutions using CNC technology and precision machining. It serves industries across India and international markets, shipping from Coimbatore through nearby airports and ports. In 2022 it launched customisation for international customers with the Z-Series (gearboxes) and the O-Series (gear spares), targeting Europe, Southeast Asia and North America.

## Manufacturing infrastructure

The facility covers 50,000 sq. ft across three units and is organised into design and development, manufacturing, quality checking and delivery departments, with an in-house design team.

${machinery.map((g) => `### ${g.group}\n${g.items.map((m) => `- ${m.name}: ${m.note}`).join('\n')}`).join('\n\n')}

## Product series

${series
  .map((s) => {
    const list = productsOf(s.id);
    return `### ${s.name}: ${s.type}

URL: ${abs(seriesUrl(s))}

${s.overview.join('\n\n')}

Use case: ${s.useCase}

Specifications:
${spec(s.specs)}

Applications: ${s.applications.join('; ')}.
${list.length ? `\nModels:\n${list.map((p) => `- ${cap(p.name)} (${abs(productUrl(p))}): ${p.summary} ${p.specs.map(([k, v]) => `${k}: ${v}`).join('; ')}.`).join('\n')}` : ''}`;
  })
  .join('\n\n')}

## Aerator gearboxes

URL: ${abs('/aerator-gearboxes.html')}

Aerator gearboxes drive paddle-wheel aerators in prawn and shrimp culture and aeration systems in wastewater treatment plants, biogas plants and aeration basins. Models: A1 (ratio 14.4, 1 HP), A3 (ratio 11 to 13.7, 1 to 3 HP), A4 (ratio 12.6, 2 to 3 HP), GBH 200 (ratio 11 to 13.7, 3 HP). Published construction details: gear ratios up to 50:1; torque capacity up to 10,000 Nm; foot-mounted and flange-mounted options for horizontal and vertical installation; EN-GJS-600 ductile iron; double-lip oil seals with labyrinth construction; heavy-duty tapered roller bearings; factory-filled synthetic oil (VG 220/320). All gearboxes are tested under load before dispatch. Options include anti-rust epoxy coating, integrated torque arms and IEC motor adaptability.

## Custom projects

URL: ${abs('/projects/')}

Custom gearboxes are engineered to order through the M-Series (custom-built and bevel helical gearboxes) and the Z-Series (non-standard gearboxes produced in volume). Z-Series project types:
${zProjects.map((p) => `- ${p.name}: ${p.text}`).join('\n')}

## Industries and applications

${industries.map((i) => `- ${i.name}: ${i.use} (${i.series.map((id) => seriesById[id].name).join(', ')})`).join('\n')}

## How to enquire

Send the application, required ratio or output speed, motor power, mounting position and quantity through ${abs('/contact/')} or call ${site.phoneDisplay}. Datasheets are supplied on request.
`;
}

const manifest = () =>
  JSON.stringify(
    {
      name: site.legalName,
      short_name: site.name,
      description: 'Industrial gearbox manufacturer in Coimbatore, India.',
      start_url: '/',
      display: 'browser',
      background_color: '#151318',
      theme_color: '#151318',
      icons: [
        { src: '/assets/img/brand/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/assets/img/brand/icon-512.png', sizes: '512x512', type: 'image/png' },
        { src: '/assets/img/brand/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      ],
    },
    null,
    2,
  ) + '\n';

function keywordMap(pages) {
  const rows = pages
    .filter((p) => !p.noindex)
    .map((p) => `| \`${p.url}\` | ${p.keyword} | ${(p.secondary || []).join('; ') || '—'} | ${p.intent || '—'} | ${p.title} | ${p.description} | ${p.h1} |`);
  return `# Keyword map

Generated by \`tools/build.mjs\` from the page data. Do not edit by hand: change the page's \`keyword\`, \`title\`, \`description\` or \`h1\` in \`src/\` and rebuild.

One primary keyword per page. No two pages share a primary keyword (the build fails if they do).

| URL | Primary keyword | Secondary / long-tail | Intent | SEO title | Meta description | H1 |
|---|---|---|---|---|---|---|
${rows.join('\n')}
`;
}

// ---- 5. Audit: fail the build on SEO and link problems -------------------------------
function audit(pages, html) {
  const errors = [];
  const warn = [];
  const files = new Set(pages.map((p) => p.file));
  const urls = new Set(pages.map((p) => p.url));
  const seen = { title: new Map(), description: new Map(), keyword: new Map() };

  for (const p of pages) {
    const doc = html.get(p.file);
    if (!p.noindex) {
      for (const k of ['title', 'description', 'keyword']) {
        if (!p[k]) errors.push(`${p.url}: missing ${k}`);
        else if (seen[k].has(p[k].toLowerCase())) errors.push(`${p.url}: duplicate ${k} (also on ${seen[k].get(p[k].toLowerCase())})`);
        else seen[k].set(p[k].toLowerCase(), p.url);
      }
      if (p.title.length > 65) warn.push(`${p.url}: title is ${p.title.length} characters`);
      if (p.description.length > 160 || p.description.length < 70) warn.push(`${p.url}: description is ${p.description.length} characters`);
    }
    const h1 = doc.match(/<h1[\s>]/g) || [];
    if (h1.length !== 1) errors.push(`${p.url}: ${h1.length} <h1> elements`);
    // Headings must not skip a level going down.
    let last = 0;
    for (const m of doc.matchAll(/<h([1-6])[\s>]/g)) {
      const level = +m[1];
      if (last && level > last + 1) errors.push(`${p.url}: heading jumps from h${last} to h${level}`);
      last = level;
    }
    for (const m of doc.matchAll(/<img\b[^>]*>/g)) {
      if (!/\balt="/.test(m[0])) errors.push(`${p.url}: <img> without alt`);
      if (!/\bwidth="/.test(m[0]) || !/\bheight="/.test(m[0])) errors.push(`${p.url}: <img> without dimensions`);
    }
    for (const m of doc.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try { JSON.parse(m[1]); } catch (e) { errors.push(`${p.url}: invalid JSON-LD (${e.message})`); }
    }
    // Internal links and assets must resolve.
    for (const m of doc.matchAll(/(?:href|src|poster|data-portrait)="(\/[^"#?]*)(?:[#?][^"]*)?"/g)) {
      const target = m[1];
      if (urls.has(target)) continue;
      const file = target.endsWith('/') ? `${target.slice(1)}index.html` : target.slice(1);
      if (files.has(file) || existsSync(out(decodeURIComponent(file)))) continue;
      if (/^\/assets\/og\//.test(target)) { warn.push(`${p.url}: social image ${target} not generated yet (run "npm run og")`); continue; }
      errors.push(`${p.url}: broken link or asset ${target}`);
    }
    for (const m of doc.matchAll(/srcset="([^"]+)"/g)) {
      for (const part of m[1].split(',')) {
        const f = part.trim().split(' ')[0];
        if (!existsSync(out(f.slice(1)))) errors.push(`${p.url}: missing image ${f}`);
      }
    }
    for (const m of doc.matchAll(/href="#([^"]+)"/g)) if (!new RegExp(`id="${m[1]}"`).test(doc)) errors.push(`${p.url}: in-page link #${m[1]} has no target`);
    const ids = [...doc.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
    const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
    if (dup.length) errors.push(`${p.url}: duplicate id(s) ${[...new Set(dup)].join(', ')}`);
  }
  return { errors, warn: [...new Set(warn)] };
}

// ---- Run ----------------------------------------------------------------------------
const started = Date.now();
const assets = await buildAssets();
const pages = collectPages();
const html = new Map();
for (const p of pages) {
  const doc = shell(p, p.body, assets);
  html.set(p.file, doc);
  await write(p.file, doc);
}
await write('sitemap.xml', sitemap(pages));
await write('robots.txt', robots());
await write('llms.txt', llms(pages));
await write('llms-full.txt', llmsFull());
await write('site.webmanifest', manifest());
await write('vercel.json', JSON.stringify(vercelConfig(pages), null, 2) + '\n');
await write('docs/KEYWORD-MAP.md', keywordMap(pages));
await write(
  'tools/.cache/og-pages.json',
  JSON.stringify(pages.filter((p) => !p.ogImageKey).map((p) => ({ key: p.ogKey, kicker: p.og.kicker, title: p.og.title, image: imageSrc('products', p.og.image, 960) })), null, 2),
);

const { errors, warn } = audit(pages, html);
for (const w of warn) console.warn(`! ${w}`);
for (const e of errors) console.error(`✗ ${e}`);
const kb = (n) => `${(n / 1024).toFixed(1)} kB`;
console.log(`\n${pages.length} pages · ${pages.filter((p) => !p.noindex).length} in sitemap · CSS ${kb(assets.sizes.css)} · core JS ${kb(assets.sizes.js)} · ${Date.now() - started} ms`);
if (errors.length) { console.error(`\nBuild failed: ${errors.length} problem(s).`); process.exit(1); }
console.log(warn.length ? `Built with ${warn.length} warning(s).` : 'Built with no warnings.');
