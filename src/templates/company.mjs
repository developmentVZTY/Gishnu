// Company templates: about, infrastructure, projects, careers, contact, privacy policy, 404.
import { site, machinery } from '../data/site.mjs';
import { series, zProjects } from '../data/catalog.mjs';
import {
  esc, icon, btn, arrowLink, picture, preloadImage, dial, plate, eyebrow, sectionHead, breadcrumbs,
  seriesCard, productCard, seriesUrl, productsOf, seriesById, ctaBand, enquiryForm, abs,
} from './components.mjs';
import { ORG_ID } from './layout.mjs';

const HOME = { name: 'Home', url: '/' };
const photoSizes = '(min-width: 1024px) 50vw, 100vw';

function photoHero({ crumbs, kicker, title, lede, photo, alt, actions = '' }) {
  return `<section class="hero hero--photo t-dark" aria-labelledby="page-title">
  <div class="hero__bg">${picture({ kind: 'photos', name: photo, alt, sizes: '100vw', priority: true })}</div>
  <div class="wrap hero__in">
    ${breadcrumbs(crumbs)}
    <div class="hero__head">
      ${eyebrow(kicker)}
      <h1 class="h-display h-display--sm" id="page-title">${title}</h1>
      <p class="lede">${lede}</p>
      ${actions ? `<div class="hero__actions">${actions}</div>` : ''}
    </div>
  </div>
</section>`;
}

