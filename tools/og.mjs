// Social share images (Open Graph / Twitter), one 1200×630 JPEG per page.
// -----------------------------------------------------------------------------
//   cd tools && npm run build && npm run og
//
// Reads the page list written by the build (tools/.cache/og-pages.json), renders
// each card in headless Chrome using the site's own fonts and product renders,
// and saves it to assets/og/<key>.jpg. Needs Google Chrome installed, or set
// CHROME_PATH to a Chromium binary.

import { chromium } from 'playwright-core';
import sharp from 'sharp';
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const url = (p) => pathToFileURL(path.join(ROOT, p)).href;
const pages = JSON.parse(await readFile(path.join(ROOT, 'tools/.cache/og-pages.json'), 'utf8'));
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

const card = ({ kicker, title, image }) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Archivo;src:url("${url('assets/fonts/archivo-variable.woff2')}") format("woff2");font-weight:100 900;font-stretch:62% 125%}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;overflow:hidden;font-family:Archivo,sans-serif;color:#f3efe8;background:#151318;position:relative}
body::before{content:"";position:absolute;inset:0;background:radial-gradient(56% 90% at 80% 46%,rgba(104,76,116,.62),rgba(104,76,116,0) 72%)}
.copy{position:absolute;left:72px;top:64px;bottom:64px;width:600px;display:flex;flex-direction:column}
.logo{width:214px}
.kicker{margin-top:auto;display:flex;align-items:center;gap:16px;font-size:19px;font-weight:600;font-stretch:110%;letter-spacing:.19em;text-transform:uppercase;color:#a5a1ab}
.kicker::before{content:"";width:32px;height:2px;background:#ea6b0a}
h1{margin-top:22px;font-size:${title.length > 52 ? 46 : title.length > 34 ? 54 : 64}px;line-height:1.04;font-weight:560;font-stretch:118%;letter-spacing:-.022em;text-wrap:balance}
.foot{margin-top:34px;padding-top:22px;border-top:1px solid rgba(255,255,255,.18);display:flex;justify-content:space-between;font-size:20px;color:#b9b5be}
.foot b{color:#f3efe8;font-weight:500}
.stage{position:absolute;right:24px;top:50%;width:520px;height:520px;transform:translateY(-50%)}
.stage svg{position:absolute;inset:0;width:100%;height:100%;color:#f3efe8}
.stage circle{fill:none;stroke:currentColor}
.stage img{position:absolute;inset:13%;width:74%;height:74%;object-fit:contain;filter:drop-shadow(0 30px 28px rgba(0,0,0,.55))}
</style></head><body>
<div class="copy">
  <img class="logo" src="${url('assets/img/brand/gishnu-gears-wordmark-light.svg')}" alt="">
  <p class="kicker">${esc(kicker)}</p>
  <h1>${esc(title)}</h1>
  <p class="foot"><b>gishnugears.com</b><span>Coimbatore, India</span></p>
</div>
<div class="stage">
  <svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="99" stroke-opacity=".18" stroke-width=".4"/><circle cx="100" cy="100" r="94.5" pathLength="360" stroke-opacity=".32" stroke-width="2.6" stroke-dasharray=".4 2.6"/><circle cx="100" cy="100" r="93" pathLength="360" stroke-opacity=".64" stroke-width="5.6" stroke-dasharray=".55 29.45"/><path d="M100 3.5l2.6 5.2h-5.2z" fill="#ea6b0a"/></svg>
  <img src="${url(image.slice(1))}" alt="">
</div>
</body></html>`;

const out = path.join(ROOT, 'assets/og');
await mkdir(out, { recursive: true });
const launch = process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : { channel: 'chrome' };
const browser = await chromium.launch(launch);
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
const tmp = path.join(ROOT, 'tools/.cache/og-card.html');
let bytes = 0;
for (const p of pages) {
  // Loaded from a file so the card may reference the fonts and renders on disk.
  await writeFile(tmp, card(p));
  await page.goto(pathToFileURL(tmp).href, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const broken = await page.evaluate(() => [...document.images].filter((i) => !i.naturalWidth).length + (document.fonts.check('16px Archivo') ? 0 : 1));
  if (broken) throw new Error(`Card "${p.key}" has ${broken} asset(s) that failed to load`);
  const png = await page.screenshot({ type: 'png' });
  const info = await sharp(png).jpeg({ quality: 84, mozjpeg: true, chromaSubsampling: '4:4:4' }).toFile(path.join(out, `${p.key}.jpg`));
  bytes += info.size;
}
await browser.close();
await rm(tmp, { force: true });
const keep = new Set(pages.map((p) => `${p.key}.jpg`));
for (const f of await readdir(out)) if (!keep.has(f)) await rm(path.join(out, f));
console.log(`${pages.length} social images written to assets/og/ (${(bytes / 1024).toFixed(0)} kB total)`);
