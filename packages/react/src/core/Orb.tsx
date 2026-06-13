import type { CSSProperties, ReactNode } from "react";

export type OrbTint = "accent" | "green" | "sky" | "cyan" | "sun" | "rose" | "violet";

export interface OrbProps {
  tint?: OrbTint;
  size?: number;
  glyph?: ReactNode;
  style?: CSSProperties;
}

export function Orb({ tint = "accent", size = 36, glyph, style }: OrbProps) {
  return (
    <div className={`aero-orb aero-orb-${tint}`} style={{ width: size, height: size, ...style }}>
      {glyph != null && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: size * 0.45,
            fontWeight: 600,
            textShadow: "0 1px 2px rgba(0,40,80,0.5)",
            zIndex: 2,
          }}
        >
          {glyph}
        </div>
      )}
    </div>
  );
}
