import {
  brandCatPngUrl,
  normalizeBrandCatMotion,
  normalizeBrandCatSize,
  normalizeBrandCatTheme,
  normalizeBrandCatVariant,
} from "./shortdrama-cat-assets.js";

const STYLE_ID = "shortdrama-cat-motion-css";

function resolveScriptBase() {
  const current = document.currentScript?.src || import.meta.url;
  return new URL("../", current).href;
}

export function ensureBrandCatMotionCss(baseUrl = resolveScriptBase()) {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ID)) return;
  const link = document.createElement("link");
  link.id = STYLE_ID;
  link.rel = "stylesheet";
  link.href = new URL("anime/shortdrama-cat-motion.css", baseUrl).href;
  document.head.appendChild(link);
}

function normalizeHoverMotion(value) {
  return value === "pulse" ? value : "";
}

export function createBrandCatMotion(Vue, defaults = {}) {
  if (!Vue?.h || !Vue?.computed || !Vue?.onMounted) {
    throw new Error("createBrandCatMotion requires Vue 3 helpers: h, computed, onMounted.");
  }
  const { h, computed, onMounted } = Vue;
  return {
    name: defaults.name || "BrandCatMotion",
    props: {
      variant: { type: String, default: defaults.variant || "player-cat" },
      theme: { type: String, default: defaults.theme || "color" },
      motion: { type: String, default: defaults.motion || "idle" },
      hoverMotion: { type: String, default: defaults.hoverMotion || "" },
      size: { type: String, default: defaults.size || "md" },
      paused: { type: Boolean, default: false },
      label: { type: String, default: defaults.label || "短剧猫品牌图形" },
      basePath: { type: String, default: () => defaults.basePath || resolveScriptBase() },
      injectCss: { type: Boolean, default: defaults.injectCss !== false },
    },
    setup(props) {
      const normalizedVariant = computed(() => normalizeBrandCatVariant(props.variant));
      const normalizedTheme = computed(() => normalizeBrandCatTheme(props.theme));
      const normalizedMotion = computed(() => normalizeBrandCatMotion(props.motion));
      const normalizedSize = computed(() => normalizeBrandCatSize(props.size));
      const assetSrc = computed(() => brandCatPngUrl(normalizedVariant.value, 512, props.basePath));

      onMounted(() => {
        if (props.injectCss) ensureBrandCatMotionCss(resolveScriptBase());
      });

      return () => h("span", {
        class: ["shortdrama-cat-motion", { "is-paused": props.paused }],
        "data-variant": normalizedVariant.value,
        "data-theme": normalizedTheme.value,
        "data-motion": normalizedMotion.value,
        "data-size": normalizedSize.value,
        "data-hover-motion": normalizeHoverMotion(props.hoverMotion) || undefined,
        role: "img",
        "aria-label": props.label,
      }, [
        h("span", { class: "sdc-stage" }, [
          h("img", {
            class: "sdc-mark",
            src: assetSrc.value,
            alt: props.label,
            draggable: "false",
          }),
        ]),
      ]);
    },
  };
}

export function install(app, options = {}) {
  const Vue = options.Vue || globalThis.Vue;
  const component = createBrandCatMotion(Vue, options);
  app.component(options.name || "BrandCatMotion", component);
}

export default createBrandCatMotion;
