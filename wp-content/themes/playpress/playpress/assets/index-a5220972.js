import { a, b as m, f as r } from "./index-2df84ebf.js";
const p = ({ element: e, properties: t }) => (console.log("contact image"), {}),
  i = ".js-contact-image",
  c = "ContactImage",
  d = () =>
    a({ componentName: c, className: i }).map((t) => {
      const o = { ...t.dataset },
        n = p({ element: t, properties: o });
      return m({ componentName: c, element: t, properties: o, methods: n }), n;
    });
const l = ({ element: e, properties: t }) => (console.log("contact form"), {}),
  C = ".js-contact-form",
  s = "ContactForm",
  N = () =>
    a({ componentName: s, className: C }).map((t) => {
      const o = { ...t.dataset },
        n = l({ element: t, properties: o });
      return m({ componentName: s, element: t, properties: o, methods: n }), n;
    });
r();
d();
N();
