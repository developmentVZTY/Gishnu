// Image pipeline for gishnugears.com
// -----------------------------------------------------------------------------
// Reads the untouched masters in src/images/originals/ and writes optimised,
// responsive AVIF + WebP derivatives to assets/img/. The masters are never
// modified: product renders keep their exact appearance and proportions, they
// are only trimmed of empty transparent margin and resized.
//
//   cd tools && npm install && npm run images
//
// Add a new render by dropping a transparent PNG into
// src/images/originals/products/ and re-running this script, then `npm run build`.

import sharp from 'sharp';
import { mkdir, readdir, readFile, writeFile, copyFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'src/images/originals');
const OUT = path.join(ROOT, 'assets/img');
const MANIFEST = path.join(ROOT, 'src/images/manifest.json');

const PRODUCT_WIDTHS = [320, 640, 960, 1440];
const PHOTO_WIDTHS = [640, 1024, 1600, 2000];

const manifest = { products: {}, photos: {}, generated: new Date().toISOString().slice(0, 10) };
let bytes = 0;

async function emit(pipeline, file) {
  const info = await pipeline.toFile(file);
  bytes += info.size;
  return info;
}

/** Widths to render: every target that fits, plus the native width as the largest step. */
function steps(native, targets) {
  const fit = targets.filter((w) => w < native * 0.92);
  const top = Math.min(native, targets[targets.length - 1]);
  return [...new Set([...fit, top])].sort((a, b) => a - b);
}

async function products() {
  const dir = path.join(SRC, 'products');
  const out = path.join(OUT, 'products');
  await mkdir(out, { recursive: true });
  for (const f of (await readdir(dir)).filter((f) => f.endsWith('.png')).sort()) {
    const name = f.replace(/\.png$/, '');
    // Trim the empty transparent margin so every render sits consistently in its frame.
    const trimmed = await sharp(path.join(dir, f)).trim({ threshold: 2 }).png().toBuffer({ resolveWithObject: true });
    const { width, height } = trimmed.info;
    const widths = steps(width, PRODUCT_WIDTHS);
    for (const w of widths) {
      const base = sharp(trimmed.data).resize({ width: w, kernel: 'lanczos3' });
      await emit(base.clone().webp({ quality: 84, alphaQuality: 92, effort: 6, smartSubsample: true }), path.join(out, `${name}-${w}.webp`));
      await emit(base.clone().avif({ quality: 60, effort: 6, chromaSubsampling: '4:4:4' }), path.join(out, `${name}-${w}.avif`));
    }
    manifest.products[name] = { w: width, h: height, widths };
    console.log(`product  ${name}  ${width}x${height}  [${widths.join(', ')}]`);
  }
}

async function photos() {
  const dir = path.join(SRC, 'photos');
  const out = path.join(OUT, 'photos');
  await mkdir(out, { recursive: true });
  for (const f of (await readdir(dir)).filter((f) => /\.(jpe?g|png)$/.test(f)).sort()) {
    const name = f.replace(/\.(jpe?g|png)$/, '');
    const meta = await sharp(path.join(dir, f)).metadata();
    const widths = steps(meta.width, PHOTO_WIDTHS);
    for (const w of widths) {
      const base = sharp(path.join(dir, f)).resize({ width: w, kernel: 'lanczos3' });
      await emit(base.clone().webp({ quality: 74, effort: 6 }), path.join(out, `${name}-${w}.webp`));
      await emit(base.clone().avif({ quality: 50, effort: 6 }), path.join(out, `${name}-${w}.avif`));
    }
    manifest.photos[name] = { w: meta.width, h: meta.height, widths };
    console.log(`photo    ${name}  ${meta.width}x${meta.height}  [${widths.join(', ')}]`);
  }
}

// ---- Brand: clean the Illustrator export and derive logo variants -----------------
const INK = '#f5f2ec';

