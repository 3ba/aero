import type { ReactNode } from "react";
import { Orb } from "../core/Orb";

export interface StatProps {
  label?: ReactNode;
  value?: ReactNode;
  delta?: ReactNode;
  up?: boolean;
  glyph?: ReactNode;
}

export function Stat({ label, value, delta, up = true, glyph }: StatProps) {
  return (
    <div className="glass glass-lift" style={{ padding: "18px 20px", display: "flex", gap: 14, alignItems: "center" }}>
      {glyph != null && <Orb tint="accent" size={44} glyph={glyph} />}
      <div style={{ display: "grid", gap: 3 }}>
        <div
          className="aero-text-shadow"
          style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.8 }}
        >
          {label}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 9 }}>
          <span className="aero-text-shadow" style={{ fontSize: 28, fontWeight: 300, lineHeight: 1 }}>
            {value}
          </span>
          {delta && (
            <span
              className="aero-text-shadow"
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: up ? "color-mix(in oklab, var(--t-positive), white 35%)" : "#fda4af",
              }}
            >
              {up ? "▲" : "▼"} {delta}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export interface SparklineProps {
  points?: number[];
  w?: number;
  h?: number;
}

export function Sparkline({ points = [4, 7, 5, 9, 6, 11, 8, 13, 10, 14], w = 120, h = 36 }: SparklineProps) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const px = (i: number) => (i / (points.length - 1)) * w;
  const py = (v: number) => h - ((v - min) / (max - min || 1)) * (h - 4) - 2;
  const d = points.map((v, i) => `${i === 0 ? "M" : "L"}${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(" ");
  return (
    <svg width={w} height={h} style={{ display: "block", overflow: "visible" }}>
      <defs>
        <linearGradient id="aero-spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--t-accent-2)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--t-accent-2)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${d} L${w},${h} L0,${h} Z`} fill="url(#aero-spark-fill)" />
      <path
        d={d}
        fill="none"
        stroke="var(--t-accent-2)"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{ filter: "drop-shadow(0 0 5px var(--t-glow))" }}
      />
    </svg>
  );
}
