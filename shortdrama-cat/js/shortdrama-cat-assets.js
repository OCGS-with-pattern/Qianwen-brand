export const BRAND_CAT_VARIANTS = ["player-cat", "cat-head", "cat-search"];
export const BRAND_CAT_THEMES = ["color", "dark", "light", "mono"];
export const BRAND_CAT_MOTIONS = ["idle", "enter", "loader", "pulse", "success", "error", "reveal"];
export const BRAND_CAT_SIZES = ["xs", "sm", "md", "lg", "xl"];

const DEFAULT_BASE_PATH = "../";

export function normalizeBrandCatVariant(value) {
  return BRAND_CAT_VARIANTS.includes(value) ? value : "player-cat";
}

export function normalizeBrandCatTheme(value) {
  return BRAND_CAT_THEMES.includes(value) ? value : "color";
}

export function normalizeBrandCatMotion(value) {
  return BRAND_CAT_MOTIONS.includes(value) ? value : "idle";
}

export function normalizeBrandCatSize(value) {
  return BRAND_CAT_SIZES.includes(value) ? value : "md";
}

export function brandCatPngUrl(variant = "player-cat", size = 512, basePath = DEFAULT_BASE_PATH) {
  const cleanVariant = normalizeBrandCatVariant(variant);
  const cleanSize = Number.isFinite(Number(size)) ? Number(size) : 512;
  const base = String(basePath || DEFAULT_BASE_PATH).replace(/\/+$/, "");
  return base + "/png/" + cleanVariant + "-" + cleanSize + ".png";
}
