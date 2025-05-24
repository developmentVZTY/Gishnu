function o(e) {
  let t = e.offsetHeight;
  const n = getComputedStyle(e);
  return (t += parseInt(n.marginTop) + parseInt(n.marginBottom)), t;
}
function f(e) {
  let t = e.offsetWidth;
  const n = getComputedStyle(e);
  return (t += parseInt(n.marginLeft) + parseInt(n.marginRight)), t;
}
function s(e) {
  const t = e.getBoundingClientRect();
  return { top: t.top + window.pageYOffset, left: t.left + window.pageXOffset };
}
export { s as a, f as b, o };
