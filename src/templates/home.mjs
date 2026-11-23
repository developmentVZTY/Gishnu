import { site, industries, machinery } from '../data/site.mjs';
import { series, groups, zProjects } from '../data/catalog.mjs';
import { posts } from '../data/posts.mjs';
import { esc, icon, btn, arrowLink, picture, preloadImage, dial, plate, eyebrow, sectionHead, seriesUrl, seriesById, ctaBand } from './components.mjs';
import { postCard } from './blog.mjs';

const HERO = 'gal-series-aluminium-worm-gearbox-blue';
const HERO_SIZES = '(min-width: 1024px) min(33vw, 450px), 66vw';

export function home() {
  const gal = seriesById.gal;

  const hero = `<section class="hero hero--home t-dark" aria-labelledby="hero-title">
  <div class="wrap hero__in">
    <div class="hero__copy">
      ${eyebrow('Gishnu Gears Private Limited · Est. 1995')}
      <h1 class="h-display" id="hero-title">Industrial gearbox manufacturer <span class="h-accent">in Coimbatore, India</span></h1>
      <p class="lede">We design and manufacture worm, helical, bevel and custom-built gearboxes for aquaculture, material handling, food processing and automation, from catalogue series to drives engineered around a single drawing.</p>
      <div class="hero__actions">
        ${btn({ href: '/contact/', label: 'Request a quote' })}
        ${btn({ href: '/products/', label: 'Explore products', variant: 'ghost' })}
      </div>
    </div>
    <div class="hero__visual">
      ${dial('hero__dial')}
      <div class="hero__render" data-tilt>${picture({ name: HERO, alt: gal.imageAlt, sizes: HERO_SIZES, priority: true })}</div>
      <a class="hero__tag" href="${seriesUrl(gal)}">
        <span class="mono">${gal.name}</span>
        <span>${esc(gal.type)}</span>
        ${icon('arrow-up-right', 18)}
      </a>
    </div>
  </div>
  <div class="wrap">
    <dl class="facts">
      <div><dt>Manufacturing gears since</dt><dd>${site.founded}</dd></div>
      <div><dt>Certified quality system</dt><dd>ISO 9001:2015</dd></div>
      <div><dt>Facility across three units</dt><dd>50,000 sq. ft</dd></div>
      <div><dt>Gearbox and gear series</dt><dd>${series.length} series</dd></div>
    </dl>
  </div>
</section>`;

  // Interactive range: every series is a real link, enhanced into tabs by showcase.js.
  const showcase = `<section class="sec t-light" id="range" aria-labelledby="range-title">
  <div class="wrap">
    ${sectionHead({
      kicker: 'The range',
      title: '<span id="range-title">Explore our gearbox series</span>',
      text: 'Each series is built for a particular job. Choose one to see what it does, its ratios and its motor ratings.',
      link: arrowLink('/all-product.html', 'Compare all models'),
    })}
    <div class="showcase" data-showcase>
      <div class="showcase__tabs" role="tablist" aria-label="Gearbox series" aria-orientation="vertical">
        ${series
          .map(
            (s, i) => `<button class="showcase__tab" type="button" role="tab" id="tab-${s.id}" aria-controls="panel-${s.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}"><span class="mono">${s.letter}</span><span class="showcase__tabname">${esc(s.type)}</span></button>`,
          )
          .join('')}
      </div>
      <div class="showcase__panels">
        ${series
          .map(
            (s, i) => `<div class="showcase__panel t-dark" role="tabpanel" id="panel-${s.id}" aria-labelledby="tab-${s.id}"${i === 0 ? '' : ' data-inactive'}>
          <span class="showcase__letter" aria-hidden="true">${s.letter}</span>
          <div class="showcase__stage">${dial()}<div class="showcase__img" data-tilt>${picture({ name: s.image, alt: s.imageAlt, sizes: '(min-width: 1024px) 340px, 54vw', max: 960 })}</div></div>
          <div class="showcase__info">
            <p class="mono showcase__series">${esc(s.name)}</p>
            <h3 class="h-card">${esc(s.type)}</h3>
            <p>${esc(s.lede)}</p>
            ${plate(s.plate)}
            ${btn({ href: seriesUrl(s), label: `View ${s.name}`, variant: 'light' })}
          </div>
        </div>`,
          )
          .join('')}
      </div>
    </div>

    <div class="types" data-reveal>
      <h3 class="types__h">Find a gearbox by type</h3>
      <ul class="types__list">
        ${groups
          .map((g) => {
            const list = series.filter((s) => s.group === g.id);
            return `<li><span class="types__name">${esc(g.label)}</span><span class="types__links">${list.map((s) => `<a href="${seriesUrl(s)}">${esc(s.name)}</a>`).join('')}</span></li>`;
          })
          .join('')}
      </ul>
    </div>
  </div>
</section>`;

  const steps = [
    ['Design and development', 'An in-house design team works from your duty, speed and mounting requirements, including turning a standard gearbox into a new design.'],
    ['Gear cutting', 'CNC gear hobbing on a Nimble NOAH 400H, gear shaping on a Nidec ST25 and horizontal broaching.'],
    ['Gear grinding', 'Gear grinding on a Höfler Helix 400, with a dedicated worm grinding machine for worm shafts.'],
    ['Machining', 'CNC turning and thread milling for shafts, housings and components.'],
    ['Inspection', 'A Klingelnberg P40 gear measuring centre, an Accurate Spectra CMM, and Brinell and Rockwell hardness testing.'],
    ['Assembly and delivery', 'Quality checking and delivery departments sit within the same facility as manufacturing.'],
  ];

  const company = `<section class="sec t-dark" aria-labelledby="company-title">
  <div class="wrap split">
    <div class="split__lead" data-reveal>
      ${eyebrow('Company')}
      <h2 class="h-sec" id="company-title">Three decades of gear manufacturing in Coimbatore</h2>
      <p class="lede">Founded in ${site.founded} as M.M Gears (P) Ltd and known as Gishnu Gears since ${site.renamed}, we are an ISO 9001:2015 certified gearbox manufacturing company.</p>
      <p>We make bevel gears, helical gearboxes, worm gearboxes and other specialised gear solutions for industrial, automotive and textile customers across India and in international markets. Coimbatore’s airports and ports put those markets within easy reach.</p>
      ${arrowLink('/about-us/', 'About Gishnu Gears')}
    </div>
    <div class="split__body">
      <h3 class="eyebrow">From drawing to dispatch, under one roof</h3>
      <ol class="steps">
        ${steps.map(([t, d]) => `<li data-reveal><h4>${esc(t)}</h4><p>${esc(d)}</p></li>`).join('')}
      </ol>
    </div>
  </div>
</section>`;

  const keyMachines = machinery.flatMap((g) => g.items).filter((m) => /Höfler|Klingelnberg|NOAH|Nidec|Spectra/.test(m.name));
  const infra = `<section class="sec sec--flush t-dark" aria-labelledby="infra-title">
  <div class="wrap">
    <div class="film-block">
      <div class="film" data-film data-reveal>
        <video class="film__video" playsinline muted loop preload="none" poster="/assets/video/gishnu-gears-brand-film-landscape-poster.webp" width="1920" height="1080" data-portrait="/assets/video/gishnu-gears-brand-film-portrait.mp4" aria-label="Gishnu Gears brand film: machining and gear grinding in the factory">
          <source src="/assets/video/gishnu-gears-brand-film-landscape.mp4" type="video/mp4">
        </video>
        <button class="film__btn" type="button" data-film-toggle aria-label="Play the Gishnu Gears film" aria-pressed="false"><span class="film__play">${icon('play', 22)}</span><span class="film__pause">${icon('pause', 22)}</span></button>
      </div>
      <div class="film-block__copy" data-reveal>
        ${eyebrow('Infrastructure')}
        <h2 class="h-sec" id="infra-title">A 50,000 sq. ft manufacturing facility</h2>
        <p>Our integrated facility spans three units, organised into design and development, manufacturing, quality checking and delivery. It is equipped to produce high-precision, durable gears and gearboxes in-house.</p>
        <ul class="chips" aria-label="Key machines">
          ${keyMachines.map((m) => `<li><span class="mono">${esc(m.name)}</span><span>${esc(m.note)}</span></li>`).join('')}
        </ul>
        ${arrowLink('/infrastructure/', 'See our infrastructure')}
      </div>
    </div>
  </div>
</section>`;

  const industriesSec = `<section class="sec t-light" aria-labelledby="ind-title">
  <div class="wrap split split--rev">
    <div class="split__lead" data-reveal>
      ${eyebrow('Industries and applications')}
      <h2 class="h-sec" id="ind-title">Where our gearboxes are at work</h2>
      <p>From shrimp ponds to crushers, each series was developed for a set of applications. This is where you will find them.</p>
      <figure class="frame">${picture({ kind: 'photos', name: 'helical-gear-teeth-closeup', alt: 'Close-up of precision-cut helical gear teeth', sizes: '(min-width: 1024px) 34vw, 92vw', max: 1600 })}</figure>
    </div>
    <div class="split__body">
      <ul class="ind">
        ${industries
          .map(
            (it) => `<li data-reveal><div><h3>${esc(it.name)}</h3><p>${esc(it.use)}</p></div><p class="ind__series">${it.series.map((id) => `<a href="${seriesUrl(seriesById[id])}">${esc(seriesById[id].name)}</a>`).join('')}</p></li>`,
          )
          .join('')}
      </ul>
    </div>
  </div>
</section>`;

  const z = seriesById.z;
  const m = seriesById.m;
  const projects = `<section class="sec t-dark sec--plum" aria-labelledby="proj-title">
  <div class="wrap">
    ${sectionHead({
      kicker: 'Projects',
      title: '<span id="proj-title">Gearboxes engineered to order</span>',
      text: 'When no catalogue unit fits, our engineers design one that does. These are the kinds of application we build custom gearboxes for.',
      link: arrowLink('/projects/', 'View projects'),
    })}
    <div class="proj">
      <div class="proj__visual" data-reveal>
        <div class="proj__img" data-tilt>${picture({ name: m.image, alt: m.imageAlt, sizes: '(min-width: 1024px) 40vw, 84vw', max: 1440 })}</div>
      </div>
      <ul class="proj__list">
        ${zProjects.map((p) => `<li data-reveal><p class="mono">${esc(z.name)}</p><h3 class="h-card">${esc(p.name)}</h3><p>${esc(p.text)}</p></li>`).join('')}
        <li data-reveal><p class="mono">${esc(m.name)}</p><h3 class="h-card">Custom-built and bevel helical gearboxes</h3><p>Tailor-made industrial gearboxes and drives, including standard products re-engineered into new designs.</p></li>
      </ul>
    </div>
  </div>
</section>`;

  const quality = `<section class="sec t-light" aria-labelledby="qa-title">
  <div class="wrap">
    ${sectionHead({ kicker: 'Quality assurance', title: '<span id="qa-title">Precision that is measured in-house</span>' })}
    <div class="qa">
      <article data-reveal>
        <p class="qa__k mono">ISO 9001:2015</p>
        <h3 class="h-card">Certified quality management</h3>
        <p>We are an ISO 9001:2015 certified company. Every gearbox we manufacture is made to meet global quality standards.</p>
      </article>
      <article data-reveal>
        <p class="qa__k mono">Klingelnberg P40 · CMM</p>
        <h3 class="h-card">Gear and dimensional measurement</h3>
        <p>Gear geometry is checked on a Klingelnberg P40 measuring centre and component dimensions on an Accurate Spectra coordinate measuring machine.</p>
      </article>
      <article data-reveal>
        <p class="qa__k mono">Brinell · Rockwell</p>
        <h3 class="h-card">Hardness testing</h3>
        <p>Brinell and Rockwell hardness testers, with a full set of gauges and instruments, support checks through production.</p>
      </article>
    </div>
  </div>
</section>`;

  const blog = `<section class="sec sec--tight-top t-light" aria-labelledby="blog-title">
  <div class="wrap">
    ${sectionHead({ kicker: 'Insights', title: '<span id="blog-title">From the engineering desk</span>', link: arrowLink('/blog/', 'All articles') })}
    <div class="posts">
      ${posts.slice(0, 3).map((p) => postCard(p)).join('')}
    </div>
  </div>
</section>`;

  const body = [hero, showcase, company, infra, industriesSec, projects, quality, blog, ctaBand({ secondary: { href: '/products/', label: 'Explore products' } })].join('\n');

  return {
    url: '/',
    file: 'index.html',
    title: 'Gearbox Manufacturer in Coimbatore, India | Gishnu Gears',
    description:
      'Gishnu Gears is an ISO 9001:2015 certified industrial gearbox manufacturer in Coimbatore. Worm, helical, bevel, aerator and custom gearboxes since 1995.',
    h1: 'Industrial gearbox manufacturer in Coimbatore, India',
    keyword: 'gearbox manufacturer in Coimbatore',
    secondary: ['industrial gearbox manufacturer', 'gearbox manufacturers in India', 'industrial gearbox supplier in Tamil Nadu'],
    intent: 'Commercial',
    og: { kicker: 'Gearbox manufacturer · Coimbatore, India', title: 'Industrial gearboxes, engineered and made in Coimbatore', image: HERO },
    bodyClass: 'page-home',
    preload: preloadImage({ name: HERO, sizes: HERO_SIZES }),
    priority: '1.0',
    body,
  };
}
