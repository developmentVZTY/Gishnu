// Small interactive pieces: brand film, product gallery, map tabs, series filter.

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---- Brand film: plays muted while on screen, with a visible play/pause control ----
for (const film of document.querySelectorAll('[data-film]')) {
  const video = film.querySelector('video');
  const button = film.querySelector('[data-film-toggle]');
  let pausedByUser = false;
  if (video.dataset.portrait && matchMedia('(max-width: 600px)').matches) video.src = video.dataset.portrait;

  const reflect = () => {
    const playing = !video.paused;
    film.classList.toggle('is-playing', playing);
    button.setAttribute('aria-pressed', String(playing));
    button.setAttribute('aria-label', playing ? 'Pause the Gishnu Gears film' : 'Play the Gishnu Gears film');
  };
  video.addEventListener('play', reflect);
  video.addEventListener('pause', reflect);
  button.addEventListener('click', () => {
    if (video.paused) { pausedByUser = false; video.play().catch(() => {}); }
    else { pausedByUser = true; video.pause(); }
  });

  const saveData = navigator.connection?.saveData;
  if (!reduceMotion && !saveData && 'IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { if (!pausedByUser) video.play().catch(() => {}); }
      else if (!video.paused) video.pause();
    }, { threshold: 0.45 }).observe(film);
  }
}

// ---- Product gallery ---------------------------------------------------------------
for (const gallery of document.querySelectorAll('[data-gallery]')) {
  const slides = [...gallery.querySelectorAll('[data-gallery-slide]')];
  const thumbs = [...gallery.querySelectorAll('[data-gallery-thumb]')];
  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      slides.forEach((s, i) => s.classList.toggle('is-on', i === index));
      thumbs.forEach((t, i) => { t.classList.toggle('is-on', i === index); t.setAttribute('aria-pressed', String(i === index)); });
    });
  });
}

// ---- Map tabs: the second map only loads when it is asked for -----------------------
for (const maps of document.querySelectorAll('[data-maps]')) {
  const tabs = [...maps.querySelectorAll('[role="tab"]')];
  const select = (index, focus) => {
    tabs.forEach((tab, i) => {
      const on = i === index;
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      tab.setAttribute('aria-selected', String(on));
      tab.classList.toggle('is-on', on);
      tab.tabIndex = on ? 0 : -1;
      panel.hidden = !on;
      const frame = panel.querySelector('iframe[data-src]');
      if (on && frame) { frame.src = frame.dataset.src; frame.removeAttribute('data-src'); }
    });
    if (focus) tabs[index].focus();
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(i));
    tab.addEventListener('keydown', (e) => {
      const next = { ArrowRight: (i + 1) % tabs.length, ArrowLeft: (i - 1 + tabs.length) % tabs.length }[e.key];
      if (next !== undefined) { e.preventDefault(); select(next, true); }
    });
  });
}

// ---- Series filter on the products page ---------------------------------------------
for (const filter of document.querySelectorAll('[data-filter]')) {
  const buttons = [...filter.querySelectorAll('[data-filter-btn]')];
  const count = filter.querySelector('[data-filter-count]');
  const cards = [...document.querySelectorAll('[data-filter-list] [data-group]')];
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.dataset.filterBtn;
      let shown = 0;
      for (const card of cards) {
        const match = group === 'all' || card.dataset.group === group;
        card.hidden = !match;
        if (match) { shown++; card.classList.add('is-in'); }
      }
      buttons.forEach((b) => { const on = b === button; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', String(on)); });
      if (count) count.textContent = group === 'all' ? `Showing all ${shown} series` : `Showing ${shown} of ${cards.length} series: ${button.textContent.trim()}`;
    });
  });
}
