/* @ds-bundle: {"format":4,"namespace":"WarmPopDesignSystem_fcb321","components":[{"name":"Headline","sourcePath":"components/brand/Headline.jsx"},{"name":"Ribbon","sourcePath":"components/brand/Ribbon.jsx"},{"name":"Sticker","sourcePath":"components/brand/Sticker.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"FeatureCard","sourcePath":"components/content/FeatureCard.jsx"},{"name":"Media","sourcePath":"components/content/Media.jsx"},{"name":"ProductCard","sourcePath":"components/content/ProductCard.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"ServiceItem","sourcePath":"components/content/ServiceItem.jsx"},{"name":"StatTile","sourcePath":"components/content/StatTile.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Headline.jsx":"3b0d98c2b764","components/brand/Ribbon.jsx":"bb9cd5cfef48","components/brand/Sticker.jsx":"06ce6f2c1d68","components/content/Card.jsx":"d3142f385256","components/content/FeatureCard.jsx":"18648dd69541","components/content/Media.jsx":"989d7a3fd072","components/content/ProductCard.jsx":"bad0873054b0","components/content/ProjectCard.jsx":"dbde0dcde16c","components/content/ServiceItem.jsx":"9d0f4e8523e6","components/content/StatTile.jsx":"10201f1bb933","components/content/Testimonial.jsx":"a49676fbcbed","components/core/Badge.jsx":"c38c15976f0c","components/core/Button.jsx":"04862c281e5e","components/core/Icon.jsx":"79a62a3c4d73","components/core/IconButton.jsx":"5c282c5f91a6","components/core/Tag.jsx":"fb2bffa106d0","components/feedback/Dialog.jsx":"6b8cce32e860","components/feedback/Toast.jsx":"bd45b14d8283","components/feedback/Tooltip.jsx":"04d5a3ef6e4e","components/forms/Checkbox.jsx":"219747aa3202","components/forms/Input.jsx":"2d173880dca9","components/forms/Radio.jsx":"a5d6285aaeb6","components/forms/Select.jsx":"e61ad1cd6cf1","components/forms/Switch.jsx":"bbe8e396361a","components/navigation/NavBar.jsx":"7fd4b3a95f3b","components/navigation/Tabs.jsx":"6f797f4ebb02"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WarmPopDesignSystem_fcb321 = window.WarmPopDesignSystem_fcb321 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Headline.jsx
try { (() => {
function Headline({
  lines = [],
  script,
  size = 'var(--fs-mega)',
  color = 'var(--green-500)',
  scriptColor = 'var(--pink-500)',
  align = 'left',
  as = 'h1',
  style = {}
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: 'var(--display-stretch)',
      lineHeight: 'var(--display-leading)',
      letterSpacing: 'var(--display-tracking)',
      textTransform: 'uppercase',
      fontSize: size,
      color,
      textAlign: align,
      ...style
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'block'
    }
  }, l, script && i === lines.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-script)',
      fontWeight: 400,
      textTransform: 'none',
      letterSpacing: 0,
      fontStretch: 'normal',
      fontSize: '0.78em',
      color: scriptColor,
      marginLeft: '-0.12em',
      transform: 'rotate(-8deg) translateY(0.12em)'
    }
  }, script))));
}
Object.assign(__ds_scope, { Headline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Headline.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
const TONES = {
  cream: {
    bg: 'var(--cream-50)',
    fg: 'var(--ink-800)',
    ac: 'var(--green-500)'
  },
  warm: {
    bg: 'var(--mint-100)',
    fg: 'var(--ink-800)',
    ac: 'var(--green-500)'
  },
  blush: {
    bg: 'var(--pink-100)',
    fg: 'var(--ink-800)',
    ac: 'var(--pink-600)'
  },
  amber: {
    bg: 'var(--yellow-300)',
    fg: 'var(--ink-900)',
    ac: 'var(--green-700)'
  },
  green: {
    bg: 'var(--green-500)',
    fg: 'var(--white)',
    ac: 'var(--white)'
  },
  pink: {
    bg: 'var(--pink-500)',
    fg: 'var(--white)',
    ac: 'var(--white)'
  },
  yellow: {
    bg: 'var(--yellow-500)',
    fg: 'var(--ink-900)',
    ac: 'var(--ink-900)'
  },
  celadon: {
    bg: 'var(--celadon-300)',
    fg: 'var(--ink-900)',
    ac: 'var(--green-700)'
  }
};
function Card({
  tone = 'cream',
  padding = 'var(--card-pad)',
  radius = 'var(--radius-card)',
  interactive,
  onClick,
  children,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const t = TONES[tone] || TONES.cream;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: t.bg,
      color: t.fg,
      padding,
      borderRadius: radius,
      cursor: interactive ? 'pointer' : undefined,
      transform: interactive && hover ? 'translateY(var(--hover-lift))' : 'none',
      boxShadow: interactive && hover ? 'var(--shadow-md)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-pop), box-shadow var(--dur-base)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureCard.jsx
try { (() => {
const TONES = {
  cream: {
    bg: 'var(--cream-50)',
    fg: 'var(--ink-800)',
    ac: 'var(--green-500)'
  },
  warm: {
    bg: 'var(--mint-100)',
    fg: 'var(--ink-800)',
    ac: 'var(--green-500)'
  },
  blush: {
    bg: 'var(--pink-100)',
    fg: 'var(--ink-800)',
    ac: 'var(--pink-600)'
  },
  amber: {
    bg: 'var(--yellow-300)',
    fg: 'var(--ink-900)',
    ac: 'var(--green-700)'
  },
  green: {
    bg: 'var(--green-500)',
    fg: 'var(--white)',
    ac: 'var(--white)'
  },
  pink: {
    bg: 'var(--pink-500)',
    fg: 'var(--white)',
    ac: 'var(--white)'
  },
  yellow: {
    bg: 'var(--yellow-500)',
    fg: 'var(--ink-900)',
    ac: 'var(--ink-900)'
  },
  celadon: {
    bg: 'var(--celadon-300)',
    fg: 'var(--ink-900)',
    ac: 'var(--green-700)'
  }
};
function FeatureCard({
  index,
  title,
  body,
  tone = 'celadon',
  tilt = 0,
  media,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const t = TONES[tone] || TONES.celadon;
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      minHeight: 300,
      padding: 22,
      borderRadius: 'var(--radius-lg)',
      background: t.bg,
      color: t.fg,
      transform: 'rotate(' + (hover ? 0 : tilt) + 'deg)' + (hover ? ' translateY(-6px)' : ''),
      boxShadow: 'var(--shadow-md)',
      transition: 'transform var(--dur-slow) var(--ease-pop)',
      ...style
    }
  }, index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'flex-start',
      padding: '3px 10px',
      borderRadius: 999,
      border: '1.2px solid currentColor',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600
    }
  }, String(index).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display-alt)',
      fontWeight: 400,
      fontSize: 28,
      lineHeight: 1,
      letterSpacing: '-.01em'
    }
  }, title), media, body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'auto 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.45
    }
  }, body));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Media.jsx
try { (() => {
const BG = {
  mint: 'var(--mint-200)',
  pink: 'var(--pink-200)',
  green: 'var(--green-100)',
  yellow: 'var(--yellow-300)',
  celadon: 'var(--celadon-300)',
  cream: 'var(--cream-200)'
};
function Media({
  src,
  alt = '',
  label,
  ratio = '4 / 3',
  tone = 'mint',
  radius = 'var(--radius-md)',
  sticker,
  style = {}
}) {
  const box = {
    position: 'relative',
    width: '100%',
    aspectRatio: ratio,
    borderRadius: radius,
    overflow: 'hidden',
    background: BG[tone] || tone,
    boxShadow: sticker ? 'var(--shadow-sticker)' : 'none',
    ...style
  };
  if (src) return /*#__PURE__*/React.createElement("div", {
    style: box
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...box,
      backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,.28) 0 2px, transparent 2px 14px)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      padding: 12,
      textAlign: 'center',
      fontFamily: 'ui-monospace, monospace',
      fontSize: 11,
      color: 'var(--ink-700)',
      opacity: .75
    }
  }, label));
}
Object.assign(__ds_scope, { Media });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Media.jsx", error: String((e && e.message) || e) }); }

