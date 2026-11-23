// Document shell: <head>, header, footer and the structured-data graph shared by all pages.
import { site, nav } from '../data/site.mjs';
import { series } from '../data/catalog.mjs';
import { esc, icon, jsonld, abs, seriesUrl, btn, imageSrc } from './components.mjs';

const ROBOTS = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

// ---- Structured data ------------------------------------------------------------
export const ORG_ID = `${site.url}/#organization`;
export const WEBSITE_ID = `${site.url}/#website`;

export function organizationNode() {
  return {
    '@type': ['Organization', 'LocalBusiness'],
    '@id': ORG_ID,
    name: site.name,
    legalName: site.legalName,
    alternateName: [site.legalName, 'Gishnu Gears (P) Ltd'],
    url: `${site.url}/`,
    description: site.description,
    slogan: site.tagline,
    foundingDate: String(site.founded),
    logo: { '@type': 'ImageObject', '@id': `${site.url}/#logo`, url: abs('/assets/img/brand/gishnu-gears-logo.png'), width: 1200, height: 437, caption: site.name },
    image: abs('/assets/og/home.jpg'),
    telephone: site.phone,
    taxID: site.gstin,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    hasMap: site.maps.gishnu.link,
    areaServed: [
      { '@type': 'City', name: 'Coimbatore' },
      { '@type': 'State', name: 'Tamil Nadu' },
      { '@type': 'Country', name: 'India' },
    ],
    contactPoint: [{ '@type': 'ContactPoint', telephone: site.phone, contactType: 'sales', areaServed: 'IN', availableLanguage: ['en'] }],
    knowsAbout: ['Industrial gearboxes', 'Worm gearboxes', 'Helical geared motors', 'Bevel gearboxes', 'Aerator gearboxes', 'Custom gearbox design', 'Precision gear manufacturing'],
    sameAs: [site.social.linkedin, site.social.youtube, site.social.facebook, site.social.linktree],
  };
}

export const websiteNode = () => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${site.url}/`,
  name: site.name,
  alternateName: site.legalName,
  description: site.description,
  inLanguage: site.lang,
  publisher: { '@id': ORG_ID },
});

export const breadcrumbNode = (url, items) => ({
  '@type': 'BreadcrumbList',
  '@id': `${abs(url)}#breadcrumb`,
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    ...(i < items.length - 1 ? { item: abs(it.url) } : {}),
  })),
});

