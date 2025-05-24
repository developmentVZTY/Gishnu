const Ju = (() => {
    let i = !1,
      e = [],
      t = 0;
    function r() {
      if (e.length === 0) {
        window.removeEventListener("DOMContentLoaded", r), (i = !1);
        return;
      }
      e.forEach(({ cb: o }) => {
        o();
      }),
        (e = []);
    }
    function n() {
      i ||
        ((i = !0),
        window.addEventListener("DOMContentLoaded", () => r(), {
          passive: !1,
        }));
    }
    return (o) => {
      e.push({ cb: o, id: t });
      const a = t;
      return (
        t++,
        typeof window < "u" && n(),
        () => {
          e = e.filter((l) => l.id !== a);
        }
      );
    };
  })(),
  Hs = {
    default: {
      tension: 20,
      mass: 1,
      friction: 5,
      velocity: 0,
      precision: 0.01,
    },
    gentle: {
      tension: 120,
      mass: 1,
      friction: 14,
      velocity: 0,
      precision: 0.01,
    },
    wobbly: {
      tension: 180,
      mass: 1,
      friction: 12,
      velocity: 0,
      precision: 0.01,
    },
    bounce: {
      tension: 200,
      mass: 3,
      friction: 5,
      velocity: 0,
      precision: 0.01,
    },
    scroller: {
      tension: 10,
      mass: 1,
      friction: 5,
      velocity: 0,
      precision: 0.5,
    },
  },
  he = {
    isString: (i) => Object.prototype.toString.call(i) === "[object String]",
    isNumber: (i) =>
      Object.prototype.toString.call(i) === "[object Number]" && isFinite(i),
    isObject: (i) => Object.prototype.toString.call(i) === "[object Object]",
    isFunction: (i) =>
      Object.prototype.toString.call(i) === "[object Function]",
    isArray: (i) => Object.prototype.toString.call(i) === "[object Array]",
    isBoolean: (i) => Object.prototype.toString.call(i) === "[object Boolean]",
    isElement: (i) => i instanceof Element || i instanceof Document,
    isNodeList: (i) =>
      Object.prototype.isPrototypeOf.call(NodeList.prototype, i),
  },
  bo = (i) => {
    switch (i) {
      case String:
        return "String";
      case Number:
        return "Number";
      case Object:
        return "Object";
      case Function:
        return "Function";
      case Array:
        return "Array";
      case Boolean:
        return "Boolean";
      case Element:
        return "Element";
      case NodeList:
        return "NodeList";
      default:
        return "Any";
    }
  },
  Qr = (i, e) => {
    switch (i) {
      case String:
        return he.isString(e);
      case Number:
        return he.isNumber(e);
      case Object:
        return he.isObject(e);
      case Function:
        return he.isFunction(e);
      case Array:
        return he.isArray(e);
      case Boolean:
        return he.isBoolean(e);
      case Element:
        return he.isElement(e);
      case NodeList:
        return he.isNodeList(e);
      default:
        return !0;
    }
  },
  ju = {
    easeLinear: "easeLinear",
    easeInQuad: "easeInQuad",
    easeOutQuad: "easeOutQuad",
    easeInOutQuad: "easeInOutQuad",
    easeInCubic: "easeInCubic",
    easeOutCubic: "easeOutCubic",
    easeInOutCubic: "easeInOutCubic",
    easeInQuart: "easeInQuart",
    easeOutQuart: "easeOutQuart",
    easeInOutQuart: "easeInOutQuart",
    easeInQuint: "easeInQuint",
    easeOutQuint: "easeOutQuint",
    easeInOutQuint: "easeInOutQuint",
    easeInSine: "easeInSine",
    easeOutSine: "easeOutSine",
    easeInOutSine: "easeInOutSine",
    easeInExpo: "easeInExpo",
    easeOutExpo: "easeOutExpo",
    easeInOutExpo: "easeInOutExpo",
    easeInCirc: "easeInCirc",
    easeOutCirc: "easeOutCirc",
    easeInOutCirc: "easeInOutCirc",
    easeInElastic: "easeInElastic",
    easeOutElastic: "easeOutElastic",
    easeInOutElastic: "easeInOutElastic",
    easeInBack: "easeInBack",
    easeOutBack: "easeOutBack",
    easeInOutBack: "easeInOutBack",
    easeInBounce: "easeInBounce",
    easeOutBounce: "easeOutBounce",
    easeInOutBounce: "easeInOutBounce",
  },
  tl = "min",
  rl = "desktop",
  zi = "easeLinear",
  Zi = "default",
  nl = 60,
  il = { 0: 1, 30: 2, 50: 3 },
  sl = !0,
  ol = !1,
  al = 60,
  Co = !0,
  ll = {
    xSmall: 320,
    small: 360,
    medium: 600,
    tablet: 768,
    desktop: 992,
    large: 1200,
    xLarge: 1400,
  },
  ul = 10,
  Ji = 0.06,
  cl = "#ff0000",
  fl = "#14df3b",
  hl = 8,
  dl = 10,
  pl = 1e3,
  _l = !1,
  ec = !1,
  tc = !1,
  rc = 0.01,
  nc = 0.06,
  ic = (i) => {
    var X,
      N,
      I,
      B,
      R,
      $,
      J,
      m,
      ee,
      Ee,
      at,
      ie,
      xe,
      Oe,
      se,
      De,
      ke,
      Bt,
      Le,
      _t,
      H,
      ae,
      Ie;
    const e = ce({
        prop: "startFps",
        value: i == null ? void 0 : i.startFps,
        defaultValue: nl,
        type: Number,
      }),
      t = ce({
        prop: "fpsScalePercent",
        value: i == null ? void 0 : i.fpsScalePercent,
        defaultValue: il,
        type: Object,
      }),
      r = ce({
        prop: "useScaleFps",
        value: i == null ? void 0 : i.useScaleFps,
        defaultValue: sl,
        type: Boolean,
      }),
      n = ce({
        prop: "deferredNextTick",
        value: i == null ? void 0 : i.deferredNextTick,
        defaultValue: ol,
        type: Boolean,
      }),
      s = ce({
        prop: "usePassive",
        value: i == null ? void 0 : i.usePassive,
        defaultValue: Co,
        type: Boolean,
      }),
      o = ce({
        prop: "throttle",
        value: i == null ? void 0 : i.throttle,
        defaultValue: al,
        type: Number,
      }),
      a = sc(i == null ? void 0 : i.mq),
      l = ce({
        prop: "defaultMq.value",
        value:
          (X = i == null ? void 0 : i.defaultMq) == null ? void 0 : X.value,
        defaultValue: rl,
        type: String,
      }),
      u = ce({
        prop: "defaultMq.type",
        value: (N = i == null ? void 0 : i.defaultMq) == null ? void 0 : N.type,
        defaultValue: tl,
        type: String,
      }),
      c = ce({
        prop: "sequencer.duration",
        value:
          (I = i == null ? void 0 : i.sequencer) == null ? void 0 : I.duration,
        defaultValue: ul,
        type: Number,
      }),
      d = Ss(
        (B = i == null ? void 0 : i.sequencer) == null ? void 0 : B.ease,
        "sequencer"
      ),
      h = ce({
        prop: "scrolTrigger.springConfig",
        value:
          (R = i == null ? void 0 : i.scrollTrigger) == null
            ? void 0
            : R.springConfig,
        defaultValue: Zi,
        type: String,
      }),
      f = ce({
        prop: "scrolTrigger.lerpConfig",
        value:
          ($ = i == null ? void 0 : i.scrollTrigger) == null
            ? void 0
            : $.lerpConfig,
        defaultValue: Ji,
        type: Number,
      }),
      _ = ce({
        prop: "scrolTrigger.markerColor.startEnd",
        value:
          (m =
            (J = i == null ? void 0 : i.scrollTrigger) == null
              ? void 0
              : J.markerColor) == null
            ? void 0
            : m.startEnd,
        defaultValue: cl,
        type: String,
      }),
      p = ce({
        prop: "scrolTrigger.markerColor.item",
        value:
          (Ee =
            (ee = i == null ? void 0 : i.scrollTrigger) == null
              ? void 0
              : ee.markerColor) == null
            ? void 0
            : Ee.item,
        defaultValue: fl,
        type: String,
      }),
      g = ce({
        prop: "parallax.defaultRange",
        value:
          (at = i == null ? void 0 : i.parallax) == null
            ? void 0
            : at.defaultRange,
        defaultValue: hl,
        type: Number,
      }),
      y = ce({
        prop: "parallax.springConfig",
        value:
          (ie = i == null ? void 0 : i.parallax) == null
            ? void 0
            : ie.springConfig,
        defaultValue: Zi,
        type: String,
      }),
      v = ce({
        prop: "parallax.lerpConfig",
        value:
          (xe = i == null ? void 0 : i.parallax) == null
            ? void 0
            : xe.lerpConfig,
        defaultValue: Ji,
        type: Number,
      }),
      T = ce({
        prop: "parallaxTween.duration",
        value:
          (Oe = i == null ? void 0 : i.parallaxTween) == null
            ? void 0
            : Oe.duration,
        defaultValue: dl,
        type: Number,
      }),
      w = Ss(
        (se = i == null ? void 0 : i.parallaxTween) == null ? void 0 : se.ease,
        "parallaxTween"
      ),
      b = ce({
        prop: "tween.duration",
        value:
          (De = i == null ? void 0 : i.tween) == null ? void 0 : De.duration,
        defaultValue: pl,
        type: Number,
      }),
      O = Ss(
        (ke = i == null ? void 0 : i.tween) == null ? void 0 : ke.ease,
        "tween"
      ),
      x = ce({
        prop: "tween.relative",
        value:
          (Bt = i == null ? void 0 : i.tween) == null ? void 0 : Bt.relative,
        defaultValue: _l,
        type: Boolean,
      }),
      k = ce({
        prop: "spring.relative",
        value:
          (Le = i == null ? void 0 : i.spring) == null ? void 0 : Le.relative,
        defaultValue: ec,
        type: Boolean,
      }),
      C = ce({
        prop: "lerp.relative",
        value:
          (_t = i == null ? void 0 : i.lerp) == null ? void 0 : _t.relative,
        defaultValue: tc,
        type: Boolean,
      }),
      P = ce({
        prop: "lerp.precision",
        value: (H = i == null ? void 0 : i.lerp) == null ? void 0 : H.precision,
        defaultValue: rc,
        type: Number,
      }),
      F = ce({
        prop: "lerp.velocity",
        value:
          (ae = i == null ? void 0 : i.lerp) == null ? void 0 : ae.velocity,
        defaultValue: nc,
        type: Number,
      });
    return {
      startFps: e,
      fpsScalePercent: t,
      useScaleFps: r,
      deferredNextTick: n,
      throttle: o,
      usePassive: s,
      mq: a,
      defaultMq: { value: l, type: u },
      sequencer: { duration: c, ease: d },
      scrollTrigger: {
        springConfig: h,
        lerpConfig: f,
        markerColor: { startEnd: _, item: p },
      },
      parallax: { defaultRange: g, springConfig: y, lerpConfig: v },
      parallaxTween: { duration: T, ease: w },
      tween: { duration: b, ease: O, relative: x },
      spring: {
        relative: k,
        config:
          (Ie = i == null ? void 0 : i.spring) != null && Ie.config
            ? { ...Hs, ...i.spring.config }
            : Hs,
      },
      lerp: { relative: C, precision: P, velocity: F },
    };
  },
  ce = ({ prop: i, value: e, defaultValue: t, type: r }) => {
    const n = Qr(r, e);
    return (
      n ||
        console.warn(
          `handleSetUp error: ${i}: ${e}, is not valid must be a ${bo(r)}`
        ),
      n ? e : t
    );
  },
  sc = (i) => {
    const e = Qr(Object, i) && Object.values(i).every((t) => Qr(Number, t));
    return (
      e ||
        console.warn(
          "handleSetUp error: mq must be an object as { ..., String: Number }"
        ),
      e ? i : ll
    );
  },
  Ss = (i, e) => {
    const t = Object.keys(ju).includes(i);
    return (
      !t &&
        i !== void 0 &&
        i !== null &&
        console.warn(`handleSetUp error: ${e}.ease properties is not valid`),
      t ? i : zi
    );
  },
  Us = (i) => {
    if (!he.isObject(i)) return 0;
    const e = Object.values(i);
    return (e.length && Math.max(...e.map((t) => Us(t)))) + 1;
  },
  gl = (i) =>
    Object.entries(i).reduce((e, t) => {
      const [r, n] = t,
        s = he.isFunction(n) ? n() : {};
      return he.isObject(n)
        ? { ...e, [r]: gl(n) }
        : he.isFunction(n) &&
          he.isObject(s) &&
          "value" in s &&
          ("validate" in s || "type" in s || "skipEqual" in s)
        ? { ...e, [r]: s.value }
        : { ...e, [r]: n };
    }, {}),
  Hn = (i, e, t) =>
    Object.entries(i).reduce((r, n) => {
      const [s, o] = n,
        a = he.isFunction(o) ? o() : {};
      return he.isObject(o)
        ? { ...r, [s]: Hn(o, e, t) }
        : he.isFunction(o) && he.isObject(a) && "value" in a && e in a
        ? { ...r, [s]: a[e] }
        : { ...r, [s]: t };
    }, {}),
  Wn = (i, e) => {
    console.warn(
      `%c SimpleStore supports an object with a depth of up to 2 levels, the input object has ${i} level`,
      e
    );
  },
  oc = (i, e, t) => {
    console.warn(
      `%c one of this key ${i} defined in computed method of prop to monitor '${e}' prop not exist`,
      t
    );
  },
  ac = (i, e) => {
    console.warn(
      `%c SimpleStore, trying to execute set() method: store.${i} not exist`,
      e
    );
  },
  lc = (i, e, t) => {
    console.warn(
      `%c trying to execute setProp method on '${i}' propierties: setProp methods doasn't allow objects as value, ${JSON.stringify(
        e
      )} is an Object`,
      t
    );
  },
  uc = (i, e) => {
    console.warn(
      `%c trying to execute setProp method on '${i}' propierties: '${JSON.stringify(
        i
      )}' is an objects`,
      e
    );
  },
  cc = (i, e, t, r) => {
    console.warn(
      `%c trying to execute setProp method on '${i}' propierties: ${e} is not a ${bo(
        t
      )}`,
      r
    );
  },
  fc = (i, e, t) => {
    console.warn(
      `%c trying to execute setObj method on '${i}' propierties: setObj methods allow only objects as value, ${e} is not an Object`,
      t
    );
  },
  hc = (i, e) => {
    console.warn(
      `%c trying to execute setObj data method on '${i}' propierties: store propierties '${i}' is not an object`,
      e
    );
  },
  dc = (i, e, t) => {
    console.warn(
      `%c trying to execute setObj data method: one of these keys '${i}' not exist in store.${e}`,
      t
    );
  },
  pc = (i, e, t) => {
    console.warn(
      `%c trying to execute setObj data method on '${i}' propierties: '${JSON.stringify(
        e
      )}' have a depth > 1, nested obj is not allowed`,
      t
    );
  },
  _c = (i, e, t, r, n) => {
    console.warn(
      `%c trying to execute setObj data method on ${i}.${e} propierties: ${t} is not a ${bo(
        r
      )}`,
      n
    );
  },
  gc = (i, e) => {
    console.warn(
      `%c trying to execute get data method: store.${i} not exist`,
      e
    );
  },
  mc = (i, e) => {
    console.warn(
      `%c trying to execute set data method: store.${i} not exist`,
      e
    );
  },
  yc = (i, e) => {
    console.warn(
      `%c one of the keys [${i}] is already used as a computed target, or one of the keys coincides with the prop to be changed.`,
      e
    );
  },
  vc = (i, e) => {
    console.warn(
      `%c SimpleStore error: the property ${i} to watch doasn't exist in store`,
      e
    );
  };
class ps {
  constructor(e = {}) {
    (this.logStyle = "padding: 10px;"),
      (this.counterId = 0),
      (this.callBackWatcher = []),
      (this.callBackComputed = []),
      (this.validationStatusObject = {}),
      (this.dataDepth = Us(e)),
      (this.computedPropFired = []),
      (this.computedWaitList = []),
      (this.computedRunning = !1),
      (this.store = (() =>
        this.dataDepth > 2
          ? (Wn(this.dataDepth, this.logStyle), {})
          : gl(e))()),
      (this.type = (() =>
        this.dataDepth > 2
          ? (Wn(this.dataDepth, this.logStyle), {})
          : Hn(e, "type", "any"))()),
      (this.fnValidate = (() =>
        this.dataDepth > 2
          ? (Wn(this.dataDepth, this.logStyle), {})
          : Hn(e, "validate", () => !0))()),
      (this.strict = (() =>
        this.dataDepth > 2
          ? (Wn(this.dataDepth, this.logStyle), {})
          : Hn(e, "strict", !1))()),
      (this.skipEqual = (() =>
        this.dataDepth > 2
          ? (Wn(this.dataDepth, this.logStyle), {})
          : Hn(e, "skipEqual", !0))()),
      this.inizializeValidation();
  }
  inizializeValidation() {
    for (const e in this.store)
      he.isObject(this.store[e]) && (this.validationStatusObject[e] = {});
    Object.entries(this.store).forEach((e) => {
      const [t, r] = e;
      this.set(t, r, !1);
    });
  }
  fireComputed() {
    this.computedWaitList.forEach((e) => {
      this.callBackComputed.forEach((t) => {
        const { prop: r, keys: n, fn: s } = t,
          o = Object.keys(this.store);
        if (!n.every((d) => o.includes(d))) {
          oc(n, r, this.logStyle);
          return;
        }
        if (!n.includes(e)) return;
        const u = n.map((d) => this.store[d]);
        if (!this.computedPropFired.includes(r)) {
          const d = s(...u);
          this.set(r, d), this.computedPropFired.push(r);
        }
      });
    }),
      (this.computedPropFired = []),
      (this.computedWaitList = []),
      (this.computedRunning = !1);
  }
  addToComputedWaitLsit(e) {
    this.callBackComputed.length &&
      (this.computedWaitList.push(e),
      this.computedRunning ||
        ((this.computedRunning = !0), setTimeout(() => this.fireComputed())));
  }
  set(e, t, r = !0) {
    if (!(e in this.store)) {
      ac(e, this.logStyle);
      return;
    }
    const n =
      Qr(Function, t) &&
      !Qr(Function, this.store[e]) &&
      this.type[e] !== Function
        ? t(this.store[e])
        : t;
    he.isObject(this.store[e]) ? this.setObj(e, n, r) : this.setProp(e, n, r);
  }
  setProp(e, t, r = !0) {
    if (he.isObject(t)) {
      lc(e, t, this.logStyle);
      return;
    }
    if (he.isObject(this.store[e])) {
      uc(e, this.logStyle);
      return;
    }
    if (!Qr(this.type[e], t)) {
      cc(e, t, this.type[e], this.logStyle);
      return;
    }
    const s = this.fnValidate[e](t);
    if (this.strict[e] && !s) return;
    this.validationStatusObject[e] = s;
    const o = this.store[e];
    (o === t && this.skipEqual[e]) ||
      ((this.store[e] = t),
      r &&
        this.callBackWatcher
          .filter((l) => l.prop === e)
          .forEach((l) => {
            l.fn(t, o, this.validationStatusObject[e]);
          }),
      this.addToComputedWaitLsit(e));
  }
  setObj(e, t, r = !0) {
    if (!he.isObject(t)) {
      fc(e, t, this.logStyle);
      return;
    }
    if (!he.isObject(this.store[e])) {
      hc(e, this.logStyle);
      return;
    }
    const n = Object.keys(t),
      s = Object.keys(this.store[e]);
    if (!n.every((g) => s.includes(g))) {
      dc(n, e, this.logStyle);
      return;
    }
    if (Us(t) > 1) {
      pc(e, t, this.logStyle);
      return;
    }
    if (
      !Object.entries(t)
        .map((g) => {
          const [y, v] = g,
            T = Qr(this.type[e][y], v);
          return T || _c(e, y, v, this.type[e][y], this.logStyle), T;
        })
        .every((g) => g === !0)
    )
      return;
    const u = Object.entries(t)
      .map((g) => {
        const [y, v] = g;
        return this.strict[e][y]
          ? { strictCheck: this.fnValidate[e][y](v), item: g }
          : { strictCheck: !0, item: g };
      })
      .filter(({ strictCheck: g }) => g === !0);
    if (u.every((g) => g === !1)) return;
    const d = u
      .map(({ item: g }) => g)
      .reduce((g, [y, v]) => ({ ...g, [y]: v }), {});
    Object.entries(d).forEach((g) => {
      const [y, v] = g;
      this.validationStatusObject[e][y] = this.fnValidate[e][y](v);
    });
    const h = this.store[e],
      f = { ...this.store[e], ...d },
      _ = Object.keys(d).every((g) => this.skipEqual[e][g] === !0),
      p = Object.entries(f).every(([g, y]) => y === h[g]);
    (_ && p) ||
      ((this.store[e] = f),
      r &&
        this.callBackWatcher
          .filter((y) => y.prop === e)
          .forEach((y) => {
            y.fn(this.store[e], h, this.validationStatusObject[e]);
          }),
      this.addToComputedWaitLsit(e));
  }
  quickSetProp(e, t) {
    const r = this.store[e];
    (this.store[e] = t),
      this.callBackWatcher
        .filter((s) => s.prop === e)
        .forEach((s) => {
          s.fn(t, r, null);
        });
  }
  get() {
    return this.store;
  }
  getProp(e) {
    if (e in this.store) return this.store[e];
    gc(e, this.logStyle);
  }
  getValidation() {
    return this.validationStatusObject;
  }
  watch(e, t = () => {}) {
    if (!(e in this.store)) {
      vc(e, this.logStyle);
      return;
    }
    this.callBackWatcher.push({ prop: e, fn: t, id: this.counterId });
    const r = this.counterId;
    return (
      this.counterId++,
      () => {
        this.callBackWatcher = this.callBackWatcher.filter((n) => n.id !== r);
      }
    );
  }
  emit(e) {
    e in this.store
      ? this.callBackWatcher
          .filter((r) => r.prop === e)
          .forEach((r) => {
            r.fn(this.store[e], this.store[e], this.validationStatusObject[e]);
          })
      : mc(e, this.logStyle);
  }
  debugStore() {
    console.log(this.store);
  }
  debugValidate() {
    console.log(this.validationStatusObject);
  }
  setStyle(e) {
    this.logStyle = e;
  }
  computed(e, t, r) {
    if (
      [...this.callBackComputed, { prop: e, keys: t, fn: r }]
        .map((a) => a.prop)
        .flat()
        .some((a) => t.includes(a))
    ) {
      yc(t, this.logStyle);
      return;
    }
    this.callBackComputed.push({ prop: e, keys: t, fn: r });
  }
  destroy() {
    (this.counterId = 0),
      (this.callBackWatcher = []),
      (this.callBackComputed = []),
      (this.computedPropFired = []),
      (this.computedWaitList = []),
      (this.validationStatusObject = {}),
      (this.store = {}),
      (this.type = {}),
      (this.fnValidate = {}),
      (this.strict = {}),
      (this.skipEqual = {});
  }
}
const Gs = (i, e, t = !0) => {
    i = ((n) => {
      let s;
      try {
        s = JSON.parse(JSON.stringify(n));
      } catch {
        s = Object.assign({}, n);
      }
      return s;
    })(i);
    const r = (n) => n && typeof n == "object";
    return !r(i) || !r(e)
      ? e
      : (Object.keys(e).forEach((n) => {
          const s = i[n],
            o = e[n];
          Array.isArray(s) && Array.isArray(o)
            ? t
              ? ((i[n] = s.map((a, l) => (o.length <= l ? a : Gs(a, o[l], t)))),
                o.length > s.length && (i[n] = i[n].concat(o.slice(s.length))))
              : (i[n] = s.concat(o))
            : r(s) && r(o)
            ? (i[n] = Gs(Object.assign({}, s), o, t))
            : (i[n] = o);
        }),
        i);
  },
  ml = new ps({ usePassive: Co }),
  Ge = (() => {
    let i = {
      startFps: nl,
      fpsScalePercent: il,
      useScaleFps: sl,
      deferredNextTick: ol,
      throttle: al,
      usePassive: Co,
      mq: ll,
      defaultMq: { value: rl, type: tl },
      sequencer: { duration: ul, ease: zi },
      scrollTrigger: {
        springConfig: Zi,
        lerpConfig: Ji,
        markerColor: { startEnd: cl, item: fl },
      },
      parallax: { defaultRange: hl, springConfig: Zi, lerpConfig: Ji },
      parallaxTween: { duration: dl, ease: zi },
      tween: { duration: pl, ease: zi, relative: _l },
      spring: { relative: !1, config: Hs },
      lerp: { relative: !1, precision: 0.01, velocity: 0.06 },
    };
    return {
      set: (n) => {
        (i = ic(Gs(i, n))),
          "usePassive" in n &&
            ml.set("usePassive", i == null ? void 0 : i.usePassive);
      },
      get: (n) => {
        if (n in i) return i[n];
        console.warn(`handleSetUp: ${n} is not a setup propierties`);
      },
      print: () => {
        console.log("Writable props:"), console.log(i);
      },
    };
  })(),
  jo = 10,
  ea = 40,
  ta = 800;
function wc(i) {
  let e = 0,
    t = 0,
    r = 0,
    n = 0;
  return (
    "detail" in i && (t = i.detail),
    "wheelDelta" in i && (t = -i.wheelDelta / 120),
    "wheelDeltaY" in i && (t = -i.wheelDeltaY / 120),
    "wheelDeltaX" in i && (e = -i.wheelDeltaX / 120),
    "axis" in i && i.axis === i.HORIZONTAL_AXIS && ((e = t), (t = 0)),
    (r = e * jo),
    (n = t * jo),
    "deltaY" in i && (n = i.deltaY),
    "deltaX" in i && (r = i.deltaX),
    (r || n) &&
      i.deltaMode &&
      (i.deltaMode == 1 ? ((r *= ea), (n *= ea)) : ((r *= ta), (n *= ta))),
    r && !e && (e = r < 1 ? -1 : 1),
    n && !t && (t = n < 1 ? -1 : 1),
    { spinX: e, spinY: t, pixelX: r, pixelY: n }
  );
}
function Fr(i) {
  let e = !1,
    t = [],
    r = 0,
    n = Ge.get("usePassive");
  ml.watch("usePassive", () => {
    window.removeEventListener(i, s), (e = !1), o();
  });
  function s(l) {
    if (t.length === 0) {
      window.removeEventListener(i, s), (e = !1);
      return;
    }
    const u = l.type,
      { pageX: c, pageY: d } = (() =>
        u === "touchend" && l.changedTouches
          ? l.changedTouches[0]
          : l.touches
          ? l.touches[0]
          : l)(),
      { clientX: h, clientY: f } = (() =>
        u === "touchend" && l.changedTouches
          ? l.changedTouches[0]
          : l.touches
          ? l.touches[0]
          : l)(),
      _ = l.target,
      p = {
        page: { x: c, y: d },
        client: { x: h, y: f },
        target: _,
        type: u,
        preventDefault: () => (n ? () => {} : l.preventDefault()),
      };
    if (u === "wheel") {
      const { spinX: g, spinY: y, pixelX: v, pixelY: T } = wc(l);
      Object.assign(p, { spinX: g, spinY: y, pixelX: v, pixelY: T });
    }
    t.forEach(({ cb: g }) => {
      g(p);
    });
  }
  function o() {
    e ||
      ((e = !0),
      (n = Ge.get("usePassive")),
      window.addEventListener(i, s, { passive: n }));
  }
  return (l) => {
    t.push({ cb: l, id: r });
    const u = r;
    return (
      r++,
      typeof window < "u" && o(),
      () => {
        t = t.filter((c) => c.id !== u);
      }
    );
  };
}
const Sc = new Fr("click"),
  xc = new Fr("mousedown"),
  Tc = new Fr("touchstart"),
  bc = new Fr("mousemove"),
  Cc = new Fr("touchmove"),
  Oc = new Fr("mouseup"),
  kc = new Fr("touchend"),
  Pc = new Fr("wheel"),
  Mc = () => {},
  Lt = new ps({
    currentFrame: 0,
    instantFps: Ge.get("startFps"),
    requestFrame: Mc,
  }),
  wn = () => (typeof window < "u" ? window.performance.now() : Date.now()),
  Ec = (1 / 60) * 1e3,
  yl = (() => {
    let i = !1,
      e = [],
      t = 0;
    function r() {
      if (e.length === 0) {
        window.removeEventListener("visibilitychange", r), (i = !1);
        return;
      }
      const o = { visibilityState: document.visibilityState };
      e.forEach(({ cb: a }) => {
        a(o);
      });
    }
    function n() {
      i ||
        ((i = !0),
        window.addEventListener("visibilitychange", r, { passive: !1 }));
    }
    return (o) => {
      e.push({ cb: o, id: t });
      const a = t;
      return (
        t++,
        typeof window < "u" && n(),
        () => {
          e = e.filter((l) => l.id !== a);
        }
      );
    };
  })(),
  Qs = (() => {
    let i = 0,
      e = 0;
    const t = {};
    return {
      add: (h, f) => {
        t[i] = { el: h, fn: f, data: {} };
        const _ = i;
        return (
          i++,
          {
            id: _,
            unsubscribe: () => {
              if (t != null && t[_]) {
                const p = Object.keys(t[_].data).length;
                (e = e - p), delete t[_];
              }
            },
          }
        );
      },
      get: (h) => (t == null ? void 0 : t[h]),
      update: ({ id: h, cbObject: f, frame: _ }) => {
        if (!t[h]) return;
        const { currentFrame: p } = Lt.get(),
          { data: g } = t[h];
        g[_ + p] || ((g[_ + p] = f), e++);
      },
      remove: (h) => {
        h in t && delete t[h];
      },
      clean: (h) => {
        const f = t[h];
        if (!f) return;
        const _ = Object.keys(f.data).length;
        (e = e - _), (f.data = {});
      },
      fire: (h, f) => {
        Object.values(t).forEach(({ data: _, fn: p, el: g }) => {
          const y = _ == null ? void 0 : _[h];
          y && (f && p(y, g), (_[h] = null), delete _[h], e--);
        });
      },
      fireObject: ({ id: h, obj: f }) => {
        if (!t[h]) return;
        const { el: _, fn: p } = t[h];
        p(f, _);
      },
      getCacheCounter: () => e,
      updateFrameId: (h) => {
        Object.values(t).forEach(({ data: f }) => {
          Object.keys(f).forEach((_) => {
            delete Object.assign(f, { [`${parseInt(_) - h}`]: f[_] })[_];
          });
        });
      },
    };
  })(),
  wi = (() => {
    let i = [];
    return {
      add: (r, n = 100) => {
        i.push({ cb: r, priority: n });
      },
      fire: ({ time: r, fps: n, shouldRender: s }) => {
        i.length !== 0 &&
          (i.sort((o, a) => o.priority - a.priority),
          i.forEach(({ cb: o }) => o({ time: r, fps: n, shouldRender: s })),
          (i.length = 0));
      },
    };
  })(),
  vl = (() => {
    let i = [];
    return {
      add: (r) => {
        i.push(r);
      },
      get: () => {
        const r = [...i];
        return (i.length = 0), r;
      },
    };
  })(),
  ji = (() => {
    let i = {},
      e = 0,
      t = null;
    return {
      add: (a, l) => {
        const u = l + Lt.getProp("currentFrame");
        i[u] ? i[u].push(a) : ((i[u] = [a]), e++), Lt.emit("requestFrame");
      },
      fire: ({ currentFrame: a, time: l, fps: u, shouldRender: c }) => {
        (t = i[a]),
          t
            ? (t.forEach((d) => d({ time: l, fps: u, shouldRender: c })),
              (i[a] = null),
              delete i[a],
              (e = e - 1))
            : (t = null);
      },
      updateKeys: (a) => {
        Object.keys(i).forEach((l) => {
          delete Object.assign(i, { [`${parseInt(l) - a}`]: i[l] })[l];
        });
      },
      getIndexCallbackLenght: () => e,
    };
  })(),
  Dc = "animationStop",
  Rc = () => {
    window.addEventListener("unhandledrejection", (i) => {
      i.reason === Dc && i.preventDefault();
    });
  };
let ra = !1;
const wl = (i = 30) => {
  if (ra) {
    const { instantFps: e } = Lt.get();
    return new Promise((t) => {
      t({ averageFPS: e });
    });
  }
  return new Promise((e) => {
    const t = [];
    let n = 0,
      s = 0,
      o = 0,
      a = 0,
      l = 0;
    const u = (c) => {
      c *= 0.001;
      const d = c - a;
      a = c;
      const h = 1 / d;
      (o += h - (t[n] || 0)), (t[n++] = h), (s = Math.max(s, n)), (n %= 20);
      const f = parseInt(o / s);
      if ((l++, l >= i)) {
        Lt.quickSetProp("instantFps", f), (ra = !0), e({ averageFPS: f });
        return;
      }
      requestAnimationFrame(u);
    };
    requestAnimationFrame(u);
  });
};
wl();
const xs = 1e7,
  Sl = 2e3;
