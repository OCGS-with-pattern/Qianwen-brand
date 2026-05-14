const VARIANTS = new Set(["player-cat", "cat-head", "cat-search"]);
const THEMES = new Set(["color", "dark", "light", "mono"]);
const MOTIONS = new Set(["idle", "enter", "loader", "pulse", "success", "error", "reveal"]);
const SIZES = new Set(["xs", "sm", "md", "lg", "xl"]);
const SCRIPT_URL = document.currentScript?.src || new URL("shortdrama-cat-motion.js", document.baseURI).href;
const BASE_URL = new URL("../", SCRIPT_URL);
const CSS_URL = new URL("shortdrama-cat-motion.css", SCRIPT_URL);

function assetUrl(variant) {
  return new URL(`png/${variant}-512.png`, BASE_URL).href;
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
    this.setAttribute("variant", VARIANTS.has(value) ? value : "player-cat");
  }

  get theme() {
    return this.getAttribute("theme") || "color";
  }

  set theme(value) {
    this.setAttribute("theme", THEMES.has(value) ? value : "color");
  }

  get motion() {
    return this.getAttribute("motion") || "idle";
  }

  set motion(value) {
    this.setAttribute("motion", MOTIONS.has(value) ? value : "idle");
  }

  get size() {
    return this.getAttribute("size") || "md";
  }

  set size(value) {
    this.setAttribute("size", SIZES.has(value) ? value : "md");
  }

  _normalize() {
    if (!VARIANTS.has(this.variant)) this.variant = "player-cat";
    if (!THEMES.has(this.theme)) this.theme = "color";
    if (!MOTIONS.has(this.motion)) this.motion = "idle";
    if (!SIZES.has(this.size)) this.size = "md";
  }

  _sync() {
    const image = this.shadowRoot.querySelector("img");
    if (!image) return;
    const label = this.getAttribute("label") || "短剧猫品牌图形";
    image.src = assetUrl(this.variant);
    image.alt = label;
    image.setAttribute("aria-label", label);
  }

  _render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="${CSS_URL.href}">
      <span class="sdc-stage" part="stage">
        <img class="sdc-mark" part="mark" draggable="false">
        <span class="sdc-expression" part="expression"></span>
      </span>
    `;
  }
}

if (!customElements.get("shortdrama-cat-motion")) {
  customElements.define("shortdrama-cat-motion", ShortdramaCatMotion);
}

window.ShortdramaCatMotion = ShortdramaCatMotion;