// ---- /about-us/ ---------------------------------------------------------------------
export function about() {
  const url = '/about-us/';
  const crumbs = [HOME, { name: 'About us', url }];
  const photo = 'precision-gear-assembly';
  const body = `${photoHero({
    crumbs,
    kicker: 'About Gishnu Gears',
    title: 'A gearbox manufacturing company built on precision',
    lede: 'From Coimbatore, Tamil Nadu, we engineer custom-built gear solutions for industrial, automotive, textile and nuclear applications.',
    photo,
    alt: 'Precision gear assembly, representing the gear engineering work of Gishnu Gears',
  })}

<section class="sec t-light" aria-labelledby="story-title">
  <div class="wrap split">
    <div class="split__lead" data-reveal>
      ${eyebrow('Who we are')}
      <h2 class="h-sec" id="story-title">Engineering power, precision and performance</h2>
      <dl class="facts facts--stack">
        <div><dt>Founded as M.M Gears (P) Ltd</dt><dd>${site.founded}</dd></div>
        <div><dt>Became Gishnu Gears</dt><dd>${site.renamed}</dd></div>
        <div><dt>Quality management</dt><dd>ISO 9001:2015</dd></div>
      </dl>
    </div>
    <div class="split__body prose prose--lg" data-reveal>
      <p>Welcome to Gishnu Gears, a gearbox manufacturer in Coimbatore, Tamil Nadu, specialising in custom-built gear solutions for industrial, automotive, textile and nuclear applications. With decades of expertise in gear engineering, we deliver high-performance gearboxes that meet the most demanding requirements.</p>
      <p>Founded in ${site.founded} as M.M Gears (P) Ltd, we evolved into Gishnu Gears in ${site.renamed}, focusing on precision gear engineering, industrial gearbox manufacturing and custom power transmission solutions. As an ISO 9001:2015 certified company, we ensure that every gearbox we manufacture meets global quality standards.</p>
      <p>Our CNC technology and precision machining processes enable us to produce bevel gears, helical gearboxes, planetary gear systems, worm gearboxes and other specialised gear solutions with durability and efficiency built in. You can see the machines that make this possible on our <a href="/infrastructure/">infrastructure page</a>.</p>
      <p>We serve industries across India and in international markets, using Coimbatore’s strategic location for shipping through accessible airports and ports. Our commitment to innovation, quality and customer satisfaction has earned us a loyal client base in the automotive, textile and heavy engineering industries.</p>
      <p>At Gishnu Gears we do not just manufacture gearboxes. We engineer power, precision and performance to drive industries forward. Whether you need a <a href="/products/">standard industrial gearbox</a> or a <a href="/series/m-series.html">customised power transmission solution</a>, we aim to be your partner for quality-driven engineering.</p>
    </div>
  </div>
</section>

<section class="sec t-dark" aria-labelledby="timeline-title">
  <div class="wrap">
    ${sectionHead({ kicker: 'Milestones', title: '<span id="timeline-title">From M.M Gears to a global supplier</span>' })}
    <ol class="timeline">
      <li data-reveal><p class="timeline__year mono">${site.founded}</p><h3 class="h-card">M.M Gears (P) Ltd is founded</h3><p>Our gear manufacturing story begins.</p></li>
      <li data-reveal><p class="timeline__year mono">${site.renamed}</p><h3 class="h-card">Gishnu Gears is established</h3><p>The business evolves into Gishnu Gears, focused on precision gear engineering, industrial gearboxes and custom power transmission.</p></li>
      <li data-reveal><p class="timeline__year mono">2022</p><h3 class="h-card">Customisation for international markets</h3><p>The <a href="/series/z-series.html">Z-Series</a> of custom gearboxes and the <a href="/series/o-series.html">O-Series</a> of gear spares are launched for customers abroad.</p></li>
      <li data-reveal><p class="timeline__year mono">Today</p><h3 class="h-card">Nine series, one facility</h3><p>Standard and custom gearboxes are designed, cut, ground and inspected across a 50,000 sq. ft facility.</p></li>
    </ol>
  </div>
</section>

<section class="sec t-light" aria-labelledby="growth-title">
  <div class="wrap split split--rev">
    <div class="split__lead" data-reveal>
      ${eyebrow('Our global growth story')}
      <h2 class="h-sec" id="growth-title">Building relationships beyond India</h2>
      <figure class="frame">${picture({ kind: 'photos', name: 'transmission-gear-shafts', alt: 'Gear shafts and transmission components', sizes: '(min-width: 1024px) 34vw, 92vw', max: 1600 })}</figure>
    </div>
    <div class="split__body prose prose--lg" data-reveal>
      <p>At Gishnu Gears we have always believed that precision, performance and trust are the cornerstones of long-term success. These principles helped us build a strong reputation in the Indian market, and they now power our expansion on the global stage.</p>
      <h3>Recognising a changing world</h3>
      <p>Our international journey began with a clear recognition of change. Global manufacturers were looking beyond traditional supply hubs for partners who could offer reliability, agility and engineering excellence. As supply chains diversified, especially under the “China Plus One” strategy, we positioned ourselves as a credible, high-performance alternative in gear manufacturing.</p>
      <h3>Where demand was rising</h3>
      <p>We identified Europe, Southeast Asia and North America as regions where demand for customised, high-quality gear solutions was growing. Mid-sized manufacturers there were actively seeking suppliers who could match their pace, meet their technical requirements and offer consistent value. That is where we stepped in, launching customisation in 2022 with the Z-Series for gearboxes and the O-Series for gear spares.</p>
      <h3>Solutions, not just components</h3>
      <p>With deep expertise in customised gearboxes for industrial automation, mobility and defence, we aligned our strengths with global market needs. Our focus is on delivering solutions that are precision-engineered, performance-tested and built to last, designed to meet evolving international standards while remaining flexible to each customer’s application.</p>
      <h3>Ready for what comes next</h3>
      <p>Demand for intelligent, energy-efficient and durable gear systems continues to grow, from automated machinery to electric vehicles and smart manufacturing. We are building a robust foundation through a diversified customer portfolio, digital infrastructure and flexible, scalable operations, so that we remain agile and ready for opportunities across international markets.</p>
      <p>To our partners, collaborators and future investors: we invite you to be part of this journey. Together, we can power the world, one gear at a time.</p>
    </div>
  </div>
</section>

<section class="sec sec--tight-top t-light" aria-labelledby="explore-title">
  <div class="wrap">
    <h2 class="visually-hidden" id="explore-title">Explore Gishnu Gears</h2>
    <ul class="doors">
      <li data-reveal><a href="/infrastructure/"><p class="eyebrow">Infrastructure</p><p class="h-card">50,000 sq. ft across three units</p>${icon('arrow', 22)}</a></li>
      <li data-reveal><a href="/products/"><p class="eyebrow">Products</p><p class="h-card">Nine gearbox and gear series</p>${icon('arrow', 22)}</a></li>
      <li data-reveal><a href="/careers/"><p class="eyebrow">Careers</p><p class="h-card">Work with our engineering team</p>${icon('arrow', 22)}</a></li>
    </ul>
  </div>
</section>
${ctaBand({ title: 'Experience the Gishnu Gears advantage', text: 'Gear systems built to specification, tailored solutions and competitive pricing. Tell us what you need.' })}`;

  return {
    url,
    file: 'about-us/index.html',
    title: 'About Gishnu Gears | Gearbox Manufacturing Company in India',
    description: 'Founded in 1995 as M.M Gears and known as Gishnu Gears since 2011, we are an ISO 9001:2015 certified gearbox manufacturing company in Coimbatore, India.',
    h1: 'A gearbox manufacturing company built on precision',
    keyword: 'gearbox manufacturing company in India',
    secondary: ['Gishnu Gears', 'M.M Gears', 'ISO 9001:2015 gearbox manufacturer', 'gear manufacturer Coimbatore'],
    intent: 'Informational / brand',
    crumbs,
    pageType: 'AboutPage',
    og: { kicker: 'About us', title: 'A gearbox manufacturing company built on precision', image: 'o-series-spiral-bevel-gear' },
    preload: preloadImage({ kind: 'photos', name: photo, sizes: '100vw' }),
    priority: '0.7',
    body,
  };
}

