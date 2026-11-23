// Product templates: products hub, all-products catalogue, series, product detail, aerator landing page.
import { site, industries } from '../data/site.mjs';
import { series, products, groups } from '../data/catalog.mjs';
import {
  esc, icon, btn, arrowLink, picture, preloadImage, imageSrc, dial, plate, eyebrow, sectionHead, breadcrumbs,
  seriesCard, productCard, seriesUrl, productUrl, productsOf, seriesById, ctaBand, enquiryForm, specTable, faq, faqSchema, abs,
} from './components.mjs';
import { ORG_ID } from './layout.mjs';

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const HOME = { name: 'Home', url: '/' };
const PRODUCTS = { name: 'Products', url: '/products/' };

const itemList = (url, name, items) => ({
  '@type': 'ItemList',
  '@id': `${abs(url)}#list`,
  name,
  numberOfItems: items.length,
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, url: abs(it.url) })),
});

// ---- /products/ ------------------------------------------------------------------
export function productsHub() {
  const url = '/products/';
  const crumbs = [HOME, PRODUCTS];
  const guide = [
    ['A compact right-angle drive with a high reduction', ['g', 'gal']],
    ['A lightweight or hygienic drive', ['gal']],
    ['An inline drive for slow speed and high torque', ['h']],
    ['A paddle-wheel aerator for a prawn or shrimp pond', ['a']],
    ['A change of direction at 1:1, such as steering', ['b']],
    ['A gearbox that does not exist in a catalogue', ['m', 'z']],
    ['Gears or housings made to your drawing', ['o', 'c']],
  ];
  const body = `<section class="hero hero--page t-dark" aria-labelledby="page-title">
  <div class="wrap">
    ${breadcrumbs(crumbs)}
    <div class="hero__head hero__head--split">
      <div>
        ${eyebrow('Product range')}
        <h1 class="h-display h-display--sm" id="page-title">Industrial gearboxes for every drive</h1>
      </div>
      <p class="lede">Nine series cover worm, helical and bevel gearboxes, aquaculture aerator drives, precision gears and gearboxes engineered to order. All are designed and manufactured by Gishnu Gears in Coimbatore.</p>
    </div>
  </div>
</section>
<section class="sec sec--tight t-light" aria-labelledby="series-title">
  <div class="wrap">
    <div class="filter" data-filter>
      <h2 class="h-sub" id="series-title">Choosing the right series for your application</h2>
      <div class="filter__chips" role="group" aria-label="Filter series by type">
        <button type="button" class="chip is-on" data-filter-btn="all" aria-pressed="true">All series</button>
        ${groups.map((g) => `<button type="button" class="chip" data-filter-btn="${g.id}" aria-pressed="false">${esc(g.label)}</button>`).join('')}
      </div>
      <p class="filter__count" role="status" aria-live="polite" data-filter-count>Showing all ${series.length} series</p>
    </div>
    <div class="s-grid" data-filter-list>
      ${series.map((s) => seriesCard(s)).join('')}
    </div>
  </div>
</section>
<section class="sec t-dark" aria-labelledby="guide-title">
  <div class="wrap split">
    <div class="split__lead" data-reveal>
      ${eyebrow('Selection guide')}
      <h2 class="h-sec" id="guide-title">Not sure which series fits?</h2>
      <p>Start from what the drive has to do. If your requirement is not on the list, send it to us and our engineers will recommend a gearbox or propose a custom design.</p>
      ${arrowLink('/all-product.html', 'Compare all models and specifications')}
    </div>
    <div class="split__body">
      <ul class="guide">
        ${guide
          .map(([need, ids]) => `<li data-reveal><p class="guide__need"><span>If you need</span>${esc(need)}</p><p class="guide__go">${ids.map((id) => `<a href="${seriesUrl(seriesById[id])}"><span class="mono">${esc(seriesById[id].name)}</span>${esc(seriesById[id].type)}${icon('arrow', 16)}</a>`).join('')}</p></li>`)
          .join('')}
      </ul>
    </div>
  </div>
</section>
${ctaBand({ title: 'Discuss your gearbox requirement', text: 'Tell us the application, the ratio and the motor. We will recommend a series or engineer a custom gearbox.', secondary: { href: '/all-product.html', label: 'View all models' } })}`;

  return {
    url,
    file: 'products/index.html',
    title: 'Industrial Gearbox Manufacturer | Gearbox Range | Gishnu Gears',
    description: 'Explore industrial gearboxes from Gishnu Gears: worm, aluminium worm, inline helical, bevel, aerator and custom-built series made in Coimbatore, India.',
    h1: 'Industrial gearboxes for every drive',
    keyword: 'industrial gearbox manufacturer',
    secondary: ['industrial gearbox solutions', 'worm gearbox', 'helical geared motor', 'bevel gearbox', 'custom gearbox'],
    intent: 'Commercial',
    crumbs,
    pageType: 'CollectionPage',
    og: { kicker: 'Product range', title: 'Industrial gearboxes for every drive', image: 'h-series-inline-helical-geared-motor-front' },
    schema: [itemList(url, 'Gishnu Gears gearbox series', series.map((s) => ({ name: `${s.name} ${s.type}`, url: seriesUrl(s) })))],
    priority: '0.9',
    body,
  };
}

