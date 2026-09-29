/* Solid circle cursor, colored to the inverse of whatever it sits on.
   Loaded on every page; no per-page wiring beyond the script tag. */
(function () {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  /* Helmet scripts re-evaluate on mount and hot-reload, so without a guard every
     run appends another dot, another cursor:none style, and another probe loop. */
  if (window.__indiseaCursor) return;
  window.__indiseaCursor = true;

  var CHARCOAL = "#262626";
  var STONE = "#F0EDEA";
  var SIZE = 18;

  var dot = document.createElement("div");
  dot.setAttribute("aria-hidden", "true");
  dot.setAttribute("data-indisea-cursor", "");
  dot.style.cssText =
    "position:fixed;left:0;top:0;width:" + SIZE + "px;height:" + SIZE + "px;" +
    "border-radius:999px;background:" + CHARCOAL + ";pointer-events:none;z-index:2147483647;" +
    "transform:translate3d(-100px,-100px,0);will-change:transform;opacity:0;" +
    "transition:opacity 120ms linear, background-color 120ms linear, width 140ms ease, height 140ms ease;";
  var mount = function () {
    document.querySelectorAll("[data-indisea-cursor]").forEach(function (old) { old.remove(); });
    document.body.appendChild(dot);
  };
  if (document.body) mount(); else document.addEventListener("DOMContentLoaded", mount);

  /* Native cursor is hidden globally, including on links and inputs: the circle is
     the only pointer, so a second one appearing over a button would read as a bug. */
  var css = document.getElementById("indisea-cursor-style") || document.createElement("style");
  css.id = "indisea-cursor-style";
  css.textContent = "html,body,*,*::before,*::after{cursor:none !important;}";
  if (!css.parentNode) document.head.appendChild(css);

  var lum = function (r, g, b) {
    var f = function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };

  /* The color under the pointer is whatever paints there, which may be a card, a
     vivid block, an overlay, or the canvas. Read the whole HIT STACK rather than
     walking up from one element: the transparent header sits above the menu
     overlay, so an ancestor walk escapes to the page canvas behind it and picks a
     fill that is not what the eye sees. elementsFromPoint keeps paint order, so
     the first surface with real alpha is the one actually under the dot. */
  var colorAt = function (stack) {
    for (var i = 0; i < stack.length; i++) {
      var el = stack[i];
      if (el === document.documentElement) break;
      var s = getComputedStyle(el);
      if (s.visibility === "hidden" || s.opacity === "0") continue;
      /* Skip anything smaller than the dot. A 2px menu bar or a 6px status dot is
         painted UNDER the circle but cannot be what the circle sits on, and
         inverting against it flips the fill to match the surface behind it. */
      var r = el.getBoundingClientRect();
      if (r.width < SIZE || r.height < SIZE) continue;
      var bg = s.backgroundColor;
      var m = bg && bg.match(/rgba?\(([^)]+)\)/);
      if (m) {
        var p = m[1].split(",").map(parseFloat);
        var a = p.length > 3 ? p[3] : 1;
        if (a > 0.5) return lum(p[0], p[1], p[2]) > 0.4 ? CHARCOAL : STONE;
      }
    }
    var pageBg = getComputedStyle(document.body).backgroundColor;
    var pm = pageBg && pageBg.match(/rgba?\(([^)]+)\)/);
    if (pm) {
      var q = pm[1].split(",").map(parseFloat);
      return lum(q[0], q[1], q[2]) > 0.4 ? CHARCOAL : STONE;
    }
    return CHARCOAL;
  };

  var x = 0, y = 0, queued = false, shown = false;

  /* A mask means the element's painted area is not its box, so no single sampled
     color describes it: over the footer wordmark the box reports the glyph fill
     while most of it shows the surface behind. Hand those to the compositor
     instead. A white dot in difference blend inverts its own backdrop per pixel,
     so it stays visible on the letterforms and in the gaps between them. */
  var maskedAt = function (stack) {
    for (var i = 0; i < stack.length; i++) {
      var s = getComputedStyle(stack[i]);
      if ((s.maskImage && s.maskImage !== "none") || (s.webkitMaskImage && s.webkitMaskImage !== "none")) return true;
    }
    return false;
  };

  var frame = function () {
    queued = false;
    dot.style.transform = "translate3d(" + (x - SIZE / 2) + "px," + (y - SIZE / 2) + "px,0)";
    var stack = document.elementsFromPoint(x, y);
    if (maskedAt(stack)) {
      if (dot.dataset.fill !== "blend") {
        dot.dataset.fill = "blend";
        dot.style.mixBlendMode = "difference";
        dot.style.backgroundColor = "#FFFFFF";
      }
      return;
    }
    var c = colorAt(stack);
    if (dot.dataset.fill !== c) {
      dot.dataset.fill = c;
      dot.style.mixBlendMode = "normal";
      dot.style.backgroundColor = c;
    }
  };

  document.addEventListener("pointermove", function (e) {
    if (e.pointerType !== "mouse") return;
    x = e.clientX; y = e.clientY;
    if (!shown) { shown = true; dot.style.opacity = "1"; }
    if (!queued) { queued = true; requestAnimationFrame(frame); }
  }, { passive: true });

  document.addEventListener("pointerdown", function () { dot.style.width = dot.style.height = SIZE * 0.7 + "px"; }, { passive: true });
  document.addEventListener("pointerup", function () { dot.style.width = dot.style.height = SIZE + "px"; }, { passive: true });
  document.addEventListener("mouseleave", function () { shown = false; dot.style.opacity = "0"; });
  window.addEventListener("blur", function () { shown = false; dot.style.opacity = "0"; });
  /* Scrolling moves the page under a stationary pointer, so the fill is re-probed. */
  window.addEventListener("scroll", function () { if (shown && !queued) { queued = true; requestAnimationFrame(frame); } }, { passive: true });
})();