// ---- /infrastructure/ ------------------------------------------------------------------
export function infrastructure() {
  const url = '/infrastructure/';
  const crumbs = [HOME, { name: 'Infrastructure', url }];
  const photo = 'bearings-and-drive-components';
  const depts = [
    ['Design and development', 'An in-house design team turns application requirements into manufacturable gearbox designs.'],
    ['Manufacturing', 'Gear cutting, grinding and machining on state-of-the-art, highly configured machines.'],
    ['Quality checking', 'Gear measurement, dimensional inspection and hardness testing before assembly and dispatch.'],
    ['Delivery', 'A dedicated department that prepares and ships orders to customers in India and abroad.'],
  ];
  const body = `${photoHero({
    crumbs,
    kicker: 'Infrastructure',
    title: 'Industrial gear manufacturing facility in Coimbatore',
    lede: 'A 50,000 sq. ft integrated facility across three units, equipped with the machines to design, cut, grind and inspect gears in-house.',
    photo,
    alt: 'Bearings and drive components used in gearbox manufacturing',
  })}

<section class="sec sec--tight t-light" aria-labelledby="facility-title">
  <div class="wrap split">
    <div class="split__lead" data-reveal>
      ${eyebrow('The facility')}
      <h2 class="h-sec" id="facility-title">Built for high-precision, durable products</h2>
      <dl class="facts facts--stack">
        <div><dt>Total area</dt><dd>50,000 sq. ft</dd></div>
        <div><dt>Manufacturing units</dt><dd>3 units</dd></div>
        <div><dt>Design, manufacturing, quality and delivery</dt><dd>4 departments</dd></div>
      </dl>
    </div>
    <div class="split__body prose prose--lg" data-reveal>
      <p>Our infrastructural facility is spread across an area of 50,000 sq. ft over three different units. We are equipped with state-of-the-art machinery and highly configured machines that are ideal for manufacturing high-precision, durable and quality products.</p>
      <p>The integrated manufacturing facility is divided into units that comprise design and development, manufacturing, quality checking and delivery departments. With a highly skilled technical team and an in-house design team, we are able to meet the growing demands of our clients.</p>
      <p>Our technocrats stay close to the changing demands of the industry and keep their eyes and ears open to new processes, so that the way we manufacture keeps improving.</p>
    </div>
  </div>
</section>

<section class="sec t-dark" aria-labelledby="machines-title">
  <div class="wrap">
    ${sectionHead({ kicker: 'Machinery', title: '<span id="machines-title">Machines and inspection equipment</span>', text: 'The equipment on our shop floor, grouped by the job it does.' })}
    <div class="machines">
      ${machinery
        .map(
          (g) => `<section class="machines__group" data-reveal aria-label="${esc(g.group)}">
        <h3 class="eyebrow">${esc(g.group)}</h3>
        <ul>${g.items.map((m) => `<li><span class="mono">${esc(m.name)}</span><span>${esc(m.note)}</span></li>`).join('')}</ul>
      </section>`,
        )
        .join('')}
    </div>
  </div>
</section>

<section class="sec sec--flush t-dark" aria-labelledby="film-title">
  <div class="wrap">
    <div class="film-block film-block--center">
      <div class="film-block__copy" data-reveal>
        ${eyebrow('On the shop floor')}
        <h2 class="h-sec" id="film-title">See the work up close</h2>
        <p>A short film from our works: turning, grinding and finishing the components that go into a Gishnu gearbox.</p>
      </div>
      <div class="film" data-film data-reveal>
        <video class="film__video" playsinline muted loop preload="none" poster="/assets/video/gishnu-gears-brand-film-landscape-poster.webp" width="1920" height="1080" data-portrait="/assets/video/gishnu-gears-brand-film-portrait.mp4" aria-label="Gishnu Gears brand film: machining and gear grinding in the factory">
          <source src="/assets/video/gishnu-gears-brand-film-landscape.mp4" type="video/mp4">
        </video>
        <button class="film__btn" type="button" data-film-toggle aria-label="Play the Gishnu Gears film" aria-pressed="false"><span class="film__play">${icon('play', 22)}</span><span class="film__pause">${icon('pause', 22)}</span></button>
      </div>
    </div>
  </div>
</section>

<section class="sec t-light" aria-labelledby="dept-title">
  <div class="wrap">
    ${sectionHead({ kicker: 'How the facility is organised', title: '<span id="dept-title">Four departments, one flow</span>' })}
    <ol class="steps steps--row">
      ${depts.map(([t, d]) => `<li data-reveal><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`).join('')}
    </ol>
    <p class="note" data-reveal><span class="mono">ISO 9001:2015</span> Gishnu Gears is an ISO 9001:2015 certified company.</p>
  </div>
</section>
${ctaBand({ title: 'Put our facility to work on your gearbox', text: 'Send us a drawing or a specification. We will tell you how we would make it.', secondary: { href: '/projects/', label: 'See custom projects' } })}`;

  return {
    url,
    file: 'infrastructure/index.html',
    title: 'Industrial Gear Manufacturing in Coimbatore | Gishnu Gears',
    description: 'Inside our 50,000 sq. ft gear manufacturing facility in Coimbatore: CNC gear hobbing, gear grinding, worm grinding, Klingelnberg P40 and CMM inspection.',
    h1: 'Industrial gear manufacturing facility in Coimbatore',
    keyword: 'industrial gear manufacturing',
    secondary: ['gear manufacturing facility in Coimbatore', 'CNC gear hobbing', 'gear grinding', 'gear inspection'],
    intent: 'Informational / commercial',
    crumbs,
    og: { kicker: 'Infrastructure', title: '50,000 sq. ft of gear manufacturing in Coimbatore', image: 'o-series-bevel-gear-set' },
    preload: preloadImage({ kind: 'photos', name: photo, sizes: '100vw' }),
    schema: [
      {
        '@type': 'VideoObject',
        '@id': `${abs(url)}#film`,
        name: 'Gishnu Gears brand film',
        description: 'A short film from the Gishnu Gears works in Coimbatore showing turning, grinding and finishing of gearbox components.',
        thumbnailUrl: abs('/assets/video/gishnu-gears-brand-film-landscape-poster.webp'),
        contentUrl: abs('/assets/video/gishnu-gears-brand-film-landscape.mp4'),
        uploadDate: '2025-05-26T00:00:00+05:30',
        duration: 'PT14S',
        publisher: { '@id': ORG_ID },
      },
    ],
    oldPaths: ['/Infrastructure/', '/Infrastructure', '/Infrastructure/index.html', '/Infrastructure222/', '/Infrastructure222', '/Infrastructure222/index.html', '/Infrastructure222/index (1).html', '/Infrastructure222/index%20(1).html', '/infrastructure/index.html'],
    priority: '0.7',
    body,
  };
}

