import { g as r, S as d, a as c, b as s, f as l } from "./index-2df84ebf.js";
r.registerPlugin(d);
const g = ({ element: o, background: e }) => {
    r.to(e, {
      yPercent: 20,
      scrollTrigger: {
        trigger: o,
        scrub: 0,
        start: "top top",
        end: "bottom top",
      },
    });
  },
  u = ({ background: o, title: e }) => {
    const t = r.timeline();
    t.fromTo(o, { scale: 1.2 }, { scale: 1, duration: 1.5 }),
      t.fromTo(
        e,
        { yPercent: 30, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.5 },
        "<"
      );
  },
  N = ({ element: o, properties: e }) => {
    const t = o.querySelector(".js-competence-hero-background"),
      n = o.querySelector(".js-competence-hero-title");
    return u({ background: t, title: n }), g({ element: o, background: t }), {};
  },
  b = ".js-competence-hero",
  m = "CompetenceHero",
  C = () =>
    c({ componentName: m, className: b }).map((e) => {
      const t = { ...e.dataset },
        n = N({ element: e, properties: t });
      return s({ componentName: m, element: e, properties: t, methods: n }), n;
    });
r.registerPlugin(d);
const y = ({ element: o, properties: e }) => {
    const t = o.querySelector(".js-intro-competence-title");
    return (
      r.fromTo(
        t,
        { yPercent: 50 },
        {
          yPercent: 0,
          scrollTrigger: {
            trigger: t,
            scrub: 1,
            start: "top bottom",
            end: "top center",
          },
        }
      ),
      {}
    );
  },
  h = ".js-intro-competence",
  a = "IntroCompetence",
  $ = () =>
    c({ componentName: a, className: h }).map((e) => {
      const t = { ...e.dataset },
        n = y({ element: e, properties: t });
      return s({ componentName: a, element: e, properties: t, methods: n }), n;
    });
const P = ({ element: o, properties: e }) => (
    [...o.querySelectorAll(".js-competence-image")].forEach((n) => {
      r.matchMedia().add("(min-width: 768px)", () => {
        r.fromTo(
          n,
          { yPercent: 20 },
          {
            yPercent: 0,
            scrollTrigger: {
              trigger: n,
              scrub: 1,
              start: "top bottom",
              end: "top center",
            },
          }
        );
      });
    }),
    {}
  ),
  S = ".js-competence-cards",
  p = "CompetenceCards",
  T = () =>
    c({ componentName: p, className: S }).map((e) => {
      const t = { ...e.dataset },
        n = P({ element: e, properties: t });
      return s({ componentName: p, element: e, properties: t, methods: n }), n;
    });
const j = ({ element: o, properties: e }) => {
    const t = o.querySelector(".js-competence-bottom-banner-container");
    return (
      r.matchMedia().add("(min-width: 768px)", () => {
        r.fromTo(
          t,
          { yPercent: -50 },
          {
            yPercent: 0,
            scrollTrigger: {
              trigger: o,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 0,
            },
          }
        );
      }),
      {}
    );
  },
  f = ".js-competence-bottom-banner",
  i = "CompetenceBottomBanner",
  x = () =>
    c({ componentName: i, className: f }).map((e) => {
      const t = { ...e.dataset },
        n = j({ element: e, properties: t });
      return s({ componentName: i, element: e, properties: t, methods: n }), n;
    });
l();
C();
$();
T();
x();
