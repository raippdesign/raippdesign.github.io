/* @ds-bundle: {"format":4,"namespace":"IndiseaDesignSystem_0b3183","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Chip","sourcePath":"components/display/Chip.jsx"},{"name":"Divider","sourcePath":"components/display/Divider.jsx"},{"name":"NumberedList","sourcePath":"components/display/NumberedList.jsx"},{"name":"StatusDot","sourcePath":"components/display/StatusDot.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Snackbar","sourcePath":"components/feedback/Snackbar.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"ConnectionMap","sourcePath":"components/graphics/ConnectionMap.jsx"},{"name":"ConnectorLine","sourcePath":"components/graphics/ConnectorLine.jsx"},{"name":"AppBar","sourcePath":"components/navigation/AppBar.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"ConnectorTile","sourcePath":"components/surfaces/ConnectorTile.jsx"},{"name":"StatBlock","sourcePath":"components/surfaces/StatBlock.jsx"},{"name":"Testimonial","sourcePath":"components/surfaces/Testimonial.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"6236de65b066","components/actions/IconButton.jsx":"abd2770bbdee","components/brand/Icon.jsx":"8fe262bdf9aa","components/brand/Logo.jsx":"c4b3239ae820","components/display/Avatar.jsx":"cb0970afa845","components/display/Badge.jsx":"8639fc851fb7","components/display/Chip.jsx":"7074bdfbe67b","components/display/Divider.jsx":"85322614a866","components/display/NumberedList.jsx":"2dc6edfb564d","components/display/StatusDot.jsx":"2e834016146f","components/feedback/Banner.jsx":"546083e87930","components/feedback/Dialog.jsx":"11baeae1ee32","components/feedback/ProgressBar.jsx":"51e8ed9da8a2","components/feedback/Snackbar.jsx":"a4c94137c005","components/feedback/Tooltip.jsx":"3e806281fb04","components/forms/Checkbox.jsx":"4524b2f9e2d9","components/forms/Input.jsx":"9677c1f71295","components/forms/Radio.jsx":"fc63f98ce52c","components/forms/Select.jsx":"dec88ed2d793","components/forms/Switch.jsx":"b82fe76ea8a5","components/forms/Textarea.jsx":"f9736db19098","components/graphics/ConnectionMap.jsx":"25732aa449d6","components/graphics/ConnectorLine.jsx":"d24a41159cbb","components/navigation/AppBar.jsx":"73996ff41056","components/navigation/SideNav.jsx":"f4750774da9d","components/navigation/SiteFooter.jsx":"f13d1d27fe31","components/navigation/SiteHeader.jsx":"1a6976d7a487","components/navigation/Tabs.jsx":"748054f2f8af","components/surfaces/Card.jsx":"79a4b6dd041a","components/surfaces/ConnectorTile.jsx":"cae9fbfa72f4","components/surfaces/StatBlock.jsx":"dcee6aa70db5","components/surfaces/Testimonial.jsx":"1f33ca88545e","ui_kits/console/AlertsView.jsx":"25bc26cdae26","ui_kits/console/ConnectorsView.jsx":"ea9f9671ba2d","ui_kits/console/OverviewView.jsx":"8c6b7b5ff37e","ui_kits/console/shared.jsx":"76a62cf74580","ui_kits/website/AboutPage.jsx":"55700006663f","ui_kits/website/ConnectorsPage.jsx":"5682ef9af18c","ui_kits/website/ContactPage.jsx":"73056cd92d17","ui_kits/website/CustomersPage.jsx":"c8db61718e17","ui_kits/website/HomePage.jsx":"5724f708e803","ui_kits/website/TeamPage.jsx":"814023b62c2e","ui_kits/website/shared.jsx":"1b310298eaa2"},"inlinedExternals":[],"unexposedExports":[{"name":"connectorRadius","sourcePath":"components/graphics/ConnectorLine.jsx"},{"name":"logoSrc","sourcePath":"components/brand/Logo.jsx"}]} */

(() => {

const __ds_ns = (window.IndiseaDesignSystem_0b3183 = window.IndiseaDesignSystem_0b3183 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    h: "var(--control-height-sm)",
    px: "12px",
    fs: "13px",
    icon: "16px",
    gap: "6px"
  },
  md: {
    h: "var(--control-height-md)",
    px: "20px",
    fs: "14px",
    icon: "18px",
    gap: "8px"
  },
  lg: {
    h: "var(--control-height-lg)",
    px: "24px",
    fs: "16px",
    icon: "20px",
    gap: "8px"
  },
  xl: {
    h: "var(--control-height-xl)",
    px: "32px",
    fs: "16px",
    icon: "24px",
    gap: "12px"
  }
};

/* Indisea buttons.
   PRIMARY IS THE CONTRAST BUTTON: the opposite value of whatever it sits on,
   charcoal on light and nearly white on dark, with its leading icon in Sky Blue
   as the one colored element. BLUE IS NEVER A BUTTON FILL.
   The only colored fills are the three semantic ones: success (green),
   warning (yellow) and alert (red). There is no tonal variant. */
const VARIANTS = {
  primary: {
    bg: "var(--action-primary)",
    hover: "var(--action-primary-hover)",
    press: "var(--action-primary-press)",
    fg: "var(--action-primary-text)",
    border: "transparent",
    iconColor: "var(--action-primary-icon)"
  },
  outlined: {
    bg: "var(--action-secondary)",
    hover: "var(--action-secondary-hover)",
    press: "var(--action-secondary-press)",
    fg: "var(--action-secondary-text)",
    border: "currentColor"
  },
  text: {
    bg: "transparent",
    hover: "var(--action-secondary-hover)",
    press: "var(--action-secondary-press)",
    fg: "var(--action-secondary-text)",
    border: "transparent"
  },
  /* Two of the three colored pills fill with the brand 500; success fills DEEPER.
     Button labels are 14px, below the 36px large-text boundary, so they need the
     full 4.5:1, and the label polarity is chosen first: green and red carry nearly
     white, yellow carries charcoal. The fill then has to be a step that supports
     that label.
      A consequence worth knowing: hover and press must move in the direction that
     PRESERVES the label's contrast. A charcoal-labeled pill LIGHTENS (darkening
     it would collapse the label); a nearly-white-labeled pill DARKENS. */

  // SUCCESS IS THE ONE COLORED PILL THAT IS NOT THE BRAND 500. Nearly white on
  // Link Green 500 is 3.22:1 and fails at 14px; charcoal on it is 4.50:1, which
  // passed but read as muddy at small sizes. So the fill drops to green 700,
  // where nearly white is 5.90:1. Darkens on interaction: 800 is 8.18:1, 900 is
  // 11.33:1. The vivid green 500 is still correct as a BLOCK fill, where the
  // content is display scale.
  success: {
    bg: "var(--indisea-green-700)",
    hover: "var(--indisea-green-800)",
    press: "var(--indisea-green-900)",
    fg: "var(--indisea-nearly-white)",
    border: "transparent"
  },
  // Charcoal on Signal Yellow 500 is 6.99:1, on 400 is 8.16:1, on 300 is 9.56:1.
  warning: {
    bg: "var(--status-warning)",
    hover: "var(--indisea-yellow-400)",
    press: "var(--indisea-yellow-300)",
    fg: "var(--indisea-stone-900)",
    border: "transparent"
  },
  // Node Red is the one hue dark enough for a nearly-white label (5.40:1), so it
  // is also the one that darkens: white on red 600 is 6.90:1, on red 700 is 8.87:1.
  alert: {
    bg: "var(--status-error)",
    hover: "var(--indisea-red-600)",
    press: "var(--indisea-red-700)",
    fg: "var(--indisea-nearly-white)",
    border: "transparent"
  }
};
VARIANTS.danger = VARIANTS.alert;

/* One glyph per button, never two. Arrow glyphs read as "onward" so they always
   follow the label; every other glyph is a category marker and leads. Pass
   `icon` and the component decides the side. The glyph is Sky Blue on the filled
   contrast pill and inherits the label color everywhere else. */
const isArrow = n => typeof n === "string" && /^(arrow|caret)-/.test(n);

/** Pill action button. Primary is the contrast pill; color is reserved for the three semantic variants. */
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  fullWidth = false,
  disabled = false,
  href,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const quiet = variant === "outlined" || variant === "text";
  const bg = disabled ? "transparent" : press ? v.press : hover ? v.hover : v.bg;
  const css = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.h,
    padding: `0 ${s.px}`,
    width: fullWidth ? "100%" : undefined,
    fontFamily: "var(--font-sans)",
    fontSize: s.fs,
    fontWeight: "var(--weight-medium)",
    letterSpacing: "var(--tracking-label)",
    lineHeight: 1,
    textDecoration: "none",
    background: disabled && !quiet ? "var(--indisea-stone-300)" : bg,
    color: disabled ? "var(--text-faint)" : v.fg,
    border: `var(--border-width-strong) solid ${disabled ? "var(--border-subtle)" : v.border}`,
    borderRadius: "var(--radius-button)",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "var(--transition-control), transform var(--duration-instant) var(--ease-standard)",
    transform: press && !disabled ? "scale(var(--press-scale))" : "none",
    boxShadow: "none",
    whiteSpace: "nowrap",
    ...style
  };
  // On a contrast or quiet pill the glyph is Sky Blue: the one colored element.
  // On a colored pill the glyph matches the label, so it follows the same
  // luminance rule as the text (white on green and red, charcoal on yellow).
  const glyph = disabled ? "currentColor" : v.iconColor || "currentColor";
  // A BUTTON NEVER CARRIES TWO ICONS. One glyph, and its side is decided by the
  // glyph itself: an arrow trails, anything else leads. If both props are set,
  // `icon` wins and `iconRight` is dropped.
  const only = icon || iconRight;
  const lead = isArrow(only) ? null : only;
  const trail = isArrow(only) ? only : null;
  const kids = [lead ? React.createElement("i", {
    key: "l",
    className: `ph-fill ph-${lead}`,
    style: {
      fontSize: s.icon,
      color: glyph
    }
  }) : null, React.createElement("span", {
    key: "t"
  }, children), trail ? React.createElement("i", {
    key: "r",
    className: `ph-fill ph-${trail}`,
    style: {
      fontSize: s.icon,
      color: glyph
    }
  }) : null];
  const props = {
    style: css,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onClick: disabled ? undefined : onClick,
    ...rest
  };
  if (href && !disabled) return React.createElement("a", {
    href,
    ...props
  }, kids);
  return React.createElement("button", {
    type,
    disabled,
    ...props
  }, kids);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};
const GLYPH = {
  sm: 16,
  md: 20,
  lg: 24
};

/* Blue is never a button fill, so there is no filled-blue or tonal icon button.
   `contrast` is the filled variant: charcoal on light, nearly white on dark, and
   the only one with a Sky Blue glyph. Unfilled variants use --text-body. */
const VARIANTS = {
  standard: {
    bg: "transparent",
    fg: "var(--text-body)",
    hover: "var(--surface-sunken)",
    press: "var(--indisea-stone-300)",
    border: "transparent"
  },
  contrast: {
    bg: "var(--action-primary)",
    fg: "var(--action-primary-icon)",
    hover: "var(--action-primary-hover)",
    press: "var(--action-primary-press)",
    border: "transparent"
  },
  outlined: {
    bg: "transparent",
    fg: "var(--text-body)",
    hover: "var(--surface-sunken)",
    press: "var(--indisea-stone-300)",
    border: "var(--border-strong)"
  }
};

