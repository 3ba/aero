import type { ReactNode } from "react";

export interface AeroWindowProps {
  title?: ReactNode;
  w?: number;
  toolbar?: ReactNode;
  children?: ReactNode;
}

export function AeroWindow({ title = "Untitled", w = 480, toolbar, children }: AeroWindowProps) {
  return (
    <div className="glass glass-static" style={{ width: w, borderRadius: 16, overflow: "hidden", padding: 0 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 14px",
          borderBottom: "1px solid var(--t-glass-border)",
          background: "linear-gradient(180deg, rgba(255,255,255,0.50), rgba(255,255,255,0.12))",
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          {["#ef4444", "#f59e0b", "#22c55e"].map((c, i) => (
            <div
              key={i}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: `radial-gradient(circle at 30% 30%, white, ${c} 70%)`,
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 2px rgba(0,40,80,0.3)",
              }}
            />
          ))}
        </div>
        <div className="aero-ink" style={{ flex: 1, textAlign: "center", fontSize: 13, fontWeight: 600 }}>
          {title}
        </div>
        <div style={{ width: 42 }} />
      </div>
      {toolbar && (
        <div
          style={{
            display: "flex",
            gap: 8,
            padding: "8px 14px",
            borderBottom: "1px solid var(--t-glass-border)",
            background: "rgba(255,255,255,0.08)",
          }}
        >
          {toolbar}
        </div>
      )}
      <div style={{ padding: 18 }}>{children}</div>
    </div>
  );
}