let Ks = !1,
  Or = [],
  Ut = wn(),
  na = 0,
  Ts = 0,
  bs = 0,
  Jn = !1,
  Tt = Ge.get("startFps"),
  Dn = Tt,
  Cs = 0,
  Os = 0,
  fr = 0,
  ks = -1,
  Sn = !0,
  xl = Ge.get("fpsScalePercent"),
  Tl = Ge.get("useScaleFps"),
  Bi = !1,
  $i = !1;
const Fc = () => Tt < (Dn / 5) * 3,
  Ac = () => Tt < (Dn / 5) * 4,
  Nc = () => {
    !Fc() ||
      Bi ||
      ((Bi = !0),
      setTimeout(() => {
        Bi = !1;
      }, 4e3));
  },
  Lc = () => {
    !Ac() ||
      $i ||
      (($i = !0),
      setTimeout(() => {
        $i = !1;
      }, 4e3));
  };
yl(({ visibilityState: i }) => {
  Jn = i === "visible";
});
Rc();
Lt.watch("requestFrame", () => {
  es();
});
const Ic = () => {
    if (!Tl) return !0;
    const i = Object.entries(xl).reduce((e, [t, r]) => {
      const n = Math.abs(Dn - Tt);
      return Math.round((n * 100) / Dn) > parseInt(t) ? r : e;
    }, 1);
    return (ks = (ks + 1) % i), ks === 0;
  },
  ia = () => {
    fr === xs &&
      ((fr = 0),
      Lt.quickSetProp("currentFrame", fr),
      ji.updateKeys(xs),
      Qs.updateFrameId(xs)),
      wi.fire({ time: Ut, fps: Tt, shouldRender: Sn }),
      (Or = [...Or, ...vl.get()]),
      (Ks = !1),
      Or.length > 0 ||
      ji.getIndexCallbackLenght() > 0 ||
      Qs.getCacheCounter() > 0 ||
      Ut < Sl
        ? es()
        : ((Jn = !0), (fr = 0), Lt.quickSetProp("currentFrame", fr));
  },
  sa = (i) => {
    (Ut = i),
      (bs = Ut - Ts),
      Jn && (na += bs),
      (Ts += bs),
      (Ut = Ts - na),
      Jn || Cs++,
      Ut > Os + 1e3 &&
        ((Tt =
          Ut > Sl
            ? Math.round((Cs * 1e3) / (Ut - Os))
            : Lt.getProp("instantFps")),
        (Os = Ut),
        (Cs = 0),
        Tt === 0 && (Tt = Lt.getProp("instantFps")),
        (xl = Ge.get("fpsScalePercent")),
        (Tl = Ge.get("useScaleFps"))),
      Tt > Dn && (Dn = Tt),
      (Sn = Ic()),
      Nc(),
      Lc(),
      Or.forEach((t) => t({ time: Ut, fps: Tt, shouldRender: Sn })),
      ji.fire({ currentFrame: fr, time: Ut, fps: Tt, shouldRender: Sn }),
      Qs.fire(fr, Sn),
      fr++,
      Lt.quickSetProp("currentFrame", fr),
      (Or.length = 0),
      (Jn = !1),
      Ge.get("deferredNextTick") ? setTimeout(() => ia()) : ia();
  },
  es = () => {
    Ks ||
      (typeof window < "u"
        ? requestAnimationFrame(sa)
        : setTimeout(() => sa(wn()), Ec),
      (Ks = !0));
  },
  Kr = (() => ({
    add: (o) => {
      Or.push(o), es();
    },
    addMultiple: (o = []) => {
      (Or = [...Or, ...o]), es();
    },
    getFps: () => Tt,
    mustMakeSomething: () => Bi,
    shouldMakeSomething: () => $i,
    getShouldRender: () => Sn,
  }))(),
  bl = function (e, t = 200) {
    let r;
    return function () {
      const n = () => e.apply(this, arguments);
      clearTimeout(r), (r = setTimeout(n, t));
    };
  },
  zc = (() => {
    let i = !1,
      e = [],
      t = 0,
      r = () => {},
      n = window.innerHeight,
      s = window.innerWidth;
    function o() {
      if (e.length === 0) {
        window.removeEventListener("resize", r), (i = !1);
        return;
      }
      const u = window.innerHeight,
        c = window.innerWidth,
        d = u !== n,
        h = c !== s;
      (n = u), (s = c);
      const f = {
        scrollY: window.pageYOffset,
        windowsHeight: u,
        windowsWidth: c,
        documentHeight: document.documentElement.scrollHeight,
        verticalResize: d,
        horizontalResize: h,
      };
      e.forEach(({ cb: _ }) => {
        _(f);
      });
    }
    function a() {
      i ||
        ((i = !0),
        (r = bl((u) => o())),
        window.addEventListener("resize", r, { passive: !1 }));
    }
    return (u) => {
      e.push({ cb: u, id: t });
      const c = t;
      return (
        t++,
        typeof window < "u" && a(),
        () => {
          e = e.filter((d) => d.id !== c);
        }
      );
    };
  })(),
  ci = (() => {
    let i = !1,
      e = [],
      t = 0;
    const r = "UP",
      n = "DOWN";
    let s = window.pageYOffset,
      o = window.pageYOffset,
      a = n,
      l = { scrollY: o, direction: a };
    function u() {
      if (e.length === 0) {
        window.removeEventListener("scroll", u), (i = !1);
        return;
      }
      (s = o),
        (o = window.pageYOffset),
        (a = o > s ? n : r),
        (l = { scrollY: o, direction: a }),
        e.forEach(({ cb: h }) => {
          h(l);
        });
    }
    function c() {
      i || ((i = !0), window.addEventListener("scroll", u, { passive: !0 }));
    }
    return (h) => {
      e.push({ cb: h, id: t });
      const f = t;
      return (
        t++,
        typeof window < "u" && c(),
        () => {
          e = e.filter((_) => _.id !== f);
        }
      );
    };
  })(),
  Bc = (() => {
    let i = !1,
      e = [],
      t = 0,
      r = () => {};
    function n(a) {
      if (e.length === 0) {
        r(), (i = !1);
        return;
      }
      Kr.add(() => {
        wi.add(() => {
          e.forEach(({ cb: l }) => {
            l(a);
          });
        }, 0);
      });
    }
    function s() {
      i || ((i = !0), (r = ci(n)));
    }
    return (a) => {
      e.push({ cb: a, id: t });
      const l = t;
      return (
        t++,
        typeof window < "u" && s(),
        () => {
          e = e.filter((u) => u.id !== l);
        }
      );
    };
  })(),
  $c = (i, e) => {
    let t, r;
    return function () {
      const n = this,
        s = arguments;
      r
        ? (clearTimeout(t),
          (t = setTimeout(function () {
            wn() - r >= e && (i.apply(n, s), (r = wn()));
          }, e - (wn() - r))))
        : (i.apply(n, s), (r = wn()));
    };
  },
  Vc = (() => {
    let i = !1,
      e = [],
      t = 0,
      r = () => {},
      n = () => {};
    function s(l) {
      if (e.length === 0) {
        n(), (i = !1);
        return;
      }
      Kr.add(() => {
        wi.add(() => {
          e.forEach(({ cb: u }) => {
            u(l);
          });
        }, 0);
      });
    }
    function o() {
      i || ((i = !0), (r = $c((l) => s(l), Ge.get("throttle"))), (n = ci(r)));
    }
    return (l) => {
      e.push({ cb: l, id: t });
      const u = t;
      return (
        t++,
        typeof window < "u" && o(),
        () => {
          e = e.filter((c) => c.id !== u);
        }
      );
    };
  })();
function Cl(i) {
  let e = !1,
    t = [],
    r = 0,
    n = !1,
    s = () => {},
    o = () => {},
    a = () => {};
  function l() {
    if (((n = !1), t.length === 0)) {
      o(), i === "START" && s(), (e = !1);
      return;
    }
    Kr.add(() => {
      wi.add(() => {
        const d = { scrollY: window.pageYOffset };
        i === "END" &&
          t.forEach(({ cb: h }) => {
            h(d);
          });
      }, 0);
    });
  }
  function u() {
    e ||
      ((e = !0),
      (a = bl((d) => l())),
      (o = ci(a)),
      i === "START" &&
        (s = ci(({ scrollY: d }) => {
          const h = { scrollY: d };
          n ||
            ((n = !0),
            t.forEach(({ cb: f }) => {
              f(h);
            }));
        })));
  }
  return (d) => {
    t.push({ cb: d, id: r });
    const h = r;
    return (
      r++,
      typeof window < "u" && u(),
      () => {
        t = t.filter((f) => f.id !== h);
      }
    );
  };
}
const Wc = new Cl("START"),
  Yc = new Cl("END"),
  Ps = (() => ({
    max: (r = "desktop") => window.innerWidth < Ge.get("mq")[r],
    min: (r = "desktop") => window.innerWidth >= Ge.get("mq")[r],
    getBreackpoint: (r = "desktop") => Ge.get("mq")[r],
  }))(),
  fi = {
    setDefault(i = {}) {
      Ge.set(i);
    },
    getDefault(i = "") {
      return Ge.get(i);
    },
    printDefault() {
      Ge.print();
    },
    getFps() {
      return Kr.getFps();
    },
    getInstantFps() {
      return Lt.getProp("instantFps");
    },
    createStore(i = {}) {
      return new ps(i);
    },
    mustMakeSomething() {
      return Kr.mustMakeSomething();
    },
    shouldMakeSomething() {
      return Kr.shouldMakeSomething();
    },
    useFrame(i = () => {}) {
      return Kr.add(i);
    },
    useNextTick(i = () => {}) {
      return wi.add(i);
    },
    useNextFrame(i = () => {}) {
      return vl.add(i);
    },
    useFrameIndex(i = () => {}, e = 0) {
      return ji.add(i, e);
    },
    useFps(i = () => {}) {
      return wl().then((e) => i(e));
    },
    useLoad(i = () => {}) {
      return Ju(i);
    },
    useResize(i = () => {}) {
      return zc(i);
    },
    useVisibilityChange(i = () => {}) {
      return yl(i);
    },
    useMouseClick(i = () => {}) {
      return Sc(i);
    },
    useMouseDown(i = () => {}) {
      return xc(i);
    },
    useTouchStart(i = () => {}) {
      return Tc(i);
    },
    useMouseMove(i = () => {}) {
      return bc(i);
    },
    useTouchMove(i = () => {}) {
      return Cc(i);
    },
    useMouseUp(i = () => {}) {
      return Oc(i);
    },
    useTouchEnd(i = () => {}) {
      return kc(i);
    },
    useMouseWheel(i = () => {}) {
      return Pc(i);
    },
    useScroll(i = () => {}) {
      return Bc(i);
    },
    useScrollImmediate(i = () => {}) {
      return ci(i);
    },
    useScrollThrottle(i = () => {}) {
      return Vc(i);
    },
    useScrollStart(i = () => {}) {
      return Wc(i);
    },
    useScrollEnd(i = () => {}) {
      return Yc(i);
    },
    mq(i = "", e) {
      switch (i) {
        case "min":
          return Ps.min(e);
        case "max":
          return Ps.max(e);
        case "get":
          return Ps.getBreackpoint(e);
        default:
          console.warn(`${i} in core.mq not exist`);
      }
    },
  };
new ps({ id: 0 });
const qc = ({ element: i, properties: e }) => ({});
let Ol = 0;
const _s = fi.createStore({
    instances: () => ({ value: [], type: Array }),
    componentsAdded: () => ({ value: !1, skipEqual: !1, type: Boolean }),
  }),
  Oo = (i = "") => {
    const { instances: e } = _s.get();
    return e.filter((t) => (t == null ? void 0 : t[i])).map((t) => t[i]);
  },
  kl = (i = "") => {
    var e, t;
    return (
      ((t = (e = Oo(i)) == null ? void 0 : e[0]) == null
        ? void 0
        : t.methods) ?? {}
    );
  },
  st = ({
    componentName: i,
    element: e,
    properties: t = {},
    methods: r = {},
  }) => {
    if (!i) {
      console.warn("addComponent error: componentName && element is missing");
      return;
    }
    e && (e.dataset.component = i),
      _s.set("instances", (n) => [
        ...n,
        { [i]: { element: e, properties: t, methods: r, parseCounter: Ol } },
      ]);
  },
  ot = ({ componentName: i = "", className: e = "" }) => {
    const r = Oo(i).map((s) => s.element);
    return [...document.querySelectorAll(e)].filter((s) => ![...r].includes(s));
  };
