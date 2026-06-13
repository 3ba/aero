import type { CSSProperties, ReactNode } from "react";

export interface SectionLabelProps {
  children?: ReactNode;
  style?: CSSProperties;
}

export function SectionLabel({ children, style }: SectionLabelProps) {
  return (
    <div
      className="aero-text-shadow"
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "var(--t-text)",
        opacity: 0.85,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export interface RowProps {
  label?: ReactNode;
  value?: ReactNode;
}

export function Row({ label, value }: RowProps) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13, gap: 12 }}>
      <span className="aero-text-shadow" style={{ opacity: 0.9 }}>
        {label}
      </span>
      {value}
    </div>
  );
}

export interface StackProps {
  gap?: number | string;
  row?: boolean;
  wrap?: boolean;
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  style?: CSSProperties;
  children?: ReactNode;
}

export function Stack({ gap = 12, row = false, wrap = false, align, justify, style, children }: StackProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: row ? "row" : "column",
        flexWrap: wrap ? "wrap" : "nowrap",
        gap,
        alignItems: align,
        justifyContent: justify,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
