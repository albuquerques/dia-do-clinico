/* @ds-bundle: {"format":4,"namespace":"ExperiNciaMedsafeDesignSystem_de775a","components":[{"name":"Button","sourcePath":"components/brand/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"}],"sourceHashes":{"components/brand/Button.jsx":"c9ad215a60e1","components/brand/Eyebrow.jsx":"44b70d0397be","components/brand/Logo.jsx":"e1fddb757029"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ExperiNciaMedsafeDesignSystem_de775a = window.ExperiNciaMedsafeDesignSystem_de775a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Experiência Medsafe — Button
 * Slab-label CTA. Primary is solid teal on ink; secondary is an
 * outline on dark grounds; ghost is text-only. Corners are modest,
 * not pill.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '12px'
    },
    md: {
      padding: '13px 24px',
      fontSize: '14px'
    },
    lg: {
      padding: '17px 34px',
      fontSize: '15px'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-mono)',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-sm)',
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    textDecoration: 'none',
    lineHeight: 1,
    transition: 'background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--on-brand)',
      boxShadow: 'var(--glow-teal-sm)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--paper)',
      borderColor: 'var(--border-on-dark)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--teal-400)'
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    disabled: as === 'button' ? disabled : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Experiência Medsafe — Eyebrow
 * The wide-tracked mono kicker used above headings (the "EXPERIÊNCIA"
 * lockup feel). Renders uppercase, letter-spaced, teal by default.
 */
function Eyebrow({
  children,
  tone = 'teal',
  style = {},
  ...rest
}) {
  const tones = {
    teal: 'var(--teal-400)',
    paper: 'var(--paper)',
    muted: 'var(--slate)',
    dark: 'var(--teal-600)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 400,
      fontSize: '0.75rem',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: tones[tone] || tones.teal,
      display: 'inline-block',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Experiência Medsafe — Logo
 * Renders the official horizontal lockup (or the book symbol) from the
 * brand SVG assets. Assets must be reachable at `assetBase` — copy the
 * files from this design system's /assets folder into the consuming
 * project. Never reconstruct the wordmark by hand.
 */
function Logo({
  variant = 'negative',
  symbol = false,
  assetBase = '/assets',
  height = 40,
  alt = 'Experiência Medsafe',
  style = {},
  ...rest
}) {
  const file = symbol ? 'book-mark.svg' : variant === 'positive' ? 'logo-horizontal-positive.svg' : 'logo-horizontal-negative.svg';
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${assetBase}/${file}`,
    alt: alt,
    style: {
      height: typeof height === 'number' ? `${height}px` : height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

})();