// ---- /all-product.html -----------------------------------------------------------
export function allProducts() {
  const url = '/all-product.html';
  const crumbs = [HOME, PRODUCTS, { name: 'All products', url }];
  const row = (label) => (s) => (s.specs.find(([k]) => k === label) || [])[1];
  const ratio = row('Ratio');
  const motor = row('Motor power');
  const torque = (s) => (s.specs.find(([k]) => k === 'Output torque' || k === 'Load rating') || [])[1];
  const photos = [
    ['Cement', 'gear-finishing-by-hand', 'Gear components being finished by hand'],
    ['Construction', 'precision-machined-components', 'Precision-machined components on an inspection table'],
    ['Packaging', 'helical-gear-teeth-closeup', 'Close-up of helical gear teeth'],
    ['Pharma', 'transmission-gear-shafts', 'Gear shafts and transmission components'],
  ];

  const body = `<section class="hero hero--page t-dark" aria-labelledby="page-title">
  <div class="wrap">
    ${breadcrumbs(crumbs)}
    <div class="hero__head hero__head--split">
      <div>
        ${eyebrow('Catalogue')}
        <h1 class="h-display h-display--sm" id="page-title">All gearbox models and specifications</h1>
      </div>
      <p class="lede">Every model across our nine series on one page, with the ratios and motor ratings we publish for each. Use it to shortlist a gearbox, then ask us for the datasheet.</p>
    </div>
    <nav class="jump" aria-label="Jump to series">
      ${series.map((s) => `<a href="#${s.slug}"><span class="mono">${s.letter}</span></a>`).join('')}
      <a href="#compare">Compare</a>
    </nav>
  </div>
</section>

<section class="sec sec--tight t-light" aria-labelledby="models-title">
  <div class="wrap">
    <h2 class="visually-hidden" id="models-title">Explore gearbox series</h2>
    <div class="cat">
      ${series
        .map((s) => {
          const list = productsOf(s.id);
          return `<section class="cat__group" id="${s.slug}" aria-labelledby="${s.slug}-h">
        <header class="cat__head">
          <p class="cat__letter" aria-hidden="true">${s.letter}</p>
          <div>
            <h3 class="h-card" id="${s.slug}-h"><a href="${seriesUrl(s)}">${esc(s.name)} <span>${esc(s.type)}</span></a></h3>
            <p>${esc(s.lede)}</p>
          </div>
        </header>
        <ul class="cat__rows">
          ${(list.length
            ? list.map(
                (p) => `<li><a class="cat__row" href="${productUrl(p)}">
            <span class="cat__thumb"><img src="${imageSrc('products', p.images[0][0], 320)}" width="72" height="72" alt="${esc(p.images[0][1])}" loading="lazy" decoding="async"></span>
            <span class="cat__name"><strong>${esc(cap(p.name))}</strong><small>${esc(p.kind)}</small></span>
            ${p.plate.map(([k, v]) => `<span class="cat__spec"><small>${esc(k)}</small><span class="mono">${esc(v)}</span></span>`).join('')}
            <span class="cat__go">${icon('arrow', 18)}</span>
          </a></li>`,
              )
            : [
                `<li><a class="cat__row" href="${s.seeAlso ? s.seeAlso.href : seriesUrl(s)}">
            <span class="cat__thumb"><img src="${imageSrc('products', s.image, 320)}" width="72" height="72" alt="${esc(s.imageAlt)}" loading="lazy" decoding="async"></span>
            <span class="cat__name"><strong>Volume-based custom gearboxes</strong><small>${esc(s.type)}</small></span>
            ${s.plate.map(([k, v]) => `<span class="cat__spec"><small>${esc(k)}</small><span class="mono">${esc(v)}</span></span>`).join('')}
            <span class="cat__go">${icon('arrow', 18)}</span>
          </a></li>`,
              ]
          ).join('')}
        </ul>
      </section>`;
        })
        .join('')}
    </div>
  </div>
</section>

<section class="sec t-dark" id="compare" aria-labelledby="compare-title">
  <div class="wrap">
    ${sectionHead({ kicker: 'Compare', title: '<span id="compare-title">Typical specifications across gearbox series</span>', text: 'Figures are the published range for each series. The rating of an individual unit depends on its size and ratio, so confirm against the datasheet before ordering.' })}
    <div class="table-wrap" tabindex="0" role="region" aria-label="Series comparison table. Scroll sideways to see all columns.">
      <table class="compare">
        <thead><tr><th scope="col">Series</th><th scope="col">Type</th><th scope="col">Ratio</th><th scope="col">Motor power</th><th scope="col">Torque / load</th><th scope="col">Typical applications</th></tr></thead>
        <tbody>
          ${series
            .map(
              (s) => `<tr><th scope="row"><a href="${seriesUrl(s)}"><span class="mono">${esc(s.name)}</span></a></th><td>${esc(s.type)}</td><td class="mono">${esc(ratio(s) || '—')}</td><td class="mono">${esc(motor(s) || '—')}</td><td class="mono">${esc(torque(s) || 'On request')}</td><td>${esc(s.applications.slice(0, 3).join(', '))}</td></tr>`,
            )
            .join('')}
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="sec t-light" aria-labelledby="served-title">
  <div class="wrap">
    ${sectionHead({ kicker: 'Industries served', title: '<span id="served-title">Industries we supply</span>', text: 'Our gearboxes, gears and machined components go into equipment across process and manufacturing industries.' })}
    <ul class="served">
      ${photos.map(([name, img, alt]) => `<li data-reveal><figure>${picture({ kind: 'photos', name: img, alt, sizes: '(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw', max: 1024 })}<figcaption>${name}</figcaption></figure></li>`).join('')}
    </ul>
    <ul class="taglist" aria-label="More industries and applications">
      ${industries.map((i) => `<li>${esc(i.name)}</li>`).join('')}
    </ul>
    <p class="note" data-reveal><span class="mono">ISO 9001:2015</span> Gishnu Gears is an ISO 9001:2015 certified company.</p>
  </div>
</section>
${ctaBand({ title: 'Need a datasheet or a quotation?', text: 'Tell us the model you are considering, or describe the application and we will shortlist for you.', primary: { href: '/contact/?intent=datasheet', label: 'Request a datasheet' }, secondary: { href: '/products/', label: 'Browse by series' } })}`;

  return {
    url,
    file: 'all-product.html',
    title: 'Industrial Gearbox Supplier | All Models & Specifications',
    description: 'Compare every Gishnu Gears gearbox model: worm, helical, bevel, aerator and custom series with ratios, motor power and applications. Request a datasheet.',
    h1: 'All gearbox models and specifications',
    keyword: 'industrial gearbox supplier',
    secondary: ['gearbox specifications', 'gearbox ratio and motor power', 'compare gearbox series'],
    intent: 'Commercial investigation',
    crumbs,
    pageType: 'CollectionPage',
    og: { kicker: 'Catalogue', title: 'All gearbox models and specifications', image: 'g-series-gv-worm-gearbox' },
    schema: [itemList(url, 'All Gishnu Gears gearbox models', products.map((p) => ({ name: cap(p.name), url: productUrl(p) })))],
    priority: '0.8',
    body,
  };
}

