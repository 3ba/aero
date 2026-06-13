import type { ReactNode } from "react";

export type AlertTone = "info" | "success" | "warn" | "danger";

const ICON: Record<AlertTone, string> = { info: "i", success: "✓", warn: "!", danger: "✕" };

export interface AlertProps {
  tone?: AlertTone;
  title?: ReactNode;
  children?: ReactNode;
}

export function Alert({ tone = "info", title, children }: AlertProps) {
  return (
    <div className={`aero-alert aero-alert-${tone}`}>
      <div className="aero-alert-icon">{ICON[tone]}</div>
      <div>
        {title && <div style={{ fontWeight: 700, marginBottom: 2 }}>{title}</div>}
        <div style={{ opacity: 0.9 }}>{children}</div>
      </div>
    </div>
  );
}
