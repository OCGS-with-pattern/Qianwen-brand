const CSS_TEXT = ":host,\n.shortdrama-cat-motion {\n  --sdc-size: 72px;\n  --sdc-duration: 1400ms;\n  --sdc-ease: cubic-bezier(.22, 1, .36, 1);\n  --sdc-spring: cubic-bezier(.18, .89, .32, 1.16);\n  --sdc-shadow: drop-shadow(0 10px 18px rgb(15 23 42 / .14));\n  --sdc-storyboard-border: rgb(15 23 42 / .16);\n  --sdc-storyboard-ink: rgb(15 23 42 / .56);\n  --sdc-storyboard-paper: rgb(255 255 255 / .92);\n  --sdc-face-left: 30%;\n  --sdc-face-top: 15%;\n  --sdc-face-width: 40%;\n  --sdc-face-height: 28%;\n  display: inline-grid;\n  inline-size: var(--sdc-size);\n  block-size: var(--sdc-size);\n  place-items: center;\n  line-height: 0;\n  contain: layout style;\n  overflow: visible;\n}\n\n:host([size=\"xs\"]),\n.shortdrama-cat-motion[data-size=\"xs\"] {\n  --sdc-size: 24px;\n}\n\n:host([size=\"sm\"]),\n.shortdrama-cat-motion[data-size=\"sm\"] {\n  --sdc-size: 40px;\n}\n\n:host([size=\"md\"]),\n.shortdrama-cat-motion[data-size=\"md\"] {\n  --sdc-size: 72px;\n}\n\n:host([size=\"lg\"]),\n.shortdrama-cat-motion[data-size=\"lg\"] {\n  --sdc-size: 112px;\n}\n\n:host([size=\"xl\"]),\n.shortdrama-cat-motion[data-size=\"xl\"] {\n  --sdc-size: 168px;\n}\n\n:host([variant=\"cat-head\"]),\n.shortdrama-cat-motion[data-variant=\"cat-head\"] {\n  --sdc-face-left: 16%;\n  --sdc-face-top: 26%;\n  --sdc-face-width: 68%;\n  --sdc-face-height: 44%;\n}\n\n:host([variant=\"cat-search\"]),\n.shortdrama-cat-motion[data-variant=\"cat-search\"] {\n  --sdc-face-left: 61%;\n  --sdc-face-top: 15%;\n  --sdc-face-width: 25%;\n  --sdc-face-height: 20%;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n.sdc-stage,\n.sdc-mark {\n  inline-size: 100%;\n  block-size: 100%;\n}\n\n.sdc-stage {\n  position: relative;\n  display: grid;\n  place-items: center;\n  transform-origin: 50% 56%;\n}\n\n.sdc-expression,\n.sdc-stage::after {\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n  z-index: 2;\n}\n\n.sdc-expression {\n  left: var(--sdc-face-left);\n  top: var(--sdc-face-top);\n  inline-size: var(--sdc-face-width);\n  block-size: var(--sdc-face-height);\n  transform-origin: 50% 58%;\n  z-index: 3;\n}\n\n.sdc-expression::before,\n.sdc-expression::after {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n}\n\n.sdc-expression::before {\n  inset: 0;\n  background:\n    radial-gradient(ellipse at 35% 44%, rgb(92 37 12) 0 7%, transparent 8%),\n    radial-gradient(ellipse at 65% 44%, rgb(92 37 12) 0 7%, transparent 8%);\n}\n\n.sdc-expression::after {\n  left: 36%;\n  top: 63%;\n  inline-size: 28%;\n  block-size: 18%;\n  border-bottom: max(1px, calc(var(--sdc-size) * .012)) solid rgb(124 45 18 / .9);\n  border-radius: 0 0 999px 999px;\n}\n\n.sdc-stage::after {\n  display: none;\n  right: -7%;\n  bottom: 3%;\n  inline-size: 42%;\n  block-size: 31%;\n  border: 1px solid var(--sdc-storyboard-border);\n  border-radius: 12%;\n  background:\n    linear-gradient(90deg, transparent 31%, var(--sdc-storyboard-border) 31% 33%, transparent 33% 64%, var(--sdc-storyboard-border) 64% 66%, transparent 66%),\n    linear-gradient(180deg, var(--sdc-storyboard-ink) 0 10%, transparent 10%),\n    radial-gradient(circle at 24% 60%, rgb(249 115 22 / .2), transparent 24%),\n    radial-gradient(circle at 72% 58%, rgb(14 165 233 / .16), transparent 22%),\n    var(--sdc-storyboard-paper);\n  box-shadow: 0 12px 28px rgb(15 23 42 / .13);\n  transform-origin: 30% 70%;\n}\n\n.sdc-mark {\n  object-fit: contain;\n  filter: var(--sdc-shadow);\n  transform-origin: 50% 56%;\n  will-change: opacity, transform, filter;\n}\n\n:host([theme=\"dark\"]) .sdc-mark,\n.shortdrama-cat-motion[data-theme=\"dark\"] .sdc-mark {\n  filter: brightness(.94) contrast(1.04) var(--sdc-shadow);\n}\n\n:host([theme=\"light\"]) .sdc-mark,\n.shortdrama-cat-motion[data-theme=\"light\"] .sdc-mark {\n  filter: brightness(1.06) saturate(1.05) var(--sdc-shadow);\n}\n\n:host([theme=\"mono\"]) .sdc-mark,\n.shortdrama-cat-motion[data-theme=\"mono\"] .sdc-mark {\n  filter: grayscale(1) contrast(1.05) var(--sdc-shadow);\n}\n\n:host([motion=\"enter\"]) .sdc-mark,\n.shortdrama-cat-motion[data-motion=\"enter\"] .sdc-mark {\n  animation: sdc-enter 760ms var(--sdc-spring) both;\n}\n\n:host([motion=\"enter\"]) .sdc-expression,\n.shortdrama-cat-motion[data-motion=\"enter\"] .sdc-expression {\n  animation: sdc-expression-pop 760ms var(--sdc-spring) 90ms both;\n}\n\n:host([motion=\"enter\"]) .sdc-expression::before,\n.shortdrama-cat-motion[data-motion=\"enter\"] .sdc-expression::before,\n:host([motion=\"enter\"]) .sdc-expression::after,\n.shortdrama-cat-motion[data-motion=\"enter\"] .sdc-expression::after {\n  animation: sdc-expression-face-pop 760ms var(--sdc-spring) 110ms both;\n}\n\n:host([motion=\"enter\"]) .sdc-stage::after,\n.shortdrama-cat-motion[data-motion=\"enter\"] .sdc-stage::after {\n  content: \"\";\n  animation: sdc-storyboard-pop 760ms var(--sdc-spring) 120ms both;\n}\n\n:host([motion=\"reveal\"]) .sdc-mark,\n.shortdrama-cat-motion[data-motion=\"reveal\"] .sdc-mark {\n  animation: sdc-reveal 900ms var(--sdc-ease) both;\n}\n\n:host([motion=\"reveal\"]) .sdc-expression,\n.shortdrama-cat-motion[data-motion=\"reveal\"] .sdc-expression {\n  animation: sdc-expression-pop 760ms var(--sdc-spring) 120ms both;\n}\n\n:host([motion=\"reveal\"]) .sdc-expression::before,\n.shortdrama-cat-motion[data-motion=\"reveal\"] .sdc-expression::before,\n:host([motion=\"reveal\"]) .sdc-expression::after,\n.shortdrama-cat-motion[data-motion=\"reveal\"] .sdc-expression::after {\n  animation: sdc-expression-face-pop 760ms var(--sdc-spring) 140ms both;\n}\n\n:host([motion=\"idle\"]) .sdc-stage,\n.shortdrama-cat-motion[data-motion=\"idle\"] .sdc-stage {\n  animation: sdc-idle 3600ms ease-in-out infinite;\n}\n\n:host([motion=\"loader\"]) .sdc-stage,\n.shortdrama-cat-motion[data-motion=\"loader\"] .sdc-stage {\n  animation: sdc-loader 1180ms ease-in-out infinite;\n}\n\n:host([motion=\"loader\"]) .sdc-expression,\n.shortdrama-cat-motion[data-motion=\"loader\"] .sdc-expression {\n  animation: sdc-expression-loader 1180ms ease-in-out infinite;\n}\n\n:host([motion=\"loader\"]) .sdc-expression::before,\n.shortdrama-cat-motion[data-motion=\"loader\"] .sdc-expression::before {\n  opacity: 1;\n  background:\n    linear-gradient(18deg, transparent 29%, rgb(92 37 12 / .95) 30% 38%, transparent 39%) 28% 22% / 28% 24% no-repeat,\n    linear-gradient(-18deg, transparent 29%, rgb(92 37 12 / .95) 30% 38%, transparent 39%) 72% 22% / 28% 24% no-repeat,\n    radial-gradient(ellipse at 35% 50%, rgb(92 37 12) 0 7%, transparent 8%),\n    radial-gradient(ellipse at 65% 50%, rgb(92 37 12) 0 7%, transparent 8%);\n}\n\n:host([motion=\"loader\"]) .sdc-expression::after,\n.shortdrama-cat-motion[data-motion=\"loader\"] .sdc-expression::after {\n  opacity: 1;\n  animation: sdc-expression-mouth-loader 1180ms ease-in-out infinite;\n}\n\n:host([motion=\"loader\"]) .sdc-stage::after,\n.shortdrama-cat-motion[data-motion=\"loader\"] .sdc-stage::after {\n  content: \"\";\n  animation: sdc-storyboard-loader 1180ms ease-in-out infinite;\n}\n\n:host([motion=\"pulse\"]) .sdc-mark,\n.shortdrama-cat-motion[data-motion=\"pulse\"] .sdc-mark,\n.shortdrama-cat-motion[data-hover-motion=\"pulse\"]:hover .sdc-mark {\n  animation: sdc-pulse 820ms var(--sdc-ease) both;\n}\n\n:host([motion=\"pulse\"]) .sdc-expression,\n.shortdrama-cat-motion[data-motion=\"pulse\"] .sdc-expression,\n.shortdrama-cat-motion[data-hover-motion=\"pulse\"]:hover .sdc-expression {\n  animation: sdc-expression-pop 820ms var(--sdc-spring) both;\n}\n\n:host([motion=\"pulse\"]) .sdc-expression::before,\n.shortdrama-cat-motion[data-motion=\"pulse\"] .sdc-expression::before,\n.shortdrama-cat-motion[data-hover-motion=\"pulse\"]:hover .sdc-expression::before,\n:host([motion=\"pulse\"]) .sdc-expression::after,\n.shortdrama-cat-motion[data-motion=\"pulse\"] .sdc-expression::after,\n.shortdrama-cat-motion[data-hover-motion=\"pulse\"]:hover .sdc-expression::after {\n  animation: sdc-expression-face-pop 820ms var(--sdc-spring) both;\n}\n\n:host([motion=\"success\"]) .sdc-mark,\n.shortdrama-cat-motion[data-motion=\"success\"] .sdc-mark {\n  animation: sdc-success 980ms var(--sdc-ease) both;\n}\n\n:host([motion=\"success\"]) .sdc-expression,\n.shortdrama-cat-motion[data-motion=\"success\"] .sdc-expression {\n  animation: sdc-expression-success 980ms var(--sdc-spring) both;\n}\n\n:host([motion=\"success\"]) .sdc-expression::before,\n.shortdrama-cat-motion[data-motion=\"success\"] .sdc-expression::before,\n:host([motion=\"success\"]) .sdc-expression::after,\n.shortdrama-cat-motion[data-motion=\"success\"] .sdc-expression::after {\n  animation: sdc-expression-face-pop 980ms var(--sdc-spring) both;\n}\n\n:host([motion=\"error\"]) .sdc-mark,\n.shortdrama-cat-motion[data-motion=\"error\"] .sdc-mark {\n  animation: sdc-error 720ms ease both;\n}\n\n:host([motion=\"error\"]) .sdc-expression,\n.shortdrama-cat-motion[data-motion=\"error\"] .sdc-expression {\n  animation: sdc-expression-error 720ms ease both;\n}\n\n:host([motion=\"error\"]) .sdc-expression::before,\n.shortdrama-cat-motion[data-motion=\"error\"] .sdc-expression::before {\n  opacity: 1;\n  background:\n    linear-gradient(22deg, transparent 35%, rgb(92 37 12 / .92) 36% 46%, transparent 47%) 27% 34% / 32% 24% no-repeat,\n    linear-gradient(-22deg, transparent 35%, rgb(92 37 12 / .92) 36% 46%, transparent 47%) 73% 34% / 32% 24% no-repeat,\n    radial-gradient(ellipse at 78% 67%, rgb(59 130 246 / .72) 0 6%, transparent 7%);\n}\n\n:host([motion=\"error\"]) .sdc-expression::after,\n.shortdrama-cat-motion[data-motion=\"error\"] .sdc-expression::after {\n  opacity: 1;\n  top: 68%;\n  border-bottom: 0;\n  border-top: max(1px, calc(var(--sdc-size) * .012)) solid rgb(124 45 18 / .9);\n  border-radius: 999px 999px 0 0;\n}\n\n:host([motion=\"error\"]) .sdc-stage::after,\n.shortdrama-cat-motion[data-motion=\"error\"] .sdc-stage::after {\n  content: \"\";\n  border-color: rgb(220 38 38 / .36);\n  animation: sdc-storyboard-error 720ms ease both;\n}\n\n:host([paused]) *,\n:host(.is-paused) *,\n.shortdrama-cat-motion.is-paused * {\n  animation-play-state: paused !important;\n}\n\n@keyframes sdc-enter {\n  0% { opacity: 0; transform: translateY(10%) scale(.76) rotate(-8deg); filter: blur(5px) var(--sdc-shadow); }\n  64% { opacity: 1; transform: translateY(-3%) scale(1.06) rotate(2deg); filter: blur(0) var(--sdc-shadow); }\n  100% { opacity: 1; transform: translateY(0) scale(1) rotate(0); filter: blur(0) var(--sdc-shadow); }\n}\n\n@keyframes sdc-reveal {\n  0% { opacity: 0; transform: scale(.7) rotate(-14deg); clip-path: circle(0% at 68% 70%); }\n  58% { opacity: 1; transform: scale(1.05) rotate(2deg); clip-path: circle(82% at 58% 52%); }\n  100% { opacity: 1; transform: scale(1) rotate(0); clip-path: circle(120% at 50% 50%); }\n}\n\n@keyframes sdc-idle {\n  0%, 100% { transform: translateY(0) rotate(0); }\n  50% { transform: translateY(-3%) rotate(.8deg); }\n}\n\n@keyframes sdc-loader {\n  0% { transform: translateY(0) rotate(0) scale(1); }\n  35% { transform: translateY(-5%) rotate(-5deg) scale(1.03); }\n  70% { transform: translateY(1%) rotate(5deg) scale(.98); }\n  100% { transform: translateY(0) rotate(0) scale(1); }\n}\n\n@keyframes sdc-pulse {\n  0%, 100% { transform: scale(1); filter: var(--sdc-shadow); }\n  42% { transform: scale(1.12); filter: drop-shadow(0 14px 26px rgb(15 23 42 / .18)); }\n}\n\n@keyframes sdc-success {\n  0% { transform: scale(.96); filter: hue-rotate(0deg) var(--sdc-shadow); }\n  42% { transform: scale(1.12); filter: hue-rotate(68deg) saturate(1.35) drop-shadow(0 16px 32px rgb(34 197 94 / .32)); }\n  100% { transform: scale(1); filter: hue-rotate(0deg) var(--sdc-shadow); }\n}\n\n@keyframes sdc-error {\n  0%, 100% { transform: translateX(0); filter: var(--sdc-shadow); }\n  22% { transform: translateX(-5%) rotate(-4deg); filter: hue-rotate(140deg) saturate(1.2) var(--sdc-shadow); }\n  46% { transform: translateX(5%) rotate(4deg); }\n  68% { transform: translateX(-2%) rotate(-2deg); }\n}\n\n@keyframes sdc-expression-pop {\n  0% { opacity: 0; transform: scale(.9); }\n  42% { opacity: .96; transform: scale(1.08); }\n  100% { opacity: 0; transform: scale(1); }\n}\n\n@keyframes sdc-expression-loader {\n  0%, 100% { opacity: .98; transform: scale(1) rotate(0); }\n  38% { opacity: 1; transform: scale(1.04) rotate(-1.5deg); }\n  72% { opacity: .98; transform: scale(.98) rotate(1.5deg); }\n}\n\n@keyframes sdc-expression-success {\n  0% { opacity: 0; transform: scale(.9); }\n  45% { opacity: 1; transform: scale(1.1); }\n  100% { opacity: 0; transform: scale(1); }\n}\n\n@keyframes sdc-expression-error {\n  0% { opacity: 0; transform: scale(.7); }\n  24% { opacity: 1; transform: translateX(-3%) scale(1.04) rotate(-2deg); }\n  48% { opacity: 1; transform: translateX(3%) scale(1.03) rotate(2deg); }\n  100% { opacity: 1; transform: translateX(0) scale(1) rotate(0); }\n}\n\n@keyframes sdc-expression-face-pop {\n  0%, 100% { opacity: 0; }\n  26%, 72% { opacity: 1; }\n}\n\n@keyframes sdc-expression-mouth-loader {\n  0%, 100% { transform: scaleX(.78); }\n  50% { transform: scaleX(1.1); }\n}\n\n@keyframes sdc-storyboard-pop {\n  0% { opacity: 0; transform: translate(-18%, 12%) scale(.5) rotate(-10deg); }\n  62% { opacity: 1; transform: translate(0, 0) scale(1.16) rotate(3deg); }\n  100% { opacity: 0; transform: translate(10%, -8%) scale(.88) rotate(0); }\n}\n\n@keyframes sdc-storyboard-loader {\n  0%, 100% { opacity: .8; transform: translate(0, 0) scale(.94) rotate(0); }\n  46% { opacity: 1; transform: translate(-8%, -4%) scale(1.14) rotate(-3deg); }\n}\n\n@keyframes sdc-storyboard-error {\n  0% { opacity: 0; transform: scale(.72) rotate(0); }\n  25% { opacity: 1; transform: translateX(-6%) scale(1.08) rotate(-6deg); }\n  50% { opacity: 1; transform: translateX(6%) scale(1.08) rotate(6deg); }\n  100% { opacity: .82; transform: translateX(0) scale(1) rotate(0); }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  :host .sdc-stage,\n  :host .sdc-mark,\n  :host .sdc-expression,\n  :host .sdc-expression::before,\n  :host .sdc-expression::after,\n  :host .sdc-stage::after,\n  .shortdrama-cat-motion .sdc-stage,\n  .shortdrama-cat-motion .sdc-mark,\n  .shortdrama-cat-motion .sdc-expression,\n  .shortdrama-cat-motion .sdc-expression::before,\n  .shortdrama-cat-motion .sdc-expression::after,\n  .shortdrama-cat-motion .sdc-stage::after {\n    animation-duration: 1ms !important;\n    animation-iteration-count: 1 !important;\n  }\n}\n";
const BRAND_CAT_VARIANTS = ["player-cat", "cat-head", "cat-search"];
const BRAND_CAT_THEMES = ["color", "dark", "light", "mono"];
const BRAND_CAT_MOTIONS = ["idle", "enter", "loader", "pulse", "success", "error", "reveal"];
const BRAND_CAT_SIZES = ["xs", "sm", "md", "lg", "xl"];
const SCRIPT_URL = document.currentScript?.src || new URL("shortdrama-cat-motion.bundle.js", document.baseURI).href;
const BASE_URL = new URL("../", SCRIPT_URL);
const STYLE_ID = "shortdrama-cat-motion-inline-css";

