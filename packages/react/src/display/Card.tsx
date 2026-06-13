import type { CSSProperties, ReactNode } from "react";

export interface CardProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  footer?: ReactNode;
  lift?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export function Card({ title, subtitle, footer, lift = true, className = "", style, children }: CardProps) {
  return (
    <div className={`glass ${lift ? "glass-lift" : ""} ${className}`.replace(/\s+/g, " ").trim()} style={{ padding: 24, ...style }}>
      {title && (
        <div style={{ marginBottom: 12 }}>
          <div className="aero-text-shadow" style={{ fontSize: 21, fontWeight: 300, letterSpacing: "0.02em" }}>
            {title}
          </div>
          {subtitle && (
            <div className="aero-text-shadow" style={{ fontSize: 12.5, opacity: 0.75, marginTop: 3 }}>
              {subtitle}
            </div>
          )}
        </div>
      )}
      <div className="aero-text-shadow" style={{ fontSize: 14, lineHeight: 1.55, opacity: 0.94 }}>
        {children}
      </div>
      {footer && <div style={{ marginTop: 18 }}>{footer}</div>}
    </div>
  );
}