async function brand() {
  const out = path.join(OUT, 'brand');
  await mkdir(out, { recursive: true });
  const raw = await readFile(path.join(SRC, 'brand/logo-original.svg'), 'utf8');
  const a = raw.indexOf('<g i:extraneous="self">') + '<g i:extraneous="self">'.length;
  const b = raw.indexOf('</switch>');
  let body = raw.slice(a, b).replace(/<\/g>\s*$/, '').trim(); // artwork only, no Adobe metadata
  body = body.replace(/\s+/g, ' ').replace(/> </g, '><');
  // Shorten the generated clip-path ids.
  const ids = [...new Set([...body.matchAll(/id="([^"]+)"/g)].map((m) => m[1]))];
  ids.forEach((id, i) => { body = body.split(id).join(`gg${i}`); });
  body = body.replace(/ style="overflow:visible;"/g, '');

  const tagline = body.match(/<path class="st0"[^>]*\/>/)[0];
  const wordmark = body.replace(tagline, '');
  const css = (plum, ink) =>
    `.st0{fill-rule:evenodd;clip-rule:evenodd;fill:${ink}}.st1,.st5{fill:#EA6B0A}.st5{fill-rule:evenodd;clip-rule:evenodd}.st2{fill:${plum}}`;
  const wrap = (inner, vb, plum, ink, title) =>
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${vb}" role="img" aria-label="${title}"><title>${title}</title><style>${css(plum, ink)}</style>${inner.replace(/fill:#452C4D/g, `fill:${plum}`)}</svg>`;

  // Measure the artwork so each variant gets a tight viewBox.
  const bbox = async (inner) => {
    const svg = wrap(inner, '0 0 1311 439', '#000', '#000', 'm');
    const { info } = await sharp(Buffer.from(svg), { density: 144 }).trim().toBuffer({ resolveWithObject: true });
    const s = 1311 / (1311 * 2); // density 144 = 2x
    return {
      x: -info.trimOffsetLeft * s, y: -info.trimOffsetTop * s,
      w: info.width * s, h: info.height * s,
    };
  };
  const vb = (r, pad = 4) => [r.x - pad, r.y - pad, r.w + pad * 2, r.h + pad * 2].map((n) => +n.toFixed(1)).join(' ');
  const full = await bbox(body);
  const word = await bbox(wordmark);

  const files = {
    'gishnu-gears-logo.svg': wrap(body, vb(full), '#452C4D', '#1A1A18', 'Gishnu Gears — Transforming Innovation'),
    'gishnu-gears-logo-light.svg': wrap(body, vb(full), INK, INK, 'Gishnu Gears — Transforming Innovation'),
    'gishnu-gears-wordmark.svg': wrap(wordmark, vb(word), '#452C4D', '#1A1A18', 'Gishnu Gears'),
    'gishnu-gears-wordmark-light.svg': wrap(wordmark, vb(word), INK, INK, 'Gishnu Gears'),
  };
  for (const [name, svg] of Object.entries(files)) {
    await writeFile(path.join(out, name), svg);
    bytes += svg.length;
  }
  manifest.brand = {
    logo: { w: +(full.w + 8).toFixed(1), h: +(full.h + 8).toFixed(1) },
    wordmark: { w: +(word.w + 8).toFixed(1), h: +(word.h + 8).toFixed(1) },
  };

  // Raster logo on white for structured data / places that need a bitmap.
  await emit(
    sharp(Buffer.from(files['gishnu-gears-logo.svg']), { density: 220 })
      .resize({ width: 1000 })
      .extend({ top: 60, bottom: 60, left: 100, right: 100, background: '#ffffff' })
      .flatten({ background: '#ffffff' })
      .png({ compressionLevel: 9, palette: true }),
    path.join(out, 'gishnu-gears-logo.png'),
  );

  // "G" monogram for favicons: the three paths that draw the G.
  const g = [...body.matchAll(/<path class="(st5|st2|st1)" d="M(107,135\.4|182\.3,107\.2|271\.7,165\.9)[^>]*\/>/g)].map((m) => m[0]).join('');
  if ((g.match(/<path/g) || []).length !== 3) throw new Error('Could not isolate the G monogram paths');
  const gb = await bbox(g);
  const side = Math.max(gb.w, gb.h) / 0.62; // monogram occupies 62% of the tile
  const tile = `${(gb.x - (side - gb.w) / 2).toFixed(1)} ${(gb.y - (side - gb.h) / 2).toFixed(1)} ${side.toFixed(1)} ${side.toFixed(1)}`;
  const [tx, ty, ts] = tile.split(' ').map(Number);
  const icon = (radius) =>
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${tile}"><rect x="${tx}" y="${ty}" width="${ts}" height="${ts}" rx="${(ts * radius).toFixed(1)}" fill="#17141a"/><style>.st1,.st5{fill:#EA6B0A}.st2{fill:${INK}}</style>${g}</svg>`;
  await writeFile(path.join(ROOT, 'favicon.svg'), icon(0.2));
  const png = (size, radius) => sharp(Buffer.from(icon(radius)), { density: 300 }).resize(size, size).png({ compressionLevel: 9 });
  await emit(png(180, 0), path.join(ROOT, 'apple-touch-icon.png'));
  await emit(png(192, 0.2), path.join(out, 'icon-192.png'));
  await emit(png(512, 0.2), path.join(out, 'icon-512.png'));
  await emit(png(512, 0), path.join(out, 'icon-maskable-512.png'));
  // favicon.ico containing 32px and 48px PNG entries.
  const entries = [await png(32, 0.2).toBuffer(), await png(48, 0.2).toBuffer()];
  const sizes = [32, 48];
  const header = Buffer.alloc(6 + 16 * entries.length);
  header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(entries.length, 4);
  let offset = header.length;
  entries.forEach((buf, i) => {
    const o = 6 + 16 * i;
    header.writeUInt8(sizes[i], o); header.writeUInt8(sizes[i], o + 1);
    header.writeUInt8(0, o + 2); header.writeUInt8(0, o + 3);
    header.writeUInt16LE(1, o + 4); header.writeUInt16LE(32, o + 6);
    header.writeUInt32LE(buf.length, o + 8); header.writeUInt32LE(offset, o + 12);
    offset += buf.length;
  });
  await writeFile(path.join(ROOT, 'favicon.ico'), Buffer.concat([header, ...entries]));

  // Linktree QR code: keep as lossless PNG so it stays scannable.
  await emit(sharp(path.join(SRC, 'brand/linktree-qr.png')).png({ compressionLevel: 9, palette: true }), path.join(out, 'gishnu-gears-linktree-qr.png'));
  console.log('brand    logo variants, favicons, QR');
}

async function video() {
  const out = path.join(ROOT, 'assets/video');
  await mkdir(out, { recursive: true });
  for (const [name, poster] of [['gishnu-gears-brand-film-landscape', 9.2], ['gishnu-gears-brand-film-portrait', 9.2]]) {
    const src = path.join(SRC, 'video', `${name}.mp4`);
    const dst = path.join(out, `${name}.mp4`);
    try {
      // Lossless re-mux: move the index to the front so playback can start while downloading.
      execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', src, '-c', 'copy', '-an', '-movflags', '+faststart', dst]);
      const frame = execFileSync('ffmpeg', ['-v', 'error', '-ss', String(poster), '-i', src, '-frames:v', '1', '-f', 'image2pipe', '-vcodec', 'png', '-'], { maxBuffer: 64 * 1024 * 1024 });
      const meta = await sharp(frame).metadata();
      await emit(sharp(frame).webp({ quality: 72, effort: 6 }), path.join(out, `${name}-poster.webp`));
      manifest.video = manifest.video || {};
      manifest.video[name] = { w: meta.width, h: meta.height };
    } catch (e) {
      console.warn(`ffmpeg unavailable (${e.message.split('\n')[0]}); copying ${name}.mp4 as-is`);
      await copyFile(src, dst);
    }
  }
  console.log('video    faststart re-mux + posters');
}

const only = process.argv[2];
if (!only) {
  for (const d of ['products', 'photos', 'brand']) if (existsSync(path.join(OUT, d))) await rm(path.join(OUT, d), { recursive: true });
}
const prev = existsSync(MANIFEST) ? JSON.parse(await readFile(MANIFEST, 'utf8')) : {};
if (!only || only === 'products') await products(); else manifest.products = prev.products;
if (!only || only === 'photos') await photos(); else manifest.photos = prev.photos;
if (!only || only === 'brand') await brand(); else manifest.brand = prev.brand;
if (!only || only === 'video') await video(); else manifest.video = prev.video;
await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
console.log(`\nWrote ${(bytes / 1024 / 1024).toFixed(1)} MB of derivatives. Manifest: src/images/manifest.json`);