// ---- /projects/ -------------------------------------------------------------------------
export function projects() {
  const url = '/projects/';
  const crumbs = [HOME, { name: 'Projects', url }];
  const m = seriesById.m;
  const z = seriesById.z;
  const flow = [
    ['Specification', 'We secure the complete specification for the application from you: duty, speeds, loads, mounting and environment.'],
    ['Design', 'Our qualified engineers design the gearbox, often by customising an existing standard product into a new design.'],
    ['Manufacture', 'Gears are cut, ground and machined in our own facility, using our own production technology.'],
    ['Inspection', 'Gear geometry, dimensions and hardness are checked before the gearbox is assembled and dispatched.'],
  ];
  const sizes = '(min-width: 1024px) min(33vw, 450px), 66vw';
  const body = `<section class="hero hero--series t-dark" aria-labelledby="page-title">
  <div class="wrap hero__in">
    <div class="hero__copy">
      ${breadcrumbs(crumbs)}
      ${eyebrow('Our projects')}
      <h1 class="h-display h-display--sm" id="page-title">Custom gearbox projects, engineered to order</h1>
      <p class="lede">Some drives cannot be bought from a catalogue. Our M-Series and Z-Series programmes exist for those: gearboxes designed around one application and built in our Coimbatore facility.</p>
      <div class="hero__actions">
        ${btn({ href: '/contact/?product=Custom%20requirement', label: 'Discuss a custom gearbox' })}
        ${btn({ href: '#project-types', label: 'See project types', variant: 'ghost', ico: 'arrow-down' })}
      </div>
    </div>
    <div class="hero__visual">
      ${dial('hero__dial')}
      <div class="hero__render" data-tilt>${picture({ name: 'm-series-bevel-helical-gearbox', alt: 'Custom bevel helical gearbox engineered by Gishnu Gears', sizes, priority: true })}</div>
    </div>
  </div>
</section>

<section class="sec t-light" id="project-types" aria-labelledby="types-title">
  <div class="wrap">
    ${sectionHead({ kicker: 'Programmes', title: '<span id="types-title">Two ways we build to order</span>' })}
    <div class="duo">
      <article class="duo__card t-dark" data-reveal>
        <div class="duo__img" data-tilt>${picture({ name: m.image, alt: m.imageAlt, sizes: '(min-width: 1024px) 30vw, 70vw', max: 1440 })}</div>
        <p class="mono">${esc(m.name)}</p>
        <h3 class="h-card">Custom-built industrial gearboxes</h3>
        <p>Tailor-made gearboxes and drives for specialised machinery, prototype equipment, automotive projects and industrial automation.</p>
        ${btn({ href: seriesUrl(m), label: `View ${m.name}`, variant: 'light' })}
      </article>
      <article class="duo__card t-dark" data-reveal>
        <div class="duo__img" data-tilt>${picture({ name: z.image, alt: z.imageAlt, sizes: '(min-width: 1024px) 30vw, 70vw', max: 960 })}</div>
        <p class="mono">${esc(z.name)}</p>
        <h3 class="h-card">Non-standard gearboxes in volume</h3>
        <p>Screw-jack, cooling tower and tyre changer gearboxes, optimised for one application and produced as a volume product.</p>
        ${btn({ href: '/projects/z-series.html', label: 'View Z-Series projects', variant: 'light' })}
      </article>
    </div>
  </div>
</section>

<section class="sec t-dark" aria-labelledby="flow-title">
  <div class="wrap split">
    <div class="split__lead" data-reveal>
      ${eyebrow('How a project runs')}
      <h2 class="h-sec" id="flow-title">From your specification to a working gearbox</h2>
      <p>Our major strength is the ability to customise an existing standard product into a new design that meets industry-standard requirements. Every project follows the same four stages.</p>
    </div>
    <div class="split__body">
      <ol class="steps">${flow.map(([t, d]) => `<li data-reveal><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`).join('')}</ol>
    </div>
  </div>
</section>

<section class="sec t-light" aria-labelledby="apps-title">
  <div class="wrap">
    ${sectionHead({ kicker: 'Applications', title: '<span id="apps-title">Gearboxes we have engineered to order</span>', link: arrowLink('/projects/z-series.html', 'Z-Series project details') })}
    <ul class="points">
      ${zProjects.map((p) => `<li data-reveal><h3 class="h-card">${esc(p.name)}</h3><p>${esc(p.text)}</p></li>`).join('')}
    </ul>
  </div>
</section>
${ctaBand({ title: 'Have a drive that no catalogue covers?', text: 'Send us the specification or a drawing. Our engineers will review it and propose a design.', primary: { href: '/contact/?product=Custom%20requirement', label: 'Discuss custom gearbox requirements' } })}`;

  return {
    url,
    file: 'projects/index.html',
    title: 'Industrial Gearbox Solutions & Custom Projects | Gishnu Gears',
    description: 'Custom gearbox projects by Gishnu Gears: screw-jack, cooling tower, tyre changer and bevel helical gearboxes engineered to order in Coimbatore, India.',
    h1: 'Custom gearbox projects, engineered to order',
    keyword: 'industrial gearbox solutions',
    secondary: ['custom gearbox projects', 'gearbox design and manufacturing', 'engineered-to-order gearbox'],
    intent: 'Commercial',
    crumbs,
    pageType: 'CollectionPage',
    og: { kicker: 'Projects', title: 'Custom gearbox projects, engineered to order', image: 'm-series-bevel-helical-gearbox' },
    preload: preloadImage({ name: 'm-series-bevel-helical-gearbox', sizes }),
    priority: '0.7',
    body,
  };
}

