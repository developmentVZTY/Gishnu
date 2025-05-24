import {
  g as i,
  S as R,
  a as u,
  b as f,
  h as y,
  i as W,
  o as ro,
  f as co,
} from "./index-2df84ebf.js";
import { S as F, N as io } from "./navigation-5b531aaf.js";
import { o as z, a as mo } from "./vanillaFunction-ca2fb147.js";
/*!
 * ScrollToPlugin 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var m,
  D,
  g,
  a,
  h,
  U,
  J,
  H,
  Q = function () {
    return typeof window < "u";
  },
  Z = function () {
    return m || (Q() && (m = window.gsap) && m.registerPlugin && m);
  },
  oo = function (o) {
    return typeof o == "string";
  },
  k = function (o) {
    return typeof o == "function";
  },
  P = function (o, e) {
    var t = e === "x" ? "Width" : "Height",
      r = "scroll" + t,
      c = "client" + t;
    return o === g || o === a || o === h
      ? Math.max(a[r], h[r]) - (g["inner" + t] || a[c] || h[c])
      : o[r] - o["offset" + t];
  },
  $ = function (o, e) {
    var t = "scroll" + (e === "x" ? "Left" : "Top");
    return (
      o === g &&
        (o.pageXOffset != null
          ? (t = "page" + e.toUpperCase() + "Offset")
          : (o = a[t] != null ? a : h)),
      function () {
        return o[t];
      }
    );
  },
  lo = function (o, e, t, r) {
    if ((k(o) && (o = o(e, t, r)), typeof o != "object"))
      return oo(o) && o !== "max" && o.charAt(1) !== "="
        ? { x: o, y: o }
        : { y: o };
    if (o.nodeType) return { y: o, x: o };
    var c = {},
      n;
    for (n in o) c[n] = n !== "onAutoKill" && k(o[n]) ? o[n](e, t, r) : o[n];
    return c;
  },
  eo = function (o, e) {
    if (((o = U(o)[0]), !o || !o.getBoundingClientRect))
      return (
        console.warn("scrollTo target doesn't exist. Using 0") || { x: 0, y: 0 }
      );
    var t = o.getBoundingClientRect(),
      r = !e || e === g || e === h,
      c = r
        ? {
            top:
              a.clientTop - (g.pageYOffset || a.scrollTop || h.scrollTop || 0),
            left:
              a.clientLeft -
              (g.pageXOffset || a.scrollLeft || h.scrollLeft || 0),
          }
        : e.getBoundingClientRect(),
      n = { x: t.left - c.left, y: t.top - c.top };
    return !r && e && ((n.x += $(e, "x")()), (n.y += $(e, "y")())), n;
  },
  L = function (o, e, t, r, c) {
    return !isNaN(o) && typeof o != "object"
      ? parseFloat(o) - c
      : oo(o) && o.charAt(1) === "="
      ? parseFloat(o.substr(2)) * (o.charAt(0) === "-" ? -1 : 1) + r - c
      : o === "max"
      ? P(e, t) - c
      : Math.min(P(e, t), eo(o, e)[t] - c);
  },
  q = function () {
    (m = Z()),
      Q() &&
        m &&
        typeof document < "u" &&
        document.body &&
        ((g = window),
        (h = document.body),
        (a = document.documentElement),
        (U = m.utils.toArray),
        m.config({ autoKillThreshold: 7 }),
        (J = m.config()),
        (D = 1));
  },
  _ = {
    version: "3.12.1",
    name: "scrollTo",
    rawVars: 1,
    register: function (o) {
      (m = o), q();
    },
    init: function (o, e, t, r, c) {
      D || q();
      var n = this,
        p = m.getProperty(o, "scrollSnapType");
      (n.isWin = o === g),
        (n.target = o),
        (n.tween = t),
        (e = lo(e, r, o, c)),
        (n.vars = e),
        (n.autoKill = !!e.autoKill),
        (n.getX = $(o, "x")),
        (n.getY = $(o, "y")),
        (n.x = n.xPrev = n.getX()),
        (n.y = n.yPrev = n.getY()),
        H || (H = m.core.globals().ScrollTrigger),
        m.getProperty(o, "scrollBehavior") === "smooth" &&
          m.set(o, { scrollBehavior: "auto" }),
        p &&
          p !== "none" &&
          ((n.snap = 1),
          (n.snapInline = o.style.scrollSnapType),
          (o.style.scrollSnapType = "none")),
        e.x != null
          ? (n.add(n, "x", n.x, L(e.x, o, "x", n.x, e.offsetX || 0), r, c),
            n._props.push("scrollTo_x"))
          : (n.skipX = 1),
        e.y != null
          ? (n.add(n, "y", n.y, L(e.y, o, "y", n.y, e.offsetY || 0), r, c),
            n._props.push("scrollTo_y"))
          : (n.skipY = 1);
    },
    render: function (o, e) {
      for (
        var t = e._pt,
          r = e.target,
          c = e.tween,
          n = e.autoKill,
          p = e.xPrev,
          l = e.yPrev,
          S = e.isWin,
          j = e.snap,
          d = e.snapInline,
          w,
          x,
          I,
          C,
          b;
        t;

      )
        t.r(o, t.d), (t = t._next);
      (w = S || !e.skipX ? e.getX() : p),
        (x = S || !e.skipY ? e.getY() : l),
        (I = x - l),
        (C = w - p),
        (b = J.autoKillThreshold),
        e.x < 0 && (e.x = 0),
        e.y < 0 && (e.y = 0),
        n &&
          (!e.skipX && (C > b || C < -b) && w < P(r, "x") && (e.skipX = 1),
          !e.skipY && (I > b || I < -b) && x < P(r, "y") && (e.skipY = 1),
          e.skipX &&
            e.skipY &&
            (c.kill(),
            e.vars.onAutoKill &&
              e.vars.onAutoKill.apply(c, e.vars.onAutoKillParams || []))),
        S
          ? g.scrollTo(e.skipX ? w : e.x, e.skipY ? x : e.y)
          : (e.skipY || (r.scrollTop = e.y), e.skipX || (r.scrollLeft = e.x)),
        j &&
          (o === 1 || o === 0) &&
          ((x = r.scrollTop),
          (w = r.scrollLeft),
          d
            ? (r.style.scrollSnapType = d)
            : r.style.removeProperty("scroll-snap-type"),
          (r.scrollTop = x + 1),
          (r.scrollLeft = w + 1),
          (r.scrollTop = x),
          (r.scrollLeft = w)),
        (e.xPrev = e.x),
        (e.yPrev = e.y),
        H && H.update();
    },
    kill: function (o) {
      var e = o === "scrollTo";
      (e || o === "scrollTo_x") && (this.skipX = 1),
        (e || o === "scrollTo_y") && (this.skipY = 1);
    },
  };
_.max = P;
_.getOffset = eo;
_.buildGetter = $;
Z() && m.registerPlugin(_);
i.registerPlugin(R);
const po = ({ element: s, background: o }) => {
    i.to(o, {
      yPercent: 20,
      scrollTrigger: {
        trigger: s,
        scrub: 0,
        start: "top top",
        end: "bottom top",
      },
    });
  },
  ao = ({ background: s, title: o }) => {
    const e = i.timeline();
    e.fromTo(s, { scale: 1.2 }, { scale: 1, duration: 1.5 }),
      e.fromTo(
        o,
        { yPercent: 30, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.5 },
        "<"
      );
  },
  go = ({ element: s, properties: o }) => {
    const e = s.querySelector(".js-hero-background"),
      t = s.querySelector(".js-hero-title");
    return (
      ao({ background: e, title: t }), po({ element: s, background: e }), {}
    );
  },
  uo = ".js-home-hero",
  A = "HomeHero",
  fo = () =>
    u({ componentName: A, className: uo }).map((o) => {
      const e = { ...o.dataset },
        t = go({ element: o, properties: e });
      return f({ componentName: A, element: o, properties: e, methods: t }), t;
    });
i.registerPlugin(R);
const ho = ({ element: s, properties: o }) => {
    const e = s.querySelector(".js-intro-home-title"),
      t = s.querySelector(".js-intro-home-copy");
    return (
      i.fromTo(
        e,
        { yPercent: 50 },
        {
          yPercent: 0,
          scrollTrigger: {
            trigger: e,
            scrub: 1,
            start: "top bottom",
            end: "top center",
          },
        }
      ),
      i.fromTo(
        t,
        { yPercent: 150 },
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
  yo = ".js-intro-home",
  V = "IntroHome",
  wo = () =>
    u({ componentName: V, className: yo }).map((o) => {
      const e = { ...o.dataset },
        t = ho({ element: o, properties: e });
      return f({ componentName: V, element: o, properties: e, methods: t }), t;
    });
const xo = ({ element: s, properties: o }) => ({}),
  To = ".js-home-product-grid",
  v = "HomeProductGrid",
  No = () =>
    u({ componentName: v, className: To }).map((o) => {
      const e = { ...o.dataset },
        t = xo({ element: o, properties: e });
      return f({ componentName: v, element: o, properties: e, methods: t }), t;
    });
const So = ({ element: s, properties: o }) => {
    const { index: e } = o;
    if (!(e > 2))
      return (
        i.fromTo(
          s,
          { yPercent: 20 },
          {
            yPercent: 0,
            scrollTrigger: {
              trigger: s,
              scrub: 1,
              start: "top bottom",
              end: "+=200",
            },
          }
        ),
        {}
      );
  },
  bo = ".js-home-product-card",
  E = "HomeProductCard",
  Po = () =>
    u({ componentName: E, className: bo }).map((o) => {
      const e = { ...o.dataset },
        t = So({ element: o, properties: e });
      return f({ componentName: E, element: o, properties: e, methods: t }), t;
    });
const to = ({ slides: s }) => {
  const o = s.map((t) => t.querySelector(".js-home-values-card-wrapper"));
  if (y.mq("min", "md")) {
    o.forEach((t) => {
      t.style.height = "";
    });
    return;
  }
  const e = o.reduce((t, r) => {
    r.style.height = "";
    const c = z(r);
    return c > t ? c : t;
  }, 0);
  o.forEach((t) => {
    t.style.height = `${e}px`;
  });
};
let T;
const so = ({ root: s, wrapper: o, slides: e, addClass: t }) => {
    s.classList.toggle("swiper", t),
      o.classList.toggle("swiper-wrapper", t),
      [...e].forEach((r) => r.classList.toggle("swiper-slide", t));
  },
  $o = ({ root: s, wrapper: o, slides: e }) => {
    var t;
    so({ root: s, wrapper: o, slides: e, addClass: !1 }),
      T && ((t = T == null ? void 0 : T.destroy) == null || t.call(T));
  },
  _o = ({ root: s, wrapper: o, slides: e }) => {
    so({ root: s, wrapper: o, slides: e, addClass: !0 }),
      (T = new F(s, { spaceBetween: 20 }));
  },
  X = ({ root: s, wrapper: o, slides: e }) => {
    if (y.mq("max", "md")) {
      _o({ root: s, wrapper: o, slides: e }), to({ slides: e });
      return;
    }
    $o({ root: s, wrapper: o, slides: e });
  },
  Ho = ({ element: s, cards: o }) => {
    const e = s.querySelector(".js-home-values-swiper"),
      t = s.querySelector(".js-home-values-wrapper");
    X({ root: e, wrapper: t, slides: o }),
      y.useResize(() => {
        to({ slides: o }), X({ root: e, wrapper: t, slides: o });
      });
  };
i.registerPlugin(_);
const Io = ({ element: s }) => {
    if (y.mq("max", "md")) return;
    const { scrollY: o } = window,
      { top: e } = mo(s),
      t = z(s),
      r = o < e,
      c = o + window.innerHeight > e + t,
      n = W("HomeValuesImages");
    if (r) {
      n.find(
        ({ properties: l }) => (l == null ? void 0 : l.first) === "true"
      ).methods.show();
      return;
    }
    if (c) {
      n.find(
        ({ properties: l }) => (l == null ? void 0 : l.last) === "true"
      ).methods.show();
      return;
    }
    i.to(window, { duration: 1, scrollTo: s });
  },
  Co = ({ element: s }) => {
    const o = s.querySelector(".js-home-values-title");
    i.matchMedia().add("(min-width: 768px)", () => {
      i.fromTo(
        o,
        { yPercent: 50, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: o,
            scrub: 1,
            start: "top bottom",
            end: "top center",
          },
        }
      );
    });
  },
  jo = ({ element: s, properties: o }) => (
    ro({
      componentName: "HomeValuesCard",
      callBack: (e) => {
        const t = e.map(({ element: r }) => r);
        Ho({ element: s, cards: t }), Io({ element: s }), Co({ element: s });
      },
      once: !0,
    }),
    {}
  ),
  ko = ".js-home-values-grid",
  Y = "HomeValuesGrid",
  Lo = () =>
    u({ componentName: Y, className: ko }).map((o) => {
      const e = { ...o.dataset },
        t = jo({ element: o, properties: e });
      return f({ componentName: Y, element: o, properties: e, methods: t }), t;
    });
const qo = ({ element: s, id: o }) => {
    const e = { rootMargin: "-40% 0px -40% 0px", root: null },
      t = (c) => {
        c.forEach((n) => {
          if (n.isIntersecting) {
            if (y.mq("max", "md")) return;
            const p = W("HomeValuesImages"),
              l = p.find(({ properties: d }) => d.id === o),
              { methods: S } = l;
            S.show(),
              p
                .filter(({ properties: d }) => d.id !== o)
                .forEach(({ methods: d }) => d.hide());
          }
        });
      };
    new IntersectionObserver(t, e).observe(s);
  },
  Ao = ({ element: s, properties: o }) => {
    const { id: e } = o;
    qo({ element: s, id: e });
    let t = {};
    return (
      i.matchMedia().add("(min-width: 768px)", () => {
        t = i
          .timeline({
            scrollTrigger: {
              trigger: s,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          })
          .fromTo(s, { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
          .fromTo(s, { opacity: 1 }, { opacity: 1 })
          .fromTo(s, { opacity: 1, y: 0 }, { opacity: 0, y: -100 });
      }),
      setTimeout(() => {
        var c;
        y.mq("max", "md") ||
          (c = t == null ? void 0 : t.scrollTrigger) == null ||
          c.refresh();
      }, 500),
      {}
    );
  },
  Vo = ".js-home-values-card",
  B = "HomeValuesCard",
  vo = () =>
    u({ componentName: B, className: Vo }).map((o) => {
      const e = { ...o.dataset },
        t = Ao({ element: o, properties: e });
      return f({ componentName: B, element: o, properties: e, methods: t }), t;
    });
const Eo = ({ element: s, properties: o }) => ({
    show: () => s.classList.add("active"),
    hide: () => s.classList.remove("active"),
  }),
  Xo = ".js-home-values-image",
  K = "HomeValuesImages",
  Yo = () =>
    u({ componentName: K, className: Xo }).map((o) => {
      const e = { ...o.dataset },
        t = Eo({ element: o, properties: e });
      return f({ componentName: K, element: o, properties: e, methods: t }), t;
    });
const Bo = ({ element: s, properties: o }) => {
    const e = s.querySelector(".js-home-bottom-banner-container");
    return (
      i.matchMedia().add("(min-width: 768px)", () => {
        i.fromTo(
          e,
          { yPercent: -50 },
          {
            yPercent: 0,
            scrollTrigger: {
              trigger: s,
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
  Ko = ".js-home-bottom-banner",
  M = "HomeBottomBanner",
  Mo = () =>
    u({ componentName: M, className: Ko }).map((o) => {
      const e = { ...o.dataset },
        t = Bo({ element: o, properties: e });
      return f({ componentName: M, element: o, properties: e, methods: t }), t;
    });
let N;
const no = ({ root: s, wrapper: o, slides: e, addClass: t }) => {
    s.classList.toggle("swiper", t),
      o.classList.toggle("swiper-wrapper", t),
      [...e].forEach((r) => r.classList.toggle("swiper-slide", t));
  },
  Oo = ({ root: s, wrapper: o, slides: e }) => {
    var t;
    no({ root: s, wrapper: o, slides: e, addClass: !1 }),
      N && ((t = N == null ? void 0 : N.destroy) == null || t.call(N));
  },
  Go = ({ root: s, wrapper: o, slides: e }) => {
    no({ root: s, wrapper: o, slides: e, addClass: !0 }),
      (N = new F(s, {
        modules: [io],
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: ".js-home-loghi-swiper-next",
          prevEl: ".js-home-loghi-swiper-prev",
        },
      }));
  },
  O = ({ root: s, wrapper: o, slides: e }) => {
    if (y.mq("max", "md")) {
      Go({ root: s, wrapper: o, slides: e });
      return;
    }
    Oo({ root: s, wrapper: o, slides: e });
  },
  Ro = ({ root: s, wrapper: o, slides: e }) => {
    O({ root: s, wrapper: o, slides: e }),
      y.useResize(() => {
        O({ root: s, wrapper: o, slides: e });
      });
  },
  Wo = ({ element: s, properties: o }) => {
    const e = s.querySelector(".js-home-loghi-swiper"),
      t = s.querySelector(".js-home-loghi-swiper-wrapper"),
      r = s.querySelectorAll(".js-home-loghi-swiper-slide");
    Ro({ root: e, wrapper: t, slides: r });
    const c = s.querySelector(".js-home-loghi-wrapper");
    return (
      i.matchMedia().add("(min-width: 768px)", () => {
        i.fromTo(
          c,
          { yPercent: -10 },
          {
            yPercent: 0,
            scrollTrigger: {
              trigger: s,
              start: "top bottom",
              end: "top +=100",
              scrub: 0,
            },
          }
        );
      }),
      {}
    );
  },
  Fo = ".js-home-loghi",
  G = "HomeLoghi",
  zo = () =>
    u({ componentName: G, className: Fo }).map((o) => {
      const e = { ...o.dataset },
        t = Wo({ element: o, properties: e });
      return f({ componentName: G, element: o, properties: e, methods: t }), t;
    });
co();
fo();
wo();
No();
Po();
Lo();
vo();
Yo();
Mo();
zo();
