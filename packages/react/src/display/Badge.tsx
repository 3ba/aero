import type { ReactNode } from "react";

export type BadgeTone = "default" | "accent" | "positive" | "warn" | "danger";

const TONE_CLASS: Record<BadgeTone, string> = {
  default: "",
  accent: "aero-badge-accent",
  positive: "aero-badge-positive",
  warn: "aero-badge-warn",
  danger: "aero-badge-danger",
};

export interface BadgeProps {
  tone?: BadgeTone;
  dot?: boolean;
  children?: ReactNode;
}

export function Badge({ tone = "default", dot = false, children }: BadgeProps) {
  return (
    <span className={`aero-badge ${TONE_CLASS[tone]}`.trim()}>
      {dot && <span className="aero-badge-dot" />}
      {children}
    </span>
  );
}