/** Circular icon-only action. Phosphor fill glyph, 48px target at lg. */
function IconButton({
  icon,
  label,
  variant = "standard",
  size = "md",
  disabled = false,
  selected = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const d = SIZES[size] || SIZES.md;
  const palette = VARIANTS[variant] || VARIANTS.standard;
  const bg = selected && variant === "standard" ? "var(--surface-sunken)" : press ? palette.press : hover ? palette.hover : palette.bg;
  return React.createElement("button", {
    type: "button",
    "aria-label": label,
    "aria-pressed": selected || undefined,
    disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onClick: disabled ? undefined : onClick,
    style: {
      width: d,
      height: d,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: disabled ? "transparent" : bg,
      color: disabled ? "var(--text-faint)" : palette.fg,
      border: `var(--border-width-hairline) solid ${palette.border}`,
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "var(--transition-control)",
      boxShadow: "none",
      padding: 0,
      ...style
    },
    ...rest
  }, React.createElement("i", {
    className: `ph-fill ph-${icon}`,
    style: {
      fontSize: GLYPH[size] || 20
    }
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
/**
 * Phosphor icon, fill weight only. Requires the Phosphor fill stylesheet, which
 * ships with styles.css (tokens/icons.css).
 */
function Icon({
  name,
  size = "md",
  color = "currentColor",
  label,
  style,
  ...rest
}) {
  const px = typeof size === "number" ? size : {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
    display: 48
  }[size] || 20;
  return React.createElement("i", {
    className: "ph-fill ph-" + name,
    "aria-hidden": label ? undefined : "true",
    "aria-label": label,
    role: label ? "img" : undefined,
    style: {
      fontSize: px,
      lineHeight: 1,
      color,
      display: "inline-block",
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
/* The official Indisea logo files, addressed by LOCKUP + TONE.

   Four lockups, each its own folder:
     primary   1000x178  icon + wordmark, horizontal. The default and the main calling card.
     vertical   677x417  icon stacked over wordmark. Rare; centered or very narrow layouts only.
     icon       282x175  the logomark alone.
     wordmark   677x178  the type alone.

   The mark is 11 shapes: 5 wave/connector strokes and 6 endpoint squares. A
   TWO-COLOR tone colors those groups differently; a SOLID tone colors all 11
   the same. The mark never uses a tint of a brand color, and never a color
   outside this set.

   Four two-color tones (connectors + endpoints):
     blue    Sky Blue + Signal Yellow   <- THE PRIMARY LOGO
     green   Link Green + Signal Yellow
     red     Node Red + Signal Yellow
     yellow  Signal Yellow + Node Red

   Four single-color tones: solid-blue, solid-green, solid-red, solid-yellow.
   Three mono tones: charcoal, white, stone.

   WORDMARK POLARITY is separate from the mark's color and is never colored.
   The wordmark follows the page's TEXT color: charcoal on a light canvas, stone
   on a dark one. The official files encode that as two variants, the "-Alt" file
   carrying the stone wordmark, so it is a different FILE rather than a restyle.

   `onDark` DEFAULTS TO "auto", which follows the ambient theme with no prop.
   That default matters: an <img src> cannot respond to a theme, so when onDark
   had to be passed by hand every lockup in this system ended up hard-wired
   light, and pages went dark around a charcoal wordmark. "auto" renders the mark
   as a themed BACKGROUND instead (the .indisea-lockup utility in tokens/base.css),
   where the dark scope can reassign the file.

   Pass onDark={true} or {false} to PIN a polarity, which is what a side-by-side
   comparison needs, and which also gives you a real <img> element back.

   Mono tones have no -Alt file because the whole lockup is already one value, and
   the icon lockup has no wordmark, so both ignore polarity entirely. */

const DIRS = {
  primary: "Primary%20Lockup/",
  vertical: "Vertical%20Lockup/",
  icon: "Logomark/",
  wordmark: "Wordmark/"
};
const STEMS = {
  primary: "Indisea-Logo-Primary",
  vertical: "Indisea-Logo-Vertical",
  icon: "Indisea-Icon",
  wordmark: "Indisea-Wordmark"
};
const TONES = {
  blue: "",
  green: "-Green",
  red: "-Red",
  yellow: "-Yellow",
  "solid-blue": "-Solid-Blue",
  "solid-green": "-Solid-Green",
  "solid-red": "-Solid-Red",
  "solid-yellow": "-Solid-Yellow",
  charcoal: "-Solid-Charcoal",
  white: "-Solid-White",
  stone: "-Solid-Stone"
};
const MONO = {
  charcoal: 1,
  white: 1,
  stone: 1
};
// The wordmark alone carries its color in its own filename.
const WORDMARK = {
  charcoal: "",
  white: "-White",
  stone: "-Alt",
  black: "-Black"
};
const RATIO = {
  primary: 1000 / 178,
  vertical: 677 / 417,
  icon: 282 / 175,
  wordmark: 677 / 178
};
function logoSrc({
  lockup = "primary",
  tone = "blue",
  onDark = false,
  basePath = "assets/logos/"
} = {}) {
  const dir = DIRS[lockup] || DIRS.primary;
  const stem = STEMS[lockup] || STEMS.primary;
  if (lockup === "wordmark") {
    const w = WORDMARK[tone] != null ? WORDMARK[tone] : onDark ? "-White" : "";
    return basePath + dir + stem + w + ".svg";
  }
  const suffix = TONES[tone] != null ? TONES[tone] : TONES.blue;
  // -Alt exists only where there is a wordmark to flip AND the tone is not mono.
  const alt = onDark && lockup !== "icon" && !MONO[tone] ? "-Alt" : "";
  return basePath + dir + stem + suffix + alt + ".svg";
}

/**
 * Renders an official Indisea lockup from assets/logos. Never redraw, recolor or
 * re-space the mark; pick the file that fits the background.
 */
function Logo({
  lockup = "primary",
  tone = "blue",
  onDark = "auto",
  height = 32,
  basePath = "assets/logos/",
  alt = "Indisea",
  style,
  ...rest
}) {
  const ratio = RATIO[lockup] || RATIO.primary;
  // "auto": a themed background, because CSS cannot swap an <img src>.
  if (onDark === "auto") {
    const light = logoSrc({
      lockup: lockup,
      tone: tone,
      onDark: false,
      basePath: basePath
    });
    const dark = logoSrc({
      lockup: lockup,
      tone: tone,
      onDark: true,
      basePath: basePath
    });
    return React.createElement("span", {
      className: "indisea-lockup indisea-lockup-" + (RATIO[lockup] ? lockup : "primary"),
      role: "img",
      "aria-label": alt,
      style: {
        "--lockup": "url('" + light + "')",
        "--lockup-alt": "url('" + dark + "')",
        height: height,
        width: Math.round(height * ratio),
        alignSelf: "flex-start",
        ...style
      },
      ...rest
    });
  }
  return React.createElement("img", {
    src: logoSrc({
      lockup: lockup,
      tone: tone,
      onDark: onDark,
      basePath: basePath
    }),
    alt: alt,
    // alignSelf defends against the flex-column stretch trap: with width:auto the
    // default align-items:stretch widens the img to its container and the SVG's
    // preserveAspectRatio centers the artwork, so the mark silently un-aligns.
    // Override via the style prop if a logo really should stretch.
    width: Math.round(height * (RATIO[lockup] || RATIO.primary)),
    height: height,
    style: {
      height: height,
      width: "auto",
      alignSelf: "flex-start",
      display: "block",
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { logoSrc, Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
const SIZES = {
  sm: 32,
  md: 40,
  lg: 56,
  xl: 96
};

/** Round avatar. Falls back to initials on a stone tile, never an emoji or illustration. */
function Avatar({
  src,
  name = "",
  size = "md",
  tone = "stone",
  style
}) {
  const d = SIZES[size] || SIZES.md;
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join("");
  const bg = {
    stone: "var(--surface-sunken)",
    blue: "var(--indisea-blue-100)",
    green: "var(--indisea-green-100)",
    yellow: "var(--indisea-yellow-100)"
  }[tone];
  const fg = {
    stone: "var(--text-muted)",
    blue: "var(--indisea-blue-900)",
    green: "var(--indisea-green-900)",
    yellow: "var(--indisea-yellow-900)"
  }[tone];
  const base = {
    width: d,
    height: d,
    flex: "0 0 " + d + "px",
    borderRadius: "var(--radius-pill)",
    objectFit: "cover",
    boxShadow: "none",
    ...style
  };
  if (src) return React.createElement("img", {
    src,
    alt: name,
    style: base
  });
  return React.createElement("span", {
    "aria-label": name,
    style: {
      ...base,
      background: bg,
      color: fg,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: Math.round(d * 0.36),
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "0.02em"
    }
  }, initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const TONES = {
  neutral: {
    bg: "var(--surface-sunken)",
    fg: "var(--text-body)",
    border: "var(--border-hairline)"
  },
  info: {
    bg: "var(--status-info-container)",
    fg: "var(--status-info-on-container)",
    border: "transparent"
  },
  success: {
    bg: "var(--status-success-container)",
    fg: "var(--status-success-on-container)",
    border: "transparent"
  },
  warning: {
    bg: "var(--status-warning-container)",
    fg: "var(--status-warning-on-container)",
    border: "transparent"
  },
  error: {
    bg: "var(--status-error-container)",
    fg: "var(--status-error-on-container)",
    border: "transparent"
  },
  solid: {
    bg: "var(--action-secondary)",
    fg: "var(--action-secondary-text)",
    border: "transparent"
  }
};

/** Small pill label for state and metadata. Never interactive; use Chip for that. */
function Badge({
  children,
  tone = "neutral",
  icon,
  size = "md",
  style
}) {
  const t = TONES[tone] || TONES.neutral;
  const sm = size === "sm";
  return React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: sm ? "4px" : "6px",
      height: sm ? 20 : 24,
      padding: sm ? "0 8px" : "0 12px",
      background: t.bg,
      color: t.fg,
      border: "var(--border-width-hairline) solid " + t.border,
      borderRadius: "var(--radius-pill)",
      fontSize: sm ? "var(--ui-label-sm)" : "var(--ui-label-md)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-label)",
      whiteSpace: "nowrap",
      ...style
    }
  }, [icon ? React.createElement("i", {
    key: "i",
    className: "ph-fill ph-" + icon,
    style: {
      fontSize: sm ? 11 : 13
    }
  }) : null, React.createElement("span", {
    key: "t"
  }, children)]);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Chip.jsx
try { (() => {
/** Interactive pill: filter, choice or removable input chip. */
function Chip({
  children,
  icon,
  selected = false,
  onClick,
  onRemove,
  disabled = false,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const bg = selected ? "var(--selected-container)" : hover && !disabled ? "var(--surface-sunken)" : "transparent";
  return React.createElement("span", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: disabled ? undefined : onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      height: 32,
      padding: "0 12px",
      background: bg,
      color: selected ? "var(--selected-on-container)" : "var(--text-body)",
      border: "var(--border-width-hairline) solid " + (selected ? "var(--selected-container)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-chip)",
      fontSize: "var(--ui-label-lg)",
      fontWeight: "var(--weight-medium)",
      cursor: disabled ? "not-allowed" : onClick ? "pointer" : "default",
      opacity: disabled ? 0.38 : 1,
      transition: "var(--transition-control)",
      whiteSpace: "nowrap",
      ...style
    }
  }, [selected ? React.createElement("i", {
    key: "c",
    className: "ph-fill ph-check",
    style: {
      fontSize: 14
    }
  }) : icon ? React.createElement("i", {
    key: "i",
    className: "ph-fill ph-" + icon,
    style: {
      fontSize: 14
    }
  }) : null, React.createElement("span", {
    key: "t"
  }, children), onRemove ? React.createElement("i", {
    key: "x",
    className: "ph-fill ph-x-circle",
    style: {
      fontSize: 15,
      cursor: "pointer",
      color: "var(--text-muted)"
    },
    onClick: e => {
      e.stopPropagation();
      onRemove();
    }
  }) : null]);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Chip.jsx", error: String((e && e.message) || e) }); }

// components/display/Divider.jsx
try { (() => {
/** Hairline rule. Indisea separates with lines and surface steps, never shadows. */
function Divider({
  orientation = "horizontal",
  strong = false,
  inset = 0,
  style
}) {
  const color = strong ? "var(--border-strong)" : "var(--border-hairline)";
  const w = strong ? "var(--border-width-strong)" : "var(--border-width-hairline)";
  if (orientation === "vertical") return React.createElement("span", {
    style: {
      width: 0,
      alignSelf: "stretch",
      borderLeft: w + " solid " + color,
      marginBlock: inset,
      ...style
    }
  });
  return React.createElement("hr", {
    style: {
      border: "none",
      borderTop: w + " solid " + color,
      margin: 0,
      marginInline: inset,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/display/NumberedList.jsx
try { (() => {
/* A numbered list rendered as outlined circles: the ring and the numeral are the
   same color, and the WHOLE list is one color. The items of a list are related,
   so nothing cycles. The color comes from --accent-type-<hue>, the body tier,
   which resolves per canvas, so the same markup is correct on stone and charcoal.
   Styling lives in tokens/base.css (.indisea-ol) so plain HTML gets the pattern. */
function NumberedList({
  items = [],
  color = "neutral",
  size = "md",
  start = 1,
  style
}) {
  const hue = ["blue", "green", "yellow", "red"].includes(color) ? "indisea-ol-" + color : "";
  const cls = ["indisea-ol", hue, size === "sm" ? "indisea-ol-sm" : ""].filter(Boolean).join(" ");
  return React.createElement("ol", {
    className: cls,
    style: style
  }, items.map((it, i) => {
    const item = typeof it === "string" ? {
      title: it
    } : it;
    return React.createElement("li", {
      key: i
    }, [
    // a real element, not a CSS counter: generated content does not survive
    // renderers that re-serialize the DOM. See tokens/base.css.
    React.createElement("span", {
      key: "m",
      className: "indisea-ol-marker"
    }, start + i), React.createElement("div", {
      key: "c",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        paddingTop: size === "sm" ? 0 : "4px"
      }
    }, [React.createElement("span", {
      key: "t",
      style: {
        fontSize: "var(--ui-body-md)",
        fontWeight: "var(--weight-heading)",
        letterSpacing: "var(--tracking-heading)",
        color: "var(--text-heading)"
      }
    }, item.title), item.body ? React.createElement("span", {
      key: "b",
      style: {
        fontSize: "var(--ui-body-sm)",
        lineHeight: "var(--leading-body)",
        color: "var(--text-muted)"
      }
    }, item.body) : null])]);
  }));
}
Object.assign(__ds_scope, { NumberedList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/NumberedList.jsx", error: String((e && e.message) || e) }); }

// components/display/StatusDot.jsx
try { (() => {
const COLORS = {
  operational: "var(--status-success)",
  degraded: "var(--status-warning)",
  down: "var(--status-error)",
  building: "var(--status-info)",
  idle: "var(--path-inert)"
};

/** Node-sized dot + optional label for connector health. The brand's "node" motif at UI scale. */
function StatusDot({
  status = "operational",
  label,
  size = 10,
  style
}) {
  return React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      ...style
    }
  }, [React.createElement("span", {
    key: "d",
    style: {
      width: size,
      height: size,
      flex: "0 0 " + size + "px",
      borderRadius: "var(--radius-pill)",
      background: COLORS[status] || COLORS.idle
    }
  }), label ? React.createElement("span", {
    key: "l",
    style: {
      fontSize: "var(--ui-body-md)",
      color: "var(--text-muted)"
    }
  }, label) : null]);
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
const TONES = {
  info: {
    bg: "var(--status-info-container)",
    fg: "var(--status-info-on-container)",
    bar: "var(--status-info)",
    icon: "info"
  },
  success: {
    bg: "var(--status-success-container)",
    fg: "var(--status-success-on-container)",
    bar: "var(--status-success)",
    icon: "check-circle"
  },
  warning: {
    bg: "var(--status-warning-container)",
    fg: "var(--status-warning-on-container)",
    bar: "var(--status-warning)",
    icon: "warning"
  },
  error: {
    bg: "var(--status-error-container)",
    fg: "var(--status-error-on-container)",
    bar: "var(--status-error)",
    icon: "warning-circle"
  }
};

/** Inline status message. Tinted container, fill icon, optional action and dismiss. */
function Banner({
  tone = "info",
  title,
  children,
  icon,
  actionLabel,
  onAction,
  onDismiss,
  style
}) {
  const t = TONES[tone] || TONES.info;
  return React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      padding: "16px",
      background: t.bg,
      color: t.fg,
      borderRadius: "var(--radius-md)",
      boxShadow: "none",
      ...style
    }
  }, [React.createElement("i", {
    key: "i",
    className: "ph-fill ph-" + (icon || t.icon),
    style: {
      fontSize: 20,
      color: t.bar,
      flex: "0 0 20px"
    }
  }), React.createElement("div", {
    key: "b",
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "4px"
    }
  }, [title ? React.createElement("span", {
    key: "t",
    style: {
      fontSize: "var(--ui-title-sm)",
      fontWeight: "var(--weight-semibold)"
    }
  }, title) : null, children ? React.createElement("span", {
    key: "c",
    style: {
      fontSize: "var(--ui-body-md)",
      lineHeight: "var(--leading-body)"
    }
  }, children) : null]), actionLabel ? React.createElement("button", {
    key: "a",
    type: "button",
    onClick: onAction,
    style: {
      background: "transparent",
      border: "none",
      color: "inherit",
      fontSize: "var(--ui-label-lg)",
      fontWeight: "var(--weight-semibold)",
      cursor: "pointer",
      textDecoration: "underline",
      textUnderlineOffset: "3px",
      padding: 0
    }
  }, actionLabel) : null, onDismiss ? React.createElement("i", {
    key: "x",
    className: "ph-fill ph-x",
    onClick: onDismiss,
    style: {
      fontSize: 16,
      cursor: "pointer",
      opacity: 0.7
    }
  }) : null]);
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** Modal sheet: 32px radius, hairline border, charcoal scrim at 40%. No shadow. */
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 480,
  style
}) {
  if (!open) return null;
  return React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(38,38,38,0.40)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      zIndex: 100
    },
    onClick: onClose
  }, React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-sheet)",
      padding: "32px",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      boxShadow: "none",
      ...style
    }
  }, [React.createElement("div", {
    key: "h",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "16px"
    }
  }, [React.createElement("h3", {
    key: "t",
    style: {
      flex: 1,
      fontSize: "var(--ui-title-lg)",
      fontWeight: "var(--weight-heading)",
      letterSpacing: "var(--tracking-heading)",
      margin: 0
    }
  }, title), onClose ? React.createElement("i", {
    key: "x",
    className: "ph-fill ph-x",
    onClick: onClose,
    style: {
      fontSize: 18,
      cursor: "pointer",
      color: "var(--text-muted)"
    }
  }) : null]), React.createElement("div", {
    key: "b",
    style: {
      fontSize: "var(--ui-body-lg)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)"
    }
  }, children), footer ? React.createElement("div", {
    key: "f",
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "12px"
    }
  }, footer) : null]));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
/** Flat pill progress track. Also the uptime and health meter in the product. */
function ProgressBar({
  value = 0,
  tone = "primary",
  label,
  height = 8,
  style
}) {
  const color = {
    primary: "var(--action-primary)",
    success: "var(--status-success)",
    warning: "var(--status-warning)",
    error: "var(--status-error)"
  }[tone] || "var(--action-primary)";
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      width: "100%",
      ...style
    }
  }, [label ? React.createElement("div", {
    key: "l",
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--ui-body-sm)",
      color: "var(--text-muted)"
    }
  }, [React.createElement("span", {
    key: "a"
  }, label), React.createElement("span", {
    key: "b",
    style: {
      fontWeight: "var(--weight-medium)",
      color: "var(--text-body)"
    }
  }, Math.round(value) + "%")]) : null, React.createElement("div", {
    key: "t",
    role: "progressbar",
    "aria-valuenow": value,
    style: {
      height,
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-pill)",
      overflow: "hidden"
    }
  }, React.createElement("div", {
    style: {
      width: Math.max(0, Math.min(100, value)) + "%",
      height: "100%",
      background: color,
      borderRadius: "var(--radius-pill)",
      transition: "width var(--duration-medium) var(--ease-standard)"
    }
  }))]);
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Snackbar.jsx
try { (() => {
/** Transient confirmation, charcoal pill, bottom-left. No shadow, so it reads as a solid slab. */
function Snackbar({
  message,
  actionLabel,
  onAction,
  onDismiss,
  icon = "check-circle",
  visible = true,
  style
}) {
  if (!visible) return null;
  return React.createElement("div", {
    role: "alert",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "16px",
      padding: "12px 16px 12px 20px",
      background: "var(--indisea-stone-900)",
      color: "var(--indisea-stone-100)",
      borderRadius: "var(--radius-pill)",
      fontSize: "var(--ui-body-md)",
      boxShadow: "none",
      ...style
    }
  }, [icon ? React.createElement("i", {
    key: "i",
    className: "ph-fill ph-" + icon,
    style: {
      fontSize: 18,
      color: "var(--indisea-green-400)"
    }
  }) : null, React.createElement("span", {
    key: "m"
  }, message), actionLabel ? React.createElement("button", {
    key: "a",
    type: "button",
    onClick: onAction,
    style: {
      background: "transparent",
      border: "none",
      color: "var(--indisea-signal-yellow)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--ui-label-lg)",
      cursor: "pointer",
      padding: 0
    }
  }, actionLabel) : null, onDismiss ? React.createElement("i", {
    key: "x",
    className: "ph-fill ph-x",
    onClick: onDismiss,
    style: {
      fontSize: 14,
      cursor: "pointer",
      opacity: 0.7
    }
  }) : null]);
}
Object.assign(__ds_scope, { Snackbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Snackbar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Charcoal tooltip on hover. Label only, never paragraphs. */
function Tooltip({
  label,
  children,
  placement = "top",
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, [children, show ? React.createElement("span", {
    key: "t",
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      background: "var(--indisea-stone-900)",
      color: "var(--indisea-stone-100)",
      padding: "6px 12px",
      borderRadius: "var(--radius-xs)",
      fontSize: "var(--ui-body-sm)",
      whiteSpace: "nowrap",
      zIndex: 50,
      pointerEvents: "none"
    }
  }, label) : null]);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Checkbox with a Phosphor fill check. 8px box radius, sky-blue when selected. */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  indeterminate = false,
  style
}) {
  const on = checked || indeterminate;
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.38 : 1,
      minHeight: "var(--space-6)",
      ...style
    },
    onClick: e => {
      e.preventDefault();
      if (!disabled && onChange) onChange(!checked);
    }
  }, [React.createElement("span", {
    key: "b",
    role: "checkbox",
    "aria-checked": indeterminate ? "mixed" : checked,
    tabIndex: disabled ? -1 : 0,
    style: {
      width: 20,
      height: 20,
      flex: "0 0 20px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: on ? "var(--action-primary)" : "transparent",
      border: `var(--border-width-strong) solid ${on ? "var(--action-primary)" : "var(--indisea-stone-600)"}`,
      borderRadius: "var(--radius-xs)",
      color: "var(--action-primary-text)",
      transition: "var(--transition-control)",
      boxShadow: "none"
    }
  }, on ? React.createElement("i", {
    className: `ph-fill ph-${indeterminate ? "minus" : "check"}`,
    style: {
      fontSize: 14
    }
  }) : null), label ? React.createElement("span", {
    key: "l",
    style: {
      fontSize: "var(--ui-body-lg)"
    }
  }, label) : null]);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
/** Outlined text field. 8px radius, 2px border on focus, Phosphor fill affordances. */
function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
  trailingIcon,
  hint,
  error,
  disabled = false,
  required = false,
  id,
  fullWidth = true,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useMemo(() => "in-" + Math.random().toString(36).slice(2, 8), []);
  const borderColor = error ? "var(--status-error)" : focus ? "var(--action-primary)" : "var(--border-hairline)";
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      width: fullWidth ? "100%" : undefined,
      ...style
    }
  }, [label ? React.createElement("label", {
    key: "l",
    htmlFor: fid,
    style: {
      fontSize: "var(--ui-label-lg)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-body)"
    }
  }, [label, required ? React.createElement("span", {
    key: "r",
    style: {
      color: "var(--status-error)"
    }
  }, " *") : null]) : null, React.createElement("div", {
    key: "f",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      height: "var(--control-height-lg)",
      padding: "0 16px",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: `${focus || error ? "var(--border-width-strong)" : "var(--border-width-hairline)"} solid ${borderColor}`,
      borderRadius: "var(--radius-input)",
      transition: "var(--transition-control)",
      boxShadow: "none"
    }
  }, [icon ? React.createElement("i", {
    key: "i",
    className: `ph-fill ph-${icon}`,
    style: {
      fontSize: 18,
      color: "var(--text-muted)"
    }
  }) : null, React.createElement("input", {
    key: "n",
    id: fid,
    type,
    value,
    onChange,
    placeholder,
    disabled,
    required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontSize: "var(--ui-body-lg)",
      color: "var(--text-body)",
      padding: 0
    },
    ...rest
  }), trailingIcon ? React.createElement("i", {
    key: "t",
    className: `ph-fill ph-${trailingIcon}`,
    style: {
      fontSize: 18,
      color: "var(--text-muted)"
    }
  }) : null]), hint || error ? React.createElement("span", {
    key: "h",
    style: {
      fontSize: "var(--ui-body-sm)",
      color: error ? "var(--status-error)" : "var(--text-muted)"
    }
  }, error || hint) : null]);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** Single radio. Use RadioGroup for a set. */
function Radio({
  label,
  checked = false,
  onChange,
  disabled = false,
  name,
  value,
  style
}) {
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.38 : 1,
      ...style
    },
    onClick: e => {
      e.preventDefault();
      if (!disabled && onChange) onChange(value);
    }
  }, [React.createElement("span", {
    key: "d",
    role: "radio",
    "aria-checked": checked,
    tabIndex: disabled ? -1 : 0,
    "data-name": name,
    style: {
      width: 20,
      height: 20,
      flex: "0 0 20px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: `var(--border-width-strong) solid ${checked ? "var(--action-primary)" : "var(--indisea-stone-600)"}`,
      borderRadius: "var(--radius-pill)",
      transition: "var(--transition-control)"
    }
  }, checked ? React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "var(--radius-pill)",
      background: "var(--action-primary)"
    }
  }) : null), label ? React.createElement("span", {
    key: "l",
    style: {
      fontSize: "var(--ui-body-lg)"
    }
  }, label) : null]);
}

/** Vertical or horizontal set of radios sharing one value. */
function RadioGroup({
  label,
  value,
  onChange,
  options = [],
  direction = "column",
  style
}) {
  const norm = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return React.createElement("fieldset", {
    style: {
      border: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      ...style
    }
  }, [label ? React.createElement("legend", {
    key: "l",
    style: {
      fontSize: "var(--ui-label-lg)",
      fontWeight: "var(--weight-medium)",
      padding: 0,
      marginBottom: "4px"
    }
  }, label) : null, React.createElement("div", {
    key: "g",
    style: {
      display: "flex",
      flexDirection: direction,
      gap: direction === "row" ? "24px" : "12px",
      flexWrap: "wrap"
    }
  }, norm.map(o => React.createElement(Radio, {
    key: o.value,
    label: o.label,
    value: o.value,
    checked: value === o.value,
    onChange
  })))]);
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/** Outlined select with a Phosphor caret. Options are {value,label} or plain strings. */
function Select({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Select…",
  hint,
  error,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useMemo(() => "sel-" + Math.random().toString(36).slice(2, 8), []);
  const borderColor = error ? "var(--status-error)" : focus ? "var(--action-primary)" : "var(--border-hairline)";
  const norm = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      width: "100%",
      ...style
    }
  }, [label ? React.createElement("label", {
    key: "l",
    htmlFor: fid,
    style: {
      fontSize: "var(--ui-label-lg)",
      fontWeight: "var(--weight-medium)"
    }
  }, label) : null, React.createElement("div", {
    key: "w",
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: "var(--control-height-lg)",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: `${focus || error ? "var(--border-width-strong)" : "var(--border-width-hairline)"} solid ${borderColor}`,
      borderRadius: "var(--radius-input)",
      transition: "var(--transition-control)",
      boxShadow: "none"
    }
  }, [React.createElement("select", {
    key: "s",
    id: fid,
    value,
    onChange,
    disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      flex: 1,
      height: "100%",
      padding: "0 44px 0 16px",
      border: "none",
      outline: "none",
      background: "transparent",
      fontSize: "var(--ui-body-lg)",
      color: value ? "var(--text-body)" : "var(--text-faint)",
      borderRadius: "var(--radius-input)"
    },
    ...rest
  }, [placeholder ? React.createElement("option", {
    key: "p",
    value: ""
  }, placeholder) : null].concat(norm.map(o => React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)))), React.createElement("i", {
    key: "c",
    className: "ph-fill ph-caret-down",
    style: {
      position: "absolute",
      right: 16,
      fontSize: 16,
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  })]), hint || error ? React.createElement("span", {
    key: "h",
    style: {
      fontSize: "var(--ui-body-sm)",
      color: error ? "var(--status-error)" : "var(--text-muted)"
    }
  }, error || hint) : null]);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Pill switch for on/off state. Track fills sky blue when on. */
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  style
}) {
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.38 : 1,
      ...style
    },
    onClick: e => {
      e.preventDefault();
      if (!disabled && onChange) onChange(!checked);
    }
  }, [React.createElement("span", {
    key: "t",
    role: "switch",
    "aria-checked": checked,
    tabIndex: disabled ? -1 : 0,
    style: {
      width: 48,
      height: 28,
      flex: "0 0 48px",
      padding: 3,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: checked ? "flex-end" : "flex-start",
      background: checked ? "var(--action-primary)" : "var(--indisea-stone-300)",
      border: `var(--border-width-strong) solid ${checked ? "var(--action-primary)" : "var(--indisea-stone-400)"}`,
      borderRadius: "var(--radius-pill)",
      transition: "var(--transition-control)",
      boxShadow: "none"
    }
  }, React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--action-primary-text)" : "var(--indisea-stone-600)",
      transition: "var(--transition-control)"
    }
  })), label ? React.createElement("span", {
    key: "l",
    style: {
      fontSize: "var(--ui-body-lg)"
    }
  }, label) : null]);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