// components/content/StatTile.jsx
try { (() => {
const T = {
  mint: ['var(--mint-200)', 'var(--green-500)', 'var(--ink-800)'],
  pink: ['var(--pink-300)', 'var(--green-700)', 'var(--green-700)'],
  amber: ['var(--yellow-500)', 'var(--green-700)', 'var(--ink-900)'],
  blush: ['var(--pink-100)', 'var(--pink-600)', 'var(--ink-800)']
};
function StatTile({
  value,
  label,
  tone = 'mint',
  style = {}
}) {
  const [bg, fg, lc] = T[tone] || T.mint;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      padding: '18px 20px',
      borderRadius: 'var(--radius-md)',
      background: bg,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '80%',
      fontSize: 44,
      lineHeight: .9,
      color: fg
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: lc,
      whiteSpace: 'pre-line'
    }
  }, label));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
function Testimonial({
  quote,
  name,
  role,
  avatar,
  tone = 'blush',
  style = {}
}) {
  const bg = tone === 'warm' ? 'var(--mint-100)' : tone === 'cream' ? 'var(--cream-50)' : 'var(--pink-100)';
  const initials = (name || '').split(' ').map(p => p[0]).join('').slice(0, 2);
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: 22,
      borderRadius: 'var(--radius-md)',
      background: bg,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 44,
      lineHeight: .5,
      height: 18,
      color: 'var(--green-500)'
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--ink-900)',
      textWrap: 'pretty'
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 'auto'
    }
  }, avatar ? /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "",
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--green-500)',
      color: 'var(--white)',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 13
    }
  }, initials), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)'
    }
  }, "\u2014 ", name), role && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, role))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const SRC = 'https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js';
