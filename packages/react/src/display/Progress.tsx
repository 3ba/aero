import type { CSSProperties, ReactNode } from "react";

export interface ProgressProps {
  value?: number;
  label?: ReactNode;
}

export function Progress({ value = 60, label }: ProgressProps) {
  return (
    <div style={{ display: "grid", gap: 6 }}>
      {label && (
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--t-text)" }}>
          <span className="aero-text-shadow" style={{ opacity: 0.85 }}>
            {label}
          </span>
          <span className="aero-text-shadow" style={{ fontWeight: 700 }}>
            {value}%
          </span>
        </div>
      )}
      <div className="aero-progress">
        <div className="aero-progress-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export interface SpinnerProps {
  size?: number;
}

export function Spinner({ size = 36 }: SpinnerProps) {
  return <div className="aero-spinner" style={{ width: size, height: size }} />;
}

export interface SkeletonProps {
  w?: number | string;
  h?: number | string;
  r?: number | string;
  style?: CSSProperties;
}

export function Skeleton({ w = "100%", h = 14, r = 10, style }: SkeletonProps) {
  return <div className="aero-skeleton" style={{ width: w, height: h, borderRadius: r, ...style }} />;
}