/** Multi-line field. Matches Input's outlined treatment. */
function Textarea({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
  hint,
  error,
  disabled = false,
  required = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useMemo(() => "ta-" + Math.random().toString(36).slice(2, 8), []);
  const borderColor = error ? "var(--status-error)" : focus ? "var(--action-primary)" : "var(--border-hairline)";
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      width: "100%",
      ...style
    }
  }, [label ? React.createElement("label", {
    key: "l",
    htmlFor: fid,
    style: {
      fontSize: "var(--ui-label-lg)",
      fontWeight: "var(--weight-medium)"
    }
  }, [label, required ? React.createElement("span", {
    key: "r",
    style: {
      color: "var(--status-error)"
    }
  }, " *") : null]) : null, React.createElement("textarea", {
    key: "t",
    id: fid,
    value,
    onChange,
    placeholder,
    rows,
    disabled,
    required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      padding: "12px 16px",
      resize: "vertical",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: `${focus || error ? "var(--border-width-strong)" : "var(--border-width-hairline)"} solid ${borderColor}`,
      borderRadius: "var(--radius-input)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--ui-body-lg)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)",
      outline: "none",
      boxShadow: "none",
      transition: "var(--transition-control)"
    },
    ...rest
  }), hint || error ? React.createElement("span", {
    key: "h",
    style: {
      fontSize: "var(--ui-body-sm)",
      color: error ? "var(--status-error)" : "var(--text-muted)"
    }
  }, error || hint) : null]);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/graphics/ConnectionMap.jsx