function normalize(value, values, fallback) {
  return values.includes(value) ? value : fallback;
}

function assetUrl(variant) {
  const cleanVariant = normalize(variant, BRAND_CAT_VARIANTS, "player-cat");
  return new URL("png/" + cleanVariant + "-512.png", BASE_URL).href;
}

function ensureStyle(target) {
  const root = target || document;
  if (root.getElementById?.(STYLE_ID) || root.querySelector?.("#" + STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = CSS_TEXT;
  (root.head || root).appendChild(style);
}

class ShortdramaCatMotion extends HTMLElement {
  static get observedAttributes() {
    return ["variant", "theme", "motion", "size", "paused", "label"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._render();
  }

  connectedCallback() {
    this._normalize();
    this._sync();
  }

  attributeChangedCallback() {
    this._normalize();
    this._sync();
  }

  play(motion = "enter") {
    this.motion = motion;
    this.removeAttribute("paused");
    this.restart();
  }

  restart() {
    this.shadowRoot.querySelectorAll(".sdc-stage, .sdc-mark, .sdc-expression").forEach((el) => {
      el.getAnimations().forEach((animation) => {
        animation.cancel();
        animation.play();
      });
    });
  }

  pause() {
    this.setAttribute("paused", "");
  }

  resume() {
    this.removeAttribute("paused");
  }

  get variant() {
    return this.getAttribute("variant") || "player-cat";
  }

  set variant(value) {
    this.setAttribute("variant", normalize(value, BRAND_CAT_VARIANTS, "player-cat"));
  }

  get theme() {
    return this.getAttribute("theme") || "color";
  }

  set theme(value) {
    this.setAttribute("theme", normalize(value, BRAND_CAT_THEMES, "color"));
  }

  get motion() {
    return this.getAttribute("motion") || "idle";
  }

  set motion(value) {
    this.setAttribute("motion", normalize(value, BRAND_CAT_MOTIONS, "idle"));
  }

  get size() {
    return this.getAttribute("size") || "md";
  }

  set size(value) {
    this.setAttribute("size", normalize(value, BRAND_CAT_SIZES, "md"));
  }

  _normalize() {
    if (!BRAND_CAT_VARIANTS.includes(this.variant)) this.variant = "player-cat";
    if (!BRAND_CAT_THEMES.includes(this.theme)) this.theme = "color";
    if (!BRAND_CAT_MOTIONS.includes(this.motion)) this.motion = "idle";
    if (!BRAND_CAT_SIZES.includes(this.size)) this.size = "md";
  }

  _sync() {
    const image = this.shadowRoot.querySelector(".sdc-mark");
    if (!image) return;
    const label = this.getAttribute("label") || "短剧猫品牌图形";
    image.src = assetUrl(this.variant);
    image.alt = label;
    image.setAttribute("aria-label", label);
  }

  _render() {
    this.shadowRoot.innerHTML = "<style id=\"" + STYLE_ID + "\">" + CSS_TEXT + "</style><span class=\"sdc-stage\" part=\"stage\"><img class=\"sdc-mark\" part=\"mark\" draggable=\"false\"><span class=\"sdc-expression\" part=\"expression\"></span></span>";
  }
}

if (!customElements.get("shortdrama-cat-motion")) {
  customElements.define("shortdrama-cat-motion", ShortdramaCatMotion);
}

ensureStyle(document);
window.ShortdramaCatMotion = ShortdramaCatMotion;
window.ShortdramaCatAssets = {
  variants: BRAND_CAT_VARIANTS,
  themes: BRAND_CAT_THEMES,
  motions: BRAND_CAT_MOTIONS,
  sizes: BRAND_CAT_SIZES,
  assetUrl,
};
