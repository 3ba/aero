import type { CSSProperties } from "react";

export const AVATAR_PALETTES: [string, string][] = [
  ["#38bdf8", "#0284c7"],
  ["#4ade80", "#15803d"],
  ["#22d3ee", "#0e7490"],
  ["#a78bfa", "#6d28d9"],
  ["#fb7185", "#be123c"],
  ["#fbbf24", "#b45309"],
];

type AvatarStyle = CSSProperties & Record<"--av-a" | "--av-b", string>;

export interface AvatarProps {
  name?: string;
  size?: number;
  status?: boolean;
  paletteIndex?: number;
}

export function Avatar({ name = "??", size = 40, status = false, paletteIndex }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const idx =
    paletteIndex !== undefined
      ? paletteIndex
      : name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % AVATAR_PALETTES.length;
  const [a, b] = AVATAR_PALETTES[idx];
  return (
    <div className="aero-avatar" style={{ width: size, height: size, fontSize: size * 0.36, "--av-a": a, "--av-b": b } as AvatarStyle}>
      {initials}
      {status && <div className="aero-avatar-status" />}
    </div>
  );
}

export interface AvatarGroupProps {
  names: string[];
  size?: number;
  max?: number;
}

export function AvatarGroup({ names, size = 36, max = 4 }: AvatarGroupProps) {
  const shown = names.slice(0, max);
  const extra = names.length - shown.length;
  return (
    <div className="aero-avatar-group">
      {shown.map((n) => (
        <Avatar key={n} name={n} size={size} />
      ))}
      {extra > 0 && (
        <div
          className="aero-avatar"
          style={
            {
              width: size,
              height: size,
              fontSize: size * 0.32,
              "--av-a": "rgba(255,255,255,0.45)",
              "--av-b": "rgba(255,255,255,0.20)",
            } as AvatarStyle
          }
        >
          +{extra}
        </div>
      )}
    </div>
  );
}