try { (() => {
const COLORS = {
  blue: "var(--indisea-sky-blue)",
  yellow: "var(--indisea-signal-yellow)",
  green: "var(--indisea-link-green)",
  red: "var(--indisea-node-red)",
  inert: "var(--path-inert)"
};

/* Orthogonal routing, shared logic with ConnectorLine: each corner is clamped
   to half the shorter ADJACENT RUN. The earlier version clamped against
   `Math.abs(x-px)/2` and `Math.abs(y-py)/2 || radius` separately, which mixes
   the two axes -- on a corner where the incoming run is horizontal, the vertical
   term was 0, fell through `|| radius`, and the horizontal term halved a run it
   should not have. The result was corners rounded far tighter than the declared
   radius. Measuring the run as |dx| + |dy| makes the axis irrelevant. */
function polyline(points, radius) {
  if (!points.length) return "";
  let d = "M " + points[0][0] + " " + points[0][1];
  for (let i = 1; i < points.length - 1; i++) {
    const [px, py] = points[i - 1],
      [x, y] = points[i],
      [nx, ny] = points[i + 1];
    const inDir = [Math.sign(x - px), Math.sign(y - py)];
    const outDir = [Math.sign(nx - x), Math.sign(ny - y)];
    const runIn = Math.abs(x - px) + Math.abs(y - py);
    const runOut = Math.abs(nx - x) + Math.abs(ny - y);
    const r = Math.min(radius, runIn / 2, runOut / 2);
    d += " L " + (x - inDir[0] * r) + " " + (y - inDir[1] * r);
    d += " Q " + x + " " + y + " " + (x + outDir[0] * r) + " " + (y + outDir[1] * r);
  }
  const last = points[points.length - 1];
  d += " L " + last[0] + " " + last[1];
  return d;
}

/**
 * The brand's connection diagram: orthogonal routed paths with node terminals.
 * Paths are data, not decoration, so pass real endpoints.
 */
function ConnectionMap({
  paths = [],
  width = 640,
  height = 240,
  strokeWidth = 4,
  radius = 16,
  hub,
  style
}) {
  return React.createElement("svg", {
    viewBox: "0 0 " + width + " " + height,
    width: "100%",
    style: {
      display: "block",
      overflow: "visible",
      ...style
    },
    "aria-hidden": "true"
  }, [React.createElement("g", {
    key: "p",
    fill: "none",
    strokeWidth,
    strokeLinecap: "round"
  }, paths.map((p, i) => React.createElement("path", {
    key: i,
    d: polyline(p.points, radius),
    stroke: COLORS[p.color] || COLORS.blue,
    opacity: p.dim ? 0.35 : 1
  }))), React.createElement("g", {
    key: "n"
  }, paths.flatMap((p, i) => {
    const ends = [p.points[0], p.points[p.points.length - 1]];
    return ends.map((pt, j) => React.createElement("circle", {
      key: i + "-" + j,
      cx: pt[0],
      cy: pt[1],
      r: strokeWidth * 1.6,
      fill: j === 1 ? COLORS[p.color] || COLORS.blue : "var(--surface-canvas)",
      stroke: COLORS[p.color] || COLORS.blue,
      strokeWidth
    }));
  })), hub ? React.createElement("g", {
    key: "h"
  }, [React.createElement("circle", {
    key: "o",
    cx: hub[0],
    cy: hub[1],
    r: strokeWidth * 3.5,
    fill: "var(--surface-canvas)",
    stroke: "var(--indisea-stone-900)",
    strokeWidth
  }), React.createElement("circle", {
    key: "i",
    cx: hub[0],
    cy: hub[1],
    r: strokeWidth * 1.4,
    fill: "var(--indisea-stone-900)"
  })]) : null]);
}
Object.assign(__ds_scope, { ConnectionMap });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/graphics/ConnectionMap.jsx", error: String((e && e.message) || e) }); }

// components/graphics/ConnectorLine.jsx
try { (() => {
/* The brand's decorative connector line: a routed stroke that ends in a node.
   It is the logomark's idea enlarged, so it obeys the same rules as the mark.
   Distinct from <ConnectionMap>, which is a DIAGRAM whose paths carry data.
   A ConnectorLine carries no data; it links regions of a layout, or runs off
   the canvas to imply the line continues. Always colored, never neutral. */

const COLORS = {
  blue: "var(--indisea-sky-blue)",
  yellow: "var(--indisea-signal-yellow)",
  green: "var(--indisea-link-green)",
  red: "var(--indisea-node-red)"
};

/* Four weights, all on the 8pt grid. The corner radius is DERIVED from the
   weight, never chosen: a heavy line needs a wider turn to keep the same
   optical roundness a card corner has. radius = weight x 2, floored at 16 and
   snapped to a multiple of 16, which yields 16 / 16 / 32 / 64. */
const WEIGHTS = {
  sm: 4,
  md: 8,
  lg: 16,
  xl: 32
};
const connectorRadius = w => Math.max(16, Math.round(w * 2 / 16) * 16);

/* Orthogonal routing with quadratic corners. Each corner is clamped to half the
   shorter adjacent run, so a tight elbow degrades to a smaller radius instead of
   overshooting into the next segment. */
function routeOrthogonal(points, radius) {
  if (!points.length) return "";
  let d = "M " + points[0][0] + " " + points[0][1];
  for (let i = 1; i < points.length - 1; i++) {
    const [px, py] = points[i - 1],
      [x, y] = points[i],
      [nx, ny] = points[i + 1];
    const inDir = [Math.sign(x - px), Math.sign(y - py)];
    const outDir = [Math.sign(nx - x), Math.sign(ny - y)];
    const runIn = Math.abs(x - px) + Math.abs(y - py);
    const runOut = Math.abs(nx - x) + Math.abs(ny - y);
    const r = Math.min(radius, runIn / 2, runOut / 2);
    d += " L " + (x - inDir[0] * r) + " " + (y - inDir[1] * r);
    d += " Q " + x + " " + y + " " + (x + outDir[0] * r) + " " + (y + outDir[1] * r);
  }
  const last = points[points.length - 1];
  return d + " L " + last[0] + " " + last[1];
}

/* THERE ARE EXACTLY THREE LEGAL ENDS, AND A TERMINAL IS ALWAYS A CIRCLE IN THE
   LINE'S OWN COLOR: solid dot, hollow ring, or nothing at all (off canvas).
   This function can only emit <circle>, deliberately.

   NEVER a square, and never a second hue. A blue line with yellow square
   endpoints is the recurring failure here, and it comes from misreading the
   LOGOMARK: the mark's endpoints genuinely are yellow squares on blue strokes,
   and the mark and this element share every word of their vocabulary. The mark
   is a supplied asset that is never redrawn. This element does not inherit its
   anatomy. Also never a diamond, bar, cap, arrowhead or plus.

   Terminals are proportional to the weight, so a line reads the same at any
   size. A hollow node's ring is the SAME width as the line it terminates:
   that is what makes it read as the line curling into a loop rather than as a
   circle that happens to sit there. */
function Node({
  at,
  kind,
  weight,
  color,
  canvas
}) {
  if (!at || kind === "none") return null;
  if (kind === "solid") {
    return React.createElement("circle", {
      cx: at[0],
      cy: at[1],
      r: weight * 1.75,
      fill: color
    });
  }
  return React.createElement("circle", {
    cx: at[0],
    cy: at[1],
    r: weight * 2.5,
    fill: canvas,
    stroke: color,
    strokeWidth: weight
  });
}

/** Decorative connector line: routed stroke, derived corner radius, node terminals. */
function ConnectorLine({
  points = [],
  color = "blue",
  weight = "md",
  start = "hollow",
  end = "solid",
  width = 640,
  height = 200,
  radius,
  canvas = "var(--surface-canvas)",
  fixed = false,
  style
}) {
  const w = typeof weight === "number" ? weight : WEIGHTS[weight] || WEIGHTS.md;
  const r = radius != null ? radius : connectorRadius(w);
  const stroke = COLORS[color] || COLORS.blue;
  /* By default the svg is fluid (width 100%) and takes its height from the
     viewBox aspect, which is right for a line that owns its own block. It is
     WRONG for an absolutely-positioned overlay: the viewBox then scales to the
     container's width, and uniform scaling multiplies the STROKE too, so a
     4px "sm" line renders at 5.4px in an 841px container and every waypoint
     lands off the row's center. `fixed` renders at natural size in px instead,
     so the weight is the weight and y is y. Use it for any overlay, and let the
     parent clip with overflow:hidden to get the off-canvas end. */
  return React.createElement("svg", {
    viewBox: "0 0 " + width + " " + height,
    width: fixed ? width : "100%",
    height: fixed ? height : undefined,
    style: {
      display: "block",
      overflow: fixed ? "hidden" : "visible",
      ...style
    },
    "aria-hidden": "true"
  }, [React.createElement("path", {
    key: "p",
    d: routeOrthogonal(points, r),
    fill: "none",
    stroke,
    strokeWidth: w,
    strokeLinecap: start === "none" || end === "none" ? "butt" : "round"
  }), React.createElement("g", {
    key: "n"
  }, [React.createElement(Node, {
    key: "s",
    at: points[0],
    kind: start,
    weight: w,
    color: stroke,
    canvas
  }), React.createElement(Node, {
    key: "e",
    at: points[points.length - 1],
    kind: end,
    weight: w,
    color: stroke,
    canvas
  })])]);
}
Object.assign(__ds_scope, { connectorRadius, ConnectorLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/graphics/ConnectorLine.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AppBar.jsx
try { (() => {
/** Product top bar: view title, optional subtitle, trailing icon actions. */
function AppBar({
  title,
  subtitle,
  actions = [],
  onAction,
  style
}) {
  return React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      height: 72,
      padding: "0 32px",
      // nearly-white surface on the stone canvas; no rule, no shadow
      background: "var(--surface-card)",
      boxShadow: "none",
      ...style
    }
  }, [React.createElement("div", {
    key: "t",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      marginRight: "auto"
    }
  }, [React.createElement("h2", {
    key: "h",
    style: {
      fontSize: "var(--ui-title-lg)",
      fontWeight: "var(--weight-heading)",
      letterSpacing: "var(--tracking-heading)",
      margin: 0
    }
  }, title), subtitle ? React.createElement("span", {
    key: "s",
    style: {
      fontSize: "var(--ui-body-sm)",
      color: "var(--text-muted)"
    }
  }, subtitle) : null]), React.createElement("div", {
    key: "a",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, actions.map(a => React.createElement(__ds_scope.IconButton, {
    key: a.icon,
    icon: a.icon,
    label: a.label,
    onClick: () => onAction && onAction(a)
  })))]);
}
Object.assign(__ds_scope, { AppBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AppBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
/** Product left rail: lockup, pill nav items with Phosphor fill icons, footer slot. */
function SideNav({
  logoSrc = "assets/logos/Primary%20Lockup/Indisea-Logo-Primary.svg",
  items = [],
  active,
  onSelect,
  footer,
  width = 240,
  style
}) {
  return React.createElement("nav", {
    style: {
      width,
      flex: "0 0 " + width + "px",
      display: "flex",
      flexDirection: "column",
      gap: "32px",
      // No border. The rail sits on --surface-card against a --surface-canvas
      // content area, so the value step is the separation. A hairline rule is
      // only for regions that share the same surface (see AppBar, SiteHeader).
      padding: "24px 16px",
      background: "var(--surface-card)",
      boxShadow: "none",
      ...style
    }
  }, [
  // alignSelf, not stretch: this rail is a flex column, so the default would
  // widen the img to 240px and the SVG would center itself inside it.
  React.createElement("img", {
    key: "l",
    src: logoSrc,
    alt: "Indisea",
    style: {
      height: 24,
      width: "auto",
      margin: "8px",
      alignSelf: "flex-start"
    }
  }), React.createElement("div", {
    key: "i",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      flex: 1
    }
  }, items.map(it => {
    const on = active === it.id;
    return React.createElement("button", {
      key: it.id,
      type: "button",
      onClick: () => onSelect && onSelect(it.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        height: 40,
        padding: "0 16px",
        background: on ? "var(--selected-container)" : "transparent",
        color: on ? "var(--selected-on-container)" : "var(--text-body)",
        border: "none",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        fontSize: "var(--ui-label-lg)",
        fontWeight: on ? "var(--weight-semibold)" : "var(--weight-medium)",
        textAlign: "left",
        transition: "var(--transition-control)"
      }
    }, [React.createElement("i", {
      key: "g",
      className: "ph-fill ph-" + it.icon,
      style: {
        fontSize: 18
      }
    }), React.createElement("span", {
      key: "t",
      style: {
        flex: 1
      }
    }, it.label),
    // the badge lives INSIDE the pill, so it takes the pill's polarity.
    // --text-muted on the charcoal selected fill would be 1.8:1.
    it.badge != null ? React.createElement("span", {
      key: "b",
      style: {
        fontSize: "var(--ui-label-sm)",
        fontWeight: "var(--weight-semibold)",
        color: on ? "var(--selected-on-container)" : "var(--text-muted)",
        opacity: on ? 0.78 : 1
      }
    }, it.badge) : null]);
  })), footer || null]);
}
Object.assign(__ds_scope, { SideNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
/** Charcoal marketing footer: link columns, contact block, legal line.
   The lockup is the two-color blue mark with the STONE wordmark (the "-Alt" file),
   not the all-white one. Charcoal is a dark neutral canvas, not a color section,
   and mono lockups are reserved for one-color output or a saturated color fill. */
function SiteFooter({
  logoSrc = "assets/logos/Primary%20Lockup/Indisea-Logo-Primary-Alt.svg",
  columns = [],
  email = "info@indiseasoftware.com",
  phone = "+1 206-569-4354",
  address = ["334 N St Francis, Suite 314", "Wichita, KS 67202"],
  style
}) {
  const linkStyle = {
    display: "block",
    fontSize: "var(--ui-body-md)",
    color: "rgba(250,250,249,0.72)",
    textDecoration: "none",
    marginBottom: "12px"
  };
  return React.createElement("footer", {
    style: {
      background: "var(--indisea-stone-900)",
      color: "var(--indisea-stone-100)",
      padding: "64px 48px 32px",
      display: "flex",
      flexDirection: "column",
      gap: "48px",
      ...style
    }
  }, [React.createElement("div", {
    key: "t",
    style: {
      display: "flex",
      gap: "96px",
      flexWrap: "wrap"
    }
  }, [React.createElement("div", {
    key: "b",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      maxWidth: "32ch"
    }
  }, [
  // alignSelf is load-bearing: in a flex COLUMN the cross axis is horizontal, so
  // the default align-items:stretch widens this img to the container and the
  // SVG's default preserveAspectRatio then centers the artwork in that box.
  React.createElement("img", {
    key: "l",
    src: logoSrc,
    alt: "Indisea",
    style: {
      height: 28,
      width: "auto",
      alignSelf: "flex-start"
    }
  }), React.createElement("p", {
    key: "p",
    style: {
      fontSize: "var(--ui-body-md)",
      color: "rgba(250,250,249,0.72)",
      lineHeight: "var(--leading-body)"
    }
  }, "We build, host and maintain connectors for FinTechs.")])].concat(columns.map(c => React.createElement("div", {
    key: c.title
  }, [React.createElement("div", {
    key: "h",
    style: {
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      fontWeight: "var(--weight-semibold)",
      color: "var(--indisea-signal-yellow)",
      marginBottom: "16px"
    }
  }, c.title)].concat(c.links.map(l => React.createElement("a", {
    key: l,
    href: "#",
    style: linkStyle
  }, l)))))).concat([React.createElement("div", {
    key: "c"
  }, [React.createElement("div", {
    key: "h",
    style: {
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      fontWeight: "var(--weight-semibold)",
      color: "var(--indisea-signal-yellow)",
      marginBottom: "16px"
    }
  }, "Contact"), React.createElement("a", {
    key: "e",
    href: "mailto:" + email,
    style: linkStyle
  }, email), React.createElement("a", {
    key: "p",
    href: "tel:" + phone.replace(/[^0-9+]/g, ""),
    style: linkStyle
  }, phone), React.createElement("div", {
    key: "a",
    style: {
      fontSize: "var(--ui-body-md)",
      color: "rgba(250,250,249,0.72)",
      lineHeight: "var(--leading-body)"
    }
  }, address.map((a, i) => React.createElement("div", {
    key: i
  }, a)))])])), React.createElement("div", {
    key: "l",
    style: {
      borderTop: "var(--border-width-hairline) solid var(--indisea-stone-700)",
      paddingTop: "24px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "16px",
      fontSize: "var(--ui-body-sm)",
      color: "rgba(250,250,249,0.56)"
    }
  }, [React.createElement("span", {
    key: "c"
  }, "© " + new Date().getFullYear() + " Indisea Software. All rights reserved."), React.createElement("span", {
    key: "s"
  }, "SOC 2 Type II certified")])]);
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
/** Marketing site header: primary lockup, left-aligned nav, one pill CTA. */
function SiteHeader({
  logoSrc = "assets/logos/Primary%20Lockup/Indisea-Logo-Primary.svg",
  items = [],
  active,
  onNavigate,
  ctaLabel = "Talk to us",
  onCta,
  style
}) {
  return React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "48px",
      height: 80,
      padding: "0 48px",
      // nearly-white surface on the stone canvas. The one value step is the
      // separation, so there is no bottom rule and no shadow.
      background: "var(--surface-card)",
      position: "sticky",
      top: 0,
      zIndex: 10,
      boxShadow: "none",
      ...style
    }
  }, [React.createElement("img", {
    key: "l",
    src: logoSrc,
    alt: "Indisea",
    style: {
      height: 28,
      width: "auto",
      cursor: "pointer"
    },
    onClick: () => onNavigate && onNavigate(items[0])
  }), React.createElement("nav", {
    key: "n",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "32px",
      marginRight: "auto"
    }
  }, items.map(it => React.createElement("a", {
    key: it,
    href: "#" + it.toLowerCase(),
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(it);
    },
    style: {
      fontSize: "var(--ui-body-md)",
      fontWeight: "var(--weight-medium)",
      textDecoration: "none",
      color: active === it ? "var(--text-body)" : "var(--text-muted)",
      paddingBottom: "4px",
      borderBottom: "var(--border-width-strong) solid " + (active === it ? "var(--indisea-sky-blue)" : "transparent")
    }
  }, it))), React.createElement(__ds_scope.Button, {
    key: "c",
    size: "md",
    icon: "calendar-dot",
    onClick: onCta
  }, ctaLabel)]);
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Underlined tab set. Active tab carries a 2px sky-blue rule; no pills, no shadows. */
function Tabs({
  items = [],
  active,
  onSelect,
  style
}) {
  const norm = items.map(i => typeof i === "string" ? {
    id: i,
    label: i
  } : i);
  return React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: "32px",
      borderBottom: "var(--border-width-hairline) solid var(--border-hairline)",
      ...style
    }
  }, norm.map(t => {
    const on = active === t.id;
    return React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => onSelect && onSelect(t.id),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        height: 48,
        padding: "0 2px",
        background: "transparent",
        border: "none",
        borderBottom: "var(--border-width-strong) solid " + (on ? "var(--indisea-sky-blue)" : "transparent"),
        marginBottom: "-1px",
        color: on ? "var(--text-body)" : "var(--text-muted)",
        fontSize: "var(--ui-label-lg)",
        fontWeight: on ? "var(--weight-semibold)" : "var(--weight-medium)",
        cursor: "pointer",
        transition: "var(--transition-control)"
      }
    }, [t.icon ? React.createElement("i", {
      key: "i",
      className: "ph-fill ph-" + t.icon,
      style: {
        fontSize: 16
      }
    }) : null, React.createElement("span", {
      key: "l"
    }, t.label), t.count != null ? React.createElement("span", {
      key: "c",
      style: {
        fontSize: "var(--ui-label-md)",
        color: "var(--text-faint)"
      }
    }, t.count) : null]);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
/* Indisea cards have NO RESTING BORDER and no shadow. Separation comes from the
   surface value step alone (nearly white on stone, nearly charcoal on charcoal).
   A border appears only as an interaction state: a 2px charcoal edge on hover
   for an interactive card, and the focus ring on keyboard focus.

   TWO SURFACES ONLY: the stone canvas and the nearly-white card. One step, no
   third layer. There is deliberately no `sunken` tone.

   THE ONE EXCEPTION: a card sitting on its OWN value (stone on stone, charcoal
   on charcoal) has no step to separate it, so it may take a 1px border. Opt in
   with `sameOnSame`. Use it sparingly: if the layout can be arranged as two
   steps instead, do that.

   RADIUS IS A SYSTEM DECISION, NOT AN INSTANCE ONE. Every card is --radius-card
   (16px). The `radius` prop exists only for a standalone statement panel that
   sits alone in its own band, e.g. a full-width quote at --radius-card-lg. NEVER
   pass `radius` to a card inside a grid or row with other cards: mismatched
   corners in one layout is the single most common way this system looks wrong. */
function Card({
  children,
  tone = "default",
  padding = 24,
  radius = "var(--radius-card)",
  interactive = false,
  sameOnSame = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const tones = {
    default: {
      bg: "var(--surface-card)",
      fg: "var(--text-body)"
    },
    charcoal: {
      bg: "var(--indisea-stone-900)",
      fg: "var(--indisea-stone-100)"
    },
    green: {
      bg: "var(--indisea-link-green)",
      fg: "var(--indisea-nearly-white)"
    },
    blue: {
      bg: "var(--indisea-sky-blue)",
      fg: "var(--indisea-stone-900)"
    },
    yellow: {
      bg: "var(--indisea-signal-yellow)",
      fg: "var(--indisea-stone-900)"
    },
    red: {
      bg: "var(--indisea-node-red)",
      fg: "var(--indisea-nearly-white)"
    }
  };
  const t = tones[tone] || tones.default;
  // A resting border is legal in exactly one case: a card sitting on its own
  // value, where there is no step to separate it. Opt in with sameOnSame.
  const resting = sameOnSame ? "var(--border-same-on-same)" : "transparent";
  const edge = interactive && hover ? "var(--border-strong)" : resting;
  return React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onClick,
    tabIndex: interactive ? 0 : undefined,
    style: {
      background: t.bg,
      color: t.fg,
      // the border box is always reserved so hover does not shift layout
      border: `${sameOnSame && !(interactive && hover) ? "var(--border-width-hairline)" : "var(--border-width-strong)"} solid ${edge}`,
      outline: focus && interactive ? "var(--focus-ring-width) solid var(--border-focus)" : undefined,
      outlineOffset: "var(--focus-ring-offset)",
      borderRadius: radius,
      padding: typeof padding === "number" ? padding + "px" : padding,
      boxShadow: "none",
      cursor: interactive ? "pointer" : undefined,
      transition: "var(--transition-control)",
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ConnectorTile.jsx
try { (() => {
/** Connector-library tile: category icon in a tinted square, name, connector count. */
function ConnectorTile({
  name,
  count,
  icon = "plugs-connected",
  tone = "green",
  status,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    green: {
      bg: "var(--indisea-green-100)",
      fg: "var(--indisea-green-700)"
    },
    blue: {
      bg: "var(--indisea-blue-100)",
      fg: "var(--indisea-blue-700)"
    },
    yellow: {
      bg: "var(--indisea-yellow-100)",
      fg: "var(--indisea-yellow-700)"
    },
    red: {
      bg: "var(--indisea-red-100)",
      fg: "var(--indisea-red-700)"
    }
  };
  const t = tones[tone] || tones.green;
  return React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      padding: "16px",
      background: "var(--surface-card)",
      border: "var(--border-width-strong) solid " + (hover ? "var(--border-strong)" : "transparent"),
      // a tile is a card, so it uses --radius-card and never a smaller value:
      // mixed radii inside one grid is the thing this avoids
      borderRadius: "var(--radius-card)",
      cursor: onClick ? "pointer" : undefined,
      transition: "var(--transition-control)",
      boxShadow: "none",
      ...style
    }
  }, [React.createElement("span", {
    key: "i",
    style: {
      width: 32,
      height: 32,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: t.bg,
      color: t.fg,
      borderRadius: "var(--radius-sm)"
    }
  }, React.createElement("i", {
    className: "ph-fill ph-" + icon,
    style: {
      fontSize: 18
    }
  })), React.createElement("div", {
    key: "m",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, [React.createElement("span", {
    key: "n",
    style: {
      fontSize: "var(--ui-title-md)",
      fontWeight: "var(--weight-semibold)"
    }
  }, name), count != null ? React.createElement("span", {
    key: "c",
    style: {
      fontSize: "var(--ui-body-sm)",
      color: "var(--text-muted)"
    }
  }, count + " connectors") : null, status ? React.createElement("span", {
    key: "s",
    style: {
      fontSize: "var(--ui-body-sm)",
      color: "var(--text-muted)"
    }
  }, status) : null])]);
}
Object.assign(__ds_scope, { ConnectorTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ConnectorTile.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatBlock.jsx
try { (() => {
/**
 * The brand's big-number stat: 12+ / 200+ / SOC 2.
 * `color` takes an `--accent-type-*-lg` token. The tier boundary is 36px, so `md`
 * and `lg` are large-tier, while `sm` (28px) sits below it and is auto-downgraded
 * to the matching body-tier token, pass the `-lg` token at any size and the right
 * one is used. The label below stays `--text-muted`, so the figure's hue is never
 * the only carrier of meaning.
 */
function StatBlock({
  value,
  label,
  color = "var(--accent-type-red-lg)",
  size = "md",
  style
}) {
  const fs = {
    sm: "28px",
    md: "40px",
    lg: "clamp(40px, 5vw, 64px)"
  }[size] || "40px";
  // 28px is below --accent-type-lg-min-size, so it needs the AA body-tier step
  const fill = size === "sm" ? String(color).replace("-lg)", ")") : color;
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      ...style
    }
  }, [React.createElement("span", {
    key: "v",
    style: {
      fontSize: fs,
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-display)",
      fontWeight: "var(--weight-display)",
      color: fill
    }
  }, value), React.createElement("span", {
    key: "l",
    style: {
      fontSize: "var(--ui-body-sm)",
      color: "var(--text-muted)",
      maxWidth: "18ch",
      lineHeight: 1.4
    }
  }, label)]);
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Testimonial.jsx
try { (() => {
/** Customer quote block. Quote in H3 scale, attribution in muted label. */
function Testimonial({
  quote,
  name,
  role,
  company,
  tone = "default",
  style
}) {
  const dark = tone === "charcoal" || tone === "green";
  const bg = {
    default: "var(--surface-card)",
    charcoal: "var(--indisea-stone-900)",
    green: "var(--indisea-link-green)"
  }[tone];
  return React.createElement("figure", {
    style: {
      margin: 0,
      padding: "32px",
      background: bg,
      color: dark ? "var(--indisea-nearly-white)" : "var(--text-body)",
      borderRadius: "var(--radius-card)",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      boxShadow: "none",
      ...style
    }
  }, [React.createElement("blockquote", {
    key: "q",
    style: {
      margin: 0,
      fontSize: "clamp(18px, 1.6vw, 24px)",
      lineHeight: 1.35,
      letterSpacing: "var(--tracking-heading)",
      fontWeight: "var(--weight-heading)",
      maxWidth: "42ch"
    }
  }, quote), React.createElement("figcaption", {
    key: "c",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      fontSize: "var(--ui-body-sm)",
      color: dark ? "rgba(255,255,255,0.72)" : "var(--text-muted)"
    }
  }, [name ? React.createElement("span", {
    key: "n",
    style: {
      fontWeight: "var(--weight-semibold)",
      color: dark ? "var(--indisea-nearly-white)" : "var(--text-body)"
    }
  }, name) : null, React.createElement("span", {
    key: "r"
  }, [role, company].filter(Boolean).join(", "))])]);
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Testimonial.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/AlertsView.jsx
try { (() => {
const {
  Banner: ABanner,
  Badge: ABadge,
  Button: AlBtn,
  Switch: ASwitch,
  Select: ASelect,
  Input: AInput,
  Divider: AlDiv,
  Chip: AChip
} = window.IndiseaDesignSystem_0b3183;
function AlertsView() {
  const items = [{
    tone: "error",
    title: "Coupa sandbox failing",
    body: "Three consecutive failures since 09:14:02 UTC. Retries paused until the sandbox responds.",
    code: "ERR_UPSTREAM_TIMEOUT",
    when: "12 min ago"
  }, {
    tone: "warning",
    title: "Xero rate limited",
    body: "Retries resume automatically in 4 minutes. 18 records queued.",
    code: "429",
    when: "34 min ago"
  }, {
    tone: "success",
    title: "Stripe connector deployed",
    body: "v2.4.0 is live for all customers. No downtime recorded.",
    when: "2 h ago"
  }, {
    tone: "info",
    title: "BigCommerce build started",
    body: "Estimated completion Thursday. QA plan attached to the workstream.",
    when: "yesterday"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(AChip, {
    selected: true
  }, "All"), /*#__PURE__*/React.createElement(AChip, null, "Critical"), /*#__PURE__*/React.createElement(AChip, null, "Warnings"), /*#__PURE__*/React.createElement(AChip, null, "Deployments"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, "Escalations after Tier 2 route to Indisea automatically.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, items.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.title,
    style: {
      display: "flex",
      gap: 16,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(ABanner, {
    tone: a.tone,
    title: a.title,
    actionLabel: "Open"
  }, a.body, a.code ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      marginLeft: 8,
      opacity: 0.75
    }
  }, a.code) : null)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-faint)",
      paddingTop: 18,
      width: 88,
      textAlign: "right"
    }
  }, a.when)))));
}
function SettingsView() {
  const [alerts, setAlerts] = React.useState(true);
  const [retry, setRetry] = React.useState(true);
  const [sandbox, setSandbox] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: 24,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Workspace"
  }, /*#__PURE__*/React.createElement(AInput, {
    label: "Company",
    value: "Zamp",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(ASelect, {
    label: "Primary region",
    value: "us-west-2",
    onChange: () => {},
    options: [{
      value: "us-west-2",
      label: "US West (Oregon)"
    }, {
      value: "us-east-1",
      label: "US East (Virginia)"
    }, {
      value: "eu-central-1",
      label: "EU Central (Frankfurt)"
    }]
  }), /*#__PURE__*/React.createElement(AlDiv, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ASwitch, {
    label: "Alert on connector failure",
    checked: alerts,
    onChange: setAlerts
  }), /*#__PURE__*/React.createElement(ASwitch, {
    label: "Auto-retry failed syncs",
    checked: retry,
    onChange: setRetry
  }), /*#__PURE__*/React.createElement(ASwitch, {
    label: "Route new builds to sandbox first",
    checked: sandbox,
    onChange: setSandbox
  })), /*#__PURE__*/React.createElement(AlDiv, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(AlBtn, null, "Save changes"), /*#__PURE__*/React.createElement(AlBtn, {
    variant: "text"
  }, "Cancel"))), /*#__PURE__*/React.createElement(Panel, {
    title: "Hosting and compliance"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, [["shield-check", "SOC 2 Type II", "Audited annually. Report available on request."], ["database", "Your data stays yours", "Connector traffic goes end customer → your product. Nothing transits a third party."], ["clock-counter-clockwise", "Support escalations", "Indisea handles escalations after Tier 2."]].map(([icon, t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      flex: "0 0 32px",
      borderRadius: 8,
      background: "var(--indisea-green-100)",
      color: "var(--indisea-green-700)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-" + icon,
    style: {
      fontSize: 16
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      lineHeight: 1.5,
      marginTop: 4
    }
  }, b))))), /*#__PURE__*/React.createElement(AlDiv, null), /*#__PURE__*/React.createElement(ABadge, {
    tone: "solid",
    icon: "seal-check"
  }, "SOC 2 Type II certified")));
}
Object.assign(window, {
  AlertsView,
  SettingsView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/AlertsView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/ConnectorsView.jsx
try { (() => {
const {
  Tabs: LTabs,
  Badge: LBadge,
  Button: LBtn,
  IconButton: LIcon,
  Chip: LChip,
  Input: LInput,
  Tooltip: LTip,
  Dialog: LDialog,
  StatusDot: LDot,
  ProgressBar: LProg,
  Divider: LDiv
} = window.IndiseaDesignSystem_0b3183;
function ConnectorsView({
  onDeploy
}) {
  const [tab, setTab] = React.useState("all");
  const [q, setQ] = React.useState("");
  const [sel, setSel] = React.useState(null);
  const [dlg, setDlg] = React.useState(false);
  const rows = ROWS.filter(r => (tab === "all" || r.cat.toLowerCase() === tab) && r.name.toLowerCase().includes(q.toLowerCase()));
  const cell = {
    padding: "16px 20px",
    fontSize: 14,
    borderBottom: "1px solid var(--border-subtle)"
  };
  const th = {
    ...cell,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "var(--text-muted)",
    borderBottom: "1px solid var(--border-hairline)"
  };
  const mono = {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    fontVariantNumeric: "tabular-nums",
    fontFeatureSettings: '"zero" 1'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(LTabs, {
    items: [{
      id: "all",
      label: "All",
      count: 7
    }, {
      id: "erp",
      label: "ERP",
      count: 2
    }, {
      id: "ecommerce",
      label: "eCommerce",
      count: 2
    }, {
      id: "accounting",
      label: "Accounting",
      count: 2
    }, {
      id: "payments",
      label: "Payments",
      count: 1
    }],
    active: tab,
    onSelect: setTab,
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260,
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement(LInput, {
    icon: "magnifying-glass",
    placeholder: "Search connectors",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      marginBottom: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement(LBtn, {
    icon: "plus",
    onClick: () => setDlg(true)
  }, "New connector"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Connector"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Category"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Status"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Version"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Last sync"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      width: 180
    }
  }, "Uptime"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      width: 96
    }
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => {
    const [label, tone] = STATUS_LABEL[r.status];
    return /*#__PURE__*/React.createElement("tr", {
      key: r.name,
      onClick: () => setSel(r),
      style: {
        cursor: "pointer",
        background: sel && sel.name === r.name ? "var(--surface-sunken)" : "transparent"
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        ...cell,
        fontWeight: 600
      }
    }, r.name), /*#__PURE__*/React.createElement("td", {
      style: {
        ...cell,
        color: "var(--text-muted)"
      }
    }, r.cat), /*#__PURE__*/React.createElement("td", {
      style: cell
    }, /*#__PURE__*/React.createElement(LBadge, {
      tone: tone,
      size: "sm"
    }, label)), /*#__PURE__*/React.createElement("td", {
      style: {
        ...cell,
        ...mono,
        color: "var(--text-muted)"
      }
    }, r.version), /*#__PURE__*/React.createElement("td", {
      style: {
        ...cell,
        color: "var(--text-muted)"
      }
    }, r.sync), /*#__PURE__*/React.createElement("td", {
      style: cell
    }, /*#__PURE__*/React.createElement(LProg, {
      value: r.uptime,
      tone: r.uptime > 99 ? "success" : r.uptime > 97 ? "warning" : "error",
      height: 6
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        ...cell,
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(LTip, {
      label: "Retry sync"
    }, /*#__PURE__*/React.createElement(LIcon, {
      icon: "arrow-clockwise",
      label: "Retry sync",
      size: "sm"
    })), /*#__PURE__*/React.createElement(LTip, {
      label: "More"
    }, /*#__PURE__*/React.createElement(LIcon, {
      icon: "dots-three",
      label: "More",
      size: "sm"
    })))));
  })))), sel ? /*#__PURE__*/React.createElement(Panel, {
    title: sel.name,
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(LBtn, {
      variant: "outlined",
      size: "sm",
      icon: "file-text"
    }, "Logs"), /*#__PURE__*/React.createElement(LBtn, {
      variant: "success",
      size: "sm",
      icon: "rocket-launch",
      onClick: () => setDlg(true)
    }, "Deploy"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24
    }
  }, [["Category", sel.cat], ["Version", sel.version, true], ["Last sync", sel.sync], ["Uptime, 30 days", sel.uptime + "%", true]].map(([k, v, isMono]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: isMono ? {
      ...mono,
      fontSize: 17,
      marginTop: 6,
      color: "var(--text-body)"
    } : {
      fontSize: 18,
      fontWeight: 600,
      marginTop: 6
    }
  }, v)))), /*#__PURE__*/React.createElement(LDiv, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(LDot, {
    status: sel.status,
    label: STATUS_LABEL[sel.status][0]
  }), /*#__PURE__*/React.createElement(LDot, {
    status: "operational",
    label: "Hosted by Indisea \xB7 SOC 2 Type II"
  }))) : null, /*#__PURE__*/React.createElement(LDialog, {
    open: dlg,
    title: "Deploy Stripe connector v2.4.0",
    onClose: () => setDlg(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LBtn, {
      variant: "text",
      onClick: () => setDlg(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(LBtn, {
      variant: "success",
      icon: "rocket-launch",
      onClick: () => {
        setDlg(false);
        onDeploy && onDeploy();
      }
    }, "Deploy"))
  }, "Customers keep running v2.3.6 until the swap completes. No downtime is expected."));
}
Object.assign(window, {
  ConnectorsView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/ConnectorsView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/OverviewView.jsx
try { (() => {
const {
  ConnectionMap: OMap,
  ConnectorTile: OTile,
  StatusDot: ODot,
  Badge: OBadge,
  Button: OBtn,
  ProgressBar: OProg,
  Avatar: OAvatar,
  Banner: OBanner
} = window.IndiseaDesignSystem_0b3183;
function OverviewView({
  onOpenConnector
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(MetricRow, {
    items: [{
      value: "11",
      label: "Connectors online",
      color: "var(--indisea-stone-900)"
    }, {
      value: "26",
      label: "Active functions",
      color: "var(--accent-type-blue-lg)"
    }, {
      value: "99%",
      label: "Uptime, 30 days",
      color: "var(--accent-type-green-lg)"
    }, {
      value: "1",
      label: "Critical alert",
      color: "var(--accent-type-red-lg)"
    }]
  }), /*#__PURE__*/React.createElement(OBanner, {
    tone: "error",
    title: "Coupa sandbox failing",
    actionLabel: "View logs",
    onAction: () => {}
  }, "Three consecutive failures since 09:14 UTC. Retries paused until the sandbox responds."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "8fr 4fr",
      gap: 24,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "System map",
    action: /*#__PURE__*/React.createElement(OBtn, {
      variant: "text",
      size: "sm",
      icon: "arrow-right"
    }, "View more")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-canvas)",
      borderRadius: "var(--radius-md)",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(OMap, {
    width: 640,
    height: 220,
    hub: [320, 110],
    paths: [{
      color: "blue",
      points: [[16, 32], [160, 32], [160, 110], [320, 110]]
    }, {
      color: "green",
      points: [[16, 188], [220, 188], [220, 110], [320, 110]]
    }, {
      color: "yellow",
      points: [[320, 110], [470, 110], [470, 40], [624, 40]]
    }, {
      color: "red",
      points: [[320, 110], [520, 110], [520, 180], [624, 180]]
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(ODot, {
    status: "operational",
    label: "9 pathways healthy"
  }), /*#__PURE__*/React.createElement(ODot, {
    status: "degraded",
    label: "1 rate limited"
  }), /*#__PURE__*/React.createElement(ODot, {
    status: "down",
    label: "1 failing"
  }))), /*#__PURE__*/React.createElement(Panel, {
    title: "Deployment queue"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(OProg, {
    value: 62,
    label: "BigCommerce v0.9.0 build"
  }), /*#__PURE__*/React.createElement(OProg, {
    value: 99.2,
    tone: "success",
    label: "Uptime, 30 days"
  }), /*#__PURE__*/React.createElement(OProg, {
    value: 18,
    tone: "warning",
    label: "Xero retry backlog"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      paddingTop: 16,
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(OAvatar, {
    name: "Amy Verner",
    tone: "green"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, "Amy Verner"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "Product Manager \xB7 on call"))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Connector library",
    action: /*#__PURE__*/React.createElement(OBtn, {
      variant: "text",
      size: "sm",
      icon: "arrow-right",
      onClick: onOpenConnector
    }, "All connectors")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(OTile, {
    name: "ERP",
    count: 2,
    icon: "gear-six",
    tone: "green",
    onClick: onOpenConnector
  }), /*#__PURE__*/React.createElement(OTile, {
    name: "eCommerce",
    count: 5,
    icon: "shopping-cart",
    tone: "yellow",
    onClick: onOpenConnector
  }), /*#__PURE__*/React.createElement(OTile, {
    name: "Accounting",
    count: 3,
    icon: "calculator",
    tone: "red",
    onClick: onOpenConnector
  }), /*#__PURE__*/React.createElement(OTile, {
    name: "Payments",
    count: 2,
    icon: "credit-card",
    tone: "blue",
    onClick: onOpenConnector
  }))));
}
Object.assign(window, {
  OverviewView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/OverviewView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/shared.jsx
try { (() => {
const CNS = window.IndiseaDesignSystem_0b3183;
function Panel({
  title,
  action,
  children,
  padding = 24,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      padding,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      ...style
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: "var(--weight-heading)",
      letterSpacing: "var(--tracking-heading)",
      flex: 1
    }
  }, title), action) : null, children);
}
function MetricRow({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${items.length}, 1fr)`,
      gap: 16
    }
  }, items.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.label,
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      fontWeight: "var(--weight-display)",
      letterSpacing: "var(--tracking-display)",
      color: m.color || "var(--text-heading)",
      lineHeight: 1
    }
  }, m.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      marginTop: 8
    }
  }, m.label))));
}
const ROWS = [{
  name: "Quickbooks Online",
  cat: "Accounting",
  status: "operational",
  version: "v3.1.0",
  sync: "2 min ago",
  uptime: 99.98
}, {
  name: "NetSuite",
  cat: "ERP",
  status: "operational",
  version: "v2.8.4",
  sync: "4 min ago",
  uptime: 99.94
}, {
  name: "Shopify",
  cat: "eCommerce",
  status: "operational",
  version: "v4.0.2",
  sync: "1 min ago",
  uptime: 99.99
}, {
  name: "Xero",
  cat: "Accounting",
  status: "degraded",
  version: "v1.9.7",
  sync: "18 min ago",
  uptime: 98.71
}, {
  name: "Coupa",
  cat: "ERP",
  status: "down",
  version: "v1.4.1",
  sync: "3 h ago",
  uptime: 94.02
}, {
  name: "Stripe",
  cat: "Payments",
  status: "operational",
  version: "v2.4.0",
  sync: "just now",
  uptime: 99.97
}, {
  name: "BigCommerce",
  cat: "eCommerce",
  status: "building",
  version: "v0.9.0",
  sync: "n/a",
  uptime: 0
}];
const STATUS_LABEL = {
  operational: ["Operational", "success"],
  degraded: ["Degraded", "warning"],
  down: ["Failing", "error"],
  building: ["In build", "info"]
};
Object.assign(window, {
  Panel,
  MetricRow,
  ROWS,
  STATUS_LABEL,
  CNS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutPage.jsx
try { (() => {
const {
  Button: ABtn,
  Card: ACard,
  Icon: AIcon,
  Divider: ADiv
} = window.IndiseaDesignSystem_0b3183;
function AboutPage() {
  const points = [{
    icon: "compass-tool",
    title: "Strategic, not transactional",
    body: "We know and have seen the edge cases. We know these connector platforms and the broader market spaces. Problems get solved, not treated as one-offs."
  }, {
    icon: "chats-circle",
    title: "Extremely responsive",
    body: "Shared Slack channels and regular meetings. Our team is geographically distributed and available throughout the workday."
  }, {
    icon: "wrench",
    title: "Operational maturity",
    body: "Stable, maintained connectors, enhanced when necessary, with bugs fixed as they appear. Feature requests, new connectors and platform releases run concurrently. No customer downtime."
  }, {
    icon: "handshake",
    title: "Accountable beyond launch",
    body: "We provide pushback when there could be an issue, share what we learned on every connector we've built, and stay accountable for the IP we deliver."
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    pad: "96px 64px 64px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "About Indisea"), /*#__PURE__*/React.createElement(Reveal, {
    tag: "h1",
    lines: ["What it's like to work", "with Indisea"],
    style: {
      fontSize: "clamp(40px, 4.4vw, 64px)",
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-heading)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.6,
      marginTop: 32,
      maxWidth: "60ch"
    }
  }, "Indisea is a strategic partner to customers. We do not operate like a traditional engineering services vendor. Our team works alongside yours, bringing strategic input and staying accountable beyond the initial build."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      marginTop: 24,
      color: "var(--text-muted)",
      maxWidth: "62ch"
    }
  }, "We don't need to be trained by your teams. When you work with us you can consolidate your connectors with one company: we build them, host them, maintain them and support them."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(ABtn, {
    size: "lg",
    icon: "calendar-dot"
  }, "Talk to us"))), /*#__PURE__*/React.createElement(ACard, {
    tone: "charcoal",
    padding: 32,
    style: {
      alignSelf: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: "var(--weight-heading)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--indisea-signal-yellow)"
    }
  }, "Where our team comes from"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      marginTop: 24
    }
  }, [["Avalara", "Connector Program, AvaTax UI, first tax engine, Connector QA"], ["Google", "Engineering leadership"], ["Applianz Technologies", "Founded and exited, acquired by Avalara"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: "var(--indisea-stone-50)"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(250,250,249,0.64)",
      marginTop: 4,
      lineHeight: 1.5
    }
  }, v))))))), /*#__PURE__*/React.createElement(Section, {
    pad: "64px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 24
    }
  }, points.map(p => /*#__PURE__*/React.createElement(ACard, {
    key: p.title,
    padding: 32,
    style: {
      display: "flex",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      flex: "0 0 40px",
      borderRadius: 12,
      background: "var(--indisea-blue-100)",
      color: "var(--indisea-blue-700)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    name: p.icon,
    size: "lg"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: "var(--weight-heading)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--text-muted)",
      marginTop: 8
    }
  }, p.body)))))), /*#__PURE__*/React.createElement(Section, {
    pad: "16px 64px 64px"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Where we work"), /*#__PURE__*/React.createElement(Reveal, {
    tag: "h2",
    lines: ["Seattle and Pune,", "through the whole workday"],
    style: {
      fontSize: 40,
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-heading)",
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(ParallaxPhoto, {
    src: PHOTOS + "photo-space-needle-closeup-seattle-by-jacob.png",
    alt: "The Space Needle, Seattle",
    position: "50% 32%"
  }), /*#__PURE__*/React.createElement(ParallaxPhoto, {
    src: PHOTOS + "photo-lake-and-hills-pune-india-by-jacob.png",
    alt: "Lake and hills near Pune, India",
    position: "50% 62%"
  }), /*#__PURE__*/React.createElement(ParallaxPhoto, {
    src: PHOTOS + "photo-colorful-window-with-plants-pune-india.png",
    alt: "A painted window in Pune, India",
    position: "50% 45%"
  })), /*#__PURE__*/React.createElement(RevealBlock, {
    delay: 120,
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      margin: 0,
      color: "var(--text-muted)",
      maxWidth: "62ch"
    }
  }, "The name is India and Seattle joined together. Rohit and Rahul are from India, Mark and Casey from Seattle, and the overlap means someone is awake and accountable for most of the day."))), /*#__PURE__*/React.createElement(Section, {
    mode: "blue",
    pad: "56px 64px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 48,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(32px, 3.2vw, 40px)",
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-heading)",
      margin: 0,
      color: "var(--text-heading)",
      maxWidth: "26ch"
    }
  }, "One company builds it, hosts it and answers for it."), /*#__PURE__*/React.createElement(ABtn, {
    size: "lg",
    icon: "calendar-dot"
  }, "Talk to us"))), /*#__PURE__*/React.createElement(AltBand, {
    eyebrow: "Track record",
    headline: "Expertise you can't easily hire",
    body: "Our team has built dozens of connectors with leading FinTechs, eCommerce platforms, ERPs and marketplaces over decades. You are not paying us to learn the space.",
    stats: [{
      value: "10+",
      label: "Years leading Connector Engineering at Avalara",
      color: "var(--accent-type-blue-lg)"
    }, {
      value: "2/3",
      label: "Of the work already done before you ask",
      color: "var(--accent-type-green-lg)"
    }, {
      value: "12",
      label: "Pre-built connectors in the library",
      color: "var(--accent-type-yellow-lg)"
    }, {
      value: "SOC 2",
      label: "Type II certified, audited annually",
      color: "var(--text-heading)"
    }]
  }));
}
Object.assign(window, {
  AboutPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ConnectorsPage.jsx
try { (() => {
const {
  Button: KBtn,
  Card: KCard,
  ConnectorTile: KTile,
  Chip: KChip,
  Tabs: KTabs,
  Badge: KBadge,
  StatBlock: KStat
} = window.IndiseaDesignSystem_0b3183;
const CONNECTORS = [{
  name: "Quickbooks",
  cat: "accounting"
}, {
  name: "NetSuite",
  cat: "erp"
}, {
  name: "Coupa",
  cat: "erp"
}, {
  name: "Shopify",
  cat: "eCommerce"
}, {
  name: "Xero",
  cat: "accounting"
}, {
  name: "WooCommerce",
  cat: "eCommerce"
}, {
  name: "ShopWare",
  cat: "eCommerce"
}, {
  name: "BigCommerce",
  cat: "eCommerce"
}, {
  name: "ChargeBee",
  cat: "payments"
}, {
  name: "Adobe Commerce",
  cat: "eCommerce"
}, {
  name: "Stripe",
  cat: "payments"
}, {
  name: "Rillet",
  cat: "accounting"
}];
const CATS = [{
  id: "all",
  label: "All",
  count: 12
}, {
  id: "erp",
  label: "ERP",
  count: 2
}, {
  id: "ecommerce",
  label: "eCommerce",
  count: 5
}, {
  id: "accounting",
  label: "Accounting",
  count: 3
}, {
  id: "payments",
  label: "Payments",
  count: 2
}];
const CAT_META = {
  erp: {
    icon: "gear-six",
    tone: "green"
  },
  eCommerce: {
    icon: "shopping-cart",
    tone: "yellow"
  },
  accounting: {
    icon: "calculator",
    tone: "red"
  },
  payments: {
    icon: "credit-card",
    tone: "blue"
  }
};
function ConnectorsPage() {
  const [tab, setTab] = React.useState("all");
  const list = tab === "all" ? CONNECTORS : CONNECTORS.filter(c => c.cat === tab);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    pad: "96px 64px 48px"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Connectors"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: 64,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, {
    tag: "h1",
    lines: ["Decades of building", "and operating connectors"],
    style: {
      fontSize: "clamp(40px, 4.4vw, 64px)",
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-heading)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.6,
      marginTop: 32,
      maxWidth: "58ch"
    }
  }, "Our connector library has 12 pre-built connectors across eCommerce, ERP, accounting and payments, and our team has built many more across FinTech, tax and marketplace platforms. Customers don't hire us to figure it out. They hire us to wire pre-built connectors into their products.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(KStat, {
    value: "12",
    label: "In the pre-built library",
    color: "var(--accent-type-red-lg)"
  }), /*#__PURE__*/React.createElement(KStat, {
    value: "2/3",
    label: "Of the work done before you ask",
    color: "var(--accent-type-green-lg)"
  })))), /*#__PURE__*/React.createElement(Section, {
    pad: "0 64px 96px"
  }, /*#__PURE__*/React.createElement(KTabs, {
    items: CATS,
    active: tab,
    onSelect: setTab,
    style: {
      marginBottom: 32
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, list.map(c => {
    const m = CAT_META[c.cat];
    return /*#__PURE__*/React.createElement(KCard, {
      key: c.name,
      padding: 20,
      interactive: true,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(PlaceholderTile, {
      label: c.name + " mark, platform artwork not supplied",
      height: 56
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 600
      }
    }, c.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--text-muted)",
        marginTop: 4,
        textTransform: "capitalize"
      }
    }, c.cat)), /*#__PURE__*/React.createElement(KBadge, {
      tone: "success",
      icon: "check-circle",
      size: "sm"
    }, "Pre-built"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "charcoal",
    pad: "64px"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "By category"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, [["ERP", 2, "gear-six"], ["eCommerce", 5, "shopping-cart"], ["Accounting", 3, "calculator"], ["Payments", 2, "credit-card"]].map(([n, c, icon]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      background: "var(--indisea-stone-800)",
      borderRadius: "var(--radius-card)",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-" + icon,
    style: {
      fontSize: 22,
      color: "var(--indisea-signal-yellow)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: "var(--indisea-stone-50)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(250,250,249,0.64)",
      marginTop: 2
    }
  }, c, " connectors")))))), /*#__PURE__*/React.createElement(Section, {
    mode: "blue",
    pad: "56px 64px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 48,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(36px, 3.2vw, 44px)",
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-heading)",
      margin: 0,
      color: "var(--text-heading)"
    }
  }, "Need one we haven't built yet?"), /*#__PURE__*/React.createElement(KBtn, {
    size: "lg",
    icon: "calendar-dot",
    style: {
      background: "var(--action-primary)",
      color: "var(--action-primary-text)",
      border: "2px solid transparent"
    }
  }, "Talk to us"))));
}
Object.assign(window, {
  ConnectorsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ConnectorsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactPage.jsx
try { (() => {
const {
  Button: FBtn,
  Card: FCard,
  Input: FInput,
  Select: FSelect,
  Textarea: FText,
  Checkbox: FCheck,
  RadioGroup: FRadio,
  Icon: FIcon,
  Snackbar: FSnack,
  Divider: FDivider
} = window.IndiseaDesignSystem_0b3183;
const PLATFORMS = ["Quickbooks", "NetSuite", "Coupa", "Shopify", "Xero", "WooCommerce", "ShopWare", "BigCommerce", "ChargeBee", "Adobe Commerce", "Stripe", "Rillet"];
function ContactPage() {
  const [picked, setPicked] = React.useState(["Quickbooks"]);
  const [problem, setProblem] = React.useState("sales");
  const [source, setSource] = React.useState("");
  const [sent, setSent] = React.useState(false);
  const toggle = p => setPicked(s => s.includes(p) ? s.filter(x => x !== p) : s.concat(p));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    pad: "96px 64px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "5fr 7fr",
      gap: 64,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Contact"), /*#__PURE__*/React.createElement(Reveal, {
    tag: "h1",
    lines: ["Contact us"],
    style: {
      fontSize: "clamp(40px, 4vw, 56px)",
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-heading)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      marginTop: 24,
      color: "var(--text-muted)",
      maxWidth: "44ch"
    }
  }, "Tell us what you need connected. We reply within one business day."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      marginTop: 40
    }
  }, [["envelope", "info@indiseasoftware.com", "mailto:info@indiseasoftware.com"], ["phone", "+1 206-569-4354", "tel:+12065694354"], ["map-pin", "334 N St Francis, Suite 314, Wichita, KS 67202", null]].map(([icon, text, href]) => /*#__PURE__*/React.createElement("div", {
    key: text,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: "var(--surface-sunken)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(FIcon, {
    name: icon,
    size: "md"
  })), href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontSize: 15,
      textDecoration: "none"
    }
  }, text) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15
    }
  }, text)))), /*#__PURE__*/React.createElement(ParallaxPhoto, {
    src: PHOTOS + "stock-photo-man-working-on-laptop-in-cafe-booth.png",
    alt: "Working on a laptop in a cafe booth",
    ratio: 4 / 3,
    position: "50% 45%",
    style: {
      marginTop: 40
    }
  })), /*#__PURE__*/React.createElement(FCard, {
    padding: 32
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(FInput, {
    label: "Name",
    placeholder: "Your name",
    required: true
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Work email",
    type: "email",
    icon: "envelope",
    placeholder: "you@company.com",
    required: true
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Company",
    placeholder: "Acme Financial"
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Role",
    placeholder: "VP of Product"
  })), /*#__PURE__*/React.createElement(FDivider, {
    style: {
      margin: "32px 0 24px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      marginBottom: 16
    }
  }, "What connectors are you looking to build? Select all that apply"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 12
    }
  }, PLATFORMS.map(p => /*#__PURE__*/React.createElement(FCheck, {
    key: p,
    label: p,
    checked: picked.includes(p),
    onChange: () => toggle(p)
  }))), /*#__PURE__*/React.createElement(FDivider, {
    style: {
      margin: "32px 0 24px"
    }
  }), /*#__PURE__*/React.createElement(FRadio, {
    label: "What problem do you need help solving?",
    value: problem,
    onChange: setProblem,
    options: [{
      value: "sales",
      label: "Connector gaps showing up in sales calls"
    }, {
      value: "eng",
      label: "Engineering constrained by building connectors on top of your product"
    }, {
      value: "cust",
      label: "An existing customer needing a new connector"
    }, {
      value: "other",
      label: "Other"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(FSelect, {
    label: "How did you hear about us?",
    value: source,
    onChange: e => setSource(e.target.value),
    options: ["Referral from a customer or partner", "LinkedIn", "Online search", "Industry event", "Email outreach", "Other"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(FText, {
    label: "Message",
    rows: 4,
    placeholder: "Tell us a bit about yourself, your company and how we can help you."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(FBtn, {
    size: "lg",
    icon: "paper-plane-tilt",
    onClick: () => setSent(true)
  }, "Talk to us"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-faint)"
    }
  }, "Protected by reCAPTCHA. Goes to info@indiseasoftware.com.")))), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      left: 32,
      bottom: 32,
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(FSnack, {
    message: "Thanks, we'll reply within one business day.",
    onDismiss: () => setSent(false)
  })) : null), /*#__PURE__*/React.createElement(AltBand, {
    eyebrow: "What happens next",
    headline: "One reply, from an engineer",
    body: "No SDR sequence and no discovery deck. You get a reply from someone who has built the connector you are asking about, with a view on scope and where the edge cases are.",
    stats: [{
      value: "1 day",
      label: "Typical reply time, business days",
      color: "var(--accent-type-blue-lg)"
    }, {
      value: "Tier 2",
      label: "Where we pick up support escalations",
      color: "var(--accent-type-green-lg)"
    }, {
      value: "0",
      label: "Third parties your data passes through",
      color: "var(--accent-type-yellow-lg)"
    }, {
      value: "SOC 2",
      label: "Type II, report available on request",
      color: "var(--text-heading)"
    }],
    cta: "Book a call instead"
  }));
}
Object.assign(window, {
  ContactPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CustomersPage.jsx
try { (() => {
const {
  Button: CBtn,
  Testimonial: CQuote,
  Card: CCard,
  Chip: CChip,
  ConnectorTile: CTile,
  Badge: CBadge
} = window.IndiseaDesignSystem_0b3183;
function CustomersPage() {
  const quotes = [{
    quote: "They are our partner in building out connectors. They are incredibly knowledgeable, not just about building connectors, but also to the tax space. They feel like an extension of our internal team.",
    role: "Product Manager",
    company: "a PE-backed global tax compliance platform"
  }, {
    quote: "We needed people who had expertise and understood our business, not just the integration piece. Indisea handled everything in a strategic way, not as a one-off.",
    role: "Product Manager",
    company: "CereTax"
  }, {
    quote: "Indisea allows our engineering team to stay focused on the Zamp product itself. Everything we have thrown at them, they have been able to deliver.",
    role: "Product Manager",
    company: "Zamp"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    pad: "96px 64px 48px"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Customers"), /*#__PURE__*/React.createElement(Reveal, {
    tag: "h1",
    lines: ["What our customers", "are saying"],
    style: {
      fontSize: "clamp(40px, 4.4vw, 64px)",
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-heading)"
    }
  }), /*#__PURE__*/React.createElement(RevealBlock, {
    delay: 90,
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.6,
      margin: 0,
      maxWidth: "58ch"
    }
  }, "The best-fit customers weren't looking for a vendor to hand work off to. They wanted a team that would operate alongside them and stay accountable beyond the initial build."))), /*#__PURE__*/React.createElement(Section, {
    pad: "0 64px 80px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(CQuote, quotes[0]), /*#__PURE__*/React.createElement(CQuote, quotes[1]), /*#__PURE__*/React.createElement(CQuote, quotes[2])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24,
      marginTop: 64
    }
  }, [["Strategic, not transactional", "They wanted a team that had already seen the edge cases, not a vendor to hand a ticket to."], ["Focus protected", "Their engineers stayed on their core product while connector work moved to us."], ["Accountable past launch", "We host it, maintain it and take support escalations after Tier 2."]].map(([t, b]) => /*#__PURE__*/React.createElement(CCard, {
    key: t,
    padding: 28,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: "var(--weight-heading)",
      letterSpacing: "var(--tracking-heading)",
      lineHeight: 1.2
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--text-muted)",
      margin: 0
    }
  }, b))))), /*#__PURE__*/React.createElement(Section, {
    tone: "charcoal",
    pad: "72px 64px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "6fr 6fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Why they stayed"), /*#__PURE__*/React.createElement(Reveal, {
    tag: "h2",
    lines: ["Customers describe us", "as part of the team"],
    style: {
      fontSize: 40,
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-heading)",
      color: "var(--indisea-stone-50)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      margin: 0,
      color: "rgba(250,250,249,0.72)",
      maxWidth: "44ch"
    }
  }, "We often work as a multi-year partner, invested in growing your connector ecosystem and customer satisfaction."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(CBtn, {
    size: "lg",
    icon: "calendar-dot"
  }, "Talk to us"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "rgba(250,250,249,0.56)"
    }
  }, "Ask us for references in your category."))))), /*#__PURE__*/React.createElement(Section, {
    mode: "yellow",
    pad: "48px 64px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: "var(--weight-heading)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--text-body)",
      flex: "0 0 auto"
    }
  }, "Trusted by"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 12,
      flex: 1
    }
  }, ["Zamp", "CereTax", "Valid8", "Mondial", "Global tax platform"].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "indisea-card-on-color",
    style: {
      height: 56,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontSize: 11,
      lineHeight: 1.3,
      padding: 8
    }
  }, n))))));
}
Object.assign(window, {
  CustomersPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CustomersPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
const {
  Button: WBtn,
  Card: WCard,
  StatBlock: WStat,
  ConnectionMap: WMap,
  Testimonial: WQuote,
  Icon: WIcon
} = window.IndiseaDesignSystem_0b3183;
function HomePage({
  onNavigate
}) {
  const pillars = [{
    title: "Launch faster, say yes more often",
    icon: "lightning",
    body: "Connector gaps stall deals and accelerate churn. We get you to market faster than building in-house, because the ramp time is already behind us.",
    tone: "blue"
  }, {
    title: "Expertise you can't easily hire",
    icon: "shield-check",
    body: "Deep knowledge of ERPs, accounting platforms, eCommerce and tax engines, and how they behave in regulated contexts.",
    tone: "yellow"
  }, {
    title: "A partner, not a vendor",
    icon: "users-three",
    body: "We build it, host it, maintain it and support it. The relationship doesn't end at launch, and we bring a point of view on what to build next.",
    tone: "green"
  }];
  const reasons = [{
    n: "01",
    title: "Connector gaps showing up in sales calls",
    body: "A prospective customer is asking if your product integrates with X and you don't have a strong answer today.",
    color: "var(--accent-type-red-lg)"
  }, {
    n: "02",
    title: "Constrained Product and Engineering teams",
    body: "Connector work can cost as much as building your core product. Your teams stay focused; we take the connector layer.",
    color: "var(--accent-type-yellow-lg)"
  }, {
    n: "03",
    title: "Serving more customers",
    body: "A specific deal, customer request or product launch created urgency to move faster than internal capacity allows.",
    color: "var(--accent-type-green-lg)"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    pad: "96px 64px 64px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: 64,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, {
    tag: "h1",
    lines: ["We build, host and", "maintain connectors", "for FinTechs"],
    style: {
      fontSize: "clamp(44px, 5vw, 72px)",
      lineHeight: "var(--leading-display)",
      letterSpacing: "var(--tracking-display)",
      fontWeight: "var(--weight-display)"
    }
  }), /*#__PURE__*/React.createElement(RevealBlock, {
    delay: 270,
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.6,
      margin: 0,
      maxWidth: "58ch",
      color: "var(--text-body)"
    }
  }, "Your customers expect your product to connect with the systems they already use. Building those connectors internally takes specialized expertise and ongoing attention. We handle that layer so your team can stay focused on the product only you can build.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(WBtn, {
    size: "xl",
    icon: "calendar-dot"
  }, "Talk to us"), /*#__PURE__*/React.createElement(WBtn, {
    size: "xl",
    variant: "outlined",
    icon: "arrow-right",
    onClick: () => onNavigate("Connectors")
  }, "See our connectors")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 48,
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement(WStat, {
    value: "4",
    label: "Platform categories covered",
    color: "var(--accent-type-red-lg)"
  }), /*#__PURE__*/React.createElement(WStat, {
    value: "12",
    label: "In the pre-built library",
    color: "var(--accent-type-green-lg)"
  }), /*#__PURE__*/React.createElement(WStat, {
    value: "SOC 2",
    label: "SOC 2 Type II certified",
    color: "var(--accent-type-yellow-lg)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, pillars.map(p => /*#__PURE__*/React.createElement(WCard, {
    key: p.title,
    padding: 24,
    style: {
      display: "flex",
      gap: 16,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      flex: "0 0 40px",
      borderRadius: 12,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: `var(--indisea-${p.tone}-100)`,
      color: `var(--indisea-${p.tone}-700)`
    }
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: p.icon,
    size: "lg"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: "var(--weight-heading)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: "var(--text-muted)",
      marginTop: 8
    }
  }, p.body))))))), /*#__PURE__*/React.createElement(Section, {
    pad: "64px"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The integration layer, handled"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "5fr 7fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-heading)",
      margin: 0
    }
  }, "Your customers' systems, connected to your product"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      marginTop: 24,
      color: "var(--text-muted)"
    }
  }, "Data goes from the end customer to you directly, never through a third party that collects tolls, logs the data or muddies who owns a support issue.")), /*#__PURE__*/React.createElement(DrawnMap, {
    width: 640,
    height: 220,
    paths: [{
      color: "blue",
      points: [[16, 32], [160, 32], [160, 110], [320, 110]]
    }, {
      color: "green",
      points: [[16, 188], [240, 188], [240, 110], [320, 110]]
    }, {
      color: "yellow",
      points: [[320, 110], [470, 110], [470, 40], [640, 40]]
    }, {
      color: "red",
      points: [[320, 110], [520, 110], [520, 180], [640, 180]]
    }]
  }))), /*#__PURE__*/React.createElement(Section, {
    pad: "96px 64px"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Why companies bring us in"), /*#__PURE__*/React.createElement(Reveal, {
    tag: "h2",
    lines: ["The impact of", "partnering with Indisea"],
    style: {
      fontSize: 48,
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-heading)",
      marginBottom: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, reasons.map(r => /*#__PURE__*/React.createElement(WCard, {
    key: r.n,
    padding: 32,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 44,
      fontWeight: "var(--weight-display)",
      color: r.color,
      letterSpacing: "var(--tracking-display)",
      lineHeight: 1
    }
  }, r.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: "var(--weight-heading)",
      letterSpacing: "var(--tracking-heading)",
      lineHeight: 1.2
    }
  }, r.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--text-muted)",
      margin: 0
    }
  }, r.body))))), /*#__PURE__*/React.createElement(Section, {
    pad: "0 64px 72px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "5fr 7fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(ParallaxPhoto, {
    src: PHOTOS + "stock-photo-ethernet-cables-plugged-into-switch.png",
    alt: "Cables plugged into a network switch",
    ratio: 4 / 3,
    position: "50% 50%"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "How the work actually lands"), /*#__PURE__*/React.createElement(Reveal, {
    tag: "h2",
    lines: ["Built once, then", "maintained for good"],
    style: {
      fontSize: 40,
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-heading)"
    }
  }), /*#__PURE__*/React.createElement(RevealBlock, {
    delay: 180,
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      margin: 0,
      color: "var(--text-muted)",
      maxWidth: "52ch"
    }
  }, "A connector is not a one-time delivery. Platforms change their APIs, tighten rate limits and deprecate endpoints, and someone has to be watching when they do. We host it, monitor it and take the escalation."))))), /*#__PURE__*/React.createElement(Section, {
    mode: "green",
    pad: "80px 64px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 48,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(36px, 3.6vw, 48px)",
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-heading)",
      margin: 0,
      color: "var(--text-heading)"
    }
  }, "We're a partner, not a vendor."), /*#__PURE__*/React.createElement(WBtn, {
    size: "lg",
    icon: "calendar-dot",
    style: {
      background: "var(--action-primary)",
      color: "var(--action-primary-text)",
      border: "2px solid transparent"
    }
  }, "Talk to us"))), /*#__PURE__*/React.createElement(Section, {
    tone: "charcoal",
    pad: "96px 64px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "6fr 6fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Customers"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-heading)",
      margin: 0,
      color: "var(--indisea-stone-50)"
    }
  }, "Customers describe us as part of the team"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      marginTop: 24,
      color: "rgba(250,250,249,0.72)",
      maxWidth: "46ch"
    }
  }, "The best-fit customers weren't looking for a vendor to hand work off to. They wanted a team that would operate alongside them and stay accountable beyond the initial build."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(WBtn, {
    size: "lg",
    icon: "calendar-dot"
  }, "Talk to us"))), /*#__PURE__*/React.createElement(WQuote, {
    tone: "charcoal",
    quote: "They are our partner in building out connectors. They feel like an extension of our internal team.",
    role: "Product Manager",
    company: "a PE-backed global tax compliance platform"
  }))));
}
Object.assign(window, {
  HomePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TeamPage.jsx
try { (() => {
const {
  Button: TBtn,
  Card: TCard,
  Icon: TIcon,
  Avatar: TAvatar
} = window.IndiseaDesignSystem_0b3183;

/* Headshots follow the portrait rules: one person, flat brand-color backdrop,
   eye level, deep focus. Square frames, because the sources are square and a
   fixed-height landscape frame would clip the head. Rahul and Sandeep have no
   supplied photograph, so they keep a labeled placeholder rather than a
   substitute: a stand-in headshot would be a fabricated person. */
const TEAM = [{
  name: "Mark Janzen",
  role: "CEO",
  photo: "indisea-founder-mark-janzen-headshot-blue-bg.png",
  bio: "Serial entrepreneur, exited founder and advisor. His company, Applianz Technologies, was acquired by Avalara, where he led multiple programs as VP of Engineering including the Connector Program and the AvaTax UI team.",
  li: "https://www.linkedin.com/in/janzenmark/"
}, {
  name: "Casey Margell",
  role: "COO",
  photo: "indisea-founder-casey-margell-headshot-green-bg.png",
  bio: "Engineering executive who has led engineering teams at numerous high-growth tech companies. At Indisea he handles Operations.",
  li: "https://www.linkedin.com/in/cmargell/"
}, {
  name: "Rohit Ghule",
  role: "CTO",
  photo: "indisea-founder-rohit-ghule-headshot-yellow-bg.png",
  bio: "Wrote Avalara's first tax engine, then went on to run connectors. Co-founded a global staffing firm and has spent years hiring and managing engineering teams across geographies.",
  li: "https://www.linkedin.com/in/rohitghule/"
}, {
  name: "Rahul Aggarwal",
  role: "Head of Engineering",
  bio: "Alumni of Google and Avalara, where he spent 10+ years and led Connector Engineering. Builds high performing teams and has shipped enterprise products end to end.",
  li: "https://www.linkedin.com/in/rahul-aggarwal-9a38a151/"
}, {
  name: "Sandeep Bangad",
  role: "QA Architect",
  bio: "Ran Connector QA at Avalara. Deep knowledge of taxability and an expert in how to integrate with ERP and eCommerce systems.",
  li: "https://www.linkedin.com/in/sandeep-bangad-a04b061b/"
}];
function TeamPage() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    pad: "96px 64px 48px"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Team"), /*#__PURE__*/React.createElement(Reveal, {
    tag: "h1",
    lines: ["Meet the team"],
    style: {
      fontSize: "clamp(40px, 4.4vw, 64px)",
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-heading)"
    }
  }), /*#__PURE__*/React.createElement(RevealBlock, {
    delay: 90,
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.6,
      margin: 0,
      maxWidth: "56ch"
    }
  }, "Alumni of Avalara and Google who have built connectors for leading global FinTechs, eCommerce platforms, ERPs and marketplaces over decades."))), /*#__PURE__*/React.createElement(Section, {
    pad: "0 64px 96px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, TEAM.map(m => /*#__PURE__*/React.createElement(TCard, {
    key: m.name,
    padding: 24,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, m.photo ? /*#__PURE__*/React.createElement(ParallaxPhoto, {
    src: PHOTOS + m.photo,
    alt: m.name,
    ratio: 1,
    radius: "var(--radius-md)"
  }) : /*#__PURE__*/React.createElement(PlaceholderTile, {
    label: "Headshot: " + m.name + " (photo not supplied)",
    height: 220
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: "var(--weight-heading)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: "var(--weight-heading)",
      letterSpacing: "0.02em",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, m.role), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--text-muted)",
      marginTop: 12
    }
  }, m.bio)), /*#__PURE__*/React.createElement("a", {
    href: m.li,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: 13,
      fontWeight: 600,
      textDecoration: "none",
      color: "var(--text-link)"
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "linkedin-logo",
    size: "md"
  }), "LinkedIn")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(TBtn, {
    size: "lg",
    icon: "calendar-dot"
  }, "Talk to us"))), /*#__PURE__*/React.createElement(AltBand, {
    eyebrow: "Where we came from",
    headline: "Alumni of Avalara and Google",
    body: "Between them, the team wrote Avalara's first tax engine, ran its Connector Program and its Connector QA, and led engineering at Google. Applianz Technologies was founded and exited to Avalara.",
    stats: [{
      value: "5",
      label: "Senior operators, no bench",
      color: "var(--accent-type-blue-lg)"
    }, {
      value: "1",
      label: "Exited company, acquired by Avalara",
      color: "var(--accent-type-green-lg)"
    }, {
      value: "3",
      label: "Continents covered through the workday",
      color: "var(--accent-type-yellow-lg)"
    }, {
      value: "24h",
      label: "Typical reply time in a shared Slack channel",
      color: "var(--text-heading)"
    }],
    cta: "Meet us properly"
  }));
}
Object.assign(window, {
  TeamPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TeamPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/shared.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NS = window.IndiseaDesignSystem_0b3183;
const {
  Button,
  Card,
  StatBlock,
  ConnectionMap,
  Testimonial,
  Badge,
  Icon,
  Divider,
  ConnectorTile,
  Chip
} = NS;
const LOGOS = "../../assets/logos/";
function Section({
  children,
  tone = "canvas",
  mode,
  theme,
  tint,
  pad = "96px 64px",
  id,
  style
}) {
  const bg = {
    canvas: "var(--surface-canvas)",
    card: "var(--surface-card)",
    charcoal: "var(--indisea-stone-900)",
    sunken: "var(--surface-sunken)"
  }[tone];
  const attrs = {};
  if (mode) attrs["data-mode"] = mode;
  // a charcoal block IS the dark scope, so the text ramp and --accent-type-*
  // tokens resolve to their dark-canvas values inside it
  if (theme) attrs["data-theme"] = theme;else if (tone === "charcoal") attrs["data-theme"] = "dark";
  if (tint) attrs["data-tint"] = tint;
  const modal = mode || theme;
  return /*#__PURE__*/React.createElement("section", _extends({
    id: id
  }, attrs, {
    style: {
      background: modal ? "var(--surface-canvas)" : bg,
      color: modal ? "var(--text-body)" : tone === "charcoal" ? "var(--indisea-stone-100)" : "var(--text-body)",
      padding: pad,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1312,
      margin: "0 auto"
    }
  }, children));
}

/* A section eyebrow is ALWAYS --text-muted. There is deliberately no color prop:
   colored label text on its own is banned, and --text-muted resolves correctly on
   both canvases anyway. A colored VERDICT is a different element: use the
   .indisea-eyebrow-chip tint chip, which carries its hue as a fill. */
function Eyebrow({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: "var(--weight-heading)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 24
    }
  }, children);
}

/* Block rhythm audit for this kit, per readme.md "70/25/5". Measured by section
   height with the sticky header and site footer excluded, as the rule specifies.
   Verified in-browser, not estimated:
     Home        base 75  alt 18  color  7
     About       base 74  alt 19  color  7
     Customers   base 71  alt 19  color 10
     Connectors  base 75  alt 16  color  9
     Team        base 77  alt 23  color  0
     Contact     base 73  alt 27  color  0
     SITE TOTAL  base 75  alt 20  color  5
   Four of the six pages carry a color block, and never more than one each. Team
   and Contact stay quiet on purpose: a form page and a headshot grid do not want
   a color statement. Every page carries a real alt-mode band in its body, so the
   dark share is never just the footer.

   NOTE on photographs: a card-sized photograph inside a base section counts as
   BASE, because the surrounding block is still the base surface. Only a
   FULL-BLEED photograph counts as an alt-mode block, per readme.md. Adding the
   photo sections pushed base from 73 to 75, so About gained a blue band to keep
   the color share at 5. Re-measure after adding any section. */

function PlaceholderTile({
  label,
  height = 96,
  tone = "stone"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: 12,
      border: "1px dashed var(--border-hairline)",
      borderRadius: "var(--radius-md)",
      background: tone === "dark" ? "rgba(250,250,249,0.04)" : "var(--surface-card)",
      fontSize: 12,
      color: "var(--text-faint)",
      lineHeight: 1.4
    }
  }, label);
}

/* The alt-mode band. Every page needs one in its body so the dark share is a
   compositional block, not just the footer. Roughly 420px, which lands a quiet
   page in the 20-25% alt range. */
function AltBand({
  eyebrow,
  headline,
  body,
  stats = [],
  cta = "Talk to us"
}) {
  const {
    Button: ABtn
  } = window.IndiseaDesignSystem_0b3183;
  return /*#__PURE__*/React.createElement(Section, {
    tone: "charcoal",
    pad: "72px 64px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "6fr 6fr",
      gap: 64,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-heading)",
      margin: 0,
      color: "var(--indisea-stone-50)"
    }
  }, headline), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      marginTop: 24,
      color: "rgba(250,250,249,0.72)",
      maxWidth: "46ch"
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(ABtn, {
    size: "lg",
    icon: "calendar-dot"
  }, cta))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 32,
      paddingTop: 8
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      fontWeight: "var(--weight-display)",
      letterSpacing: "var(--tracking-display)",
      lineHeight: "var(--leading-heading)",
      color: s.color
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(250,250,249,0.68)",
      marginTop: 8,
      lineHeight: 1.45,
      maxWidth: "20ch"
    }
  }, s.label))))));
}

/* ---------------- MOTION ----------------
   Everything here is positional or masked. Nothing animates opacity, per the
   Motion rules in readme.md. */

/* Fires once when an element first crosses into view. Used to start reveals and
   connector draws, so motion is tied to the reader arriving rather than to load.

   WHY THERE IS A RECT CHECK AS WELL AS AN OBSERVER: the page wrapper slides to
   cover, so at the moment a freshly mounted page runs its effects the wrapper is
   still translated a full viewport down and everything inside it is off-screen.
   The observer's first callback therefore reports not-intersecting, and because
   the wrapper moves by ANIMATION rather than by scrolling or layout, no further
   intersection change is guaranteed to be delivered. Reveals could latch hidden
   forever, which is exactly what happened: every masked headline in this kit sat
   at translateY(105%) permanently.

   So: poll the element's own rect for a few frames after mount, which sees
   through the ancestor transform, and keep the observer for genuine
   scroll-into-view later. Either path sets `seen` once and then stops. */
function useInView(ref, margin = "-12% 0px") {
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    let done = false,
      raf = 0,
      tries = 0;
    const mark = () => {
      if (!done) {
        done = true;
        setSeen(true);
      }
    };
    // rect check: survives the covering animation, which the observer does not
    const check = () => {
      if (done) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      // any part of the element inside the viewport, minus the same 12% margin
      if (r.bottom > vh * 0.12 && r.top < vh * 0.88) {
        mark();
        return;
      }
      if (++tries < 90) raf = requestAnimationFrame(check);
    };
    raf = requestAnimationFrame(check);
    let io = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(es => {
        if (es[0].isIntersecting) mark();
      }, {
        rootMargin: margin
      });
      io.observe(el);
    }
    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (io) io.disconnect();
    };
  }, [seen]);
  return seen;
}

/* Text rising through a mask, one line at a time. Each line is FULLY SET and the
   mask is what moves, so the type is never partially present. Pass an array of
   lines: the line break is an authoring decision, not a wrap. */
function Reveal({
  lines,
  tag = "h1",
  style,
  lineStyle
}) {
  const ref = React.useRef(null);
  const on = useInView(ref);
  return React.createElement(tag, {
    ref,
    style: {
      margin: 0,
      ...style
    }
  }, lines.map((l, i) =>
  /*#__PURE__*/
  /* The mask box is padded and the padding cancelled in layout. Display and
     heading leading (0.92 / 0.96) is SMALLER than the glyph box, so a mask
     sized to the line box clips real ink: descenders, commas, accents. The
     translate is 105% of the padded box, so the incoming line is still fully
     hidden. */
  React.createElement("span", {
    key: i,
    style: {
      display: "block",
      overflow: "hidden",
      paddingBlock: "0.22em",
      marginBlock: "-0.22em",
      ...lineStyle
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      transform: on ? "translateY(0)" : "translateY(105%)",
      transition: `transform var(--duration-line) var(--ease-decelerate) ${i * 90}ms`
    }
  }, l))));
}

/* A block of copy revealing as ONE unit. Body paragraphs never go line by line:
   at paragraph length that reads as a mechanism rather than as confidence. */
function RevealBlock({
  children,
  delay = 0,
  style
}) {
  const ref = React.useRef(null);
  const on = useInView(ref);
  // Body leading (1.6) clears the glyph box on its own, but the padding costs
  // nothing and keeps the two primitives consistent.
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      overflow: "hidden",
      paddingBlock: "0.22em",
      marginBlock: "-0.22em",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: on ? "translateY(0)" : "translateY(105%)",
      transition: `transform var(--duration-line) var(--ease-decelerate) ${delay}ms`
    }
  }, children));
}

/* A photograph sitting behind its frame. The frame is a fixed aperture; the image
   travels a little against it, so the frame reads as a window onto something
   behind the canvas. --parallax-shift is 8%, deliberately small. */
function ParallaxPhoto({
  src,
  alt = "",
  ratio = 1,
  radius = "var(--radius-lg)",
  position = "50% 50%",
  style
}) {
  const ref = React.useRef(null);
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        // -1 when the frame is entering at the bottom, +1 when it is leaving at the top
        const prog = 1 - 2 * ((r.top + r.height / 2) / window.innerHeight);
        setP(Math.max(-1, Math.min(1, prog)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: radius,
      aspectRatio: String(ratio),
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: "absolute",
      top: "-8%",
      left: 0,
      width: "100%",
      height: "116%",
      objectFit: "cover",
      objectPosition: position,
      display: "block",
      transform: `translateY(calc(${p} * var(--parallax-shift) * -1))`,
      willChange: "transform"
    }
  }));
}

/* Connector lines drawing themselves as the reader scrolls. Every path is drawn
   from its ORIGIN toward its destination, which is the order the points are
   written in. Terminal nodes scale up from their own center as the line lands. */
function DrawnMap({
  paths,
  width = 640,
  height = 220,
  strokeWidth = 8,
  radius = 16,
  canvas = "var(--surface-canvas)"
}) {
  const ref = React.useRef(null);
  const on = useInView(ref, "-20% 0px");
  const COLORS = {
    blue: "var(--indisea-sky-blue)",
    green: "var(--indisea-link-green)",
    yellow: "var(--indisea-signal-yellow)",
    red: "var(--indisea-node-red)"
  };
  const d = pts => {
    let out = `M ${pts[0][0]} ${pts[0][1]}`;
    for (let i = 1; i < pts.length - 1; i++) {
      const [px, py] = pts[i - 1],
        [x, y] = pts[i],
        [nx, ny] = pts[i + 1];
      const inV = Math.abs(y - py) > Math.abs(x - px);
      const r = Math.min(radius, Math.abs(inV ? y - py : x - px) / 2, Math.abs(inV ? nx - x : ny - y) / 2);
      const s = inV ? [x, y - Math.sign(y - py) * r] : [x - Math.sign(x - px) * r, y];
      const e = inV ? [x + Math.sign(nx - x) * r, y] : [x, y + Math.sign(ny - y) * r];
      out += ` L ${s[0]} ${s[1]} Q ${x} ${y} ${e[0]} ${e[1]}`;
    }
    const last = pts[pts.length - 1];
    return out + ` L ${last[0]} ${last[1]}`;
  };
  const len = pts => pts.reduce((a, p, i) => i ? a + Math.abs(p[0] - pts[i - 1][0]) + Math.abs(p[1] - pts[i - 1][1]) : 0, 0) + 40;
  return /*#__PURE__*/React.createElement("svg", {
    ref: ref,
    viewBox: `0 0 ${width} ${height}`,
    width: "100%",
    style: {
      display: "block",
      height: "auto",
      overflow: "visible"
    },
    fill: "none"
  }, /*#__PURE__*/React.createElement("g", {
    strokeWidth: strokeWidth,
    strokeLinecap: "round"
  }, paths.map((p, i) => {
    const L = len(p.points);
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: d(p.points),
      stroke: COLORS[p.color],
      strokeDasharray: L,
      strokeDashoffset: on ? 0 : L,
      style: {
        transition: `stroke-dashoffset var(--duration-path) var(--ease-standard) ${i * 120}ms`
      }
    });
  })), /*#__PURE__*/React.createElement("g", null, paths.map((p, i) => {
    // A node only marks a real destination: a path leaving the frame needs none.
    const [ex, ey] = p.points[p.points.length - 1];
    if (ex >= width || ey >= height || ex <= 0 || ey <= 0) return null;
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: ex,
      cy: ey,
      r: strokeWidth * 1.75 / 2 + 4,
      fill: COLORS[p.color],
      style: {
        transformBox: "fill-box",
        transformOrigin: "center",
        transform: on ? "scale(1)" : "scale(0)",
        transition: `transform var(--duration-fast) var(--ease-decelerate) ${900 + i * 120}ms`
      }
    });
  })));
}
const PHOTOS = "../../assets/Image%20Library/";
Object.assign(window, {
  Section,
  Eyebrow,
  PlaceholderTile,
  AltBand,
  LOGOS,
  PHOTOS,
  NS,
  useInView,
  Reveal,
  RevealBlock,
  ParallaxPhoto,
  DrawnMap
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.NumberedList = __ds_scope.NumberedList;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Snackbar = __ds_scope.Snackbar;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.ConnectionMap = __ds_scope.ConnectionMap;

__ds_ns.ConnectorLine = __ds_scope.ConnectorLine;

__ds_ns.AppBar = __ds_scope.AppBar;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ConnectorTile = __ds_scope.ConnectorTile;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Testimonial = __ds_scope.Testimonial;

})();