// ---- /series/<slug>.html ----------------------------------------------------------
export function seriesPage(s) {
  const url = seriesUrl(s);
  const crumbs = [HOME, PRODUCTS, { name: `${s.name}`, url }];
  const list = productsOf(s.id);
  const sizes = '(min-width: 1024px) min(33vw, 450px), 66vw';
  const body = `<section class="hero hero--series t-dark" aria-labelledby="page-title">
  <span class="hero__letter" aria-hidden="true">${s.letter}</span>
  <div class="wrap hero__in">
    <div class="hero__copy">
      ${breadcrumbs(crumbs)}
      ${eyebrow(`${s.name} · ${s.type}`)}
      <h1 class="h-display h-display--sm" id="page-title">${esc(s.h1)}</h1>
      <p class="lede">${esc(s.lede)}</p>
      ${plate(s.plate)}
      <div class="hero__actions">
        ${btn({ href: `/contact/?product=${encodeURIComponent(`${s.name} – ${s.type}`)}`, label: 'Request a quote' })}
        ${btn({ href: `/contact/?product=${encodeURIComponent(`${s.name} – ${s.type}`)}&intent=datasheet`, label: 'Request datasheet', variant: 'ghost', ico: 'doc' })}
      </div>
    </div>
    <div class="hero__visual">
      ${dial('hero__dial')}
      <div class="hero__render" data-tilt>${picture({ name: s.image, alt: s.imageAlt, sizes, priority: true })}</div>
    </div>
  </div>
</section>

<section class="sec t-light" aria-labelledby="overview-title">
  <div class="wrap overview">
    <div class="overview__main" data-reveal>
      ${eyebrow('Overview')}
      <h2 class="h-sec" id="overview-title">What the ${esc(s.name)} is for</h2>
      ${s.overview.map((p) => `<p>${esc(p)}</p>`).join('')}
      <p class="usecase"><span class="mono">Use case</span>${esc(s.useCase)}</p>
    </div>
    <div class="overview__side" data-reveal>
      <h3 class="eyebrow">Specifications</h3>
      ${specTable(s.specs, `${s.name} specifications`)}
      <h3 class="eyebrow">Applications</h3>
      <ul class="ticks">${s.applications.map((a) => `<li>${icon('check', 18)}${esc(a)}</li>`).join('')}</ul>
    </div>
  </div>
</section>

<section class="sec sec--tight-top t-light" aria-labelledby="points-title">
  <div class="wrap">
    <h2 class="visually-hidden" id="points-title">Why choose the ${esc(s.name)}</h2>
    <ul class="points">
      ${s.points.map(([t, d]) => `<li data-reveal><h3 class="h-card">${esc(t)}</h3><p>${esc(d)}</p></li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec t-dark" aria-labelledby="models-title">
  <div class="wrap">
    ${sectionHead({ kicker: 'Models', title: `<span id="models-title">${esc(s.name)} ${list.length > 1 ? 'models' : 'products'}</span>`, link: arrowLink('/all-product.html', 'Compare all series') })}
    ${
      list.length
        ? `<div class="p-grid p-grid--${Math.min(list.length, 4)}">${list.map((p) => productCard(p)).join('')}</div>`
        : `<div class="p-grid p-grid--1"><article class="p-card" data-reveal><a class="p-card__link" href="${s.seeAlso.href}"><div class="p-card__stage"><div class="p-card__img" data-tilt>${picture({ name: s.image, alt: s.imageAlt, sizes: '(min-width: 1100px) 300px, 80vw', max: 960 })}</div></div><div class="p-card__body"><p class="p-card__kind">${esc(s.name)} · Volume based</p><h3 class="p-card__title">Volume-based custom gearboxes</h3>${plate(s.plate, 'plate--inline')}<span class="p-card__more">See projects ${icon('arrow', 18)}</span></div></a></article></div>`
    }
    ${s.seeAlso ? `<a class="seealso" href="${s.seeAlso.href}" data-reveal><span><strong>${esc(s.seeAlso.label)}</strong>${esc(s.seeAlso.text)}</span>${icon('arrow', 22)}</a>` : ''}
  </div>
</section>

<section class="sec t-light" aria-labelledby="enquire-title">
  <div class="wrap enquire">
    <div class="enquire__copy" data-reveal>
      ${eyebrow('Enquire')}
      <h2 class="h-sec" id="enquire-title">Ask about the ${esc(s.name)}</h2>
      <p>Send us the application, the ratio and motor power you need, and the quantity. We will reply with a recommendation, a datasheet and a quotation.</p>
      <p class="enquire__tel"><a href="tel:${site.phone}">${icon('phone', 20)}${site.phoneDisplay}</a></p>
    </div>
    <div class="enquire__form" data-reveal>${enquiryForm({ id: 'series-enquiry', context: `${s.name} series page`, product: `${s.name} – ${s.type}` })}</div>
  </div>
</section>

<section class="sec sec--tight-top t-light" aria-labelledby="related-title">
  <div class="wrap">
    <header class="sec-head"><div class="sec-head__main">${eyebrow('Related')}<h2 class="h-sec" id="related-title">Other series to consider</h2></div><div class="sec-head__side">${arrowLink('/products/', 'All series')}</div></header>
    <div class="s-grid">${s.related.map((id) => seriesCard(seriesById[id])).join('')}</div>
  </div>
</section>`;

  return {
    url,
    file: `series/${s.slug}.html`,
    title: s.seo.title,
    description: s.seo.description,
    h1: s.h1,
    keyword: s.seo.keyword,
    secondary: [s.type.toLowerCase(), ...list.map((p) => p.name)],
    intent: 'Commercial',
    crumbs,
    pageType: 'CollectionPage',
    og: { kicker: s.name, title: s.type, image: s.image },
    preload: preloadImage({ name: s.image, sizes }),
    schema: list.length ? [itemList(url, `${s.name} models`, list.map((p) => ({ name: cap(p.name), url: productUrl(p) })))] : [],
    priority: '0.8',
    body,
  };
}

// ---- /products/<slug>.html ----------------------------------------------------------
export function productPage(p) {
  const s = seriesById[p.series];
  const url = productUrl(p);
  const name = cap(p.name);
  const crumbs = [HOME, PRODUCTS, { name: s.name, url: seriesUrl(s) }, { name, url }];
  const siblings = productsOf(p.series).filter((x) => x.slug !== p.slug);
  const more = siblings.length ? siblings : products.filter((x) => s.related.includes(x.series)).slice(0, 3);
  const sizes = '(min-width: 1024px) 32vw, 62vw';
  const enquiryLabel = `${name} (${s.name})`;

  const gallery = `<div class="gallery" data-gallery>
    <div class="gallery__stage t-dark">
      ${dial()}
      ${p.images
        .map(
          ([img, alt], i) => `<figure class="gallery__slide${i === 0 ? ' is-on' : ''}" id="view-${i + 1}" data-gallery-slide><div data-tilt>${picture({ name: img, alt, title: alt, sizes, priority: i === 0 })}</div></figure>`,
        )
        .join('')}
    </div>
    ${
      p.images.length > 1
        ? `<div class="gallery__thumbs" role="group" aria-label="Product views">${p.images
            .map(
              ([img, alt], i) => `<button type="button" class="gallery__thumb${i === 0 ? ' is-on' : ''}" data-gallery-thumb="${i}" aria-pressed="${i === 0}" aria-label="View ${i + 1}: ${esc(alt)}"><img src="${imageSrc('products', img, 320)}" width="88" height="88" alt="" loading="lazy" decoding="async"></button>`,
            )
            .join('')}</div>`
        : ''
    }
  </div>`;

  const body = `<section class="pdp t-light" aria-labelledby="page-title">
  <div class="wrap pdp__in">
    <div class="pdp__media">${gallery}</div>
    <div class="pdp__info">
      ${breadcrumbs(crumbs)}
      <p class="eyebrow"><a href="${seriesUrl(s)}">${esc(s.name)}</a> · ${esc(p.kind)}</p>
      <h1 class="h-display h-display--xs" id="page-title">${esc(name)}</h1>
      <p class="lede">${esc(p.summary)}</p>
      ${plate(p.plate)}
      <div class="pdp__actions">
        ${btn({ href: '#enquire', label: 'Request a quote' })}
        ${btn({ href: `/contact/?product=${encodeURIComponent(enquiryLabel)}&intent=datasheet`, label: 'Request datasheet', variant: 'outline', ico: 'doc' })}
      </div>
      <p class="pdp__call">${icon('phone', 18)}<span>Speak to sales: <a href="tel:${site.phone}">${site.phoneDisplay}</a></span></p>
    </div>
  </div>
</section>

<section class="sec sec--tight t-light" aria-labelledby="detail-title">
  <div class="wrap overview">
    <div class="overview__main" data-reveal>
      ${eyebrow('Description')}
      <h2 class="h-sec" id="detail-title">About the ${esc(p.model === p.name ? name : p.name)}</h2>
      ${p.body.map((t) => `<p>${esc(t)}</p>`).join('')}
      <p>${arrowLink(seriesUrl(s), `More about the ${s.name}`)}</p>
    </div>
    <div class="overview__side" data-reveal>
      <h3 class="eyebrow">Specifications</h3>
      ${specTable(p.specs, `${name} specifications`)}
      <h3 class="eyebrow">Applications</h3>
      <ul class="ticks">${p.applications.map((a) => `<li>${icon('check', 18)}${esc(a)}</li>`).join('')}</ul>
    </div>
  </div>
</section>

<section class="sec t-dark" id="enquire" aria-labelledby="enquire-title">
  <div class="wrap enquire">
    <div class="enquire__copy" data-reveal>
      ${eyebrow('Enquire now')}
      <h2 class="h-sec" id="enquire-title">Request a quote for the ${esc(p.model)}</h2>
      <p>Tell us the ratio, motor power and quantity you need. We will send the datasheet and a quotation, or suggest an alternative if another model suits the duty better.</p>
      <ul class="ticks">
        <li>${icon('check', 18)}Manufactured in Coimbatore, India</li>
        <li>${icon('check', 18)}ISO 9001:2015 certified company</li>
        <li>${icon('check', 18)}Customisation available on request</li>
      </ul>
    </div>
    <div class="enquire__form" data-reveal>${enquiryForm({ id: 'product-enquiry', context: `${name} product page`, product: enquiryLabel })}</div>
  </div>
</section>

<section class="sec t-light" aria-labelledby="more-title">
  <div class="wrap">
    <header class="sec-head"><div class="sec-head__main">${eyebrow(siblings.length ? `More in the ${s.name}` : 'Related products')}<h2 class="h-sec" id="more-title">${siblings.length ? 'Other models in this series' : 'You may also need'}</h2></div><div class="sec-head__side">${arrowLink('/all-product.html', 'All products')}</div></header>
    <div class="p-grid p-grid--${Math.min(more.length, 4)} p-grid--light">${more.slice(0, 4).map((x) => productCard(x)).join('')}</div>
  </div>
</section>`;

  return {
    url,
    file: `products/${p.slug}.html`,
    title: p.seo.title,
    description: p.seo.description,
    h1: name,
    keyword: p.name.toLowerCase(),
    secondary: [p.kind.toLowerCase(), `${s.name} ${s.type}`.toLowerCase()],
    intent: 'Transactional',
    crumbs,
    pageType: 'ItemPage',
    og: { kicker: `${s.name} · ${p.kind}`, title: name, image: p.images[0][0] },
    preload: preloadImage({ name: p.images[0][0], sizes }),
    schema: [
      {
        '@type': 'Product',
        '@id': `${abs(url)}#product`,
        name,
        description: p.summary,
        category: `${s.name} ${s.type}`,
        model: p.model,
        image: p.images.map(([img]) => abs(imageSrc('products', img, 960))),
        brand: { '@type': 'Brand', name: site.name },
        manufacturer: { '@id': ORG_ID },
        countryOfOrigin: { '@type': 'Country', name: 'India' },
        url: abs(url),
        mainEntityOfPage: { '@id': `${abs(url)}#webpage` },
        additionalProperty: p.specs.map(([k, v]) => ({ '@type': 'PropertyValue', name: k, value: v })),
      },
    ],
    oldPaths: p.oldPaths,
    priority: '0.7',
    body,
  };
}

