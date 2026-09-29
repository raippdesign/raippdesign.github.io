/* Campo de tokens — a malha que reage ao toque.
   Uma grade em perspectiva desenhada em canvas dentro dos blocos de cor/escuros.
   O cursor não pinta um borrão: ele DESLOCA a malha. A deformação anda com o
   ponteiro, mancha o bloco na cor do sinal e volta ao lugar sozinha — que é a
   tese do site (o sistema aceita o toque porque a regra está nomeada).

   Monta sozinho em qualquer [data-field]. Atributos:
     data-mesh-line   cor das linhas da malha
     data-mesh-glow   cor da mancha que segue o cursor
     data-mesh-grain  "light" (grão branco) | "dark" (grão preto)
     data-mesh-amp     amplitude do deslocamento, px (padrão 34)
     data-mesh-step    passo do retículo em px (padrão 58)
     data-mesh-clip    seletor de um <svg> cujo desenho recorta a malha
     data-mesh-mode    "grid" (padrão) ou "dither" (assinatura em cruzinhas)
     data-mesh-cell    passo do pontilhado em px (padrão 13)
     data-mesh-horizon origem vertical do retículo, 0–1 (padrão 0.34)
   No celular e em prefers-reduced-motion: uma pintura só, malha parada + grão. */
(function () {
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lite = !window.matchMedia || window.matchMedia("(max-width: 860px), (pointer: coarse)").matches;
  var STATIC = reduced || lite;

  var LIFE = 1100, TRAIL = 14;
  var fields = [];
  var grains = {};

  function grain(kind) {
    if (grains[kind]) return grains[kind];
    var c = document.createElement("canvas");
    c.width = c.height = 96;
    var g = c.getContext("2d");
    var img = g.createImageData(96, 96);
    var v = kind === "dark" ? 0 : 255;
    for (var i = 0; i < img.data.length; i += 4) {
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = Math.random() * 40;
    }
    g.putImageData(img, 0, 0);
    grains[kind] = c;
    return c;
  }

  function make(host) {
    var cv = document.createElement("canvas");
    cv.setAttribute("aria-hidden", "true");
    cv.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none;";
    host.appendChild(cv);
    var f = {
      host: host, cv: cv, ctx: cv.getContext("2d"),
      line: resolve(host, host.getAttribute("data-mesh-line") || "#3BBFF7"),
      glow: resolve(host, host.getAttribute("data-mesh-glow") || "#3BBFF7"),
      grain: grain(host.getAttribute("data-mesh-grain") === "dark" ? "dark" : "light"),
      amp: parseFloat(host.getAttribute("data-mesh-amp") || "34"),
      step: parseFloat(host.getAttribute("data-mesh-step") || "58"),
      clipSel: host.getAttribute("data-mesh-clip") || "",
      mode: host.getAttribute("data-mesh-mode") || "grid",
      cell: parseFloat(host.getAttribute("data-mesh-cell") || "13"),
      clip: null, clipW: 0, mask: null, maskW: 0,
      hz: parseFloat(host.getAttribute("data-mesh-horizon") || "0.34"),
      mix: host.getAttribute("data-mesh-mix") === "multiply" ? "multiply" : "lighter",
      trail: [], w: 0, h: 0, dpr: 1, live: false, dirty: true
    };
    f.pattern = f.ctx.createPattern(f.grain, "repeat");
    fields.push(f);
    host.__meshState = f;

    var size = function () {
      var r = host.getBoundingClientRect();
      if (!r.width || !r.height) return;
      f.dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      f.w = r.width; f.h = r.height;
      cv.width = Math.round(r.width * f.dpr);
      cv.height = Math.round(r.height * f.dpr);
      f.ctx.setTransform(f.dpr, 0, 0, f.dpr, 0, 0);
      f.dirty = true;
    };
    if (window.ResizeObserver) new ResizeObserver(size).observe(host);
    else window.addEventListener("resize", size);
    size();

    if (!STATIC && window.IntersectionObserver) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { f.live = e.isIntersecting; });
      }, { rootMargin: "120px" }).observe(host);
    } else {
      f.live = true;
    }
    return f;
  }


  /* Recorte opcional: a malha só existe dentro de uma forma vinda de um <svg>
     (a assinatura no rodapé). O desenho é o mesmo; muda só a máscara. */
  function clipOf(f) {
    if (!f.clipSel || !window.Path2D || !window.DOMMatrix) return null;
    if (f.clip && f.clipW === f.w) return f.clip;
    var scope = f.host.parentNode || document;
    var svg = scope.querySelector(f.clipSel) || document.querySelector(f.clipSel);
    if (!svg) return null;
    var vb = (svg.getAttribute("viewBox") || "").split(/[ ,]+/).map(Number);
    if (vb.length < 4 || !vb[2]) return null;
    var s = f.w / vb[2];
    var base = new Path2D();
    var ds = svg.querySelectorAll("path");
    for (var i = 0; i < ds.length; i++) base.addPath(new Path2D(ds[i].getAttribute("d")));
    var out = new Path2D();
    out.addPath(base, new DOMMatrix([s, 0, 0, s, -vb[0] * s, -vb[1] * s]));
    f.clip = out; f.clipW = f.w;
    return out;
  }

  /* Máscara em meia resolução: o alfa da forma vira uma tabela de consulta,
     para o retículo pontilhado saber onde tem letra. */
  function maskOf(f) {
    if (f.mask && f.maskW === f.w) return f.mask;
    var clip = clipOf(f);
    if (!clip) return null;
    var mw = Math.max(1, Math.round(f.w / 2)), mh = Math.max(1, Math.round(f.h / 2));
    var mc = document.createElement("canvas");
    mc.width = mw; mc.height = mh;
    var g = mc.getContext("2d");
    g.scale(0.5, 0.5);
    g.fillStyle = "#fff";
    g.fill(clip);
    f.mask = { d: g.getImageData(0, 0, mw, mh).data, w: mw, h: mh };
    f.maskW = f.w;
    return f.mask;
  }

  var BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];

  /* Retículo pontilhado: a assinatura reconstruída em cruzinhas, com o campo de
     amostragem girando devagar e ondulando. O cursor empurra a amostragem, então
     as letras escorrem sob o ponteiro. */
  function paintDither(f, now) {
    var c = f.ctx, m = maskOf(f);
    c.clearRect(0, 0, f.w, f.h);
    if (!m) return;
    var t = now / 1000, cell = f.cell;
    var cx = f.w / 2, cy = f.h / 2;
    var th = 0.055 * Math.sin(t * 0.34), cos = Math.cos(th), sin = Math.sin(th);
    var zoom = 1 + 0.028 * Math.sin(t * 0.47 + 1);
    var live = f.trail.length > 0;
    c.strokeStyle = f.line;
    c.lineWidth = Math.max(1, cell * 0.2);
    c.lineCap = "butt";
    c.beginPath();
    var iy = 0;
    for (var y = cell * 0.5; y < f.h; y += cell, iy++) {
      var ix = 0;
      for (var x = cell * 0.5; x < f.w; x += cell, ix++) {
        var dx = x - cx, dy = y - cy;
        var sx = cx + (dx * cos - dy * sin) / zoom;
        var sy = cy + (dx * sin + dy * cos) / zoom;
        sy += 5.5 * Math.sin(sx * 0.013 + t * 1.05);
        sx += 4.5 * Math.sin(sy * 0.011 - t * 0.85);
        if (live) {
          var p = { x: sx, y: sy };
          displace(f, p, now);
          sx = 2 * sx - p.x; sy = 2 * sy - p.y;
        }
        var mx = (sx * 0.5) | 0, my = (sy * 0.5) | 0;
        if (mx < 0 || my < 0 || mx >= m.w || my >= m.h) continue;
        var a = m.d[(my * m.w + mx) * 4 + 3] / 255;
        if (a <= 0.04) continue;
        if (a < 0.12 + (BAYER[(iy & 3) * 4 + (ix & 3)] / 16) * 0.86) continue;
        var s = cell * 0.34 * (0.6 + 0.4 * a);
        c.moveTo(x - s, y - s); c.lineTo(x + s, y + s);
        c.moveTo(x - s, y + s); c.lineTo(x + s, y - s);
      }
    }
    c.stroke();
  }

  function displace(f, p, now) {
    var ox = 0, oy = 0;
    for (var i = 0; i < f.trail.length; i++) {
      var t = f.trail[i];
      var age = (now - t.t) / LIFE;
      if (age >= 1) continue;
      var wgt = (1 - age) * (1 - age);
      var dx = p.x - t.x, dy = p.y - t.y;
      var R = 150;
      var g = Math.exp(-(dx * dx + dy * dy) / (R * R)) * wgt;
      var d = Math.sqrt(dx * dx + dy * dy) + 1;
      ox += (dx / d) * g * f.amp;
      oy += (dy / d) * g * f.amp * 0.45 - g * f.amp * 0.5;
    }
    p.x += ox; p.y += oy;
    return p;
  }

  function paint(f) {
    if (!f.w || !f.h) return;
    var c = f.ctx, now = performance.now();
    if (f.mode === "dither") return paintDither(f, now);
    c.clearRect(0, 0, f.w, f.h);
    var clip = clipOf(f);
    var k = 1;
    if (clip) { c.save(); c.clip(clip); k = 2.6; }

    /* a mancha: rastro do ponteiro somado em luz, na cor do sinal */
    if (f.trail.length) {
      c.save();
      c.globalCompositeOperation = f.mix;
      for (var i = 0; i < f.trail.length; i++) {
        var t = f.trail[i];
        var age = (now - t.t) / LIFE;
        if (age >= 1) continue;
        var a = (1 - age) * (1 - age) * (f.mix === "multiply" ? 0.13 : 0.09);
        var r = 90 + age * 150;
        var g = c.createRadialGradient(t.x, t.y, 0, t.x, t.y, r);
        g.addColorStop(0, hexa(f.glow, a));
        g.addColorStop(1, hexa(f.glow, 0));
        c.fillStyle = g;
        c.beginPath(); c.arc(t.x, t.y, r, 0, 6.2832); c.fill();
      }
      c.restore();
    }

    /* A malha: retículo isométrico de densidade constante — um plano de tokens
       visto de canto, que atravessa o bloco inteiro. Sem ponto de fuga, logo sem
       o efeito de estrada/corda que a perspectiva central produzia. */
    var step = f.step;
    var ax = step * 0.98, ay = step * 0.40;
    var cx = f.w * 0.5, cy = f.h * f.hz;
    var N = Math.ceil(f.w / (2 * ax) + f.h / (2 * ay)) + 2;
    var grid = [], i2, j, p, row;
    for (j = -N; j <= N; j++) {
      row = [];
      for (i2 = -N; i2 <= N; i2++) {
        p = { x: cx + (i2 - j) * ax, y: cy + (i2 + j) * ay };
        if (!STATIC && p.x > -140 && p.x < f.w + 140 && p.y > -140 && p.y < f.h + 140) displace(f, p, now);
        row.push(p);
      }
      grid.push(row);
    }
    var L = grid.length, M = grid[0].length;
    var fade = function (y) { return Math.max(0, Math.min(1, 0.2 + 1.05 * (y / f.h))); };
    c.lineWidth = 1;
    for (j = 0; j < L; j++) {
      var mid = grid[j][(M / 2) | 0];
      if (mid.y < -60 || mid.y > f.h + 400) continue;
      c.strokeStyle = hexa(f.line, 0.17 * k * fade(mid.y));
      c.beginPath();
      for (i2 = 0; i2 < M; i2++) { var q = grid[j][i2]; i2 ? c.lineTo(q.x, q.y) : c.moveTo(q.x, q.y); }
      c.stroke();
    }
    for (i2 = 0; i2 < M; i2++) {
      var mid2 = grid[(L / 2) | 0][i2];
      if (mid2.x < -f.w || mid2.x > f.w * 2) continue;
      c.strokeStyle = hexa(f.line, 0.12 * k * fade(mid2.y));
      c.beginPath();
      for (j = 0; j < L; j++) { var s = grid[j][i2]; j ? c.lineTo(s.x, s.y) : c.moveTo(s.x, s.y); }
      c.stroke();
    }
    /* Nós: só nas cruzas alternadas, para a malha ter grão de diagrama técnico. */
    for (j = 0; j < L; j += 2) {
      for (i2 = 0; i2 < M; i2 += 2) {
        var n = grid[j][i2];
        if (n.x < 0 || n.x > f.w || n.y < 0 || n.y > f.h) continue;
        c.fillStyle = hexa(f.line, 0.34 * k * fade(n.y));
        c.beginPath(); c.arc(n.x, n.y, 1.5, 0, 6.2832); c.fill();
      }
    }

    if (clip) c.restore();

    /* grão */
    if (f.pattern) {
      c.save();
      if (clip) c.clip(clip);
      c.globalAlpha = 0.5;
      c.translate(-(now / 90 % 96 | 0), -(now / 70 % 96 | 0));
      c.fillStyle = f.pattern;
      c.fillRect(0, 0, f.w + 96, f.h + 96);
      c.restore();
    }
  }

  /* aceita "#rgb", "#rrggbb", "rgb(...)" e "var(--token)" (resolvido no host) */
  function resolve(host, v) {
    if (!v) return v;
    v = v.trim();
    if (v.indexOf("var(") !== 0) return v;
    var name = v.slice(4, v.indexOf(")")).trim();
    var got = getComputedStyle(host).getPropertyValue(name).trim();
    return got || "#262626";
  }

  function hexa(hex, a) {
    if (hex.indexOf("rgb") === 0) {
      var n = hex.replace(/[^0-9.,]/g, "").split(",");
      return "rgba(" + n[0] + "," + n[1] + "," + n[2] + "," + a + ")";
    }
    var h = hex.replace("#", "");
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    return "rgba(" + parseInt(h.slice(0, 2), 16) + "," + parseInt(h.slice(2, 4), 16) + "," + parseInt(h.slice(4, 6), 16) + "," + a + ")";
  }

  function loop() {
    var now = performance.now();
    for (var i = 0; i < fields.length; i++) {
      var f = fields[i];
      if (f.cv.parentNode !== f.host) {
        if (!f.host.isConnected) { fields.splice(i--, 1); continue; }
        f.host.appendChild(f.cv);
        f.dirty = true;
      }
      if (!f.live) continue;
      while (f.trail.length && now - f.trail[0].t > LIFE) f.trail.shift();
      if (f.mode !== "dither" && !f.trail.length && !f.dirty) continue;
      try { paint(f); } catch (err) { window.__meshErr = (window.__meshErr || []).concat(String(err && err.stack || err)); f.live = false; }
      f.dirty = f.trail.length > 0;
    }
    requestAnimationFrame(loop);
  }

  function mount() {
    for (var k = fields.length - 1; k >= 0; k--) if (!fields[k].host.isConnected) fields.splice(k, 1);
    var hosts = document.querySelectorAll("[data-mesh]");
    for (var i = 0; i < hosts.length; i++) {
      if (!hosts[i].__mesh) { hosts[i].__mesh = true; make(hosts[i]); }
    }
    return hosts.length > 0;
  }

  function boot() {
    mount();
    /* No modo leve o laço roda mas só repinta quando algo mudou de tamanho ou
       quando a re-renderização tirou o canvas do lugar: custo ~zero. */
    if (STATIC) { requestAnimationFrame(loop); return true; }
    window.addEventListener("pointermove", function (e) {
      var now = performance.now();
      for (var i = 0; i < fields.length; i++) {
        var f = fields[i];
        if (!f.live) continue;
        var r = f.host.getBoundingClientRect();
        var x = e.clientX - r.left, y = e.clientY - r.top;
        if (x < -80 || y < -80 || x > r.width + 80 || y > r.height + 80) continue;
        var last = f.trail[f.trail.length - 1];
        if (last && now - last.t < 26) continue;
        f.trail.push({ x: x, y: y, t: now });
        if (f.trail.length > TRAIL) f.trail.shift();
        f.dirty = true;
      }
    }, { passive: true });
    requestAnimationFrame(loop);
    return true;
  }

  /* O documento é montado por um runtime: os blocos podem chegar depois do load. */
  /* A árvore é remontada pelo runtime; varremos de tempos em tempos para pegar
     blocos novos (e o loop re-anexa canvas que a re-renderização removeu). */
  function watch() {
    boot();
    setInterval(mount, 700);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", watch);
  else watch();
})();
