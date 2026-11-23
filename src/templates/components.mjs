// Shared building blocks used by every page template.
import { readFileSync } from 'node:fs';
import { site } from '../data/site.mjs';
import { series, products } from '../data/catalog.mjs';

const manifest = JSON.parse(readFileSync(new URL('../images/manifest.json', import.meta.url), 'utf8'));

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const seriesById = Object.fromEntries(series.map((s) => [s.id, s]));
export const seriesUrl = (s) => `/series/${s.slug}.html`;
export const productUrl = (p) => `/products/${p.slug}.html`;
export const productsOf = (id) => products.filter((p) => p.series === id);
export const abs = (path) => site.url + path;

// ---- Images -------------------------------------------------------------------
export function imageInfo(kind, name) {
  const info = manifest[kind]?.[name];
  if (!info) throw new Error(`Image "${name}" is not in src/images/manifest.json (${kind}). Run "npm run images".`);
  return info;
}
const srcset = (kind, name, ext, widths) => widths.map((w) => `/assets/img/${kind}/${name}-${w}.${ext} ${w}w`).join(', ');

/** Largest derivative that is at least `min` wide, used as the plain <img src>. */
export function imageSrc(kind, name, min = 640, ext = 'webp') {
  const { widths } = imageInfo(kind, name);
  const w = widths.find((x) => x >= min) ?? widths[widths.length - 1];
  return `/assets/img/${kind}/${name}-${w}.${ext}`;
}

/**
 * Responsive <picture> with AVIF and WebP sources.
 * Width/height are always emitted so the browser reserves space (no layout shift).
 */
export function picture({ kind = 'products', name, alt = '', sizes = '100vw', cls = '', priority = false, title = '', max }) {
  const info = imageInfo(kind, name);
  const widths = max ? info.widths.filter((w) => w <= max || w === info.widths[0]) : info.widths;
  const load = priority ? 'fetchpriority="high" decoding="sync"' : 'loading="lazy" decoding="async"';
  return `<picture${cls ? ` class="${cls}"` : ''}><source type="image/avif" srcset="${srcset(kind, name, 'avif', widths)}" sizes="${sizes}"><source type="image/webp" srcset="${srcset(kind, name, 'webp', widths)}" sizes="${sizes}"><img src="${imageSrc(kind, name, 640)}" width="${info.w}" height="${info.h}" alt="${esc(alt)}"${title ? ` title="${esc(title)}"` : ''} ${load}></picture>`;
}

/** <link rel=preload> for the page's largest above-the-fold image. */
export function preloadImage({ kind = 'products', name, sizes = '100vw', max }) {
  const info = imageInfo(kind, name);
  const widths = max ? info.widths.filter((w) => w <= max || w === info.widths[0]) : info.widths;
  return `<link rel="preload" as="image" type="image/avif" imagesrcset="${srcset(kind, name, 'avif', widths)}" imagesizes="${sizes}" fetchpriority="high">`;
}

// ---- Icons (inline SVG, inherit currentColor) -----------------------------------
const paths = {
  arrow: '<path d="M4 12h15M13 6l6 6-6 6"/>',
  'arrow-up-right': '<path d="M7 17 17 7M8 7h9v9"/>',
  'arrow-down': '<path d="M12 4v15M6 13l6 6 6-6"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
  pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  play: '<path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" stroke="none"/>',
  pause: '<path d="M8 5v14M16 5v14"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  doc: '<path d="M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6"/>',
  linkedin: '<path d="M6.5 9.5V18M6.5 6.2v.1M10.5 18v-5a3 3 0 0 1 6 0v5M10.5 9.5V18" /><rect x="3" y="3" width="18" height="18" rx="2"/>',
  youtube: '<rect x="2.5" y="5.5" width="19" height="13" rx="3.5"/><path d="m10.5 9.5 4.5 2.5-4.5 2.5z" fill="currentColor" stroke="none"/>',
  facebook: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M13 21v-7h2.5l.5-3H13V9.5c0-1 .5-1.5 1.5-1.5H16V5.5h-2A3 3 0 0 0 11 8.5V11H9v3h2v7"/>',
};
export const icon = (name, size = 20) =>
  `<svg class="ico" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name]}</svg>`;

// ---- Small pieces ---------------------------------------------------------------
export const btn = ({ href, label, variant = 'primary', ico = 'arrow', attrs = '' }) =>
  `<a class="btn btn--${variant}" href="${href}"${attrs ? ' ' + attrs : ''}><span>${esc(label)}</span>${ico ? icon(ico, 18) : ''}</a>`;

export const arrowLink = (href, label, attrs = '') =>
  `<a class="arrow-link" href="${href}"${attrs ? ' ' + attrs : ''}><span>${esc(label)}</span>${icon('arrow', 18)}</a>`;

