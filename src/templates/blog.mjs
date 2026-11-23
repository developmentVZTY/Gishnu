import { site } from '../data/site.mjs';
import { posts } from '../data/posts.mjs';
import { esc, icon, picture, preloadImage, breadcrumbs, eyebrow, arrowLink, ctaBand, abs, dial } from './components.mjs';
import { ORG_ID } from './layout.mjs';

export const postUrl = (p) => `/blog/${p.slug}.html`;
const fmt = (iso) => new Date(iso + 'T00:00:00Z').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const words = (html) => html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
export const readingTime = (p) => Math.max(2, Math.round(words(p.body) / 200));

export function postCard(p, { level = 3, featured = false } = {}) {
  return `<article class="post-card${featured ? ' post-card--featured' : ''}" data-reveal>
    <a class="post-card__link" href="${postUrl(p)}">
      <div class="post-card__media t-dark">${dial()}<div class="post-card__img">${picture({ name: p.image, alt: p.imageAlt, sizes: featured ? '(min-width: 1024px) 420px, 70vw' : '(min-width: 1024px) 260px, 60vw', max: 960 })}</div></div>
      <div class="post-card__body">
        <p class="post-card__meta"><span>${esc(p.category)}</span><span>${readingTime(p)} min read</span></p>
        <h${level} class="post-card__title">${esc(p.title)}</h${level}>
        <p class="post-card__text">${esc(p.excerpt)}</p>
        <span class="post-card__more">Read article ${icon('arrow', 18)}</span>
      </div>
    </a>
  </article>`;
}

export function blogIndex() {
  const url = '/blog/';
  const crumbs = [{ name: 'Home', url: '/' }, { name: 'Blog', url }];
  const [first, ...rest] = posts;
  const body = `<section class="hero hero--page t-dark" aria-labelledby="page-title">
  <div class="wrap">
    ${breadcrumbs(crumbs)}
    <div class="hero__head">
      ${eyebrow('Insights')}
      <h1 class="h-display h-display--sm" id="page-title">Gearbox engineering insights</h1>
      <p class="lede">Practical notes from our engineering team on selecting, running and maintaining industrial gearboxes.</p>
    </div>
  </div>
</section>
<section class="sec sec--tight t-light" aria-label="Articles">
  <div class="wrap">
    ${postCard(first, { level: 2, featured: true })}
    <div class="posts">
      ${rest.map((p) => postCard(p, { level: 2 })).join('')}
    </div>
  </div>
</section>
${ctaBand({ title: 'Have a question our articles don’t answer?', text: 'Send us the application and what you are trying to achieve. An engineer will reply.', primary: { href: '/contact/', label: 'Ask our engineers' } })}`;

  return {
    url,
    file: 'blog/index.html',
    title: 'Gearbox Engineering Blog & Industry Insights | Gishnu Gears',
    description: 'Gearbox selection guides, maintenance advice and manufacturing insights from the engineering team at Gishnu Gears, Coimbatore.',
    h1: 'Gearbox engineering insights',
    keyword: 'gearbox engineering blog',
    secondary: ['gearbox selection guide', 'worm gearbox maintenance', 'industrial gearbox insights'],
    intent: 'Informational',
    crumbs,
    pageType: 'CollectionPage',
    og: { kicker: 'Blog', title: 'Gearbox engineering insights', image: 'g-series-gu-worm-gearbox' },
    schema: [
      {
        '@type': 'Blog',
        '@id': `${abs(url)}#blog`,
        name: 'Gishnu Gears blog',
        url: abs(url),
        publisher: { '@id': ORG_ID },
        blogPost: posts.map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: abs(postUrl(p)), datePublished: p.published, dateModified: p.updated })),
      },
    ],
    priority: '0.6',
    changefreq: 'weekly',
    body,
  };
}

export function blogPost(p) {
  const url = postUrl(p);
  const crumbs = [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog/' }, { name: p.title, url }];
  const others = posts.filter((x) => x.slug !== p.slug).slice(0, 3);
  const body = `<article class="article">
  <header class="hero hero--article t-dark">
    <div class="wrap hero__in">
      <div class="hero__copy">
        ${breadcrumbs(crumbs)}
        ${eyebrow(p.category)}
        <h1 class="h-display h-display--sm">${esc(p.title)}</h1>
        <p class="lede">${esc(p.excerpt)}</p>
        <p class="article__meta"><span>By the ${esc(site.name)} engineering team</span><span>Updated <time datetime="${p.updated}">${fmt(p.updated)}</time></span><span>${readingTime(p)} min read</span></p>
      </div>
      <div class="hero__visual hero__visual--sm">${dial('hero__dial')}<div class="hero__render">${picture({ name: p.image, alt: p.imageAlt, sizes: '(min-width: 1024px) 30vw, 60vw', priority: true, max: 960 })}</div></div>
    </div>
  </header>
  <div class="sec sec--tight t-light">
    <div class="wrap article__grid">
      <div class="prose prose--lg">${p.body}</div>
      <aside class="article__aside" aria-label="Talk to us">
        <div class="aside-card">
          <p class="eyebrow">Need a recommendation?</p>
          <p>Tell us the application, motor and speed you need. Our engineers will suggest a gearbox.</p>
          ${arrowLink('/contact/', 'Request a quote')}
          <a class="aside-card__tel" href="tel:${site.phone}">${icon('phone', 18)}${site.phoneDisplay}</a>
        </div>
      </aside>
    </div>
  </div>
</article>
<section class="sec sec--tight-top t-light" aria-labelledby="more-title">
  <div class="wrap">
    <header class="sec-head"><div class="sec-head__main">${eyebrow('Keep reading')}<h2 class="h-sec" id="more-title">More from the blog</h2></div><div class="sec-head__side">${arrowLink('/blog/', 'All articles')}</div></header>
    <div class="posts">${others.map((x) => postCard(x)).join('')}</div>
  </div>
</section>
${ctaBand()}`;

  return {
    url,
    file: `blog/${p.slug}.html`,
    title: p.seo.title.length <= 47 ? `${p.seo.title} | Gishnu Gears` : p.seo.title,
    description: p.seo.description,
    h1: p.title,
    keyword: p.seo.keyword,
    secondary: [],
    intent: 'Informational',
    crumbs,
    ogType: 'article',
    ogTitle: p.title,
    article: { published: p.published, updated: p.updated, section: p.category },
    og: { kicker: p.category, title: p.title, image: p.image },
    preload: preloadImage({ name: p.image, sizes: '(min-width: 1024px) 30vw, 60vw', max: 960 }),
    schema: [
      {
        '@type': 'BlogPosting',
        '@id': `${abs(url)}#article`,
        headline: p.title,
        description: p.seo.description,
        image: abs(`/assets/og/${p.slug}.jpg`),
        datePublished: p.published,
        dateModified: p.updated,
        articleSection: p.category,
        wordCount: words(p.body),
        inLanguage: site.lang,
        author: { '@type': 'Organization', '@id': ORG_ID, name: site.name, url: `${site.url}/` },
        publisher: { '@id': ORG_ID },
        mainEntityOfPage: { '@id': `${abs(url)}#webpage` },
        isPartOf: { '@id': `${abs('/blog/')}#blog` },
      },
    ],
    modified: p.updated,
    oldPaths: p.oldPaths,
    priority: '0.5',
    body,
  };
}