let loading = null;
function loadLucide() {
  if (typeof window === 'undefined') return Promise.resolve(null);
  if (window.lucide && window.lucide.icons) return Promise.resolve(window.lucide);
  if (!loading) loading = new Promise(res => {
    const s = document.createElement('script');
    s.src = SRC;
    s.async = true;
    s.onload = () => res(window.lucide);
    s.onerror = () => res(null);
    document.head.appendChild(s);
  });
  return loading;
}
const pascal = n => n.replace(/(^|-)([a-z0-9])/g, (_, __, c) => c.toUpperCase());
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  fill = 'none',
  style = {},
  title
}) {
  const [, force] = React.useState(0);
  const lib = typeof window !== 'undefined' && window.lucide && window.lucide.icons;
  React.useEffect(() => {
    if (!lib) loadLucide().then(() => force(x => x + 1));
  }, [lib]);
  const node = lib ? lib[pascal(name)] : null;
  const kids = node ? node[0] === 'svg' ? node[2] : node : [];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: title ? 'img' : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : true,
    style: {
      display: 'inline-block',
      flex: 'none',
      verticalAlign: 'middle',
      ...style
    }
  }, kids.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Ribbon.jsx
try { (() => {
const T = {
  yellow: ['var(--yellow-500)', 'var(--ink-900)'],
  green: ['var(--green-500)', 'var(--white)'],
  pink: ['var(--pink-500)', 'var(--white)'],
  ink: ['var(--ink-900)', 'var(--cream-100)']
};
function Ribbon({
  text = 'Made with love',
  tone = 'yellow',
  angle = -3,
  speed = 28,
  reverse,
  separator = 'asterisk',
  size = 22,
  style = {}
}) {
  const [bg, fg] = T[tone] || T.yellow;
  const items = Array.from({
    length: 10
  });
  const row = items.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 22,
      paddingRight: 22
    }
  }, /*#__PURE__*/React.createElement("span", null, text), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: separator,
    size: size * 0.8
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      background: bg,
      color: fg,
      transform: 'rotate(' + angle + 'deg)',
      margin: '0 -4%',
      padding: '10px 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: 'max-content',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-display-alt)',
      fontSize: size,
      lineHeight: 1,
      textTransform: 'lowercase',
      animation: 'wp-marquee ' + speed + 's linear infinite' + (reverse ? ' reverse' : '')
    }
  }, row, row));
}
Object.assign(__ds_scope, { Ribbon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Ribbon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Sticker.jsx
try { (() => {
const T = {
  green: ['var(--green-500)', 'var(--white)'],
  pink: ['var(--pink-200)', 'var(--pink-600)'],
  blush: ['var(--pink-100)', 'var(--green-500)'],
  yellow: ['var(--yellow-500)', 'var(--ink-900)'],
  celadon: ['var(--celadon-300)', 'var(--green-700)']
};
function Sticker({
  text = 'made with care • made with care • ',
  center,
  icon,
  tone = 'blush',
  size = 120,
  spin = true,
  tilt = 0,
  style = {}
}) {
  const id = 'wp-stk-' + React.useId().replace(/:/g, '');
  const [bg, fg] = T[tone] || T.blush;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      flex: 'none',
      borderRadius: '50%',
      background: bg,
      color: fg,
      boxShadow: '0 0 0 4px var(--white)',
      transform: 'rotate(' + tilt + 'deg)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: size,
    height: size,
    style: {
      position: 'absolute',
      inset: 0,
      animation: spin ? 'wp-spin 18s linear infinite' : 'none'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: id,
    d: "M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
  })), /*#__PURE__*/React.createElement("text", {
    fill: "currentColor",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 9.2,
      fontWeight: 700,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("textPath", {
    href: '#' + id,
    textLength: "230"
  }, text))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '26%',
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: size * 0.085,
      lineHeight: 1.15,
      textTransform: 'uppercase'
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size * 0.28
  }) : center));
}
Object.assign(__ds_scope, { Sticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Sticker.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceItem.jsx
try { (() => {
function ServiceItem({
  icon = 'sparkles',
  title,
  description,
  layout = 'stack',
  style = {}
}) {
  if (layout === 'inline') return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--ink-900)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: "var(--green-500)"
  }), title);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 44,
      height: 44,
      flex: 'none',
      borderRadius: '50%',
      background: 'var(--pink-300)',
      color: 'var(--green-700)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--ink-900)',
      marginBottom: 3
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      lineHeight: 1.4,
      color: 'var(--ink-700)'
    }
  }, description)));
}
Object.assign(__ds_scope, { ServiceItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const T = {
  blush: {
    bg: 'var(--pink-100)',
    fg: 'var(--pink-600)',
    bd: 'transparent'
  },
  mint: {
    bg: 'var(--green-100)',
    fg: 'var(--green-600)',
    bd: 'transparent'
  },
  sun: {
    bg: 'var(--yellow-500)',
    fg: 'var(--ink-900)',
    bd: 'transparent'
  },
  green: {
    bg: 'var(--green-500)',
    fg: 'var(--white)',
    bd: 'transparent'
  },
  outline: {
    bg: 'transparent',
    fg: 'currentColor',
    bd: 'currentColor'
  },
  success: {
    bg: 'var(--status-success-soft)',
    fg: 'var(--status-success)',
    bd: 'transparent'
  },
  error: {
    bg: 'var(--status-error-soft)',
    fg: 'var(--status-error)',
    bd: 'transparent'
  }
};
function Badge({
  tone = 'blush',
  icon,
  children,
  style = {}
}) {
  const t = T[tone] || T.blush;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 24,
      padding: '0 11px',
      borderRadius: 999,
      background: t.bg,
      color: t.fg,
      border: '1.2px solid ' + t.bd,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 'var(--control-h-sm)',
    px: 16,
    fs: 11,
    ic: 14
  },
  md: {
    h: 'var(--control-h-md)',
    px: 22,
    fs: 12.5,
    ic: 16
  },
  lg: {
    h: 'var(--control-h-lg)',
    px: 30,
    fs: 14,
    ic: 18
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--green-500)',
    fg: 'var(--white)',
    hbg: 'var(--green-600)',
    bd: 'transparent'
  },
  pink: {
    bg: 'var(--pink-500)',
    fg: 'var(--white)',
    hbg: 'var(--pink-600)',
    bd: 'transparent'
  },
  sun: {
    bg: 'var(--yellow-500)',
    fg: 'var(--ink-900)',
    hbg: 'var(--yellow-600)',
    bd: 'transparent'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--green-500)',
    hbg: 'var(--green-100)',
    bd: 'var(--green-500)'
  },
  'outline-light': {
    bg: 'transparent',
    fg: 'var(--white)',
    hbg: 'rgba(255,255,255,.16)',
    bd: 'rgba(255,255,255,.85)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--ink-900)',
    hbg: 'transparent',
    bd: 'transparent'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconLeft,
  fullWidth,
  disabled,
  children,
  onClick,
  type = 'button',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const ghost = variant === 'ghost';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick
  }, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      height: s.h,
      padding: ghost ? '0 4px' : '0 ' + s.px + 'px',
      borderRadius: 'var(--radius-pill)',
      border: 'var(--border-w) solid ' + v.bd,
      background: hover && !disabled ? v.hbg : v.bg,
      color: v.fg,
      fontFamily: 'var(--font-body)',
      fontSize: s.fs,
      fontWeight: 600,
      letterSpacing: 'var(--tracking-button)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transform: disabled ? 'none' : press ? 'scale(var(--press-scale))' : hover && !ghost ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-pop), background var(--dur-fast) linear',
      ...style
    }
  }), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.ic
  }), /*#__PURE__*/React.createElement("span", null, children), icon && (ghost ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-grid',
      placeItems: 'center',
      width: s.ic + 6,
      height: s.ic + 6,
      borderRadius: '50%',
      border: '1.5px solid currentColor',
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-pop)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.ic - 4
  })) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.ic
  })));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const T = {
  solid: {
    bg: 'var(--green-500)',
    fg: 'var(--white)',
    bd: 'transparent',
    hbg: 'var(--green-600)'
  },
  pink: {
    bg: 'var(--pink-500)',
    fg: 'var(--white)',
    bd: 'transparent',
    hbg: 'var(--pink-600)'
  },
  soft: {
    bg: 'var(--pink-100)',
    fg: 'var(--pink-600)',
    bd: 'transparent',
    hbg: 'var(--pink-200)'
  },
  outline: {
    bg: 'var(--white)',
    fg: 'var(--green-500)',
    bd: 'var(--green-500)',
    hbg: 'var(--green-100)'
  },
  plain: {
    bg: 'var(--white)',
    fg: 'var(--ink-900)',
    bd: 'var(--ink-200)',
    hbg: 'var(--cream-100)'
  }
};
function IconButton({
  icon,
  label,
  tone = 'solid',
  size = 40,
  badge,
  onClick,
  disabled,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const t = T[tone] || T.solid;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'inline-grid',
      placeItems: 'center',
      width: size,
      height: size,
      flex: 'none',
      borderRadius: '50%',
      border: 'var(--border-w) solid ' + t.bd,
      background: hover ? t.hbg : t.bg,
      color: t.fg,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      padding: 0,
      transform: hover && !disabled ? 'rotate(-8deg) scale(1.06)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-pop), background var(--dur-fast)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.46)
  }), badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -4,
      right: -4,
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      borderRadius: 999,
      background: 'var(--ink-900)',
      color: 'var(--white)',
      fontSize: 10,
      fontWeight: 700,
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-body)'
    }
  }, badge));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/content/ProductCard.jsx