function graph(page) {
  const url = abs(page.url);
  const webPage = {
    '@type': page.pageType || 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: site.lang,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    primaryImageOfPage: { '@type': 'ImageObject', url: abs(page.ogImage) },
    dateModified: page.modified,
    ...(page.crumbs ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
  };
  const nodes = [organizationNode(), websiteNode(), webPage];
  if (page.crumbs) nodes.push(breadcrumbNode(page.url, page.crumbs));
  for (const n of page.schema || []) nodes.push(n);
  return { '@context': 'https://schema.org', '@graph': nodes };
}

// ---- Header / footer ------------------------------------------------------------
const isCurrent = (href, url) => (href === '/' ? url === '/' : url === href || (href.endsWith('/') && url.startsWith(href)) || (href === '/products/' && (url.startsWith('/series/') || url === '/all-product.html')));

function megaMenu() {
  return `<div class="mega" id="mega-products">
    <div class="mega__in">
      <div class="mega__intro">
        <p class="eyebrow">Product range</p>
        <p class="mega__title">Nine series, from catalogue gearboxes to drives engineered to order.</p>
        <a class="arrow-link" href="/products/"><span>Products overview</span>${icon('arrow', 18)}</a>
        <a class="arrow-link" href="/all-product.html"><span>All models and specifications</span>${icon('arrow', 18)}</a>
      </div>
      <ul class="mega__list">${series
        .map(
          (s) => `<li><a href="${seriesUrl(s)}"><span class="mega__thumb"><img src="${imageSrc('products', s.image, 320)}" width="56" height="56" alt="" loading="lazy" decoding="async"></span><span class="mega__txt"><span class="mono">${esc(s.name)}</span><span>${esc(s.type)}</span></span></a></li>`,
        )
        .join('')}</ul>
    </div>
  </div>`;
}

function header(url) {
  return `<header class="hdr" data-header>
  <div class="hdr__in">
    <a class="hdr__logo" href="/" aria-label="${esc(site.name)} — home"><img src="/assets/img/brand/gishnu-gears-wordmark-light.svg" width="146" height="38" alt="${esc(site.name)}"></a>
    <nav class="nav" aria-label="Primary">
      <ul class="nav__list">${nav
        .map((n) => {
          const cur = isCurrent(n.href, url) ? ' aria-current="page"' : '';
          return n.mega
            ? `<li class="nav__item nav__item--mega" data-mega><a class="nav__link" href="${n.href}"${cur}>${esc(n.label)}</a><button class="nav__toggle" type="button" aria-expanded="false" aria-controls="mega-products" aria-label="Show product series">${icon('chevron', 16)}</button>${megaMenu()}</li>`
            : `<li class="nav__item"><a class="nav__link" href="${n.href}"${cur}>${esc(n.label)}</a></li>`;
        })
        .join('')}</ul>
    </nav>
    <div class="hdr__side">
      <a class="hdr__phone" href="tel:${site.phone}" aria-label="Call ${site.phoneDisplay}">${icon('phone', 18)}<span>${site.phoneDisplay}</span></a>
      <a class="btn btn--primary btn--sm hdr__quote" href="/contact/"><span>Request a quote</span></a>
      <button class="hdr__burger" type="button" aria-haspopup="dialog" aria-controls="menu" aria-label="Open menu" data-menu-open><span></span><span></span></button>
    </div>
  </div>
</header>
<dialog class="menu" id="menu" aria-label="Site menu">
  <div class="menu__top">
    <a class="hdr__logo" href="/" aria-label="${esc(site.name)} — home"><img src="/assets/img/brand/gishnu-gears-wordmark-light.svg" width="146" height="38" alt="${esc(site.name)}"></a>
    <button class="menu__close" type="button" aria-label="Close menu" data-menu-close>${icon('close', 24)}</button>
  </div>
  <nav class="menu__nav" aria-label="Mobile">
    <ul>
      <li>
        <details class="menu__group"${url.startsWith('/series/') || url.startsWith('/products/') ? ' open' : ''}>
          <summary><span>Products</span>${icon('chevron', 22)}</summary>
          <ul class="menu__sub">
            <li><a href="/products/">Products overview</a></li>
            ${series.map((s) => `<li><a href="${seriesUrl(s)}"><span class="mono">${esc(s.name)}</span> ${esc(s.type)}</a></li>`).join('')}
            <li><a href="/all-product.html">All models and specifications</a></li>
          </ul>
        </details>
      </li>
      ${nav
        .filter((n) => !n.mega)
        .map((n) => `<li><a class="menu__link" href="${n.href}"${isCurrent(n.href, url) ? ' aria-current="page"' : ''}>${esc(n.label)}</a></li>`)
        .join('')}
      <li><a class="menu__link" href="/contact/"${url === '/contact/' ? ' aria-current="page"' : ''}>Contact</a></li>
    </ul>
  </nav>
  <div class="menu__foot">
    <a class="btn btn--primary" href="/contact/"><span>Request a quote</span>${icon('arrow', 18)}</a>
    <a class="menu__phone" href="tel:${site.phone}">${icon('phone', 20)}<span>${site.phoneDisplay}</span></a>
  </div>
</dialog>`;
}

function footer() {
  const year = new Date().getFullYear();
  const a = site.address;
  return `<footer class="ftr t-dark">
  <div class="wrap">
    <div class="ftr__top">
      <div class="ftr__brand">
        <a href="/" aria-label="${esc(site.name)} — home"><img src="/assets/img/brand/gishnu-gears-logo-light.svg" width="220" height="70" alt="${esc(site.name)} — ${esc(site.tagline)}" loading="lazy" decoding="async"></a>
        <p>Industrial gearbox manufacturer in Coimbatore, India. Worm, helical, bevel, aerator and custom-built gearboxes since ${site.founded}.</p>
        <ul class="ftr__social" aria-label="Gishnu Gears on social media">
          <li><a href="${site.social.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon('linkedin', 22)}</a></li>
          <li><a href="${site.social.youtube}" target="_blank" rel="noopener" aria-label="YouTube">${icon('youtube', 22)}</a></li>
          <li><a href="${site.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${icon('facebook', 22)}</a></li>
        </ul>
      </div>
      <nav class="ftr__col" aria-labelledby="ftr-products">
        <h2 class="ftr__h" id="ftr-products">Products</h2>
        <ul>
          ${series.map((s) => `<li><a href="${seriesUrl(s)}">${esc(s.name)} <span>${esc(s.type)}</span></a></li>`).join('')}
        </ul>
      </nav>
      <nav class="ftr__col" aria-labelledby="ftr-company">
        <h2 class="ftr__h" id="ftr-company">Company</h2>
        <ul>
          <li><a href="/about-us/">About us</a></li>
          <li><a href="/infrastructure/">Infrastructure</a></li>
          <li><a href="/projects/">Projects</a></li>
          <li><a href="/products/">Products</a></li>
          <li><a href="/all-product.html">All products</a></li>
          <li><a href="/aerator-gearboxes.html">Aerator gearboxes</a></li>
          <li><a href="/blog/">Blog</a></li>
          <li><a href="/careers/">Careers</a></li>
          <li><a href="/contact/">Contact us</a></li>
        </ul>
      </nav>
      <div class="ftr__col ftr__contact">
        <h2 class="ftr__h">Contact</h2>
        <address>
          <p><strong>${esc(site.legalName)}</strong><br>${a.lines.map(esc).join('<br>')}<br>${a.locality} – ${a.postalCode}, ${a.region}, ${a.countryName}<br><span class="mono">GSTIN ${site.gstin}</span></p>
          <p><strong>${esc(site.associate.name)}</strong><br>${site.associate.lines.map(esc).join('<br>')}<br><span class="mono">GSTIN ${site.associate.gstin}</span></p>
          <p><a class="ftr__tel" href="tel:${site.phone}">${icon('phone', 18)}${site.phoneDisplay}</a></p>
        </address>
        <a class="ftr__qr" href="${site.social.linktree}" target="_blank" rel="noopener"><img src="/assets/img/brand/gishnu-gears-linktree-qr.png" width="84" height="84" alt="QR code linking to Gishnu Gears profiles and catalogues" loading="lazy" decoding="async"><span>Scan or tap for more information</span></a>
      </div>
    </div>
    <div class="ftr__bar">
      <p>© ${year} ${esc(site.legalName)}. All rights reserved.</p>
      <ul>
        <li><a href="/privacy-policy/">Privacy policy</a></li>
        <li><a href="/sitemap.xml">Sitemap</a></li>
      </ul>
      <p class="ftr__credit">${esc(site.credit.prefix)} <a href="${site.credit.url}" target="_blank" rel="noopener">${esc(site.credit.name)}</a></p>
    </div>
  </div>
</footer>`;
}

// ---- Analytics (existing GTM + GA4 containers and consent defaults, unchanged) ----
// The dataLayer and consent defaults are set immediately; the two Google libraries
// are injected once the page has loaded so they do not compete with first render.
// They are only requested on the production hostname, so local previews and Vercel
// preview deployments never send hits to the live Analytics property.
//
// Between the consent defaults and the rest sits the additional Google tag
// (site.analytics.tag), inserted exactly as supplied: it loads straight away on
// every hostname. Its gtag('js') call replaces the one this block used to make, so
// the data layer still receives that command once, after the consent defaults.
function analytics() {
  const eu = ['AT','BE','BG','CY','CZ','DK','EE','FI','FR','DE','GR','HU','HR','IS','IE','IT','LV','LI','LT','LU','MT','NL','NO','PL','PT','RO','SK','SI','ES','SE','CH','GB'];
  return `<script>
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag("consent","default",{ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:"denied",functionality_storage:"denied",personalization_storage:"denied",security_storage:"denied",region:${JSON.stringify(eu)},wait_for_update:2000});
gtag("consent","default",{ad_storage:"granted",ad_user_data:"granted",ad_personalization:"granted",analytics_storage:"granted",functionality_storage:"granted",personalization_storage:"denied",security_storage:"granted"});
gtag("set",{"developer_id.dNjAwYj":true});
</script>
<script async src="https://www.googletagmanager.com/gtm.js?id=${site.analytics.tag}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
</script>
<script>
gtag("config","${site.analytics.ga4}");
(function(w,d){var done=0;function load(){if(done||!/(^|\\.)gishnugears\\.com$/.test(location.hostname))return;done=1;w.dataLayer.push({"gtm.start":new Date().getTime(),event:"gtm.js"});
[["https://www.googletagmanager.com/gtm.js?id=${site.analytics.gtm}"],["https://www.googletagmanager.com/gtag/js?id=${site.analytics.ga4}"]].forEach(function(u){var s=d.createElement("script");s.async=true;s.src=u[0];d.head.appendChild(s)})}
function soon(){(w.requestIdleCallback||function(f){setTimeout(f,1)})(load,{timeout:2500})}
if(d.readyState==="complete")soon();else w.addEventListener("load",soon);
["pointerdown","keydown","scroll"].forEach(function(e){w.addEventListener(e,load,{once:true,passive:true})})})(window,document);
</script>`;
}

// ---- Page ------------------------------------------------------------------------
/**
 * @param page  { url, title, description, h1?, crumbs?, ogImage, ogType?, pageType?, schema?, noindex?, modified, bodyClass?, preload?, article? }
 * @param body  HTML for <main>
 * @param assets { css, js } hashed asset URLs
 */
export function document(page, body, assets) {
  const canonical = abs(page.url);
  const og = abs(page.ogImage);
  return `<!doctype html>
<html lang="${site.lang}" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
${page.noindex ? '<meta name="robots" content="noindex, follow">' : `<link rel="canonical" href="${canonical}">\n<meta name="robots" content="${ROBOTS}">`}
<script>document.documentElement.className="js"</script>
<link rel="preload" href="/assets/fonts/archivo-variable.woff2" as="font" type="font/woff2" crossorigin>
${page.preload || ''}
<link rel="stylesheet" href="${assets.css}">
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#151318">
<meta name="format-detection" content="telephone=no">
<meta name="geo.region" content="IN-TN">
<meta name="geo.placename" content="Coimbatore">
<meta property="og:type" content="${page.ogType || 'website'}">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:locale" content="${site.locale}">
<meta property="og:title" content="${esc(page.ogTitle || page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(page.ogAlt || page.h1 || page.title)}">
${page.article ? `<meta property="article:published_time" content="${page.article.published}">\n<meta property="article:modified_time" content="${page.article.updated}">\n<meta property="article:section" content="${esc(page.article.section)}">` : ''}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.ogTitle || page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${og}">
${jsonld(graph(page))}
${analytics()}
<script type="module" src="${assets.js}"></script>
</head>
<body class="${page.bodyClass || ''}">
<a class="skip" href="#main">Skip to content</a>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${site.analytics.gtm}" height="0" width="0" style="display:none;visibility:hidden" title="Google Tag Manager"></iframe></noscript>
${header(page.url)}
<main id="main" tabindex="-1">
${body}
</main>
${footer()}
</body>
</html>
`.replace(/\n{2,}/g, '\n');
}

export { btn };
