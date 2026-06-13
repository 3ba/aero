import type { ReactNode } from "react";
import { Orb, type OrbTint } from "../core/Orb";
import { Btn } from "../controls/Button";

export interface ToastProps {
  glyph?: ReactNode;
  tint?: OrbTint;
  title?: ReactNode;
  body?: ReactNode;
  action?: ReactNode;
  onAction?: () => void;
}

export function Toast({ glyph = "✓", tint = "green", title, body, action, onAction }: ToastProps) {
  return (
    <div className="aero-toast">
      <Orb tint={tint} size={34} glyph={glyph} />
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700 }}>{title}</div>
        {body && <div style={{ opacity: 0.8, fontSize: 12 }}>{body}</div>}
      </div>
      {action && (
        <Btn size="sm" variant="ghost" style={{ color: "inherit" }} onClick={onAction}>
          {action}
        </Btn>
      )}
    </div>
  );
}