// ---- /projects/z-series.html ---------------------------------------------------------------
export function projectZ() {
  const url = '/projects/z-series.html';
  const crumbs = [HOME, { name: 'Projects', url: '/projects/' }, { name: 'Z-Series projects', url }];
  const z = seriesById.z;
  const sizes = '(min-width: 1024px) min(33vw, 450px), 66vw';
  const body = `<section class="hero hero--series t-dark" aria-labelledby="page-title">
  <span class="hero__letter" aria-hidden="true">Z</span>
  <div class="wrap hero__in">
    <div class="hero__copy">
      ${breadcrumbs(crumbs)}
      ${eyebrow('Z-Series projects')}
      <h1 class="h-display h-display--sm" id="page-title">Screw-jack, cooling tower and tyre changer gearboxes</h1>
      <p class="lede">Three examples of the non-standard gearboxes our Z-Series team engineers for a specific application and then manufactures in volume.</p>
      <div class="hero__actions">
        ${btn({ href: '/contact/?product=' + encodeURIComponent('Z-Series – Non-standard gearboxes'), label: 'Discuss your application' })}
      </div>
    </div>
    <div class="hero__visual">
      ${dial('hero__dial')}
      <div class="hero__render" data-tilt>${picture({ name: z.image, alt: z.imageAlt, sizes, priority: true })}</div>
    </div>
  </div>
</section>

<section class="sec t-light" aria-labelledby="z-about">
  <div class="wrap overview">
    <div class="overview__main" data-reveal>
      ${eyebrow('The Z-Series approach')}
      <h2 class="h-sec" id="z-about">An optimised gearbox for one job</h2>
      <p>The Z-Series specialises in non-standard and customised gearboxes. Our engineering team strives to provide an optimised and tailored solution for the customer’s challenging requirement.</p>
      <p>The improvement and optimisation of our production processes, together with the development of our own technology, allow us to offer personalised projects for each customer, increasing their competitiveness in the global market.</p>
    </div>
    <div class="overview__side" data-reveal>
      <h3 class="eyebrow">What can be customised</h3>
      <ul class="ticks">
        ${['Shaft orientation', 'Housing material', 'Gear profile', 'Coatings'].map((x) => `<li>${icon('check', 18)}${x}</li>`).join('')}
      </ul>
      ${plate(z.plate)}
    </div>
  </div>
</section>

<section class="sec t-dark" aria-labelledby="z-types">
  <div class="wrap">
    ${sectionHead({ kicker: 'Project types', title: '<span id="z-types">Gearboxes in the Z-Series</span>' })}
    <ol class="steps steps--row steps--3">
      ${zProjects.map((p) => `<li data-reveal><h3>${esc(p.name)}</h3><p>${esc(p.text)}</p></li>`).join('')}
    </ol>
    <a class="seealso" href="${seriesUrl(z)}" data-reveal><span><strong>${esc(z.name)} product page</strong>Specifications, applications and an enquiry form for the series.</span>${icon('arrow', 22)}</a>
  </div>
</section>

<section class="sec t-light" aria-labelledby="enquire-title">
  <div class="wrap enquire">
    <div class="enquire__copy" data-reveal>
      ${eyebrow('Start a project')}
      <h2 class="h-sec" id="enquire-title">Tell us about your application</h2>
      <p>Describe the machine, the loads and speeds, the space available and the volumes you expect. We will come back with an approach.</p>
      <p class="enquire__tel"><a href="tel:${site.phone}">${icon('phone', 20)}${site.phoneDisplay}</a></p>
    </div>
    <div class="enquire__form" data-reveal>${enquiryForm({ id: 'project-enquiry', context: 'Z-Series projects page', product: 'Z-Series – Non-standard gearboxes' })}</div>
  </div>
</section>`;

  return {
    url,
    file: 'projects/z-series.html',
    title: 'Screw Jack, Cooling Tower & Tyre Changer Gearboxes | Z-Series',
    description: 'Z-Series projects from Gishnu Gears: screw-jack gearboxes, cooling tower gearboxes and tyre changer gearboxes engineered to your application.',
    h1: 'Screw-jack, cooling tower and tyre changer gearboxes',
    keyword: 'screw jack gearbox manufacturer',
    secondary: ['cooling tower gearbox manufacturer', 'tyre changer gearbox', 'non-standard gearbox'],
    intent: 'Commercial',
    crumbs,
    og: { kicker: 'Z-Series projects', title: 'Screw-jack, cooling tower and tyre changer gearboxes', image: z.image },
    preload: preloadImage({ name: z.image, sizes }),
    oldPaths: [],
    priority: '0.6',
    body,
  };
}