/** Graduated dial that sits behind product renders. Decorative. */
export const dial = (cls = '') =>
  `<svg class="dial${cls ? ' ' + cls : ''}" viewBox="0 0 200 200" aria-hidden="true" focusable="false"><circle class="dial__rim" cx="100" cy="100" r="99"/><g class="dial__ticks"><circle class="dial__minor" cx="100" cy="100" r="94.5" pathLength="360"/><circle class="dial__major" cx="100" cy="100" r="93" pathLength="360"/></g><circle class="dial__inner" cx="100" cy="100" r="78"/><path class="dial__pip" d="M100 3.5l2.6 5.2h-5.2z"/></svg>`;

/** Nameplate: the model / ratio / motor data shown the way it is stamped on a gearbox. */
export const plate = (rows, cls = '') =>
  `<dl class="plate${cls ? ' ' + cls : ''}">${rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>`;

export const eyebrow = (text) => `<p class="eyebrow">${esc(text)}</p>`;

export function sectionHead({ kicker, title, text = '', level = 2, link = '', cls = '' }) {
  return `<header class="sec-head${cls ? ' ' + cls : ''}" data-reveal>
    <div class="sec-head__main">${kicker ? eyebrow(kicker) : ''}<h${level} class="h-sec">${title}</h${level}></div>
    ${text || link ? `<div class="sec-head__side">${text ? `<p>${text}</p>` : ''}${link}</div>` : ''}
  </header>`;
}

export function breadcrumbs(items) {
  return `<nav class="crumbs" aria-label="Breadcrumb"><ol>${items
    .map((it, i) =>
      i === items.length - 1
        ? `<li><span aria-current="page">${esc(it.name)}</span></li>`
        : `<li><a href="${it.url}">${esc(it.name)}</a></li>`,
    )
    .join('')}</ol></nav>`;
}

export function seriesCard(s, { level = 3 } = {}) {
  return `<article class="s-card" data-group="${s.group}" data-reveal>
    <a class="s-card__link" href="${seriesUrl(s)}">
      <div class="s-card__stage">
        <span class="s-card__letter" aria-hidden="true">${s.letter}</span>
        <div class="s-card__img" data-tilt>${picture({ name: s.image, alt: s.imageAlt, sizes: '(min-width: 1100px) 300px, (min-width: 700px) 34vw, 66vw', max: 960 })}</div>
      </div>
      <div class="s-card__body">
        <p class="s-card__name"><span class="mono">${esc(s.name)}</span></p>
        <h${level} class="s-card__title">${esc(s.type)}</h${level}>
        <p class="s-card__text">${esc(s.lede)}</p>
        <span class="s-card__more">View series ${icon('arrow', 18)}</span>
      </div>
    </a>
  </article>`;
}

export function productCard(p, { level = 3 } = {}) {
  const s = seriesById[p.series];
  const [img, alt] = p.images[0];
  return `<article class="p-card" data-reveal>
    <a class="p-card__link" href="${productUrl(p)}">
      <div class="p-card__stage"><div class="p-card__img" data-tilt>${picture({ name: img, alt, sizes: '(min-width: 1100px) 230px, (min-width: 640px) 32vw, 64vw', max: 960 })}</div></div>
      <div class="p-card__body">
        <p class="p-card__kind">${esc(s.name)} · ${esc(p.kind)}</p>
        <h${level} class="p-card__title">${esc(p.name.charAt(0).toUpperCase() + p.name.slice(1))}</h${level}>
        ${plate(p.plate.slice(0, 3), 'plate--inline')}
        <span class="p-card__more">Details ${icon('arrow', 18)}</span>
      </div>
    </a>
  </article>`;
}

