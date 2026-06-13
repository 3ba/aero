export const AERO_THEMES = ["sunrise", "morning", "noon", "dusk", "night"] as const;

export type AeroTheme = (typeof AERO_THEMES)[number];

export type AeroThemeSetting = AeroTheme | "auto";

export interface AeroThemeMeta {
  label: string;
  glyph: string;
  hours: string;
}

export const AERO_THEME_META: Record<AeroTheme, AeroThemeMeta> = {
  sunrise: { label: "Sunrise", glyph: "🌅", hours: "05–08" },
  morning: { label: "Morning", glyph: "🌤", hours: "08–11" },
  noon: { label: "Noon", glyph: "☀️", hours: "11–16" },
  dusk: { label: "Dusk", glyph: "🌇", hours: "16–20" },
  night: { label: "Night", glyph: "🌙", hours: "20–05" },
};

export function resolveAutoTheme(date: Date = new Date()): AeroTheme {
  const h = date.getHours();
  if (h >= 5 && h < 8) return "sunrise";
  if (h >= 8 && h < 11) return "morning";
  if (h >= 11 && h < 16) return "noon";
  if (h >= 16 && h < 20) return "dusk";
  return "night";
}

export function makeRng(seed: number): () => number {
  let s = seed * 9301 + 49297;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}