try { (() => {
function ProductCard({
  name,
  description,
  price,
  image,
  imageLabel,
  tone = 'mint',
  quantity = 0,
  onAdd,
  onRemove,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: 10,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--cream-50)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Media, {
    src: image,
    label: imageLabel,
    tone: tone,
    ratio: "1 / 1",
    radius: "var(--radius-md)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '4px 6px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '85%',
      fontSize: 18,
      textTransform: 'uppercase',
      color: 'var(--ink-900)'
    }
  }, name), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--pink-600)',
      marginTop: 6
    }
  }, price)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      padding: '2px 0 6px'
    }
  }, quantity > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "minus",
    label: "Remove one",
    tone: "plain",
    size: 36,
    onClick: onRemove
  }), quantity, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "plus",
    label: "Add one",
    tone: "pink",
    size: 36,
    onClick: onAdd
  })) : /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "sun",
    size: "sm",
    iconLeft: "plus",
    onClick: onAdd
  }, "Add to box")));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  selected,
  onClick,
  tone = 'ink',
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!onClick;
  if (!interactive) {
    const c = tone === 'accent' ? 'var(--green-500)' : tone === 'light' ? 'var(--white)' : 'var(--ink-700)';
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-eyebrow)',
        fontWeight: 600,
        letterSpacing: 'var(--tracking-eyebrow)',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        color: c,
        ...style
      }
    }, children);
  }
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      height: 34,
      padding: '0 16px',
      borderRadius: 999,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      border: 'var(--border-w) solid ' + (selected ? 'var(--green-500)' : 'var(--ink-200)'),
      background: selected ? 'var(--green-500)' : hover ? 'var(--cream-50)' : 'transparent',
      color: selected ? 'var(--white)' : 'var(--ink-800)',
      transition: 'background var(--dur-fast), border-color var(--dur-fast)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