// ---- /careers/ ---------------------------------------------------------------------------
export function careers() {
  const url = '/careers/';
  const crumbs = [HOME, { name: 'Careers', url }];
  const areas = [
    ['Design and development', 'Gear and gearbox design within our in-house design team.'],
    ['Manufacturing', 'CNC gear hobbing, shaping, grinding, turning and assembly.'],
    ['Quality', 'Gear measurement, CMM inspection and hardness testing.'],
    ['Delivery', 'Preparing and dispatching finished orders to customers in India and abroad.'],
  ];
  const body = `<section class="hero hero--page t-dark" aria-labelledby="page-title">
  <div class="wrap">
    ${breadcrumbs(crumbs)}
    <div class="hero__head hero__head--split">
      <div>
        ${eyebrow('Careers')}
        <h1 class="h-display h-display--sm" id="page-title">Careers at Gishnu Gears</h1>
      </div>
      <p class="lede">Join us. Let’s find the solution together. We are a gear engineering company in Coimbatore where design, manufacturing and quality work side by side.</p>
    </div>
  </div>
</section>

<section class="sec sec--tight t-light" aria-labelledby="areas-title">
  <div class="wrap">
    ${sectionHead({ kicker: 'Where you could work', title: '<span id="areas-title">Four departments under one roof</span>', text: 'Our facility brings every stage of gearbox manufacture together, so people here see the whole product, not one corner of it.' })}
    <ol class="steps steps--row">
      ${areas.map(([t, d]) => `<li data-reveal><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`).join('')}
    </ol>
  </div>
</section>

<section class="sec t-dark" id="apply" aria-labelledby="apply-title">
  <div class="wrap enquire">
    <div class="enquire__copy" data-reveal>
      ${eyebrow('Apply')}
      <h2 class="h-sec" id="apply-title">Send us your profile</h2>
      <p>We do not list individual vacancies on this page. Tell us about your experience and the area you would like to work in, and our team will get in touch when there is a suitable opening.</p>
      <ul class="ticks">
        <li>${icon('check', 18)}Say which department interests you</li>
        <li>${icon('check', 18)}Summarise your qualifications and experience</li>
        <li>${icon('check', 18)}Include a link to your CV or profile if you have one</li>
      </ul>
      <p class="enquire__tel"><a href="tel:${site.phone}">${icon('phone', 20)}${site.phoneDisplay}</a></p>
    </div>
    <div class="enquire__form" data-reveal>${enquiryForm({
      id: 'careers-form',
      context: 'Careers application',
      showProduct: false,
      submit: 'Submit application',
      companyRequired: false,
      companyLabel: 'Current company or institution',
      messageLabel: 'About you',
      messageHint: 'Role or department you are interested in, qualifications, experience and a link to your CV.',
    })}</div>
  </div>
</section>

<section class="sec t-light" aria-labelledby="know-title">
  <div class="wrap">
    <h2 class="visually-hidden" id="know-title">Get to know Gishnu Gears</h2>
    <ul class="doors">
      <li data-reveal><a href="/about-us/"><p class="eyebrow">About us</p><p class="h-card">Our story since ${site.founded}</p>${icon('arrow', 22)}</a></li>
      <li data-reveal><a href="/infrastructure/"><p class="eyebrow">Infrastructure</p><p class="h-card">The machines you would work with</p>${icon('arrow', 22)}</a></li>
      <li data-reveal><a href="/products/"><p class="eyebrow">Products</p><p class="h-card">What we design and build</p>${icon('arrow', 22)}</a></li>
    </ul>
  </div>
</section>`;

  return {
    url,
    file: 'careers/index.html',
    title: 'Careers at Gishnu Gears | Gear Manufacturing Jobs in Coimbatore',
    description: 'Build a career in gear engineering at Gishnu Gears, Coimbatore. Send your profile for roles in design, manufacturing, quality and delivery.',
    h1: 'Careers at Gishnu Gears',
    keyword: 'gear manufacturing jobs in Coimbatore',
    secondary: ['careers at Gishnu Gears', 'gearbox design engineer jobs Coimbatore', 'CNC gear hobbing jobs'],
    intent: 'Navigational',
    crumbs,
    og: { kicker: 'Careers', title: 'Careers at Gishnu Gears', image: 'b-series-steering-bevel-gearbox' },
    oldPaths: ['/careers22/', '/careers22', '/careers22/index.html', '/careers/index.html'],
    priority: '0.5',
    body,
  };
}

