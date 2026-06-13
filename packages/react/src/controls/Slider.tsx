import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export interface SliderProps {
  defaultValue?: number;
  value?: number;
  min?: number;
  max?: number;
  label?: ReactNode;
  showValue?: boolean;
  unit?: string;
  onChange?: (value: number) => void;
}

export function Slider({ defaultValue = 60, value, min = 0, max = 100, label, showValue = false, unit = "", onChange }: SliderProps) {
  const [internal, setInternal] = useState(defaultValue);
  const isControlled = value !== undefined;
  const v = isControlled ? value : internal;

  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const set = (next: number) => {
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };

  const update = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    set(Math.round(min + pct * (max - min)));
  };

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0]?.clientX : e.clientX;
      if (x != null) update(x);
    };
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", move);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
  }, [min, max, isControlled]);

  const pct = ((v - min) / (max - min)) * 100;

  return (
    <div style={{ display: "grid", gap: 6 }}>
      {(label || showValue) && (
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--t-text)" }}>
          {label && (
            <span className="aero-text-shadow" style={{ opacity: 0.85 }}>
              {label}
            </span>
          )}
          {showValue && (
            <span className="aero-text-shadow" style={{ fontWeight: 700 }}>
              {v}
              {unit}
            </span>
          )}
        </div>
      )}
      <div
        ref={ref}
        className="aero-slider"
        onMouseDown={(e) => {
          dragging.current = true;
          update(e.clientX);
        }}
        onTouchStart={(e) => {
          dragging.current = true;
          const x = e.touches[0]?.clientX;
          if (x != null) update(x);
        }}
      >
        <div className="aero-slider-track">
          <div className="aero-slider-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="aero-slider-thumb" style={{ left: `${pct}%` }} />
      </div>
    </div>
  );
}
