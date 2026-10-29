/* Solid circle cursor, colored to the inverse of whatever it sits on.
   Loaded on every page; no per-page wiring beyond the script tag.
   Performance notes:
   - The native cursor is only hidden AFTER the circle is on screen, so the first
     moves/clicks never happen with no visible pointer.
   - Position updates every frame (transform only). Color sampling, which reads
     layout (elementsFromPoint + getComputedStyle), is throttled and skipped while
     scrolling, then probed once when the scroll settles. */
(function () {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  if (window.__indiseaCursor) return;
  window.__indiseaCursor = true;

  var CHARCOAL = "#262626";
  var STONE = "#F0EDEA";
  var SIZE = 18;
  var PROBE_MS = 90;

  var dot = document.createElement("div");
  dot.setAttribute("aria-hidden", "true");
  dot.setAttribute("data-indisea-cursor", "");
  dot.style.cssText =
    "position:fixed;left:0;top:0;width:" + SIZE + "px;height:" + SIZE + "px;" +
    "border-radius:999px;background:" + CHARCOAL + ";pointer-events:none;z-index:2147483647;" +
    "transform:translate3d(-100px,-100px,0);will-change:transform;opacity:0;contain:strict;" +
    "transition:opacity 120ms linear, background-color 160ms linear, width 320ms cubic-bezier(.34,1.56,.64,1), height 320ms cubic-bezier(.34,1.56,.64,1);" +
    "display:grid;place-items:center;";
  /* Over elements with [data-cursor-btn="#hex"], the dot grows into a round arrow button of that color. */
  var BTN = 72;
  var icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  icon.setAttribute("viewBox", "0 0 24 24"); icon.setAttribute("width", "24"); icon.setAttribute("height", "24");
  icon.setAttribute("fill", "none"); icon.setAttribute("stroke", "currentColor"); icon.setAttribute("stroke-width", "2.6");
  icon.setAttribute("stroke-linecap", "round"); icon.setAttribute("stroke-linejoin", "round");
  icon.innerHTML = '<path d="M7 17L17 7"></path><path d="M8 7h9v9"></path>';
  icon.style.cssText = "display:block;flex:none;opacity:0;transform:scale(0.4) rotate(-45deg);transition:opacity 180ms linear, transform 360ms cubic-bezier(.34,1.56,.64,1);";
  dot.appendChild(icon);
  var mount = function () {
    document.querySelectorAll("[data-indisea-cursor]").forEach(function (old) { if (old !== dot) old.remove(); });
    document.body.appendChild(dot);
  };
  if (document.body) mount(); else document.addEventListener("DOMContentLoaded", mount);

  var css = document.getElementById("indisea-cursor-style") || document.createElement("style");
  css.id = "indisea-cursor-style";
  if (!css.parentNode) document.head.appendChild(css);
  var hideNative = function (on) { css.textContent = on ? "html,body,*,*::before,*::after{cursor:none !important;}" : ""; };
  hideNative(false);

  var lum = function (r, g, b) {
    var f = function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };

  var colorAt = function (stack) {
    for (var i = 0; i < stack.length; i++) {
      var el = stack[i];
      if (el === document.documentElement || el === dot) continue;
      var s = getComputedStyle(el);
      if (s.visibility === "hidden" || s.opacity === "0") continue;
      if ((s.maskImage && s.maskImage !== "none") || (s.webkitMaskImage && s.webkitMaskImage !== "none")) return "blend";
      var bg = s.backgroundColor;
      var m = bg && bg.match(/rgba?\(([^)]+)\)/);
      if (!m) continue;
      var p = m[1].split(",").map(parseFloat);
      if ((p.length > 3 ? p[3] : 1) <= 0.5) continue;
      var r = el.getBoundingClientRect();
      if (r.width < SIZE || r.height < SIZE) continue;
      return lum(p[0], p[1], p[2]) > 0.4 ? CHARCOAL : STONE;
    }
    var pm = getComputedStyle(document.body).backgroundColor.match(/rgba?\(([^)]+)\)/);
    if (pm) { var q = pm[1].split(",").map(parseFloat); return lum(q[0], q[1], q[2]) > 0.4 ? CHARCOAL : STONE; }
    return CHARCOAL;
  };

  var lastProbe = 0;
  var x = -100, y = -100, queued = false, shown = false, pressed = false, btn = null;
  var setBtn = function (color) {
    if (color === btn) return;
    btn = color;
    if (color) {
      dot.style.width = dot.style.height = BTN + "px";
      dot.style.mixBlendMode = "normal";
      dot.style.backgroundColor = color;
      var light = color.replace("#", "").toUpperCase() !== "262626";
      dot.style.color = light ? "#262626" : "#BEFF8B";
      icon.style.opacity = "1"; icon.style.transform = "none";
    } else {
      dot.style.width = dot.style.height = SIZE + "px";
      icon.style.opacity = "0"; icon.style.transform = "scale(0.4) rotate(-45deg)";
      dot.dataset.fill = ""; lastProbe = 0;
    }
  };
  var scrolling = false, scrollT = 0, probeT = 0;

  var paint = function () {
    if (btn) return;
    var c = colorAt(document.elementsFromPoint(x, y));
    if (dot.dataset.fill === c) return;
    dot.dataset.fill = c;
    dot.style.mixBlendMode = c === "blend" ? "difference" : "normal";
    dot.style.backgroundColor = c === "blend" ? "#FFFFFF" : c;
  };
  var probe = function () {
    clearTimeout(probeT);
    var now = performance.now();
    if (now - lastProbe >= PROBE_MS) { lastProbe = now; paint(); }
    else probeT = setTimeout(function () { lastProbe = performance.now(); paint(); }, PROBE_MS - (now - lastProbe));
  };

  var frame = function () {
    queued = false;
    dot.style.transform = "translate3d(" + x + "px," + y + "px,0) translate(-50%,-50%)" + (pressed ? " scale(" + (btn ? 0.9 : 0.7) + ")" : "");
    if (!scrolling) probe();
  };
  var queue = function () { if (!queued) { queued = true; requestAnimationFrame(frame); } };

  document.addEventListener("pointermove", function (e) {
    if (e.pointerType !== "mouse") return;
    x = e.clientX; y = e.clientY;
    var host = e.target && e.target.closest ? e.target.closest("[data-cursor-btn]") : null;
    setBtn(host ? host.getAttribute("data-cursor-btn") : null);
    if (!shown) { shown = true; dot.style.opacity = "1"; hideNative(true); }
    queue();
  }, { passive: true });

  document.addEventListener("pointerdown", function (e) { if (e.pointerType === "mouse") { pressed = true; queue(); } }, { passive: true });
  document.addEventListener("pointerup", function () { pressed = false; queue(); }, { passive: true });
  var hide = function () { setBtn(null); shown = false; dot.style.opacity = "0"; hideNative(false); };
  document.documentElement.addEventListener("mouseleave", hide);
  window.addEventListener("blur", hide);
  window.addEventListener("scroll", function () {
    if (!shown) return;
    scrolling = true;
    clearTimeout(scrollT);
    scrollT = setTimeout(function () {
      scrolling = false; lastProbe = 0;
      var el = document.elementFromPoint(x, y), host = el && el.closest ? el.closest("[data-cursor-btn]") : null;
      setBtn(host ? host.getAttribute("data-cursor-btn") : null);
      probe();
    }, 120);
  }, { passive: true });
})();
