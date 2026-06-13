export interface MiniCalendarProps {
  month?: string;
  activeDay?: number;
  startOffset?: number;
  days?: number;
}

export function MiniCalendar({ month = "June 2026", activeDay = 10, startOffset = 0, days = 30 }: MiniCalendarProps) {
  return (
    <div className="glass glass-static" style={{ padding: 18, width: 252, boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span className="aero-text-shadow" style={{ fontWeight: 600, fontSize: 14 }}>
          {month}
        </span>
        <div style={{ display: "flex", gap: 6 }}>
          <button className="aero-btn aero-btn-icon" style={{ width: 26, height: 26, fontSize: 11 }}>
            ◀
          </button>
          <button className="aero-btn aero-btn-icon" style={{ width: 26, height: 26, fontSize: 11 }}>
            ▶
          </button>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3, fontSize: 11, textAlign: "center" }}>
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={i} className="aero-text-shadow" style={{ opacity: 0.65, fontWeight: 700, padding: "4px 0" }}>
            {d}
          </div>
        ))}
        {Array.from({ length: startOffset }, (_, i) => (
          <div key={`b${i}`} />
        ))}
        {Array.from({ length: days }, (_, i) => {
          const d = i + 1;
          const active = d === activeDay;
          return (
            <div
              key={d}
              className="aero-text-shadow"
              style={{
                padding: "5px 0",
                borderRadius: 8,
                cursor: "pointer",
                fontWeight: active ? 700 : 500,
                background: active
                  ? "linear-gradient(180deg, color-mix(in oklab, var(--t-accent), white 40%), var(--t-accent))"
                  : "transparent",
                boxShadow: active ? "0 2px 8px var(--t-glow), inset 0 1px 0 rgba(255,255,255,0.7)" : "none",
              }}
            >
              {d}
            </div>
          );
        })}
      </div>
    </div>
  );
}