function ProjectCard({
  category,
  title,
  subtitle,
  image,
  imageLabel,
  tone = 'mint',
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      padding: 14,
      background: 'var(--cream-50)',
      borderRadius: 'var(--radius-md)',
      cursor: onClick ? 'pointer' : undefined,
      transform: hover ? 'translateY(var(--hover-lift)) rotate(-.6deg)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-pop)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, null, category), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '4px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '80%',
      fontSize: 26,
      lineHeight: 1,
      textTransform: 'uppercase',
      color: 'var(--green-500)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--ink-800)',
      marginBottom: 6
    }
  }, subtitle), /*#__PURE__*/React.createElement(__ds_scope.Media, {
    src: image,
    label: imageLabel,
    tone: tone,
    ratio: "4 / 5",
    radius: "var(--radius-sm)"
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "arrow-up-right",
    label: 'Open ' + title,
    tone: "outline",
    size: 38,
    style: {
      position: 'absolute',
      right: 22,
      bottom: 22,
      transform: hover ? 'rotate(45deg)' : 'none'
    }
  }));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 520
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 'var(--z-dialog)',
      display: 'grid',
      placeItems: 'center',
      padding: 20,
      background: 'rgba(27,53,32,.42)',
      backdropFilter: 'blur(4px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: width,
      maxHeight: '90vh',
      overflow: 'auto',
      padding: 32,
      borderRadius: 'var(--radius-xl)',
      background: 'var(--cream-50)',
      boxShadow: 'var(--shadow-lg)',
      animation: 'wp-pop-in var(--dur-slow) var(--ease-pop)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    tone: "plain",
    size: 38,
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 18,
      right: 18
    }
  }), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 48px 16px 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '80%',
      fontSize: 34,
      lineHeight: .95,
      textTransform: 'uppercase',
      color: 'var(--green-500)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--ink-800)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      marginTop: 24
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const T = {
  default: 'var(--green-500)',
  success: 'var(--status-success)',
  error: 'var(--status-error)',
  pink: 'var(--pink-500)'
};
function Toast({
  message,
  tone = 'default',
  icon = 'sparkles',
  action,
  onAction,
  onClose,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      minHeight: 52,
      padding: '8px 10px 8px 8px',
      borderRadius: 999,
      background: 'var(--ink-900)',
      color: 'var(--cream-50)',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      animation: 'wp-toast-in var(--dur-slow) var(--ease-pop)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: T[tone] || T.default,
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      paddingRight: 6
    }
  }, message), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--yellow-500)',
      fontFamily: 'inherit',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, action), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 30,
      height: 30,
      borderRadius: '50%',
      border: 'none',
      background: 'rgba(255,255,255,.1)',
      color: 'inherit',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  placement = 'top',
  children
}) {
  const [show, setShow] = React.useState(false);
  const top = placement === 'top';
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      [top ? 'bottom' : 'top']: 'calc(100% + 10px)',
      transform: 'translateX(-50%) ' + (show ? 'scale(1)' : 'scale(.9)'),
      opacity: show ? 1 : 0,
      pointerEvents: 'none',
      padding: '7px 12px',
      borderRadius: 10,
      background: 'var(--ink-900)',
      color: 'var(--cream-50)',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 500,
      whiteSpace: 'nowrap',
      zIndex: 20,
      transition: 'opacity var(--dur-fast), transform var(--dur-base) var(--ease-pop)'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style = {}
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: e => {
      e.preventDefault();
      toggle();
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--ink-800)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": on,
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: 6,
      border: 'var(--border-w) solid ' + (on ? 'var(--green-500)' : 'var(--ink-300)'),
      background: on ? 'var(--green-500)' : 'var(--white)',
      color: 'var(--white)',
      transition: 'all var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-body)',
  fontSize: 13,
  fontWeight: 600,
  color: 'var(--ink-900)',
  marginBottom: 8
};
const hintStyle = err => ({
  fontFamily: 'var(--font-body)',
  fontSize: 12,
  marginTop: 6,
  color: err ? 'var(--status-error)' : 'var(--text-muted)'
});
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  icon,
  multiline,
  rows = 4,
  error,
  hint,
  disabled,
  name,
  style = {}
}) {
  const [focus, setFocus] = React.useState(false);
  const bd = error ? 'var(--status-error)' : focus ? 'var(--green-500)' : 'var(--ink-200)';
  const base = {
    width: '100%',
    boxSizing: 'border-box',
    border: 'var(--border-w) solid ' + bd,
    background: disabled ? 'var(--cream-200)' : 'var(--white)',
    color: 'var(--ink-900)',
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    outline: 'none',
    boxShadow: focus ? '0 0 0 4px var(--pink-100)' : 'none',
    transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
  };
  const common = {
    name,
    placeholder,
    value,
    defaultValue,
    onChange,
    disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, common, {
    style: {
      ...base,
      padding: '14px 18px',
      borderRadius: 'var(--radius-md)',
      resize: 'vertical',
      lineHeight: 1.5
    }
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--ink-500)",
    style: {
      position: 'absolute',
      left: 18,
      top: '50%',
      marginTop: -9
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, common, {
    style: {
      ...base,
      height: 'var(--control-h-md)',
      padding: icon ? '0 20px 0 46px' : '0 20px',
      borderRadius: 'var(--radius-pill)'
    }
  }))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: hintStyle(!!error)
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  disabled,
  name,
  value,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--ink-800)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: '50%',
      border: 'var(--border-w) solid ' + (checked ? 'var(--green-500)' : 'var(--ink-300)'),
      background: 'var(--white)',
      transition: 'border-color var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--green-500)',
      transform: checked ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--dur-base) var(--ease-pop)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-body)',
  fontSize: 13,
  fontWeight: 600,
  color: 'var(--ink-900)',
  marginBottom: 8
};
const hintStyle = err => ({
  fontFamily: 'var(--font-body)',
  fontSize: 12,
  marginTop: 6,
  color: err ? 'var(--status-error)' : 'var(--text-muted)'
});
function Select({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  placeholder,
  disabled,
  error,
  style = {}
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: 'var(--control-h-md)',
      padding: '0 48px 0 20px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      border: 'var(--border-w) solid ' + (error ? 'var(--status-error)' : focus ? 'var(--green-500)' : 'var(--ink-200)'),
      boxShadow: focus ? '0 0 0 4px var(--pink-100)' : 'none',
      background: 'var(--white)',
      color: 'var(--ink-900)',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      outline: 'none'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--green-500)",
    style: {
      position: 'absolute',
      right: 18,
      top: '50%',
      marginTop: -9,
      pointerEvents: 'none'
    }
  })), error && /*#__PURE__*/React.createElement("span", {
    style: hintStyle(true)
  }, error));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style = {}
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--ink-800)',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled,
    style: {
      position: 'relative',
      width: 46,
      height: 26,
      padding: 0,
      borderRadius: 999,
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: on ? 'var(--pink-500)' : 'var(--ink-200)',
      transition: 'background var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 23 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-pop)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  brand = 'Warm\nPop',
  links = [],
  active,
  onNavigate,
  cta,
  actions,
  variant = 'bar',
  style = {}
}) {
  const capsule = variant === 'capsule';
  const linkEls = links.map(l => {
    const label = typeof l === 'string' ? l : l.label;
    const on = active === label;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      type: "button",
      onClick: () => onNavigate && onNavigate(label),
      style: {
        background: 'none',
        border: 'none',
        padding: '6px 2px',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: capsule ? 14 : 12,
        fontWeight: capsule ? 500 : 600,
        letterSpacing: capsule ? 0 : 'var(--tracking-eyebrow)',
        textTransform: capsule ? 'none' : 'uppercase',
        color: on ? 'var(--green-500)' : 'var(--ink-900)',
        boxShadow: on ? 'inset 0 -2px 0 currentColor' : 'none'
      }
    }, label);
  });
  const brandEl = /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onNavigate && onNavigate('home'),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      textAlign: 'left',
      whiteSpace: 'pre-line',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '80%',
      fontSize: capsule ? 26 : 22,
      lineHeight: .9,
      textTransform: 'uppercase',
      color: capsule ? 'var(--pink-500)' : 'var(--green-500)'
    }
  }, brand);
  if (capsule) return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      height: 52,
      padding: '0 26px',
      borderRadius: 999,
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, brandEl, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22
    }
  }, linkEls)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 52,
      padding: '0 8px 0 22px',
      borderRadius: 999,
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      whiteSpace: 'nowrap'
    }
  }, actions));
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      minHeight: 64,
      ...style
    }
  }, brandEl, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36
    }
  }, linkEls), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, actions, cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    icon: cta.icon || 'sparkles',
    onClick: cta.onClick
  }, cta.label)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      borderRadius: 999,
      background: 'var(--cream-200)',
      ...style
    }
  }, items.map(it => {
    const v = typeof it === 'string' ? it : it.value;
    const label = typeof it === 'string' ? it : it.label;
    const on = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => onChange && onChange(v),
      style: {
        height: 38,
        padding: '0 18px',
        border: 'none',
        borderRadius: 999,
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        fontWeight: 600,
        background: on ? 'var(--green-500)' : 'transparent',
        color: on ? 'var(--white)' : 'var(--ink-800)',
        transition: 'background var(--dur-base) var(--ease-out), color var(--dur-fast)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Headline = __ds_scope.Headline;

__ds_ns.Ribbon = __ds_scope.Ribbon;

__ds_ns.Sticker = __ds_scope.Sticker;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.Media = __ds_scope.Media;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.ServiceItem = __ds_scope.ServiceItem;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
