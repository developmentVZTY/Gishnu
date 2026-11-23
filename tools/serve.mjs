// Local preview server that mimics how Vercel serves this site:
// directory indexes, trailing-slash redirects, the redirects in vercel.json and 404.html.
//   cd tools && npm run serve        (http://localhost:4173)
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = Number(process.env.PORT || 4173);
const TYPES = { html: 'text/html; charset=utf-8', css: 'text/css; charset=utf-8', js: 'text/javascript; charset=utf-8', json: 'application/json', xml: 'application/xml', txt: 'text/plain; charset=utf-8', svg: 'image/svg+xml', png: 'image/png', jpg: 'image/jpeg', webp: 'image/webp', avif: 'image/avif', ico: 'image/x-icon', woff2: 'font/woff2', mp4: 'video/mp4', webmanifest: 'application/manifest+json' };
const HIDDEN = /^\/(src|tools|docs|\.git|\.vscode)(\/|$)/;

const config = JSON.parse(await readFile(path.join(ROOT, 'vercel.json'), 'utf8'));
// Sources are matched the way Vercel matches them: exactly and case-sensitively.
// "/old/:path*" matches /old and /old/a/b, but not /old/ (a wildcard segment is never empty).
const rules = config.redirects.map((r) => {
  const names = [];
  const pattern = r.source
    .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
    .replace(/\/:(\w+)\*/g, (_, n) => { names.push(n); return '(?:/([^/]+(?:/[^/]+)*))?'; });
  return { re: new RegExp(`^${pattern}$`), names, ...r };
});
const hasExtension = (p) => /\.[a-z0-9]+$/i.test(p.split('/').pop());

const cacheRules = config.headers
  .map((h) => ({ re: new RegExp(`^${h.source}$`), value: h.headers.find((x) => x.key === 'Cache-Control')?.value }))
  .filter((h) => h.value);

createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  let pathname = decodeURIComponent(url.pathname);
  // trailingSlash: true is applied before the redirect rules, as on Vercel:
  // /page gains a slash, /file.html/ loses it.
  if (pathname !== '/') {
    const slash = pathname.endsWith('/');
    const bare = slash ? pathname.slice(0, -1) : pathname;
    if (hasExtension(bare) === slash) {
      const fixed = slash ? url.pathname.slice(0, -1) : `${url.pathname}/`;
      res.writeHead(308, { Location: fixed + url.search });
      return res.end();
    }
  }
  for (const rule of rules) {
    const m = pathname.match(rule.re) || url.pathname.match(rule.re);
    if (!m) continue;
    let dest = rule.destination;
    rule.names.forEach((n, i) => { dest = dest.replace(`:${n}*`, m[i + 1] || ''); });
    res.writeHead(rule.statusCode, { Location: dest + url.search });
    return res.end();
  }
  const send = async (file, status = 200) => {
    let body = await readFile(file);
    const ext = path.extname(file).slice(1);
    const headers = { 'Content-Type': TYPES[ext] || 'application/octet-stream' };
    // Vercel compresses text responses and applies the cache rules from vercel.json; do the same here.
    if (/^(html|css|js|json|xml|txt|svg|webmanifest)$/.test(ext) && /\bgzip\b/.test(req.headers['accept-encoding'] || '')) {
      body = gzipSync(body);
      headers['Content-Encoding'] = 'gzip';
    }
    const rel = '/' + path.relative(ROOT, file).split(path.sep).join('/');
    for (const rule of cacheRules) if (rule.re.test(rel)) headers['Cache-Control'] = rule.value;
    headers['Cache-Control'] ||= 'public, max-age=0, must-revalidate';
    headers['Content-Length'] = body.length;
    if (ext === 'mp4') headers['Accept-Ranges'] = 'bytes';
    res.writeHead(status, headers);
    res.end(body);
  };
  try {
    if (HIDDEN.test(pathname)) throw new Error('not deployed');
    const file = path.join(ROOT, pathname);
    if (!file.startsWith(ROOT)) throw new Error('outside root');
    const info = await stat(file);
    if (info.isDirectory()) {
      if (!pathname.endsWith('/')) { res.writeHead(308, { Location: `${pathname}/${url.search}` }); return res.end(); }
      return await send(path.join(file, 'index.html'));
    }
    return await send(file);
  } catch {
    try { await send(path.join(ROOT, '404.html'), 404); } catch { res.writeHead(404); res.end('Not found'); }
  }
}).listen(PORT, () => console.log(`Preview: http://localhost:${PORT}`));