// ---- /contact/ ---------------------------------------------------------------------------
export function contact() {
  const url = '/contact/';
  const crumbs = [HOME, { name: 'Contact us', url }];
  const a = site.address;
  const body = `<section class="hero hero--page hero--contact t-dark" aria-labelledby="page-title">
  <div class="wrap">
    ${breadcrumbs(crumbs)}
    <div class="hero__head hero__head--split">
      <div>
        ${eyebrow('Contact us')}
        <h1 class="h-display h-display--sm" id="page-title">Any questions? Let’s find the solution together.</h1>
      </div>
      <p class="lede">Request a quote, ask for a datasheet or discuss a custom gearbox with our team in Coimbatore, India.</p>
    </div>
  </div>
</section>

<section class="sec sec--tight t-light" aria-labelledby="form-title">
  <div class="wrap contact">
    <div class="contact__form" data-reveal>
      <h2 class="h-sec" id="form-title">Send an enquiry</h2>
      <p>Fields marked <span class="req" aria-hidden="true">*</span><span class="visually-hidden">with an asterisk</span> are required. We reply to enquiries by email or phone.</p>
      ${enquiryForm({ id: 'contact-form', context: 'Contact page' })}
    </div>
    <aside class="contact__side" aria-label="Contact details" data-reveal>
      <figure class="contact__photo">${picture({ kind: 'photos', name: 'gal-gearbox-studio-scene', alt: 'GAL-Series aluminium worm gearbox by Gishnu Gears', sizes: '(min-width: 1024px) 30vw, 92vw', max: 1024 })}</figure>
      <div class="contact__card">
        <h2 class="eyebrow">Call sales</h2>
        <p><a class="contact__tel" href="tel:${site.phone}">${site.phoneDisplay}</a></p>
      </div>
      <div class="contact__card">
        <h2 class="eyebrow">${esc(site.legalName)}</h2>
        <address>${a.lines.map(esc).join('<br>')}<br>${a.locality} – ${a.postalCode}<br>${a.region}, ${a.countryName}</address>
        <p class="mono">GSTIN/UIN ${site.gstin}</p>
        ${arrowLink(site.maps.gishnu.link, 'Open in Google Maps', 'target="_blank" rel="noopener"')}
      </div>
      <div class="contact__card">
        <h2 class="eyebrow">${esc(site.associate.name)}</h2>
        <address>${site.associate.lines.map(esc).join('<br>')}</address>
        <p class="mono">GSTIN ${site.associate.gstin}</p>
      </div>
      <a class="contact__qr" href="${site.social.linktree}" target="_blank" rel="noopener">
        <img src="/assets/img/brand/gishnu-gears-linktree-qr.png" width="112" height="112" alt="QR code for Gishnu Gears profiles and catalogues" loading="lazy" decoding="async">
        <span><strong>More information</strong>Scan the QR code, or tap it, for our profiles and catalogues.</span>
      </a>
    </aside>
  </div>
</section>

<section class="sec sec--tight-top t-light" aria-labelledby="map-title">
  <div class="wrap">
    ${sectionHead({ kicker: 'Find us', title: '<span id="map-title">Our location in Coimbatore</span>', text: 'We are on Avinashi Road at Neelambur, near Hotel Le Meridian.' })}
    <div class="maps" data-maps>
      <div class="maps__tabs" role="tablist" aria-label="Locations">
        <button type="button" role="tab" id="map-tab-1" aria-controls="map-panel-1" aria-selected="true" class="chip is-on">${esc(site.maps.gishnu.label)}</button>
        <button type="button" role="tab" id="map-tab-2" aria-controls="map-panel-2" aria-selected="false" tabindex="-1" class="chip">${esc(site.maps.mm.label)}</button>
      </div>
      <div class="maps__panel" role="tabpanel" id="map-panel-1" aria-labelledby="map-tab-1">
        <iframe title="Map showing ${esc(site.maps.gishnu.label)}, Neelambur, Coimbatore" src="${site.maps.gishnu.embed}" width="1200" height="480" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
      </div>
      <div class="maps__panel" role="tabpanel" id="map-panel-2" aria-labelledby="map-tab-2" hidden>
        <iframe title="Map showing ${esc(site.maps.mm.label)}, Coimbatore" data-src="${site.maps.mm.embed}" width="1200" height="480" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</section>`;

  return {
    url,
    file: 'contact/index.html',
    title: 'Contact Gishnu Gears | Gearbox Manufacturer, Coimbatore',
    description: 'Contact Gishnu Gears, gearbox manufacturer on Avinashi Road, Neelambur, Coimbatore. Call +91 99439 17774 or send an enquiry for a quote or datasheet.',
    h1: 'Any questions? Let’s find the solution together.',
    keyword: 'contact Gishnu Gears',
    secondary: ['gearbox manufacturer Coimbatore contact', 'request a gearbox quote', 'Gishnu Gears address and phone number'],
    intent: 'Transactional',
    crumbs,
    pageType: 'ContactPage',
    og: { kicker: 'Contact us', title: 'Talk to Gishnu Gears', image: 'gal-series-aluminium-worm-gearbox-blue' },
    oldPaths: ['/contact.php/', '/contact.php', '/contact.php/index.html', '/contact', '/contact/index.html', '/contact-us/', '/contact-us'],
    priority: '0.8',
    body,
  };
}