// ---- /aerator-gearboxes.html ---------------------------------------------------------
export function aerator() {
  const url = '/aerator-gearboxes.html';
  const crumbs = [HOME, PRODUCTS, { name: 'Aerator gearboxes', url }];
  const a = seriesById.a;
  const models = productsOf('a');
  const sizes = '(min-width: 1024px) min(33vw, 450px), 66vw';
  // Specification table carried over from the previous aerator page.
  const specs = [
    ['Gear ratio', 'Available up to 50:1, offering torque multiplication and speed control suited to heavy aeration loads.'],
    ['Torque capacity', 'Handles torque up to 10,000 Nm, suitable for large impellers and high-resistance environments.'],
    ['Mounting options', 'Foot-mounted and flange-mounted options, compatible with both horizontal and vertical installations.'],
    ['Material grade', 'Constructed using EN-GJS-600 ductile iron for tensile strength and resistance to corrosion and wear.'],
    ['Sealing', 'Double-lip oil seals and labyrinth construction to prevent ingress of water and dust in moist environments.'],
    ['Bearings', 'Heavy-duty tapered roller bearings to withstand radial and axial loads continuously.'],
    ['Lubrication', 'Factory-filled with synthetic oil (grade VG 220/320) for extended service intervals.'],
    ['Customisation', 'Units can be tailored for shaft size, mounting configuration, paint coating and gear profile to suit the application.'],
  ];
  const faqs = [
    ['Which aerator gearbox models do you manufacture?', 'Our A-Series has four models: the A1 (ratio 14.4, 1 HP), the A3 (ratio 11 to 13.7, 1 to 3 HP), the A4 (ratio 12.6, 2 to 3 HP) and the GBH 200 (ratio 11 to 13.7, 3 HP).'],
    ['What is an aerator gearbox used for?', 'In prawn and shrimp culture, the gearbox drives the paddle-wheel sets that generate aeration bubbles and raise oxygen levels in the pond. The same kind of drive is used for aeration in wastewater treatment plants, biogas plants and aeration basins.'],
    ['How are the gearboxes protected against water?', 'They use double-lip oil seals and a labyrinth construction to prevent the ingress of water and dust in moist environments.'],
    ['Can an aerator gearbox be customised?', 'Yes. Units can be tailored for shaft size, mounting configuration, paint coating and gear profile. Optional add-ons include an anti-rust epoxy coating, integrated torque arms and IEC motor adaptability.'],
    ['Are the gearboxes tested before dispatch?', 'All gearboxes are tested under load conditions before dispatch. Gishnu Gears is an ISO 9001:2015 certified company.'],
    ['Do you supply aerator gearboxes outside Tamil Nadu?', 'Yes. We serve customers across India and in international markets, shipping from Coimbatore through its nearby airports and ports.'],
  ];

  const body = `<section class="hero hero--series t-dark" aria-labelledby="page-title">
  <div class="wrap hero__in">
    <div class="hero__copy">
      ${breadcrumbs(crumbs)}
      ${eyebrow('Aquaculture · Wastewater treatment')}
      <h1 class="h-display h-display--sm" id="page-title">Aerator gearbox manufacturer in India</h1>
      <p class="lede">Gearboxes for paddle-wheel aerators and aeration systems, built in Coimbatore for continuous duty in ponds, treatment plants and aeration basins.</p>
      ${plate([['Models', 'A1 · A3 · A4 · GBH 200'], ['Ratio', '11 – 14.4'], ['Motor', '1 – 3 HP']])}
      <div class="hero__actions">
        ${btn({ href: '#enquire', label: 'Request a quote' })}
        ${btn({ href: '#models', label: 'View models', variant: 'ghost', ico: 'arrow-down' })}
      </div>
    </div>
    <div class="hero__visual">
      ${dial('hero__dial')}
      <div class="hero__render" data-tilt>${picture({ name: 'a4-aerator-gearbox', alt: 'A4 paddle-wheel aerator gearbox manufactured by Gishnu Gears', sizes, priority: true })}</div>
    </div>
  </div>
</section>

<section class="sec t-light" aria-labelledby="about-aerator">
  <div class="wrap overview">
    <div class="overview__main" data-reveal>
      ${eyebrow('Overview')}
      <h2 class="h-sec" id="about-aerator">Reliable aeration, hour after hour</h2>
      <p>Our aerator gearboxes are engineered to deliver reliable performance in demanding environments such as aquaculture ponds, wastewater treatment plants, biogas plants and aeration basins. Each unit is built with precision components and heavy-duty materials for long-term durability and low maintenance.</p>
      <p>In prawn and shrimp culture, the gearbox turns the motor’s speed into the slow, steady rotation of the paddle-wheel sets. The paddles break the water surface and generate the aeration bubbles that keep dissolved oxygen at the level the stock needs.</p>
      <p>All gearboxes are tested under load conditions before dispatch, and Gishnu Gears is an ISO 9001:2015 certified company. Optional add-ons include an anti-rust epoxy coating, integrated torque arms and IEC motor adaptability.</p>
    </div>
    <div class="overview__side" data-reveal>
      <h3 class="eyebrow">Where they are used</h3>
      <ul class="ticks">
        ${['Prawn and shrimp culture ponds', 'Fish farming', 'Wastewater treatment plants', 'Biogas plants', 'Aeration basins'].map((x) => `<li>${icon('check', 18)}${x}</li>`).join('')}
      </ul>
      <a class="seealso seealso--light" href="${seriesUrl(a)}"><span><strong>A-Series aquaculture gearboxes</strong>The series page for our paddle-wheel aerator range.</span>${icon('arrow', 22)}</a>
    </div>
  </div>
</section>

<section class="sec t-dark" id="models" aria-labelledby="models-title">
  <div class="wrap">
    ${sectionHead({ kicker: 'Models', title: '<span id="models-title">Aerator gearbox models</span>', text: 'Four models cover the 1, 2 and 3 HP motors that paddle-wheel aerators run on.' })}
    <div class="p-grid p-grid--4">${models.map((p) => productCard(p)).join('')}</div>
  </div>
</section>

<section class="sec t-light" aria-labelledby="spec-title">
  <div class="wrap">
    ${sectionHead({ kicker: 'Product specifications', title: '<span id="spec-title">Aerator gearbox specifications</span>', text: 'Construction and options across our aerator gearbox range. Ratings for an individual unit depend on its model and ratio.' })}
    <div class="table-wrap" data-reveal>
      <table class="spec spec--wide">
        <thead><tr><th scope="col">Feature</th><th scope="col">Details</th></tr></thead>
        <tbody>${specs.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}</tbody>
      </table>
    </div>
  </div>
</section>

<section class="sec sec--tight-top t-light" aria-labelledby="faq-title">
  <div class="wrap split">
    <div class="split__lead" data-reveal>
      ${eyebrow('Questions')}
      <h2 class="h-sec" id="faq-title">Aerator gearbox FAQs</h2>
      <p>Answers to what buyers ask us most often. For anything else, call ${`<a href="tel:${site.phone}">${site.phoneDisplay}</a>`}.</p>
    </div>
    <div class="split__body" data-reveal>${faq(faqs)}</div>
  </div>
</section>

<section class="sec t-dark" id="enquire" aria-labelledby="enquire-title">
  <div class="wrap enquire">
    <div class="enquire__copy" data-reveal>
      ${eyebrow('Enquire now')}
      <h2 class="h-sec" id="enquire-title">Get a quote for aerator gearboxes</h2>
      <p>Tell us the motor power, the model or ratio you need and the quantity. We reply with a quotation and delivery details.</p>
      <ul class="ticks">
        <li>${icon('check', 18)}Tested under load before dispatch</li>
        <li>${icon('check', 18)}ISO 9001:2015 certified company</li>
        <li>${icon('check', 18)}Shaft, mounting and coating options</li>
      </ul>
    </div>
    <div class="enquire__form" data-reveal>${enquiryForm({ id: 'aerator-enquiry', context: 'Aerator gearboxes page', product: 'Aerator gearboxes' })}</div>
  </div>
</section>`;

  return {
    url,
    file: 'aerator-gearboxes.html',
    title: 'Aerator Gearbox Manufacturer in India | Gishnu Gears',
    description: 'Aerator gearbox manufacturer in Coimbatore, India. Paddle wheel aerator gearboxes for aquaculture and wastewater treatment, 1 to 3 HP. Request a quote.',
    h1: 'Aerator gearbox manufacturer in India',
    keyword: 'aerator gearbox manufacturer',
    secondary: ['paddle wheel aerator gearbox', 'aquaculture aerator gearbox', 'shrimp pond aerator gearbox'],
    intent: 'Commercial',
    crumbs,
    og: { kicker: 'Aquaculture · Wastewater treatment', title: 'Aerator gearbox manufacturer in India', image: 'a4-aerator-gearbox' },
    preload: preloadImage({ name: 'a4-aerator-gearbox', sizes }),
    schema: [{ '@id': `${abs(url)}#faq`, ...faqSchema(faqs) }, itemList(url, 'Aerator gearbox models', models.map((p) => ({ name: cap(p.name), url: productUrl(p) })))],
    priority: '0.9',
    body,
  };
}
