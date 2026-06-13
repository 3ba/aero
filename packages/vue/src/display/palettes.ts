export const AVATAR_PALETTES: [string, string][] = [
  ["#38bdf8", "#0284c7"],
  ["#4ade80", "#15803d"],
  ["#22d3ee", "#0e7490"],
  ["#a78bfa", "#6d28d9"],
  ["#fb7185", "#be123c"],
  ["#fbbf24", "#b45309"],
];

export function initialsOf(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function paletteIndexOf(name: string): number {
  return name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % AVATAR_PALETTES.length;
}
