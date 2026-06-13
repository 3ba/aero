import type { ReactNode } from "react";

export interface ModalProps {
  title?: ReactNode;
  actions?: ReactNode;
  w?: number;
  onClose?: () => void;
  children?: ReactNode;
}

export function Modal({ title, actions, w = 380, onClose, children }: ModalProps) {
  return (
    <div className="glass glass-strong glass-static" style={{ width: w, padding: 26, borderRadius: "var(--r-xl)", boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div className="aero-text-shadow" style={{ fontSize: 20, fontWeight: 400 }}>
          {title}
        </div>
        <button className="aero-btn aero-btn-icon" style={{ width: 28, height: 28, fontSize: 11 }} onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="aero-text-shadow" style={{ fontSize: 13.5, lineHeight: 1.55, opacity: 0.9 }}>
        {children}
      </div>
      {actions && <div style={{ display: "flex", gap: 10, marginTop: 22 }}>{actions}</div>}
    </div>
  );
}