_s.computed("componentsAdded", ["instances"], () => ((Ol += 1), !0));
const xd = ({
    componentName: i = "",
    callBack: e = () => {},
    once: t = !0,
  }) => {
    let r = 0;
    const n = _s.watch("componentsAdded", () => {
      const s = Oo(i),
        o = s.length;
      if (r === o) return;
      r = s.length;
      const a = s.reduce(
          (u, c) => (c.parseCounter > u ? c.parseCounter : u),
          0
        ),
        l = s.filter(({ parseCounter: u }) => u === a);
      e(l), t && n();
    });
  },
  Xc = ".js-footer",
  oa = "Footer",
  Hc = () =>
    ot({ componentName: oa, className: Xc }).map((e) => {
      const t = { ...e.dataset },
        r = qc({ element: e, properties: t });
      return (
        st({ componentName: oa, element: e, properties: t, methods: r }), r
      );
    }),
  Uc = ({ element: i, properties: e }) => ({}),
  Gc = ".js-footer-menu",
  aa = "FooterMenu",
  Qc = () =>
    ot({ componentName: aa, className: Gc }).map((e) => {
      const t = { ...e.dataset },
        r = Uc({ element: e, properties: t });
      return (
        st({ componentName: aa, element: e, properties: t, methods: r }), r
      );
    }),
  Kc = ({ element: i, properties: e }) => ({}),
  Zc = ".js-footer-service-menu",
  la = "FooterServiceMenu",
  Jc = () =>
    ot({ componentName: la, className: Zc }).map((e) => {
      const t = { ...e.dataset },
        r = Kc({ element: e, properties: t });
      return (
        st({ componentName: la, element: e, properties: t, methods: r }), r
      );
    }),
  jc = ({ element: i, properties: e }) => ({}),
  ef = ".js-footer-contact",
  ua = "FooterContact",
  tf = () =>
    ot({ componentName: ua, className: ef }).map((e) => {
      const t = { ...e.dataset },
        r = jc({ element: e, properties: t });
      return (
        st({ componentName: ua, element: e, properties: t, methods: r }), r
      );
    }),
  rf = ({ element: i, properties: e }) => ({}),
  nf = ".js-header",
  ca = "Header",
  sf = () =>
    ot({ componentName: ca, className: nf }).map((e) => {
      const t = { ...e.dataset },
        r = rf({ element: e, properties: t });
      return (
        st({ componentName: ca, element: e, properties: t, methods: r }), r
      );
    }),
  bi = { isOpen: !1 },
  of = (i) => {
    i.classList.add("active"), (document.body.style.overflow = "hidden");
  },
  af = (i) => {
    i.classList.remove("active"), (document.body.style.overflow = "auto");
  },
  lf = ({ element: i, properties: e }) => ({
    open: () => {
      (bi.isOpen = !0), of(i);
    },
    close: () => {
      (bi.isOpen = !1), af(i);
    },
    getState: () => bi,
    setState: (t) => {
      bi.isOpen = t;
    },
  }),
  uf = ".js-header-overlay",
  fa = "HeaderOverlay",
  cf = () =>
    ot({ componentName: fa, className: uf }).map((e) => {
      const t = { ...e.dataset },
        r = lf({ element: e, properties: t });
      return (
        st({ componentName: fa, element: e, properties: t, methods: r }), r
      );
    }),
  ff = ({ element: i, properties: e }) => ({}),
  hf = ".js-menu",
  ha = "Menu",
  df = () =>
    ot({ componentName: ha, className: hf }).map((e) => {
      const t = { ...e.dataset },
        r = ff({ element: e, properties: t });
      return (
        st({ componentName: ha, element: e, properties: t, methods: r }), r
      );
    }),
  pf = ({ element: i, properties: e }) => ({}),
  _f = ".js-header-contact",
  da = "HeaderContact",
  gf = () =>
    ot({ componentName: da, className: _f }).map((e) => {
      const t = { ...e.dataset },
        r = pf({ element: e, properties: t });
      return (
        st({ componentName: da, element: e, properties: t, methods: r }), r
      );
    }),
  mf = ({ element: i, properties: e }) => ({}),
  yf = ".js-languages-selector",
  pa = "LanguagesSelector",
  vf = () =>
    ot({ componentName: pa, className: yf }).map((e) => {
      const t = { ...e.dataset },
        r = mf({ element: e, properties: t });
      return (
        st({ componentName: pa, element: e, properties: t, methods: r }), r
      );
    }),
  wf = ({ element: i, properties: e }) => (
    i
      .querySelector(".js-header-toggle-button")
      .addEventListener("click", () => {
        const { open: r, close: n, getState: s } = kl("HeaderOverlay"),
          { isOpen: o } = s();
        ({ true: n, false: r }[o]());
      }),
    {}
  ),
  Sf = ".js-header-toggle",
  _a = "HeaderToggle",
  xf = () =>
    ot({ componentName: _a, className: Sf }).map((e) => {
      const t = { ...e.dataset },
        r = wf({ element: e, properties: t });
      return (
        st({ componentName: _a, element: e, properties: t, methods: r }), r
      );
    }),
  Tf = ({ element: i, properties: e }) => (
    i.addEventListener("click", () => {
      const { close: t } = kl("HeaderOverlay");
      t();
    }),
    {}
  ),
  bf = ".js-header-close",
  ga = "HeaderClose",
  Cf = () =>
    ot({ componentName: ga, className: bf }).map((e) => {
      const t = { ...e.dataset },
        r = Tf({ element: e, properties: t });
      return (
        st({ componentName: ga, element: e, properties: t, methods: r }), r
      );
    }),
  Of = ({ element: i, properties: e }) => ({}),
  kf = ".js-header-logo",
  ma = "HeaderLogo",
  Pf = () =>
    ot({ componentName: ma, className: kf }).map((e) => {
      const t = { ...e.dataset },
        r = Of({ element: e, properties: t });
      return (
        st({ componentName: ma, element: e, properties: t, methods: r }), r
      );
    }),
  Ms = () => {
    const i = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${i}px`);
  },
  Mf = () => {
    fi.useScroll(({ scrollY: i }) => {
      i === 0 && Ms();
    }),
      fi.useResize(({ verticalResize: i, horizontalResize: e }) => {
        (i && !e) || Ms();
      }),
      Ms();
  };
function Zs() {
  return (
    (Zs = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
          }
          return i;
        }),
    Zs.apply(this, arguments)
  );
}
function ts(i, e, t) {
  return Math.max(i, Math.min(e, t));
}
class Ef {
  advance(e) {
    var t;
    if (!this.isRunning) return;
    let r = !1;
    if (this.lerp)
      (this.value =
        ((n = this.value),
        (s = this.to),
        (1 - (o = 1 - Math.exp(-60 * this.lerp * e))) * n + o * s)),
        Math.round(this.value) === this.to &&
          ((this.value = this.to), (r = !0));
    else {
      this.currentTime += e;
      const a = ts(0, this.currentTime / this.duration, 1);
      r = a >= 1;
      const l = r ? 1 : this.easing(a);
      this.value = this.from + (this.to - this.from) * l;
    }
    var n, s, o;
    (t = this.onUpdate) == null || t.call(this, this.value, { completed: r }),
      r && this.stop();
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(
    e,
    t,
    { lerp: r = 0.1, duration: n = 1, easing: s = (a) => a, onUpdate: o }
  ) {
    (this.from = this.value = e),
      (this.to = t),
      (this.lerp = r),
      (this.duration = n),
      (this.easing = s),
      (this.currentTime = 0),
      (this.isRunning = !0),
      (this.onUpdate = o);
  }
}
class Df {
  constructor({ wrapper: e, content: t, autoResize: r = !0 } = {}) {
    if (
      ((this.resize = () => {
        this.onWrapperResize(), this.onContentResize();
      }),
      (this.onWrapperResize = () => {
        this.wrapper === window
          ? ((this.width = window.innerWidth),
            (this.height = window.innerHeight))
          : ((this.width = this.wrapper.clientWidth),
            (this.height = this.wrapper.clientHeight));
      }),
      (this.onContentResize = () => {
        (this.scrollHeight = this.content.scrollHeight),
          (this.scrollWidth = this.content.scrollWidth);
      }),
      (this.wrapper = e),
      (this.content = t),
      r)
    ) {
      const n = (function (s, o) {
        let a;
        return function () {
          let l = arguments,
            u = this;
          clearTimeout(a),
            (a = setTimeout(function () {
              s.apply(u, l);
            }, 250));
        };
      })(this.resize);
      this.wrapper !== window &&
        ((this.wrapperResizeObserver = new ResizeObserver(n)),
        this.wrapperResizeObserver.observe(this.wrapper)),
        (this.contentResizeObserver = new ResizeObserver(n)),
        this.contentResizeObserver.observe(this.content);
    }
    this.resize();
  }
  destroy() {
    var e, t;
    (e = this.wrapperResizeObserver) == null || e.disconnect(),
      (t = this.contentResizeObserver) == null || t.disconnect();
  }
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height,
    };
  }
}
let Pl = () => ({
  events: {},
  emit(i, ...e) {
    let t = this.events[i] || [];
    for (let r = 0, n = t.length; r < n; r++) t[r](...e);
  },
  on(i, e) {
    var t;
    return (
      ((t = this.events[i]) != null && t.push(e)) || (this.events[i] = [e]),
      () => {
        var r;
        this.events[i] =
          (r = this.events[i]) == null ? void 0 : r.filter((n) => e !== n);
      }
    );
  },
});
class Rf {
  constructor(
    e,
    { wheelMultiplier: t = 1, touchMultiplier: r = 2, normalizeWheel: n = !1 }
  ) {
    (this.onTouchStart = (s) => {
      const { clientX: o, clientY: a } = s.targetTouches
        ? s.targetTouches[0]
        : s;
      (this.touchStart.x = o),
        (this.touchStart.y = a),
        (this.lastDelta = { x: 0, y: 0 });
    }),
      (this.onTouchMove = (s) => {
        const { clientX: o, clientY: a } = s.targetTouches
            ? s.targetTouches[0]
            : s,
          l = -(o - this.touchStart.x) * this.touchMultiplier,
          u = -(a - this.touchStart.y) * this.touchMultiplier;
        (this.touchStart.x = o),
          (this.touchStart.y = a),
          (this.lastDelta = { x: l, y: u }),
          this.emitter.emit("scroll", {
            type: "touch",
            deltaX: l,
            deltaY: u,
            event: s,
          });
      }),
      (this.onTouchEnd = (s) => {
        this.emitter.emit("scroll", {
          type: "touch",
          inertia: !0,
          deltaX: this.lastDelta.x,
          deltaY: this.lastDelta.y,
          event: s,
        });
      }),
      (this.onWheel = (s) => {
        let { deltaX: o, deltaY: a } = s;
        this.normalizeWheel && ((o = ts(-100, o, 100)), (a = ts(-100, a, 100))),
          (o *= this.wheelMultiplier),
          (a *= this.wheelMultiplier),
          this.emitter.emit("scroll", {
            type: "wheel",
            deltaX: o,
            deltaY: a,
            event: s,
          });
      }),
      (this.element = e),
      (this.wheelMultiplier = t),
      (this.touchMultiplier = r),
      (this.normalizeWheel = n),
      (this.touchStart = { x: null, y: null }),
      (this.emitter = Pl()),
      this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.addEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.addEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.addEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      });
  }
  on(e, t) {
    return this.emitter.on(e, t);
  }
  destroy() {
    (this.emitter.events = {}),
      this.element.removeEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.removeEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.removeEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.removeEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      });
  }
}
class Ff {
  constructor({
    direction: e,
    gestureDirection: t,
    mouseMultiplier: r,
    smooth: n,
    wrapper: s = window,
    content: o = document.documentElement,
    wheelEventsTarget: a = s,
    smoothWheel: l = n == null || n,
    smoothTouch: u = !1,
    syncTouch: c = !1,
    syncTouchLerp: d = 0.1,
    touchInertiaMultiplier: h = 35,
    duration: f,
    easing: _ = (x) => Math.min(1, 1.001 - Math.pow(2, -10 * x)),
    lerp: p = f ? null : 0.1,
    infinite: g = !1,
    orientation: y = e ?? "vertical",
    gestureOrientation: v = t ?? "vertical",
    touchMultiplier: T = 1,
    wheelMultiplier: w = r ?? 1,
    normalizeWheel: b = !1,
    autoResize: O = !0,
  } = {}) {
    (this.onVirtualScroll = ({
      type: x,
      inertia: k,
      deltaX: C,
      deltaY: P,
      event: F,
    }) => {
      if (F.ctrlKey) return;
      const M = x === "touch",
        X = x === "wheel";
      if (
        (this.options.gestureOrientation === "vertical" && P === 0) ||
        (this.options.gestureOrientation === "horizontal" && C === 0) ||
        (M &&
          this.options.gestureOrientation === "vertical" &&
          this.scroll === 0 &&
          !this.options.infinite &&
          P <= 0) ||
        F.composedPath().find(
          (R) =>
            (R == null || R.hasAttribute == null
              ? void 0
              : R.hasAttribute("data-lenis-prevent")) ||
            (M &&
              (R == null || R.hasAttribute == null
                ? void 0
                : R.hasAttribute("data-lenis-prevent-touch"))) ||
            (X &&
              (R == null || R.hasAttribute == null
                ? void 0
                : R.hasAttribute("data-lenis-prevent-wheel")))
        )
      )
        return;
      if (this.isStopped || this.isLocked) return void F.preventDefault();
      if (
        ((this.isSmooth =
          ((this.options.smoothTouch || this.options.syncTouch) && M) ||
          (this.options.smoothWheel && X)),
        !this.isSmooth)
      )
        return (this.isScrolling = !1), void this.animate.stop();
      F.preventDefault();
      let N = P;
      this.options.gestureOrientation === "both"
        ? (N = Math.abs(P) > Math.abs(C) ? P : C)
        : this.options.gestureOrientation === "horizontal" && (N = C);
      const I = M && this.options.syncTouch,
        B = M && k && Math.abs(N) > 1;
      B && (N = this.velocity * this.options.touchInertiaMultiplier),
        this.scrollTo(
          this.targetScroll + N,
          Zs({ programmatic: !1 }, I && { lerp: B ? this.syncTouchLerp : 0.4 })
        );
    }),
      (this.onScroll = () => {
        if (!this.isScrolling) {
          const x = this.animatedScroll;
          (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.velocity = 0),
            (this.direction = Math.sign(this.animatedScroll - x)),
            this.emit();
        }
      }),
      e &&
        console.warn(
          "Lenis: `direction` option is deprecated, use `orientation` instead"
        ),
      t &&
        console.warn(
          "Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"
        ),
      r &&
        console.warn(
          "Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"
        ),
      n &&
        console.warn(
          "Lenis: `smooth` option is deprecated, use `smoothWheel` instead"
        ),
      (window.lenisVersion = "1.0.15"),
      (s !== document.documentElement && s !== document.body) || (s = window),
      (this.options = {
        wrapper: s,
        content: o,
        wheelEventsTarget: a,
        smoothWheel: l,
        smoothTouch: u,
        syncTouch: c,
        syncTouchLerp: d,
        touchInertiaMultiplier: h,
        duration: f,
        easing: _,
        lerp: p,
        infinite: g,
        gestureOrientation: v,
        orientation: y,
        touchMultiplier: T,
        wheelMultiplier: w,
        normalizeWheel: b,
        autoResize: O,
      }),
      (this.dimensions = new Df({ wrapper: s, content: o, autoResize: O })),
      this.rootElement.classList.add("lenis"),
      (this.velocity = 0),
      (this.isStopped = !1),
      (this.isSmooth = l || u),
      (this.isScrolling = !1),
      (this.targetScroll = this.animatedScroll = this.actualScroll),
      (this.animate = new Ef()),
      (this.emitter = Pl()),
      this.options.wrapper.addEventListener("scroll", this.onScroll, {
        passive: !1,
      }),
      (this.virtualScroll = new Rf(a, {
        touchMultiplier: T,
        wheelMultiplier: w,
        normalizeWheel: b,
      })),
      this.virtualScroll.on("scroll", this.onVirtualScroll);
  }
  destroy() {
    (this.emitter.events = {}),
      this.options.wrapper.removeEventListener("scroll", this.onScroll, {
        passive: !1,
      }),
      this.virtualScroll.destroy(),
      this.dimensions.destroy(),
      this.rootElement.classList.remove("lenis"),
      this.rootElement.classList.remove("lenis-smooth"),
      this.rootElement.classList.remove("lenis-scrolling"),
      this.rootElement.classList.remove("lenis-stopped");
  }
  on(e, t) {
    return this.emitter.on(e, t);
  }
  off(e, t) {
    var r;
    this.emitter.events[e] =
      (r = this.emitter.events[e]) == null ? void 0 : r.filter((n) => t !== n);
  }
  setScroll(e) {
    this.isHorizontal
      ? (this.rootElement.scrollLeft = e)
      : (this.rootElement.scrollTop = e);
  }
  resize() {
    this.dimensions.resize();
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  reset() {
    (this.isLocked = !1),
      (this.isScrolling = !1),
      (this.velocity = 0),
      this.animate.stop();
  }
  start() {
    (this.isStopped = !1), this.reset();
  }
  stop() {
    (this.isStopped = !0), this.animate.stop(), this.reset();
  }
  raf(e) {
    const t = e - (this.time || e);
    (this.time = e), this.animate.advance(0.001 * t);
  }
  scrollTo(
    e,
    {
      offset: t = 0,
      immediate: r = !1,
      lock: n = !1,
      duration: s = this.options.duration,
      easing: o = this.options.easing,
      lerp: a = !s && this.options.lerp,
      onComplete: l = null,
      force: u = !1,
      programmatic: c = !0,
    } = {}
  ) {
    if (!this.isStopped || u) {
      if (["top", "left", "start"].includes(e)) e = 0;
      else if (["bottom", "right", "end"].includes(e)) e = this.limit;
      else {
        var d;
        let h;
        if (
          (typeof e == "string"
            ? (h = document.querySelector(e))
            : (d = e) != null && d.nodeType && (h = e),
          h)
        ) {
          if (this.options.wrapper !== window) {
            const _ = this.options.wrapper.getBoundingClientRect();
            t -= this.isHorizontal ? _.left : _.top;
          }
          const f = h.getBoundingClientRect();
          e = (this.isHorizontal ? f.left : f.top) + this.animatedScroll;
        }
      }
      if (typeof e == "number") {
        if (
          ((e += t),
          (e = Math.round(e)),
          this.options.infinite
            ? c && (this.targetScroll = this.animatedScroll = this.scroll)
            : (e = ts(0, e, this.limit)),
          r)
        )
          return (
            (this.animatedScroll = this.targetScroll = e),
            this.setScroll(this.scroll),
            this.reset(),
            this.emit(),
            void (l == null || l())
          );
        if (!c) {
          if (e === this.targetScroll) return;
          this.targetScroll = e;
        }
        this.animate.fromTo(this.animatedScroll, e, {
          duration: s,
          easing: o,
          lerp: a,
          onUpdate: (h, { completed: f }) => {
            n && (this.isLocked = !0),
              (this.isScrolling = !0),
              (this.velocity = h - this.animatedScroll),
              (this.direction = Math.sign(this.velocity)),
              (this.animatedScroll = h),
              this.setScroll(this.scroll),
              c && (this.targetScroll = h),
              f &&
                (n && (this.isLocked = !1),
                requestAnimationFrame(() => {
                  this.isScrolling = !1;
                }),
                (this.velocity = 0),
                l == null || l()),
              this.emit();
          },
        });
      }
    }
  }
  get rootElement() {
    return this.options.wrapper === window
      ? this.options.content
      : this.options.wrapper;
  }
  get limit() {
    return this.isHorizontal
      ? this.dimensions.limit.x
      : this.dimensions.limit.y;
  }
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  get actualScroll() {
    return this.isHorizontal
      ? this.rootElement.scrollLeft
      : this.rootElement.scrollTop;
  }
  get scroll() {
    return this.options.infinite
      ? ((this.animatedScroll % (e = this.limit)) + e) % e
      : this.animatedScroll;
    var e;
  }
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  get isSmooth() {
    return this.__isSmooth;
  }
  set isSmooth(e) {
    this.__isSmooth !== e &&
      (this.rootElement.classList.toggle("lenis-smooth", e),
      (this.__isSmooth = e));
  }
  get isScrolling() {
    return this.__isScrolling;
  }
  set isScrolling(e) {
    this.__isScrolling !== e &&
      (this.rootElement.classList.toggle("lenis-scrolling", e),
      (this.__isScrolling = e));
  }
  get isStopped() {
    return this.__isStopped;
  }
  set isStopped(e) {
    this.__isStopped !== e &&
      (this.rootElement.classList.toggle("lenis-stopped", e),
      (this.__isStopped = e));
  }
}
function ur(i) {
  if (i === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return i;
}
function Ml(i, e) {
  (i.prototype = Object.create(e.prototype)),
    (i.prototype.constructor = i),
    (i.__proto__ = e);
}
/*!
 * GSAP 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var kt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Rn = { duration: 0.5, overwrite: !1, delay: 0 },
  ko,
  Qe,
  ge,
  Ft = 1e8,
  ne = 1 / Ft,
  Js = Math.PI * 2,
  Af = Js / 4,
  Nf = 0,
  El = Math.sqrt,
  Lf = Math.cos,
  If = Math.sin,
  Ne = function (e) {
    return typeof e == "string";
  },
  me = function (e) {
    return typeof e == "function";
  },
  gr = function (e) {
    return typeof e == "number";
  },
  Po = function (e) {
    return typeof e > "u";
  },
  sr = function (e) {
    return typeof e == "object";
  },
  ft = function (e) {
    return e !== !1;
  },
  Mo = function () {
    return typeof window < "u";
  },
  Ci = function (e) {
    return me(e) || Ne(e);
  },
  Dl =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  Ke = Array.isArray,
  js = /(?:-?\.?\d|\.)+/gi,
  Rl = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  xn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Es = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Fl = /[+-]=-?[.\d]+/,
  Al = /[^,'"\[\]\s]+/gi,
  zf = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  de,
  Et,
  eo,
  Eo,
  Pt = {},
  rs = {},
  Nl,
  Ll = function (e) {
    return (rs = an(e, Pt)) && pt;
  },
  Do = function (e, t) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      t,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  ns = function (e, t) {
    return !t && console.warn(e);
  },
  Il = function (e, t) {
    return (e && (Pt[e] = t) && rs && (rs[e] = t)) || Pt;
  },
  hi = function () {
    return 0;
  },
  Bf = { suppressEvents: !0, isStart: !0, kill: !1 },
  Vi = { suppressEvents: !0, kill: !1 },
  $f = { suppressEvents: !0 },
  Ro = {},
  kr = [],
  to = {},
  zl,
  bt = {},
  Ds = {},
  ya = 30,
  Wi = [],
  Fo = "",
  Ao = function (e) {
    var t = e[0],
      r,
      n;
    if ((sr(t) || me(t) || (e = [e]), !(r = (t._gsap || {}).harness))) {
      for (n = Wi.length; n-- && !Wi[n].targetTest(t); );
      r = Wi[n];
    }
    for (n = e.length; n--; )
      (e[n] && (e[n]._gsap || (e[n]._gsap = new lu(e[n], r)))) ||
        e.splice(n, 1);
    return e;
  },
  jr = function (e) {
    return e._gsap || Ao(At(e))[0]._gsap;
  },
  Bl = function (e, t, r) {
    return (r = e[t]) && me(r)
      ? e[t]()
      : (Po(r) && e.getAttribute && e.getAttribute(t)) || r;
  },
  ht = function (e, t) {
    return (e = e.split(",")).forEach(t) || e;
  },
  Se = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  We = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  On = function (e, t) {
    var r = t.charAt(0),
      n = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      r === "+" ? e + n : r === "-" ? e - n : r === "*" ? e * n : e / n
    );
  },
  Vf = function (e, t) {
    for (var r = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < r; );
    return n < r;
  },
  is = function () {
    var e = kr.length,
      t = kr.slice(0),
      r,
      n;
    for (to = {}, kr.length = 0, r = 0; r < e; r++)
      (n = t[r]),
        n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
  },
  $l = function (e, t, r, n) {
    kr.length && !Qe && is(),
      e.render(t, r, n || (Qe && t < 0 && (e._initted || e._startAt))),
      kr.length && !Qe && is();
  },
  Vl = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(Al).length < 2
      ? t
      : Ne(e)
      ? e.trim()
      : e;
  },
  Wl = function (e) {
    return e;
  },
  zt = function (e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  },
  Wf = function (e) {
    return function (t, r) {
      for (var n in r)
        n in t || (n === "duration" && e) || n === "ease" || (t[n] = r[n]);
    };
  },
  an = function (e, t) {
    for (var r in t) e[r] = t[r];
    return e;
  },
  va = function i(e, t) {
    for (var r in t)
      r !== "__proto__" &&
        r !== "constructor" &&
        r !== "prototype" &&
        (e[r] = sr(t[r]) ? i(e[r] || (e[r] = {}), t[r]) : t[r]);
    return e;
  },
  ss = function (e, t) {
    var r = {},
      n;
    for (n in e) n in t || (r[n] = e[n]);
    return r;
  },
  jn = function (e) {
    var t = e.parent || de,
      r = e.keyframes ? Wf(Ke(e.keyframes)) : zt;
    if (ft(e.inherit))
      for (; t; ) r(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  },
  Yf = function (e, t) {
    for (var r = e.length, n = r === t.length; n && r-- && e[r] === t[r]; );
    return r < 0;
  },
  Yl = function (e, t, r, n, s) {
    r === void 0 && (r = "_first"), n === void 0 && (n = "_last");
    var o = e[n],
      a;
    if (s) for (a = t[s]; o && o[s] > a; ) o = o._prev;
    return (
      o ? ((t._next = o._next), (o._next = t)) : ((t._next = e[r]), (e[r] = t)),
      t._next ? (t._next._prev = t) : (e[n] = t),
      (t._prev = o),
      (t.parent = t._dp = e),
      t
    );
  },
  gs = function (e, t, r, n) {
    r === void 0 && (r = "_first"), n === void 0 && (n = "_last");
    var s = t._prev,
      o = t._next;
    s ? (s._next = o) : e[r] === t && (e[r] = o),
      o ? (o._prev = s) : e[n] === t && (e[n] = s),
      (t._next = t._prev = t.parent = null);
  },
  Er = function (e, t) {
    e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  },
  en = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var r = e; r; ) (r._dirty = 1), (r = r.parent);
    return e;
  },
  qf = function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  },
  ro = function (e, t, r, n) {
    return (
      e._startAt &&
      (Qe
        ? e._startAt.revert(Vi)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, n))
    );
  },
  Xf = function i(e) {
    return !e || (e._ts && i(e.parent));
  },
  wa = function (e) {
    return e._repeat ? Fn(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  Fn = function (e, t) {
    var r = Math.floor((e /= t));
    return e && r === e ? r - 1 : r;
  },
  os = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  ms = function (e) {
    return (e._end = We(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || ne) || 0)
    ));
  },
  ys = function (e, t) {
    var r = e._dp;
    return (
      r &&
        r.smoothChildTiming &&
        e._ts &&
        ((e._start = We(
          r._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        ms(e),
        r._dirty || en(r, e)),
      e
    );
  },
  ql = function (e, t) {
    var r;
    if (
      ((t._time || (t._initted && !t._dur)) &&
        ((r = os(e.rawTime(), t)),
        (!t._dur || Si(0, t.totalDuration(), r) - t._tTime > ne) &&
          t.render(r, !0)),
      en(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (r = e; r._dp; )
          r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
      e._zTime = -ne;
    }
  },
  tr = function (e, t, r, n) {
    return (
      t.parent && Er(t),
      (t._start = We(
        (gr(r) ? r : r || e !== de ? Mt(e, r, t) : e._time) + t._delay
      )),
      (t._end = We(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      Yl(e, t, "_first", "_last", e._sort ? "_start" : 0),
      no(t) || (e._recent = t),
      n || ql(e, t),
      e._ts < 0 && ys(e, e._tTime),
      e
    );
  },
  Xl = function (e, t) {
    return (
      (Pt.ScrollTrigger || Do("scrollTrigger", t)) &&
      Pt.ScrollTrigger.create(t, e)
    );
  },
  Hl = function (e, t, r, n, s) {
    if ((Lo(e, t, s), !e._initted)) return 1;
    if (
      !r &&
      e._pt &&
      !Qe &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      zl !== Ct.frame
    )
      return kr.push(e), (e._lazy = [s, n]), 1;
  },
  Hf = function i(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || i(t));
  },
  no = function (e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  },
  Uf = function (e, t, r, n) {
    var s = e.ratio,
      o =
        t < 0 ||
        (!t &&
          ((!e._start && Hf(e) && !(!e._initted && no(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !no(e))))
          ? 0
          : 1,
      a = e._rDelay,
      l = 0,
      u,
      c,
      d;
    if (
      (a &&
        e._repeat &&
        ((l = Si(0, e._tDur, t)),
        (c = Fn(l, a)),
        e._yoyo && c & 1 && (o = 1 - o),
        c !== Fn(e._tTime, a) &&
          ((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
      o !== s || Qe || n || e._zTime === ne || (!t && e._zTime))
    ) {
      if (!e._initted && Hl(e, t, n, r, l)) return;
      for (
        d = e._zTime,
          e._zTime = t || (r ? ne : 0),
          r || (r = t && !d),
          e.ratio = o,
          e._from && (o = 1 - o),
          e._time = 0,
          e._tTime = l,
          u = e._pt;
        u;

      )
        u.r(o, u.d), (u = u._next);
      t < 0 && ro(e, t, r, !0),
        e._onUpdate && !r && Nt(e, "onUpdate"),
        l && e._repeat && !r && e.parent && Nt(e, "onRepeat"),
        (t >= e._tDur || t < 0) &&
          e.ratio === o &&
          (o && Er(e, 1),
          !r &&
            !Qe &&
            (Nt(e, o ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  },
  Gf = function (e, t, r) {
    var n;
    if (r > t)
      for (n = e._first; n && n._start <= r; ) {
        if (n.data === "isPause" && n._start > t) return n;
        n = n._next;
      }
    else
      for (n = e._last; n && n._start >= r; ) {
        if (n.data === "isPause" && n._start < t) return n;
        n = n._prev;
      }
  },
  An = function (e, t, r, n) {
    var s = e._repeat,
      o = We(t) || 0,
      a = e._tTime / e._tDur;
    return (
      a && !n && (e._time *= o / e._dur),
      (e._dur = o),
      (e._tDur = s ? (s < 0 ? 1e10 : We(o * (s + 1) + e._rDelay * s)) : o),
      a > 0 && !n && ys(e, (e._tTime = e._tDur * a)),
      e.parent && ms(e),
      r || en(e.parent, e),
      e
    );
  },
  Sa = function (e) {
    return e instanceof rt ? en(e) : An(e, e._dur);
  },
  Qf = { _start: 0, endTime: hi, totalDuration: hi },
  Mt = function i(e, t, r) {
    var n = e.labels,
      s = e._recent || Qf,
      o = e.duration() >= Ft ? s.endTime(!1) : e._dur,
      a,
      l,
      u;
    return Ne(t) && (isNaN(t) || t in n)
      ? ((l = t.charAt(0)),
        (u = t.substr(-1) === "%"),
        (a = t.indexOf("=")),
        l === "<" || l === ">"
          ? (a >= 0 && (t = t.replace(/=/, "")),
            (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
              (parseFloat(t.substr(1)) || 0) *
                (u ? (a < 0 ? s : r).totalDuration() / 100 : 1))
          : a < 0
          ? (t in n || (n[t] = o), n[t])
          : ((l = parseFloat(t.charAt(a - 1) + t.substr(a + 1))),
            u && r && (l = (l / 100) * (Ke(r) ? r[0] : r).totalDuration()),
            a > 1 ? i(e, t.substr(0, a - 1), r) + l : o + l))
      : t == null
      ? o
      : +t;
  },
  ei = function (e, t, r) {
    var n = gr(t[1]),
      s = (n ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[s],
      a,
      l;
    if ((n && (o.duration = t[1]), (o.parent = r), e)) {
      for (a = o, l = r; l && !("immediateRender" in a); )
        (a = l.vars.defaults || {}), (l = ft(l.vars.inherit) && l.parent);
      (o.immediateRender = ft(a.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
    }
    return new be(t[0], o, t[s + 1]);
  },
  Ar = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  Si = function (e, t, r) {
    return r < e ? e : r > t ? t : r;
  },
  Ue = function (e, t) {
    return !Ne(e) || !(t = zf.exec(e)) ? "" : t[1];
  },
  Kf = function (e, t, r) {
    return Ar(r, function (n) {
      return Si(e, t, n);
    });
  },
  io = [].slice,
  Ul = function (e, t) {
    return (
      e &&
      sr(e) &&
      "length" in e &&
      ((!t && !e.length) || (e.length - 1 in e && sr(e[0]))) &&
      !e.nodeType &&
      e !== Et
    );
  },
  Zf = function (e, t, r) {
    return (
      r === void 0 && (r = []),
      e.forEach(function (n) {
        var s;
        return (Ne(n) && !t) || Ul(n, 1)
          ? (s = r).push.apply(s, At(n))
          : r.push(n);
      }) || r
    );
  },
  At = function (e, t, r) {
    return ge && !t && ge.selector
      ? ge.selector(e)
      : Ne(e) && !r && (eo || !Nn())
      ? io.call((t || Eo).querySelectorAll(e), 0)
      : Ke(e)
      ? Zf(e, r)
      : Ul(e)
      ? io.call(e, 0)
      : e
      ? [e]
      : [];
  },
  so = function (e) {
    return (
      (e = At(e)[0] || ns("Invalid scope") || {}),
      function (t) {
        var r = e.current || e.nativeElement || e;
        return At(
          t,
          r.querySelectorAll
            ? r
            : r === e
            ? ns("Invalid scope") || Eo.createElement("div")
            : e
        );
      }
    );
  },
  Gl = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Ql = function (e) {
    if (me(e)) return e;
    var t = sr(e) ? e : { each: e },
      r = tn(t.ease),
      n = t.from || 0,
      s = parseFloat(t.base) || 0,
      o = {},
      a = n > 0 && n < 1,
      l = isNaN(n) || a,
      u = t.axis,
      c = n,
      d = n;
    return (
      Ne(n)
        ? (c = d = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
        : !a && l && ((c = n[0]), (d = n[1])),
      function (h, f, _) {
        var p = (_ || t).length,
          g = o[p],
          y,
          v,
          T,
          w,
          b,
          O,
          x,
          k,
          C;
        if (!g) {
          if (((C = t.grid === "auto" ? 0 : (t.grid || [1, Ft])[1]), !C)) {
            for (
              x = -Ft;
              x < (x = _[C++].getBoundingClientRect().left) && C < p;

            );
            C--;
          }
          for (
            g = o[p] = [],
              y = l ? Math.min(C, p) * c - 0.5 : n % C,
              v = C === Ft ? 0 : l ? (p * d) / C - 0.5 : (n / C) | 0,
              x = 0,
              k = Ft,
              O = 0;
            O < p;
            O++
          )
            (T = (O % C) - y),
              (w = v - ((O / C) | 0)),
              (g[O] = b = u ? Math.abs(u === "y" ? w : T) : El(T * T + w * w)),
              b > x && (x = b),
              b < k && (k = b);
          n === "random" && Gl(g),
            (g.max = x - k),
            (g.min = k),
            (g.v = p =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (C > p
                    ? p - 1
                    : u
                    ? u === "y"
                      ? p / C
                      : C
                    : Math.max(C, p / C)) ||
                0) * (n === "edges" ? -1 : 1)),
            (g.b = p < 0 ? s - p : s),
            (g.u = Ue(t.amount || t.each) || 0),
            (r = r && p < 0 ? su(r) : r);
        }
        return (
          (p = (g[h] - g.min) / g.max || 0),
          We(g.b + (r ? r(p) : p) * g.v) + g.u
        );
      }
    );
  },
  oo = function (e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (r) {
      var n = We(Math.round(parseFloat(r) / e) * e * t);
      return (n - (n % 1)) / t + (gr(r) ? 0 : Ue(r));
    };
  },
  Kl = function (e, t) {
    var r = Ke(e),
      n,
      s;
    return (
      !r &&
        sr(e) &&
        ((n = r = e.radius || Ft),
        e.values
          ? ((e = At(e.values)), (s = !gr(e[0])) && (n *= n))
          : (e = oo(e.increment))),
      Ar(
        t,
        r
          ? me(e)
            ? function (o) {
                return (s = e(o)), Math.abs(s - o) <= n ? s : o;
              }
            : function (o) {
                for (
                  var a = parseFloat(s ? o.x : o),
                    l = parseFloat(s ? o.y : 0),
                    u = Ft,
                    c = 0,
                    d = e.length,
                    h,
                    f;
                  d--;

                )
                  s
                    ? ((h = e[d].x - a), (f = e[d].y - l), (h = h * h + f * f))
                    : (h = Math.abs(e[d] - a)),
                    h < u && ((u = h), (c = d));
                return (
                  (c = !n || u <= n ? e[c] : o),
                  s || c === o || gr(o) ? c : c + Ue(o)
                );
              }
          : oo(e)
      )
    );
  },
  Zl = function (e, t, r, n) {
    return Ar(Ke(e) ? !t : r === !0 ? !!(r = 0) : !n, function () {
      return Ke(e)
        ? e[~~(Math.random() * e.length)]
        : (r = r || 1e-5) &&
            (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - r / 2 + Math.random() * (t - e + r * 0.99)) / r) *
                r *
                n
            ) / n;
    });
  },
  Jf = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return function (n) {
      return t.reduce(function (s, o) {
        return o(s);
      }, n);
    };
  },
  jf = function (e, t) {
    return function (r) {
      return e(parseFloat(r)) + (t || Ue(r));
    };
  },
  eh = function (e, t, r) {
    return jl(e, t, 0, 1, r);
  },
  Jl = function (e, t, r) {
    return Ar(r, function (n) {
      return e[~~t(n)];
    });
  },
  th = function i(e, t, r) {
    var n = t - e;
    return Ke(e)
      ? Jl(e, i(0, e.length), t)
      : Ar(r, function (s) {
          return ((n + ((s - e) % n)) % n) + e;
        });
  },
  rh = function i(e, t, r) {
    var n = t - e,
      s = n * 2;
    return Ke(e)
      ? Jl(e, i(0, e.length - 1), t)
      : Ar(r, function (o) {
          return (o = (s + ((o - e) % s)) % s || 0), e + (o > n ? s - o : o);
        });
  },
  di = function (e) {
    for (var t = 0, r = "", n, s, o, a; ~(n = e.indexOf("random(", t)); )
      (o = e.indexOf(")", n)),
        (a = e.charAt(n + 7) === "["),
        (s = e.substr(n + 7, o - n - 7).match(a ? Al : js)),
        (r +=
          e.substr(t, n - t) + Zl(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
        (t = o + 1);
    return r + e.substr(t, e.length - t);
  },
  jl = function (e, t, r, n, s) {
    var o = t - e,
      a = n - r;
    return Ar(s, function (l) {
      return r + (((l - e) / o) * a || 0);
    });
  },
  nh = function i(e, t, r, n) {
    var s = isNaN(e + t)
      ? 0
      : function (f) {
          return (1 - f) * e + f * t;
        };
    if (!s) {
      var o = Ne(e),
        a = {},
        l,
        u,
        c,
        d,
        h;
      if ((r === !0 && (n = 1) && (r = null), o))
        (e = { p: e }), (t = { p: t });
      else if (Ke(e) && !Ke(t)) {
        for (c = [], d = e.length, h = d - 2, u = 1; u < d; u++)
          c.push(i(e[u - 1], e[u]));
        d--,
          (s = function (_) {
            _ *= d;
            var p = Math.min(h, ~~_);
            return c[p](_ - p);
          }),
          (r = t);
      } else n || (e = an(Ke(e) ? [] : {}, e));
      if (!c) {
        for (l in t) No.call(a, e, l, "get", t[l]);
        s = function (_) {
          return Bo(_, a) || (o ? e.p : e);
        };
      }
    }
    return Ar(r, s);
  },
  xa = function (e, t, r) {
    var n = e.labels,
      s = Ft,
      o,
      a,
      l;
    for (o in n)
      (a = n[o] - t),
        a < 0 == !!r && a && s > (a = Math.abs(a)) && ((l = o), (s = a));
    return l;
  },
  Nt = function (e, t, r) {
    var n = e.vars,
      s = n[t],
      o = ge,
      a = e._ctx,
      l,
      u,
      c;
    if (s)
      return (
        (l = n[t + "Params"]),
        (u = n.callbackScope || e),
        r && kr.length && is(),
        a && (ge = a),
        (c = l ? s.apply(u, l) : s.call(u)),
        (ge = o),
        c
      );
  },
  Un = function (e) {
    return (
      Er(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!Qe),
      e.progress() < 1 && Nt(e, "onInterrupt"),
      e
    );
  },
  Tn,
  eu = [],
  tu = function (e) {
    if (Mo() && e) {
      e = (!e.name && e.default) || e;
      var t = e.name,
        r = me(e),
        n =
          t && !r && e.init
            ? function () {
                this._props = [];
              }
            : e,
        s = {
          init: hi,
          render: Bo,
          add: No,
          kill: vh,
          modifier: yh,
          rawVars: 0,
        },
        o = { targetTest: 0, get: 0, getSetter: zo, aliases: {}, register: 0 };
      if ((Nn(), e !== n)) {
        if (bt[t]) return;
        zt(n, zt(ss(e, s), o)),
          an(n.prototype, an(s, ss(e, o))),
          (bt[(n.prop = t)] = n),
          e.targetTest && (Wi.push(n), (Ro[t] = 1)),
          (t =
            (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
            "Plugin");
      }
      Il(t, n), e.register && e.register(pt, n, dt);
    } else e && eu.push(e);
  },
  re = 255,
  Gn = {
    aqua: [0, re, re],
    lime: [0, re, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, re],
    navy: [0, 0, 128],
    white: [re, re, re],
    olive: [128, 128, 0],
    yellow: [re, re, 0],
    orange: [re, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [re, 0, 0],
    pink: [re, 192, 203],
    cyan: [0, re, re],
    transparent: [re, re, re, 0],
  },
  Rs = function (e, t, r) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (r - t) * e * 6
        : e < 0.5
        ? r
        : e * 3 < 2
        ? t + (r - t) * (2 / 3 - e) * 6
        : t) *
        re +
        0.5) |
        0
    );
  },
  ru = function (e, t, r) {
    var n = e ? (gr(e) ? [e >> 16, (e >> 8) & re, e & re] : 0) : Gn.black,
      s,
      o,
      a,
      l,
      u,
      c,
      d,
      h,
      f,
      _;
    if (!n) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Gn[e]))
        n = Gn[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((s = e.charAt(1)),
            (o = e.charAt(2)),
            (a = e.charAt(3)),
            (e =
              "#" +
              s +
              s +
              o +
              o +
              a +
              a +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (n = parseInt(e.substr(1, 6), 16)),
            [n >> 16, (n >> 8) & re, n & re, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (n = [e >> 16, (e >> 8) & re, e & re]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((n = _ = e.match(js)), !t))
          (l = (+n[0] % 360) / 360),
            (u = +n[1] / 100),
            (c = +n[2] / 100),
            (o = c <= 0.5 ? c * (u + 1) : c + u - c * u),
            (s = c * 2 - o),
            n.length > 3 && (n[3] *= 1),
            (n[0] = Rs(l + 1 / 3, s, o)),
            (n[1] = Rs(l, s, o)),
            (n[2] = Rs(l - 1 / 3, s, o));
        else if (~e.indexOf("="))
          return (n = e.match(Rl)), r && n.length < 4 && (n[3] = 1), n;
      } else n = e.match(js) || Gn.transparent;
      n = n.map(Number);
    }
    return (
      t &&
        !_ &&
        ((s = n[0] / re),
        (o = n[1] / re),
        (a = n[2] / re),
        (d = Math.max(s, o, a)),
        (h = Math.min(s, o, a)),
        (c = (d + h) / 2),
        d === h
          ? (l = u = 0)
          : ((f = d - h),
            (u = c > 0.5 ? f / (2 - d - h) : f / (d + h)),
            (l =
              d === s
                ? (o - a) / f + (o < a ? 6 : 0)
                : d === o
                ? (a - s) / f + 2
                : (s - o) / f + 4),
            (l *= 60)),
        (n[0] = ~~(l + 0.5)),
        (n[1] = ~~(u * 100 + 0.5)),
        (n[2] = ~~(c * 100 + 0.5))),
      r && n.length < 4 && (n[3] = 1),
      n
    );
  },
  nu = function (e) {
    var t = [],
      r = [],
      n = -1;
    return (
      e.split(Pr).forEach(function (s) {
        var o = s.match(xn) || [];
        t.push.apply(t, o), r.push((n += o.length + 1));
      }),
      (t.c = r),
      t
    );
  },
  Ta = function (e, t, r) {
    var n = "",
      s = (e + n).match(Pr),
      o = t ? "hsla(" : "rgba(",
      a = 0,
      l,
      u,
      c,
      d;
    if (!s) return e;
    if (
      ((s = s.map(function (h) {
        return (
          (h = ru(h, t, 1)) &&
          o +
            (t ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) +
            ")"
        );
      })),
      r && ((c = nu(e)), (l = r.c), l.join(n) !== c.c.join(n)))
    )
      for (u = e.replace(Pr, "1").split(xn), d = u.length - 1; a < d; a++)
        n +=
          u[a] +
          (~l.indexOf(a)
            ? s.shift() || o + "0,0,0,0)"
            : (c.length ? c : s.length ? s : r).shift());
    if (!u)
      for (u = e.split(Pr), d = u.length - 1; a < d; a++) n += u[a] + s[a];
    return n + u[d];
  },
  Pr = (function () {
    var i =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in Gn) i += "|" + e + "\\b";
    return new RegExp(i + ")", "gi");
  })(),
  ih = /hsl[a]?\(/,
  iu = function (e) {
    var t = e.join(" "),
      r;
    if (((Pr.lastIndex = 0), Pr.test(t)))
      return (
        (r = ih.test(t)),
        (e[1] = Ta(e[1], r)),
        (e[0] = Ta(e[0], r, nu(e[1]))),
        !0
      );
  },
  pi,
  Ct = (function () {
    var i = Date.now,
      e = 500,
      t = 33,
      r = i(),
      n = r,
      s = 1e3 / 240,
      o = s,
      a = [],
      l,
      u,
      c,
      d,
      h,
      f,
      _ = function p(g) {
        var y = i() - n,
          v = g === !0,
          T,
          w,
          b,
          O;
        if (
          (y > e && (r += y - t),
          (n += y),
          (b = n - r),
          (T = b - o),
          (T > 0 || v) &&
            ((O = ++d.frame),
            (h = b - d.time * 1e3),
            (d.time = b = b / 1e3),
            (o += T + (T >= s ? 4 : s - T)),
            (w = 1)),
          v || (l = u(p)),
          w)
        )
          for (f = 0; f < a.length; f++) a[f](b, h, O, g);
      };
    return (
      (d = {
        time: 0,
        frame: 0,
        tick: function () {
          _(!0);
        },
        deltaRatio: function (g) {
          return h / (1e3 / (g || 60));
        },
        wake: function () {
          Nl &&
            (!eo &&
              Mo() &&
              ((Et = eo = window),
              (Eo = Et.document || {}),
              (Pt.gsap = pt),
              (Et.gsapVersions || (Et.gsapVersions = [])).push(pt.version),
              Ll(rs || Et.GreenSockGlobals || (!Et.gsap && Et) || {}),
              (c = Et.requestAnimationFrame),
              eu.forEach(tu)),
            l && d.sleep(),
            (u =
              c ||
              function (g) {
                return setTimeout(g, (o - d.time * 1e3 + 1) | 0);
              }),
            (pi = 1),
            _(2));
        },
        sleep: function () {
          (c ? Et.cancelAnimationFrame : clearTimeout)(l), (pi = 0), (u = hi);
        },
        lagSmoothing: function (g, y) {
          (e = g || 1 / 0), (t = Math.min(y || 33, e));
        },
        fps: function (g) {
          (s = 1e3 / (g || 240)), (o = d.time * 1e3 + s);
        },
        add: function (g, y, v) {
          var T = y
            ? function (w, b, O, x) {
                g(w, b, O, x), d.remove(T);
              }
            : g;
          return d.remove(g), a[v ? "unshift" : "push"](T), Nn(), T;
        },
        remove: function (g, y) {
          ~(y = a.indexOf(g)) && a.splice(y, 1) && f >= y && f--;
        },
        _listeners: a,
      }),
      d
    );
  })(),
  Nn = function () {
    return !pi && Ct.wake();
  },
  G = {},
  sh = /^[\d.\-M][\d.\-,\s]/,
  oh = /["']/g,
  ah = function (e) {
    for (
      var t = {},
        r = e.substr(1, e.length - 3).split(":"),
        n = r[0],
        s = 1,
        o = r.length,
        a,
        l,
        u;
      s < o;
      s++
    )
      (l = r[s]),
        (a = s !== o - 1 ? l.lastIndexOf(",") : l.length),
        (u = l.substr(0, a)),
        (t[n] = isNaN(u) ? u.replace(oh, "").trim() : +u),
        (n = l.substr(a + 1).trim());
    return t;
  },
  lh = function (e) {
    var t = e.indexOf("(") + 1,
      r = e.indexOf(")"),
      n = e.indexOf("(", t);
    return e.substring(t, ~n && n < r ? e.indexOf(")", r + 1) : r);
  },
  uh = function (e) {
    var t = (e + "").split("("),
      r = G[t[0]];
    return r && t.length > 1 && r.config
      ? r.config.apply(
          null,
          ~e.indexOf("{") ? [ah(t[1])] : lh(e).split(",").map(Vl)
        )
      : G._CE && sh.test(e)
      ? G._CE("", e)
      : r;
  },
  su = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  ou = function i(e, t) {
    for (var r = e._first, n; r; )
      r instanceof rt
        ? i(r, t)
        : r.vars.yoyoEase &&
          (!r._yoyo || !r._repeat) &&
          r._yoyo !== t &&
          (r.timeline
            ? i(r.timeline, t)
            : ((n = r._ease),
              (r._ease = r._yEase),
              (r._yEase = n),
              (r._yoyo = t))),
        (r = r._next);
  },
  tn = function (e, t) {
    return (e && (me(e) ? e : G[e] || uh(e))) || t;
  },
  fn = function (e, t, r, n) {
    r === void 0 &&
      (r = function (l) {
        return 1 - t(1 - l);
      }),
      n === void 0 &&
        (n = function (l) {
          return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
        });
    var s = { easeIn: t, easeOut: r, easeInOut: n },
      o;
    return (
      ht(e, function (a) {
        (G[a] = Pt[a] = s), (G[(o = a.toLowerCase())] = r);
        for (var l in s)
          G[
            o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = G[a + "." + l] = s[l];
      }),
      s
    );
  },
  au = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  Fs = function i(e, t, r) {
    var n = t >= 1 ? t : 1,
      s = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      o = (s / Js) * (Math.asin(1 / n) || 0),
      a = function (c) {
        return c === 1 ? 1 : n * Math.pow(2, -10 * c) * If((c - o) * s) + 1;
      },
      l =
        e === "out"
          ? a
          : e === "in"
          ? function (u) {
              return 1 - a(1 - u);
            }
          : au(a);
    return (
      (s = Js / s),
      (l.config = function (u, c) {
        return i(e, u, c);
      }),
      l
    );
  },
  As = function i(e, t) {
    t === void 0 && (t = 1.70158);
    var r = function (o) {
        return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
      },
      n =
        e === "out"
          ? r
          : e === "in"
          ? function (s) {
              return 1 - r(1 - s);
            }
          : au(r);
    return (
      (n.config = function (s) {
        return i(e, s);
      }),
      n
    );
  };
ht("Linear,Quad,Cubic,Quart,Quint,Strong", function (i, e) {
  var t = e < 5 ? e + 1 : e;
  fn(
    i + ",Power" + (t - 1),
    e
      ? function (r) {
          return Math.pow(r, t);
        }
      : function (r) {
          return r;
        },
    function (r) {
      return 1 - Math.pow(1 - r, t);
    },
    function (r) {
      return r < 0.5
        ? Math.pow(r * 2, t) / 2
        : 1 - Math.pow((1 - r) * 2, t) / 2;
    }
  );
});
G.Linear.easeNone = G.none = G.Linear.easeIn;
fn("Elastic", Fs("in"), Fs("out"), Fs());
(function (i, e) {
  var t = 1 / e,
    r = 2 * t,
    n = 2.5 * t,
    s = function (a) {
      return a < t
        ? i * a * a
        : a < r
        ? i * Math.pow(a - 1.5 / e, 2) + 0.75
        : a < n
        ? i * (a -= 2.25 / e) * a + 0.9375
        : i * Math.pow(a - 2.625 / e, 2) + 0.984375;
    };
  fn(
    "Bounce",
    function (o) {
      return 1 - s(1 - o);
    },
    s
  );
})(7.5625, 2.75);
fn("Expo", function (i) {
  return i ? Math.pow(2, 10 * (i - 1)) : 0;
});
fn("Circ", function (i) {
  return -(El(1 - i * i) - 1);
});
fn("Sine", function (i) {
  return i === 1 ? 1 : -Lf(i * Af) + 1;
});
fn("Back", As("in"), As("out"), As());
G.SteppedEase =
  G.steps =
  Pt.SteppedEase =
    {
      config: function (e, t) {
        e === void 0 && (e = 1);
        var r = 1 / e,
          n = e + (t ? 0 : 1),
          s = t ? 1 : 0,
          o = 1 - ne;
        return function (a) {
          return (((n * Si(0, o, a)) | 0) + s) * r;
        };
      },
    };
Rn.ease = G["quad.out"];
ht(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (i) {
    return (Fo += i + "," + i + "Params,");
  }
);
var lu = function (e, t) {
    (this.id = Nf++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : Bl),
      (this.set = t ? t.getSetter : zo);
  },
  _i = (function () {
    function i(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        An(this, +t.duration, 1, 1),
        (this.data = t.data),
        ge && ((this._ctx = ge), ge.data.push(this)),
        pi || Ct.wake();
    }
    var e = i.prototype;
    return (
      (e.delay = function (r) {
        return r || r === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + r - this._delay),
            (this._delay = r),
            this)
          : this._delay;
      }),
      (e.duration = function (r) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (r) {
        return arguments.length
          ? ((this._dirty = 0),
            An(
              this,
              this._repeat < 0
                ? r
                : (r - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (r, n) {
        if ((Nn(), !arguments.length)) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (ys(this, r), !s._dp || s.parent || ql(s, this); s && s.parent; )
            s.parent._time !==
              s._start +
                (s._ts >= 0
                  ? s._tTime / s._ts
                  : (s.totalDuration() - s._tTime) / -s._ts) &&
              s.totalTime(s._tTime, !0),
              (s = s.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && r < this._tDur) ||
              (this._ts < 0 && r > 0) ||
              (!this._tDur && !r)) &&
            tr(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== r ||
            (!this._dur && !n) ||
            (this._initted && Math.abs(this._zTime) === ne) ||
            (!r && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = r), $l(this, r, n)),
          this
        );
      }),
      (e.time = function (r, n) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), r + wa(this)) %
                (this._dur + this._rDelay) || (r ? this._dur : 0),
              n
            )
          : this._time;
      }),
      (e.totalProgress = function (r, n) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * r, n)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (e.progress = function (r, n) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) +
                wa(this),
              n
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (e.iteration = function (r, n) {
        var s = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (r - 1) * s, n)
          : this._repeat
          ? Fn(this._tTime, s) + 1
          : 1;
      }),
      (e.timeScale = function (r) {
        if (!arguments.length) return this._rts === -ne ? 0 : this._rts;
        if (this._rts === r) return this;
        var n =
          this.parent && this._ts ? os(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +r || 0),
          (this._ts = this._ps || r === -ne ? 0 : this._rts),
          this.totalTime(Si(-Math.abs(this._delay), this._tDur, n), !0),
          ms(this),
          qf(this)
        );
      }),
      (e.paused = function (r) {
        return arguments.length
          ? (this._ps !== r &&
              ((this._ps = r),
              r
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Nn(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== ne &&
                      (this._tTime -= ne)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (r) {
        if (arguments.length) {
          this._start = r;
          var n = this.parent || this._dp;
          return (
            n && (n._sort || !this.parent) && tr(n, this, r - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (r) {
        return (
          this._start +
          (ft(r) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (r) {
        var n = this.parent || this._dp;
        return n
          ? r &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? os(n.rawTime(r), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (r) {
        r === void 0 && (r = $f);
        var n = Qe;
        return (
          (Qe = r),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(r),
            this.totalTime(-0.01, r.suppressEvents)),
          this.data !== "nested" && r.kill !== !1 && this.kill(),
          (Qe = n),
          this
        );
      }),
      (e.globalTime = function (r) {
        for (var n = this, s = arguments.length ? r : n.rawTime(); n; )
          (s = n._start + s / (n._ts || 1)), (n = n._dp);
        return !this.parent && this._sat
          ? this._sat.vars.immediateRender
            ? -1
            : this._sat.globalTime(r)
          : s;
      }),
      (e.repeat = function (r) {
        return arguments.length
          ? ((this._repeat = r === 1 / 0 ? -2 : r), Sa(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (r) {
        if (arguments.length) {
          var n = this._time;
          return (this._rDelay = r), Sa(this), n ? this.time(n) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (r) {
        return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
      }),
      (e.seek = function (r, n) {
        return this.totalTime(Mt(this, r), ft(n));
      }),
      (e.restart = function (r, n) {
        return this.play().totalTime(r ? -this._delay : 0, ft(n));
      }),
      (e.play = function (r, n) {
        return r != null && this.seek(r, n), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (r, n) {
        return (
          r != null && this.seek(r || this.totalDuration(), n),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (r, n) {
        return r != null && this.seek(r, n), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (r) {
        return arguments.length
          ? (!!r !== this.reversed() &&
              this.timeScale(-this._rts || (r ? -ne : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -ne), this;
      }),
      (e.isActive = function () {
        var r = this.parent || this._dp,
          n = this._start,
          s;
        return !!(
          !r ||
          (this._ts &&
            this._initted &&
            r.isActive() &&
            (s = r.rawTime(!0)) >= n &&
            s < this.endTime(!0) - ne)
        );
      }),
      (e.eventCallback = function (r, n, s) {
        var o = this.vars;
        return arguments.length > 1
          ? (n
              ? ((o[r] = n),
                s && (o[r + "Params"] = s),
                r === "onUpdate" && (this._onUpdate = n))
              : delete o[r],
            this)
          : o[r];
      }),
      (e.then = function (r) {
        var n = this;
        return new Promise(function (s) {
          var o = me(r) ? r : Wl,
            a = function () {
              var u = n.then;
              (n.then = null),
                me(o) && (o = o(n)) && (o.then || o === n) && (n.then = u),
                s(o),
                (n.then = u);
            };
          (n._initted && n.totalProgress() === 1 && n._ts >= 0) ||
          (!n._tTime && n._ts < 0)
            ? a()
            : (n._prom = a);
        });
      }),
      (e.kill = function () {
        Un(this);
      }),
      i
    );
  })();
zt(_i.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -ne,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var rt = (function (i) {
  Ml(e, i);
  function e(r, n) {
    var s;
    return (
      r === void 0 && (r = {}),
      (s = i.call(this, r) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!r.smoothChildTiming),
      (s.autoRemoveChildren = !!r.autoRemoveChildren),
      (s._sort = ft(r.sortChildren)),
      de && tr(r.parent || de, ur(s), n),
      r.reversed && s.reverse(),
      r.paused && s.paused(!0),
      r.scrollTrigger && Xl(ur(s), r.scrollTrigger),
      s
    );
  }
  var t = e.prototype;
  return (
    (t.to = function (n, s, o) {
      return ei(0, arguments, this), this;
    }),
    (t.from = function (n, s, o) {
      return ei(1, arguments, this), this;
    }),
    (t.fromTo = function (n, s, o, a) {
      return ei(2, arguments, this), this;
    }),
    (t.set = function (n, s, o) {
      return (
        (s.duration = 0),
        (s.parent = this),
        jn(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new be(n, s, Mt(this, o), 1),
        this
      );
    }),
    (t.call = function (n, s, o) {
      return tr(this, be.delayedCall(0, n, s), o);
    }),
    (t.staggerTo = function (n, s, o, a, l, u, c) {
      return (
        (o.duration = s),
        (o.stagger = o.stagger || a),
        (o.onComplete = u),
        (o.onCompleteParams = c),
        (o.parent = this),
        new be(n, o, Mt(this, l)),
        this
      );
    }),
    (t.staggerFrom = function (n, s, o, a, l, u, c) {
      return (
        (o.runBackwards = 1),
        (jn(o).immediateRender = ft(o.immediateRender)),
        this.staggerTo(n, s, o, a, l, u, c)
      );
    }),
    (t.staggerFromTo = function (n, s, o, a, l, u, c, d) {
      return (
        (a.startAt = o),
        (jn(a).immediateRender = ft(a.immediateRender)),
        this.staggerTo(n, s, a, l, u, c, d)
      );
    }),
    (t.render = function (n, s, o) {
      var a = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        c = n <= 0 ? 0 : We(n),
        d = this._zTime < 0 != n < 0 && (this._initted || !u),
        h,
        f,
        _,
        p,
        g,
        y,
        v,
        T,
        w,
        b,
        O,
        x;
      if (
        (this !== de && c > l && n >= 0 && (c = l), c !== this._tTime || o || d)
      ) {
        if (
          (a !== this._time &&
            u &&
            ((c += this._time - a), (n += this._time - a)),
          (h = c),
          (w = this._start),
          (T = this._ts),
          (y = !T),
          d && (u || (a = this._zTime), (n || !s) && (this._zTime = n)),
          this._repeat)
        ) {
          if (
            ((O = this._yoyo),
            (g = u + this._rDelay),
            this._repeat < -1 && n < 0)
          )
            return this.totalTime(g * 100 + n, s, o);
          if (
            ((h = We(c % g)),
            c === l
              ? ((p = this._repeat), (h = u))
              : ((p = ~~(c / g)),
                p && p === c / g && ((h = u), p--),
                h > u && (h = u)),
            (b = Fn(this._tTime, g)),
            !a &&
              this._tTime &&
              b !== p &&
              this._tTime - b * g - this._dur <= 0 &&
              (b = p),
            O && p & 1 && ((h = u - h), (x = 1)),
            p !== b && !this._lock)
          ) {
            var k = O && b & 1,
              C = k === (O && p & 1);
            if (
              (p < b && (k = !k),
              (a = k ? 0 : u),
              (this._lock = 1),
              (this.render(a || (x ? 0 : We(p * g)), s, !u)._lock = 0),
              (this._tTime = c),
              !s && this.parent && Nt(this, "onRepeat"),
              this.vars.repeatRefresh && !x && (this.invalidate()._lock = 1),
              (a && a !== this._time) ||
                y !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
              (l = this._tDur),
              C &&
                ((this._lock = 2),
                (a = k ? u : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !x && this.invalidate()),
              (this._lock = 0),
              !this._ts && !y)
            )
              return this;
            ou(this, x);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((v = Gf(this, We(a), We(h))), v && (c -= h - (h = v._start))),
          (this._tTime = c),
          (this._time = h),
          (this._act = !T),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = n),
            (a = 0)),
          !a && h && !s && !p && (Nt(this, "onStart"), this._tTime !== c))
        )
          return this;
        if (h >= a && n >= 0)
          for (f = this._first; f; ) {
            if (
              ((_ = f._next), (f._act || h >= f._start) && f._ts && v !== f)
            ) {
              if (f.parent !== this) return this.render(n, s, o);
              if (
                (f.render(
                  f._ts > 0
                    ? (h - f._start) * f._ts
                    : (f._dirty ? f.totalDuration() : f._tDur) +
                        (h - f._start) * f._ts,
                  s,
                  o
                ),
                h !== this._time || (!this._ts && !y))
              ) {
                (v = 0), _ && (c += this._zTime = -ne);
                break;
              }
            }
            f = _;
          }
        else {
          f = this._last;
          for (var P = n < 0 ? n : h; f; ) {
            if (((_ = f._prev), (f._act || P <= f._end) && f._ts && v !== f)) {
              if (f.parent !== this) return this.render(n, s, o);
              if (
                (f.render(
                  f._ts > 0
                    ? (P - f._start) * f._ts
                    : (f._dirty ? f.totalDuration() : f._tDur) +
                        (P - f._start) * f._ts,
                  s,
                  o || (Qe && (f._initted || f._startAt))
                ),
                h !== this._time || (!this._ts && !y))
              ) {
                (v = 0), _ && (c += this._zTime = P ? -ne : ne);
                break;
              }
            }
            f = _;
          }
        }
        if (
          v &&
          !s &&
          (this.pause(),
          (v.render(h >= a ? 0 : -ne)._zTime = h >= a ? 1 : -1),
          this._ts)
        )
          return (this._start = w), ms(this), this.render(n, s, o);
        this._onUpdate && !s && Nt(this, "onUpdate", !0),
          ((c === l && this._tTime >= this.totalDuration()) || (!c && a)) &&
            (w === this._start || Math.abs(T) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((n || !u) &&
                ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                Er(this, 1),
              !s &&
                !(n < 0 && !a) &&
                (c || a || !l) &&
                (Nt(
                  this,
                  c === l && n >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(c < l && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (t.add = function (n, s) {
      var o = this;
      if ((gr(s) || (s = Mt(this, s, n)), !(n instanceof _i))) {
        if (Ke(n))
          return (
            n.forEach(function (a) {
              return o.add(a, s);
            }),
            this
          );
        if (Ne(n)) return this.addLabel(n, s);
        if (me(n)) n = be.delayedCall(0, n);
        else return this;
      }
      return this !== n ? tr(this, n, s) : this;
    }),
    (t.getChildren = function (n, s, o, a) {
      n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -Ft);
      for (var l = [], u = this._first; u; )
        u._start >= a &&
          (u instanceof be
            ? s && l.push(u)
            : (o && l.push(u), n && l.push.apply(l, u.getChildren(!0, s, o)))),
          (u = u._next);
      return l;
    }),
    (t.getById = function (n) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
        if (s[o].vars.id === n) return s[o];
    }),
    (t.remove = function (n) {
      return Ne(n)
        ? this.removeLabel(n)
        : me(n)
        ? this.killTweensOf(n)
        : (gs(this, n),
          n === this._recent && (this._recent = this._last),
          en(this));
    }),
    (t.totalTime = function (n, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = We(
              Ct.time -
                (this._ts > 0
                  ? n / this._ts
                  : (this.totalDuration() - n) / -this._ts)
            )),
          i.prototype.totalTime.call(this, n, s),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (t.addLabel = function (n, s) {
      return (this.labels[n] = Mt(this, s)), this;
    }),
    (t.removeLabel = function (n) {
      return delete this.labels[n], this;
    }),
    (t.addPause = function (n, s, o) {
      var a = be.delayedCall(0, s || hi, o);
      return (
        (a.data = "isPause"), (this._hasPause = 1), tr(this, a, Mt(this, n))
      );
    }),
    (t.removePause = function (n) {
      var s = this._first;
      for (n = Mt(this, n); s; )
        s._start === n && s.data === "isPause" && Er(s), (s = s._next);
    }),
    (t.killTweensOf = function (n, s, o) {
      for (var a = this.getTweensOf(n, o), l = a.length; l--; )
        Sr !== a[l] && a[l].kill(n, s);
      return this;
    }),
    (t.getTweensOf = function (n, s) {
      for (var o = [], a = At(n), l = this._first, u = gr(s), c; l; )
        l instanceof be
          ? Vf(l._targets, a) &&
            (u
              ? (!Sr || (l._initted && l._ts)) &&
                l.globalTime(0) <= s &&
                l.globalTime(l.totalDuration()) > s
              : !s || l.isActive()) &&
            o.push(l)
          : (c = l.getTweensOf(a, s)).length && o.push.apply(o, c),
          (l = l._next);
      return o;
    }),
    (t.tweenTo = function (n, s) {
      s = s || {};
      var o = this,
        a = Mt(o, n),
        l = s,
        u = l.startAt,
        c = l.onStart,
        d = l.onStartParams,
        h = l.immediateRender,
        f,
        _ = be.to(
          o,
          zt(
            {
              ease: s.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration:
                s.duration ||
                Math.abs(
                  (a - (u && "time" in u ? u.time : o._time)) / o.timeScale()
                ) ||
                ne,
              onStart: function () {
                if ((o.pause(), !f)) {
                  var g =
                    s.duration ||
                    Math.abs(
                      (a - (u && "time" in u ? u.time : o._time)) /
                        o.timeScale()
                    );
                  _._dur !== g && An(_, g, 0, 1).render(_._time, !0, !0),
                    (f = 1);
                }
                c && c.apply(_, d || []);
              },
            },
            s
          )
        );
      return h ? _.render(0) : _;
    }),
    (t.tweenFromTo = function (n, s, o) {
      return this.tweenTo(s, zt({ startAt: { time: Mt(this, n) } }, o));
    }),
    (t.recent = function () {
      return this._recent;
    }),
    (t.nextLabel = function (n) {
      return n === void 0 && (n = this._time), xa(this, Mt(this, n));
    }),
    (t.previousLabel = function (n) {
      return n === void 0 && (n = this._time), xa(this, Mt(this, n), 1);
    }),
    (t.currentLabel = function (n) {
      return arguments.length
        ? this.seek(n, !0)
        : this.previousLabel(this._time + ne);
    }),
    (t.shiftChildren = function (n, s, o) {
      o === void 0 && (o = 0);
      for (var a = this._first, l = this.labels, u; a; )
        a._start >= o && ((a._start += n), (a._end += n)), (a = a._next);
      if (s) for (u in l) l[u] >= o && (l[u] += n);
      return en(this);
    }),
    (t.invalidate = function (n) {
      var s = this._first;
      for (this._lock = 0; s; ) s.invalidate(n), (s = s._next);
      return i.prototype.invalidate.call(this, n);
    }),
    (t.clear = function (n) {
      n === void 0 && (n = !0);
      for (var s = this._first, o; s; ) (o = s._next), this.remove(s), (s = o);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        n && (this.labels = {}),
        en(this)
      );
    }),
    (t.totalDuration = function (n) {
      var s = 0,
        o = this,
        a = o._last,
        l = Ft,
        u,
        c,
        d;
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -n : n)
        );
      if (o._dirty) {
        for (d = o.parent; a; )
          (u = a._prev),
            a._dirty && a.totalDuration(),
            (c = a._start),
            c > l && o._sort && a._ts && !o._lock
              ? ((o._lock = 1), (tr(o, a, c - a._delay, 1)._lock = 0))
              : (l = c),
            c < 0 &&
              a._ts &&
              ((s -= c),
              ((!d && !o._dp) || (d && d.smoothChildTiming)) &&
                ((o._start += c / o._ts), (o._time -= c), (o._tTime -= c)),
              o.shiftChildren(-c, !1, -1 / 0),
              (l = 0)),
            a._end > s && a._ts && (s = a._end),
            (a = u);
        An(o, o === de && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
      }
      return o._tDur;
    }),
    (e.updateRoot = function (n) {
      if ((de._ts && ($l(de, os(n, de)), (zl = Ct.frame)), Ct.frame >= ya)) {
        ya += kt.autoSleep || 120;
        var s = de._first;
        if ((!s || !s._ts) && kt.autoSleep && Ct._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || Ct.sleep();
        }
      }
    }),
    e
  );
})(_i);
zt(rt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var ch = function (e, t, r, n, s, o, a) {
    var l = new dt(this._pt, e, t, 0, 1, pu, null, s),
      u = 0,
      c = 0,
      d,
      h,
      f,
      _,
      p,
      g,
      y,
      v;
    for (
      l.b = r,
        l.e = n,
        r += "",
        n += "",
        (y = ~n.indexOf("random(")) && (n = di(n)),
        o && ((v = [r, n]), o(v, e, t), (r = v[0]), (n = v[1])),
        h = r.match(Es) || [];
      (d = Es.exec(n));

    )
      (_ = d[0]),
        (p = n.substring(u, d.index)),
        f ? (f = (f + 1) % 5) : p.substr(-5) === "rgba(" && (f = 1),
        _ !== h[c++] &&
          ((g = parseFloat(h[c - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: p || c === 1 ? p : ",",
            s: g,
            c: _.charAt(1) === "=" ? On(g, _) - g : parseFloat(_) - g,
            m: f && f < 4 ? Math.round : 0,
          }),
          (u = Es.lastIndex));
    return (
      (l.c = u < n.length ? n.substring(u, n.length) : ""),
      (l.fp = a),
      (Fl.test(n) || y) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  No = function (e, t, r, n, s, o, a, l, u, c) {
    me(n) && (n = n(s || 0, e, o));
    var d = e[t],
      h =
        r !== "get"
          ? r
          : me(d)
          ? u
            ? e[
                t.indexOf("set") || !me(e["get" + t.substr(3)])
                  ? t
                  : "get" + t.substr(3)
              ](u)
            : e[t]()
          : d,
      f = me(d) ? (u ? _h : hu) : Io,
      _;
    if (
      (Ne(n) &&
        (~n.indexOf("random(") && (n = di(n)),
        n.charAt(1) === "=" &&
          ((_ = On(h, n) + (Ue(h) || 0)), (_ || _ === 0) && (n = _))),
      !c || h !== n || ao)
    )
      return !isNaN(h * n) && n !== ""
        ? ((_ = new dt(
            this._pt,
            e,
            t,
            +h || 0,
            n - (h || 0),
            typeof d == "boolean" ? mh : du,
            0,
            f
          )),
          u && (_.fp = u),
          a && _.modifier(a, this, e),
          (this._pt = _))
        : (!d && !(t in e) && Do(t, n),
          ch.call(this, e, t, h, n, f, l || kt.stringFilter, u));
  },
  fh = function (e, t, r, n, s) {
    if (
      (me(e) && (e = ti(e, s, t, r, n)),
      !sr(e) || (e.style && e.nodeType) || Ke(e) || Dl(e))
    )
      return Ne(e) ? ti(e, s, t, r, n) : e;
    var o = {},
      a;
    for (a in e) o[a] = ti(e[a], s, t, r, n);
    return o;
  },
  uu = function (e, t, r, n, s, o) {
    var a, l, u, c;
    if (
      bt[e] &&
      (a = new bt[e]()).init(
        s,
        a.rawVars ? t[e] : fh(t[e], n, s, o, r),
        r,
        n,
        o
      ) !== !1 &&
      ((r._pt = l = new dt(r._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
      r !== Tn)
    )
      for (u = r._ptLookup[r._targets.indexOf(s)], c = a._props.length; c--; )
        u[a._props[c]] = l;
    return a;
  },
  Sr,
  ao,
  Lo = function i(e, t, r) {
    var n = e.vars,
      s = n.ease,
      o = n.startAt,
      a = n.immediateRender,
      l = n.lazy,
      u = n.onUpdate,
      c = n.onUpdateParams,
      d = n.callbackScope,
      h = n.runBackwards,
      f = n.yoyoEase,
      _ = n.keyframes,
      p = n.autoRevert,
      g = e._dur,
      y = e._startAt,
      v = e._targets,
      T = e.parent,
      w = T && T.data === "nested" ? T.vars.targets : v,
      b = e._overwrite === "auto" && !ko,
      O = e.timeline,
      x,
      k,
      C,
      P,
      F,
      M,
      X,
      N,
      I,
      B,
      R,
      $,
      J;
    if (
      (O && (!_ || !s) && (s = "none"),
      (e._ease = tn(s, Rn.ease)),
      (e._yEase = f ? su(tn(f === !0 ? s : f, Rn.ease)) : 0),
      f &&
        e._yoyo &&
        !e._repeat &&
        ((f = e._yEase), (e._yEase = e._ease), (e._ease = f)),
      (e._from = !O && !!n.runBackwards),
      !O || (_ && !n.stagger))
    ) {
      if (
        ((N = v[0] ? jr(v[0]).harness : 0),
        ($ = N && n[N.prop]),
        (x = ss(n, Ro)),
        y &&
          (y._zTime < 0 && y.progress(1),
          t < 0 && h && a && !p ? y.render(-1, !0) : y.revert(h && g ? Vi : Bf),
          (y._lazy = 0)),
        o)
      ) {
        if (
          (Er(
            (e._startAt = be.set(
              v,
              zt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: T,
                  immediateRender: !0,
                  lazy: !y && ft(l),
                  startAt: null,
                  delay: 0,
                  onUpdate: u,
                  onUpdateParams: c,
                  callbackScope: d,
                  stagger: 0,
                },
                o
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (Qe || (!a && !p)) && e._startAt.revert(Vi),
          a && g && t <= 0 && r <= 0)
        ) {
          t && (e._zTime = t);
          return;
        }
      } else if (h && g && !y) {
        if (
          (t && (a = !1),
          (C = zt(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: a && !y && ft(l),
              immediateRender: a,
              stagger: 0,
              parent: T,
            },
            x
          )),
          $ && (C[N.prop] = $),
          Er((e._startAt = be.set(v, C))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (Qe ? e._startAt.revert(Vi) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !a)
        )
          i(e._startAt, ne, ne);
        else if (!t) return;
      }
      for (
        e._pt = e._ptCache = 0, l = (g && ft(l)) || (l && !g), k = 0;
        k < v.length;
        k++
      ) {
        if (
          ((F = v[k]),
          (X = F._gsap || Ao(v)[k]._gsap),
          (e._ptLookup[k] = B = {}),
          to[X.id] && kr.length && is(),
          (R = w === v ? k : w.indexOf(F)),
          N &&
            (I = new N()).init(F, $ || x, e, R, w) !== !1 &&
            ((e._pt = P =
              new dt(e._pt, F, I.name, 0, 1, I.render, I, 0, I.priority)),
            I._props.forEach(function (m) {
              B[m] = P;
            }),
            I.priority && (M = 1)),
          !N || $)
        )
          for (C in x)
            bt[C] && (I = uu(C, x, e, R, F, w))
              ? I.priority && (M = 1)
              : (B[C] = P =
                  No.call(e, F, C, "get", x[C], R, w, 0, n.stringFilter));
        e._op && e._op[k] && e.kill(F, e._op[k]),
          b &&
            e._pt &&
            ((Sr = e),
            de.killTweensOf(F, B, e.globalTime(t)),
            (J = !e.parent),
            (Sr = 0)),
          e._pt && l && (to[X.id] = 1);
      }
      M && _u(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = u),
      (e._initted = (!e._op || e._pt) && !J),
      _ && t <= 0 && O.render(Ft, !0, !0);
  },
  hh = function (e, t, r, n, s, o, a) {
    var l = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      u,
      c,
      d,
      h;
    if (!l)
      for (
        l = e._ptCache[t] = [], d = e._ptLookup, h = e._targets.length;
        h--;

      ) {
        if (((u = d[h][t]), u && u.d && u.d._pt))
          for (u = u.d._pt; u && u.p !== t && u.fp !== t; ) u = u._next;
        if (!u) return (ao = 1), (e.vars[t] = "+=0"), Lo(e, a), (ao = 0), 1;
        l.push(u);
      }
    for (h = l.length; h--; )
      (c = l[h]),
        (u = c._pt || c),
        (u.s = (n || n === 0) && !s ? n : u.s + (n || 0) + o * u.c),
        (u.c = r - u.s),
        c.e && (c.e = Se(r) + Ue(c.e)),
        c.b && (c.b = u.s + Ue(c.b));
  },
  dh = function (e, t) {
    var r = e[0] ? jr(e[0]).harness : 0,
      n = r && r.aliases,
      s,
      o,
      a,
      l;
    if (!n) return t;
    s = an({}, t);
    for (o in n)
      if (o in s) for (l = n[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
    return s;
  },
  ph = function (e, t, r, n) {
    var s = t.ease || n || "power1.inOut",
      o,
      a;
    if (Ke(t))
      (a = r[e] || (r[e] = [])),
        t.forEach(function (l, u) {
          return a.push({ t: (u / (t.length - 1)) * 100, v: l, e: s });
        });
    else
      for (o in t)
        (a = r[o] || (r[o] = [])),
          o === "ease" || a.push({ t: parseFloat(e), v: t[o], e: s });
  },
  ti = function (e, t, r, n, s) {
    return me(e)
      ? e.call(t, r, n, s)
      : Ne(e) && ~e.indexOf("random(")
      ? di(e)
      : e;
  },
  cu = Fo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  fu = {};
ht(cu + ",id,stagger,delay,duration,paused,scrollTrigger", function (i) {
  return (fu[i] = 1);
});
var be = (function (i) {
  Ml(e, i);
  function e(r, n, s, o) {
    var a;
    typeof n == "number" && ((s.duration = n), (n = s), (s = null)),
      (a = i.call(this, o ? n : jn(n)) || this);
    var l = a.vars,
      u = l.duration,
      c = l.delay,
      d = l.immediateRender,
      h = l.stagger,
      f = l.overwrite,
      _ = l.keyframes,
      p = l.defaults,
      g = l.scrollTrigger,
      y = l.yoyoEase,
      v = n.parent || de,
      T = (Ke(r) || Dl(r) ? gr(r[0]) : "length" in n) ? [r] : At(r),
      w,
      b,
      O,
      x,
      k,
      C,
      P,
      F;
    if (
      ((a._targets = T.length
        ? Ao(T)
        : ns(
            "GSAP target " + r + " not found. https://greensock.com",
            !kt.nullTargetWarn
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = f),
      _ || h || Ci(u) || Ci(c))
    ) {
      if (
        ((n = a.vars),
        (w = a.timeline =
          new rt({
            data: "nested",
            defaults: p || {},
            targets: v && v.data === "nested" ? v.vars.targets : T,
          })),
        w.kill(),
        (w.parent = w._dp = ur(a)),
        (w._start = 0),
        h || Ci(u) || Ci(c))
      ) {
        if (((x = T.length), (P = h && Ql(h)), sr(h)))
          for (k in h) ~cu.indexOf(k) && (F || (F = {}), (F[k] = h[k]));
        for (b = 0; b < x; b++)
          (O = ss(n, fu)),
            (O.stagger = 0),
            y && (O.yoyoEase = y),
            F && an(O, F),
            (C = T[b]),
            (O.duration = +ti(u, ur(a), b, C, T)),
            (O.delay = (+ti(c, ur(a), b, C, T) || 0) - a._delay),
            !h &&
              x === 1 &&
              O.delay &&
              ((a._delay = c = O.delay), (a._start += c), (O.delay = 0)),
            w.to(C, O, P ? P(b, C, T) : 0),
            (w._ease = G.none);
        w.duration() ? (u = c = 0) : (a.timeline = 0);
      } else if (_) {
        jn(zt(w.vars.defaults, { ease: "none" })),
          (w._ease = tn(_.ease || n.ease || "none"));
        var M = 0,
          X,
          N,
          I;
        if (Ke(_))
          _.forEach(function (B) {
            return w.to(T, B, ">");
          }),
            w.duration();
        else {
          O = {};
          for (k in _)
            k === "ease" || k === "easeEach" || ph(k, _[k], O, _.easeEach);
          for (k in O)
            for (
              X = O[k].sort(function (B, R) {
                return B.t - R.t;
              }),
                M = 0,
                b = 0;
              b < X.length;
              b++
            )
              (N = X[b]),
                (I = {
                  ease: N.e,
                  duration: ((N.t - (b ? X[b - 1].t : 0)) / 100) * u,
                }),
                (I[k] = N.v),
                w.to(T, I, M),
                (M += I.duration);
          w.duration() < u && w.to({}, { duration: u - w.duration() });
        }
      }
      u || a.duration((u = w.duration()));
    } else a.timeline = 0;
    return (
      f === !0 && !ko && ((Sr = ur(a)), de.killTweensOf(T), (Sr = 0)),
      tr(v, ur(a), s),
      n.reversed && a.reverse(),
      n.paused && a.paused(!0),
      (d ||
        (!u &&
          !_ &&
          a._start === We(v._time) &&
          ft(d) &&
          Xf(ur(a)) &&
          v.data !== "nested")) &&
        ((a._tTime = -ne), a.render(Math.max(0, -c) || 0)),
      g && Xl(ur(a), g),
      a
    );
  }
  var t = e.prototype;
  return (
    (t.render = function (n, s, o) {
      var a = this._time,
        l = this._tDur,
        u = this._dur,
        c = n < 0,
        d = n > l - ne && !c ? l : n < ne ? 0 : n,
        h,
        f,
        _,
        p,
        g,
        y,
        v,
        T,
        w;
      if (!u) Uf(this, n, s, o);
      else if (
        d !== this._tTime ||
        !n ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== c)
      ) {
        if (((h = d), (T = this.timeline), this._repeat)) {
          if (((p = u + this._rDelay), this._repeat < -1 && c))
            return this.totalTime(p * 100 + n, s, o);
          if (
            ((h = We(d % p)),
            d === l
              ? ((_ = this._repeat), (h = u))
              : ((_ = ~~(d / p)),
                _ && _ === d / p && ((h = u), _--),
                h > u && (h = u)),
            (y = this._yoyo && _ & 1),
            y && ((w = this._yEase), (h = u - h)),
            (g = Fn(this._tTime, p)),
            h === a && !o && this._initted)
          )
            return (this._tTime = d), this;
          _ !== g &&
            (T && this._yEase && ou(T, y),
            this.vars.repeatRefresh &&
              !y &&
              !this._lock &&
              ((this._lock = o = 1),
              (this.render(We(p * _), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Hl(this, c ? n : h, o, s, d)) return (this._tTime = 0), this;
          if (a !== this._time) return this;
          if (u !== this._dur) return this.render(n, s, o);
        }
        if (
          ((this._tTime = d),
          (this._time = h),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = v = (w || this._ease)(h / u)),
          this._from && (this.ratio = v = 1 - v),
          h && !a && !s && !_ && (Nt(this, "onStart"), this._tTime !== d))
        )
          return this;
        for (f = this._pt; f; ) f.r(v, f.d), (f = f._next);
        (T &&
          T.render(
            n < 0 ? n : !h && y ? -ne : T._dur * T._ease(h / this._dur),
            s,
            o
          )) ||
          (this._startAt && (this._zTime = n)),
          this._onUpdate &&
            !s &&
            (c && ro(this, n, s, o), Nt(this, "onUpdate")),
          this._repeat &&
            _ !== g &&
            this.vars.onRepeat &&
            !s &&
            this.parent &&
            Nt(this, "onRepeat"),
          (d === this._tDur || !d) &&
            this._tTime === d &&
            (c && !this._onUpdate && ro(this, n, !0, !0),
            (n || !u) &&
              ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
              Er(this, 1),
            !s &&
              !(c && !a) &&
              (d || a || y) &&
              (Nt(this, d === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(d < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (t.targets = function () {
      return this._targets;
    }),
    (t.invalidate = function (n) {
      return (
        (!n || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(n),
        i.prototype.invalidate.call(this, n)
      );
    }),
    (t.resetTo = function (n, s, o, a) {
      pi || Ct.wake(), this._ts || this.play();
      var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        u;
      return (
        this._initted || Lo(this, l),
        (u = this._ease(l / this._dur)),
        hh(this, n, s, o, a, u, l)
          ? this.resetTo(n, s, o, a)
          : (ys(this, 0),
            this.parent ||
              Yl(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (t.kill = function (n, s) {
      if ((s === void 0 && (s = "all"), !n && (!s || s === "all")))
        return (this._lazy = this._pt = 0), this.parent ? Un(this) : this;
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(n, s, Sr && Sr.vars.overwrite !== !0)
            ._first || Un(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            An(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var a = this._targets,
        l = n ? At(n) : a,
        u = this._ptLookup,
        c = this._pt,
        d,
        h,
        f,
        _,
        p,
        g,
        y;
      if ((!s || s === "all") && Yf(a, l))
        return s === "all" && (this._pt = 0), Un(this);
      for (
        d = this._op = this._op || [],
          s !== "all" &&
            (Ne(s) &&
              ((p = {}),
              ht(s, function (v) {
                return (p[v] = 1);
              }),
              (s = p)),
            (s = dh(a, s))),
          y = a.length;
        y--;

      )
        if (~l.indexOf(a[y])) {
          (h = u[y]),
            s === "all"
              ? ((d[y] = s), (_ = h), (f = {}))
              : ((f = d[y] = d[y] || {}), (_ = s));
          for (p in _)
            (g = h && h[p]),
              g &&
                ((!("kill" in g.d) || g.d.kill(p) === !0) && gs(this, g, "_pt"),
                delete h[p]),
              f !== "all" && (f[p] = 1);
        }
      return this._initted && !this._pt && c && Un(this), this;
    }),
    (e.to = function (n, s) {
      return new e(n, s, arguments[2]);
    }),
    (e.from = function (n, s) {
      return ei(1, arguments);
    }),
    (e.delayedCall = function (n, s, o, a) {
      return new e(s, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: n,
        onComplete: s,
        onReverseComplete: s,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: a,
      });
    }),
    (e.fromTo = function (n, s, o) {
      return ei(2, arguments);
    }),
    (e.set = function (n, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(n, s);
    }),
    (e.killTweensOf = function (n, s, o) {
      return de.killTweensOf(n, s, o);
    }),
    e
  );
})(_i);
zt(be.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
ht("staggerTo,staggerFrom,staggerFromTo", function (i) {
  be[i] = function () {
    var e = new rt(),
      t = io.call(arguments, 0);
    return t.splice(i === "staggerFromTo" ? 5 : 4, 0, 0), e[i].apply(e, t);
  };
});
var Io = function (e, t, r) {
    return (e[t] = r);
  },
  hu = function (e, t, r) {
    return e[t](r);
  },
  _h = function (e, t, r, n) {
    return e[t](n.fp, r);
  },
  gh = function (e, t, r) {
    return e.setAttribute(t, r);
  },
  zo = function (e, t) {
    return me(e[t]) ? hu : Po(e[t]) && e.setAttribute ? gh : Io;
  },
  du = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  mh = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  pu = function (e, t) {
    var r = t._pt,
      n = "";
    if (!e && t.b) n = t.b;
    else if (e === 1 && t.e) n = t.e;
    else {
      for (; r; )
        (n =
          r.p +
          (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) +
          n),
          (r = r._next);
      n += t.c;
    }
    t.set(t.t, t.p, n, t);
  },
  Bo = function (e, t) {
    for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
  },
  yh = function (e, t, r, n) {
    for (var s = this._pt, o; s; )
      (o = s._next), s.p === n && s.modifier(e, t, r), (s = o);
  },
  vh = function (e) {
    for (var t = this._pt, r, n; t; )
      (n = t._next),
        (t.p === e && !t.op) || t.op === e
          ? gs(this, t, "_pt")
          : t.dep || (r = 1),
        (t = n);
    return !r;
  },
  wh = function (e, t, r, n) {
    n.mSet(e, t, n.m.call(n.tween, r, n.mt), n);
  },
  _u = function (e) {
    for (var t = e._pt, r, n, s, o; t; ) {
      for (r = t._next, n = s; n && n.pr > t.pr; ) n = n._next;
      (t._prev = n ? n._prev : o) ? (t._prev._next = t) : (s = t),
        (t._next = n) ? (n._prev = t) : (o = t),
        (t = r);
    }
    e._pt = s;
  },
  dt = (function () {
    function i(t, r, n, s, o, a, l, u, c) {
      (this.t = r),
        (this.s = s),
        (this.c = o),
        (this.p = n),
        (this.r = a || du),
        (this.d = l || this),
        (this.set = u || Io),
        (this.pr = c || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    var e = i.prototype;
    return (
      (e.modifier = function (r, n, s) {
        (this.mSet = this.mSet || this.set),
          (this.set = wh),
          (this.m = r),
          (this.mt = s),
          (this.tween = n);
      }),
      i
    );
  })();
ht(
  Fo +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (i) {
    return (Ro[i] = 1);
  }
);
Pt.TweenMax = Pt.TweenLite = be;
Pt.TimelineLite = Pt.TimelineMax = rt;
de = new rt({
  sortChildren: !1,
  defaults: Rn,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
kt.stringFilter = iu;
var rn = [],
  Yi = {},
  Sh = [],
  ba = 0,
  xh = 0,
  Ns = function (e) {
    return (Yi[e] || Sh).map(function (t) {
      return t();
    });
  },
  lo = function () {
    var e = Date.now(),
      t = [];
    e - ba > 2 &&
      (Ns("matchMediaInit"),
      rn.forEach(function (r) {
        var n = r.queries,
          s = r.conditions,
          o,
          a,
          l,
          u;
        for (a in n)
          (o = Et.matchMedia(n[a]).matches),
            o && (l = 1),
            o !== s[a] && ((s[a] = o), (u = 1));
        u && (r.revert(), l && t.push(r));
      }),
      Ns("matchMediaRevert"),
      t.forEach(function (r) {
        return r.onMatch(r);
      }),
      (ba = e),
      Ns("matchMedia"));
  },
  gu = (function () {
    function i(t, r) {
      (this.selector = r && so(r)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = xh++),
        t && this.add(t);
    }
    var e = i.prototype;
    return (
      (e.add = function (r, n, s) {
        me(r) && ((s = n), (n = r), (r = me));
        var o = this,
          a = function () {
            var u = ge,
              c = o.selector,
              d;
            return (
              u && u !== o && u.data.push(o),
              s && (o.selector = so(s)),
              (ge = o),
              (d = n.apply(o, arguments)),
              me(d) && o._r.push(d),
              (ge = u),
              (o.selector = c),
              (o.isReverted = !1),
              d
            );
          };
        return (o.last = a), r === me ? a(o) : r ? (o[r] = a) : a;
      }),
      (e.ignore = function (r) {
        var n = ge;
        (ge = null), r(this), (ge = n);
      }),
      (e.getTweens = function () {
        var r = [];
        return (
          this.data.forEach(function (n) {
            return n instanceof i
              ? r.push.apply(r, n.getTweens())
              : n instanceof be &&
                  !(n.parent && n.parent.data === "nested") &&
                  r.push(n);
          }),
          r
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (r, n) {
        var s = this;
        if (r) {
          var o = this.getTweens();
          this.data.forEach(function (l) {
            l.data === "isFlip" &&
              (l.revert(),
              l.getChildren(!0, !0, !1).forEach(function (u) {
                return o.splice(o.indexOf(u), 1);
              }));
          }),
            o
              .map(function (l) {
                return { g: l.globalTime(0), t: l };
              })
              .sort(function (l, u) {
                return u.g - l.g || -1;
              })
              .forEach(function (l) {
                return l.t.revert(r);
              }),
            this.data.forEach(function (l) {
              return l instanceof rt
                ? l.data !== "nested" && l.kill()
                : !(l instanceof be) && l.revert && l.revert(r);
            }),
            this._r.forEach(function (l) {
              return l(r, s);
            }),
            (this.isReverted = !0);
        } else
          this.data.forEach(function (l) {
            return l.kill && l.kill();
          });
        if ((this.clear(), n))
          for (var a = rn.length; a--; )
            rn[a].id === this.id && rn.splice(a, 1);
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      i
    );
  })(),
  Th = (function () {
    function i(t) {
      (this.contexts = []), (this.scope = t);
    }
    var e = i.prototype;
    return (
      (e.add = function (r, n, s) {
        sr(r) || (r = { matches: r });
        var o = new gu(0, s || this.scope),
          a = (o.conditions = {}),
          l,
          u,
          c;
        ge && !o.selector && (o.selector = ge.selector),
          this.contexts.push(o),
          (n = o.add("onMatch", n)),
          (o.queries = r);
        for (u in r)
          u === "all"
            ? (c = 1)
            : ((l = Et.matchMedia(r[u])),
              l &&
                (rn.indexOf(o) < 0 && rn.push(o),
                (a[u] = l.matches) && (c = 1),
                l.addListener
                  ? l.addListener(lo)
                  : l.addEventListener("change", lo)));
        return c && n(o), this;
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      (e.kill = function (r) {
        this.contexts.forEach(function (n) {
          return n.kill(r, !0);
        });
      }),
      i
    );
  })(),
  as = {
    registerPlugin: function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      t.forEach(function (n) {
        return tu(n);
      });
    },
    timeline: function (e) {
      return new rt(e);
    },
    getTweensOf: function (e, t) {
      return de.getTweensOf(e, t);
    },
    getProperty: function (e, t, r, n) {
      Ne(e) && (e = At(e)[0]);
      var s = jr(e || {}).get,
        o = r ? Wl : Vl;
      return (
        r === "native" && (r = ""),
        e &&
          (t
            ? o(((bt[t] && bt[t].get) || s)(e, t, r, n))
            : function (a, l, u) {
                return o(((bt[a] && bt[a].get) || s)(e, a, l, u));
              })
      );
    },
    quickSetter: function (e, t, r) {
      if (((e = At(e)), e.length > 1)) {
        var n = e.map(function (c) {
            return pt.quickSetter(c, t, r);
          }),
          s = n.length;
        return function (c) {
          for (var d = s; d--; ) n[d](c);
        };
      }
      e = e[0] || {};
      var o = bt[t],
        a = jr(e),
        l = (a.harness && (a.harness.aliases || {})[t]) || t,
        u = o
          ? function (c) {
              var d = new o();
              (Tn._pt = 0),
                d.init(e, r ? c + r : c, Tn, 0, [e]),
                d.render(1, d),
                Tn._pt && Bo(1, Tn);
            }
          : a.set(e, l);
      return o
        ? u
        : function (c) {
            return u(e, l, r ? c + r : c, a, 1);
          };
    },
    quickTo: function (e, t, r) {
      var n,
        s = pt.to(
          e,
          an(((n = {}), (n[t] = "+=0.1"), (n.paused = !0), n), r || {})
        ),
        o = function (l, u, c) {
          return s.resetTo(t, l, u, c);
        };
      return (o.tween = s), o;
    },
    isTweening: function (e) {
      return de.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = tn(e.ease, Rn.ease)), va(Rn, e || {});
    },
    config: function (e) {
      return va(kt, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        r = e.effect,
        n = e.plugins,
        s = e.defaults,
        o = e.extendTimeline;
      (n || "").split(",").forEach(function (a) {
        return (
          a && !bt[a] && !Pt[a] && ns(t + " effect requires " + a + " plugin.")
        );
      }),
        (Ds[t] = function (a, l, u) {
          return r(At(a), zt(l || {}, s), u);
        }),
        o &&
          (rt.prototype[t] = function (a, l, u) {
            return this.add(Ds[t](a, sr(l) ? l : (u = l) && {}, this), u);
          });
    },
    registerEase: function (e, t) {
      G[e] = tn(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? tn(e, t) : G;
    },
    getById: function (e) {
      return de.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var r = new rt(e),
        n,
        s;
      for (
        r.smoothChildTiming = ft(e.smoothChildTiming),
          de.remove(r),
          r._dp = 0,
          r._time = r._tTime = de._time,
          n = de._first;
        n;

      )
        (s = n._next),
          (t ||
            !(
              !n._dur &&
              n instanceof be &&
              n.vars.onComplete === n._targets[0]
            )) &&
            tr(r, n, n._start - n._delay),
          (n = s);
      return tr(de, r, 0), r;
    },
    context: function (e, t) {
      return e ? new gu(e, t) : ge;
    },
    matchMedia: function (e) {
      return new Th(e);
    },
    matchMediaRefresh: function () {
      return (
        rn.forEach(function (e) {
          var t = e.conditions,
            r,
            n;
          for (n in t) t[n] && ((t[n] = !1), (r = 1));
          r && e.revert();
        }) || lo()
      );
    },
    addEventListener: function (e, t) {
      var r = Yi[e] || (Yi[e] = []);
      ~r.indexOf(t) || r.push(t);
    },
    removeEventListener: function (e, t) {
      var r = Yi[e],
        n = r && r.indexOf(t);
      n >= 0 && r.splice(n, 1);
    },
    utils: {
      wrap: th,
      wrapYoyo: rh,
      distribute: Ql,
      random: Zl,
      snap: Kl,
      normalize: eh,
      getUnit: Ue,
      clamp: Kf,
      splitColor: ru,
      toArray: At,
      selector: so,
      mapRange: jl,
      pipe: Jf,
      unitize: jf,
      interpolate: nh,
      shuffle: Gl,
    },
    install: Ll,
    effects: Ds,
    ticker: Ct,
    updateRoot: rt.updateRoot,
    plugins: bt,
    globalTimeline: de,
    core: {
      PropTween: dt,
      globals: Il,
      Tween: be,
      Timeline: rt,
      Animation: _i,
      getCache: jr,
      _removeLinkedListItem: gs,
      reverting: function () {
        return Qe;
      },
      context: function (e) {
        return e && ge && (ge.data.push(e), (e._ctx = ge)), ge;
      },
      suppressOverwrites: function (e) {
        return (ko = e);
      },
    },
  };
ht("to,from,fromTo,delayedCall,set,killTweensOf", function (i) {
  return (as[i] = be[i]);
});
Ct.add(rt.updateRoot);
Tn = as.to({}, { duration: 0 });
var bh = function (e, t) {
    for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
      r = r._next;
    return r;
  },
  Ch = function (e, t) {
    var r = e._targets,
      n,
      s,
      o;
    for (n in t)
      for (s = r.length; s--; )
        (o = e._ptLookup[s][n]),
          o &&
            (o = o.d) &&
            (o._pt && (o = bh(o, n)),
            o && o.modifier && o.modifier(t[n], e, r[s], n));
  },
  Ls = function (e, t) {
    return {
      name: e,
      rawVars: 1,
      init: function (n, s, o) {
        o._onInit = function (a) {
          var l, u;
          if (
            (Ne(s) &&
              ((l = {}),
              ht(s, function (c) {
                return (l[c] = 1);
              }),
              (s = l)),
            t)
          ) {
            l = {};
            for (u in s) l[u] = t(s[u]);
            s = l;
          }
          Ch(a, s);
        };
      },
    };
  },
  pt =
    as.registerPlugin(
      {
        name: "attr",
        init: function (e, t, r, n, s) {
          var o, a, l;
          this.tween = r;
          for (o in t)
            (l = e.getAttribute(o) || ""),
              (a = this.add(
                e,
                "setAttribute",
                (l || 0) + "",
                t[o],
                n,
                s,
                0,
                0,
                o
              )),
              (a.op = o),
              (a.b = l),
              this._props.push(o);
        },
        render: function (e, t) {
          for (var r = t._pt; r; )
            Qe ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next);
        },
      },
      {
        name: "endArray",
        init: function (e, t) {
          for (var r = t.length; r--; )
            this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
        },
      },
      Ls("roundProps", oo),
      Ls("modifiers"),
      Ls("snap", Kl)
    ) || as;
be.version = rt.version = pt.version = "3.12.1";
Nl = 1;
Mo() && Nn();
G.Power0;
G.Power1;
G.Power2;
G.Power3;
G.Power4;
G.Linear;
G.Quad;
G.Cubic;
G.Quart;
G.Quint;
G.Strong;
G.Elastic;
G.Back;
G.SteppedEase;
G.Bounce;
G.Sine;
G.Expo;
G.Circ;
/*!
 * CSSPlugin 3.12.1
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Ca,
  xr,
  kn,
  $o,
  Zr,
  Oa,
  Vo,
  Oh = function () {
    return typeof window < "u";
  },
  mr = {},
  Hr = 180 / Math.PI,
  Pn = Math.PI / 180,
  _n = Math.atan2,
  ka = 1e8,
  Wo = /([A-Z])/g,
  kh = /(left|right|width|margin|padding|x)/i,
  Ph = /[\s,\(]\S/,
  rr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  uo = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  Mh = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  },
  Eh = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  },
  Dh = function (e, t) {
    var r = t.s + t.c * e;
    t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  mu = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  yu = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  },
  Rh = function (e, t, r) {
    return (e.style[t] = r);
  },
  Fh = function (e, t, r) {
    return e.style.setProperty(t, r);
  },
  Ah = function (e, t, r) {
    return (e._gsap[t] = r);
  },
  Nh = function (e, t, r) {
    return (e._gsap.scaleX = e._gsap.scaleY = r);
  },
  Lh = function (e, t, r, n, s) {
    var o = e._gsap;
    (o.scaleX = o.scaleY = r), o.renderTransform(s, o);
  },
  Ih = function (e, t, r, n, s) {
    var o = e._gsap;
    (o[t] = r), o.renderTransform(s, o);
  },
  pe = "transform",
  Qt = pe + "Origin",
  zh = function i(e, t) {
    var r = this,
      n = this.target,
      s = n.style;
    if (e in mr && s) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = rr[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (o) {
                return (r.tfm[o] = cr(n, o));
              })
            : (this.tfm[e] = n._gsap.x ? n._gsap[e] : cr(n, e));
      else
        return rr.transform.split(",").forEach(function (o) {
          return i.call(r, o, t);
        });
      if (this.props.indexOf(pe) >= 0) return;
      n._gsap.svg &&
        ((this.svgo = n.getAttribute("data-svg-origin")),
        this.props.push(Qt, t, "")),
        (e = pe);
    }
    (s || t) && this.props.push(e, t, s[e]);
  },
  vu = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  Bh = function () {
    var e = this.props,
      t = this.target,
      r = t.style,
      n = t._gsap,
      s,
      o;
    for (s = 0; s < e.length; s += 3)
      e[s + 1]
        ? (t[e[s]] = e[s + 2])
        : e[s + 2]
        ? (r[e[s]] = e[s + 2])
        : r.removeProperty(
            e[s].substr(0, 2) === "--"
              ? e[s]
              : e[s].replace(Wo, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (o in this.tfm) n[o] = this.tfm[o];
      n.svg &&
        (n.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        (s = Vo()),
        (!s || !s.isStart) && !r[pe] && (vu(r), (n.uncache = 1));
    }
  },
  wu = function (e, t) {
    var r = { target: e, props: [], revert: Bh, save: zh };
    return (
      e._gsap || pt.core.getCache(e),
      t &&
        t.split(",").forEach(function (n) {
          return r.save(n);
        }),
      r
    );
  },
  Su,
  co = function (e, t) {
    var r = xr.createElementNS
      ? xr.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : xr.createElement(e);
    return r.style ? r : xr.createElement(e);
  },
  nr = function i(e, t, r) {
    var n = getComputedStyle(e);
    return (
      n[t] ||
      n.getPropertyValue(t.replace(Wo, "-$1").toLowerCase()) ||
      n.getPropertyValue(t) ||
      (!r && i(e, Ln(t) || t, 1)) ||
      ""
    );
  },
  Pa = "O,Moz,ms,Ms,Webkit".split(","),
  Ln = function (e, t, r) {
    var n = t || Zr,
      s = n.style,
      o = 5;
    if (e in s && !r) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      o-- && !(Pa[o] + e in s);

    );
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Pa[o] : "") + e;
  },
  fo = function () {
    Oh() &&
      window.document &&
      ((Ca = window),
      (xr = Ca.document),
      (kn = xr.documentElement),
      (Zr = co("div") || { style: {} }),
      co("div"),
      (pe = Ln(pe)),
      (Qt = pe + "Origin"),
      (Zr.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Su = !!Ln("perspective")),
      (Vo = pt.core.reverting),
      ($o = 1));
  },
  Is = function i(e) {
    var t = co(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      r = this.parentNode,
      n = this.nextSibling,
      s = this.style.cssText,
      o;
    if (
      (kn.appendChild(t),
      t.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (o = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = i);
      } catch {}
    else this._gsapBBox && (o = this._gsapBBox());
    return (
      r && (n ? r.insertBefore(this, n) : r.appendChild(this)),
      kn.removeChild(t),
      (this.style.cssText = s),
      o
    );
  },
  Ma = function (e, t) {
    for (var r = t.length; r--; )
      if (e.hasAttribute(t[r])) return e.getAttribute(t[r]);
  },
  xu = function (e) {
    var t;
    try {
      t = e.getBBox();
    } catch {
      t = Is.call(e, !0);
    }
    return (
      (t && (t.width || t.height)) || e.getBBox === Is || (t = Is.call(e, !0)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +Ma(e, ["x", "cx", "x1"]) || 0,
            y: +Ma(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  Tu = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && xu(e));
  },
  gi = function (e, t) {
    if (t) {
      var r = e.style;
      t in mr && t !== Qt && (t = pe),
        r.removeProperty
          ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") &&
              (t = "-" + t),
            r.removeProperty(t.replace(Wo, "-$1").toLowerCase()))
          : r.removeAttribute(t);
    }
  },
  Tr = function (e, t, r, n, s, o) {
    var a = new dt(e._pt, t, r, 0, 1, o ? yu : mu);
    return (e._pt = a), (a.b = n), (a.e = s), e._props.push(r), a;
  },
  Ea = { deg: 1, rad: 1, turn: 1 },
  $h = { grid: 1, flex: 1 },
  Dr = function i(e, t, r, n) {
    var s = parseFloat(r) || 0,
      o = (r + "").trim().substr((s + "").length) || "px",
      a = Zr.style,
      l = kh.test(t),
      u = e.tagName.toLowerCase() === "svg",
      c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
      d = 100,
      h = n === "px",
      f = n === "%",
      _,
      p,
      g,
      y;
    return n === o || !s || Ea[n] || Ea[o]
      ? s
      : (o !== "px" && !h && (s = i(e, t, r, "px")),
        (y = e.getCTM && Tu(e)),
        (f || o === "%") && (mr[t] || ~t.indexOf("adius"))
          ? ((_ = y ? e.getBBox()[l ? "width" : "height"] : e[c]),
            Se(f ? (s / _) * d : (s / 100) * _))
          : ((a[l ? "width" : "height"] = d + (h ? o : n)),
            (p =
              ~t.indexOf("adius") || (n === "em" && e.appendChild && !u)
                ? e
                : e.parentNode),
            y && (p = (e.ownerSVGElement || {}).parentNode),
            (!p || p === xr || !p.appendChild) && (p = xr.body),
            (g = p._gsap),
            g && f && g.width && l && g.time === Ct.time && !g.uncache
              ? Se((s / g.width) * d)
              : ((f || o === "%") &&
                  !$h[nr(p, "display")] &&
                  (a.position = nr(e, "position")),
                p === e && (a.position = "static"),
                p.appendChild(Zr),
                (_ = Zr[c]),
                p.removeChild(Zr),
                (a.position = "absolute"),
                l && f && ((g = jr(p)), (g.time = Ct.time), (g.width = p[c])),
                Se(h ? (_ * s) / d : _ && s ? (d / _) * s : 0))));
  },
  cr = function (e, t, r, n) {
    var s;
    return (
      $o || fo(),
      t in rr &&
        t !== "transform" &&
        ((t = rr[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
      mr[t] && t !== "transform"
        ? ((s = yi(e, n)),
          (s =
            t !== "transformOrigin"
              ? s[t]
              : s.svg
              ? s.origin
              : us(nr(e, Qt)) + " " + s.zOrigin + "px"))
        : ((s = e.style[t]),
          (!s || s === "auto" || n || ~(s + "").indexOf("calc(")) &&
            (s =
              (ls[t] && ls[t](e, t, r)) ||
              nr(e, t) ||
              Bl(e, t) ||
              (t === "opacity" ? 1 : 0))),
      r && !~(s + "").trim().indexOf(" ") ? Dr(e, t, s, r) + r : s
    );
  },
  Vh = function (e, t, r, n) {
    if (!r || r === "none") {
      var s = Ln(t, e, 1),
        o = s && nr(e, s, 1);
      o && o !== r
        ? ((t = s), (r = o))
        : t === "borderColor" && (r = nr(e, "borderTopColor"));
    }
    var a = new dt(this._pt, e.style, t, 0, 1, pu),
      l = 0,
      u = 0,
      c,
      d,
      h,
      f,
      _,
      p,
      g,
      y,
      v,
      T,
      w,
      b;
    if (
      ((a.b = r),
      (a.e = n),
      (r += ""),
      (n += ""),
      n === "auto" && ((e.style[t] = n), (n = nr(e, t) || n), (e.style[t] = r)),
      (c = [r, n]),
      iu(c),
      (r = c[0]),
      (n = c[1]),
      (h = r.match(xn) || []),
      (b = n.match(xn) || []),
      b.length)
    ) {
      for (; (d = xn.exec(n)); )
        (g = d[0]),
          (v = n.substring(l, d.index)),
          _
            ? (_ = (_ + 1) % 5)
            : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (_ = 1),
          g !== (p = h[u++] || "") &&
            ((f = parseFloat(p) || 0),
            (w = p.substr((f + "").length)),
            g.charAt(1) === "=" && (g = On(f, g) + w),
            (y = parseFloat(g)),
            (T = g.substr((y + "").length)),
            (l = xn.lastIndex - T.length),
            T ||
              ((T = T || kt.units[t] || w),
              l === n.length && ((n += T), (a.e += T))),
            w !== T && (f = Dr(e, t, p, T) || 0),
            (a._pt = {
              _next: a._pt,
              p: v || u === 1 ? v : ",",
              s: f,
              c: y - f,
              m: (_ && _ < 4) || t === "zIndex" ? Math.round : 0,
            }));
      a.c = l < n.length ? n.substring(l, n.length) : "";
    } else a.r = t === "display" && n === "none" ? yu : mu;
    return Fl.test(n) && (a.e = 0), (this._pt = a), a;
  },
  Da = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  Wh = function (e) {
    var t = e.split(" "),
      r = t[0],
      n = t[1] || "50%";
    return (
      (r === "top" || r === "bottom" || n === "left" || n === "right") &&
        ((e = r), (r = n), (n = e)),
      (t[0] = Da[r] || r),
      (t[1] = Da[n] || n),
      t.join(" ")
    );
  },
  Yh = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var r = t.t,
        n = r.style,
        s = t.u,
        o = r._gsap,
        a,
        l,
        u;
      if (s === "all" || s === !0) (n.cssText = ""), (l = 1);
      else
        for (s = s.split(","), u = s.length; --u > -1; )
          (a = s[u]),
            mr[a] && ((l = 1), (a = a === "transformOrigin" ? Qt : pe)),
            gi(r, a);
      l &&
        (gi(r, pe),
        o &&
          (o.svg && r.removeAttribute("transform"),
          yi(r, 1),
          (o.uncache = 1),
          vu(n)));
    }
  },
  ls = {
    clearProps: function (e, t, r, n, s) {
      if (s.data !== "isFromStart") {
        var o = (e._pt = new dt(e._pt, t, r, 0, 0, Yh));
        return (o.u = n), (o.pr = -10), (o.tween = s), e._props.push(r), 1;
      }
    },
  },
  mi = [1, 0, 0, 1, 0, 0],
  bu = {},
  Cu = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  Ra = function (e) {
    var t = nr(e, pe);
    return Cu(t) ? mi : t.substr(7).match(Rl).map(Se);
  },
  Yo = function (e, t) {
    var r = e._gsap || jr(e),
      n = e.style,
      s = Ra(e),
      o,
      a,
      l,
      u;
    return r.svg && e.getAttribute("transform")
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
        s.join(",") === "1,0,0,1,0,0" ? mi : s)
      : (s === mi &&
          !e.offsetParent &&
          e !== kn &&
          !r.svg &&
          ((l = n.display),
          (n.display = "block"),
          (o = e.parentNode),
          (!o || !e.offsetParent) &&
            ((u = 1), (a = e.nextElementSibling), kn.appendChild(e)),
          (s = Ra(e)),
          l ? (n.display = l) : gi(e, "display"),
          u &&
            (a
              ? o.insertBefore(e, a)
              : o
              ? o.appendChild(e)
              : kn.removeChild(e))),
        t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  },
  ho = function (e, t, r, n, s, o) {
    var a = e._gsap,
      l = s || Yo(e, !0),
      u = a.xOrigin || 0,
      c = a.yOrigin || 0,
      d = a.xOffset || 0,
      h = a.yOffset || 0,
      f = l[0],
      _ = l[1],
      p = l[2],
      g = l[3],
      y = l[4],
      v = l[5],
      T = t.split(" "),
      w = parseFloat(T[0]) || 0,
      b = parseFloat(T[1]) || 0,
      O,
      x,
      k,
      C;
    r
      ? l !== mi &&
        (x = f * g - _ * p) &&
        ((k = w * (g / x) + b * (-p / x) + (p * v - g * y) / x),
        (C = w * (-_ / x) + b * (f / x) - (f * v - _ * y) / x),
        (w = k),
        (b = C))
      : ((O = xu(e)),
        (w = O.x + (~T[0].indexOf("%") ? (w / 100) * O.width : w)),
        (b = O.y + (~(T[1] || T[0]).indexOf("%") ? (b / 100) * O.height : b))),
      n || (n !== !1 && a.smooth)
        ? ((y = w - u),
          (v = b - c),
          (a.xOffset = d + (y * f + v * p) - y),
          (a.yOffset = h + (y * _ + v * g) - v))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = w),
      (a.yOrigin = b),
      (a.smooth = !!n),
      (a.origin = t),
      (a.originIsAbsolute = !!r),
      (e.style[Qt] = "0px 0px"),
      o &&
        (Tr(o, a, "xOrigin", u, w),
        Tr(o, a, "yOrigin", c, b),
        Tr(o, a, "xOffset", d, a.xOffset),
        Tr(o, a, "yOffset", h, a.yOffset)),
      e.setAttribute("data-svg-origin", w + " " + b);
  },
  yi = function (e, t) {
    var r = e._gsap || new lu(e);
    if ("x" in r && !t && !r.uncache) return r;
    var n = e.style,
      s = r.scaleX < 0,
      o = "px",
      a = "deg",
      l = getComputedStyle(e),
      u = nr(e, Qt) || "0",
      c,
      d,
      h,
      f,
      _,
      p,
      g,
      y,
      v,
      T,
      w,
      b,
      O,
      x,
      k,
      C,
      P,
      F,
      M,
      X,
      N,
      I,
      B,
      R,
      $,
      J,
      m,
      ee,
      Ee,
      at,
      ie,
      xe;
    return (
      (c = d = h = p = g = y = v = T = w = 0),
      (f = _ = 1),
      (r.svg = !!(e.getCTM && Tu(e))),
      l.translate &&
        ((l.translate !== "none" ||
          l.scale !== "none" ||
          l.rotate !== "none") &&
          (n[pe] =
            (l.translate !== "none"
              ? "translate3d(" +
                (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none"
              ? "scale(" + l.scale.split(" ").join(",") + ") "
              : "") +
            (l[pe] !== "none" ? l[pe] : "")),
        (n.scale = n.rotate = n.translate = "none")),
      (x = Yo(e, r.svg)),
      r.svg &&
        (r.uncache
          ? (($ = e.getBBox()),
            (u = r.xOrigin - $.x + "px " + (r.yOrigin - $.y) + "px"),
            (R = ""))
          : (R = !t && e.getAttribute("data-svg-origin")),
        ho(e, R || u, !!R || r.originIsAbsolute, r.smooth !== !1, x)),
      (b = r.xOrigin || 0),
      (O = r.yOrigin || 0),
      x !== mi &&
        ((F = x[0]),
        (M = x[1]),
        (X = x[2]),
        (N = x[3]),
        (c = I = x[4]),
        (d = B = x[5]),
        x.length === 6
          ? ((f = Math.sqrt(F * F + M * M)),
            (_ = Math.sqrt(N * N + X * X)),
            (p = F || M ? _n(M, F) * Hr : 0),
            (v = X || N ? _n(X, N) * Hr + p : 0),
            v && (_ *= Math.abs(Math.cos(v * Pn))),
            r.svg && ((c -= b - (b * F + O * X)), (d -= O - (b * M + O * N))))
          : ((xe = x[6]),
            (at = x[7]),
            (m = x[8]),
            (ee = x[9]),
            (Ee = x[10]),
            (ie = x[11]),
            (c = x[12]),
            (d = x[13]),
            (h = x[14]),
            (k = _n(xe, Ee)),
            (g = k * Hr),
            k &&
              ((C = Math.cos(-k)),
              (P = Math.sin(-k)),
              (R = I * C + m * P),
              ($ = B * C + ee * P),
              (J = xe * C + Ee * P),
              (m = I * -P + m * C),
              (ee = B * -P + ee * C),
              (Ee = xe * -P + Ee * C),
              (ie = at * -P + ie * C),
              (I = R),
              (B = $),
              (xe = J)),
            (k = _n(-X, Ee)),
            (y = k * Hr),
            k &&
              ((C = Math.cos(-k)),
              (P = Math.sin(-k)),
              (R = F * C - m * P),
              ($ = M * C - ee * P),
              (J = X * C - Ee * P),
              (ie = N * P + ie * C),
              (F = R),
              (M = $),
              (X = J)),
            (k = _n(M, F)),
            (p = k * Hr),
            k &&
              ((C = Math.cos(k)),
              (P = Math.sin(k)),
              (R = F * C + M * P),
              ($ = I * C + B * P),
              (M = M * C - F * P),
              (B = B * C - I * P),
              (F = R),
              (I = $)),
            g &&
              Math.abs(g) + Math.abs(p) > 359.9 &&
              ((g = p = 0), (y = 180 - y)),
            (f = Se(Math.sqrt(F * F + M * M + X * X))),
            (_ = Se(Math.sqrt(B * B + xe * xe))),
            (k = _n(I, B)),
            (v = Math.abs(k) > 2e-4 ? k * Hr : 0),
            (w = ie ? 1 / (ie < 0 ? -ie : ie) : 0)),
        r.svg &&
          ((R = e.getAttribute("transform")),
          (r.forceCSS = e.setAttribute("transform", "") || !Cu(nr(e, pe))),
          R && e.setAttribute("transform", R))),
      Math.abs(v) > 90 &&
        Math.abs(v) < 270 &&
        (s
          ? ((f *= -1), (v += p <= 0 ? 180 : -180), (p += p <= 0 ? 180 : -180))
          : ((_ *= -1), (v += v <= 0 ? 180 : -180))),
      (t = t || r.uncache),
      (r.x =
        c -
        ((r.xPercent =
          c &&
          ((!t && r.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
          ? (e.offsetWidth * r.xPercent) / 100
          : 0) +
        o),
      (r.y =
        d -
        ((r.yPercent =
          d &&
          ((!t && r.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
          ? (e.offsetHeight * r.yPercent) / 100
          : 0) +
        o),
      (r.z = h + o),
      (r.scaleX = Se(f)),
      (r.scaleY = Se(_)),
      (r.rotation = Se(p) + a),
      (r.rotationX = Se(g) + a),
      (r.rotationY = Se(y) + a),
      (r.skewX = v + a),
      (r.skewY = T + a),
      (r.transformPerspective = w + o),
      (r.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (n[Qt] = us(u)),
      (r.xOffset = r.yOffset = 0),
      (r.force3D = kt.force3D),
      (r.renderTransform = r.svg ? Xh : Su ? Ou : qh),
      (r.uncache = 0),
      r
    );
  },
  us = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  zs = function (e, t, r) {
    var n = Ue(t);
    return Se(parseFloat(t) + parseFloat(Dr(e, "x", r + "px", n))) + n;
  },
  qh = function (e, t) {
    (t.z = "0px"),
      (t.rotationY = t.rotationX = "0deg"),
      (t.force3D = 0),
      Ou(e, t);
  },
  qr = "0deg",
  Yn = "0px",
  Xr = ") ",
  Ou = function (e, t) {
    var r = t || this,
      n = r.xPercent,
      s = r.yPercent,
      o = r.x,
      a = r.y,
      l = r.z,
      u = r.rotation,
      c = r.rotationY,
      d = r.rotationX,
      h = r.skewX,
      f = r.skewY,
      _ = r.scaleX,
      p = r.scaleY,
      g = r.transformPerspective,
      y = r.force3D,
      v = r.target,
      T = r.zOrigin,
      w = "",
      b = (y === "auto" && e && e !== 1) || y === !0;
    if (T && (d !== qr || c !== qr)) {
      var O = parseFloat(c) * Pn,
        x = Math.sin(O),
        k = Math.cos(O),
        C;
      (O = parseFloat(d) * Pn),
        (C = Math.cos(O)),
        (o = zs(v, o, x * C * -T)),
        (a = zs(v, a, -Math.sin(O) * -T)),
        (l = zs(v, l, k * C * -T + T));
    }
    g !== Yn && (w += "perspective(" + g + Xr),
      (n || s) && (w += "translate(" + n + "%, " + s + "%) "),
      (b || o !== Yn || a !== Yn || l !== Yn) &&
        (w +=
          l !== Yn || b
            ? "translate3d(" + o + ", " + a + ", " + l + ") "
            : "translate(" + o + ", " + a + Xr),
      u !== qr && (w += "rotate(" + u + Xr),
      c !== qr && (w += "rotateY(" + c + Xr),
      d !== qr && (w += "rotateX(" + d + Xr),
      (h !== qr || f !== qr) && (w += "skew(" + h + ", " + f + Xr),
      (_ !== 1 || p !== 1) && (w += "scale(" + _ + ", " + p + Xr),
      (v.style[pe] = w || "translate(0, 0)");
  },
  Xh = function (e, t) {
    var r = t || this,
      n = r.xPercent,
      s = r.yPercent,
      o = r.x,
      a = r.y,
      l = r.rotation,
      u = r.skewX,
      c = r.skewY,
      d = r.scaleX,
      h = r.scaleY,
      f = r.target,
      _ = r.xOrigin,
      p = r.yOrigin,
      g = r.xOffset,
      y = r.yOffset,
      v = r.forceCSS,
      T = parseFloat(o),
      w = parseFloat(a),
      b,
      O,
      x,
      k,
      C;
    (l = parseFloat(l)),
      (u = parseFloat(u)),
      (c = parseFloat(c)),
      c && ((c = parseFloat(c)), (u += c), (l += c)),
      l || u
        ? ((l *= Pn),
          (u *= Pn),
          (b = Math.cos(l) * d),
          (O = Math.sin(l) * d),
          (x = Math.sin(l - u) * -h),
          (k = Math.cos(l - u) * h),
          u &&
            ((c *= Pn),
            (C = Math.tan(u - c)),
            (C = Math.sqrt(1 + C * C)),
            (x *= C),
            (k *= C),
            c &&
              ((C = Math.tan(c)),
              (C = Math.sqrt(1 + C * C)),
              (b *= C),
              (O *= C))),
          (b = Se(b)),
          (O = Se(O)),
          (x = Se(x)),
          (k = Se(k)))
        : ((b = d), (k = h), (O = x = 0)),
      ((T && !~(o + "").indexOf("px")) || (w && !~(a + "").indexOf("px"))) &&
        ((T = Dr(f, "x", o, "px")), (w = Dr(f, "y", a, "px"))),
      (_ || p || g || y) &&
        ((T = Se(T + _ - (_ * b + p * x) + g)),
        (w = Se(w + p - (_ * O + p * k) + y))),
      (n || s) &&
        ((C = f.getBBox()),
        (T = Se(T + (n / 100) * C.width)),
        (w = Se(w + (s / 100) * C.height))),
      (C =
        "matrix(" + b + "," + O + "," + x + "," + k + "," + T + "," + w + ")"),
      f.setAttribute("transform", C),
      v && (f.style[pe] = C);
  },
  Hh = function (e, t, r, n, s) {
    var o = 360,
      a = Ne(s),
      l = parseFloat(s) * (a && ~s.indexOf("rad") ? Hr : 1),
      u = l - n,
      c = n + u + "deg",
      d,
      h;
    return (
      a &&
        ((d = s.split("_")[1]),
        d === "short" && ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -o)),
        d === "cw" && u < 0
          ? (u = ((u + o * ka) % o) - ~~(u / o) * o)
          : d === "ccw" && u > 0 && (u = ((u - o * ka) % o) - ~~(u / o) * o)),
      (e._pt = h = new dt(e._pt, t, r, n, u, Mh)),
      (h.e = c),
      (h.u = "deg"),
      e._props.push(r),
      h
    );
  },
  Fa = function (e, t) {
    for (var r in t) e[r] = t[r];
    return e;
  },
  Uh = function (e, t, r) {
    var n = Fa({}, r._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      o = r.style,
      a,
      l,
      u,
      c,
      d,
      h,
      f,
      _;
    n.svg
      ? ((u = r.getAttribute("transform")),
        r.setAttribute("transform", ""),
        (o[pe] = t),
        (a = yi(r, 1)),
        gi(r, pe),
        r.setAttribute("transform", u))
      : ((u = getComputedStyle(r)[pe]),
        (o[pe] = t),
        (a = yi(r, 1)),
        (o[pe] = u));
    for (l in mr)
      (u = n[l]),
        (c = a[l]),
        u !== c &&
          s.indexOf(l) < 0 &&
          ((f = Ue(u)),
          (_ = Ue(c)),
          (d = f !== _ ? Dr(r, l, u, _) : parseFloat(u)),
          (h = parseFloat(c)),
          (e._pt = new dt(e._pt, a, l, d, h - d, uo)),
          (e._pt.u = _ || 0),
          e._props.push(l));
    Fa(a, n);
  };
ht("padding,margin,Width,Radius", function (i, e) {
  var t = "Top",
    r = "Right",
    n = "Bottom",
    s = "Left",
    o = (e < 3 ? [t, r, n, s] : [t + s, t + r, n + r, n + s]).map(function (a) {
      return e < 2 ? i + a : "border" + a + i;
    });
  ls[e > 1 ? "border" + i : i] = function (a, l, u, c, d) {
    var h, f;
    if (arguments.length < 4)
      return (
        (h = o.map(function (_) {
          return cr(a, _, u);
        })),
        (f = h.join(" ")),
        f.split(h[0]).length === 5 ? h[0] : f
      );
    (h = (c + "").split(" ")),
      (f = {}),
      o.forEach(function (_, p) {
        return (f[_] = h[p] = h[p] || h[((p - 1) / 2) | 0]);
      }),
      a.init(l, f, d);
  };
});
var ku = {
  name: "css",
  register: fo,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, r, n, s) {
    var o = this._props,
      a = e.style,
      l = r.vars.startAt,
      u,
      c,
      d,
      h,
      f,
      _,
      p,
      g,
      y,
      v,
      T,
      w,
      b,
      O,
      x,
      k;
    $o || fo(),
      (this.styles = this.styles || wu(e)),
      (k = this.styles.props),
      (this.tween = r);
    for (p in t)
      if (p !== "autoRound" && ((c = t[p]), !(bt[p] && uu(p, t, r, n, e, s)))) {
        if (
          ((f = typeof c),
          (_ = ls[p]),
          f === "function" && ((c = c.call(r, n, e, s)), (f = typeof c)),
          f === "string" && ~c.indexOf("random(") && (c = di(c)),
          _)
        )
          _(this, e, p, c, r) && (x = 1);
        else if (p.substr(0, 2) === "--")
          (u = (getComputedStyle(e).getPropertyValue(p) + "").trim()),
            (c += ""),
            (Pr.lastIndex = 0),
            Pr.test(u) || ((g = Ue(u)), (y = Ue(c))),
            y ? g !== y && (u = Dr(e, p, u, y) + y) : g && (c += g),
            this.add(a, "setProperty", u, c, n, s, 0, 0, p),
            o.push(p),
            k.push(p, 0, a[p]);
        else if (f !== "undefined") {
          if (
            (l && p in l
              ? ((u = typeof l[p] == "function" ? l[p].call(r, n, e, s) : l[p]),
                Ne(u) && ~u.indexOf("random(") && (u = di(u)),
                Ue(u + "") || (u += kt.units[p] || Ue(cr(e, p)) || ""),
                (u + "").charAt(1) === "=" && (u = cr(e, p)))
              : (u = cr(e, p)),
            (h = parseFloat(u)),
            (v = f === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
            v && (c = c.substr(2)),
            (d = parseFloat(c)),
            p in rr &&
              (p === "autoAlpha" &&
                (h === 1 && cr(e, "visibility") === "hidden" && d && (h = 0),
                k.push("visibility", 0, a.visibility),
                Tr(
                  this,
                  a,
                  "visibility",
                  h ? "inherit" : "hidden",
                  d ? "inherit" : "hidden",
                  !d
                )),
              p !== "scale" &&
                p !== "transform" &&
                ((p = rr[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
            (T = p in mr),
            T)
          ) {
            if (
              (this.styles.save(p),
              w ||
                ((b = e._gsap),
                (b.renderTransform && !t.parseTransform) ||
                  yi(e, t.parseTransform),
                (O = t.smoothOrigin !== !1 && b.smooth),
                (w = this._pt =
                  new dt(this._pt, a, pe, 0, 1, b.renderTransform, b, 0, -1)),
                (w.dep = 1)),
              p === "scale")
            )
              (this._pt = new dt(
                this._pt,
                b,
                "scaleY",
                b.scaleY,
                (v ? On(b.scaleY, v + d) : d) - b.scaleY || 0,
                uo
              )),
                (this._pt.u = 0),
                o.push("scaleY", p),
                (p += "X");
            else if (p === "transformOrigin") {
              k.push(Qt, 0, a[Qt]),
                (c = Wh(c)),
                b.svg
                  ? ho(e, c, 0, O, 0, this)
                  : ((y = parseFloat(c.split(" ")[2]) || 0),
                    y !== b.zOrigin && Tr(this, b, "zOrigin", b.zOrigin, y),
                    Tr(this, a, p, us(u), us(c)));
              continue;
            } else if (p === "svgOrigin") {
              ho(e, c, 1, O, 0, this);
              continue;
            } else if (p in bu) {
              Hh(this, b, p, h, v ? On(h, v + c) : c);
              continue;
            } else if (p === "smoothOrigin") {
              Tr(this, b, "smooth", b.smooth, c);
              continue;
            } else if (p === "force3D") {
              b[p] = c;
              continue;
            } else if (p === "transform") {
              Uh(this, c, e);
              continue;
            }
          } else p in a || (p = Ln(p) || p);
          if (T || ((d || d === 0) && (h || h === 0) && !Ph.test(c) && p in a))
            (g = (u + "").substr((h + "").length)),
              d || (d = 0),
              (y = Ue(c) || (p in kt.units ? kt.units[p] : g)),
              g !== y && (h = Dr(e, p, u, y)),
              (this._pt = new dt(
                this._pt,
                T ? b : a,
                p,
                h,
                (v ? On(h, v + d) : d) - h,
                !T && (y === "px" || p === "zIndex") && t.autoRound !== !1
                  ? Dh
                  : uo
              )),
              (this._pt.u = y || 0),
              g !== y && y !== "%" && ((this._pt.b = u), (this._pt.r = Eh));
          else if (p in a) Vh.call(this, e, p, u, v ? v + c : c);
          else if (p in e) this.add(e, p, u || e[p], v ? v + c : c, n, s);
          else if (p !== "parseTransform") {
            Do(p, c);
            continue;
          }
          T || (p in a ? k.push(p, 0, a[p]) : k.push(p, 1, u || e[p])),
            o.push(p);
        }
      }
    x && _u(this);
  },
  render: function (e, t) {
    if (t.tween._time || !Vo())
      for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
    else t.styles.revert();
  },
  get: cr,
  aliases: rr,
  getSetter: function (e, t, r) {
    var n = rr[t];
    return (
      n && n.indexOf(",") < 0 && (t = n),
      t in mr && t !== Qt && (e._gsap.x || cr(e, "x"))
        ? r && Oa === r
          ? t === "scale"
            ? Nh
            : Ah
          : (Oa = r || {}) && (t === "scale" ? Lh : Ih)
        : e.style && !Po(e.style[t])
        ? Rh
        : ~t.indexOf("-")
        ? Fh
        : zo(e, t)
    );
  },
  core: { _removeProperty: gi, _getMatrix: Yo },
};
pt.utils.checkPrefix = Ln;
pt.core.getStyleSaver = wu;
(function (i, e, t, r) {
  var n = ht(i + "," + e + "," + t, function (s) {
    mr[s] = 1;
  });
  ht(e, function (s) {
    (kt.units[s] = "deg"), (bu[s] = 1);
  }),
    (rr[n[13]] = i + "," + e),
    ht(r, function (s) {
      var o = s.split(":");
      rr[o[1]] = n[o[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
ht(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (i) {
    kt.units[i] = "px";
  }
);
pt.registerPlugin(ku);
var qo = pt.registerPlugin(ku) || pt;
qo.core.Tween;
function Aa(i, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(i, r.key, r);
  }
}
function Gh(i, e, t) {
  return e && Aa(i.prototype, e), t && Aa(i, t), i;
}
/*!
 * Observer 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Ye,
  po,
  Ot,
  br,
  Cr,
  Mn,
  Pu,
  Ur,
  ri,
  Mu,
  dr,
  Ht,
  Eu,
  Du = function () {
    return (
      Ye ||
      (typeof window < "u" && (Ye = window.gsap) && Ye.registerPlugin && Ye)
    );
  },
  Ru = 1,
  bn = [],
  Y = [],
  ir = [],
  ni = Date.now,
  _o = function (e, t) {
    return t;
  },
  Qh = function () {
    var e = ri.core,
      t = e.bridge || {},
      r = e._scrollers,
      n = e._proxies;
    r.push.apply(r, Y),
      n.push.apply(n, ir),
      (Y = r),
      (ir = n),
      (_o = function (o, a) {
        return t[o](a);
      });
  },
  Mr = function (e, t) {
    return ~ir.indexOf(e) && ir[ir.indexOf(e) + 1][t];
  },
  ii = function (e) {
    return !!~Mu.indexOf(e);
  },
  ut = function (e, t, r, n, s) {
    return e.addEventListener(t, r, { passive: !n, capture: !!s });
  },
  Je = function (e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  },
  Oi = "scrollLeft",
  ki = "scrollTop",
  go = function () {
    return (dr && dr.isPressed) || Y.cache++;
  },
  cs = function (e, t) {
    var r = function n(s) {
      if (s || s === 0) {
        Ru && (Ot.history.scrollRestoration = "manual");
        var o = dr && dr.isPressed;
        (s = n.v = Math.round(s) || (dr && dr.iOS ? 1 : 0)),
          e(s),
          (n.cacheID = Y.cache),
          o && _o("ss", s);
      } else
        (t || Y.cache !== n.cacheID || _o("ref")) &&
          ((n.cacheID = Y.cache), (n.v = e()));
      return n.v + n.offset;
    };
    return (r.offset = 0), e && r;
  },
  nt = {
    s: Oi,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: cs(function (i) {
      return arguments.length
        ? Ot.scrollTo(i, Me.sc())
        : Ot.pageXOffset || br[Oi] || Cr[Oi] || Mn[Oi] || 0;
    }),
  },
  Me = {
    s: ki,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: nt,
    sc: cs(function (i) {
      return arguments.length
        ? Ot.scrollTo(nt.sc(), i)
        : Ot.pageYOffset || br[ki] || Cr[ki] || Mn[ki] || 0;
    }),
  },
  ct = function (e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || Ye.utils.toArray)(e)[0] ||
      (typeof e == "string" && Ye.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", e)
        : null)
    );
  },
  Rr = function (e, t) {
    var r = t.s,
      n = t.sc;
    ii(e) && (e = br.scrollingElement || Cr);
    var s = Y.indexOf(e),
      o = n === Me.sc ? 1 : 2;
    !~s && (s = Y.push(e) - 1), Y[s + o] || e.addEventListener("scroll", go);
    var a = Y[s + o],
      l =
        a ||
        (Y[s + o] =
          cs(Mr(e, r), !0) ||
          (ii(e)
            ? n
            : cs(function (u) {
                return arguments.length ? (e[r] = u) : e[r];
              })));
    return (
      (l.target = e),
      a || (l.smooth = Ye.getProperty(e, "scrollBehavior") === "smooth"),
      l
    );
  },
  mo = function (e, t, r) {
    var n = e,
      s = e,
      o = ni(),
      a = o,
      l = t || 50,
      u = Math.max(500, l * 3),
      c = function (_, p) {
        var g = ni();
        p || g - o > l
          ? ((s = n), (n = _), (a = o), (o = g))
          : r
          ? (n += _)
          : (n = s + ((_ - s) / (g - a)) * (o - a));
      },
      d = function () {
        (s = n = r ? 0 : n), (a = o = 0);
      },
      h = function (_) {
        var p = a,
          g = s,
          y = ni();
        return (
          (_ || _ === 0) && _ !== n && c(_),
          o === a || y - a > u
            ? 0
            : ((n + (r ? g : -g)) / ((r ? y : o) - p)) * 1e3
        );
      };
    return { update: c, reset: d, getVelocity: h };
  },
  qn = function (e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  Na = function (e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  },
  Fu = function () {
    (ri = Ye.core.globals().ScrollTrigger), ri && ri.core && Qh();
  },
  Au = function (e) {
    return (
      (Ye = e || Du()),
      Ye &&
        typeof document < "u" &&
        document.body &&
        ((Ot = window),
        (br = document),
        (Cr = br.documentElement),
        (Mn = br.body),
        (Mu = [Ot, br, Cr, Mn]),
        Ye.utils.clamp,
        (Eu = Ye.core.context || function () {}),
        (Ur = "onpointerenter" in Mn ? "pointer" : "mouse"),
        (Pu = Ce.isTouch =
          Ot.matchMedia &&
          Ot.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Ot ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (Ht = Ce.eventTypes =
          (
            "ontouchstart" in Cr
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Cr
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (Ru = 0);
        }, 500),
        Fu(),
        (po = 1)),
      po
    );
  };
nt.op = Me;
Y.cache = 0;
var Ce = (function () {
  function i(t) {
    this.init(t);
  }
  var e = i.prototype;
  return (
    (e.init = function (r) {
      po || Au(Ye) || console.warn("Please gsap.registerPlugin(Observer)"),
        ri || Fu();
      var n = r.tolerance,
        s = r.dragMinimum,
        o = r.type,
        a = r.target,
        l = r.lineHeight,
        u = r.debounce,
        c = r.preventDefault,
        d = r.onStop,
        h = r.onStopDelay,
        f = r.ignore,
        _ = r.wheelSpeed,
        p = r.event,
        g = r.onDragStart,
        y = r.onDragEnd,
        v = r.onDrag,
        T = r.onPress,
        w = r.onRelease,
        b = r.onRight,
        O = r.onLeft,
        x = r.onUp,
        k = r.onDown,
        C = r.onChangeX,
        P = r.onChangeY,
        F = r.onChange,
        M = r.onToggleX,
        X = r.onToggleY,
        N = r.onHover,
        I = r.onHoverEnd,
        B = r.onMove,
        R = r.ignoreCheck,
        $ = r.isNormalizer,
        J = r.onGestureStart,
        m = r.onGestureEnd,
        ee = r.onWheel,
        Ee = r.onEnable,
        at = r.onDisable,
        ie = r.onClick,
        xe = r.scrollSpeed,
        Oe = r.capture,
        se = r.allowClicks,
        De = r.lockAxis,
        ke = r.onLockAxis;
      (this.target = a = ct(a) || Cr),
        (this.vars = r),
        f && (f = Ye.utils.toArray(f)),
        (n = n || 1e-9),
        (s = s || 0),
        (_ = _ || 1),
        (xe = xe || 1),
        (o = o || "wheel,touch,pointer"),
        (u = u !== !1),
        l || (l = parseFloat(Ot.getComputedStyle(Mn).lineHeight) || 22);
      var Bt,
        Le,
        _t,
        H,
        ae,
        Ie,
        gt,
        S = this,
        mt = 0,
        or = 0,
        Nr = Rr(a, nt),
        ye = Rr(a, Me),
        Lr = Nr(),
        Ir = ye(),
        zn =
          ~o.indexOf("touch") &&
          !~o.indexOf("pointer") &&
          Ht[0] === "pointerdown",
        ze = ii(a),
        ve = a.ownerDocument || br,
        $t = [0, 0, 0],
        Vt = [0, 0, 0],
        zr = 0,
        ar = function () {
          return (zr = ni());
        },
        Kt = function (A, j) {
          return (
            ((S.event = A) && f && ~f.indexOf(A.target)) ||
            (j && zn && A.pointerType !== "touch") ||
            (R && R(A, j))
          );
        },
        lt = function () {
          S._vx.reset(), S._vy.reset(), Le.pause(), d && d(S);
        },
        Br = function () {
          var A = (S.deltaX = Na($t)),
            j = (S.deltaY = Na(Vt)),
            _e = Math.abs(A) >= n,
            E = Math.abs(j) >= n;
          F && (_e || E) && F(S, A, j, $t, Vt),
            _e &&
              (b && S.deltaX > 0 && b(S),
              O && S.deltaX < 0 && O(S),
              C && C(S),
              M && S.deltaX < 0 != mt < 0 && M(S),
              (mt = S.deltaX),
              ($t[0] = $t[1] = $t[2] = 0)),
            E &&
              (k && S.deltaY > 0 && k(S),
              x && S.deltaY < 0 && x(S),
              P && P(S),
              X && S.deltaY < 0 != or < 0 && X(S),
              (or = S.deltaY),
              (Vt[0] = Vt[1] = Vt[2] = 0)),
            (H || _t) && (B && B(S), _t && (v(S), (_t = !1)), (H = !1)),
            Ie && !(Ie = !1) && ke && ke(S),
            ae && (ee(S), (ae = !1)),
            (Bt = 0);
        },
        hn = function (A, j, _e) {
          ($t[_e] += A),
            (Vt[_e] += j),
            S._vx.update(A),
            S._vy.update(j),
            u ? Bt || (Bt = requestAnimationFrame(Br)) : Br();
        },
        dn = function (A, j) {
          De &&
            !gt &&
            ((S.axis = gt = Math.abs(A) > Math.abs(j) ? "x" : "y"), (Ie = !0)),
            gt !== "y" && (($t[2] += A), S._vx.update(A, !0)),
            gt !== "x" && ((Vt[2] += j), S._vy.update(j, !0)),
            u ? Bt || (Bt = requestAnimationFrame(Br)) : Br();
        },
        $r = function (A) {
          if (!Kt(A, 1)) {
            A = qn(A, c);
            var j = A.clientX,
              _e = A.clientY,
              E = j - S.x,
              Q = _e - S.y,
              L = S.isDragging;
            (S.x = j),
              (S.y = _e),
              (L ||
                Math.abs(S.startX - j) >= s ||
                Math.abs(S.startY - _e) >= s) &&
                (v && (_t = !0),
                L || (S.isDragging = !0),
                dn(E, Q),
                L || (g && g(S)));
          }
        },
        yr = (S.onPress = function (z) {
          Kt(z, 1) ||
            (z && z.button) ||
            ((S.axis = gt = null),
            Le.pause(),
            (S.isPressed = !0),
            (z = qn(z)),
            (mt = or = 0),
            (S.startX = S.x = z.clientX),
            (S.startY = S.y = z.clientY),
            S._vx.reset(),
            S._vy.reset(),
            ut($ ? a : ve, Ht[1], $r, c, !0),
            (S.deltaX = S.deltaY = 0),
            T && T(S));
        }),
        vr = (S.onRelease = function (z) {
          if (!Kt(z, 1)) {
            Je($ ? a : ve, Ht[1], $r, !0);
            var A = !isNaN(S.y - S.startY),
              j =
                S.isDragging &&
                (Math.abs(S.x - S.startX) > 3 || Math.abs(S.y - S.startY) > 3),
              _e = qn(z);
            !j &&
              A &&
              (S._vx.reset(),
              S._vy.reset(),
              c &&
                se &&
                Ye.delayedCall(0.08, function () {
                  if (ni() - zr > 300 && !z.defaultPrevented) {
                    if (z.target.click) z.target.click();
                    else if (ve.createEvent) {
                      var E = ve.createEvent("MouseEvents");
                      E.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Ot,
                        1,
                        _e.screenX,
                        _e.screenY,
                        _e.clientX,
                        _e.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        z.target.dispatchEvent(E);
                    }
                  }
                })),
              (S.isDragging = S.isGesturing = S.isPressed = !1),
              d && !$ && Le.restart(!0),
              y && j && y(S),
              w && w(S, j);
          }
        }),
        K = function (A) {
          return (
            A.touches &&
            A.touches.length > 1 &&
            (S.isGesturing = !0) &&
            J(A, S.isDragging)
          );
        },
        Vr = function () {
          return (S.isGesturing = !1) || m(S);
        },
        Wt = function (A) {
          if (!Kt(A)) {
            var j = Nr(),
              _e = ye();
            hn((j - Lr) * xe, (_e - Ir) * xe, 1),
              (Lr = j),
              (Ir = _e),
              d && Le.restart(!0);
          }
        },
        Yt = function (A) {
          if (!Kt(A)) {
            (A = qn(A, c)), ee && (ae = !0);
            var j =
              (A.deltaMode === 1 ? l : A.deltaMode === 2 ? Ot.innerHeight : 1) *
              _;
            hn(A.deltaX * j, A.deltaY * j, 0), d && !$ && Le.restart(!0);
          }
        },
        qt = function (A) {
          if (!Kt(A)) {
            var j = A.clientX,
              _e = A.clientY,
              E = j - S.x,
              Q = _e - S.y;
            (S.x = j), (S.y = _e), (H = !0), (E || Q) && dn(E, Q);
          }
        },
        Wr = function (A) {
          (S.event = A), N(S);
        },
        pn = function (A) {
          (S.event = A), I(S);
        },
        lr = function (A) {
          return Kt(A) || (qn(A, c) && ie(S));
        };
      (Le = S._dc = Ye.delayedCall(h || 0.25, lt).pause()),
        (S.deltaX = S.deltaY = 0),
        (S._vx = mo(0, 50, !0)),
        (S._vy = mo(0, 50, !0)),
        (S.scrollX = Nr),
        (S.scrollY = ye),
        (S.isDragging = S.isGesturing = S.isPressed = !1),
        Eu(this),
        (S.enable = function (z) {
          return (
            S.isEnabled ||
              (ut(ze ? ve : a, "scroll", go),
              o.indexOf("scroll") >= 0 && ut(ze ? ve : a, "scroll", Wt, c, Oe),
              o.indexOf("wheel") >= 0 && ut(a, "wheel", Yt, c, Oe),
              ((o.indexOf("touch") >= 0 && Pu) || o.indexOf("pointer") >= 0) &&
                (ut(a, Ht[0], yr, c, Oe),
                ut(ve, Ht[2], vr),
                ut(ve, Ht[3], vr),
                se && ut(a, "click", ar, !1, !0),
                ie && ut(a, "click", lr),
                J && ut(ve, "gesturestart", K),
                m && ut(ve, "gestureend", Vr),
                N && ut(a, Ur + "enter", Wr),
                I && ut(a, Ur + "leave", pn),
                B && ut(a, Ur + "move", qt)),
              (S.isEnabled = !0),
              z && z.type && yr(z),
              Ee && Ee(S)),
            S
          );
        }),
        (S.disable = function () {
          S.isEnabled &&
            (bn.filter(function (z) {
              return z !== S && ii(z.target);
            }).length || Je(ze ? ve : a, "scroll", go),
            S.isPressed &&
              (S._vx.reset(), S._vy.reset(), Je($ ? a : ve, Ht[1], $r, !0)),
            Je(ze ? ve : a, "scroll", Wt, Oe),
            Je(a, "wheel", Yt, Oe),
            Je(a, Ht[0], yr, Oe),
            Je(ve, Ht[2], vr),
            Je(ve, Ht[3], vr),
            Je(a, "click", ar, !0),
            Je(a, "click", lr),
            Je(ve, "gesturestart", K),
            Je(ve, "gestureend", Vr),
            Je(a, Ur + "enter", Wr),
            Je(a, Ur + "leave", pn),
            Je(a, Ur + "move", qt),
            (S.isEnabled = S.isPressed = S.isDragging = !1),
            at && at(S));
        }),
        (S.kill = S.revert =
          function () {
            S.disable();
            var z = bn.indexOf(S);
            z >= 0 && bn.splice(z, 1), dr === S && (dr = 0);
          }),
        bn.push(S),
        $ && ii(a) && (dr = S),
        S.enable(p);
    }),
    Gh(i, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    i
  );
})();
Ce.version = "3.12.1";
Ce.create = function (i) {
  return new Ce(i);
};
Ce.register = Au;
Ce.getAll = function () {
  return bn.slice();
};
Ce.getById = function (i) {
  return bn.filter(function (e) {
    return e.vars.id === i;
  })[0];
};
Du() && Ye.registerPlugin(Ce);
/*!
 * ScrollTrigger 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var D,
  yn,
  U,
  oe,
  Gt,
  fe,
  Nu,
  fs,
  hs,
  Cn,
  qi,
  Pi,
  He,
  vs,
  yo,
  je,
  La,
  Ia,
  vn,
  Lu,
  Bs,
  Iu,
  wt,
  zu,
  Bu,
  $u,
  wr,
  vo,
  Xo,
  $s,
  Mi = 1,
  tt = Date.now,
  Vs = tt(),
  It = 0,
  Qn = 0,
  za = function (e, t, r) {
    var n = xt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return (r["_" + t + "Clamp"] = n), n ? e.substr(6, e.length - 7) : e;
  },
  Ba = function (e, t) {
    return t && (!xt(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  },
  Kh = function i() {
    return Qn && requestAnimationFrame(i);
  },
  $a = function () {
    return (vs = 1);
  },
  Va = function () {
    return (vs = 0);
  },
  er = function (e) {
    return e;
  },
  Kn = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Vu = function () {
    return typeof window < "u";
  },
  Wu = function () {
    return D || (Vu() && (D = window.gsap) && D.registerPlugin && D);
  },
  ln = function (e) {
    return !!~Nu.indexOf(e);
  },
  Yu = function (e) {
    return (
      Mr(e, "getBoundingClientRect") ||
      (ln(e)
        ? function () {
            return (Ki.width = U.innerWidth), (Ki.height = U.innerHeight), Ki;
          }
        : function () {
            return hr(e);
          })
    );
  },
  Zh = function (e, t, r) {
    var n = r.d,
      s = r.d2,
      o = r.a;
    return (o = Mr(e, "getBoundingClientRect"))
      ? function () {
          return o()[n];
        }
      : function () {
          return (t ? U["inner" + s] : e["client" + s]) || 0;
        };
  },
  Jh = function (e, t) {
    return !t || ~ir.indexOf(e)
      ? Yu(e)
      : function () {
          return Ki;
        };
  },
  pr = function (e, t) {
    var r = t.s,
      n = t.d2,
      s = t.d,
      o = t.a;
    return Math.max(
      0,
      (r = "scroll" + n) && (o = Mr(e, r))
        ? o() - Yu(e)()[s]
        : ln(e)
        ? (Gt[r] || fe[r]) -
          (U["inner" + n] || Gt["client" + n] || fe["client" + n])
        : e[r] - e["offset" + n]
    );
  },
  Ei = function (e, t) {
    for (var r = 0; r < vn.length; r += 3)
      (!t || ~t.indexOf(vn[r + 1])) && e(vn[r], vn[r + 1], vn[r + 2]);
  },
  xt = function (e) {
    return typeof e == "string";
  },
  it = function (e) {
    return typeof e == "function";
  },
  Xi = function (e) {
    return typeof e == "number";
  },
  Gr = function (e) {
    return typeof e == "object";
  },
  Xn = function (e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  },
  Ws = function (e, t) {
    if (e.enabled) {
      var r = t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  },
  gn = Math.abs,
  qu = "left",
  Xu = "top",
  Ho = "right",
  Uo = "bottom",
  nn = "width",
  sn = "height",
  si = "Right",
  oi = "Left",
  ai = "Top",
  li = "Bottom",
  Te = "padding",
  Dt = "margin",
  In = "Width",
  Go = "Height",
  Ve = "px",
  Rt = function (e) {
    return U.getComputedStyle(e);
  },
  jh = function (e) {
    var t = Rt(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
  },
  Wa = function (e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  },
  hr = function (e, t) {
    var r =
        t &&
        Rt(e)[yo] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        D.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      n = e.getBoundingClientRect();
    return r && r.progress(0).kill(), n;
  },
  wo = function (e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  },
  Hu = function (e) {
    var t = [],
      r = e.labels,
      n = e.duration(),
      s;
    for (s in r) t.push(r[s] / n);
    return t;
  },
  ed = function (e) {
    return function (t) {
      return D.utils.snap(Hu(e), t);
    };
  },
  Qo = function (e) {
    var t = D.utils.snap(e),
      r =
        Array.isArray(e) &&
        e.slice(0).sort(function (n, s) {
          return n - s;
        });
    return r
      ? function (n, s, o) {
          o === void 0 && (o = 0.001);
          var a;
          if (!s) return t(n);
          if (s > 0) {
            for (n -= o, a = 0; a < r.length; a++) if (r[a] >= n) return r[a];
            return r[a - 1];
          } else for (a = r.length, n += o; a--; ) if (r[a] <= n) return r[a];
          return r[0];
        }
      : function (n, s, o) {
          o === void 0 && (o = 0.001);
          var a = t(n);
          return !s || Math.abs(a - n) < o || a - n < 0 == s < 0
            ? a
            : t(s < 0 ? n - e : n + e);
        };
  },
  td = function (e) {
    return function (t, r) {
      return Qo(Hu(e))(t, r.direction);
    };
  },
  Di = function (e, t, r, n) {
    return r.split(",").forEach(function (s) {
      return e(t, s, n);
    });
  },
  Ae = function (e, t, r, n, s) {
    return e.addEventListener(t, r, { passive: !n, capture: !!s });
  },
  Fe = function (e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  },
  Ri = function (e, t, r) {
    (r = r && r.wheelHandler), r && (e(t, "wheel", r), e(t, "touchmove", r));
  },
  Ya = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Fi = { toggleActions: "play", anticipatePin: 0 },
  ds = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Hi = function (e, t) {
    if (xt(e)) {
      var r = e.indexOf("="),
        n = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          n +
          (e in ds
            ? ds[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  },
  Ai = function (e, t, r, n, s, o, a, l) {
    var u = s.startColor,
      c = s.endColor,
      d = s.fontSize,
      h = s.indent,
      f = s.fontWeight,
      _ = oe.createElement("div"),
      p = ln(r) || Mr(r, "pinType") === "fixed",
      g = e.indexOf("scroller") !== -1,
      y = p ? fe : r,
      v = e.indexOf("start") !== -1,
      T = v ? u : c,
      w =
        "border-color:" +
        T +
        ";font-size:" +
        d +
        ";color:" +
        T +
        ";font-weight:" +
        f +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (w += "position:" + ((g || l) && p ? "fixed;" : "absolute;")),
      (g || l || !p) &&
        (w += (n === Me ? Ho : Uo) + ":" + (o + parseFloat(h)) + "px;"),
      a &&
        (w +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (_._isStart = v),
      _.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (_.style.cssText = w),
      (_.innerText = t || t === 0 ? e + "-" + t : e),
      y.children[0] ? y.insertBefore(_, y.children[0]) : y.appendChild(_),
      (_._offset = _["offset" + n.op.d2]),
      Ui(_, 0, n, v),
      _
    );
  },
  Ui = function (e, t, r, n) {
    var s = { display: "block" },
      o = r[n ? "os2" : "p2"],
      a = r[n ? "p2" : "os2"];
    (e._isFlipped = n),
      (s[r.a + "Percent"] = n ? -100 : 0),
      (s[r.a] = n ? "1px" : 0),
      (s["border" + o + In] = 1),
      (s["border" + a + In] = 0),
      (s[r.p] = t + "px"),
      D.set(e, s);
  },
  V = [],
  So = {},
  vi,
  qa = function () {
    return tt() - It > 34 && (vi || (vi = requestAnimationFrame(_r)));
  },
  mn = function () {
    (!wt || !wt.isPressed || wt.startX > fe.clientWidth) &&
      (Y.cache++,
      wt ? vi || (vi = requestAnimationFrame(_r)) : _r(),
      It || cn("scrollStart"),
      (It = tt()));
  },
  Ys = function () {
    ($u = U.innerWidth), (Bu = U.innerHeight);
  },
  Zn = function () {
    Y.cache++,
      !He &&
        !Iu &&
        !oe.fullscreenElement &&
        !oe.webkitFullscreenElement &&
        (!zu ||
          $u !== U.innerWidth ||
          Math.abs(U.innerHeight - Bu) > U.innerHeight * 0.25) &&
        fs.restart(!0);
  },
  un = {},
  rd = [],
  Uu = function i() {
    return Fe(q, "scrollEnd", i) || Jr(!0);
  },
  cn = function (e) {
    return (
      (un[e] &&
        un[e].map(function (t) {
          return t();
        })) ||
      rd
    );
  },
  St = [],
  Gu = function (e) {
    for (var t = 0; t < St.length; t += 5)
      (!e || (St[t + 4] && St[t + 4].query === e)) &&
        ((St[t].style.cssText = St[t + 1]),
        St[t].getBBox && St[t].setAttribute("transform", St[t + 2] || ""),
        (St[t + 3].uncache = 1));
  },
  Ko = function (e, t) {
    var r;
    for (je = 0; je < V.length; je++)
      (r = V[je]),
        r && (!t || r._ctx === t) && (e ? r.kill(1) : r.revert(!0, !0));
    t && Gu(t), t || cn("revert");
  },
  Qu = function (e, t) {
    Y.cache++,
      (t || !et) &&
        Y.forEach(function (r) {
          return it(r) && r.cacheID++ && (r.rec = 0);
        }),
      xt(e) && (U.history.scrollRestoration = Xo = e);
  },
  et,
  on = 0,
  Xa,
  nd = function () {
    if (Xa !== on) {
      var e = (Xa = on);
      requestAnimationFrame(function () {
        return e === on && Jr(!0);
      });
    }
  },
  Jr = function (e, t) {
    if (It && !e) {
      Ae(q, "scrollEnd", Uu);
      return;
    }
    (et = q.isRefreshing = !0),
      Y.forEach(function (n) {
        return it(n) && ++n.cacheID && (n.rec = n());
      });
    var r = cn("refreshInit");
    Lu && q.sort(),
      t || Ko(),
      Y.forEach(function (n) {
        it(n) && (n.smooth && (n.target.style.scrollBehavior = "auto"), n(0));
      }),
      V.slice(0).forEach(function (n) {
        return n.refresh();
      }),
      V.forEach(function (n, s) {
        if (n._subPinOffset && n.pin) {
          var o = n.vars.horizontal ? "offsetWidth" : "offsetHeight",
            a = n.pin[o];
          n.revert(!0, 1), n.adjustPinSpacing(n.pin[o] - a), n.refresh();
        }
      }),
      V.forEach(function (n) {
        var s = pr(n.scroller, n._dir);
        (n.vars.end === "max" || (n._endClamp && n.end > s)) &&
          n.setPositions(n.start, Math.max(n.start + 1, s), !0);
      }),
      r.forEach(function (n) {
        return n && n.render && n.render(-1);
      }),
      Y.forEach(function (n) {
        it(n) &&
          (n.smooth &&
            requestAnimationFrame(function () {
              return (n.target.style.scrollBehavior = "smooth");
            }),
          n.rec && n(n.rec));
      }),
      Qu(Xo, 1),
      fs.pause(),
      on++,
      (et = 2),
      _r(2),
      V.forEach(function (n) {
        return it(n.vars.onRefresh) && n.vars.onRefresh(n);
      }),
      (et = q.isRefreshing = !1),
      cn("refresh");
  },
  xo = 0,
  Gi = 1,
  ui,
  _r = function (e) {
    if (!et || e === 2) {
      (q.isUpdating = !0), ui && ui.update(0);
      var t = V.length,
        r = tt(),
        n = r - Vs >= 50,
        s = t && V[0].scroll();
      if (
        ((Gi = xo > s ? -1 : 1),
        et || (xo = s),
        n &&
          (It && !vs && r - It > 200 && ((It = 0), cn("scrollEnd")),
          (qi = Vs),
          (Vs = r)),
        Gi < 0)
      ) {
        for (je = t; je-- > 0; ) V[je] && V[je].update(0, n);
        Gi = 1;
      } else for (je = 0; je < t; je++) V[je] && V[je].update(0, n);
      q.isUpdating = !1;
    }
    vi = 0;
  },
  To = [
    qu,
    Xu,
    Uo,
    Ho,
    Dt + li,
    Dt + si,
    Dt + ai,
    Dt + oi,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  Qi = To.concat([
    nn,
    sn,
    "boxSizing",
    "max" + In,
    "max" + Go,
    "position",
    Dt,
    Te,
    Te + ai,
    Te + si,
    Te + li,
    Te + oi,
  ]),
  id = function (e, t, r) {
    En(r);
    var n = e._gsap;
    if (n.spacerIsNative) En(n.spacerState);
    else if (e._gsap.swappedIn) {
      var s = t.parentNode;
      s && (s.insertBefore(e, t), s.removeChild(t));
    }
    e._gsap.swappedIn = !1;
  },
  qs = function (e, t, r, n) {
    if (!e._gsap.swappedIn) {
      for (var s = To.length, o = t.style, a = e.style, l; s--; )
        (l = To[s]), (o[l] = r[l]);
      (o.position = r.position === "absolute" ? "absolute" : "relative"),
        r.display === "inline" && (o.display = "inline-block"),
        (a[Uo] = a[Ho] = "auto"),
        (o.flexBasis = r.flexBasis || "auto"),
        (o.overflow = "visible"),
        (o.boxSizing = "border-box"),
        (o[nn] = wo(e, nt) + Ve),
        (o[sn] = wo(e, Me) + Ve),
        (o[Te] = a[Dt] = a[Xu] = a[qu] = "0"),
        En(n),
        (a[nn] = a["max" + In] = r[nn]),
        (a[sn] = a["max" + Go] = r[sn]),
        (a[Te] = r[Te]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  sd = /([A-Z])/g,
  En = function (e) {
    if (e) {
      var t = e.t.style,
        r = e.length,
        n = 0,
        s,
        o;
      for ((e.t._gsap || D.core.getCache(e.t)).uncache = 1; n < r; n += 2)
        (o = e[n + 1]),
          (s = e[n]),
          o
            ? (t[s] = o)
            : t[s] && t.removeProperty(s.replace(sd, "-$1").toLowerCase());
    }
  },
  Ni = function (e) {
    for (var t = Qi.length, r = e.style, n = [], s = 0; s < t; s++)
      n.push(Qi[s], r[Qi[s]]);
    return (n.t = e), n;
  },
  od = function (e, t, r) {
    for (var n = [], s = e.length, o = r ? 8 : 0, a; o < s; o += 2)
      (a = e[o]), n.push(a, a in t ? t[a] : e[o + 1]);
    return (n.t = e.t), n;
  },
  Ki = { left: 0, top: 0 },
  Ha = function (e, t, r, n, s, o, a, l, u, c, d, h, f, _) {
    it(e) && (e = e(l)),
      xt(e) &&
        e.substr(0, 3) === "max" &&
        (e = h + (e.charAt(4) === "=" ? Hi("0" + e.substr(3), r) : 0));
    var p = f ? f.time() : 0,
      g,
      y,
      v;
    if ((f && f.seek(0), isNaN(e) || (e = +e), Xi(e)))
      f &&
        (e = D.utils.mapRange(
          f.scrollTrigger.start,
          f.scrollTrigger.end,
          0,
          h,
          e
        )),
        a && Ui(a, r, n, !0);
    else {
      it(t) && (t = t(l));
      var T = (e || "0").split(" "),
        w,
        b,
        O,
        x;
      (v = ct(t, l) || fe),
        (w = hr(v) || {}),
        (!w || (!w.left && !w.top)) &&
          Rt(v).display === "none" &&
          ((x = v.style.display),
          (v.style.display = "block"),
          (w = hr(v)),
          x ? (v.style.display = x) : v.style.removeProperty("display")),
        (b = Hi(T[0], w[n.d])),
        (O = Hi(T[1] || "0", r)),
        (e = w[n.p] - u[n.p] - c + b + s - O),
        a && Ui(a, O, n, r - O < 20 || (a._isStart && O > 20)),
        (r -= r - O);
    }
    if ((_ && ((l[_] = e || -0.001), e < 0 && (e = 0)), o)) {
      var k = e + r,
        C = o._isStart;
      (g = "scroll" + n.d2),
        Ui(
          o,
          k,
          n,
          (C && k > 20) ||
            (!C && (d ? Math.max(fe[g], Gt[g]) : o.parentNode[g]) <= k + 1)
        ),
        d &&
          ((u = hr(a)),
          d && (o.style[n.op.p] = u[n.op.p] - n.op.m - o._offset + Ve));
    }
    return (
      f &&
        v &&
        ((g = hr(v)),
        f.seek(h),
        (y = hr(v)),
        (f._caScrollDist = g[n.p] - y[n.p]),
        (e = (e / f._caScrollDist) * h)),
      f && f.seek(p),
      f ? e : Math.round(e)
    );
  },
  ad = /(webkit|moz|length|cssText|inset)/i,
  Ua = function (e, t, r, n) {
    if (e.parentNode !== t) {
      var s = e.style,
        o,
        a;
      if (t === fe) {
        (e._stOrig = s.cssText), (a = Rt(e));
        for (o in a)
          !+o &&
            !ad.test(o) &&
            a[o] &&
            typeof s[o] == "string" &&
            o !== "0" &&
            (s[o] = a[o]);
        (s.top = r), (s.left = n);
      } else s.cssText = e._stOrig;
      (D.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  },
  Ku = function (e, t, r) {
    var n = t,
      s = n;
    return function (o) {
      var a = Math.round(e());
      return (
        a !== n &&
          a !== s &&
          Math.abs(a - n) > 3 &&
          Math.abs(a - s) > 3 &&
          ((o = a), r && r()),
        (s = n),
        (n = o),
        o
      );
    };
  },
  Li = function (e, t, r) {
    var n = {};
    (n[t.p] = "+=" + r), D.set(e, n);
  },
  Ga = function (e, t) {
    var r = Rr(e, t),
      n = "_scroll" + t.p2,
      s = function o(a, l, u, c, d) {
        var h = o.tween,
          f = l.onComplete,
          _ = {};
        u = u || r();
        var p = Ku(r, u, function () {
          h.kill(), (o.tween = 0);
        });
        return (
          (d = (c && d) || 0),
          (c = c || a - u),
          h && h.kill(),
          (l[n] = a),
          (l.modifiers = _),
          (_[n] = function () {
            return p(u + c * h.ratio + d * h.ratio * h.ratio);
          }),
          (l.onUpdate = function () {
            Y.cache++, _r();
          }),
          (l.onComplete = function () {
            (o.tween = 0), f && f.call(h);
          }),
          (h = o.tween = D.to(e, l)),
          h
        );
      };
    return (
      (e[n] = r),
      (r.wheelHandler = function () {
        return s.tween && s.tween.kill() && (s.tween = 0);
      }),
      Ae(e, "wheel", r.wheelHandler),
      q.isTouch && Ae(e, "touchmove", r.wheelHandler),
      s
    );
  },
  q = (function () {
    function i(t, r) {
      yn ||
        i.register(D) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        vo(this),
        this.init(t, r);
    }
    var e = i.prototype;
    return (
      (e.init = function (r, n) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Qn)
        ) {
          this.update = this.refresh = this.kill = er;
          return;
        }
        r = Wa(xt(r) || Xi(r) || r.nodeType ? { trigger: r } : r, Fi);
        var s = r,
          o = s.onUpdate,
          a = s.toggleClass,
          l = s.id,
          u = s.onToggle,
          c = s.onRefresh,
          d = s.scrub,
          h = s.trigger,
          f = s.pin,
          _ = s.pinSpacing,
          p = s.invalidateOnRefresh,
          g = s.anticipatePin,
          y = s.onScrubComplete,
          v = s.onSnapComplete,
          T = s.once,
          w = s.snap,
          b = s.pinReparent,
          O = s.pinSpacer,
          x = s.containerAnimation,
          k = s.fastScrollEnd,
          C = s.preventOverlaps,
          P =
            r.horizontal || (r.containerAnimation && r.horizontal !== !1)
              ? nt
              : Me,
          F = !d && d !== 0,
          M = ct(r.scroller || U),
          X = D.core.getCache(M),
          N = ln(M),
          I =
            ("pinType" in r
              ? r.pinType
              : Mr(M, "pinType") || (N && "fixed")) === "fixed",
          B = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
          R = F && r.toggleActions.split(" "),
          $ = "markers" in r ? r.markers : Fi.markers,
          J = N ? 0 : parseFloat(Rt(M)["border" + P.p2 + In]) || 0,
          m = this,
          ee =
            r.onRefreshInit &&
            function () {
              return r.onRefreshInit(m);
            },
          Ee = Zh(M, N, P),
          at = Jh(M, N),
          ie = 0,
          xe = 0,
          Oe = 0,
          se = Rr(M, P),
          De,
          ke,
          Bt,
          Le,
          _t,
          H,
          ae,
          Ie,
          gt,
          S,
          mt,
          or,
          Nr,
          ye,
          Lr,
          Ir,
          zn,
          ze,
          ve,
          $t,
          Vt,
          zr,
          ar,
          Kt,
          lt,
          Br,
          hn,
          dn,
          $r,
          yr,
          vr,
          K,
          Vr,
          Wt,
          Yt,
          qt,
          Wr,
          pn,
          lr;
        if (
          ((m._startClamp = m._endClamp = !1),
          (m._dir = P),
          (g *= 45),
          (m.scroller = M),
          (m.scroll = x ? x.time.bind(x) : se),
          (Le = se()),
          (m.vars = r),
          (n = n || r.animation),
          "refreshPriority" in r &&
            ((Lu = 1), r.refreshPriority === -9999 && (ui = m)),
          (X.tweenScroll = X.tweenScroll || {
            top: Ga(M, Me),
            left: Ga(M, nt),
          }),
          (m.tweenTo = De = X.tweenScroll[P.p]),
          (m.scrubDuration = function (E) {
            (Vr = Xi(E) && E),
              Vr
                ? K
                  ? K.duration(E)
                  : (K = D.to(n, {
                      ease: "expo",
                      totalProgress: "+=0",
                      duration: Vr,
                      paused: !0,
                      onComplete: function () {
                        return y && y(m);
                      },
                    }))
                : (K && K.progress(1).kill(), (K = 0));
          }),
          n &&
            ((n.vars.lazy = !1),
            (n._initted && !m.isReverted) ||
              (n.vars.immediateRender !== !1 &&
                r.immediateRender !== !1 &&
                n.duration() &&
                n.render(0, !0, !0)),
            (m.animation = n.pause()),
            (n.scrollTrigger = m),
            m.scrubDuration(d),
            (yr = 0),
            l || (l = n.vars.id)),
          w &&
            ((!Gr(w) || w.push) && (w = { snapTo: w }),
            "scrollBehavior" in fe.style &&
              D.set(N ? [fe, Gt] : M, { scrollBehavior: "auto" }),
            Y.forEach(function (E) {
              return (
                it(E) &&
                E.target === (N ? oe.scrollingElement || Gt : M) &&
                (E.smooth = !1)
              );
            }),
            (Bt = it(w.snapTo)
              ? w.snapTo
              : w.snapTo === "labels"
              ? ed(n)
              : w.snapTo === "labelsDirectional"
              ? td(n)
              : w.directional !== !1
              ? function (E, Q) {
                  return Qo(w.snapTo)(E, tt() - xe < 500 ? 0 : Q.direction);
                }
              : D.utils.snap(w.snapTo)),
            (Wt = w.duration || { min: 0.1, max: 2 }),
            (Wt = Gr(Wt) ? Cn(Wt.min, Wt.max) : Cn(Wt, Wt)),
            (Yt = D.delayedCall(w.delay || Vr / 2 || 0.1, function () {
              var E = se(),
                Q = tt() - xe < 500,
                L = De.tween;
              if (
                (Q || Math.abs(m.getVelocity()) < 10) &&
                !L &&
                !vs &&
                ie !== E
              ) {
                var W = (E - H) / ye,
                  Re = n && !F ? n.totalProgress() : W,
                  Z = Q ? 0 : ((Re - vr) / (tt() - qi)) * 1e3 || 0,
                  we = D.utils.clamp(-W, 1 - W, (gn(Z / 2) * Z) / 0.185),
                  Ze = W + (w.inertia === !1 ? 0 : we),
                  Be = Cn(0, 1, Bt(Ze, m)),
                  le = Math.round(H + Be * ye),
                  te = w,
                  Xt = te.onStart,
                  ue = te.onInterrupt,
                  yt = te.onComplete;
                if (E <= ae && E >= H && le !== E) {
                  if (L && !L._initted && L.data <= gn(le - E)) return;
                  w.inertia === !1 && (we = Be - W),
                    De(
                      le,
                      {
                        duration: Wt(
                          gn(
                            (Math.max(gn(Ze - Re), gn(Be - Re)) * 0.185) /
                              Z /
                              0.05 || 0
                          )
                        ),
                        ease: w.ease || "power3",
                        data: gn(le - E),
                        onInterrupt: function () {
                          return Yt.restart(!0) && ue && ue(m);
                        },
                        onComplete: function () {
                          m.update(),
                            (ie = se()),
                            (yr = vr =
                              n && !F ? n.totalProgress() : m.progress),
                            v && v(m),
                            yt && yt(m);
                        },
                      },
                      E,
                      we * ye,
                      le - E - we * ye
                    ),
                    Xt && Xt(m, De.tween);
                }
              } else m.isActive && ie !== E && Yt.restart(!0);
            }).pause())),
          l && (So[l] = m),
          (h = m.trigger = ct(h || (f !== !0 && f))),
          (lr = h && h._gsap && h._gsap.stRevert),
          lr && (lr = lr(m)),
          (f = f === !0 ? h : ct(f)),
          xt(a) && (a = { targets: h, className: a }),
          f &&
            (_ === !1 ||
              _ === Dt ||
              (_ =
                !_ &&
                f.parentNode &&
                f.parentNode.style &&
                Rt(f.parentNode).display === "flex"
                  ? !1
                  : Te),
            (m.pin = f),
            (ke = D.core.getCache(f)),
            ke.spacer
              ? (Lr = ke.pinState)
              : (O &&
                  ((O = ct(O)),
                  O && !O.nodeType && (O = O.current || O.nativeElement),
                  (ke.spacerIsNative = !!O),
                  O && (ke.spacerState = Ni(O))),
                (ke.spacer = ze = O || oe.createElement("div")),
                ze.classList.add("pin-spacer"),
                l && ze.classList.add("pin-spacer-" + l),
                (ke.pinState = Lr = Ni(f))),
            r.force3D !== !1 && D.set(f, { force3D: !0 }),
            (m.spacer = ze = ke.spacer),
            ($r = Rt(f)),
            (Kt = $r[_ + P.os2]),
            ($t = D.getProperty(f)),
            (Vt = D.quickSetter(f, P.a, Ve)),
            qs(f, ze, $r),
            (zn = Ni(f))),
          $)
        ) {
          (or = Gr($) ? Wa($, Ya) : Ya),
            (S = Ai("scroller-start", l, M, P, or, 0)),
            (mt = Ai("scroller-end", l, M, P, or, 0, S)),
            (ve = S["offset" + P.op.d2]);
          var z = ct(Mr(M, "content") || M);
          (Ie = this.markerStart = Ai("start", l, z, P, or, ve, 0, x)),
            (gt = this.markerEnd = Ai("end", l, z, P, or, ve, 0, x)),
            x && (pn = D.quickSetter([Ie, gt], P.a, Ve)),
            !I &&
              !(ir.length && Mr(M, "fixedMarkers") === !0) &&
              (jh(N ? fe : M),
              D.set([S, mt], { force3D: !0 }),
              (Br = D.quickSetter(S, P.a, Ve)),
              (dn = D.quickSetter(mt, P.a, Ve)));
        }
        if (x) {
          var A = x.vars.onUpdate,
            j = x.vars.onUpdateParams;
          x.eventCallback("onUpdate", function () {
            m.update(0, 0, 1), A && A.apply(x, j || []);
          });
        }
        if (
          ((m.previous = function () {
            return V[V.indexOf(m) - 1];
          }),
          (m.next = function () {
            return V[V.indexOf(m) + 1];
          }),
          (m.revert = function (E, Q) {
            if (!Q) return m.kill(!0);
            var L = E !== !1 || !m.enabled,
              W = He;
            L !== m.isReverted &&
              (L &&
                ((qt = Math.max(se(), m.scroll.rec || 0)),
                (Oe = m.progress),
                (Wr = n && n.progress())),
              Ie &&
                [Ie, gt, S, mt].forEach(function (Re) {
                  return (Re.style.display = L ? "none" : "block");
                }),
              L && ((He = m), m.update(L)),
              f &&
                (!b || !m.isActive) &&
                (L ? id(f, ze, Lr) : qs(f, ze, Rt(f), lt)),
              L || m.update(L),
              (He = W),
              (m.isReverted = L));
          }),
          (m.refresh = function (E, Q, L, W) {
            if (!((He || !m.enabled) && !Q)) {
              if (f && E && It) {
                Ae(i, "scrollEnd", Uu);
                return;
              }
              !et && ee && ee(m),
                (He = m),
                De.tween && (De.tween.kill(), (De.tween = 0)),
                K && K.pause(),
                p && n && n.revert({ kill: !1 }).invalidate(),
                m.isReverted || m.revert(!0, !0),
                (m._subPinOffset = !1);
              var Re = Ee(),
                Z = at(),
                we = x ? x.duration() : pr(M, P),
                Ze = ye <= 0.01,
                Be = 0,
                le = W || 0,
                te = Gr(L) ? L.end : r.end,
                Xt = r.endTrigger || h,
                ue = Gr(L)
                  ? L.start
                  : r.start || (r.start === 0 || !h ? 0 : f ? "0 0" : "0 100%"),
                yt = (m.pinnedContainer =
                  r.pinnedContainer && ct(r.pinnedContainer, m)),
                Zt = (h && Math.max(0, V.indexOf(m))) || 0,
                vt = Zt,
                $e,
                qe,
                Yr,
                xi,
                Xe,
                Pe,
                Jt,
                ws,
                Jo,
                Bn,
                jt,
                $n,
                Ti;
              for (
                $ &&
                Gr(L) &&
                (($n = D.getProperty(S, P.p)), (Ti = D.getProperty(mt, P.p)));
                vt--;

              )
                (Pe = V[vt]),
                  Pe.end || Pe.refresh(0, 1) || (He = m),
                  (Jt = Pe.pin),
                  Jt &&
                    (Jt === h || Jt === f || Jt === yt) &&
                    !Pe.isReverted &&
                    (Bn || (Bn = []), Bn.unshift(Pe), Pe.revert(!0, !0)),
                  Pe !== V[vt] && (Zt--, vt--);
              for (
                it(ue) && (ue = ue(m)),
                  ue = za(ue, "start", m),
                  H =
                    Ha(
                      ue,
                      h,
                      Re,
                      P,
                      se(),
                      Ie,
                      S,
                      m,
                      Z,
                      J,
                      I,
                      we,
                      x,
                      m._startClamp && "_startClamp"
                    ) || (f ? -0.001 : 0),
                  it(te) && (te = te(m)),
                  xt(te) &&
                    !te.indexOf("+=") &&
                    (~te.indexOf(" ")
                      ? (te = (xt(ue) ? ue.split(" ")[0] : "") + te)
                      : ((Be = Hi(te.substr(2), Re)),
                        (te = xt(ue)
                          ? ue
                          : (x
                              ? D.utils.mapRange(
                                  0,
                                  x.duration(),
                                  x.scrollTrigger.start,
                                  x.scrollTrigger.end,
                                  H
                                )
                              : H) + Be),
                        (Xt = h))),
                  te = za(te, "end", m),
                  ae =
                    Math.max(
                      H,
                      Ha(
                        te || (Xt ? "100% 0" : we),
                        Xt,
                        Re,
                        P,
                        se() + Be,
                        gt,
                        mt,
                        m,
                        Z,
                        J,
                        I,
                        we,
                        x,
                        m._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  Be = 0,
                  vt = Zt;
                vt--;

              )
                (Pe = V[vt]),
                  (Jt = Pe.pin),
                  Jt &&
                    Pe.start - Pe._pinPush <= H &&
                    !x &&
                    Pe.end > 0 &&
                    (($e =
                      Pe.end -
                      (m._startClamp ? Math.max(0, Pe.start) : Pe.start)),
                    ((Jt === h && Pe.start - Pe._pinPush < H) || Jt === yt) &&
                      isNaN(ue) &&
                      (Be += $e * (1 - Pe.progress)),
                    Jt === f && (le += $e));
              if (
                ((H += Be),
                (ae += Be),
                m._startClamp && (m._startClamp += Be),
                m._endClamp &&
                  !et &&
                  ((m._endClamp = ae || -0.001), (ae = Math.min(ae, pr(M, P)))),
                (ye = ae - H || ((H -= 0.01) && 0.001)),
                Ze && (Oe = D.utils.clamp(0, 1, D.utils.normalize(H, ae, qt))),
                (m._pinPush = le),
                Ie &&
                  Be &&
                  (($e = {}),
                  ($e[P.a] = "+=" + Be),
                  yt && ($e[P.p] = "-=" + se()),
                  D.set([Ie, gt], $e)),
                f)
              )
                ($e = Rt(f)),
                  (xi = P === Me),
                  (Yr = se()),
                  (zr = parseFloat($t(P.a)) + le),
                  !we &&
                    ae > 1 &&
                    ((jt = (N ? oe.scrollingElement || Gt : M).style),
                    (jt = {
                      style: jt,
                      value: jt["overflow" + P.a.toUpperCase()],
                    }),
                    N &&
                      Rt(fe)["overflow" + P.a.toUpperCase()] !== "scroll" &&
                      (jt.style["overflow" + P.a.toUpperCase()] = "scroll")),
                  qs(f, ze, $e),
                  (zn = Ni(f)),
                  (qe = hr(f, !0)),
                  (ws = I && Rr(M, xi ? nt : Me)()),
                  _ &&
                    ((lt = [_ + P.os2, ye + le + Ve]),
                    (lt.t = ze),
                    (vt = _ === Te ? wo(f, P) + ye + le : 0),
                    vt && lt.push(P.d, vt + Ve),
                    En(lt),
                    yt &&
                      V.forEach(function (Vn) {
                        Vn.pin === yt &&
                          Vn.vars.pinSpacing !== !1 &&
                          (Vn._subPinOffset = !0);
                      }),
                    I && se(qt)),
                  I &&
                    ((Xe = {
                      top: qe.top + (xi ? Yr - H : ws) + Ve,
                      left: qe.left + (xi ? ws : Yr - H) + Ve,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (Xe[nn] = Xe["max" + In] = Math.ceil(qe.width) + Ve),
                    (Xe[sn] = Xe["max" + Go] = Math.ceil(qe.height) + Ve),
                    (Xe[Dt] =
                      Xe[Dt + ai] =
                      Xe[Dt + si] =
                      Xe[Dt + li] =
                      Xe[Dt + oi] =
                        "0"),
                    (Xe[Te] = $e[Te]),
                    (Xe[Te + ai] = $e[Te + ai]),
                    (Xe[Te + si] = $e[Te + si]),
                    (Xe[Te + li] = $e[Te + li]),
                    (Xe[Te + oi] = $e[Te + oi]),
                    (Ir = od(Lr, Xe, b)),
                    et && se(0)),
                  n
                    ? ((Jo = n._initted),
                      Bs(1),
                      n.render(n.duration(), !0, !0),
                      (ar = $t(P.a) - zr + ye + le),
                      (hn = Math.abs(ye - ar) > 1),
                      I && hn && Ir.splice(Ir.length - 2, 2),
                      n.render(0, !0, !0),
                      Jo || n.invalidate(!0),
                      n.parent || n.totalTime(n.totalTime()),
                      Bs(0))
                    : (ar = ye),
                  jt &&
                    (jt.value
                      ? (jt.style["overflow" + P.a.toUpperCase()] = jt.value)
                      : jt.style.removeProperty("overflow-" + P.a));
              else if (h && se() && !x)
                for (qe = h.parentNode; qe && qe !== fe; )
                  qe._pinOffset &&
                    ((H -= qe._pinOffset), (ae -= qe._pinOffset)),
                    (qe = qe.parentNode);
              Bn &&
                Bn.forEach(function (Vn) {
                  return Vn.revert(!1, !0);
                }),
                (m.start = H),
                (m.end = ae),
                (Le = _t = et ? qt : se()),
                !x && !et && (Le < qt && se(qt), (m.scroll.rec = 0)),
                m.revert(!1, !0),
                (xe = tt()),
                Yt &&
                  ((ie = -1), m.isActive && se(H + ye * Oe), Yt.restart(!0)),
                (He = 0),
                n &&
                  F &&
                  (n._initted || Wr) &&
                  n.progress() !== Wr &&
                  n.progress(Wr || 0, !0).render(n.time(), !0, !0),
                (Ze || Oe !== m.progress || x) &&
                  (n &&
                    !F &&
                    n.totalProgress(
                      x && H < -0.001 && !Oe ? D.utils.normalize(H, ae, 0) : Oe,
                      !0
                    ),
                  (m.progress = Ze || (Le - H) / ye === Oe ? 0 : Oe)),
                f && _ && (ze._pinOffset = Math.round(m.progress * ar)),
                K && K.invalidate(),
                isNaN($n) ||
                  (($n -= D.getProperty(S, P.p)),
                  (Ti -= D.getProperty(mt, P.p)),
                  Li(S, P, $n),
                  Li(Ie, P, $n - (W || 0)),
                  Li(mt, P, Ti),
                  Li(gt, P, Ti - (W || 0))),
                Ze && !et && m.update(),
                c && !et && !Nr && ((Nr = !0), c(m), (Nr = !1));
            }
          }),
          (m.getVelocity = function () {
            return ((se() - _t) / (tt() - qi)) * 1e3 || 0;
          }),
          (m.endAnimation = function () {
            Xn(m.callbackAnimation),
              n &&
                (K
                  ? K.progress(1)
                  : n.paused()
                  ? F || Xn(n, m.direction < 0, 1)
                  : Xn(n, n.reversed()));
          }),
          (m.labelToScroll = function (E) {
            return (
              (n &&
                n.labels &&
                (H || m.refresh() || H) + (n.labels[E] / n.duration()) * ye) ||
              0
            );
          }),
          (m.getTrailing = function (E) {
            var Q = V.indexOf(m),
              L = m.direction > 0 ? V.slice(0, Q).reverse() : V.slice(Q + 1);
            return (
              xt(E)
                ? L.filter(function (W) {
                    return W.vars.preventOverlaps === E;
                  })
                : L
            ).filter(function (W) {
              return m.direction > 0 ? W.end <= H : W.start >= ae;
            });
          }),
          (m.update = function (E, Q, L) {
            if (!(x && !L && !E)) {
              var W = et === !0 ? qt : m.scroll(),
                Re = E ? 0 : (W - H) / ye,
                Z = Re < 0 ? 0 : Re > 1 ? 1 : Re || 0,
                we = m.progress,
                Ze,
                Be,
                le,
                te,
                Xt,
                ue,
                yt,
                Zt;
              if (
                (Q &&
                  ((_t = Le),
                  (Le = x ? se() : W),
                  w && ((vr = yr), (yr = n && !F ? n.totalProgress() : Z))),
                g &&
                  !Z &&
                  f &&
                  !He &&
                  !Mi &&
                  It &&
                  H < W + ((W - _t) / (tt() - qi)) * g &&
                  (Z = 1e-4),
                Z !== we && m.enabled)
              ) {
                if (
                  ((Ze = m.isActive = !!Z && Z < 1),
                  (Be = !!we && we < 1),
                  (ue = Ze !== Be),
                  (Xt = ue || !!Z != !!we),
                  (m.direction = Z > we ? 1 : -1),
                  (m.progress = Z),
                  Xt &&
                    !He &&
                    ((le = Z && !we ? 0 : Z === 1 ? 1 : we === 1 ? 2 : 3),
                    F &&
                      ((te =
                        (!ue && R[le + 1] !== "none" && R[le + 1]) || R[le]),
                      (Zt =
                        n &&
                        (te === "complete" || te === "reset" || te in n)))),
                  C &&
                    (ue || Zt) &&
                    (Zt || d || !n) &&
                    (it(C)
                      ? C(m)
                      : m.getTrailing(C).forEach(function (Yr) {
                          return Yr.endAnimation();
                        })),
                  F ||
                    (K && !He && !Mi
                      ? (K._dp._time - K._start !== K._time &&
                          K.render(K._dp._time - K._start),
                        K.resetTo
                          ? K.resetTo("totalProgress", Z, n._tTime / n._tDur)
                          : ((K.vars.totalProgress = Z),
                            K.invalidate().restart()))
                      : n && n.totalProgress(Z, !!(He && (xe || E)))),
                  f)
                ) {
                  if ((E && _ && (ze.style[_ + P.os2] = Kt), !I))
                    Vt(Kn(zr + ar * Z));
                  else if (Xt) {
                    if (
                      ((yt = !E && Z > we && ae + 1 > W && W + 1 >= pr(M, P)),
                      b)
                    )
                      if (!E && (Ze || yt)) {
                        var vt = hr(f, !0),
                          $e = W - H;
                        Ua(
                          f,
                          fe,
                          vt.top + (P === Me ? $e : 0) + Ve,
                          vt.left + (P === Me ? 0 : $e) + Ve
                        );
                      } else Ua(f, ze);
                    En(Ze || yt ? Ir : zn),
                      (hn && Z < 1 && Ze) || Vt(zr + (Z === 1 && !yt ? ar : 0));
                  }
                }
                w && !De.tween && !He && !Mi && Yt.restart(!0),
                  a &&
                    (ue || (T && Z && (Z < 1 || !$s))) &&
                    hs(a.targets).forEach(function (Yr) {
                      return Yr.classList[Ze || T ? "add" : "remove"](
                        a.className
                      );
                    }),
                  o && !F && !E && o(m),
                  Xt && !He
                    ? (F &&
                        (Zt &&
                          (te === "complete"
                            ? n.pause().totalProgress(1)
                            : te === "reset"
                            ? n.restart(!0).pause()
                            : te === "restart"
                            ? n.restart(!0)
                            : n[te]()),
                        o && o(m)),
                      (ue || !$s) &&
                        (u && ue && Ws(m, u),
                        B[le] && Ws(m, B[le]),
                        T && (Z === 1 ? m.kill(!1, 1) : (B[le] = 0)),
                        ue || ((le = Z === 1 ? 1 : 3), B[le] && Ws(m, B[le]))),
                      k &&
                        !Ze &&
                        Math.abs(m.getVelocity()) > (Xi(k) ? k : 2500) &&
                        (Xn(m.callbackAnimation),
                        K
                          ? K.progress(1)
                          : Xn(n, te === "reverse" ? 1 : !Z, 1)))
                    : F && o && !He && o(m);
              }
              if (dn) {
                var qe = x ? (W / x.duration()) * (x._caScrollDist || 0) : W;
                Br(qe + (S._isFlipped ? 1 : 0)), dn(qe);
              }
              pn && pn((-W / x.duration()) * (x._caScrollDist || 0));
            }
          }),
          (m.enable = function (E, Q) {
            m.enabled ||
              ((m.enabled = !0),
              Ae(M, "resize", Zn),
              Ae(N ? oe : M, "scroll", mn),
              ee && Ae(i, "refreshInit", ee),
              E !== !1 && ((m.progress = Oe = 0), (Le = _t = ie = se())),
              Q !== !1 && m.refresh());
          }),
          (m.getTween = function (E) {
            return E && De ? De.tween : K;
          }),
          (m.setPositions = function (E, Q, L, W) {
            if (x) {
              var Re = x.scrollTrigger,
                Z = x.duration(),
                we = Re.end - Re.start;
              (E = Re.start + (we * E) / Z), (Q = Re.start + (we * Q) / Z);
            }
            m.refresh(
              !1,
              !1,
              {
                start: Ba(E, L && !!m._startClamp),
                end: Ba(Q, L && !!m._endClamp),
              },
              W
            ),
              m.update();
          }),
          (m.adjustPinSpacing = function (E) {
            if (lt && E) {
              var Q = lt.indexOf(P.d) + 1;
              (lt[Q] = parseFloat(lt[Q]) + E + Ve),
                (lt[1] = parseFloat(lt[1]) + E + Ve),
                En(lt);
            }
          }),
          (m.disable = function (E, Q) {
            if (
              m.enabled &&
              (E !== !1 && m.revert(!0, !0),
              (m.enabled = m.isActive = !1),
              Q || (K && K.pause()),
              (qt = 0),
              ke && (ke.uncache = 1),
              ee && Fe(i, "refreshInit", ee),
              Yt && (Yt.pause(), De.tween && De.tween.kill() && (De.tween = 0)),
              !N)
            ) {
              for (var L = V.length; L--; )
                if (V[L].scroller === M && V[L] !== m) return;
              Fe(M, "resize", Zn), Fe(M, "scroll", mn);
            }
          }),
          (m.kill = function (E, Q) {
            m.disable(E, Q), K && !Q && K.kill(), l && delete So[l];
            var L = V.indexOf(m);
            L >= 0 && V.splice(L, 1),
              L === je && Gi > 0 && je--,
              (L = 0),
              V.forEach(function (W) {
                return W.scroller === m.scroller && (L = 1);
              }),
              L || et || (m.scroll.rec = 0),
              n &&
                ((n.scrollTrigger = null),
                E && n.revert({ kill: !1 }),
                Q || n.kill()),
              Ie &&
                [Ie, gt, S, mt].forEach(function (W) {
                  return W.parentNode && W.parentNode.removeChild(W);
                }),
              ui === m && (ui = 0),
              f &&
                (ke && (ke.uncache = 1),
                (L = 0),
                V.forEach(function (W) {
                  return W.pin === f && L++;
                }),
                L || (ke.spacer = 0)),
              r.onKill && r.onKill(m);
          }),
          V.push(m),
          m.enable(!1, !1),
          lr && lr(m),
          n && n.add && !ye)
        ) {
          var _e = m.update;
          (m.update = function () {
            (m.update = _e), H || ae || m.refresh();
          }),
            D.delayedCall(0.01, m.update),
            (ye = 0.01),
            (H = ae = 0);
        } else m.refresh();
        f && nd();
      }),
      (i.register = function (r) {
        return (
          yn ||
            ((D = r || Wu()), Vu() && window.document && i.enable(), (yn = Qn)),
          yn
        );
      }),
      (i.defaults = function (r) {
        if (r) for (var n in r) Fi[n] = r[n];
        return Fi;
      }),
      (i.disable = function (r, n) {
        (Qn = 0),
          V.forEach(function (o) {
            return o[n ? "kill" : "disable"](r);
          }),
          Fe(U, "wheel", mn),
          Fe(oe, "scroll", mn),
          clearInterval(Pi),
          Fe(oe, "touchcancel", er),
          Fe(fe, "touchstart", er),
          Di(Fe, oe, "pointerdown,touchstart,mousedown", $a),
          Di(Fe, oe, "pointerup,touchend,mouseup", Va),
          fs.kill(),
          Ei(Fe);
        for (var s = 0; s < Y.length; s += 3)
          Ri(Fe, Y[s], Y[s + 1]), Ri(Fe, Y[s], Y[s + 2]);
      }),
      (i.enable = function () {
        if (
          ((U = window),
          (oe = document),
          (Gt = oe.documentElement),
          (fe = oe.body),
          D &&
            ((hs = D.utils.toArray),
            (Cn = D.utils.clamp),
            (vo = D.core.context || er),
            (Bs = D.core.suppressOverwrites || er),
            (Xo = U.history.scrollRestoration || "auto"),
            (xo = U.pageYOffset),
            D.core.globals("ScrollTrigger", i),
            fe))
        ) {
          (Qn = 1),
            Kh(),
            Ce.register(D),
            (i.isTouch = Ce.isTouch),
            (wr =
              Ce.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            Ae(U, "wheel", mn),
            (Nu = [U, oe, Gt, fe]),
            D.matchMedia
              ? ((i.matchMedia = function (l) {
                  var u = D.matchMedia(),
                    c;
                  for (c in l) u.add(c, l[c]);
                  return u;
                }),
                D.addEventListener("matchMediaInit", function () {
                  return Ko();
                }),
                D.addEventListener("matchMediaRevert", function () {
                  return Gu();
                }),
                D.addEventListener("matchMedia", function () {
                  Jr(0, 1), cn("matchMedia");
                }),
                D.matchMedia("(orientation: portrait)", function () {
                  return Ys(), Ys;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Ys(),
            Ae(oe, "scroll", mn);
          var r = fe.style,
            n = r.borderTopStyle,
            s = D.core.Animation.prototype,
            o,
            a;
          for (
            s.revert ||
              Object.defineProperty(s, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              o = hr(fe),
              Me.m = Math.round(o.top + Me.sc()) || 0,
              nt.m = Math.round(o.left + nt.sc()) || 0,
              n ? (r.borderTopStyle = n) : r.removeProperty("border-top-style"),
              Pi = setInterval(qa, 250),
              D.delayedCall(0.5, function () {
                return (Mi = 0);
              }),
              Ae(oe, "touchcancel", er),
              Ae(fe, "touchstart", er),
              Di(Ae, oe, "pointerdown,touchstart,mousedown", $a),
              Di(Ae, oe, "pointerup,touchend,mouseup", Va),
              yo = D.utils.checkPrefix("transform"),
              Qi.push(yo),
              yn = tt(),
              fs = D.delayedCall(0.2, Jr).pause(),
              vn = [
                oe,
                "visibilitychange",
                function () {
                  var l = U.innerWidth,
                    u = U.innerHeight;
                  oe.hidden
                    ? ((La = l), (Ia = u))
                    : (La !== l || Ia !== u) && Zn();
                },
                oe,
                "DOMContentLoaded",
                Jr,
                U,
                "load",
                Jr,
                U,
                "resize",
                Zn,
              ],
              Ei(Ae),
              V.forEach(function (l) {
                return l.enable(0, 1);
              }),
              a = 0;
            a < Y.length;
            a += 3
          )
            Ri(Fe, Y[a], Y[a + 1]), Ri(Fe, Y[a], Y[a + 2]);
        }
      }),
      (i.config = function (r) {
        "limitCallbacks" in r && ($s = !!r.limitCallbacks);
        var n = r.syncInterval;
        (n && clearInterval(Pi)) || ((Pi = n) && setInterval(qa, n)),
          "ignoreMobileResize" in r &&
            (zu = i.isTouch === 1 && r.ignoreMobileResize),
          "autoRefreshEvents" in r &&
            (Ei(Fe) || Ei(Ae, r.autoRefreshEvents || "none"),
            (Iu = (r.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (i.scrollerProxy = function (r, n) {
        var s = ct(r),
          o = Y.indexOf(s),
          a = ln(s);
        ~o && Y.splice(o, a ? 6 : 2),
          n && (a ? ir.unshift(U, n, fe, n, Gt, n) : ir.unshift(s, n));
      }),
      (i.clearMatchMedia = function (r) {
        V.forEach(function (n) {
          return n._ctx && n._ctx.query === r && n._ctx.kill(!0, !0);
        });
      }),
      (i.isInViewport = function (r, n, s) {
        var o = (xt(r) ? ct(r) : r).getBoundingClientRect(),
          a = o[s ? nn : sn] * n || 0;
        return s
          ? o.right - a > 0 && o.left + a < U.innerWidth
          : o.bottom - a > 0 && o.top + a < U.innerHeight;
      }),
      (i.positionInViewport = function (r, n, s) {
        xt(r) && (r = ct(r));
        var o = r.getBoundingClientRect(),
          a = o[s ? nn : sn],
          l =
            n == null
              ? a / 2
              : n in ds
              ? ds[n] * a
              : ~n.indexOf("%")
              ? (parseFloat(n) * a) / 100
              : parseFloat(n) || 0;
        return s ? (o.left + l) / U.innerWidth : (o.top + l) / U.innerHeight;
      }),
      (i.killAll = function (r) {
        if (
          (V.slice(0).forEach(function (s) {
            return s.vars.id !== "ScrollSmoother" && s.kill();
          }),
          r !== !0)
        ) {
          var n = un.killAll || [];
          (un = {}),
            n.forEach(function (s) {
              return s();
            });
        }
      }),
      i
    );
  })();
q.version = "3.12.1";
q.saveStyles = function (i) {
  return i
    ? hs(i).forEach(function (e) {
        if (e && e.style) {
          var t = St.indexOf(e);
          t >= 0 && St.splice(t, 5),
            St.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              D.core.getCache(e),
              vo()
            );
        }
      })
    : St;
};
q.revert = function (i, e) {
  return Ko(!i, e);
};
q.create = function (i, e) {
  return new q(i, e);
};
q.refresh = function (i) {
  return i ? Zn() : (yn || q.register()) && Jr(!0);
};
q.update = function (i) {
  return ++Y.cache && _r(i === !0 ? 2 : 0);
};
q.clearScrollMemory = Qu;
q.maxScroll = function (i, e) {
  return pr(i, e ? nt : Me);
};
q.getScrollFunc = function (i, e) {
  return Rr(ct(i), e ? nt : Me);
};
q.getById = function (i) {
  return So[i];
};
q.getAll = function () {
  return V.filter(function (i) {
    return i.vars.id !== "ScrollSmoother";
  });
};
q.isScrolling = function () {
  return !!It;
};
q.snapDirectional = Qo;
q.addEventListener = function (i, e) {
  var t = un[i] || (un[i] = []);
  ~t.indexOf(e) || t.push(e);
};
q.removeEventListener = function (i, e) {
  var t = un[i],
    r = t && t.indexOf(e);
  r >= 0 && t.splice(r, 1);
};
q.batch = function (i, e) {
  var t = [],
    r = {},
    n = e.interval || 0.016,
    s = e.batchMax || 1e9,
    o = function (u, c) {
      var d = [],
        h = [],
        f = D.delayedCall(n, function () {
          c(d, h), (d = []), (h = []);
        }).pause();
      return function (_) {
        d.length || f.restart(!0),
          d.push(_.trigger),
          h.push(_),
          s <= d.length && f.progress(1);
      };
    },
    a;
  for (a in e)
    r[a] =
      a.substr(0, 2) === "on" && it(e[a]) && a !== "onRefreshInit"
        ? o(a, e[a])
        : e[a];
  return (
    it(s) &&
      ((s = s()),
      Ae(q, "refresh", function () {
        return (s = e.batchMax());
      })),
    hs(i).forEach(function (l) {
      var u = {};
      for (a in r) u[a] = r[a];
      (u.trigger = l), t.push(q.create(u));
    }),
    t
  );
};
var Qa = function (e, t, r, n) {
    return (
      t > n ? e(n) : t < 0 && e(0),
      r > n ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    );
  },
  Xs = function i(e, t) {
    t === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          t === !0
            ? "auto"
            : t
            ? "pan-" + t + (Ce.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === Gt && i(fe, t);
  },
  Ii = { auto: 1, scroll: 1 },
  ld = function (e) {
    var t = e.event,
      r = e.target,
      n = e.axis,
      s = (t.changedTouches ? t.changedTouches[0] : t).target,
      o = s._gsap || D.core.getCache(s),
      a = tt(),
      l;
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
      for (
        ;
        s &&
        s !== fe &&
        ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
          !(Ii[(l = Rt(s)).overflowY] || Ii[l.overflowX]));

      )
        s = s.parentNode;
      (o._isScroll =
        s &&
        s !== r &&
        !ln(s) &&
        (Ii[(l = Rt(s)).overflowY] || Ii[l.overflowX])),
        (o._isScrollT = a);
    }
    (o._isScroll || n === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
  },
  Zu = function (e, t, r, n) {
    return Ce.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (n = n && ld),
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function () {
        return r && Ae(oe, Ce.eventTypes[0], Za, !1, !0);
      },
      onDisable: function () {
        return Fe(oe, Ce.eventTypes[0], Za, !0);
      },
    });
  },
  ud = /(input|label|select|textarea)/i,
  Ka,
  Za = function (e) {
    var t = ud.test(e.target.tagName);
    (t || Ka) && ((e._gsapAllow = !0), (Ka = t));
  },
  cd = function (e) {
    Gr(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var t = e,
      r = t.normalizeScrollX,
      n = t.momentum,
      s = t.allowNestedScroll,
      o = t.onRelease,
      a,
      l,
      u = ct(e.target) || Gt,
      c = D.core.globals().ScrollSmoother,
      d = c && c.get(),
      h =
        wr &&
        ((e.content && ct(e.content)) ||
          (d && e.content !== !1 && !d.smooth() && d.content())),
      f = Rr(u, Me),
      _ = Rr(u, nt),
      p = 1,
      g =
        (Ce.isTouch && U.visualViewport
          ? U.visualViewport.scale * U.visualViewport.width
          : U.outerWidth) / U.innerWidth,
      y = 0,
      v = it(n)
        ? function () {
            return n(a);
          }
        : function () {
            return n || 2.8;
          },
      T,
      w,
      b = Zu(u, e.type, !0, s),
      O = function () {
        return (w = !1);
      },
      x = er,
      k = er,
      C = function () {
        (l = pr(u, Me)),
          (k = Cn(wr ? 1 : 0, l)),
          r && (x = Cn(0, pr(u, nt))),
          (T = on);
      },
      P = function () {
        (h._gsap.y = Kn(parseFloat(h._gsap.y) + f.offset) + "px"),
          (h.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(h._gsap.y) +
            ", 0, 1)"),
          (f.offset = f.cacheID = 0);
      },
      F = function () {
        if (w) {
          requestAnimationFrame(O);
          var $ = Kn(a.deltaY / 2),
            J = k(f.v - $);
          if (h && J !== f.v + f.offset) {
            f.offset = J - f.v;
            var m = Kn((parseFloat(h && h._gsap.y) || 0) - f.offset);
            (h.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              m +
              ", 0, 1)"),
              (h._gsap.y = m + "px"),
              (f.cacheID = Y.cache),
              _r();
          }
          return !0;
        }
        f.offset && P(), (w = !0);
      },
      M,
      X,
      N,
      I,
      B = function () {
        C(),
          M.isActive() &&
            M.vars.scrollY > l &&
            (f() > l ? M.progress(1) && f(l) : M.resetTo("scrollY", l));
      };
    return (
      h && D.set(h, { y: "+=0" }),
      (e.ignoreCheck = function (R) {
        return (
          (wr && R.type === "touchmove" && F()) ||
          (p > 1.05 && R.type !== "touchstart") ||
          a.isGesturing ||
          (R.touches && R.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        w = !1;
        var R = p;
        (p = Kn(((U.visualViewport && U.visualViewport.scale) || 1) / g)),
          M.pause(),
          R !== p && Xs(u, p > 1.01 ? !0 : r ? !1 : "x"),
          (X = _()),
          (N = f()),
          C(),
          (T = on);
      }),
      (e.onRelease = e.onGestureStart =
        function (R, $) {
          if ((f.offset && P(), !$)) I.restart(!0);
          else {
            Y.cache++;
            var J = v(),
              m,
              ee;
            r &&
              ((m = _()),
              (ee = m + (J * 0.05 * -R.velocityX) / 0.227),
              (J *= Qa(_, m, ee, pr(u, nt))),
              (M.vars.scrollX = x(ee))),
              (m = f()),
              (ee = m + (J * 0.05 * -R.velocityY) / 0.227),
              (J *= Qa(f, m, ee, pr(u, Me))),
              (M.vars.scrollY = k(ee)),
              M.invalidate().duration(J).play(0.01),
              ((wr && M.vars.scrollY >= l) || m >= l - 1) &&
                D.to({}, { onUpdate: B, duration: J });
          }
          o && o(R);
        }),
      (e.onWheel = function () {
        M._ts && M.pause(), tt() - y > 1e3 && ((T = 0), (y = tt()));
      }),
      (e.onChange = function (R, $, J, m, ee) {
        if (
          (on !== T && C(),
          $ && r && _(x(m[2] === $ ? X + (R.startX - R.x) : _() + $ - m[1])),
          J)
        ) {
          f.offset && P();
          var Ee = ee[2] === J,
            at = Ee ? N + R.startY - R.y : f() + J - ee[1],
            ie = k(at);
          Ee && at !== ie && (N += ie - at), f(ie);
        }
        (J || $) && _r();
      }),
      (e.onEnable = function () {
        Xs(u, r ? !1 : "x"),
          q.addEventListener("refresh", B),
          Ae(U, "resize", B),
          f.smooth &&
            ((f.target.style.scrollBehavior = "auto"),
            (f.smooth = _.smooth = !1)),
          b.enable();
      }),
      (e.onDisable = function () {
        Xs(u, !0),
          Fe(U, "resize", B),
          q.removeEventListener("refresh", B),
          b.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (a = new Ce(e)),
      (a.iOS = wr),
      wr && !f() && f(1),
      wr && D.ticker.add(er),
      (I = a._dc),
      (M = D.to(a, {
        ease: "power4",
        paused: !0,
        scrollX: r ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Ku(f, f(), function () {
            return M.pause();
          }),
        },
        onUpdate: _r,
        onComplete: I.vars.onComplete,
      })),
      a
    );
  };
q.sort = function (i) {
  return V.sort(
    i ||
      function (e, t) {
        return (
          (e.vars.refreshPriority || 0) * -1e6 +
          e.start -
          (t.start + (t.vars.refreshPriority || 0) * -1e6)
        );
      }
  );
};
q.observe = function (i) {
  return new Ce(i);
};
q.normalizeScroll = function (i) {
  if (typeof i > "u") return wt;
  if (i === !0 && wt) return wt.enable();
  if (i === !1) return wt && wt.kill();
  var e = i instanceof Ce ? i : cd(i);
  return wt && wt.target === e.target && wt.kill(), ln(e.target) && (wt = e), e;
};
q.core = {
  _getVelocityProp: mo,
  _inputObserver: Zu,
  _scrollers: Y,
  _proxies: ir,
  bridge: {
    ss: function () {
      It || cn("scrollStart"), (It = tt());
    },
    ref: function () {
      return He;
    },
  },
};
Wu() && D.registerPlugin(q);
function fd() {
  let i = navigator.userAgent,
    e = i.indexOf("Safari") > -1;
  return i.indexOf("Chrome") > -1 && e && (e = !1), e;
}
qo.registerPlugin(q);
let Zo = !0;
function Td() {
  Zo = !1;
}
function bd() {
  Zo = !0;
}
const hd = () => {
    if (fd()) return;
    const i = new Ff();
    i.on("scroll", q.update),
      qo.ticker.add((e) => {
        Zo && i.raf(e * 1e3);
      });
  },
  dd = ({ element: i, properties: e }) => ({}),
  pd = ".js-footer-logo",
  Ja = "FooterLogo",
  _d = () =>
    ot({ componentName: Ja, className: pd }).map((e) => {
      const t = { ...e.dataset },
        r = dd({ element: e, properties: t });
      return (
        st({ componentName: Ja, element: e, properties: t, methods: r }), r
      );
    }),
  gd = ({ element: i, properties: e }) => ({}),
  md = ".js-footer-alberts",
  ja = "FooterAlberts",
  yd = () =>
    ot({ componentName: ja, className: md }).map((e) => {
      const t = { ...e.dataset },
        r = gd({ element: e, properties: t });
      return (
        st({ componentName: ja, element: e, properties: t, methods: r }), r
      );
    }),
  vd = ({ element: i, properties: e }) => {
    const t = i.querySelector(".js-sticky-logo-svg");
    return {
      fillBlack: () => t.classList.add("is-black"),
      resetFill: () => {
        t.classList.remove("is-black");
      },
    };
  },
  wd = ".js-sticky-logo",
  el = "StickyLogo",
  Sd = () =>
    ot({ componentName: el, className: wd }).map((e) => {
      const t = { ...e.dataset },
        r = vd({ element: e, properties: t });
      return (
        st({ componentName: el, element: e, properties: t, methods: r }), r
      );
    }),
  Cd = () => {
    fi.setDefault({
      mq: {
        xxxs: 1,
        xxs: 320,
        xs: 420,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1200,
        xxl: 1440,
        xxxl: 1728,
      },
      defaultMq: { value: "md", type: "min" },
    }),
      fi.printDefault(),
      hd(),
      Mf(),
      sf(),
      Sd(),
      cf(),
      Cf(),
      df(),
      gf(),
      vf(),
      xf(),
      Hc(),
      _d(),
      Qc(),
      Jc(),
      tf(),
      yd(),
      Pf();
  };
export {
  q as S,
  ot as a,
  st as b,
  kl as c,
  Td as d,
  bd as e,
  Cd as f,
  qo as g,
  fi as h,
  Oo as i,
  Qr as j,
  xd as o,
};
