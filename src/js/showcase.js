// Homepage series showcase: an ARIA tabs widget.
// Without JavaScript every panel is simply shown, one after another.

const showcase = document.querySelector('[data-showcase]');
if (showcase) {
  const list = showcase.querySelector('[role="tablist"]');
  const tabs = [...showcase.querySelectorAll('[role="tab"]')];
  const panels = tabs.map((t) => document.getElementById(t.getAttribute('aria-controls')));
  const wide = matchMedia('(min-width: 1024px)');
  const orient = () => list.setAttribute('aria-orientation', wide.matches ? 'vertical' : 'horizontal');
  wide.addEventListener('change', orient);
  orient();

  const select = (index, focus = false) => {
    tabs.forEach((tab, i) => {
      const on = i === index;
      tab.setAttribute('aria-selected', String(on));
      tab.tabIndex = on ? 0 : -1;
      panels[i].toggleAttribute('data-inactive', !on);
    });
    if (focus) tabs[index].focus({ preventScroll: true });
    // Keep the chosen chip in view in the horizontal (mobile) strip.
    if (!wide.matches) list.scrollTo({ left: tabs[index].offsetLeft - list.offsetLeft - 20, behavior: 'smooth' });
  };

  tabs.forEach((tab, i) => tab.addEventListener('click', () => select(i)));
  list.addEventListener('keydown', (e) => {
    const i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    const last = tabs.length - 1;
    const next = { ArrowDown: i === last ? 0 : i + 1, ArrowRight: i === last ? 0 : i + 1, ArrowUp: i === 0 ? last : i - 1, ArrowLeft: i === 0 ? last : i - 1, Home: 0, End: last }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    select(next, true);
  });
}
