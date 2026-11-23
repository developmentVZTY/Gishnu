// Core behaviour loaded on every page. Feature code is split into separate
// modules that are only fetched on the pages that use them (see bottom).

const root = document.documentElement;
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---- Header: hairline + translucency once the page has scrolled ----------------
const header = $('[data-header]');
if (header) {
  let stuck = false;
  const update = () => {
    const next = window.scrollY > 8;
    if (next !== stuck) { stuck = next; header.classList.toggle('is-stuck', next); }
  };
  addEventListener('scroll', update, { passive: true });
  update();
}

// ---- Mobile menu: native <dialog> gives focus trapping, Esc and inert background --
const menu = $('#menu');
const opener = $('[data-menu-open]');
if (menu && opener && typeof menu.showModal === 'function') {
  opener.addEventListener('click', () => {
    menu.showModal();
    root.style.overflow = 'hidden';
    opener.setAttribute('aria-expanded', 'true');
  });
  $('[data-menu-close]', menu)?.addEventListener('click', () => menu.close());
  menu.addEventListener('close', () => {
    root.style.overflow = '';
    opener.setAttribute('aria-expanded', 'false');
  });
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) menu.close(); });
  matchMedia('(min-width: 1180px)').addEventListener('change', (e) => { if (e.matches && menu.open) menu.close(); });
}

// ---- Products mega menu ----------------------------------------------------------
const mega = $('[data-mega]');
if (mega) {
  const toggle = $('.nav__toggle', mega);
  let timer;
  const set = (open) => {
    mega.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Hide product series' : 'Show product series');
  };
  if (matchMedia('(hover: hover)').matches) {
    mega.addEventListener('pointerenter', () => { clearTimeout(timer); timer = setTimeout(() => set(true), 90); });
    mega.addEventListener('pointerleave', () => { clearTimeout(timer); timer = setTimeout(() => set(false), 180); });
  }
  toggle.addEventListener('click', () => { clearTimeout(timer); set(!mega.classList.contains('is-open')); });
  mega.addEventListener('focusout', (e) => { if (!mega.contains(e.relatedTarget)) set(false); });
  document.addEventListener('click', (e) => { if (!mega.contains(e.target)) set(false); });
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mega.classList.contains('is-open')) { set(false); toggle.focus(); }
  });
}

// ---- Scroll reveal ---------------------------------------------------------------
// Content is only hidden once this script is running, so nothing stays invisible
// if JavaScript fails. Anything already on screen is shown immediately.
const reveals = $$('[data-reveal]');
if (reveals.length && !reduceMotion && 'IntersectionObserver' in window) {
  const fold = innerHeight * 0.94;
  for (const el of reveals) if (el.getBoundingClientRect().top < fold) el.classList.add('is-in');
  root.classList.add('anim');
  const io = new IntersectionObserver(
    (entries) => {
      let i = 0;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.style.setProperty('--i', String(i++));
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -7% 0px', threshold: 0.06 },
  );
  for (const el of reveals) if (!el.classList.contains('is-in')) io.observe(el);
}

// ---- Pointer tilt on product renders ---------------------------------------------
if (!reduceMotion && matchMedia('(hover: hover) and (pointer: fine)').matches) {
  for (const el of $$('[data-tilt]')) {
    const host = el.closest('a, .hero__visual, .showcase__panel, .gallery__stage, .proj__visual, .duo__card') || el.parentElement;
    let frame = 0;
    host.addEventListener('pointermove', (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = host.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.classList.add('is-tilting');
        el.style.setProperty('--ry', `${(x * 14).toFixed(2)}deg`);
        el.style.setProperty('--rx', `${(-y * 10).toFixed(2)}deg`);
      });
    }, { passive: true });
    host.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame);
      el.classList.remove('is-tilting');
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    });
  }
}

// ---- Feature modules, fetched only where needed -----------------------------------
if ($('[data-showcase]')) import('__CHUNK_showcase__');
if ($('[data-form]')) import('__CHUNK_forms__');
if ($('[data-film], [data-gallery], [data-maps], [data-filter]')) import('__CHUNK_ui__');