// ---- /privacy-policy/ ---------------------------------------------------------------------
export function privacy() {
  const url = '/privacy-policy/';
  const crumbs = [HOME, { name: 'Privacy policy', url }];
  const body = `<section class="hero hero--page t-dark" aria-labelledby="page-title">
  <div class="wrap">
    ${breadcrumbs(crumbs)}
    <div class="hero__head">
      ${eyebrow('Legal')}
      <h1 class="h-display h-display--sm" id="page-title">Privacy policy</h1>
      <p class="lede">How ${esc(site.legalName)} handles the information you share through this website.</p>
    </div>
  </div>
</section>
<section class="sec sec--tight t-light">
  <div class="wrap">
    <div class="prose prose--lg prose--narrow">
      <p><em>Last updated: 23 November 2026</em></p>
      <h2>Who we are</h2>
      <p>This website, www.gishnugears.com, is operated by ${esc(site.legalName)}, ${esc(site.address.street)}, ${site.address.locality} – ${site.address.postalCode}, ${site.address.region}, ${site.address.countryName}. You can reach us by phone on <a href="tel:${site.phone}">${site.phoneDisplay}</a> or through the <a href="/contact/">contact form</a>.</p>
      <h2>Information you give us</h2>
      <p>When you submit an enquiry or a careers application, we receive the details you enter: your name, company, email address, phone number, the product you are interested in and your message. Fields marked as required are needed for us to respond.</p>
      <h2>How we use it</h2>
      <p>We use this information only to respond to your enquiry, prepare quotations and datasheets, assess job applications and stay in contact about the matter you raised. We do not sell your information, and we do not pass it on to third parties without authorisation.</p>
      <h2>How form submissions are delivered</h2>
      <p>Our forms are delivered to our inbox by EmailJS, an email delivery service that processes the submission on our behalf. Your details are transmitted over an encrypted connection.</p>
      <h2>Analytics and cookies</h2>
      <p>We use Google Analytics and Google Tag Manager to understand how the website is used, such as which pages are visited and how visitors arrive. These services may set cookies or use similar technologies. For visitors in the European Economic Area, the United Kingdom and Switzerland, analytics and advertising storage is disabled by default.</p>
      <p>You can block or delete cookies in your browser settings. The website continues to work without them.</p>
      <h2>Maps and external links</h2>
      <p>The contact page embeds Google Maps, and the site links to our LinkedIn, YouTube, Facebook and Linktree pages. Those services have their own privacy policies and may collect data when you use them.</p>
      <h2>How long we keep information</h2>
      <p>We keep enquiry and application correspondence for as long as it is needed to deal with your request and to maintain our business records.</p>
      <h2>Your choices</h2>
      <p>You may ask us what information we hold about you, and ask us to correct or delete it, by contacting us using the details above.</p>
      <h2>Changes to this policy</h2>
      <p>We may update this policy from time to time. The date at the top of the page shows when it was last revised.</p>
    </div>
  </div>
</section>`;
  return {
    url,
    file: 'privacy-policy/index.html',
    title: 'Privacy Policy | Gishnu Gears',
    description: 'How Gishnu Gears Private Limited collects, uses and protects information submitted through enquiry forms on www.gishnugears.com.',
    h1: 'Privacy policy',
    keyword: 'Gishnu Gears privacy policy',
    secondary: [],
    intent: 'Navigational',
    crumbs,
    og: { kicker: 'Legal', title: 'Privacy policy', image: 'gal-series-aluminium-worm-gearbox-black' },
    priority: '0.2',
    changefreq: 'yearly',
    body,
  };
}

// ---- /404.html -----------------------------------------------------------------------------
export function notFound() {
  const body = `<section class="hero hero--404 t-dark" aria-labelledby="page-title">
  <div class="wrap hero__in">
    <div class="hero__copy">
      <p class="eyebrow">Error 404</p>
      <h1 class="h-display h-display--sm" id="page-title">This page has slipped out of mesh</h1>
      <p class="lede">The page you are looking for has moved or no longer exists. These links will get you back on track.</p>
      <div class="hero__actions">
        ${btn({ href: '/', label: 'Back to home' })}
        ${btn({ href: '/products/', label: 'Browse products', variant: 'ghost' })}
      </div>
      <ul class="nf-links">
        <li><a href="/all-product.html">All products</a></li>
        <li><a href="/aerator-gearboxes.html">Aerator gearboxes</a></li>
        <li><a href="/infrastructure/">Infrastructure</a></li>
        <li><a href="/blog/">Blog</a></li>
        <li><a href="/contact/">Contact us</a></li>
      </ul>
    </div>
    <div class="hero__visual">
      ${dial('hero__dial')}
      <div class="hero__render">${picture({ name: 'o-series-spiral-bevel-gear', alt: 'Spiral bevel gear', sizes: '(min-width: 1024px) 30vw, 60vw', max: 960 })}</div>
    </div>
  </div>
</section>`;
  return {
    url: '/404.html',
    file: '404.html',
    title: 'Page Not Found | Gishnu Gears',
    description: 'The page you are looking for could not be found. Browse Gishnu Gears products or contact our team.',
    h1: 'This page has slipped out of mesh',
    noindex: true,
    og: { kicker: 'Error 404', title: 'Page not found', image: 'o-series-spiral-bevel-gear' },
    ogImageKey: 'home',
    body,
  };
}