// ---- Enquiry form ---------------------------------------------------------------
// Field names (name, Company, email, phone, Message, acceptance) match the existing
// EmailJS template, so enquiries keep arriving in the same inbox and format.
export function enquiryForm({ id = 'enquiry', context = 'Website enquiry', product = '', submit = 'Send enquiry', showProduct = true, messageLabel = 'How can we help?', messageHint = 'Application, ratio, motor power, quantity — whatever you know so far.', companyRequired = true, companyLabel = 'Company' }) {
  const options = [
    ['', 'Select a product (optional)'],
    ...series.map((s) => [`${s.name} – ${s.type}`, `${s.name} – ${s.type}`]),
    ['Aerator gearboxes', 'Aerator gearboxes'],
    ['Custom requirement', 'Custom requirement'],
    ['Other', 'Something else'],
  ];
  const f = (n) => `${id}-${n}`;
  return `<form class="form" id="${id}" novalidate data-form data-context="${esc(context)}" data-service="${site.emailjs.service}" data-template="${site.emailjs.template}" data-key="${site.emailjs.publicKey}" aria-describedby="${f('status')}">
    <div class="form__grid">
      <div class="field">
        <label for="${f('name')}">Name <span class="req" aria-hidden="true">*</span></label>
        <input id="${f('name')}" name="name" type="text" autocomplete="name" required maxlength="80">
        <p class="field__error" id="${f('name')}-error" hidden></p>
      </div>
      <div class="field">
        <label for="${f('company')}">${esc(companyLabel)}${companyRequired ? ' <span class="req" aria-hidden="true">*</span>' : ''}</label>
        <input id="${f('company')}" name="Company" type="text" autocomplete="organization"${companyRequired ? ' required' : ''} maxlength="100">
        <p class="field__error" id="${f('company')}-error" hidden></p>
      </div>
      <div class="field">
        <label for="${f('email')}">Email <span class="req" aria-hidden="true">*</span></label>
        <input id="${f('email')}" name="email" type="email" autocomplete="email" inputmode="email" required maxlength="120">
        <p class="field__error" id="${f('email')}-error" hidden></p>
      </div>
      <div class="field">
        <label for="${f('phone')}">Phone</label>
        <input id="${f('phone')}" name="phone" type="tel" autocomplete="tel" inputmode="tel" maxlength="20" pattern="[0-9+()\\-\\s]{7,20}">
        <p class="field__error" id="${f('phone')}-error" hidden></p>
      </div>
      ${showProduct ? `<div class="field field--wide">
        <label for="${f('product')}">Product of interest</label>
        <div class="select"><select id="${f('product')}" name="product" data-product>${options
          .map(([v, l]) => `<option value="${esc(v)}"${product && v === product ? ' selected' : ''}>${esc(l)}</option>`)
          .join('')}${product && !options.some(([v]) => v === product) ? `<option value="${esc(product)}" selected>${esc(product)}</option>` : ''}</select>${icon('chevron', 18)}</div>
      </div>` : ''}
      <div class="field field--wide">
        <label for="${f('message')}">${esc(messageLabel)} <span class="req" aria-hidden="true">*</span></label>
        <textarea id="${f('message')}" name="Message" rows="5" required maxlength="3000" aria-describedby="${f('message')}-hint"></textarea>
        <p class="field__hint" id="${f('message')}-hint">${esc(messageHint)}</p>
        <p class="field__error" id="${f('message')}-error" hidden></p>
      </div>
      <div class="field field--hp" aria-hidden="true">
        <label for="${f('website')}">Leave this field empty</label>
        <input id="${f('website')}" name="website" type="text" tabindex="-1" autocomplete="off">
      </div>
      <div class="field field--wide field--check">
        <input id="${f('accept')}" name="acceptance" type="checkbox" value="1" required>
        <label for="${f('accept')}">I agree to the processing of my data in accordance with the <a href="/privacy-policy/">Privacy Policy</a>. Your data is treated confidentially and is not passed on to third parties without authorisation.</label>
        <p class="field__error" id="${f('accept')}-error" hidden></p>
      </div>
    </div>
    <div class="form__foot">
      <button class="btn btn--primary" type="submit"><span>${esc(submit)}</span>${icon('arrow', 18)}</button>
      <p class="form__alt">Prefer to talk? Call <a href="tel:${site.phone}">${site.phoneDisplay}</a></p>
    </div>
    <p class="form__status" id="${f('status')}" role="status" aria-live="polite"></p>
    <noscript><p class="form__status is-error">This form needs JavaScript to send. Please call us on ${site.phoneDisplay} instead.</p></noscript>
  </form>`;
}

export function ctaBand({ title = 'Tell us the duty. We’ll engineer the drive.', text = 'Share the application, ratio and motor details you have. Our engineers will come back with a suitable gearbox or a custom design.', primary = { href: '/contact/', label: 'Request a quote' }, secondary = null } = {}) {
  return `<section class="cta t-dark" aria-labelledby="cta-title">
    <div class="wrap cta__in">
      ${dial('cta__dial')}
      <div class="cta__copy" data-reveal>
        ${eyebrow('Enquiries')}
        <h2 class="h-sec" id="cta-title">${title}</h2>
        <p class="lede">${text}</p>
      </div>
      <div class="cta__actions" data-reveal>
        ${btn(primary)}
        ${secondary ? btn({ ...secondary, variant: 'ghost' }) : ''}
        <a class="cta__phone" href="tel:${site.phone}">${icon('phone', 20)}<span><small>Call sales</small>${site.phoneDisplay}</span></a>
      </div>
    </div>
  </section>`;
}

export const jsonld = (data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;

export function specTable(rows, caption = '') {
  return `<div class="table-wrap"><table class="spec">${caption ? `<caption>${esc(caption)}</caption>` : ''}<tbody>${rows
    .map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`)
    .join('')}</tbody></table></div>`;
}

export function faq(items) {
  return `<div class="faq">${items
    .map(
      ([q, a]) => `<details class="faq__item"><summary><h3>${esc(q)}</h3><span class="faq__ico" aria-hidden="true"></span></summary><div class="faq__a"><p>${a}</p></div></details>`,
    )
    .join('')}</div>`;
}

export const faqSchema = (items) => ({
  '@type': 'FAQPage',
  mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })),
});
